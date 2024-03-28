const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const port = 6969;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.listen(port, () => console.log(port));

app.use(express.static(path.join(__dirname, './public')));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', port });
});

app.get('/download', (req, res) => {
  res.download("C:/Users/user/Pictures/5f4b82adf4eccc62b213a76eaf7951b1.jpg");
})
