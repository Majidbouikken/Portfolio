import { ReactNode } from "react";
import { useLocation } from '@reach/router';
import { Link } from 'gatsby-plugin-react-i18next';

const HeaderLink: React.FC<{ to: string, target?: string, children: ReactNode }> = ({ to, target, children }) => {
    const location = useLocation();

    const isOnPath = location.pathname.includes(`${to}/`);

    return (<Link to={to} target={target} rel="preload" className={`${isOnPath? `text-primary-500 dark:text-text-50`: `text-text-500 dark:text-text-400 hover:text-primary-700 dark:hover:text-text-50`} font-semibold transition-colors duration-500`}>{children}</Link>);
}

export default HeaderLink;