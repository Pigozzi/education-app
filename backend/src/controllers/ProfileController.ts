import { Request, Response } from 'express';

import knex from '../database/connection';

class ProfileController {
    async index(request: Request, response: Response) {
        const student_id = request.headers.authorization;

        const comments = await knex('comments')
            .where('student_id', student_id)
            .select('*');

        return response.json(comments)
    }

    async indexAdministrator(request: Request, response: Response) {

        const administrator_id = request.headers.authorization;

        const school_id = await knex('schools')
            .select('school_id')
            .where('administrator_id', administrator_id);

        return response.json(school_id);

    }
}

export default ProfileController;