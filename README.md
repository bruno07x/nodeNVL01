# Node NVL01
## Vantagens / Intro 💡


---

## Install 🏹


`yarn init -y` → Inicia projeto

`yarn add express` → Microframework

`yarn add nodemon -D` → Hot reload with node
* * `yarn nodemon path/file.js`


---

## Config 🧰
> package.json
```
"scripts": {
    "dev" : "nodemon"
}
```

---

## Notes 📝

> src/index.js

````
const express = require('express');
const app = express();

<!-- Informando o tipo de dados que todas rotas usaram -->
app.use(express.json());

app.get('/path', (request, response) => {
	<!-- JSON sempre como array [] ou objeto {} -->
	return response.json({
		message : 'Hellow World'
	});
});
<!-- Definindo porta do server -->
app.listen(3333, () => {
	console.log('Server Started! 🤣');
});
````

### Métodos HTTP
**GET** → Buscar info. do back-end
**POST** → Criar info. no back-end
**PUT | PATCH** → Alterar uma info no back-end
* * ✨ Patch usado em casos que é necessário atualizar um único dado específico (NÃO É REGRA).
**DELETE** → Deletar uma info no back-end

### Tipos de parâmetros
**Query params** → Filtros e paginação
`/projects?title=react&nivel=0`
**Route params** → Identifica recursos (atualizar e deletar)
`/projects/1`
**Request body** → Conteúdo (JSON) usado na hora de criar ou editar recursos
*Informação enviada via JSON no body*
![c87f440d48d26e99cbad013c7cdc7e7b.png](:/1464bd4ccc814e928deed6d0743dc767)
```
<!-- GET -->
app.get('/projects', (request, response) => {

	<!-- Query params -->
	const query = request.query;
	<!-- End Query params -->

	return response.json({
		type : "GET"
	});
});
<!-- POST -->
app.post('/projects', (request, response) => {

	<!-- Request body -->
	const dataBody = request.body;
	<!-- End Request body -->

	return response.json({
		type : "POST"
	});
});
<!-- PUT -->
app.put('/projects/:id', (request, response) => {

	<!-- Request params -->
	const { id } = request.params;
	<!-- End Request params -->

	return response.json({
		type : "PUT"
	});
});
<!-- DELETE -->
app.delete('/projects/:id', (request, response) => {
	return response.json({
		type : "DELETE"
	});
});
```
---

## Running 🏃‍♀️
`yarn dev`

### Routes
Requests methods available (`GET`, `POST`, `PUT`, `DELETE`)

#### GET
`/projects` ▶ List all of projects
`/projects?type=node` ▶ List all of projects that contais node

#### POST
`/projects` ▶ Create a project
Body Params sample:
```
{
	"title" : "Projeto de react native NVL 1",
	"owner" : "Couto",
	"type" : "react native"
}
```

#### PUT
`/projects/600e407c-126a-4904-8149-ee21a956afbf` ▶ Edit a specific project finded by id
Body Params sample:
```
{
	"title" : "Projeto de react native NVL 1",
	"owner" : "Couto",
	"type" : "react native"
}
```

#### DELETE
`/projects/600e407c-126a-4904-8149-ee21a956afbf` ▶ Delete a specific project finded by id

---

## Solve Errors ❤
**Error:** EADDRINUSE, Address already in use
**Solution:** `kill $(lsof -t -i:3000)`