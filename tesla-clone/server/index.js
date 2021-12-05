import express from 'express';

import Routes from './routes/route.js';

const app = express();

app.use(express.json());
app.use('/', Routes);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));