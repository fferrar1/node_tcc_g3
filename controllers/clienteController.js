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
};