import Knex from 'knex';
 
export async function up(knex: Knex) {
    return knex.schema.createTable('students', table => {
        table.increments('id').primary().notNullable();
        table.integer('student_id').unique().notNullable();
        table.string('firstName').notNullable();
        table.string('lastName');
        table.integer('phone').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('students');
}