//Gava
const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarChatclientepetshop(request, response) {
        try{
           const sql = 'select chp.chat_id, chp.cliente_id, cli.cliente_nome, cli.cliente_telefone, chp.chat_data, chp.chat_msg, chp.chat_vizua, chp.pet_id, pt.pet_nome, pt.pet_tel_contato, pt.pet_logo from chat_cliente_petshop chp inner join cliente cli on chp.cliente_id = cli.cliente_id inner join petshop pt on chp.pet_id = pt.pet_id;';
           
           const chat_cliente_petshop = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: chat_cliente_petshop[0].length, message: chat_cliente_petshop[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },

async create(request, response) {
    try {
            
        const { cliente_id, chat_data, chat_msg, chat_vizua, pet_id } = request.body;  
        const sql = 'INSERT INTO chat_cliente_petshop (cliente_id, chat_data, chat_msg, chat_vizua, pet_id) VALUES (?, ?, ?, ?, ?)'; 
        const values = [cliente_id, chat_data, chat_msg, chat_vizua, pet_id]; 
        const confirmacao = await db.query(sql, values);
        const chat_id = confirmacao[0].insertId; 
            
        return response.status(200).json({confirma: 'Sucesso', message: chat_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    }   
},

async update(request, response) {
    try {
            
        const { cliente_id, chat_data, chat_msg, chat_vizua, pet_id } = request.body; 
        const { chat_id } = request.params;
        const sql = 'UPDATE chat_cliente_petshop SET cliente_id = ?, chat_data = ?, chat_msg = ?, chat_vizua = ?, pet_id = ? WHERE chat_id = ?;'; 
        const values = [cliente_id, chat_data, chat_msg, chat_vizua, pet_id, chat_id]; 
        const atualizacao = await db.query(sql, values);
            
        return response.status(200).json({confirma: 'Sucesso', message: 'Dados atualizados'});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
      } 
   }, 
   
   async delete(request, response) { 
    try {
            
        const { chat_id } = request.params;
        const sql = 'DELETE FROM chat_cliente_petshop WHERE chat_id = ?'; 
        const values = [chat_id];
        
        await db.query(sql, values);  
           
        return response.status(200).json({confirma: 'Sucesso', message:'Mesa com id ' + chat_id + ' excluída com sucesso'}); 
    } catch (error) {
        return response.status(500).json({confirma: 'Erro', message: error});
    }        
},


};