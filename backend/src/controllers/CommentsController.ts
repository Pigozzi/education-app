import { Request, Response } from 'express';
import moment from 'moment';
import knex from '../database/connection';

class commentsControler {
    async index(request: Request, response: Response) {
        const comments = await knex('comments').select('*');

        return response.json(comments);

    }

    async create(request: Request, response: Response) {
        const { comment } = request.body;

        const student_id = request.headers.authorization;

        const created_at = moment().format('MMMM Do YYYY');

        const present = true;

        await knex('comments').insert({
            present,
            comment,
            created_at,
            student_id,
        })

        return response.status(200).json({ message: "Successfuly" })
    }
}

export default commentsControler;