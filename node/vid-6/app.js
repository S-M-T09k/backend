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
const RequestMessage = require('../vid-9/models/req-message.js');

// set a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../vid-9/views'));

app.use(morgan('dev'));
//!static files such as CSS and JS
app.use(express.static(path.join(__dirname, '../vid-9/public')));//put them in this directory
app.use(express.urlencoded({ extended: true }));//! handle POST requests



app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.post('/contact', (req, res, next) => {
  console.log(req.body);
  let messageIncluded;
  let message;
  let phone;

  if (req.body.name === "" || req.body.email === "") {
    res.render('contact', {
      title: 'Contact Us',
      errMessage: 'Please enter your name and email'
    });
    return;
  };

  req.body.phone === '' ? phone = undefined : phone = Number(req.body.phone);

  req.body.message === '' ? messageIncluded = false : messageIncluded = true;
  req.body.message === '' ? message = undefined : message = req.body.message;

  const request = new RequestMessage({
    name: req.body.name,
    email: req.body.email,
    phone: phone,
    message: message,
    messageIncluded: messageIncluded
  });
  console.log(request);

  request.save();
  res.redirect('/customer-requests');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.get('/home', (req, res) => {
  res.redirect('/');
});
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});
app.get('/shop', (req, res) => {
  res.render('shop', { title: 'Shop' });
});
app.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

app.get('/customer-requests', async (req, res) => {
  const requests = await RequestMessage.find();
  res.render('requests', { title: 'Customer Requests', requests });
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
