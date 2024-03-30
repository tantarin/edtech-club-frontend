import React, {useState, useEffect} from "react";
import {getNews} from "../../services/user.service";
import {getCurrentUser} from "../../services/auth.service";
import IUser from "../../types/user.type";
import "./News.css";
import Image1 from "../../assets/img/ui-project-1.jpg";
import NewsSingle from "../NewsSingle";

interface IContent {
    content: string;
    date: string;
    header: string;
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
            .then(response => {
                setContent(response.data);
            })
            .catch(error => {
                console.error("Error fetching news:", error);
            });
    };

    return (
        <>
            <div className="showcase2">
                <div className="overlay px-5">
                    <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-6xl">
                        События клуба
                    </h1>
                </div>
            </div>
            {/*Card*/}
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {content.map(item => (
                        <NewsSingle
                            title={item.header}
                            content={item.content}
                            image='https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default News;
