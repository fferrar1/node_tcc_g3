const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPublicacao(request, response) {
        try{
            return response.status(200).json({confirma: 'Publicacao'});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};