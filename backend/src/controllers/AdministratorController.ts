import { Request, Response } from 'express';
import knex from '../database/connection';

class AdministratorController {

    // DELETE INDEX
    async index(request: Request, response: Response) {

        const administrator = await knex('administrator').select('*')

        return response.json(administrator);
    }

    async create(request: Request, response: Response) {

        const { email, fullName, passwordVerification, confirmPassword } = request.body;

        const verifyEmail = await knex('administrator')
            .select('email')
            .where('email', email);

        if (verifyEmail.length) {
            return response.status(409).json({ message: "Email already exists" });
        }

        if (passwordVerification != confirmPassword) {
            return response.status(400).json({ message: "Passwords do not match" })
        };

        const password = passwordVerification;

        await knex('administrator').insert({
            email,
            fullName,
            password
        });

        return response.status(200).json({ message: "Created successfuly" })

    }
}

export default AdministratorController;