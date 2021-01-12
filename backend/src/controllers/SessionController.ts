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
            .select('id')
            .select('fullName')
            .where('email', email)
            .where('password', password)
            .first();

        if (!administrator) {
            return response.status(404).json({ error: "ADMINISTRATOR NOT FOUND" })
        }

        const verifySchool = await knex('schools')
            .select('school_id')
            .where('administrator_id', administrator.id);

        const id = administrator.id;
        const fullName = administrator.fullName;

        if (!verifySchool.length) {

            const school_id = "undefined"

            const notSchool = {
                id,
                fullName,
                school_id
            }

            return response.status(200).json(notSchool)
        }

        const school_id = verifySchool[0].school_id;

        const createSession = {
            id,
            fullName,
            school_id
        }

        return response.status(200).json(createSession)
    }

}

export default SessionController;