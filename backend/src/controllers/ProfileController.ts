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
}

export default ProfileController;