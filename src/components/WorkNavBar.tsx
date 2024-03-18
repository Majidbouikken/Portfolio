import { IconArrowUp, IconChevronUp } from "../icons";
import HeaderLink from "./HeaderLink";
import ScrollLink from "./ScrollLink";

const WorkNavBar: React.FC<{sections: string[], link: string | null}> = ({sections, link}) => {
    return (
        <div className="flex justify-center z-20">
            <header className="fixed flex flex-row h-12 justify-stretch items-center bottom-4 px-2 py-2 gap-4 bg-gray-800/50 hover:bg-gray-800/80 border-gray-600/50 hover:border-gray-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500">
                <div onClick={() => {window.scroll({ top: 0, behavior: 'smooth' });}} className="group flex bg-background-700 p-2 gap-2 rounded-full">
                    <IconArrowUp className="h-3 w-3 fill-text-400 group-hover:fill-text-50 cursor-pointer" />
                </div>
                {sections.map((section) => (<ScrollLink targetId={section}>{section}</ScrollLink>))}
                {link?
                    <>
                        <div className="divider" />
                        <HeaderLink to={link} target="_blank">
                            <div className="group flex bg-background-700 py-1 ps-4 pe-2 gap-2 rounded-full hover:underline">
                                Visit work
                                <IconChevronUp className="h-4 w-4 fill-text-400 group-hover:fill-text-50 rotate-45" />
                            </div>
                        </HeaderLink></> :
                    <></>
                }             
            </header>
        </div>
    );
}

export default WorkNavBar;