const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`app listening on localhost:${port}!`));
// console.log(__dirname);

app.get('/', (req, res) => {
  // res.send('<h1>Hello World!</h1>');
  res.sendFile(path.join(__dirname, '../vid-4/pages/index.html'));
  //?this should work but doesn't for some reason
  //? res.sendFile('../vid-4/pages/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../vid-4/pages/about.html'));
});

app.get('/home', (req, res) => {
  res.redirect('/');
});


//!this needs to go near the bottom of the file
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../vid-4/pages/404.html'));
});
