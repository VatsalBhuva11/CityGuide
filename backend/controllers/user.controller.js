import mongoose from "mongoose";
import {mongooseConfig} from "../config.js"
import {User} from "../models/User.js"



mongoose.connect(mongooseConfig)
.then(con=>{
    // console.log(con.connections);
    console.log("MongoDB Connect Sucessfull");
}).catch(err=>console.log(err));

export const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const findUserByUID = async (req, res) => {
    const { uid } = req.body; // Assuming UID is passed as a route parameter  
    try {
        const user = await User.findOne({ UID: uid });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


