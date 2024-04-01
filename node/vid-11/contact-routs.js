const express = require('express');
const router = express.Router();
const RequestMessage = require('../vid-9/models/req-message.js');

router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  let messageIncluded;
  let message;
  let phone;

  if (req.body.name === "" || req.body.email === "") {
    res.render('contact', {
      title: 'Contact Us',
      errMessage: 'Please enter your name and email'
    });
    return;
  };

  req.body.phone === '' ? phone = undefined : phone = Number(req.body.phone);

  req.body.message === '' ? messageIncluded = false : messageIncluded = true;
  req.body.message === '' ? message = undefined : message = req.body.message;

  const request = new RequestMessage({
    name: req.body.name,
    email: req.body.email,
    phone: phone,
    message: message,
    messageIncluded: messageIncluded
  });
  console.log(request);

  request.save().then(() => res.redirect('/customer-requests'));
});

module.exports = router;
