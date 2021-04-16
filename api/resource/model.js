const db = require('../../data/dbConfig');

async function getResources() {
  const rows = await db('resources');

  return rows;
}

async function postResources(newResource) {
  const newPost = await db('resources').insert(newResource)
    .then(([id]) => db('resources').where('resource_id', '=', id).first());

  return newPost;
}

module.exports = {
  getResources,
  postResources,
};
