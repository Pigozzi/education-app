import { Request, Response } from 'express';
import knex from '../database/connection';

class SessionController {

    async create(request: Request, response: Response) {

        const { student_id } = request.body;

        const student = await knex('students')
            .where('student_id', student_id)
            .select('firstName')
            .first();

        if(!student) {
            return response.status(400).json({ error: "STUDENT NOT FOUND" })
        }

        return response.json(student)

    }

}

export default SessionController;