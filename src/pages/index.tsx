import type { NextPage } from "next";
import { PageContainer } from "./../components/Container";
import type { Country } from "../types/country";
import { CountryCard } from "../components/CountryCard";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Masonry from "react-masonry-css";
import { Button } from "@mui/material";

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1100: 2,
  700: 1,
};
const defaultLimit = 20;
const Home: NextPage<{ countries: Country[] }> = ({ countries }) => {
  const [limit, set_limit] = useState(defaultLimit);

  return (
    <PageContainer>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {countries.slice(0, limit).map((country) => (
          <div key={country.cca2} className="masonry-item">
            <CountryCard
              {...country}
              to={`/country/${encodeURI(country.name.common)}`}
            />
          </div>
        ))}
      </Masonry>

      {limit < countries.length ? (
        <Button
          sx={{ margin: "0 auto" }}
          variant="contained"
          onClick={() =>
            set_limit((currentState) => currentState + defaultLimit)
          }>
          Ver más
        </Button>
      ) : null}
    </PageContainer>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
}

export default Home;
