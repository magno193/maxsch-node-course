const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<html>');
    res.write('<head><title>Digite uma mensagem</title></head>');
    res.write('<body><form action="/mensagem" method="POST"><input type="text" name="mensagem"><button type="submit">Enviar</button></form></body></html>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/mensagem' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('mensagem.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  };
};

module.exports = requestHandler;