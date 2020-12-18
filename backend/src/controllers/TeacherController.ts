import { Request, Response } from 'express';
import knex from '../database/connection';

class teacherController {
    async index(request: Request, response: Response) {
        const teacher = await knex('teacher')
            .select('id')
            .select('email')
            .select('firstName')
            .select('verification')
            .where('verification', true);

        return response.json(teacher);
    }

    async verification(request: Request, response: Response) {
        const teacherVerification = await knex('teacher')
            .select('id')
            .select('id')
            .select('email')
            .select('firstName')
            .select('verification')
            .where('verification', false);;

        return response.json(teacherVerification);
    }

    async accept(request: Request, response: Response) {

        const { id } = request.body

        const verification = true;

        await knex('teacher').update({
            verification
        }).where('id', id);

        return response.status(200).json({ message: "Updated" });
    }

    async decline(request: Request, response: Response) {

        const { id } = request.body

        const verification = false;

        await knex('teacher').update({
            verification
        }).where('id', id);

        return response.status(200).json({ message: "Updated" });
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
