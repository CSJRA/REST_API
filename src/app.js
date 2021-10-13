//configurar el servidor

import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import projectRoutes from './routes/projects.js';
import taskRoutes from './routes/tasks.js';

//Initialization
const app = express(); 

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;