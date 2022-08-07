import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true  
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    followers: {
        type: [],
        required: true
    },
    following: {
        type: [],
        required: true
    },
    profileUrl: {
        type: String,
        required: true
    }
});


const user = mongoose.model('user', userSchema);

export default user;