import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import "./digest.css";
import Newsletter from "../components/Newsletter";
import { fetchNews, Article, ResponseNews } from "../services/news/yandextech";
import { useAsync } from "../common/useAsync";

const NewsList: React.FC<{articles: Article[]}> = ({articles}) => {
    return (
        <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
            {articles.map((article, idx) => {
                const {
                    source,
                    author,
                    title,
                    description,
                    url,
                    urlToImage,
                    publishedAt,
                    content
                } = article;
                return (
                    <article key={idx} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
                        <h2 className="font-bold text-2xl mb-5 lg:text-4xl">{title}</h2>
                        <p>{description}</p>
                        <ul className="my-4">
                            <li>
                                <span className="font-bold">News Desk:</span>
                                {source.id}
                            </li>
                            <li>
                                <span className="font-bold">Section Name:</span>{' '}
                                {source.name}
                            </li>
                            {/* <li>
                            <span className="font-bold">Word Count: </span>
                            {word_count}
                        </li> */}
                        </ul>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
                            Web Resource
                        </a>
                    </article>
                );
            })}
        </section>
    );
}

const Digest: React.FC = () => {
    const { data, run, status, error } = useAsync<ResponseNews>();
    const [term, setTerm] = useState('everything');

    useEffect(() => {
        (async () => {
            run(fetchNews());
        })()
    }, [run])

    const handleSearchText = (text: string) => {
        setTerm(text);
    };

    const isLoading = status === 'pending';
    const articles = (data?.articles || []) as Article[];

    return (
        <>
            <div className="showcase">
                <div className="overlay px-5">
                    <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-6xl">
                        Ежемесячный EdTech-дайджест
                    </h1>
                    <SearchForm searchText={handleSearchText} />
                </div>
            </div>
            {/*<Newsletter />*/}
            {isLoading ? (
                <h1 className="text-center mt-20 font-bold text-6xl">Loading...</h1>
            ) : (
               <NewsList articles={articles} />
            )}
        </>
    );
};

export default Digest;
