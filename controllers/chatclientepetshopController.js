//Gava
const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarChatclientepetshop(request, response) {
        try{
           const sql = 'select chat_id, cliente_id, chat_data, chat_msg from chat_cliente_petshop;';
           const chat_cliente_petshop = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: chat_cliente_petshop[0].length, message: chat_cliente_petshop[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};