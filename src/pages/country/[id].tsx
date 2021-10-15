import React from "react";
import { useRouter } from "next/router";
import { PageContainer } from "./../../components/Container";
import { HeaderController } from "../../components/HeaderController";
import { GetStaticPaths, GetStaticProps } from "next";
import type { Country } from "./../../types/country";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CountryId(props: { notFound: boolean; country: Country }) {
  const router = useRouter();
  const { id: idCountryFromParam } = router.query as any;
  const { country, notFound } = props;
  if (notFound) {
    return (
      <PageContainer>
        <HeaderController title="Country not found" />
        <h1 style={{ textAlign: "center" }}>
          Country not found {idCountryFromParam}
        </h1>
      </PageContainer>
    );
  }
  if (!country) {
    return (
      <PageContainer>
        <HeaderController title={idCountryFromParam} />
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderController
        title={country.name.common}
        embed={{ hexColor: "#EFE7DD", image: country.flags.png }}
        description={country.name.official}
        additionalKeywords={[country.name.common, country.name.official]}
      />
      <Button variant="contained" onClick={() => router.back()}>
        Back
      </Button>
      <Box mt={10}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img
              src={country.flags.svg}
              alt={country.name.official}
              width="100%"
              height="auto"
              style={{ maxWidth: 600 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mt={3}>
              <Typography variant="h4">{country.name.common}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = (await res.json()) as Country[];
  const paths = countries.map((path) => {
    return {
      params: { name: path.name.common.replace(/\s/g, "-"), id: path.cca2 },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const encodeId = encodeURI(id as string);

  const res = await fetch(`https://restcountries.com/v3.1/name/${encodeId}`);
  const country = await res.json();

  if (!country[0]) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      country: country[0],
    },
  };
};

export default CountryId;
