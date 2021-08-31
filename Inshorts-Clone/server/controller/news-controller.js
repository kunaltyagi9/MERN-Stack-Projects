
import News from '../model/news.js';


export const getNews = async (request, response) => {
    console.log('eh')
    try {
        const data = await News.find();
        
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json(error);
    }
}