const resources = [
  { resource_name: 'Cement' },
  { resource_name: 'Shovel' },
  { resource_name: 'Water' },
  { resource_name: 'Wood' },
  { resource_name: 'Nails' },
  { resource_name: 'Hammer' },
  { resource_name: 'Saw' },
];

exports.resources = resources;

exports.seed = function (knex) {
  return knex('resources').insert(resources);
};
