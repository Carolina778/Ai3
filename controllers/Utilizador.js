'use strict';

var utils = require('../utils/writer.js');
var Utilizador = require('../service/UtilizadorService');

module.exports.apagarUtilizador = function apagarUtilizador (req, res, next) {
  var username = req.swagger.params['username'].value;
  Utilizador.apagarUtilizador(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.atualizarUtilizador = function atualizarUtilizador (req, res, next) {
  var username = req.swagger.params['username'].value;
  var utilizador_ = req.swagger.params['utilizador_'].value;
  Utilizador.atualizarUtilizador(username,utilizador_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.buscarUtilizadorPeloNome = function buscarUtilizadorPeloNome (req, res, next) {
  var username = req.swagger.params['username'].value;
  Utilizador.buscarUtilizadorPeloNome(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUtilizador = function loginUtilizador (req, res, next) {
  var username = req.swagger.params['username'].value;
  var password = req.swagger.params['password'].value;
  Utilizador.loginUtilizador(username,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUtilizador = function logoutUtilizador (req, res, next) {
  Utilizador.logoutUtilizador()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registarUtilizador = function registarUtilizador (req, res, next) {
  var utilizador_ = req.swagger.params['utilizador_'].value;
  Utilizador.registarUtilizador(utilizador_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
