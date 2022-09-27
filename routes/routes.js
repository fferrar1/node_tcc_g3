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


//definição de rotas

router.get('/chatclientepetshop', ChatclientepetshopController.listarChatclientepetshop);
//cadastrar
//editar
//excluir


//listar HUGO
router.get('/cliente', ClienteController.listarCliente);
//cadastrar
router.post('/cliente', ClienteController.create);
//editar
router.patch('/cliente/:cliente_id', ClienteController.update);
//excluir


router.get('/compra', CompraController.listarCompra);
//cadastrar
//editar
//excluir

router.get('/contatoadocao', ContatoadocaoController.listarContatoadocao);
//cadastrar
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


//listar HUGO
router.get('/produtos', ProdutosController.listarProdutos);
//cadastrar
router.post('/produtos', ProdutosController.create);
//editar
router.patch('/produtos/:prod_id', ProdutosController.update);
//excluir


router.get('/publiadocao', PubliadocaoController.listarPubliadocao);
//cadastrar
//editar
//excluir

router.get('/publicacao', PublicacaoController.listarPublicacao);
//cadastrar
//editar
//excluir

module.exports = router;

