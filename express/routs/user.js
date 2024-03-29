const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User Page');
})

router.get('/new', (req, res) => {
  res.send('New User create form');
})

router.post('/', (req, res) => {
  res.send('New user created');
})

router
  .route('/:userId')
  .get((req, res) => {
    res.send(`Get user ${req.params.userId}`);
  })
  .put((req, res) => {
    res.send(`Update user ${req.params.userId}`);
  })
  .delete((req, res) => {
    res.send(`Delete user ${req.params.userId}`);
  })
