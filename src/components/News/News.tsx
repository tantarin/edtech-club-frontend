import React, { useState, useEffect } from "react";
import { getNews } from "../../services/user.service";
import { getCurrentUser } from "../../services/auth.service";
import IUser from "../../types/user.type";
import "./News.css";
import NewsSingle from "../NewsSingle";
import { Link } from "react-router-dom";

interface IContent {
    content: string;
    date: string;
    header: string;
    image: number[];
    id: number;
}

const News: React.FC = () => {
    const [content, setContent] = useState<IContent[]>([]);
    const [user, setUser] = useState<IUser | undefined>(() => getCurrentUser());

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = () => {
        getNews()
            .then((response) => {
                setContent(response.data);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
            });
    };

    return (
        <>
            <div className="showcase2">
                <div className="overlay px-5">
                    <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-6xl">
                        Мероприятия клуба
                    </h1>
                </div>
            </div>
            {/* Button */}
            <div className="max-w-screen-xl mx-auto px-5 sm:px-5 md:px-5 py-2 sm:py-2 md:py-2 flex justify-start mt-2">
                <Link to="/addNews" style={{ marginTop: "0rem", marginBottom: "0rem" }}>
                    <button className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 shadow-md">
                        Добавить новость
                    </button>
                </Link>

            </div>
            {/* News Cards */}
            <div className="max-w-screen-xl mx-auto px-5 py-2 sm:p-10 md:p-16 mt-0" style={{ marginTop: "0rem"}}>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {content.map((item) => (
                        <NewsSingle
                            id={item.id}
                            title={item.header}
                            content={item.content}
                            image={item.image}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default News;
