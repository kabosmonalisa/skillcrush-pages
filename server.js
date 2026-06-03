const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname);
const types = { html: 'text/html', css: 'text/css', js: 'text/javascript', svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', ico: 'image/x-icon' };

http.createServer((req, res) => {
  const file = path.join(root, req.url === '/' ? '/index.html' : req.url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(file).slice(1);
    res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(3457, () => console.log('Skillcrush pages on http://localhost:3457'));
