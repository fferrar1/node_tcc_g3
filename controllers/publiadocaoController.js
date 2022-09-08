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
};