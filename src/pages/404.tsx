import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t, i18n } = useTranslation();
  // document.body.dir = i18n.dir();
  // if (localStorage.getItem('theme') != null) {
  //   document.documentElement.classList.remove('light', 'sunset', 'dark');
  //   document.documentElement.classList.add(localStorage.getItem('theme') as string);
  // } else {
  //   // window.matchMedia('(prefers-color-scheme: dark)').matches)
  // }

  return (
    <div id="404-page">
      <h1 className="">{t('404_message')}</h1>
    </div>
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

export default NotFound;