const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);
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
