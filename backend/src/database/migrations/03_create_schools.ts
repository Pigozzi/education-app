import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('schools', table => {
        table.increments('id').primary().notNullable();
        table.integer('school_id').unique().notNullable();
        table.string('fullName').notNullable();
        table.string('phone');

        table.integer('administrator_id');
        table.foreign('administrator_id').references('id').inTable('administrator');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('schools');
}