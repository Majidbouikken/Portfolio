import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';
import Category from '../types/Category';

const WorksPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

    var filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

    return (
        <div id="works-page" className="max-w-7xl mx-auto my-32 p-8">
            <div className="flex flex-col items-baseline gap-8">
                <h1 className="text-6xl max-w-5xl">Here you can find all my works and projects</h1>
                <div className="flex flex-row gap-4 text-2xl">
                    <a onClick={e => setSelectedCategory("All")} className="text-white/50 hover:text-white focus:text-primary-500 cursor-pointer transition-colors duration-500" style={{color: selectedCategory === "All"? '#4746eb': ''}}>All</a>
                    { (Object.keys(Category).filter(key => isNaN!(Number(key))) as (keyof typeof Category)[]).map(
                        category => (
                            <a key={category} onClick={e => setSelectedCategory(Category[category as keyof typeof Category])} className="text-white/50 hover:text-white focus:text-primary-500 cursor-pointer transition-colors duration-500" style={{ color: Category[selectedCategory as number] === category.toString() ? '#4746eb' : ''}}>{category}</a>
                        )
                    ) }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    { filteredProjects.map((work, index) => (<ProjectCard key={index} work={work} />)) }
                </div>
                <div className='h-96' />
            </div>
        </div>
    );
}

export default WorksPage;