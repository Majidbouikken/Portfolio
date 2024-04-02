import WorkCard from '../components/WorkCard';
import { useState } from 'react';
import Category from '../types/Category';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from '@/layout/layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageProps, graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface WorksDataProps {
    allworks: {
        nodes: {
            frontmatter: {
                title: string;
                subtitle: string;
                category: string;
                // roles: string[];
                // collaborators: string[];
                // company: string;
                // date: Date;
                // awards: string[];
                // technologies: string[];
                slug: string;
                thumb: {
                    childImageSharp: {
                        gatsbyImageData: IGatsbyImageData
                    }
                }
            },
        }[];
    };
}

const WorksPage = ({ data: { allworks } }: PageProps<WorksDataProps>) => {
    const { t } = useTranslation();

    const works = allworks.nodes;

    const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

    var filteredWorks = selectedCategory === "All" ? works : works.filter(project => project.frontmatter.category === Category[selectedCategory] );

    return (
        <Layout>
            <div id="works-page" className="max-w-7xl mx-auto my-32 px-8">
                <div className="flex flex-col items-start gap-4">
                    <h1 className="max-w-5xl">{t('here_you_can_find_all_my_works_and_projects')}</h1>
                    <div className="flex flex-wrap gap-4 text-xl md:text-2xl">
                        <a
                            key={0}
                            onClick={e => setSelectedCategory("All")}
                            className="text-text-500 hover:text-text-900 dark:text-text-400 dark:hover:text-text-50 focus:text-primary-500 transition-colors duration-500"
                            style={selectedCategory === "All"? {color: '#4746eb', cursor: 'default'}: {cursor: 'pointer'}}>
                            {t('all')}
                        </a>
                        { (Object.keys(Category).filter(key => isNaN!(Number(key))) as (keyof typeof Category)[]).map(
                            category => (
                                <a
                                    key={category}
                                    onClick={e => setSelectedCategory(Category[category as keyof typeof Category])}
                                    className="text-text-500 hover:text-text-900 dark:text-text-400 dark:hover:text-text-50 focus:text-primary-500 cursor-pointer transition-colors duration-500"
                                    style={Category[selectedCategory as number] === category.toString()? {color: '#4746eb', cursor: 'default'}: {cursor: 'pointer'}}>
                                    {t(category)}
                                </a>
                            )
                        ) }
                    </div> 
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        { filteredWorks.map((work, index) => (<WorkCard key={`work-${index}`} work={work.frontmatter} />)) }
                    </div>
                    {/* <TransitionGroup>
                      <CSSTransition key={selectedCategory} classNames="fade" timeout={300}>
                            
                      </CSSTransition>
                    </TransitionGroup> */}
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
query ($language: String!) {
    allworks: allMarkdownRemark(
        filter: {frontmatter: {language: {eq: $language}},
        fileAbsolutePath: {regex: "/works/"}},
        sort: {frontmatter: {date: DESC}}
    )
    {
        nodes {
            frontmatter {
                title
                subtitle
                category
                slug
                thumb {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }

    locales: allLocale(filter: {ns: { in: ["works", "misc"]}, language: {eq: $language}}) {
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

export default WorksPage;