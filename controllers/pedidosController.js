//fer

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPedidos(request, response) {
        try{
            const sql = 'SELECT pedido_id, compra_id, prod_id, pedido_quant, pedido_valor_produto FROM pedidos;';
            const pedidos = await db.query(sql);
            return response.status(200).json({confirma: 'Sucesso', nResults: pedidos[0].lenght, message: pedidos[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};