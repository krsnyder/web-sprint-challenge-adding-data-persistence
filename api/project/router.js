const router = require('express').Router();
const Projects = require('./model');

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
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
