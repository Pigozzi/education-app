import { Request, Response } from 'express';
import knex from '../database/connection';

class SchoolController {
    async create(request: Request, response: Response) {

        const { school_id, fullName, phone } = request.body;

        const teacher_id = request.headers.authorization;

        await knex('schools').insert({
            school_id,
            fullName,
            phone,
            teacher_id
        })

        const isAdmin = true;

        await knex('teacher').update({
            isAdmin
        }).where('id', teacher_id);

        return response.status(200).json({ message: 'School created successfuly' })
    }
}

export default SchoolController;