import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionController {
  async index(reqeuest: Request, response: Response) {}

  async create(reqeuest: Request, response: Response) {
    const { user_id } = reqeuest.body;
    await db('connections').insert({
      user_id,
    });
    return response.status(201);
  }
}
