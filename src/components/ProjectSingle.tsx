import { Link } from 'react-router-dom';

interface ProjectSingleProps {
    title: string;
    category: string;
    image: string;
}

const ProjectSingle = ({ title, category, image }: ProjectSingleProps) => {
    return (
        <div className="transform rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105">
            <Link to="/projects/single-project" aria-label="Single Project">
                <div className="h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div>
                        <img
                            src={image}
                            className="rounded-t-xl border-none w-full h-40 object-cover object-center"
                            alt="Single Project"
                        />
                    </div>
                    <div className="text-center px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                            {title}
                        </p>
                        <p className="mb-4 text-base text-slate-500">
                            {category}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectSingle;
