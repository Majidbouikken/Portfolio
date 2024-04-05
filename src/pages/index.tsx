import Technology, { TechnologiesByCategories, Technologies } from "../types/Technology";
import Layout from "@/layout/layout";
import CircularText from "@/assets/circular-title.svg";
import ResumeButton from "@/components/ResumeButton";
import { formatDateYearOnly } from "@/utils/DateUtils";
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { SEO } from "@/components/seo";
import './index.css';

interface AboutDataProps {
    avatar: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    };
    allEducation: {
        nodes: {
            frontmatter: {
                title: string;
                university: string;
                startDate: Date;
                endDate: Date;
                location: string;
                diploma: string;
                description: string;
            },
        }[],
        totalCount: number;
    };
    allExperience: {
        nodes: {
            frontmatter: {
                title: string;
                company: string;
                startDate: Date;
                endDate: Date;
                location: string;
                contractType: string;
                companyWebsite: string;
                description: string;
            },
        }[],
        totalCount: number;
    };
}

const HomePage = ({ data: { avatar, allEducation, allExperience } }: PageProps<AboutDataProps>) => {
  const { t } = useTranslation();

  const gatsbyImageData = avatar.childImageSharp.gatsbyImageData;

  const experience = allExperience.nodes;
  const experienceCount = allExperience.totalCount;

  const education = allEducation.nodes;
  const educationCount = allEducation.totalCount;

  return (
        <Layout>
            <SEO title={t('title')} description={t('website_description')} pathname="" />
            <div id="about-page" className="max-w-7xl mx-auto my-32 px-8">
                <div className="flex flex-col items-start gap-16 md:gap-32 w-full">
                    <div className="absolute h-36 w-36 items-center justify-center justify-items-center top-24 left-1/2 -translate-x-1/2 -z-10">
                        <GatsbyImage image={gatsbyImageData} alt="avatar" className="!absolute h-24 w-24 rounded-full inset-6" />
                        <div className="absolute h-36 w-36 fill-text-900 dark:fill-text-50 animate-spin-slow"><CircularText /></div>
                    </div>
                    <div id="who-am-i" className="flex flex-col w-full mt-24 md:flex-row justify-between items-start md:items-end">
                        <h1 className="text-9xl mb-4">{t('hello')}</h1>
                        <h2 className="relative max-w-2xl w-full text-end">
                            {t('i_am_abdelmadjid_bouikken')}<br />{t('a_software_engineer_in_paris')}
                        </h2>
                    </div>
                    <div id="who-am-i" className="flex flex-col gap-8 w-full">
                        <h2>{t('i_am_a_passionate_software_engineer')}</h2>
                        <h2>{t('my_aim_is_to_create_products')}</h2>
                    </div>
                    <section id="hiring-and-cv">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                            <ResumeButton />
                            <Link to="/hire-me"
                                className="flex flex-row gap-2 items-center text-xl text-text-800 dark:text-text-50 hover:text-text-50 !font-medium bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
                            >
                                {t("hire_me").toUpperCase()}
                                <img src={"/3d-icons/3d-send.png"} className="h-8 w-8" />
                            </Link>
                        </div>
                    </section>
                    <section id="technical-stack" className="space-y-4 w-full">
                        <h1>{t('technical_stack')}</h1>
                        <div>
                            {
                                Object.entries(TechnologiesByCategories).map((category) => {
                                    return (<div key={`category-${category[1]}`} className="flex flex-col space-y-4">
                                        <h5 className="mt-4 mb-2">{t(category[0])}</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {
                                                category[1].map((technolgy, index) => (
                                                    <a key={technolgy} href={Technologies[Technology[technolgy]][1]} target="_blank" className="group flex flex-row gap-2 justify-start justify-items-center tooltip-container">
                                                        <img src={Technologies[Technology[technolgy]][0]} className="h-8" />
                                                        <h4 className="group-hover:text-text-900 dark:group-hover:text-text-50 transition-colors duration-500">{Technology[technolgy]}</h4>
                                                        <div className="tooltip tooltip-ontop">{Technologies[Technology[technolgy]][2]}</div>
                                                        {(index < category[1].length - 1) && <div className="divider ms-4" />}
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>);
                                })
                            }
                        </div>
                    </section>
                    <section id="experience" className="space-y-4 w-full">
                        <h1>{t('career_journey')}</h1>
                        <div className="flex flex-col">
                            {
                                experience.map((experience, index) => (
                                    <div key={experience.frontmatter.company} className="flex flex-row items-stretch justify-stretch gap-8">
                                        {/* Timeline */}
                                        <div className="flex flex-col items-center translate-y-3">
                                            <div className="rotate-45 flex my-2">
                                                <div className="h-2 w-2 bg-primary-500 rounded-sm" />
                                            </div>
                                            {index !== experienceCount - 1 && <div className="w-1 h-full bg-background-800 rounded-full" />}
                                        </div>
                                        {/* Year */}
                                        <h2>{formatDateYearOnly(experience.frontmatter.startDate)}</h2>
                                        {/* Role and Company */}
                                        <div className="mb-8 tooltip-container">
                                            <h2>{experience.frontmatter.title}</h2>
                                            <a href={experience.frontmatter.companyWebsite} target="_blank" className="text-text-800 dark:text-text-100 hover:text-text-900 dark:hover:text-text-50 hover:underline transition-colors duration-500">
                                                {experience.frontmatter.company} • {experience.frontmatter.location}
                                            </a>
                                            <div className="tooltip tooltip-below">{experience.frontmatter.description}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section id="education" className="space-y-4 w-full">
                        <h1>{t('academic_background')}</h1>
                        <div className="flex flex-col">
                            {
                                education.map((education, index) => (
                                    <div key={education.frontmatter.university} className="flex flex-row items-stretch justify-stretch gap-8">
                                        {/* Timeline */}
                                        <div className="flex flex-col items-center translate-y-3">
                                            <div className="rotate-45 flex my-2">
                                                <div className="h-2 w-2 bg-primary-500 rounded-sm" />
                                            </div>
                                            {index !== educationCount - 1 && <div className="w-1 h-full bg-background-800 rounded-full" />}
                                        </div>
                                        {/* Year */}
                                        <h2>{formatDateYearOnly(education.frontmatter.endDate)}</h2>
                                        {/* Diploma and University */}
                                        <div className="mb-8 tooltip-container">
                                            <h2>{education.frontmatter.diploma} - {education.frontmatter.title}</h2>
                                            <a className="text-text-800 dark:text-text-100">
                                                {education.frontmatter.university} • {education.frontmatter.location}
                                            </a>
                                            <div className="tooltip tooltip-below">{education.frontmatter.description}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section id="hiring-and-cv">
                        <div className="flex flex-col md:flex-row gap-4 items-start">
                            <ResumeButton />
                            <Link to="/hire-me"
                                className="flex flex-row gap-2 items-center text-xl font-medium text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
                            >
                                {t("hire_me").toUpperCase()}
                                <img src={"/3d-icons/3d-send.png"} className="h-8 w-8" />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
query ($language: String!) {
    avatar: file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
            gatsbyImageData
        }
    }

    allEducation: allMarkdownRemark(
        filter: {frontmatter: {language: {eq: $language}},
        fileAbsolutePath: {regex: "/education/"}},
        sort: {frontmatter: {endDate: DESC}}
    )
    {
        nodes {
            frontmatter {
                title
                university
                startDate
                endDate
                location
                diploma
                description
            }
        }
        totalCount
    }

    allExperience: allMarkdownRemark(
        filter: {frontmatter: {language: {eq: $language}},
        fileAbsolutePath: {regex: "/experience/"}},
        sort: {frontmatter: {endDate: DESC}}
    )
    {
        nodes {
            frontmatter {
                title
                company
                startDate
                endDate
                location
                contractType
                companyWebsite
                description
            }
        }
        totalCount
    }

    locales: allLocale(filter: {ns: { in: ["about", "misc"]}, language: {eq: $language}}) {
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

export default HomePage;