import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@insta-clone-shard-00-00.tk3ep.mongodb.net:27017,insta-clone-shard-00-01.tk3ep.mongodb.net:27017,insta-clone-shard-00-02.tk3ep.mongodb.net:27017/?ssl=true&replicaSet=atlas-545t1k-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;