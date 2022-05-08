const express = require('express');
const app = express();
require('dotenv').config();
require('./config/dbConfig');

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        nome: "Gabriel",
        projeto: "Lista de compromissos"
    });
});

app.listen(3333);