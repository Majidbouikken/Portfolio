import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <a className="flex justify-center p-2 text-center text-text-600 dark:text-text-500">
            © 2024 Abdelmadjid's Portfolio • Built with 🤍 and 🍵 by Abdelmadjid.
        </a>
    );
}

export default Footer;