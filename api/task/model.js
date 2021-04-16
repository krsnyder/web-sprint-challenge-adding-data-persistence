const db = require('../../data/dbConfig');

async function getTasks() {
  const rows = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', '=', 't.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description',
    );

  rows.forEach(row => {
    row.task_completed = !!row.task_completed;
  });

  return rows;
}

async function postTasks(newTasks) {
  const newPost = await db('tasks').insert(newTasks)
    .then(([id]) => db('tasks').where('tasks_id', '=', id).first());

  return newPost;
}

module.exports = {
  getTasks,
  postTasks,
};
