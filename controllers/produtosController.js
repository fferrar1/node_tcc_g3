//HUGO

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
async listarProdutos(request, response) {
    try{
        const {prod_nome = '%%'} = request.body;
        const {prod_marca = '%%'} = request.body;
        const {prod_descricao = '%%'} = request.body;

        const {page = 1, limit = 5} = request.query;
        const inicio = (page -1) * limit;

        const nome_produto = prod_nome === '%%' ? '%%' : '%' + prod_nome + '%';
        const marca_produto = prod_marca === '%%' ? '%%' : '%' + prod_marca + '%';
        const desc_produto = prod_descricao === '%%' ? '%%' : '%' + prod_descricao + '%';

    const sql = 'SELECT pdt.prod_id, pdt.pet_id, pet.pet_nome, pdt.prod_cod_barras, pdt.prod_nome, pdt.prod_descricao, pdt.prod_marca, pdt.prod_valor, pdt.prod_estoque, pdt.prod_img FROM produtos pdt INNER JOIN petshop pet ON pdt.pet_id = pet.pet_id WHERE pdt.prod_nome LIKE ? AND pdt.prod_marca LIKE ? AND pdt.prod_descricao LIKE ? LIMIT ?, ?;';
    const values = [prod_nome, prod_descricao, prod_marca, inicio, parseInt(limit)];
    const produtos = await db.query(sql, values);
        return response.status(200).json({confirma: 'Sucesso', nResults: produtos[0].lenght, message: produtos[0]});
    } catch (error) {
        return response.status(500).json({confirma : 'Erro', message: error});
    }
},

async create(request, response) {
    try {
    const { pet_id, prod_nome, prod_cod_barras, prod_descricao, prod_marca, prod_valor, prod_estoque, prod_img } = request.body;  
    const sql = 'INSERT INTO produtos (pet_id, prod_nome, prod_cod_barras, prod_descricao, prod_marca, prod_valor, prod_estoque, prod_img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; 
    const values = [pet_id, prod_nome, prod_cod_barras, prod_descricao, prod_marca, prod_valor, prod_estoque, prod_img];     
    const confirmacao = await db.query(sql, values);
    const prod_id = confirmacao[0].insertId; 
        return response.status(200).json({confirma: 'Sucesso', message: prod_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    } 
},

async update(request, response) {
    try {
    const { pet_id, prod_nome, prod_cod_barras, prod_descricao, prod_marca, prod_valor, prod_estoque, prod_img } = request.body; 
    const { prod_id } = request.params;
    const sql = 'UPDATE produtos SET pet_id = ?, prod_nome = ?, prod_cod_barras = ?, prod_descricao = ?, prod_marca = ?, prod_valor = ?, prod_estoque = ?, prod_img = ? WHERE prod_id = ?;'; 
    const values = [pet_id, prod_nome, prod_cod_barras, prod_descricao, prod_marca, prod_valor, prod_estoque, prod_img, prod_id];     
    const atualizacao = await db.query(sql, values); 
        return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    } 
},
};