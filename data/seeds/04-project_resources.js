const project_resources = [
  // Tasks 1-3 belong to the first project
  { task_id: 1, resource_id: 2 },
  { task_id: 2, resource_id: 1 },
  { task_id: 3, resource_id: 1 },

  // Tasks 4-6 belong to the second project, task 6 requires no resources
  { task_id: 4, resource_id: 4 },
  { task_id: 4, resource_id: 7 },
  { task_id: 5, resource_id: 4 },
  { task_id: 5, resource_id: 5 },
  { task_id: 5, resource_id: 6 },
];

exports.project_resources = project_resources;

exports.seed = function (knex) {
  return ('project_resources').insert(project_resources);
};
