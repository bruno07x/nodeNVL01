const express = require('express');
const app = express();

app.use(express.json());

//* JSON sempre como array [] ou objeto {}
// * GET
app.get('/projects', (request, response) => {

    // * Pega os query params da requisição
    const query = request.query;
    console.log( 'Valor do query param é:', query );

    return response.json({
        typeRequest : "GET",
        projects : [
           "Projeto 01",
           "Projeto 02",
           "Projeto 03"
        ]
    });
});

// * POST
app.post('/projects', (request, response) => {

    // * Pega a request body da requisição
    const dataBody = request.body;
    console.log( 'Valor da request body é:', dataBody );

    return response.json({
        typeRequest : "POST",
        projects : [
         "Projeto 01",
         "Projeto 02",
         "Projeto 03"
         ]
    });
});
// * PUT
app.put('/projects/:id', (request, response) => {

    // * Pega o valor da rota da request
    const { id } = request.params;
    console.log( 'Valor do route param é:', id );

    return response.json({
        typeRequest : "PUT",
        projects : [
         "Projeto 04",
         "Projeto 02",
         "Projeto 03"
         ]
    });
});
// * DELETE
app.delete('/projects/:id', (request, response) => {

    // * Pega o valor da rota da request
    const { id } = request.params;
    console.log( 'Valor do route param é:', id );

    return response.json({
        typeRequest : "DELETE",
        projects : [
         "Projeto 01"
         ]
    });
});

//* Definindo porta do server
app.listen(3000, () => {
   console.log("Server Started without errors! 🏹");
});