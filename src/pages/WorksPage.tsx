import WorkCard from '../components/WorkCard';
import { works } from '../data/works';
import { useState } from 'react';
import Category from '../types/Category';

const WorksPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

    var filteredProjects = selectedCategory === "All" ? works : works.filter(project => project.category === selectedCategory);

    return (
        <div id="works-page" className="max-w-7xl mx-auto my-32 px-8">
            <div className="flex flex-col items-baseline gap-4">
                <h1 className="max-w-5xl">Here you can find<br />all my works and projects</h1>
                <div className="flex flex-wrap gap-4 text-2xl">
                    <a
                    key={0}
                    onClick={e => setSelectedCategory("All")}
                    className="text-text-500 hover:text-text-900 dark:text-text-400 dark:hover:text-text-50 focus:text-primary-500 transition-colors duration-500"
                    style={selectedCategory === "All"? {color: '#4746eb', cursor: 'default'}: {cursor: 'pointer'}}>
                        All
                    </a>
                    { (Object.keys(Category).filter(key => isNaN!(Number(key))) as (keyof typeof Category)[]).map(
                        category => (
                            <a
                            key={category}
                            onClick={e => setSelectedCategory(Category[category as keyof typeof Category])}
                            className="text-text-500 hover:text-text-900 dark:text-text-400 dark:hover:text-text-50 focus:text-primary-500 cursor-pointer transition-colors duration-500"
                            style={Category[selectedCategory as number] === category.toString()? {color: '#4746eb', cursor: 'default'}: {cursor: 'pointer'}}>
                                {category}
                            </a>
                        )
                    ) }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    { filteredProjects.map((work, index) => (<WorkCard key={index} work={work} />)) }
                </div>
                <div className='h-96' />
            </div>
        </div>
    );
}

export default WorksPage;