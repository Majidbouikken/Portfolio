import { Link, useLoaderData } from "react-router-dom";
import WorkType from "../types/Work";
import ArticleComponent from "../components/ArticleComponent";
import LazyLoad from "react-lazy-load";
import ReactPlayer from "react-player";
import WorkNavBar from "../components/WorkNavBar";
import GalleryViewer from "../components/GalleryViewer";

const WorkDetailsPage: React.FC = () => {
    const { workDetails } = useLoaderData() as { workDetails: WorkType };
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    const sections: string[] = [
        workDetails.video? "demo-video" : undefined,
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
                        <Link to={'/works'} className="text-3xl max-w-5xl font-light hover:text-primary-500 hover:underline">Works/</Link>
                        <h1 className="max-w-5xl font-semibold">{workDetails.title}</h1>
                    </div>
                    <div className="flex flex-col gap-12 items-end">
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-xl font-light text-end">Role</h4>
                            <h3 className="text-xl font-light text-end">{workDetails.roles.join(' | ')}</h3>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-xl font-light text-end">Date</h4>
                            <h3 className="text-xl font-light text-end">{Intl.DateTimeFormat('en-US', options).format(workDetails.date)}</h3>
                        </div>
                        {workDetails.collaborators.length === 0?
                            <></> :
                            <div className="flex flex-col gap-2 items-end">
                                <h4 className="text-xl font-light text-end">Collaborators</h4>
                                <h3 className="text-xl font-light text-end">{workDetails.collaborators.join(' | ')}</h3>
                            </div>
                        }
                        {workDetails.company === null?
                            <></> :
                            <div className="flex flex-col gap-2 items-end">
                                <h4 className="text-xl font-light text-end">Company</h4>
                                <h3 className="text-xl font-light text-end">{workDetails.company}</h3>
                            </div>
                        }
                    </div>
                </div>
                <ArticleComponent content={workDetails.content} />

                {workDetails.video? (
                <>
                    <div className="divider-horizontal" />
                    <h2 id="demo-video" className="text-5xl max-w-5xl scroll-mt-28">Demo video</h2>
                    <LazyLoad className="max-h-96 w-full md:w-2/3 lg:w-1/2 mx-auto" offset={100}>
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
                    <h2 id="screenshots" className="text-5xl max-w-5xl scroll-mt-28">Screenshots</h2>
                    <GalleryViewer images={workDetails.images} />
                    <div className="flex flex-row gap-4 text-2xl" />
                </>) : <></>}
            </div>
        </div>
    );
}

export default WorkDetailsPage;