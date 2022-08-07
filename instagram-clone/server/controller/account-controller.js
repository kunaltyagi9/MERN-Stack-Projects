import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import User from '../model/user.js';

dotenv.config();

export const singupUser = async (request, response) => {
    try {

        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(409).json({ msg: 'Username already exists' });
        }

        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const user = { ...request.body, password: hashedPassword }

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json(newUser);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}


export const loginUser = async (request, response) => {
    let user = await User.findOne({ username: request.body.username });
    if (!user) {
        return response.status(404).json({ msg: 'Username does not exist' });
    }

    try {
        let match = await bcrypt.compare(request.body.password, user.password);
        if (match) {
            return response.status(200).json(user);
        } 
        response.status(400).json({ msg: 'Incorrect password' })
    
    } catch (error) {
        response.status(500).json({ msg: 'error while login the user' })
    }
}