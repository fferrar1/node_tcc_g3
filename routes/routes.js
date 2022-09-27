const db = require('../database/conection');
const express = require('express');
const router = express.Router();

//importação dos controlers utilizados nas rotas
const ChatclientepetshopController = require('../controllers/chatclientepetshopController');
const ClienteController = require('../controllers/clienteController');
const CompraController = require('../controllers/compraController');
const ContatoadocaoController = require('../controllers/contatoadocaoController');
const PedidosController = require('../controllers/pedidosController');
const ProdutosController = require('../controllers/produtosController');
const PubliadocaoController = require('../controllers/publiadocaoController');
const PublicacaoController = require('../controllers/publicacaoController');
const PetshopController = require('../controllers/petshopController');
const publiadocaoController = require('../controllers/publiadocaoController');


//definição de rotas

router.get('/chatclientepetshop', ChatclientepetshopController.listarChatclientepetshop);
//cadastrar
//editar
//excluir

router.get('/cliente', ClienteController.listarCliente);
//cadastrar
//editar
//excluir

router.get('/compra', CompraController.listarCompra);
//cadastrar
//editar
//excluir

router.get('/contatoadocao', ContatoadocaoController.listarContatoadocao);
router.post('/contatoadocao', ContatoadocaoController.create);
router.patch('/contatoadocao/:ctt_id', ContatoadocaoController.update);
router.delete('/contatoadocao/:ctt_id', ContatoadocaoController.delete);
//editar
//excluir

router.get('/pedidos', PedidosController.listarPedidos);
//cadastrar
//editar
//excluir

router.get('/petshop', PetshopController.listarPetshop);
//cadastrar
//editar
//excluir

router.get('/produtos', ProdutosController.listarProdutos);
//cadastrar
//editar
//excluir

router.get('/publiadocao', publiadocaoController.listarPubliadocao);
//cadastrar
//editar
//excluir

router.get('/publicacao', PublicacaoController.listarPublicacao);
router.post('/publicacao', PublicacaoController.create);
router.patch('/publicacao/:publi_id', PublicacaoController.update);
router.delete('/publicacao/:publi_id', PublicacaoController.delete);
//editar
//excluir

module.exports = router;

