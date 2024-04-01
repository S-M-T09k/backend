const express = require('express');
const router = express.Router();
const Blog = require('../vid-9/models/blogs.js');

//// let blogId = 0;
router.post('/new', (req, res) => {

  const blog = new Blog({
    title: "whatever whatever",
    snippet: "I don't want to work",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolorum.",
    // author: "Mark",
    blogId: 2
  });
  blog.save()
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
})
router.get('/new', (req, res) => {
  res.render('new', { title: 'New' });
})
router.get('/all', (req, res) => {
  Blog.find().then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
})