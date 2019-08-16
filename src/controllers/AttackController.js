const mongoose = require('mongoose');
const Attack = mongoose.model('Attack');

module.exports = {

    //Listagem de ataques
    async listarAtaques(req, res) {
        const { page = 1 } = req.query;
        const attacks = await Attack.paginate({}, { page, limit: 10 });
        return res.json(attacks);
    },

    //Consulta de ataques
    async consultarAtaque(req, res) {
        const attacks = await Attack.findById(req.params.id);
        return res.json(attacks);
    },

    //Criação de ataques
    async criarAtaque(req, res) {
        const attacks = await Attack.create(req.body);
        return res.json(attacks);
    },

    //Edição de ataques
    async editarAtaque(req, res) {
        const attacks = await Attack.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // { new: true } Serve para o mongoose trazer o ataque atualizado para a constante 'ataques'.
        // Se o { new:true } não for definido, o mongoose vai trazer para a constante o ataque antes de ser atualizado.
        return res.json(attacks);
    },

    async excluirAtaque(req, res) {
        await Attack.findByIdAndRemove(req.params.id);
        return res.send();
    }

};