import News from './model/news.js';
import { data } from './constant/data.js';

const DefaultData = async () => {
    try {
        await News.insertMany(data);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;