import Category from "./Category";
import Technology from "./Technology";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    role: string;
    link: string | null;
    date: Date;
    description: string;
    thumbnail: string;
    images: string[];
    awards: string[];
    technologies: Technology[];
    category: Category;
}

export default Project;