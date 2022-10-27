import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true  
    },
    userPicture: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    likes: {
        type: [],
        required: true
    },
    comments: {
        type: [],
        required: true
    }
});


const post = mongoose.model('post', postSchema);

export default post;