import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectSingleProps {
    title: string;
    category: string;
    image: string;
}

const ProjectSingle = ({ title, category, image }: ProjectSingleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.7,
                delay: 1.15, // Установите задержку здесь, если это нужно
            }}
        >
            <Link to="/projects/single-project" aria-label="Single Project">
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">                    <div>
                        <img
                            src={image}
                            className="rounded-t-xl border-none"
                            alt="Single Project"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight">
                            {title}
                        </h5>
                        <p className="mb-4 text-base">
                            {category}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectSingle;
