import React, {useState, useEffect} from "react";
import {getNews} from "../../services/user.service";
import {getCurrentUser} from "../../services/auth.service";
import IUser from "../../types/user.type";
import "./News.css";
import Image1 from "../../assets/img/ui-project-1.jpg";
import NewsSingle from "../NewsSingle";
import {Link} from "react-router-dom";

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
                        Мероприятия клуба
                    </h1>
                </div>
            </div>
            {/*Card*/}
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                {<Link to="/addNews" style={{textDecoration: "none"}}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Button
                    </button>
                </Link>}
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
