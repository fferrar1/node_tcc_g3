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

async login(request, response) {
    const { cliente_email, cliente_senha } = request.body;
    try { 
    const sql = 'SELECT cliente_id, cliente_email, cliente_nome, cliente_endereco, cliente_telefone FROM  cliente WHERE cliente_email = ? AND  cliente_senha = ?;'; 
    const values = [cliente_email, cliente_senha];     
    const clientes = await db.query(sql, values);
        return response.status(200).json({confirma: 'Sucesso', nResults: clientes[0].length, message: clientes[0]});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    } 
},

async create(request, response) {
    try {
    const { cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone } = request.body;  
    const sql = 'INSERT INTO cliente (cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone) VALUES (?, ?, ?, ?, ?);'; 
    const values = [cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone];     
    const confirmacao = await db.query(sql, values);
    const cliente_id = confirmacao[0].insertId; 
        return response.status(200).json({confirma: 'Sucesso', message: cliente_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    } 
},

async update(request, response) {
    try {
    const { cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone } = request.body; 
    const { cliente_id } = request.params;
    const sql = 'UPDATE cliente SET cliente_email = ?, cliente_senha = ?, cliente_nome = ?, cliente_endereco = ?, cliente_telefone = ? WHERE cliente_id = ?;'; 
    const values = [cliente_email, cliente_senha, cliente_nome, cliente_endereco, cliente_telefone, cliente_id];     
    const atualizacao = await db.query(sql, values); 
        return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    } 
},
}; 