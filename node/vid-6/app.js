const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.listen(port, () => console.log(`app listening on localhost:${port}`));
// set a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../vid-7/views'));

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


//!this needs to go near the bottom of the file
app.use((req, res) => {
  res.status(404).render('404');
});
