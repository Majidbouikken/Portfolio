import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";

const LOCALES: {[key: string]: string;} = {
  'en': 'en-UK',
  'fr': 'fr-FR',
  // 'it': 'it-IT',
  'de': 'de-DE',
  // 'es': 'es-ES',
  // 'pt': 'pt-PT',
  'ar': 'ar-DZ',
  // 'jp': 'jp-JP',
};

interface SiteMetadata {
  site: {
    siteMetadata: {
      available: string;
      timezone: string;
      location: string;
    };
  };
}

const Availability: React.FC = () => {
    const data: SiteMetadata = useStaticQuery(graphql`
      query Availability {
        site {
          siteMetadata {
            available
            timezone
            location
          }
        }
      }
    `);
    const { t, i18n } = useTranslation();
    const available = data.site.siteMetadata.available;
    const timezone = data.site.siteMetadata.timezone;
    const location = data.site.siteMetadata.location;
    const options: Intl.DateTimeFormatOptions = { timeZone: timezone, hour12: true, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    const localTime = new Intl.DateTimeFormat(LOCALES[i18n.language], options).format(new Date());

    return (<Link to="/hire-me" className="group fixed flex flex-row h-12 justify-stretch items-center top-4 start-4 px-4 py-2 gap-3 bg-background-200/50 hover:bg-background-200/80 dark:bg-background-800/50 dark:hover:bg-background-800/80 border-background-400/50 hover:border-background-400 dark:border-background-600/50 dark:hover:border-background-600 border-2 rounded-full backdrop-blur-md z-20 transition-colors duration-500 cursor-pointer">
        {available?
            (<div className="rotate-45 flex">
                <div className="h-2 w-2 bg-green-400 rounded-sm animate-throb" />
                <div className="absolute m-auto h-2 w-2 bg-green-400 rounded-sm" />
            </div>) :
            (<div className="rotate-45 flex">
                <div className="h-2 w-2 bg-red-400 rounded-full animate-throb" />
                <div className="absolute m-auto h-2 w-2 bg-red-400 rounded-full" />
            </div>)
        }
        <div className="text-text-500 dark:text-text-400">
            {available? t('open_for_work') : t('not_available')}
        </div>
        <div className="hidden sm:block md:hidden lg:block absolute start-full px-4 text-nowrap transition-all -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-500 delay-300 pointer-events-none">
            {localTime} | {location}
        </div>
    </Link>);
}

export default Availability;