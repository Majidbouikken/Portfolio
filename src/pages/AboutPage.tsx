import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";
import Technology, { TechnologiesByCategories, Technologies } from "../types/Technology";
import { formatDateYearOnly } from "../utils/DateUtils";

const AboutPage: React.FC = () => {
    return (
        <div id="about-page" className="max-w-7xl mx-auto my-32 px-8">
            <div className="flex flex-col items-baseline gap-32 w-full">
                <div id="who-am-i" className="flex flex-row w-full justify-between items-end mt-32">
                    <h1 className="text-9xl mb-4">Hiya!</h1>
                    <h2 className="max-w-2xl w-full text-end">I'm Abdelmadjid Bouikken,<br />a software engineer based in Paris.</h2>
                </div>
                <div id="who-am-i" className="flex flex-col gap-8 w-full">
                    <h2>I'm a passionate software engineer and creative developer who approaches each project with zeal, crafting digital solutions that seamlessly blend technical expertise with artistic finesse.</h2>
                    <h2>My aim is to create products that functions flawlessly and captivate and inspire users.</h2>
                </div>
                <div id="technical-stack" className="space-y-4 w-full">
                    <h1>Technical Stack</h1>
                    <div>
                        {
                            Object.entries(TechnologiesByCategories).map((category) => {
                                return (<>
                                    <h5 className="mt-4 mb-2">{category[0]}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            category[1].map((technolgy, index) => (
                                                <Link to={Technologies[Technology[technolgy]][1]} target="_blank" className="group flex flex-row gap-2 justify-start justify-items-center tooltip-container">
                                                    <img src={Technologies[Technology[technolgy]][0]} className="h-8" />
                                                    <h4 className="group-hover:text-text-900 dark:group-hover:text-text-50 transition-colors duration-500">{Technology[technolgy]}</h4>
                            <div className="tooltip">{Technologies[Technology[technolgy]][2]}</div>
                                                    {(index < category[1].length - 1) && <div className="divider ms-4" />}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </>);
                            })
                        }
                    </div>
                </div>
                <div id="experience" className="space-y-4 w-full">
                    <h1>Career Journey</h1>
                    <div className="flex flex-col">
                        {
                            experiences.map((experience, index) => (
                                <div key={index} className="flex flex-row items-stretch justify-stretch gap-8">
                                    {/* Timeline */}
                                    <div className="flex flex-col items-center translate-y-3">
                                        <div className="h-0 w-0 border-4 border-background-500 rounded-full my-2" />
                                        {index !== experiences.length - 1 && <div className="w-1 h-full bg-background-800 rounded-full" />}
                                    </div>
                                    {/* Year */}
                                    <h2>{formatDateYearOnly(experience.startDate)}</h2>
                                    {/* Role and Company */}
                                    <div className="mb-8">
                                        <h2>{experience.role}</h2>
                                        <a href={experience.companyWebsite} target="_blank" className="text-text-800 dark:text-text-100 hover:text-text-900 dark:hover:text-text-50 hover:underline transition-colors duration-500">{experience.company}</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div id="education">
                    <h1>Academic Background</h1>

                </div>
            </div>
        </div>
    );
}

export default AboutPage;