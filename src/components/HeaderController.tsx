import React from "react";
import Header from "next/head";
import { NextPage } from "next";
import { baseUrl } from "../utils/constants";

export interface HeaderControllerProps {
  title?: string;
  embed?: { hexColor?: string; image?: string };
  owner?: string;
  additionalKeywords?: string[];
  description?: string;
}

export const HeaderController: NextPage<HeaderControllerProps> = ({
  title,
  description = "Do you want to find a country? Well, I am here.",
  owner = "Joe",
  additionalKeywords = [],
  embed,
}) => {
  return (
    <Header>
      {title ? (
        <title>{title} | CountryFish</title>
      ) : (
        <title>CountryFish</title>
      )}
      <meta name="description" content={description} />
      <meta name="author" content={owner} />
      <meta
        name="keywords"
        content={`CountryFish, Country${additionalKeywords?.map(
          (k) => `, ${k}`,
        )}`}
      />
      <meta name="theme-color" content={embed?.hexColor || "#EFE7DD"} />
      {embed ? (
        <>
          <meta name="og:site_name" content="CountryFish" />

          <meta name="og:type" content={"website"} />
          <meta name="og:title" content={title || "CountryFish"} />
          <meta name="og:description" content={description} />
          <meta name="twitter:title" content={title || "CountryFish"} />
          <meta name="twitter:description" content={description} />
          {embed.image ? (
            <>
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
            </>
          ) : (
            ""
          )}
          <meta
            name="twitter:image"
            content={embed.image ? embed.image : `${baseUrl}/img/fish.jpg`}
          />

          <meta
            name="og:image"
            content={embed.image ? embed.image : `${baseUrl}/img/fish.jpg`}
          />
        </>
      ) : (
        ""
      )}
    </Header>
  );
};
