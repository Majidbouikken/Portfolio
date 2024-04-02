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
    // {
    //   resolve: `gatsby-plugin-pnpm-gatsby-5`,
    //   options: {
    //     projectPath: path.dirname(__dirname), // use parent directory as project root
    //     include: [
    //       `abdelmadjid-portfolio`,
    //       `path/to/my/private/webpack/loaders` // <- resolve from this directory
    //     ],
    //     strict: true
    //   }
    // },
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
    siteUrl: `http://localhost:8000/`,
    available: true,
    location: "Paris, France",
    timezone: "Europe/Paris",
  },
  jsxRuntime: `automatic`,
};

export default config;
