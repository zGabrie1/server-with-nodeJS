import express from "express"
import cors from 'cors';
import routes from "./routes";

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


// Métodos: GET: buscar ou listar uma informação
//          POST: criar uma no nova informação
//          PUT: atualizar uma informação existente
//          DELETE: deletar uma informação existente

// Corpo (Request Body): dados para criação ou atualização de um registro
// Rout params: indentificar qual recurso eu quero atualizar ou deletar
// Query params: paginação, filtros, ordenação


// localhost:3333
app.listen(3333);