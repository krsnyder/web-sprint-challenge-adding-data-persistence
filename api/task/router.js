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

  // Getting an array of all project ids to make sure
  // the id in the request is valid
  const allProjects = await Projects.getProjects();
  const projectIds = [];
  allProjects.forEach(project => {
    projectIds.push(project.project_id);
  });

  if (!task_description || !project_id) {
    next({ status: 400, message: 'Task description and project id required' });

    // parseInt used because id defaults to a string
  } else if (!projectIds.includes(parseInt(project_id))) {
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
