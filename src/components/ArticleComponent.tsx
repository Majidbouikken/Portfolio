import Markdown from "markdown-to-jsx";
import { ReactNode } from "react";

interface ArticleBlockProps {
    children: ReactNode;
}

const ArticleComponent: React.FC<{ content: string }> = ({ content }) => {
    const options = {
        overrides: {
            h1: { component: Heading1Block },
            h2: { component: Heading2Block },
            h3: { component: Heading3Block },
            p: { component: ParagraphBlock },
            strong: { component: StrongBlock },
            table: { component: Table },
            th: { component: TableHeader },
            td: { component: TableDataCell },
            ul: { component: UnorderedListBlock },
            ol: { component: OrderedListBlock },
            li: { component: ListItemBlock },
        }
    }

    return (<Markdown options={options}>{content}</Markdown>);
};

const Table: React.FC<ArticleBlockProps> = ({ children }) => {
    return <table className="w-full text-start">{children}</table>
}

const TableHeader: React.FC<ArticleBlockProps> = ({ children }) => {
    return <th className="text-start py-3 border-b-4 border-background-400 dark:border-background-700">{children}</th>
}

const TableDataCell: React.FC<ArticleBlockProps> = ({ children }) => {
    return <td className="text-start align-top py-2">{children}</td>
}

const Heading1Block: React.FC<ArticleBlockProps> = ({ children }) => {
    return <h1 className="text-text-900 dark:text-text-50 mt-12 mb-6 font-bold">{children}</h1>;
};

const Heading2Block: React.FC<ArticleBlockProps> = ({ children }) => {
    return <h2 className="text-text-900 dark:text-text-50 mt-12 mb-3 font-bold">{children}</h2>;
};

const Heading3Block: React.FC<ArticleBlockProps> = ({ children }) => {
    return <h3 className="text-text-900 dark:text-text-50 mt-6 mb-3">{children}</h3>;
};

const ParagraphBlock: React.FC<ArticleBlockProps> = ({ children }) => {
    return <p className="text-text-900 dark:text-text-50 my-6">{children}</p>;
};

const StrongBlock: React.FC<ArticleBlockProps> = ({ children }) => {
    return <strong className="text-text-900 dark:text-text-50 my-6 font-bold">{children}</strong>;
};

const Hyperlink: React.FC<ArticleBlockProps> = ({ children }) => {
    return <a className="text-primary-500 my-3 cursor-pointer">{children}</a>;
};

const UnorderedListBlock: React.FC<ArticleBlockProps> = ({ children }) => {
    return <ul className="pl-8 mt-6">{children}</ul>;
};

const OrderedListBlock: React.FC<ArticleBlockProps> = ({ children }) => {
    return <ol className="text-red-800 my-3">{children}</ol>;
};

const ListItemBlock: React.FC<ArticleBlockProps> = ({ children }) => {
    return <li className="text-text-900 dark:text-text-50 my-3 list-disc">{children}</li>;
};

const ImageBlcok: React.FC<ArticleBlockProps> = ({ children }) => {
    return <img src="" className="w-full">{children}</img>;
};

export default ArticleComponent;