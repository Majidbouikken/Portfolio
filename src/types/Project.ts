import Category from "./Category";
import Technology from "./Technology";

interface Project {
    id: string;
    title: string;
    subtitle: string;
    role: string;
    collaborators: string[] | null;
    company: string | null;
    link: string | null;
    date: Date;
    description: string;
    thumbnail: string;
    images: string[];
    awards: string[];
    technologies: Technology[];
    category: Category;
    isPrototype: boolean;
}

export default Project;