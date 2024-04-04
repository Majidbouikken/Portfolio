import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface QueryResult {
  allFile: {
    nodes: {
      publicURL: string;
      name: string;
    }[];
  };
  site: {
    siteMetadata: {
      siteUrl: string;
    }
  }
}

function findPublicURLByName(data: QueryResult, name: string): string | undefined {
  const { allFile, site } = data;
  const { nodes } = allFile;
  const { siteMetadata } = site;
  const { siteUrl } = siteMetadata;
  
  const foundNode = nodes.find(node => node.name === name);

  return foundNode ? (siteUrl + foundNode.publicURL) : undefined;
}

const ResumeButton: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const data: QueryResult = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {absolutePath: {regex: "/downloadable/"}}) {
        nodes {
          publicURL
          name
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const downloadURL = findPublicURLByName(data, `cv_${language}`);

  return (
    <a href={downloadURL}
      download
      className="flex flex-row gap-2 items-center text-xl font-medium text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
    >
      {t("download_cv")}
      <img src={"/3d-icons/3d-resume.png"} className="h-8 w-8" />
    </a>
  );
}

export default ResumeButton;