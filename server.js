const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let file = req.url === '/' ? 'index.html' : req.url.substring(1);
  const p = path.join(__dirname, file);

  fs.readFile(p, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(port, () => console.log(`Server on http://localhost:${port}`));
