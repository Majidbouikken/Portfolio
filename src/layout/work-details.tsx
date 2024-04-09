import ArticleComponent from "@/components/ArticleComponent";
import Layout from "./layout";
import WorkNavBar from "@/components/WorkNavBar";
import GalleryViewer from "@/components/GalleryViewer";
import { Technologies } from "@/types/Technology";
import { PageProps, graphql } from 'gatsby';
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { SEO } from "@/components/seo";
import '@/pages/index.css';

interface WorkDetailsDataProps {
    work: {
        frontmatter: {
            title: string;
            subtitle: string;
            category: string;
            roles: string[];
            collaborators: string[];
            company: string;
            date: Date;
            awards: string[];
            technologies: string[];
            description: string;
            slug: string;
            featuredimage: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }[]
        };
        rawMarkdownBody: string;
    };
}

const WorkDetails = ({ data: { work } }: PageProps<WorkDetailsDataProps>) => {
    const { t } = useTranslation();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };

    const sections: string[] = [
        // works[3].video? "demo_video" : undefined,
        (work.frontmatter.featuredimage)? "screenshots" : undefined
    ].filter(section => section !== undefined) as string[];

    return (
        <Layout>
            <SEO title={`${work.frontmatter.title} | ${t('title')}`} description={t('website_description')} pathname={`/works/${work.frontmatter.slug}/`} />
            <div id="work-details-page" className="max-w-7xl mx-auto my-32 p-8">
                {("works[3].link" == null && sections.length === 0) &&
                    <WorkNavBar sections={sections} link={""} />
                }
                <div className="flex flex-col items-start gap-8">
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 w-full">
                        <div className="flex flex-col items-start">
                            <Link to={'/works'} className="text-xl md:text-2xl text-text-500 hover:text-text-900 dark:text-text-400 dark:hover:text-text-50 focus:text-primary-500 cursor-pointer transition-colors duration-500">{t('works')}/</Link>
                            <h1 className="max-w-5xl !font-semibold md:!font-extralight">{work.frontmatter.title}</h1>
                        </div>
                        <div className="flex flex-col gap-8 items-end">
                            <div className="flex flex-col gap-0 items-end">
                                <h4 className="text-xl md:text-2xl text-end text-text-500 dark:text-text-400">{t('role')}</h4>
                                <h3 className="text-xl md:text-2xl text-end">{work.frontmatter.roles.join(' | ')}</h3>
                            </div>
                            <div className="flex flex-col gap-0 items-end">
                                <h4 className="text-xl md:text-2xl text-end text-text-500 dark:text-text-400">{t('date')}</h4>
                                <h3 className="text-xl md:text-2xl text-end">{Intl.DateTimeFormat('en-US', options).format(work.frontmatter.date)}</h3>
                            </div>
                            {work.frontmatter.collaborators === null?
                                <></> :
                                <div className="flex flex-col gap-0 items-end">
                                    <h4 className="text-xl md:text-2xl text-end text-text-500 dark:text-text-400">{t('collaborators')}</h4>
                                    <h3 className="text-xl md:text-2xl text-end">{work.frontmatter.collaborators.join(' | ')}</h3>
                                </div>
                            }
                            {work.frontmatter.company === null?
                                <></> :
                                <div className="flex flex-col gap-2 items-end">
                                    <h4 className="text-xl md:text-2xl text-end text-text-500 dark:text-text-400">{t('company')}</h4>
                                    <h3 className="text-xl md:text-2xl text-end">{work.frontmatter.company}</h3>
                                </div>
                            }
                        </div>
                    </div>
                    <h4>{work.frontmatter.description}</h4>
                    <h2>{t('languages_and_technologies')}</h2>
                    <div className="flex flex-wrap gap-4">
                        {work.frontmatter.technologies.map((key, i) => (
                            <a key={key} href={Technologies[key][1]} target="_blank" className="group flex flex-row gap-2 justify-start justify-items-center tooltip-container">
                                <img src={Technologies[key][0]} className="h-8" />
                                <h4 className="group-hover:text-text-900 dark:group-hover:text-text-50 transition-colors duration-500">{key}</h4>
                                <div className="tooltip tooltip-ontop">{Technologies[key][2]}</div>
                                {(i < work.frontmatter.technologies.length - 1) && <div className="divider ms-4" />}
                            </a>
                        ))}
                    </div>
                    <ArticleComponent content={work.rawMarkdownBody} />

                    {false? (
                        <>
                            <div className="divider-horizontal" />
                            <h2 id="demo-video" className="text-5xl max-w-5xl scroll-mt-28">{t('demo_video')}</h2>
                            {/* <LazyLoad className="max-h-96 w-full md:w-2/3 lg:w-1/2 mx-auto z-0" offset={100}>
                                <ReactPlayer
                                    url={workDetails.video}
                                    controls
                                    width="100%"
                                    height="24rem"
                                />
                            </LazyLoad> */
                            // <video className="aspect-video h-64" preload='auto' controls>
                            //     <source className="aspect-video h-64" src={require("../videos/ishopDemo.mp4")} type="video/mp4" />
                            // </video>
                            }
                        </>) :
                        <></>
                    }
                    
                    {work.frontmatter.featuredimage?
                        (<>
                            <div className="divider-horizontal" />
                            <h2 id="screenshots" className="text-5xl max-w-5xl scroll-mt-28">{t('screenshots')}</h2>
                            <GalleryViewer images={work.frontmatter.featuredimage} />
                            <div className="flex flex-row gap-4 text-2xl" />
                        </>) :
                        <></>
                    }
                    
                    <div className="divider ms-4" />
                    <section id="hire-me">
                        <Link
                            to="/hire-me"
                            className="flex flex-row gap-2 items-center text-xl !font-semibold text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
                        >
                            {t("hire_me").toUpperCase()}
                            <img src={"/3d-icons/3d-send.png"} className="h-8 w-8" />
                        </Link>
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
query ($language: String!, $slug: String!) {
    work: markdownRemark(frontmatter: {slug: {eq: $slug}, language: {eq: $language}}) {
        frontmatter {
            title
            slug
            subtitle
            technologies
            roles
            company
            collaborators
            category
            awards
            description
            featuredimage {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        rawMarkdownBody
    }

    locales: allLocale(filter: {ns: { in: ["work-details", "misc"]}, language: {eq: $language}}) {
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

export default WorkDetails;