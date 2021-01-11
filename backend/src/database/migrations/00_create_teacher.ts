import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('teacher', table => {
        table.increments('id').primary().notNullable;
        table.string('email').unique().notNullable();
        table.string('fullName').notNullable();
        table.string('password').notNullable();
        table.boolean('verification').notNullable().defaultTo(false);

        table.integer('school_id').notNullable();
        table.foreign('school_id').references('school_id').inTable('schools')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('teacher');
}