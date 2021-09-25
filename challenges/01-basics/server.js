const http = require('http');

const server = http.createServer((req, res) => {
  return req.url === '/' ? (() => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<body>')
    res.write('<h1>Bem-vindo!</h1>')
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button>Enviar</button></form>')
    res.write('</body>')
    return res.end();
  })()
    : (() => {
      req.url === '/users' ? (() => {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Exemplo usuário 1</li>')
        res.write('<li>Exemplo usuário 2</li>')
        res.write('<li>Exemplo usuário 3</li>')
        res.write('</ul>')
        res.write('</body>')
        return res.end();
      })() : (() => {
        if (!(req.url === '/create-user' && req.method === 'POST')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.write('<body>');
          res.write('<h1>Página não encontrada!</h1>');
          res.write('</body>');
          return res.end();
        }
        res.setHeader('Location', '/');
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          console.log(message);
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        })
      })()
    })()
});

server.listen(3000);
