import { Request, Response } from 'express';
import knex from '../database/connection';

class SchoolController {

    async index(request: Request, response: Response) {

        // const school_id = request.headers.authorization;

        const schools = await knex('schools')
            .select('*')
        // .where('school_id', school_id);

        return response.json(schools);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const school = await knex('schools')
            .select('id')
            .select('school_id')
            .select('fullName')
            .select('phone')
            .where('school_id', id)
            .first();

        return response.json(school);
    }

    async create(request: Request, response: Response) {

        const { school_id, fullName, phone } = request.body;

        const administrator_id = request.headers.authorization;

        const verifySchoolId = await knex('schools')
            .select('school_id')
            .where('school_id', school_id);

        if (verifySchoolId.length) {
            return response.status(409).json({ message: "School ID already exists" })
        }

        await knex('schools').insert({
            school_id,
            fullName,
            phone,
            administrator_id
        })

        return response.status(200).json({ message: 'School created successfuly' })
    }
}

export default SchoolController;