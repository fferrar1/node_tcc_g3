//HUGO

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarCliente(request, response) {
        try{
            const sql = 'SELECT cliente_id, cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone FROM  cliente;';
            const cliente = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: cliente[0].lenght, message: cliente[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },


async create(request, response) {
    try {
    const {cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone } = request.body;  
    const sql = 'INSERT INTO cliente (cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone) VALUES (?, ?, ?, ?, ?)'; 
    const values = [cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone];     
    const confirmacao = await db.query(sql, values);
    const cliente_id = confirmacao[0].insertId; 
        return response.status(200).json({confirma: 'Sucesso', message: cliente_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    } 
},
}; 