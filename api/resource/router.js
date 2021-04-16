const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Received Resources',
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
