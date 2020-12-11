import { Request, Response } from 'express';
import knex from '../database/connection';

class teacherController {
    async index(request: Request, response: Response) {
        const teacher = await knex('teacher')
            .select('email')
            .select('firstName')
            .select('lastName')
            .select('permission')
            .select('verification');

        return response.json(teacher);
    }

    async create(request: Request, response: Response) {

        const { email, firstName, password } = request.body;

        const permission = false;
        const verification = false;

        await knex('teacher').insert({
            email,
            firstName,
            password,
            permission,
            verification
        })

        return response.status(200).json({ message: "Successfuly" })

    }
}

export default teacherController;
