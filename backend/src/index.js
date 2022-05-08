const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        nome: "Gabriel",
        projeto: "Lista de compromissos"
    });
});

app.listen(3333);