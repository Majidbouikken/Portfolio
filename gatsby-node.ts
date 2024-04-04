import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const path = require('path');

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query Works {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/works/"}}) {
      nodes {
        frontmatter {
          slug
        }
      }
    }
  }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    console.log(node.frontmatter.slug);
    actions.createPage({
      path: `/works/${node.frontmatter.slug}/`,
      component: path.resolve('./src/layout/work-details.tsx'),
      context: { slug: node.frontmatter.slug }
    })
  });
};
