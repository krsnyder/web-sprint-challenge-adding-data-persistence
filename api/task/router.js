const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Received Tasks',
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Posted Task',
  });
});

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'Tasks comin in hot!',
  });
});

module.exports = router;
