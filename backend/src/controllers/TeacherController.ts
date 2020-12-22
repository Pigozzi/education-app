import { Request, Response } from 'express';
import knex from '../database/connection';

import crypto from 'crypto';

class teacherController {
    async index(request: Request, response: Response) {
        const teacher = await knex('teacher')
            .select('id')
            .select('email')
            .select('fullName')
            .select('verification')
            .where('verification', true);

        return response.json(teacher);
    }

    async create(request: Request, response: Response) {

        const { email, fullName, passwordVerification, confirmPassword } = request.body;

        if(passwordVerification != confirmPassword) return;

        // const password = crypto.createHash('sha256').update('password').digest('base64');

        const password = passwordVerification;

        const isAdmin = false;
        const verification = false;

        await knex('teacher').insert({
            email,
            fullName,
            password,
            isAdmin,
            verification
        })

        return response.status(200).json({ message: "Successfuly" })

    }

    async verification(request: Request, response: Response) {
        const teacherVerification = await knex('teacher')
            .select('id')
            .select('email')
            .select('fullName')
            .select('verification')
            .select('password') // REMOVER - COLOQUEI PRA VER SE GERA O HASH
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
}

export default teacherController;
