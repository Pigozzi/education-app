import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('id').primary().notNullable();
        table.boolean('present').notNullable().defaultTo(true);
        table.string('comment');
        table.timestamp('created_at').notNullable();

        table.integer('student_id').notNullable();
        table.foreign('student_id').references('id').inTable('students');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('comments');
}