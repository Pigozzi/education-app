import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('teacher').insert([
        { email: 'admin@admin.com', firstName: 'Administrator', password: 'admin123', permission: true, verification: true }
    ])
}