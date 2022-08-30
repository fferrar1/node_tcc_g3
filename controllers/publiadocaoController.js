const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPubliadocao(request, response) {
        try{
            return response.status(200).json({confirma: 'Publiadocao'});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};