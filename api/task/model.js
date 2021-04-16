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

  // Using !! to convert the integer value to a bool
  rows.forEach(row => {
    row.task_completed = !!row.task_completed;
  });

  return rows;
}

async function postTasks(sentTask) {
  const createdTask = await db('tasks').insert(sentTask)
    .then(([id]) => db('tasks').where('task_id', '=', id).first());

  createdTask.task_completed = !!createdTask.task_completed;
  return createdTask;
}

module.exports = {
  getTasks,
  postTasks,
};
