import express from 'express';

const routes = express.Router();


routes.post('/classes', (request, reponse) => {
    const data = request.body;

    console.log(data);

    return reponse.send();
});

export default routes;