import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { Country } from "./../types/country";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import type { CountryKeys } from "../types/country";

interface CountryCardProps extends Country {
  onClick?: (country: Country) => void;
  to?: string;
}

export function CountryCard(props: CountryCardProps) {
  const { name, flags, onClick, to } = props;
  return (
    <Link href={to || "/"}>
      <a style={{ color: "inherit", textDecoration: "none" }}>
        <Card>
          <CardActionArea
            onClick={() => {
              if (onClick) onClick(props);
            }}>
            <CardMedia
              loading="lazy"
              width="100%"
              component="img"
              height="auto"
              image={flags.png}
              alt={name.common}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name.common}
              </Typography>
              {(["population", "region", "capital"] as CountryKeys[]).map(
                (key) => (
                  <Typography fontWeight="bold" key={key}>
                    <Box component="span" sx={{ textTransform: "capitalize" }}>
                      {`${key}: `}
                    </Box>
                    <Box component="span" fontWeight="400">
                      {props[key]}
                    </Box>
                  </Typography>
                ),
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Link>
  );
}
