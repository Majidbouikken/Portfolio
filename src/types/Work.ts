import Category from "./Category";
import Technology from "./Technology";

interface WorkType {
    id: string;
    title: string;
    subtitle: string;
    roles: string[];
    collaborators: string[];
    company: string | null;
    link: string | null;
    date: Date;
    description: string;
    content: string;
    thumbnail: string;
    images: string[];
    video: string | null;
    awards: string[];
    technologies: Technology[];
    category: Category;
    isPrototype: boolean;
}

export default WorkType;