import { Blog } from "../models/blog.js";
import { Comment } from "../models/comment.js";
import axios from "axios";
export const commentOnBlog = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
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
        const blog = await Blog.findById(id);
        if (blog) {
            const newComment = await Comment.create({
                UID,
                author,
                comment,
            });
            blog.comments.push(newComment);
            await blog.save();
            return res.status(200).json({
                status: "ok",
                message: "Successfully added comment on blog!",
            });
        } else {
            res.status(404).json({
                status: "error",
                message: "Blog not found",
            });
        }
    } catch (err) {
        console.log("Error occurred while commenting on blog: ", err);
        res.status(500).json({ status: "error", message: err });
    }
};

export const likeComment = async (req, res) => {
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
        const comment = await Comment.findById(id);
        if (comment) {
            if (comment.likedBy.includes(UID)) {
                return res.status(200).json({ message: "Already liked" });
            } else {
                comment.likes = comment.likes + 1;
                if (comment.dislikedBy.includes(UID)) {
                    const index = comment.dislikedBy.indexOf(UID);
                    comment.dislikedBy.splice(index, 1);
                    comment.dislikes = comment.dislikes - 1;
                }
                comment.likedBy.push(UID);
                await comment.save();
                return res
                    .status(200)
                    .json({ message: "Like updated", comment });
            }
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while liking the comment.",
        });
    }
};

export const dislikeComment = async (req, res) => {
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
        const comment = await Comment.findById(id);
        if (comment) {
            if (comment.dislikedBy.includes(UID)) {
                return res.status(200).json({ message: "Already disliked" });
            } else {
                comment.dislikes = comment.dislikes + 1;
                if (comment.likedBy.includes(UID)) {
                    const index = comment.likedBy.indexOf(UID);
                    comment.likedBy.splice(index, 1);
                    comment.likes = comment.likes - 1;
                }
                comment.dislikedBy.push(UID);
                await comment.save();
                return res
                    .status(200)
                    .json({ message: "Dislike updated", comment });
            }
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error occurred while disliking the comment.",
        });
    }
};
