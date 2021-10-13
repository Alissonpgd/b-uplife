const express = require('express');

const routes = express.Router();

const CadastroController = require('./controllers/CadastroController');
const Usuarios = require('./models/Usuarios');


routes.post('/usuarios', CadastroController.create);
routes.get('/usuarios',CadastroController.index);
routes.delete('/usuarios/:_id', CadastroController.delete);
routes.get('/usuarios/:_id', CadastroController.show);
routes.put('/usuarios/', CadastroController.update);


module.exports = routes;
