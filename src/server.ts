import express from 'express';
import dotenv from 'dotenv';
import mustache  from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//mustache configuration
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, './views'));
server.set('mustache', mustache);

//defining static files
server.use(express.static(path.join(__dirname, '../public')));

//Routes
server.use(mainRoutes);
server.use((req, res) => {
    res.status(404).send('Page not found');
})

server.listen(process.env.PORT);