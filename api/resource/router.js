const router = require('express').Router();
const Resources = require('./model');

router.get('/', (req, res) => {
  Resources.getResources()
    .then(response => {
      res.status(200).json(response);
    });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Posted Resource',
  });
});

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'Resources, comin in hot!',
  });
});

module.exports = router;
