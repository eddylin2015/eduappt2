const http = require('http');

const hostname = '192.168.62.199';
const port = 8001;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello Tigger!spet 10' );
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});
