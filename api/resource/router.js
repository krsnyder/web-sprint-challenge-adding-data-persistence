const router = require('express').Router();
const Resources = require('./model');

router.get('/', (req, res) => {
  Resources.getResources()
    .then(response => {
      res.status(200).json(response);
    });
});

router.post('/', async (req, res, next) => {
  // Checking for existing resource by creating array of existing resource names
  const existingResources = await Resources.getResources();
  const resourcesNames = [];
  existingResources.forEach(resource => {
    resourcesNames.push(resource.resource_name);
  });

  // If the array of names includes the name in the request, the request fails
  if (resourcesNames.includes(req.body.resource_name)) {
    next({
      status: 400,
      message: `Resource ${req.body.resource_name} exists in the database`,
    });
  } else {
    Resources.postResources(req.body)
      .then(newResource => {
        res.status(201).json(newResource);
      });
  }
});

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'Resources, comin in hot!',
  });
});

module.exports = router;
