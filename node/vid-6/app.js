const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

const secret = require('../vid-9/mongoDB_password.js');
// console.log(secret);

//*connect to mongoDB server
const dbURI = `mongodb+srv://${secret.userName}:${secret.password}@cluster0.2jvicg6.mongodb.net/learn-node?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI).then(() => {

  console.log('connected to db');
  app.listen(port, () => console.log(`app listening on localhost:${port}`));

}).catch((err) => console.error(err));
const Blog = require('../vid-9/models/blogs.js');

// set a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../vid-7/views'));

app.use(morgan('dev'));
//!static files such as CSS and JS
app.use(express.static(path.join(__dirname, '../vid-8')));//put them in this directory

app.get('/', (req, res) => {

  const blogs = [
    { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" },
    { title: "Yoshi finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
  ];

  // res.send('<h1>Hello World!</h1>');
  //// res.sendFile(path.join(__dirname, '../vid-4/pages/index.html'));
  res.render('index', { title: 'Home', blogs });
  //?this should work but doesn't for some reason
  //? res.sendFile('../vid-4/pages/index.html', { root: __dirname });
  // res.sendFile(path.join(__dirname, '../vid-4/pages/index.js'));
  // res.sendFile(path.join(__dirname, '../vid-4/pages/style.css'));
});

app.get('/about', (req, res) => {
  ////res.sendFile(path.join(__dirname, '../vid-4/pages/about.html'));
  res.render('about', { title: 'About' });
});

app.get('/home', (req, res) => {
  res.redirect('/');
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

//// let blogId = 0;
app.post('/new', (req, res) => {

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
app.get('/new', (req, res) => {
  res.render('new', { title: 'New' });
})

app.get('/all', (req, res) => {
  Blog.find().then((result) => {
    res.send(result);
  }).catch((err) => {
    console.log(err);
  })
})

//!this needs to go near the bottom of the file
app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
});
