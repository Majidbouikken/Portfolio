import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderLink: React.FC<{ to: string, target?: string, children: ReactNode }> = ({ to, target, children }) => {
    const location = useLocation();

    const isOnPath = location.pathname === `/${to}`;

    return (<Link to={to} target={target} className={`${isOnPath? `text-primary-500 dark:text-text-50`: `text-text-500 dark:text-text-400 hover:text-primary-700 dark:hover:text-text-50`} font-semibold transition-colors duration-500`}>{children}</Link>);
}

export default HeaderLink;