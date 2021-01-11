import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('administrator', table => {
        table.increments('id').primary().notNullable();
        table.string('email').notNullable().unique();
        table.string('fullName').notNullable();
        table.string('password').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('administrator')
}