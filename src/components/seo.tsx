import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SEOParams {
  title: string;
  description: string;
  pathname: string;
}

export const SEO: React.FC<SEOParams> = ({ title, description, pathname }) => {
  const { title: defaultTitle, description : defaultDescription, siteUrl, image } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
    </>
  )
}