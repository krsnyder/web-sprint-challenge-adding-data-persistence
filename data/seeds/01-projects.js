const projects = [
  {
    project_name: 'Lay Foundation',
    project_description: 'Lay the foundation for the new construction',
    project_completed: 0,
  },
  {
    project_name: 'Put up walls',
    project_description: 'Put up the walls of the shed',
    project_completed: 0,
  },
];

exports.projects = projects;

exports.seed = function (knex) {
  return knex('projects').insert(projects);
};
