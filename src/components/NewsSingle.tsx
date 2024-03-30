import { Link } from 'react-router-dom';

interface ProjectSingleProps {
    title: string;
    content: string;
    image: string;
}

const NewsSingle = ({ title, content, image }: ProjectSingleProps) => {
    return (
        <div className="transform  rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-ternary-dark">
            <Link to="/projects/single-project" aria-label="Single Project">
                    <div>
                    <img
                            src={image}
                            className="rounded-t-xl border-none"
                            alt="Single Project"
                        />
                    </div>
                    <div className="text-left px-4 py-6">
                        <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                        {title}
                        </p>
                        <p className="mb-4 text-base line-clamp-3">
                            {content}
                        </p>
                    </div>
            </Link>
         </div>
    );
};

export default NewsSingle;
