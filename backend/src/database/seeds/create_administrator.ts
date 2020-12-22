import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('teacher').insert([
        { email: 'admin@admin.com', fullName: 'Administrator', password: 'admin123', isAdmin: true, verification: true }
    ])
}