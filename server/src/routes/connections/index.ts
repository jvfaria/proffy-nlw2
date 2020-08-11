import { Router, response } from 'express';
import ConnectionsController from '../../controllers/ConnectionsController';




const connectionsRoutes = Router();
const connectionsController = new ConnectionsController();

connectionsRoutes.get('/', async (request,response) => {
   const connections = await connectionsController.index();

   return response.status(200).json(connections);
})

connectionsRoutes.post('/', async (request, response) => {
   try {
      const { user_id } = request.body;


      await connectionsController.create(Number(user_id));

      return response.status(201).json();
   } catch (error) {
      return response.status(400).json({ message: error.message });
   }
})



export default connectionsRoutes;
