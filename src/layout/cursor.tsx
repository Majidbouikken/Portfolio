import React, { useEffect, useState } from 'react';
import '@/pages/index.css';

const Cursor: React.FC = () => {
    const [position, setPosition] = useState<{x: number | null, y: number | null}>({ x: null, y: null });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.pageX - 10, y: event.pageY - 10 });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (position.x != null && position.y != null) return (
        <div
            className="absolute w-5 h-5 z-[9999] pointer-events-none bg-background-200/80 dark:bg-background-800/80 border-background-400 dark:border-background-600 border-2 rounded-full duration-100 ease-out"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    ); else return (<></>);
};

export default Cursor;