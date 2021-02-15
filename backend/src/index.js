const express = require('express');

const app = express();

app.use(express.json());

/* 
*
* GET: Busca informason
* POST: Criar info
* PUT/PATCH: Alterar um info
* DELETE: duhhhh
*/

/*
* Tipos de parametros
*
* Query Params: filtros e paginacao
* Route Params: indentifica recurso na hr de edita e paga
* Request body: Conteudo na hr de cria ou edita (JSON)
*
*/

app.get('/projects', (req, res) => {
    const {title, owner} = req.query;

    console.log(title);
    console.log(owner);

    return res.json([
        'projeto 1',
        'projeto 2',
    ]);
});

app.post('/projects', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json([
        'projeto 1',
        'projeto 2',
        'projeto 3',
        'projeto 4',
        'projeto 5',
    ]);
});

app.put('/projects/:id', (req, res) => {
    const {id} = req.params;

    console.log(id);

    return res.json([
        'projeto 0',
        'projeto 2',
        'projeto 3',
        'projeto 4',
        'projeto 5',
    ]);
});

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'projeto 0',
    ]);
});

app.listen(3333, (req, res) => {
    console.log('API up !!');
});

