const express = require('express');

const app = express();

app.use('/users', (req, res) => {
  console.log('😁 Users');
  return res.send('<h1>Users</h>')
});

app.use('/', (req, res) => {
  console.log('🔥 Welcome');
  return res.send('<h1>Welcome</h1>');
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`💓 Server iniciado: http://localhost:${PORT}`)
});
