import express from 'express';
import classRoutes from './classes';
import connectionsRoutes from './connections';

const routes = express();
routes.use('/classes', classRoutes);
routes.use('/connections', connectionsRoutes);

export default routes;
