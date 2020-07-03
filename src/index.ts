import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

// Configuration
dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded());

// Routes
app.get('/', (req, res) => res.send('Welcome to my simple To-Do Backend!'));
app.use(routes);

// Start listening!
app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
