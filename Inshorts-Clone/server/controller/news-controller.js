
import News from '../model/news.js';


export const getNews = async (request, response) => {
    try {
        const size = Number(request.query.size);
        const skip = Number(request.query.page);
        console.log(size, skip)
        const data = await News.find({}).limit(size).skip(size * skip);
        // console.log(data.count());
        response.status(200).json(data);
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}