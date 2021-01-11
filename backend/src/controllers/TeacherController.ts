import { Request, Response } from 'express';
import knex from '../database/connection';

import crypto from 'crypto';

class TeacherController {
    async index(request: Request, response: Response) {

        const school_id = request.headers.authorization;

        const teacher = await knex('teacher')
            .select('id')
            .select('email')
            .select('fullName')
            .select('verification')
            .where('verification', true)
            .where('school_id', school_id);

        return response.json(teacher);
    }

    async create(request: Request, response: Response) {

        const { school_id, email, fullName, passwordVerification, confirmPassword } = request.body;

        const verifySchoolId = await knex('schools').select('school_id').where('school_id', school_id);

        if (!verifySchoolId.length) {
            return response.status(409).json({ message: "School ID not exists" })
        }

        if (passwordVerification != confirmPassword) return;

        // const password = crypto.createHash('sha256').update('password').digest('base64');

        const password = passwordVerification;

        const verification = false;

        await knex('teacher').insert({
            school_id,
            email,
            fullName,
            password,
            verification
        })

        return response.status(200).json({ message: "Successfuly" })

    }

    async verification(request: Request, response: Response) {

        const school_id = request.headers.authorization;

        const teacherVerification = await knex('teacher')
            .select('id')
            .select('email')
            .select('fullName')
            .select('verification')
            .where('verification', false)
            .where('school_id', school_id);

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
}

export default TeacherController;
