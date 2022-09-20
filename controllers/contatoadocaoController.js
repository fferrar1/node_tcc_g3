//Gustavo

const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarContatoadocao(request, response) {
        try{const sql = 'SELECT ctt_id, adc_id, ctt_data, ctt_msg, ctt_vizua, cliente_id from contato_adocao;';
        const contato_adocao = await db.query(sql);

        return response.status(200).json({confirma: 'Sucesso', nResults: contato_adocao[0].length, message: contato_adocao[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },

async create(request, response) {
    try {
            
        const { adc_id, ctt_data, ctt_msg, ctt_vizua, cliente_id} = request.body;  
        const sql = 'INSERT INTO contato_adocao ( adc_id, ctt_data, ctt_msg, ctt_vizua, cliente_id) VALUES (?,?,?,?,?)';      
        const values = [ adc_id, ctt_data, ctt_msg, ctt_vizua, cliente_id];                
        const confirmacao = await db.query(sql, values);           
        const ctt_id = confirmacao[0].insertId;           
        return response.status(200).json({confirma: 'Sucesso', message: ctt_id});
    } catch (error) { 
        return response.status(500).json({confirma: 'Erro', message: error});
    }   
},
};
