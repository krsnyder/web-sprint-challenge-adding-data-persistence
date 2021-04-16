const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { task_description, project_id } = req.body;

  if (!task_description || !project_id) {
    next({ status: 400, message: 'Task description and project id required' });
  } else {
    Tasks.postTasks(req.body)
      .then(newTask => {
        res.status(201).json(newTask);
      })
      .catch(next);
  }
});

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'Tasks comin in hot!',
  });
});

module.exports = router;
