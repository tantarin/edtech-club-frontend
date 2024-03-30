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
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
                    <div>
                    <img
                            src={image}
                            className="rounded-t-xl border-none"
                            alt="Single Project"
                        />
                    </div>
                    <div className="text-center px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                        {title}
                        </p>
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
