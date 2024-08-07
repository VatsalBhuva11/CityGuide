import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
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
});

export const Comment = mongoose.model("Comment", commentSchema);
