const db = require('../../data/dbConfig');

async function getProjects() {
  const rows = await db('projects');

  const result = [];

  rows.forEach(row => {
    result.push({
      project_id: row.project_id,
      project_name: row.project_name,
      project_description: row.project_description,
      // !!(value) returns the desired boolean from an integer
      project_completed: !!row.project_completed,
    });
  });

  return result;
}

async function postProjects(newProject) {
  const newPost = await db('projects').insert(newProject)
    .then(([id]) => db('projects').where('project_id', '=', id).first());

  newPost.project_completed = !!newPost.project_completed;
  return newPost;
}

module.exports = {
  getProjects,
  postProjects,
};
