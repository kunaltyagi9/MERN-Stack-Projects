import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

const app = express();

const PORT = 8000;

Connection();
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

