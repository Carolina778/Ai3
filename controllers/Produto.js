'use strict';

var utils = require('../utils/writer.js');
var Produto = require('../service/ProdutoService');

module.exports.adicinonarProduto = function adicinonarProduto (req, res, next) {
  var produto_ = req.swagger.params['produto_'].value;
  Produto.adicinonarProduto(produto_)
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
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
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

module.exports.encontrarProdutoDisp = function encontrarProdutoDisp (req, res, next) {
  var disp = req.swagger.params['disp'].value;
  Produto.encontrarProdutoDisp(disp)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.encontrarProdutoId = function encontrarProdutoId (req, res, next) {
  var id_produto = req.swagger.params['id_produto'].value;
  Produto.encontrarProdutoId(id_produto)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
