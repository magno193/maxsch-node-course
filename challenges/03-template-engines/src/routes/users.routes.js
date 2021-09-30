const { Router } = require('express');

const router = Router();

const users = [];
router.get('/', (req, res) => {
  return res.render('index', { title: 'Cadastro de usuários', path: '/' });
});
router.post('/add-user', (req, res) => {
  console.log(req.body.user);
  users.push({ name: req.body.user });
  res.redirect('/users');
})
router.get('/users', (req, res) => {
  return res.render('users', { title: 'Listagem de usuários', users: users, path: '/users' });
});

module.exports = router;