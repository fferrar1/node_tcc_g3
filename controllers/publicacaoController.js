//Gustavo

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPublicacao(request, response) {
        try{
            const sql = 'SELECT ctt_id, adc_id, ctt_data, ctt_msg from contato_adocao;';
            const contatoadocao = await db.query(sql);

            return response.status(200).json({confirma: 'Sucesso', nResults: contato_adocao[0]. lenght, message: contato_adocao[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};

