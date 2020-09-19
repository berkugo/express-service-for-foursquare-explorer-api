const express = require('express');

const nearby = require('./places/nearby');

const router = express.Router();

router.use(nearby);

router.get('/', (req, res) => {
  res.render('places');
});

module.exports = router;
