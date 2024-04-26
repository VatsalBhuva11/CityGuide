const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  UID: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  blogID: {
    type: String,
    required: true,
    unique: true
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
