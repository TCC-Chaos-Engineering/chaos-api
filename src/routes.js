const express = require('express');
const routes = express.Router();

const AttackController = require('./controllers/AttackController');

routes.get('/attacks', AttackController.listarAtaques);
routes.get('/attacks/:id', AttackController.consultarAtaque);
routes.post('/attacks', AttackController.criarAtaque);
routes.put('/attacks/:id', AttackController.editarAtaque);
routes.delete('/attacks/:id', AttackController.excluirAtaque);

module.exports = routes;