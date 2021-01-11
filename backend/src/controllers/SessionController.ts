import { Request, Response } from 'express';
import knex from '../database/connection';

class SessionController {

    async createSessionStudent(request: Request, response: Response) {

        const { student_id } = request.body;

        const student = await knex('students')
            .where('student_id', student_id)
            .select('fullName')
            .first();

        if (!student) {
            return response.status(404).json({ error: "STUDENT NOT FOUND" })
        }

        return response.json(student)

    }

    async createSessionTeacher(request: Request, response: Response) {

        const { email, password } = request.body;

        const teacher = await knex('teacher')
            .select('id')
            .select('fullName')
            .select('school_id')
            .select('verification')
            .where('email', email)
            .where('password', password)
            .first();

        if (!teacher) {
            return response.status(404).json({ error: "TEACHER NOT FOUND" })
        }

        return response.json(teacher)
    }

    async createSessionAdministrator(request: Request, response: Response) {

        const { email, password } = request.body;

        const administrator = await knex('administrator')
            .join('schools', 'schools.administrator_id', '=', 'administrator.id')
            .select('school_id')
            .select('administrator.id')
            .select('administrator.fullName')
            .where('email', email)
            .where('password', password)
            .first();

        if (!administrator) {
            return response.status(404).json({ error: "ADMINISTRATOR NOT FOUND" })
        }

        return response.json(administrator)
    }

}

export default SessionController;