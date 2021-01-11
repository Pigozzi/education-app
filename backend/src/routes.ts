import { Router } from 'express';

import { celebrate, Joi } from 'celebrate';

import TeacherController from './controllers/TeacherController';
import StudentController from './controllers/StudentController';
import CommentsController from './controllers/CommentsController';
import SessionController from './controllers/SessionController';
import ProfileController from './controllers/ProfileController';
import SchoolController from './controllers/SchoolController';
import AdministratorController from './controllers/AdministratorController';

const routes = Router();

const session = new SessionController();
const profile = new ProfileController();

const administrator = new AdministratorController();
const teacher = new TeacherController();
const student = new StudentController();
const comments = new CommentsController();
const school = new SchoolController();

routes.post('/sessions', session.createSessionStudent);
routes.post('/sessionTeacher', session.createSessionTeacher);
routes.post('/sessionAdministrator', session.createSessionAdministrator);

routes.get('/administrator', administrator.index);
routes.post('/administrator', administrator.create);

routes.get('/teachers', teacher.index);
routes.post('/teachers', teacher.create);

routes.get('/schools', school.index);
routes.get('/schools/:id', school.show);
routes.post('/schools', school.create);

routes.get('/verification', teacher.verification);
routes.put('/verification', teacher.accept);
routes.put('/verification', teacher.decline);

routes.get('/profile', profile.index)
routes.get('/profileAdmin', profile.indexAdministrator);

routes.get('/students', student.index);
routes.get('/students/:id', student.show);
routes.put('/students/:id', student.update);

routes.get('/comments', comments.index);
routes.get('/search/:created_at', comments.search);
routes.post('/comments', comments.create);

routes.post(
    '/students',
    celebrate({
        body: Joi.object().keys({
            student_id: Joi.string().min(9).max(9).required(),
            fullName: Joi.string().required().min(4),
            phone: Joi.string().required().min(6).max(12),
            school_id: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    student.create
);

export default routes;  