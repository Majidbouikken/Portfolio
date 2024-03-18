import { useEffect, useState } from "react";
import { FlagAlgerian, FlagArabic, FlagDeutsch, FlagEnglish, FlagFrench, FlagItalian, FlagJapanese } from "../icons";

const LANGUAGES = {
    // "de": "Deutsch",
    "en": "English",
    "fr": "Francais",
    "ar": "العربية",
    // "it": "Italiano",
    // "jp": "日本語",
}

const Flag: React.FC<{ country: string }> = ({ country}) => {
  if (country == "ar") return (<FlagAlgerian className="h-6 w-6" />);
  else if (country == "de") return (<FlagDeutsch className="h-6 w-6" />);
  else if (country == "en") return (<FlagEnglish className="h-6 w-6" />);
  else if (country == "fr") return (<FlagFrench className="h-6 w-6" />);
  else if (country == "it") return (<FlagItalian className="h-6 w-6" />);
  else return (<FlagJapanese className="h-6 w-6" />);
}

const Settings: React.FC = () => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [darkMode, setDarkMode] = useState(systemTheme.matches);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const toggleDark = () => {
    setDarkMode(true);
    localStorage.setItem('darkMode', JSON.stringify(true));
    document.documentElement.classList.toggle('dark', true);
  };

  const toggleLight = () => {
    setDarkMode(false);
    localStorage.setItem('darkMode', JSON.stringify(false));
    document.documentElement.classList.toggle('dark', false);
  };

  return (
    <div className="group fixed h-12 w-12 top-4 end-4 px-4 py-2 gap-3 bg-gray-800/50 hover:bg-gray-800/80 border-gray-600/50 hover:border-gray-600 border-2 rounded-full backdrop-blur-md transition-colors duration-500">
      <div className="absolute w-64 top-full -right-4 p-4 transition-all opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 duration-300 pointer-events-none group-hover:pointer-events-auto">
        <div className="flex flex-col py-4 bg-gray-800/80 border-gray-600 border-2 rounded-3xl backdrop-blur-md">
          {Object.entries(LANGUAGES).map(([key, value]) => (
            <a
              key={key}
              href="#"
              onClick={() => {console.log("Language changed!")}}
              className={`flex flex-row justify-start gap-4 px-4 py-2 text-sm ${
                selectedLanguage === key ? 'text-primary-500 hover:bg-gray-600 hover:text-text-50' : 'hover:bg-gray-600 hover:text-text-50'
              }`}
            >
              <Flag country={key} />
              {value}
            </a>
          ))}
          <div className="divider-horizontal my-4" />
          <div id="theme-switcher" className="flex flex-row px-4 justify-between">
            <a onClick={toggleLight}>Day</a>
            {/* <a onClick={toggleSunset}>Sunset</a> */}
            <a onClick={toggleDark}>Night</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;