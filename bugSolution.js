const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

//Adding a proper error handling
server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});