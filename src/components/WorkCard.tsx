import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface WorkCardInterface {
    work: {
        title: string;
        subtitle: string;
        category: string;
        slug: string;
        thumb: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData
            }
        };
    }
}

const WorkCard: React.FC<WorkCardInterface> = ({ work }) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (lineRef.current) {
            if (lineRef.current.previousSibling){
                const titleWidth = (lineRef.current.previousSibling as HTMLDivElement).offsetWidth;
                lineRef.current.style.width = `${titleWidth}px`;
            }
        }
    });

    return (
        <Link to={`/works/${work.slug}`} className='group flex flex-col items-start gap-1 cursor-pointer'>
            <GatsbyImage image={work.thumb.childImageSharp.gatsbyImageData} alt={work.slug} className='brightness-100 group-hover:opacity-50 transition-opacity duration-500 z-0' />
            <h5 className='-mt-8 font-extralight text-primary-500'>{t(work.category)}</h5>
            <h3 className='-mt-2 font-semibold line-clamp-1 text-ellipsis'>{work.title}</h3>
            <div ref={lineRef} className='h-1 w-full rounded-full bg-background-200 dark:bg-background-800'>
                <div className='h-1 w-0 group-hover:w-full rounded-full bg-primary-500 transition-scale duration-500 ease-out' />
            </div>
            {/* <div>{formatDateMonthYear(work.date)}</div> */}
            <p className='line-clamp-3 text-ellipsis'>{work.subtitle}</p>
        </Link>
    );
}

export default WorkCard;