const express = require('express');
const projectsRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('*', (err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "We're screwed boys!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
