const express = require('express');
const path = require('path')
const usersRoutes = require('./routes/users.routes');
const mainRoutes = require('./routes/main.routes');
const app = express();

app.use(express.static(
  path.join(__dirname, 'public'))
);

app.use('/users', usersRoutes);
app.use(mainRoutes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`💓 Server iniciado: http://localhost:${PORT}`)
});
