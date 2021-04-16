const router = require('express').Router();
const Projects = require('./model');

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    });
});

router.post('/', (req, res, next) => {
  if (!req.body.project_name) {
    next({ status: 400, message: 'Project name required' });
  } else {
    Projects.postProjects(req.body)
      .then(response => {
        res.status(201).json(response);
      });
  }
});

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'Projects comin in hot!',
  });
});

module.exports = router;
