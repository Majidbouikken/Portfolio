import { useTranslation } from "react-i18next";

const ErrorPage: React.FC = () => {
    const { t } = useTranslation();

    return (<div id="404-page">{t('404_message')}</div>);
}

export default ErrorPage;