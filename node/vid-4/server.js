const http = require('http');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const port = 5000;

const server = http.createServer((req, res) => {

  //lodash
  const num = _.random(5, 48);
  console.log(num);

  function greet() {
    console.log('hello, how are you?');
  }

  _.once(greet);
  greet();

  console.log('request made');
  console.log(req.url, req.method);

  let filePath = path.join(__dirname, './pages');
  res.setHeader('Connect-type', 'text/html');

  switch (req.url) {
    case '/':
      filePath += '/index.html';
      break;
    case '/about':
      filePath += '/about.html';
      break;
    case '/home':
      res.setHeader('Location', '/');
      res.end();
    case '/style.css':
      filePath += '/style.css';
      res.setHeader('Content-type', 'text/css');
      break;
    case '/index.js':
      filePath += '/index.js';
      res.setHeader('Content-type', 'text/javascript');
      break;
    default:
      filePath += '/404.html';
      res.statusCode = 404;
      break;
  }

  //*respond with a html page
  fs.readFile(filePath, (err, data) => {
    if (err) throw err, res.end(err);
    res.end(data);
  })

})

server.listen(port, 'localhost', () => {

  console.log(`listening for requests on localhost:${port}`);

})
