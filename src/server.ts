import express from "express"

const app = express();

app.use(express.json());


// Métodos: GET: buscar ou listar uma informação
//          POST: criar uma no nova informação
//          PUT: atualizar uma informação existente
//          DELETE: deletar uma informação existente

// Corpo (Request Body): dados para criação ou atualização de um registro
// Rout params: indentificar qual recurso eu quero atualizar ou deletar

app.post('/users', (request, reponse) => {
    console.log(request.body);
    
    const users = [
        {name: "Gabriel", age: 21 },
        {name: "Ricardo", age: 30}
    ]

    return reponse.send(users)
});

// localhost:3333
app.listen(3333);