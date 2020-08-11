import db from '../database/connection';

export default class ConnectionsController {
   public async index() {
      const totalConnections = await db('connections').count('* as total')

      const { total } = totalConnections[0];

      return { total };
   }

   public async create(user_id: Number){
      const connection = await db('connections').insert({user_id});

      return connection;

   }
}
