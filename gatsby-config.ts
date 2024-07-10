import type { GatsbyConfig } from 'gatsby';

const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/downloadable`,
    //     name: `downloadable`
    //   },
    // },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Dosis`,
            file: `https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fr`, `de`, `ar`],
        defaultLanguage: `en`,
        i18nextOptions: {
          // debug: true,
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
  siteMetadata: {
    siteUrl: `https://abdelmadjid.me`,
    title: `Abdelmadjid's Portfolio`,
    description: `A software engineer's portfolio showcasing professional accomplishments, skills, and projects.`,
    image: `3d-icons/3d-cog.png`,
    available: true,
    location: "Paris, France",
    timezone: "Europe/Paris",
  },
  jsxRuntime: `automatic`,
};

export default config;
