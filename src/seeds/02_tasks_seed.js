/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task: 'Finish assignment',
          assigned_user: 1
        },
        {
          task: 'Tune the guitar',
          assigned_user: 2
        },
        {
          task: 'Boil the water',
          assigned_user: 3
        },
        {
          task: 'Clean the refrigerator',
          assigned_user: 4
        }
      ]);
    });
};
