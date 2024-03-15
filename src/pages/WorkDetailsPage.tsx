import { Link, useLoaderData } from "react-router-dom";
import WorkType from "../types/Work";
import ArticleComponent from "../components/ArticleComponent";
import LazyLoad from "react-lazy-load";
import ReactPlayer from "react-player";
import video from './../assets/demos/painpaingoawayDemo.mp4';
import WorkNavBar from "../components/WorkNavBar";

const WorkDetailsPage: React.FC = () => {
    const { workDetails } = useLoaderData() as { workDetails: WorkType };
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };

    return (
        <div id="work-details-page" className="max-w-7xl mx-auto my-32 p-8">
            <WorkNavBar sections={["demo-video", "screenshots"]} link={workDetails.link} />
            <div className="flex flex-col items-baseline gap-8">
                <div className="grid grid-flow-row grid-cols-2 w-full">
                    <div className="flex flex-col items-start">
                        <Link to={'/works'} className="text-3xl max-w-5xl font-light">Works/</Link>
                        <h1 className="max-w-5xl font-semibold">{workDetails.title}</h1>
                    </div>
                    <div className="flex flex-col gap-12 items-end">
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-xl font-light">Role</h4>
                            <h3 className="text-xl font-light">{workDetails.roles.join(' | ')}</h3>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <h4 className="text-xl font-light">Date</h4>
                            <h3 className="text-xl font-light">{Intl.DateTimeFormat('en-US', options).format(workDetails.date)}</h3>
                        </div>
                        {workDetails.collaborators.length === 0?
                            <></> :
                            <div className="flex flex-col gap-2 items-end">
                                <h4 className="text-xl font-light">Collaborators</h4>
                                <h3 className="text-xl font-light">{workDetails.collaborators.join(' | ')}</h3>
                            </div>
                        }
                        {workDetails.company === null?
                            <></> :
                            <div className="flex flex-col gap-2 items-end">
                                <h4 className="text-xl font-light">Company</h4>
                                <h3 className="text-xl font-light">{workDetails.company}</h3>
                            </div>
                        }
                    </div>
                </div>
                <ArticleComponent content={workDetails.content} />

                <div className="divider-horizontal" />
                <h2 id="demo-video" className="text-5xl max-w-5xl scroll-mt-28">Demo video</h2>
                {workDetails.video? (<LazyLoad className="w-full md:w-2/3 lg:w-1/2 mx-auto" offset={100}>
                    <ReactPlayer
                        url={video}
                        controls
                        width="100%"
                        height="auto"
                    />
                </LazyLoad>) : <></>}

                <div className="divider-horizontal" />
                <h2 id="screenshots" className="text-5xl max-w-5xl scroll-mt-28">Screenshots</h2>
                <div className="flex flex-row gap-4 text-2xl" />
            </div>
        </div>
    );
}

export default WorkDetailsPage;