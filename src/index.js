const express = require('express');
const { uuid } = require('uuidv4');
const app = express();

app.use(express.json());

const projects = [];

//* JSON sempre como array [] ou objeto {}
// * GET
app.get('/projects', (request, response) => {
    // * Pega os query params da requisição
    const { type } = request.query;

    if(type){
        const projectsFiltered = projects.filter( project => project.type.includes(type) );
        return response.json( projectsFiltered );
    }else{
        return response.json( projects );
    }
});

// * POST
app.post('/projects', (request, response) => {
    // * Pega a request body da requisição
    const { title, owner, type } = request.body;
    const project = { id : uuid(), title, owner, type };
    projects.push(project);
    return response.json( project );
});

// * PUT
app.put('/projects/:id', (request, response) => {
    // * Pega o valor da rota da request
    const { id } = request.params;
    const projectFindedByInded = projects.findIndex(project => project.id === id);

    if(projectFindedByInded < 0){
        return response.status(400).json({ error : "Project not found."});
    }else{
        // * Pega a request body da requisição
        const { title, owner,  type } = request.body;
        const udpatedProject = {
            id,
            title,
            owner,
            type
        }
        // * Atualizando dado do array já existente
        projects[projectFindedByInded] = udpatedProject;
        return response.json( udpatedProject );
    }

});

// * DELETE
app.delete('/projects/:id', (request, response) => {
    // * Pega o valor da rota da request
    const { id } = request.params;
    const projectFindedByInded = projects.findIndex(project => project.id === id);

    if(projectFindedByInded < 0){
        return response.status(400).json({ error : "Project not found."});
    }else{
        // * Removendo valor de dentro do array
        projects.splice(projectFindedByInded, 1);
        return response.status(204).send();
    }
});

//* Definindo porta do server
app.listen(3000, () => {
   console.log("Server Started without errors! 🏹");
});