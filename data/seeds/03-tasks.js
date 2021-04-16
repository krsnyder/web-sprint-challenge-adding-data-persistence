const tasks = [
  // Tasks for the first project
  {
    task_description: 'Dig the area needed for the foundation',
    task_notes: 'Make sure you stop before you reach China!',
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: 'Mix the cement with water',
    task_notes: 'Not for human consumption.',
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: 'Pour cement into the area',
    task_notes: 'Allow 24 hours for the cement to cure',
    task_completed: 0,
    project_id: 1,
  },

  // Tasks for the second project
  {
    task_description: 'Measure and cut the wood',
    task_notes: 'Measure twice, cut once!',
    task_completed: 0,
    project_id: 2,
  },
  {
    task_description: 'Frame out the walls',
    task_notes: 'Use your hammer and nails to get the frames secured',
    task_completed: 0,
    project_id: 2,
  },
  {
    task_description: 'Marvel at your creation',
    task_notes: 'It is so impressive. Pat yourself on the back.',
    task_completed: 0,
    project_id: 2,
  },
];

exports.tasks = tasks;

exports.seed = function (knex) {
  return knex('tasks').insert(tasks);
};
