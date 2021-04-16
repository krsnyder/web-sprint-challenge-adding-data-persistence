const resources = [
  { resource_name: 'Cement', resource_description: 'CEMEX, cement from Mexico.' },
  { resource_name: 'Shovel' },
  { resource_name: 'Water', resource_description: 'Fiji - for a foundation untouched by man.' },
  { resource_name: 'Wood' },
  { resource_name: 'Nails' },
  { resource_name: 'Hammer', resource_description: "'I see', says the blind man who picks up his hammer and saw" },
  { resource_name: 'Saw', resource_description: "'I see', says the blind man who picks up his hammer and saw" },
];

exports.resources = resources;

exports.seed = function (knex) {
  return knex('resources').insert(resources);
};
