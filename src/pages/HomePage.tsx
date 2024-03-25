import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="home-page" className="relative h-screen max-w-7xl mx-auto py-32 px-8 flex flex-col justify-center items-center">
            <div id="who-am-i" className="flex flex-col w-full mt-auto md:flex-row justify-between items-start md:items-end">
                <h1 className="text-9xl mb-4">{t('hello')}</h1>
                <h2 className="max-w-2xl w-full text-end">{t("i_am_abdelmadjid_bouikken")}<br />{t("a_software_engineer_in_paris")}</h2>
            </div>
            <div className="absolute -z-40 h-full p-16 overflow-clip md:overflow-visible">
                <img src={require('./../assets/images/3d-room.png')} className="h-full w-full object-contain translate-x-32 -translate-y-32 md:translate-x-0 md:translate-y-0" />
            </div>
        </div>
    );
}

export default HomePage;