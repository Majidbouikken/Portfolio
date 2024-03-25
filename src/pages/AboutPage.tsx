import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";
import Technology, { TechnologiesByCategories, Technologies } from "../types/Technology";
import { formatDateYearOnly } from "../utils/DateUtils";
import { educations } from "../data/educations";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="about-page" className="max-w-7xl mx-auto my-32 px-8">
            <div className="flex flex-col items-baseline gap-32 w-full">
                <div id="who-am-i" className="flex flex-col w-full mt-auto md:flex-row justify-between items-start md:items-end">
                    <h1 className="text-9xl mb-4">{t('hello')}</h1>
                    <h2 className="max-w-2xl w-full text-end">{t('i_am_abdelmadjid_bouikken')}<br />{t('a_software_engineer_in_paris')}</h2>
                </div>
                <div id="who-am-i" className="flex flex-col gap-8 w-full">
                    <h2>{t('i_am_a_passionate_software_engineer')}</h2>
                    <h2>{t('my_aim_is_to_create_products')}</h2>
                </div>
                <section id="technical-stack" className="space-y-4 w-full">
                    <h1>{t('technical_stack')}</h1>
                    <div>
                        {
                            Object.entries(TechnologiesByCategories).map((category) => {
                                return (<>
                                    <h5 className="mt-4 mb-2">{t(category[0])}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            category[1].map((technolgy, index) => (
                                                <Link to={Technologies[Technology[technolgy]][1]} target="_blank" className="group flex flex-row gap-2 justify-start justify-items-center tooltip-container">
                                                    <img src={Technologies[Technology[technolgy]][0]} className="h-8" />
                                                    <h4 className="group-hover:text-text-900 dark:group-hover:text-text-50 transition-colors duration-500">{Technology[technolgy]}</h4>
                                                    <div className="tooltip tooltip-ontop">{Technologies[Technology[technolgy]][2]}</div>
                                                    {(index < category[1].length - 1) && <div className="divider ms-4" />}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </>);
                            })
                        }
                    </div>
                </section>
                <section id="experience" className="space-y-4 w-full">
                    <h1>{t('career_journey')}</h1>
                    <div className="flex flex-col">
                        {
                            experiences.map((experience, index) => (
                                <div key={index} className="flex flex-row items-stretch justify-stretch gap-8">
                                    {/* Timeline */}
                                    <div className="flex flex-col items-center translate-y-3">
                                        <div className="rotate-45 flex my-2">
                                            <div className="h-2 w-2 bg-primary-500 rounded-sm" />
                                        </div>
                                        {index !== experiences.length - 1 && <div className="w-1 h-full bg-background-800 rounded-full" />}
                                    </div>
                                    {/* Year */}
                                    <h2>{formatDateYearOnly(experience.startDate)}</h2>
                                    {/* Role and Company */}
                                    <div className="mb-8 tooltip-container">
                                        <h2>{experience.role}</h2>
                                        <a href={experience.companyWebsite} target="_blank" className="text-text-800 dark:text-text-100 hover:text-text-900 dark:hover:text-text-50 hover:underline transition-colors duration-500">
                                            {experience.company}
                                        </a>
                                        <div className="tooltip tooltip-below">{experience.description}</div>
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
                            educations.map((education, index) => (
                                <div key={index} className="flex flex-row items-stretch justify-stretch gap-8">
                                    {/* Timeline */}
                                    <div className="flex flex-col items-center translate-y-3">
                                        <div className="rotate-45 flex my-2">
                                            <div className="h-2 w-2 bg-primary-500 rounded-sm" />
                                        </div>
                                        {index !== educations.length - 1 && <div className="w-1 h-full bg-background-800 rounded-full" />}
                                    </div>
                                    {/* Year */}
                                    <h2>{formatDateYearOnly(education.endDate)}</h2>
                                    {/* Diploma and University */}
                                    <div className="mb-8 tooltip-container">
                                        <h2>{education.diploma} - {education.title}</h2>
                                        <a href={'education.universityWebsite'} target="_blank" className="text-text-800 dark:text-text-100 hover:text-text-900 dark:hover:text-text-50 hover:underline transition-colors duration-500">
                                            {education.university} • {education.location}
                                        </a>
                                        <div className="tooltip tooltip-below">{education.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section id="hire-me">
                    <Link
                        to="/hire-me"
                        className="flex flex-row gap-2 items-center text-xl text-text-800 dark:text-text-50 hover:text-text-50 bg-transparent hover:bg-primary-500 dark:bg-background-800/50 dark:hover:bg-background-800 border-2 border-background-400/50 hover:border-transparent dark:border-transparent px-4 py-2 rounded-full transition-colors duration-500"
                    >
                        {t("hire_me")}
                        <img src={require('./../assets/icons/3d-send.png')} className="h-8 w-8" />
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;