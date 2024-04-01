const express = require('express');
const router = express.Router();

const RequestMessage = require('../vid-9/models/req-message.js');

router.get('/', async (req, res) => {
  const requests = await RequestMessage.find().sort({ createdAt: -1 });
  res.render('requests', { title: 'Customer Requests', requests });
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  RequestMessage.findByIdAndDelete(req.params.id).then(() => {
    res.send('request deleted');
  });
});

module.exports = router;
