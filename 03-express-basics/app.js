const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Middleware teste');
  next(); // Permite request à passar ao próximo middleware
});

app.use((req, res, next) => {
  console.log('Middleware com response');
  res.send('<h1>Hello from express</h1>')
});

const server = http.createServer(app);

server.listen(3000);
