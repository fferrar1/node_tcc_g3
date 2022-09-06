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
};