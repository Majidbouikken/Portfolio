import Platform from "./Platform";
import Technology from "./Technology";

interface Work {
    id: string;
    title: string;
    role: string;
    link: string;
    date: Date;
    description: string;
    images: string[];
    awards: string[];
    technologies: Technology[];
    platforms: Platform;
}

export default Work;