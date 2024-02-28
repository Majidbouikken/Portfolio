import { useState } from "react";
import { FlagAlgerian, FlagArabic, FlagDeutsch, FlagEnglish, FlagFrench, FlagItalian, FlagJapanese } from "../icons";

const LANGUAGES = {
    "ar": "العربية",
    // "de": "Deutsch",
    "en": "English",
    "fr": "Francais",
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
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

    return (
        <div className="group fixed h-12 w-12 top-4 end-4 bg-gray-800/50 hover:bg-gray-800 px-4 py-2 gap-3 border-gray-600/50 hover:border-gray-600 border-2 rounded-full transition-colors duration-500">
            <div className="absolute w-64 top-full -right-4 p-4 transition-all opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 duration-300 pointer-events-none group-hover:pointer-events-auto">
                <div className="flex flex-col py-4 bg-gray-800 border-gray-600 border-2 rounded-3xl">
                    {Object.entries(LANGUAGES).map(([key, value]) => (
                      <a
                        key={key}
                        href="#"
                        onClick={() => {console.log("Language changed!")}}
                        className={`flex flex-row justify-between px-4 py-2 text-sm ${
                          selectedLanguage === key ? 'text-blue-500 hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-600 hover:text-white'
                        }`}
                      >
                        <Flag country={key} />
                        {value}
                      </a>
                    ))}
                    <div className="divider-horizontal my-4" />
                    <div id="theme-switcher" className="flex flex-row px-4 justify-between">
                      <a>Day</a>
                      <a>Sunset</a>
                      <a>Night</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;