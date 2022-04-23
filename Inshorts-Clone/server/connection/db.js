import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb://${username}:${password}@clone-inshort-shard-00-00.deivq.mongodb.net:27017,clone-inshort-shard-00-01.deivq.mongodb.net:27017,clone-inshort-shard-00-02.deivq.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-ytsxi5-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;