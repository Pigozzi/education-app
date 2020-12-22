import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('schools', table => {
        table.increments('id').primary().notNullable();
        table.integer('school_id').notNullable();
        table.string('fullName').notNullable();
        table.string('phone');

        table.integer('teacher_id');
        table.foreign('teacher_id').references('id').inTable('teacher');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('schools');
}