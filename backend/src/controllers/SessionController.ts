import { Request, Response } from 'express';
import knex from '../database/connection';

import crypto from 'crypto';

class SessionController {

    async createSessionStudent(request: Request, response: Response) {

        const { student_id } = request.body;

        const student = await knex('students')
            .where('student_id', student_id)
            .select('fullName')
            .first();

        if (!student) {
            return response.status(400).json({ error: "STUDENT NOT FOUND" })
        }

        return response.json(student)

    }

    async createSessionTeacher(request: Request, response: Response) {

        const { email, password } = request.body;

        const teacher = await knex('teacher')
            .select('id')
            .select('email')
            .select('fullName')
            .select('verification')
            .where('email', email)
            .where('password', password)
            .first();

        if (!teacher) {
            return response.status(400).json({ error: "TEACHER NOT FOUND" })
        }

        return response.json(teacher)
    }

}

export default SessionController;