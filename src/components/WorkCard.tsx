import { useEffect, useRef, useState } from 'react';
import Category from '../types/Category';
import WorkType from '../types/Work';
import { Link } from 'react-router-dom';

interface WorkCardInterface {
    work: WorkType;
}

const WorkCard: React.FC<WorkCardInterface> = ({ work }) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const [thumbnail, setthumbnail] = useState<string>(work.thumbnail);

    useEffect(() => {
        if (lineRef.current) {
            if (lineRef.current.previousSibling){
                const titleWidth = (lineRef.current.previousSibling as HTMLDivElement).offsetWidth;
                lineRef.current.style.width = `${titleWidth}px`;
            }
        }
    });

    return (
        <Link to={`/${work.title}`} className='group flex flex-col items-start gap-1 cursor-pointer'>
            <img key={thumbnail} src={work.thumbnail} alt={thumbnail} className='brightness-100 group-hover:opacity-50 transition-opacity duration-500' />
            <caption className='-mt-8 text-primary-500 font-bold'>{Category[work.category]}</caption>
            <h3 className='-mt-2 font-semibold line-clamp-1 text-ellipsis'>{work.title}</h3>
            <div ref={lineRef} className='h-1 w-full rounded-full bg-background-200 dark:bg-background-800'>
                <div className='h-1 w-0 group-hover:w-full rounded-full bg-primary-500 transition-scale duration-500 ease-out' />
            </div>
            {/* <div>{formatDate(work.date)}</div> */}
            <p className='line-clamp-3 text-ellipsis'>{work.subtitle}</p>
        </Link>
    );
}

export default WorkCard;