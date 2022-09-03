import express from 'express';
import cors from 'cors';

// components
import Connection from './database/db.js';
import Routes from './routes/todos.js';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use('/todos', Routes);

Connection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
