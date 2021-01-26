'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.adicionarProduto = function adicionarProduto (req, res, next) {
  var produto_ = req.swagger.params['produto_'].value;
  Produto.adicionarProduto(produto_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apagarProdutoId = function apagarProdutoId (req, res, next) {
  var id_produto = req.swagger.params['id_produto'].value;
  Produto.apagarProdutoId(id_produto)
    .then(function (response) {
      utils.writeJson(res, "Apagado", response);
    })
    .catch(function (response) {
      utils.writeJson(res, "Produto não encontrado", response);
    });
};

module.exports.atualizarProduto = function atualizarProduto (req, res, next) {
  var produto_ = req.swagger.params['produto_'].value;
  Produto.atualizarProduto(produto_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mostrarProduto = function mostrarProduto (req, res, next) {
  Produto.mostrarProduto()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
