const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write('<html>');
  res.write('<head><title>Página simples</title></head>');
  res.write('<h2>Olá mundo</h2>')
  res.write('</html>');
  res.end();
});

server.listen(3000);
