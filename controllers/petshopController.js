//Gava
const { json } = require("express");
const db = require("../database/conection");

module.exports = {
    async listarPetshop(request, response) {
        try{
            const sql = 'select pet_id, pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_senha, pet_logo from petshop;';
            const petshop = await db.query(sql);
             return response.status(200).json({confirma: 'Sucesso', nResults: petshop[0].length, message: petshop[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
};