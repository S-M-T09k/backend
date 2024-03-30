const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: String,
}, { timestamps: true });

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;
