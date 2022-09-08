//HUGO

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarProdutos(request, response) {
        try{
            const sql = 'SELECT prod_id, pet_id, prod_cod_barras, prod_nome, prod_descricao, prod_marca, prod_valor, prod_estoque, prod_img FROM produtos;';
            const produtos = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: produtos[0].lenght, message: produtos[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};