const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from CI/CD 🚀");
}).listen(3000);
