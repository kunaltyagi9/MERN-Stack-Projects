import express from 'express';

import { saveSendEmails } from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.post('/save-draft', saveSendEmails);


export default routes;