import { ReactNode } from "react";
import { Link } from "react-router-dom";

const HeaderLink: React.FC<{ to: string, target?: string, children: ReactNode }> = ({ to, target, children }) => {
    return (<Link to={to} target={target} className="text-white/60 hover:text-white transition-colors duration-500">{children}</Link>);
}

export default HeaderLink;