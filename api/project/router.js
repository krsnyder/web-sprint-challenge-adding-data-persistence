const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Received Projects',
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Posted Project',
  });
});

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'Projects comin in hot!',
  });
});

module.exports = router;
