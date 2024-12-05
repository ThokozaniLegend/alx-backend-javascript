// simple node http server
const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ALX!');
});

// Server listens on port 1245
app.listen(1245);

// Export the server for testing
module.exports = app;

