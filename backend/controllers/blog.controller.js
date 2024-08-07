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
        const blog = await Blog.findById(id).populate("comments");
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

export const likeBlog = async (req, res) => {
    const { id } = req.params;
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
        const blog = await Blog.findById(id);
        if (blog) {
            if (blog.likedBy.includes(UID)) {
                return res.status(200).json({ message: "Already liked" });
            } else {
                blog.likes = blog.likes + 1;
                if (blog.dislikedBy.includes(UID)) {
                    const index = blog.dislikedBy.indexOf(UID);
                    blog.dislikedBy.splice(index, 1);
                    blog.dislikes = blog.dislikes - 1;
                }
                blog.likedBy.push(UID);
                await blog.save();
                return res.status(200).json({ message: "Like updated", blog });
            }
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while liking the blog.",
        });
    }
};

export const dislikeBlog = async (req, res) => {
    const { id } = req.params;
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
        const blog = await Blog.findById(id);
        if (blog) {
            if (blog.dislikedBy.includes(UID)) {
                return res.status(200).json({ message: "Already disliked" });
            } else {
                blog.dislikes = blog.dislikes + 1;
                if (blog.likedBy.includes(UID)) {
                    const index = blog.likedBy.indexOf(UID);
                    blog.likedBy.splice(index, 1);
                    blog.likes = blog.likes - 1;
                }
                blog.dislikedBy.push(UID);
                await blog.save();
                return res
                    .status(200)
                    .json({ message: "Dislike updated", blog });
            }
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while disliking the blog.",
        });
    }
};

export const likeStatus = async (req, res) => {
    const { id } = req.params;
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
        const blog = await Blog.findById(id);
        if (blog) {
            if (blog.likedBy.includes(UID)) {
                return res.status(200).json({
                    message: "ok",
                    status: "liked",
                });
            } else if (blog.dislikedBy.includes(UID)) {
                return res.status(200).json({
                    message: "ok",
                    status: "disliked",
                });
            } else {
                return res.status(200).json({
                    message: "ok",
                    status: "neutral",
                });
            }
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error",
            status: "Error occurred while fetching like status.",
        });
    }
};
