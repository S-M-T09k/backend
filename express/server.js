const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const port = 6536;

app.set('view engine', 'ejs');
app.listen(port, () => console.log(port));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send("Hello world");
});
