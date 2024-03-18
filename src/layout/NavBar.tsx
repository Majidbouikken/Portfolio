import HeaderLink from "../components/HeaderLink";

const NavBar: React.FC = () => {
    return (
        <div className="flex justify-center z-20">
            <header className="fixed flex flex-row h-12 justify-stretch items-center top-4 px-4 py-2 gap-4 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500">
                <HeaderLink to="">Abdelmadjid Bouikken</HeaderLink>
                <div className="divider" />
                <HeaderLink to="works">Works</HeaderLink>
                <HeaderLink to="about">About</HeaderLink>
                <HeaderLink to="hire-me">Hire me</HeaderLink>
            </header>
        </div>
    );
}

export default NavBar;