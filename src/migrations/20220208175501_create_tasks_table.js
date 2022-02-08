/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('tasks', (table) => {
            table.increments('task_id').primary();
            table.string('task').notNullable();
            table.integer('assigned_user').unsigned().notNullable().references('user_id').inTable('users').onDelete('CASCADE');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("tasks");
};
