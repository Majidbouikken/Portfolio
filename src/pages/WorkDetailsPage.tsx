import { Link, useLoaderData } from "react-router-dom";
import WorkType from "../types/Work";
import ArticleComponent from "../components/ArticleComponent";
import LazyLoad from "react-lazy-load";
import ReactPlayer from "react-player";
import WorkNavBar from "../components/WorkNavBar";
import GalleryViewer from "../components/GalleryViewer";
import Technology, { Technologies } from "../types/Technology";
import { useTranslation } from "react-i18next";

const WorkDetailsPage: React.FC = () => {
    const { t } = useTranslation();
    const { workDetails } = useLoaderData() as { workDetails: WorkType };
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    const sections: string[] = [
        workDetails.video? "demo_video" : undefined,
        (workDetails.images.length > 0)? "screenshots" : undefined
    ].filter(section => section !== undefined) as string[];

    return (
        <div id="work-details-page" className="max-w-7xl mx-auto my-32 p-8">
            {(workDetails.link == null && sections.length === 0)?
                <></> :
                <WorkNavBar sections={sections} link={workDetails.link} />
            }
            <div className="flex flex-col items-baseline gap-8">
                <div className="grid grid-flow-row grid-cols-2 w-full">
                    <div className="flex flex-col items-start">
                        <Link to={'/works'} className="text-3xl max-w-5xl font-light text-text-800 dark:text-text-100 hover:text-primary-500 hover:underline">{t('works')}/</Link>
                        <h1 className="max-w-5xl font-semibold">{workDetails.title}</h1>
                    </div>
                    <div className="flex flex-col gap-12 items-end">
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-xl font-light text-end">{t('role')}</h4>
                            <h3 className="text-xl font-light text-end">{workDetails.roles.join(' | ')}</h3>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-xl font-light text-end">{t('date')}</h4>
                            <h3 className="text-xl font-light text-end">{Intl.DateTimeFormat('en-US', options).format(workDetails.date)}</h3>
                        </div>
                        {workDetails.collaborators.length === 0?
                            <></> :
                            <div className="flex flex-col gap-2 items-end">
                                <h4 className="text-xl font-light text-end">{t('collaborators')}</h4>
                                <h3 className="text-xl font-light text-end">{workDetails.collaborators.join(' | ')}</h3>
                            </div>
                        }
                        {workDetails.company === null?
                            <></> :
                            <div className="flex flex-col gap-2 items-end">
                                <h4 className="text-xl font-light text-end">{t('company')}</h4>
                                <h3 className="text-xl font-light text-end">{workDetails.company}</h3>
                            </div>
                        }
                    </div>
                </div>
                <h4>{workDetails.description}</h4>
                <h2>{t('languages_and_technologies')}</h2>
                <div className="flex flex-wrap gap-4">
                    {workDetails.technologies.map((index, i) => (
                        <Link to={Technologies[Technology[index]][1]} target="_blank" className="group flex flex-row gap-2 justify-start justify-items-center tooltip-container">
                            <img src={Technologies[Technology[index]][0]} className="h-8 w-8" />
                            <h4 className="group-hover:text-text-900 dark:group-hover:text-text-50 transition-colors duration-500">{Technology[index]}</h4>
                            <div className="tooltip tooltip-ontop">{Technologies[Technology[index]][2]}</div>
                            {(i < workDetails.technologies.length - 1) && <div className="divider ms-4" />}
                        </Link>
                    ))}
                </div>
                <ArticleComponent content={workDetails.content} />

                {workDetails.video? (
                <>
                    <div className="divider-horizontal" />
                    <h2 id="demo-video" className="text-5xl max-w-5xl scroll-mt-28">{t('demo_video')}</h2>
                    <LazyLoad className="max-h-96 w-full md:w-2/3 lg:w-1/2 mx-auto z-0" offset={100}>
                        <ReactPlayer
                            url={workDetails.video}
                            controls
                            width="100%"
                            height="24rem"
                        />
                    </LazyLoad>
                </>) : <></>}

                {workDetails.images.length > 0?
                (<>
                    <div className="divider-horizontal" />
                    <h2 id="screenshots" className="text-5xl max-w-5xl scroll-mt-28">{t('screenshots')}</h2>
                    <GalleryViewer images={workDetails.images} />
                    <div className="flex flex-row gap-4 text-2xl" />
                </>) : <></>}
                
                <div className="divider ms-4" />
                <section id="hire-me">
                    <Link
                        to="/hire-me"
                        className="flex flex-row gap-2 items-center text-xl text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
                        style={{ fontWeight: 'bold !imporant' }}
                    >
                        {t("hire_me").toUpperCase()}
                        <img src={require('./../assets/icons/3d-send.png')} className="h-8 w-8" />
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default WorkDetailsPage;