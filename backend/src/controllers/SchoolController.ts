import { Request, Response } from 'express';
import knex from '../database/connection';

class SchoolController {
    async index(request: Request, response: Response) {
        const schools = await knex('schools').select('*');

        return response.json(schools);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const school = await knex('schools')
            .select('school_id')
            .where('school_id', id)
            .first();

        return response.json(school);
    }

    async create(request: Request, response: Response) {

        const { school_id, fullName, phone, teacher_id } = request.body;

        await knex('schools').insert({
            school_id,
            fullName,
            phone,
            teacher_id
        })

        const isAdmin = true;
        const verification = true;

        await knex('teacher').update({
            isAdmin,
            verification
        }).where('id', teacher_id);

        return response.status(200).json({ message: 'School created successfuly' })
    }
}

export default SchoolController;