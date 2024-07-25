// Author: Adson Mettler do Nascimento

// This program is a project exercise to develop knwoledge and skills for
// creating an CRUD application using NodeJS, Express, and REST API.

import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Hompage.')
});

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`);
});