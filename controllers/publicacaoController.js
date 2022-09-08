//Gustavo

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPublicacao(request, response) {
        try{
            const sql = 'select publi_id, publi_name, pet_id, publi_desc, publi_conteudo, publi_status from publicacao;';
            const publicacao = await db.query(sql);
    
            return response.status(200).json({confirma: 'Sucesso', nResults: publicacao[0].length, message: publicacao[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};

