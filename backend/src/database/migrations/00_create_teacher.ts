import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('teacher', table => {
        table.increments('id').primary().notNullable;
        table.string('email').notNullable();
        table.string('firstName').notNullable();
        table.string('lastName');
        table.string('password').notNullable();
        table.boolean('permission').notNullable().defaultTo(false);
        table.boolean('verification').notNullable().defaultTo(false);
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('teacher');
}