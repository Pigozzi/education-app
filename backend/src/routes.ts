import { Router } from 'express';

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

routes.post('/sessions', sessionController.create);

routes.get('/teachers', teacherController.index);
routes.post('/teachers', teacherController.create);
routes.get('/verification', teacherController.verification);

routes.get('/profile', profileController.index)

routes.get('/students', studentController.index);
routes.post('/students', studentController.create);
routes.get('/students/:id', studentController.show);
routes.put('/students/:id', studentController.update);

routes.get('/comments', commentsController.index);
routes.post('/comments', commentsController.create);

export default routes;  