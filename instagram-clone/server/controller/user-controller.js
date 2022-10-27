
import User from '../model/user.js';

export const getAllUsers = async (request, response) => {
    try {

        const users = await User.find({});
        if (!users) {
            return response.status(404).json({ msg: 'No data found' });
        }

        return response.status(200).json({ data: users });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while getting all users' });
    }
}

export const getUser = async (request, response) => {
    try {
        const user = await User.findOne({ username: request.body.username });

        if (!user) {
            return response.status(404).json({ msg: 'User not found' });
        }

        return response.status(200).json({ data: user });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while getting user information' });
    }
}

export const followUser = async (request, response) => {
    try {
        const self = await User.findOne({ username: request.body.account });
        const user = await User.findOne({ username: request.body.user });
        
        await User.findByIdAndUpdate(self._id, { $set: { 'following': [...self.following, user] } })
        await User.findByIdAndUpdate(user._id, { $set: { 'followers': [...user.followers, self] } })

        return response.status(200).json({ msg: `you are now following ${request.body.user}` });
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ msg: 'Something went wrong' });
    }
}