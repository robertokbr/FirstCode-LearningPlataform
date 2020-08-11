import { Router } from 'express';
import db from './database/connection';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionController();
routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);
routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/user', async (request, response) => {
  const user = await db('users').select('*');
  return response.json(user);
});

export default routes;
