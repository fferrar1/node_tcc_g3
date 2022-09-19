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
    async create(request, response) {
        try {
                // parâmtros passados via corpo da requisição
            const { compra_id, prod_id, pedido_quant, pedido_valor_produto } = request.body;  
                // instrução sql para inserção
            const sql = 'INSERT INTO pedidos (compra_id, prod_id, pedido_quant, pedido_valor_produto) VALUES (3, 2, 6, 150.00);'; 
                // definição de array com os parâmetros que receberam os valores do front-end
            const values = [compra_id, prod_id, pedido_quant, pedido_valor_produto]; 
                // executa a instrução de inserção no banco de dados       
            const confirmacao = await db.query(sql, values);
                // Exibe o id do registro inserido
            const mes_id = confirmacao[0].insertId; 
                // Mensagem de retorno no formato JSON
            return response.status(200).json({confirma: 'Sucesso', message: mes_id});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }   
    }, 
};