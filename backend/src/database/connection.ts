import knex from 'knex';
import path from 'path';

const database = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

// const configuration = require('../../knexfile');
// const database = knex(configuration.development);

export default database;