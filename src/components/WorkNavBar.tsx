import { useTranslation } from "react-i18next";
import { IconArrowUp, IconChevronUp } from "../icons";
import HeaderLink from "./HeaderLink";
import ScrollLink from "./ScrollLink";

const WorkNavBar: React.FC<{sections: string[], link: string | null}> = ({sections, link}) => {
    const { t } = useTranslation();

    const scrollBackToTop = () => {
        if (typeof window !== "undefined") {
            window.scroll({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <div className="flex justify-center">
            <header className="fixed flex flex-row h-12 justify-stretch items-center bottom-4 px-2 py-2 gap-4 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500 z-20">
                <div onClick={scrollBackToTop} className="group flex bg-primary-500/50 hover:bg-primary-500 dark:bg-background-700 p-2 gap-2 rounded-full transition-colors duration-500 cursor-pointer">
                    <div className="h-3 w-3 fill-text-800 dark:fill-text-100 group-hover:fill-text-50">
                        <IconArrowUp />
                    </div>
                </div>
                {sections.map((section) => (<ScrollLink targetId={section}>{t(section)}</ScrollLink>))}
                {link?
                    <>
                        <div className="divider" />
                        <HeaderLink to={link} key={link} target="_blank">
                            <div className="group flex bg-primary-500/50 hover:bg-primary-500 dark:bg-background-700 py-1 ps-4 pe-2 gap-2 rounded-full dark:hover:underline transition-colors duration-500">
                                <p className="text-text-800 dark:text-text-100 group-hover:text-text-50 font-semibold">{t('visit_work')}</p>
                                <div className="h-4 w-4 fill-text-500 dark:fill-text-400 group-hover:fill-text-50 rotate-45">
                                    <IconChevronUp />
                                </div>
                            </div>
                        </HeaderLink></> :
                    <></>
                }             
            </header>
        </div>
    );
}

export default WorkNavBar;