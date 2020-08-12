import express from "express"

const app = express();

app.use(express.json());


// Métodos: GET: buscar ou listar uma informação
//          POST: criar uma no nova informação
//          PUT: atualizar uma informação existente
//          DELETE: deletar uma informação existente

// Corpo (Request Body): dados para criação ou atualização de um registro
// Rout params: indentificar qual recurso eu quero atualizar ou deletar
// Query params: paginação, filtros, ordenação

app.get('/', (request, reponse) => {
    return reponse.send({messege: "Olá!"})
});

// localhost:3333
app.listen(3333);