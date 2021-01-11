import { Request, Response } from 'express';
import knex from '../database/connection';

class studentController {
    async index(request: Request, response: Response) {

        const school_id = request.headers.authorization;

        const students = await knex('students')
            .select('*')
            .where('school_id', school_id);

        return response.json(students);
    }

    async create(request: Request, response: Response) {

        const { student_id, fullName, phone, school_id } = request.body;

        const verifySchoolId = await knex('schools').select('school_id').where('school_id', school_id);

        if (!verifySchoolId.length) {
            return response.status(409).json({ message: "School ID not exists" })
        }

        const verifyStudentId = await knex('students').select('student_id').where('student_id', student_id);

        if (verifyStudentId.length) {
            return response.status(409).json({ message: "Student ID already exists" })
        }

        await knex('students').insert({
            student_id,
            fullName,
            phone,
            school_id
        });

        return response.status(200).json({ message: 'Created successfully' });
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const school_id = request.headers.authorization;

        const student = await knex('students')
            .select('*')
            .where('id', id)
            .where('school_id', school_id)

        return response.json(student);
    }

    async update(request: Request, response: Response) {

        const { id } = request.params;
        const { student_id, fullName, phone } = request.body;

        const school_id = request.headers.authorization;

        await knex('students').update({
                student_id,
                fullName,
                phone
            })
            .where('id', id)
            .where('school_id', school_id);

        return response.status(200).json({ message: "Updated successfuly" })
    }
}

export default studentController;