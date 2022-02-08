/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'avash',
          address: 'Lokanthali',
          email: 'avashtest@mail.com',
          password: 'avash123'
        },
        {
          name: 'shyam',
          address: 'Pokhara',
          email: 'shyam@mail.com',
          password: '123.shyam'
        },
        {
          name: 'ram',
          address: 'Biratnagar',
          email: 'ram@mail.com',
          password: '123.ram'
        },
        {
          name: 'hari',
          address: 'Itahari',
          email: 'hari@mail.com',
          password: '123.hari'
        },
      ]);
    });
};
