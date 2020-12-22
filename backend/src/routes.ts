import { Router } from 'express';

import { celebrate, Joi } from 'celebrate';

import TeacherController from './controllers/TeacherController';
import StudentController from './controllers/StudentController';
import CommentsController from './controllers/CommentsController';
import SessionController from './controllers/SessionController';
import ProfileController from './controllers/ProfileController';

const routes = Router();

const sessionController = new SessionController();
const profileController = new ProfileController();

const teacherController = new TeacherController();
const studentController = new StudentController();
const commentsController = new CommentsController();

routes.post('/sessions', sessionController.createSessionStudent);
routes.post('/sessionTeacher', sessionController.createSessionTeacher);

routes.get('/teachers', teacherController.index);
routes.post('/teachers', teacherController.create);
routes.get('/verification', teacherController.verification);
routes.put('/verification', teacherController.accept);
routes.put('/verification', teacherController.decline);

routes.get('/profile', profileController.index)

routes.get('/students', studentController.index);
routes.get('/students/:id', studentController.show);
routes.put('/students/:id', studentController.update);

routes.get('/comments', commentsController.index);
routes.get('/search/:created_at', commentsController.search);
routes.post('/comments', commentsController.create);

routes.post(
    '/students',
    celebrate({
        body: Joi.object().keys({
            student_id: Joi.string().min(9).max(9).required(),
            firstName: Joi.string().required().min(4),
            phone: Joi.string().required().min(6).max(12)
        })
    },{
        abortEarly: false
    }),
    studentController.create
);

export default routes;  