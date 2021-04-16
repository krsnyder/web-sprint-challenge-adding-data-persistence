const db = require('../../data/dbConfig');

// !!(value) returns the boolean
async function getProjects() {
  const rows = await db('projects');

  const result = [];

  rows.forEach(row => {
    result.push({
      project_id: row.project_id,
      project_name: row.project_name,
      project_description: row.project_description,
      project_completed: !!row.project_completed,
    });
  });

  return result;
}

async function postProjects(newProject) {
  return db('projects').insert(newProject)
    .then(([id]) => db('projects').where('project_id', '=', id));

  // project_id: newProject.project_id,
  // project_name: newProject.project_name,
  // project_description: newProject.project_description,
  // project_completed: newProject.project_completed,
}

module.exports = {
  getProjects,
  postProjects,
};
