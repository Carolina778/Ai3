'use strict';

var utils = require('../utils/writer.js');
var Utilizador = require('../service/UtilizadorService');

module.exports.apagarUtilizador = function apagarUtilizador (req, res, next) {
  var username = req.swagger.params['username'].value;
  Utilizador.apagarUtilizador(username)
    .then(function (response) { 
      utils.writeJson(res, "Apagado", response);
    })
    .catch(function (response) {
      utils.writeJson(res, "Utilizador não encontrado", response); 
    });
};

module.exports.atualizarUtilizador = function atualizarUtilizador (req, res, next) {
  var username = req.swagger.params['username'].value;
  var utilizador_ = req.swagger.params['utilizador_'].value;
  Utilizador.atualizarUtilizador(username,utilizador_)
    .then(function (response) {
      utils.writeJson(res, "Atualizado", response);
    })
    .catch(function (response) {
      utils.writeJson(res, "Utilizador não encontrado", response);
    });
};

module.exports.buscarUtilizadorPeloNome = function buscarUtilizadorPeloNome (req, res, next) {
  var username = req.swagger.params['username'].value;
  Utilizador.buscarUtilizadorPeloNome(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res,"Utilizador não encontrado", response);
    });
};

module.exports.loginUtilizador = function loginUtilizador (req, res, next) {
  var login_ = req.swagger.params['login_'].value;
  Utilizador.loginUtilizador(login_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res,"Erro!", response);
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

module.exports.mostrarUtilizador = function mostrarUtilizador (req, res, next) {
  Utilizador.mostrarUtilizador()
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
      utils.writeJson(res,"Registado", response);
    })
    .catch(function (response) {
      utils.writeJson(res,"Erro", response);
    });
};
