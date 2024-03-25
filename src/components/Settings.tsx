import { useEffect, useState } from "react";
import { FlagAlgerian, FlagArabic, FlagDeutsch, FlagEnglish, FlagFrench, FlagItalian, FlagJapanese, FlagPortuguese, FlagSpanish } from "../icons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n";

const Flag: React.FC<{ country: string }> = ({ country}) => {
  if (country == "ar") return (<FlagAlgerian className="h-6 w-6" />);
  else if (country == "en") return (<FlagEnglish className="h-6 w-6" />);
  else if (country == "fr") return (<FlagFrench className="h-6 w-6" />);
  // else if (country == "it") return (<FlagItalian className="h-6 w-6" />);
  else if (country == "de") return (<FlagDeutsch className="h-6 w-6" />);
  // else if (country == "es") return (<FlagSpanish className="h-6 w-6" />);
  // else if (country == "pt") return (<FlagPortuguese className="h-6 w-6" />);
  // else if (country == "jp") return (<FlagJapanese className="h-6 w-6" />);
  else return (<FlagArabic className="h-6 w-6" />);
}

const Settings: React.FC = () => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [darkMode, setDarkMode] = useState(systemTheme.matches);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleTheme = (theme: string) => {
    setDarkMode(true);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'sunset', 'dark');
    document.documentElement.classList.add(theme);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  }

  return (
    <div className="group flex items-center justify-center fixed h-12 w-12 top-4 end-4 p-0 gap-3 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500 z-20">
      <img src={require('./../assets/icons/3d-cog.png')} className="h-10 w-10" />
      <div className="absolute h-10 w-10 -z-10 settings-gradient scale-125 opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
      <div className="absolute w-80 md:w-64 top-full -end-4 p-4 transition-all opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="flex flex-col py-4 bg-background-200 dark:bg-background-800 border-background-400 dark:border-background-600 border-2 rounded-3xl backdrop-blur-md z-20">
          <div className="flex md:hidden flex-col">
            <Link to="" className={`flex flex-row justify-start items-center gap-4 px-4 py-2 text-sm font-semibold ${(location.pathname === '/')? 'text-primary-500 dark:text-text-50': 'text-text-500 dark:text-text-400'}`}>
              <img src={require('./../assets/icons/3d-home.png')} className="h-8 w-8" />
              {t("home")}
            </Link>
            <div className="divider-horizontal my-4" />
            <Link
              key="works"
              to="works"
              className={`flex flex-row justify-start gap-4 px-4 py-2 text-sm font-semibold ${
                (location.pathname === '/works') ? 'text-primary-500 hover:bg-background-400 dark:hover:bg-background-600 hover:text-primary-400 dark:hover:text-text-50' : 'text-text-500 dark:text-text-400 hover:bg-background-400 dark:hover:bg-background-600 hover:text-text-900 dark:hover:text-text-50'
              }`}
            >
              {t("works")}
            </Link>
            <Link
              key="about"
              to="about"
              className={`flex flex-row justify-start gap-4 px-4 py-2 text-sm font-semibold ${
                (location.pathname === '/about') ? 'text-primary-500 hover:bg-background-400 dark:hover:bg-background-600 hover:text-primary-500 dark:hover:text-text-50' : 'text-text-500 dark:text-text-400 hover:bg-background-400 dark:hover:bg-background-600 hover:text-text-900 dark:hover:text-text-50'
              }`}
            >
              {t("about")}
            </Link>
            <Link
              key="hire-me"
              to="hire-me"
              className={`flex flex-row justify-start gap-4 px-4 py-2 text-sm font-semibold ${
                (location.pathname === '/hire-me') ? 'text-primary-500 hover:bg-background-400 dark:hover:bg-background-600 hover:text-primary-500 dark:hover:text-text-50' : 'text-text-500 dark:text-text-400 hover:bg-background-400 dark:hover:bg-background-600 hover:text-text-900 dark:hover:text-text-50'
              }`}
            >
              {t("hire_me")}
            </Link>
            <div className="divider-horizontal my-4" />
          </div>
          <div className="grid grid-flow-rows grid-cols-2 md:flex md:flex-col">
            {Object.entries(LANGUAGES).map(([key, value]) => (
              <a
                key={key}
                href="#"
                onClick={() => handleLanguageChange(key)}
                className={`flex flex-row justify-start gap-4 px-4 py-2 text-sm font-semibold ${
                  selectedLanguage === key ? 'text-primary-500 hover:bg-background-400 dark:hover:bg-background-600 hover:text-primary-500 dark:hover:text-text-50' : 'text-text-500 dark:text-text-400 hover:bg-background-400 dark:hover:bg-background-600 hover:text-text-900 dark:hover:text-text-50'
                }`}
              >
                <Flag country={key} />
                {value}
              </a>
            ))}
          </div>
          <div className="divider-horizontal my-4" />
          <div id="theme-switcher" className="flex flex-row px-4 justify-between">
            <button onClick={() => toggleTheme('light')} className="flex flex-row items-center gap-2">
              <img src={require('./../assets/icons/3d-sun.png')} className="h-8 w-8 cursor-pointer" />
              Light
            </button>
            {/* <img onClick={() => toggleTheme('sunset')} src={require('./../assets/icons/3d-sun.png')} className="h-8 w-8 cursor-pointer" /> */}
            
            <button onClick={() => toggleTheme('dark')} className="flex flex-row items-center gap-2">
              <img src={require('./../assets/icons/3d-moon.png')} className="h-8 w-8 cursor-pointer" />
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;