import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    UID: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    likedBy: {
        type: Array,
        default: [],
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    dislikedBy: {
        type: Array,
        default: [],
    },
    comments: [
        {
            UID: {
                type: String,
                required: true,
            },
            author: {
                type: String,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },
            likes: {
                type: Number,
                default: 0,
            },
            likedBy: {
                type: Array,
                default: [],
            },
            dislikes: {
                type: Number,
                default: 0,
            },
            dislikedBy: {
                type: Array,
                default: [],
            },
        },
    ],
});

export const Blog = mongoose.model("Blog", blogSchema);
