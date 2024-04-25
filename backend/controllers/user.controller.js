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


