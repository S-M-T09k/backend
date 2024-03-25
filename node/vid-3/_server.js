const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url, req.method);

  //*respond with something
  res.setHeader('Content-Type', 'text/html'); //specify what type of data we are sending
  res.write('<h2>hello world</h2>'); //write a response
  res.write('<h2>hello again</h2>'); //another response
  res.end(); //sends the response to the client
});

server.listen(port, 'localhost', () => {
  console.log(`listening for requests on localhost:${port}`);
});
