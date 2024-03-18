import { ReactNode } from "react";
import { Link } from "react-router-dom";

const HeaderLink: React.FC<{ to: string, target?: string, children: ReactNode }> = ({ to, target, children }) => {
    return (<Link to={to} target={target} className="text-text-500 dark:text-text-400 hover:text-primary-500 dark:hover:text-text-50 transition-colors duration-500">{children}</Link>);
}

export default HeaderLink;