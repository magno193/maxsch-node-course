const express = require('express');
const routes = require('./routes/index.js');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor em: http://localhost:${PORT}`);
})
