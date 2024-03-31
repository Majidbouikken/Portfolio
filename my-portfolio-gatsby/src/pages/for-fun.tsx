import Layout from "@/layout/layout";
import { graphql } from "gatsby";

const ForFunPage: React.FC = () => {
    return (
        <Layout>
            <div id="for-fun-page"></div>
        </Layout>
    );
}

export const query = graphql`
query($language: String!) {
  locales: allLocale(filter: {ns: { in: ["misc"]}, language: {eq: $language}}) {
    edges {
        node {
            ns
            data
            language
        }
    }
  }
}
`;

export default ForFunPage;