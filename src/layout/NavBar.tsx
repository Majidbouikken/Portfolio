import { useTranslation } from "react-i18next";
import HeaderLink from "../components/HeaderLink";

const NavBar: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="hidden md:flex justify-center z-20">
            <header className="fixed flex flex-row h-12 justify-stretch items-center top-4 px-4 py-2 gap-4 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500 z-20">
                <HeaderLink to=""><img src={require('./../assets/icons/3d-home.png')} className="h-8 w-8" /></HeaderLink>
                <div className="divider" />
                <HeaderLink to="works">{t('works')}</HeaderLink>
                <HeaderLink to="about">{t('about')}</HeaderLink>
                <HeaderLink to="hire-me">{t('hire_me')}</HeaderLink>
            </header>
        </div>
    );
}

export default NavBar;