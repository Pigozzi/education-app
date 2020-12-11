import { Request, Response } from 'express';
import knex from '../database/connection';

class studentController {
    async index(request: Request, response: Response) {
        const students = await knex('students').select('*');

        return response.json(students);
    }

    async create(request: Request, response: Response) {
        
        const { student_id, firstName, lastName, phone } = request.body;
        
        await knex('students').insert({
            student_id,
            firstName,
            lastName,
            phone
        });

        return response.status(200).json({ message: `Successfully, This is your ID ${student_id}`});
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const student = await knex('students').select('*').where('id', id);

        return response.json(student);
    }

    async update(request: Request, response: Response) {

        const { id } = request.params;
        const { student_id, firstName, lastName, phone } = request.body;

        await knex('students').update({
            student_id,
            firstName,
            lastName,
            phone
        }).where('id', id);

        return response.status(200).json({ message: "Updated successfuly"})
    }
}

export default studentController;