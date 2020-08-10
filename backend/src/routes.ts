import { Router } from 'express';
import db from './database/connection';
import ClassesController from './controllers/ClassesController';

const routes = Router();

const classesController = new ClassesController();

routes.post('/classes', classesController.create);

routes.get('/user', async (request, response) => {
  const user = await db('users').select('*');
  return response.json(user);
});

export default routes;
