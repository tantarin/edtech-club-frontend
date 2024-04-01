import { Link } from 'react-router-dom';

interface ProjectSingleProps {
    title: string;
    content: string;
    image: number[];
}

const NewsSingle = ({ title, content, image }: ProjectSingleProps) => {
    const imageData = `data:image/jpeg;base64,${image}`;

    return (
        <div className="transform rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-ternary-dark relative">
            <Link to={`/news/1`}>
                <div>
                    <img
                        src={imageData}
                        style={{ width: "100%", height: "200px" }} // Задайте максимальные размеры изображения
                        className="rounded-t-xl border-none"
                        alt={title}
                    />
                </div>
                <div className="text-left px-4 py-6">
                    <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2 line-clamp-1">
                        {title}
                    </p>
                    <p className="mb-4 text-base line-clamp-3">
                        {content}
                    </p>
                </div>
            </Link>
            <div className="border-t-2 border-neutral-100 px-6 py-2 text-surface/75 dark:border-white/10 dark:text-neutral-300 absolute bottom-1 w-full">
                <div className="mt-auto">2 days ago</div>
            </div>
        </div>
    );
};

export default NewsSingle;
