import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <h5 className="flex justify-center p-2 text-text-500 dark:text-text-600">
            © 2024 Abdelmadjid's Portfolio - Built with ❤️ and 🍵 by Abdelmadjid.
        </h5>
    );
}

export default Footer;