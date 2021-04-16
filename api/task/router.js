const router = require('express').Router();
const Tasks = require('./model');
const Projects = require('../project/model');

router.get('/', (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', async (req, res, next) => {
  const { task_description, project_id } = req.body;

  const allProjects = await Projects.getProjects();
  const projectIds = [];
  allProjects.forEach(project => {
    projectIds.push(project.project_id);
  });

  if (!task_description || !parseInt(project_id)) {
    next({ status: 400, message: 'Task description and project id required' });
  } else if (!projectIds.includes(project_id)) {
    next({ status: 400, message: `${project_id} is not a valid project` });
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
