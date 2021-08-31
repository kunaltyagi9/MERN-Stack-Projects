import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

//components
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews();
            setNews(response.data);
        }
        dailyNews();
    }, [])

    return (
        news.map(article => (
            <Article article={article} />
        ))
    )
}

export default Articles;