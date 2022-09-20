//Isabele
const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPubliadocao(request, response) {
        try{
            const sql = 'select adc_id,adc_porte,adc_raca,adc_idade,adc_sexo,adc_desc,adc_foto,cliente_id,adc_status,adc_data from publi_adocao;';
            const publiadocao = await db.query(sql)
            return response.status(200).json({confirma: 'Sucesso', nResults: publiadocao[0].lenght, message: publiadocao[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
    async create(request, response) {
        try {
                // parâmtros passados via corpo da requisição
            const { adc_porte, adc_raca, adc_idade, adc_sexo, adc_desc, adc_foto, cliente_id, adc_status } = request.body;  
                // instrução sql para inserção
            const sql = 'INSERT INTO PUBLI_ADOCAO (adc_porte, adc_raca, adc_idade, adc_sexo, adc_desc, adc_foto, cliente_id, adc_status) VALUES ("Grande", "Rotweiller", "5 anos", 1, "Animal dócil, estou doando pois não tenho tempo para cuidar", "Rotweiller.jpg", 3, 1)';
                // definição de array com os parâmetros que receberam os valores do front-end
            const values = [adc_porte, adc_raca, adc_idade, adc_sexo, adc_desc, adc_foto, cliente_id, adc_status]; 
                // executa a instrução de inserção no banco de dados       
            const confirmacao = await db.query(sql, values);
                // Exibe o id do registro inserido
            const adc_id = confirmacao[0].insertId; 
                // Mensagem de retorno no formato JSON
            return response.status(200).json({confirma: 'Sucesso', message: adc_id});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }   
    },
};