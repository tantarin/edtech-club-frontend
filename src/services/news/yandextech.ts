const token = process.env.REACT_APP_NEWS_TOKEN;

export interface Article {
    "source": {
        "id": string,
        "name": string
    },
    "author": string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string | null,
    "publishedAt": string,
    "content": null
}

export interface ResponseNews {
    articles: Article[];
    status: string;
    totalResults: number;

}

export const fetchNews = async () => {
    const newsUrl = 'https://newsapi.org/v2/top-headlines?' + new URLSearchParams({
        language: 'ru',
        category: 'science',
        sortBy: 'popularity',
        apiKey: token || '',
    });
    if (!token) throw new Error('cant handle token from env')
    const result = await fetch(newsUrl);
    return result.json() as Promise<ResponseNews>
}