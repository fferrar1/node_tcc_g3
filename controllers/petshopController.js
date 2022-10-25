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
    
    async create(request, response) {
        try {
                
            const { pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_senha, pet_logo } = request.body;  
            const sql = 'INSERT INTO PETSHOP (pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_senha, pet_logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'; 
            const values = [pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_senha, pet_logo]; 
            const confirmacao = await db.query(sql, values);
            const pet_id = confirmacao[0].insertId; 
                
            return response.status(200).json({confirma: 'Sucesso', message: pet_id});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
        }   
    },

    async update(request, response) {
        try {
                
            const { pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_senha, pet_logo } = request.body; 
            const { pet_id } = request.params;
            const sql = 'UPDATE petshop SET pet_nome = ?, pet_email = ?, pet_tel_contato = ?, pet_endereco = ?, pet_cidade = ?, pet_estado = ?, pet_senha = ?, pet_logo = ? WHERE pet_id = ?;'; 
            const values = [pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_senha, pet_logo];  
            const atualizacao = await db.query(sql, values);
                
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados atualizados'});
        } catch (error) { 
            return response.status(500).json({confirma: 'Erro', message: error});
          } 
       },

       async login(request, response) {
        const {pet_email, pet_senha} = request.body;
        try{
            const sql = 'select pet_id, pet_nome, pet_email, pet_tel_contato, pet_endereco, pet_cidade, pet_estado, pet_logo from petshop where pet_email = ? AND pet_senha = ?; ';
           const values = [pet_email, pet_senha];
            const petshop = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', nResults: petshop[0].length, message: petshop[0]});
        } catch (error) {
            return response.status(500).json({confirma : 'Erro', message: error});
        }
    },
    };