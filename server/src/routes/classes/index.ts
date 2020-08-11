import { Router } from 'express';
import ClassesController from '../../controllers/ClassesController';



const classRoutes = Router();


classRoutes.get('/', async (request, response) => {
   try {
      const filters = request.query as any;
      // Instance of Classes controller
      const classesController = new ClassesController();
      // Calling method from controller
      const classes = await classesController.index(filters);

      return response.status(200).json(classes);
   } catch (error) {
      return response.json(error.message);
   }
});

classRoutes.post('/', async (request, response) => {
   try {
      // Taking parameters from body request
      const {
         name,
         avatar,
         whatsapp,
         bio,
         subject,
         cost,
         schedule
      } = request.body;

      // Instance of Classes controller
      const classesController = new ClassesController();
      // Calling method from controller
      const objectsCreated = await classesController.create({
         name,
         avatar,
         whatsapp,
         bio,
         subject,
         cost,
         schedule
      });

      // Returning response
      return response.status(200).json(objectsCreated);
   } catch (error) {
      return response.json(error.message);
   }
});



export default classRoutes;
