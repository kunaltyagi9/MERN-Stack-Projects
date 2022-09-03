import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    // Connect to Database
    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-hwiuya5-shard-00-00.yat4dpy.mongodb.net:27017,ac-hwiuya5-shard-00-01.yat4dpy.mongodb.net:27017,ac-hwiuya5-shard-00-02.yat4dpy.mongodb.net:27017/?ssl=true&replicaSet=atlas-rj1837-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () =>
        console.log(`Database connected successfully`)
    );

    mongoose.connection.on('disconnected', () =>
        console.log(`Database disconnected`)
    );

    mongoose.connection.on('error', (error) =>
        console.log(`Error while connecting with the database: ${error.message}`)
    );
}

export default Connection;

