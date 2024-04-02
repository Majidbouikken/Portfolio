import { Link } from "gatsby-plugin-react-i18next";
import { ReactNode, useEffect } from "react";

const ScrollLink: React.FC<{ targetId: string, children: ReactNode }> = ({ targetId, children }) => {
    const scrollToComponent = () => {
        useEffect(() => {
            if (typeof document !== "undefined") {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
          });
      };
    
    return (<Link 
        to="#"
        onClick={scrollToComponent}
        className="text-text-500 dark:text-text-400 hover:text-primary-500 dark:hover:text-text-50 font-semibold transition-colors duration-500">{children}</Link>);
}

export default ScrollLink;