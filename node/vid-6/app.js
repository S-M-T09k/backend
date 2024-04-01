const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const shopRoutes = require('../vid-11/shop-routs.js');
const servicesRoutes = require('../vid-11/services-routs.js');
const contactRoutes = require('../vid-11/contact-routs.js');
const customerRequestRoutes = require('../vid-11/customer-requests-routs.js');

const app = express();
const port = 3001;

const secret = require('../../secrets/mongoDB_password.js');
// console.log(secret);

//*connect to mongoDB server
const dbURI = `mongodb+srv://${secret.userName}:${secret.password}@cluster0.2jvicg6.mongodb.net/learn-node?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI).then(() => {

  console.log('connected to db');
  app.listen(port, () => console.log(`app listening on localhost:${port}`));

}).catch((err) => console.error(err));

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

app.get('/home', (req, res) => {
  res.redirect('/');
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


app.use('/shop', shopRoutes);

app.use('/services', servicesRoutes);

app.use('/contact', contactRoutes);

app.use('/customer-requests', customerRequestRoutes);

//!this needs to go near the bottom of the file
app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
});
