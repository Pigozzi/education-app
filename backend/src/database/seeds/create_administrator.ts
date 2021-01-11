import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('administrator').insert([
        { 
            email: 'admin@admin.com', 
            fullName: 'Administrator', 
            password: 'admin123', 
        }
    ])
}