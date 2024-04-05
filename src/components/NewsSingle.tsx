import {Link} from 'react-router-dom';
import React from "react";
import {deleteAd} from "../services/ads.service";

interface ProjectSingleProps {
    id: number;
    title: string;
    content: string;
    image: number[];
}

const handleDelete = async (id: number) => {
    try {
        // await deleteAd(id);
        // setContent(prevContent => prevContent.filter(ad => ad.id !== id));
        // setFilteredAdsList(prevContent => prevContent.filter(ad => ad.id !== id)); // Удаление объявления из отфильтрованного списка
        // console.log("Ad deleted successfully");
    } catch (error) {
        console.error("Error deleting ad:", error);
    }
};

const NewsSingle = ({id, title, content, image}: ProjectSingleProps) => {
    const imageData = `data:image/jpeg;base64,${image}`;

    return (
        <div
            className="transform rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer dark:bg-ternary-dark relative">
            <Link to={`/news/1`}>
                <div className="flex justify-end mr-2"> {/* Добавляем родительский div с flex и justify-end */}
                    <a href="#dismiss-card">
                        <button
                            type="button"
                            className="size-4 rounded-lg text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                            data-hs-remove-element="#dismiss-card"
                            onClick={() => handleDelete(id)}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="flex-shrink-0 size-7 pr-2"
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0" viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                            </svg>
                        </button>
                    </a>
                </div>
                <div>
                    <img
                        src={imageData}
                        style={{width: "100%", height: "200px"}}
                        className="border-none"
                        alt={title}
                    />
                </div>
                <div className="text-left px-4 py-4">
                    <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2 line-clamp-1">
                        {title}
                    </p>
                    <p className="mb-4 text-base line-clamp-3">
                        {content}
                    </p>
                </div>
            </Link>
            <div className="border-t-2 border-neutral-100 px-6 py-2 text-surface/75 dark:border-white/10 dark:text-neutral-300 absolute bottom-1 w-full flex items-center justify-between">
                <div className="flex items-center">
                    <div className="text-s mr-2 text-slate-400">31st June, 2022</div>
                </div>
                <a className="text-s text-slate-400" href="https://vk.com/share.php?url=https://www.herzen.spb.ru/" target="_blank">Поделиться ВКонтакте</a>
            </div>

        </div>
    );
};

export default NewsSingle;
