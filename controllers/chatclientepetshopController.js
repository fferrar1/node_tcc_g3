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

async create(request, response) {
    try {
            
        const { cliente_id, chat_data, chat_msg } = request.body;  
        const sql = 'INSERT INTO chat_cliente_petshop (cliente_id, chat_data, chat_msg, chat_vizua, pet_id) VALUES (?, ?, ?, ?, ?)'; 
        const values = [cliente_id, chat_data, chat_msg, chat_vizua, pet_id]; 
        const confirmacao = await db.query(sql, values);
        const chat_id = confirmacao[0].insertId; 
            
        return response.status(200).json({confirma: 'Sucesso', message: chat_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    }   
},
};