import { useEffect, useRef, useState } from 'react';
import Category from '../types/Category';
import Project from '../types/Project';

interface ProjectCardInterface {
    work: Project;
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ work }) => {
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
        <div className='group flex flex-col items-start gap-1 cursor-pointer'>
            <img key={thumbnail} src={work.thumbnail} alt={thumbnail} className='brightness-100 group-hover:brightness-50 transition-all duration-500' />
            <caption className='text-sm -mt-8 text-primary-500 font-bold'>{Category[work.category]}</caption>
            <h2 className='text-2xl -mt-2 font-semibold line-clamp-1 text-ellipsis'>{work.title}</h2>
            <div ref={lineRef} className='h-1 w-full rounded-full bg-gray-800'>
                <div className='h-1 w-0 group-hover:w-full rounded-full bg-primary-500 transition-scale duration-500 ease-out' />
            </div>
            {/* <div>{formatDate(work.date)}</div> */}
            <p className='line-clamp-3 text-ellipsis'>{work.description}</p>
        </div>
    );
}

export default ProjectCard;