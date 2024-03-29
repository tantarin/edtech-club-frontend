import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import "./digest.css";
import Newsletter from "../components/Newsletter";

const Digest: React.FC = () => {
    const [articles, setArticles] = useState([]);
    const [term, setTerm] = useState('everything');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=education&api-key=RXQrHBOX22Ueq3N8AAF7YW8ZAUhi20mK`)
                const articles = await res.json();
                console.log(articles.response.docs);
                setArticles(articles.response.docs);
                setIsLoading(false);
            } catch (e) {
                console.error(e);
            }
        }
        fetchArticles()
    }, [term])

    const handleSearchText = (text: string) => {
        setTerm(text);
    };

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
            <Newsletter />
            {isLoading ? (
                <h1 className="text-center mt-20 font-bold text-6xl">Loading...</h1>
            ) : (
                <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
                    {articles.map((article) => {
                        const {
                            abstract,
                            headline: { main },
                            byline: { original },
                            lead_paragraph,
                            news_desk,
                            section_name,
                            web_url,
                            _id,
                            word_count,
                        } = article;
                        return (
                            <article key={_id} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
                                <h2 className="font-bold text-2xl mb-5 lg:text-4xl">{main}</h2>
                                <p>{abstract}</p>
                                <p>{lead_paragraph}</p>
                                <ul className="my-4">
                                    <li>{original}</li>
                                    <li>
                                        <span className="font-bold">News Desk:</span>
                                        {news_desk}
                                    </li>
                                    <li>
                                        <span className="font-bold">Section Name:</span>{' '}
                                        {section_name}
                                    </li>
                                    <li>
                                        <span className="font-bold">Word Count: </span>
                                        {word_count}
                                    </li>
                                </ul>
                                <a href={web_url} target="_blank" rel="noopener noreferrer" className="underline">
                                    Web Resource
                                </a>
                            </article>
                        );
                    })}
                </section>
            )}
        </>
    );
};

export default Digest;
