import { Blog } from "../models/blog.js";
import axios from "axios";
import mongoose from "mongoose";

export const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json({ blogs });
};

export const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (blog) return res.status(200).json({ blog });
        return res.status(404).json({ message: "Blog not found" });
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Error occurred while fetching blog" });
    }
};

export const createBlog = async (req, res) => {
    const { title, city, description } = req.body;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    try {
        let response;
        response = await axios.post(
            "http://localhost:7001/api/auth/authenticate",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data.uidd);
        const requestBody = {
            uid: `${response.data.uidd}`,
        };
        const response2 = await axios.post(
            "http://localhost:7001/api/user/getUser",
            requestBody
        );
        console.log(response2.data);
        const UID = response2.data.UID;
        const author = response2.data.firstName + " " + response2.data.surname;
        const newBlog = await Blog.create({
            title,
            city,
            description,
            UID,
            author,
        });
        res.status(201).json({ blog: newBlog });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while creating new blog.",
        });
    }
};
