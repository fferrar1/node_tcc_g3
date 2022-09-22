//Isabele
const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarCompra(request, response) {
        try{
            const sql = 'SELECT compra_id, pet_id,cliente_id,endereco,forma_pgto,compra_status from compra;';
            const compra = await db.query(sql)
            return response.status(200).json({confirma: 'Sucesso', nResults: compra[0].lenght, message: compra[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
},
async create(request, response) {
    try {
            // parâmtros passados via corpo da requisição
        const { pet_id, cliente_id, endereco, forma_pgto, compra_status } = request.body;  
            // instrução sql para inserção
        const sql = 'INSERT INTO COMPRA (pet_id, cliente_id, endereco, forma_pgto, compra_status) VALUES (?, ?, ?, ?, ?)';
            // definição de array com os parâmetros que receberam os valores do front-end
        const values = [ pet_id, cliente_id, endereco, forma_pgto, compra_status]; 
            // executa a instrução de inserção no banco de dados       
        const confirmacao = await db.query(sql, values);
            // Exibe o id do registro inserido
        const compra_id = confirmacao[0].insertId; 
            // Mensagem de retorno no formato JSON
        return response.status(200).json({confirma: 'Sucesso', message: compra_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    }   
},
async update(request, response) {
    try {
            // parâmtros passados via corpo da requisição
        const { pet_id, cliente_id, endereco, forma_pgto, compra_status } = request.body;  
            // instrução sql para inserção
        const { compra_id } = request.params;
            //instrução sql para atualização
        const sql = 'UPDATE compra SET pet_id = ?, cliente_id = ?, endereco = ?, forma_pgto = ?, compra_status = ? WHERE compra_id = ?;';
            // definição de array com os parâmetros que receberam os valores do front-end
        const values = [ pet_id, cliente_id, endereco, forma_pgto, compra_status, compra_id]; 
            // executa a instrução de inserção no banco de dados       
        const atualizacao = await db.query(sql, values);
            // Mensagem de retorno no formato JSON
        return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    }   
  },
}