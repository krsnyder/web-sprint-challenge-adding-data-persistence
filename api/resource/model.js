const db = require('../../data/dbConfig');

async function getResources() {
  const rows = await db('resources');

  return rows;
}

async function postResources(newResource) {
  // Inserting the new resource and returning the matching resource from the database
  const newPost = await db('resources').insert(newResource)
    .then(([id]) => db('resources').where('resource_id', '=', id).first());

  return newPost;
}

module.exports = {
  getResources,
  postResources,
};
