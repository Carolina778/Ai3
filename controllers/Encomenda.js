'use strict';

var utils = require('../utils/writer.js');
var Encomenda = require('../service/EncomendaService');

module.exports.atualizarEncomenda = function atualizarEncomenda (req, res, next) {
  var encomenda_ = req.swagger.params['encomenda_'].value;
  Encomenda.atualizarEncomenda(encomenda_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.encontrarEncomenda = function encontrarEncomenda (req, res, next) {
  var id_encomenda = req.swagger.params['id_encomenda'].value;
  Encomenda.encontrarEncomenda(id_encomenda)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registarEncomenda = function registarEncomenda (req, res, next) {
  var encomenda_ = req.swagger.params['encomenda_'].value;
  Encomenda.registarEncomenda(encomenda_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
