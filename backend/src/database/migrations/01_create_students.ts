import Knex from 'knex';
 
export async function up(knex: Knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary().notNullable();
        table.integer('student_id').unique().notNullable();
        table.string('fullName').notNullable();
        table.string('phone').notNullable();

        table.integer('school_id').notNullable();
        table.foreign('school_id').references('school_id').inTable('schools')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('students');
}