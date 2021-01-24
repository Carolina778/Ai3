'use strict';


/**
 * Apagar utilizador
 * Apagar um utilizador
 *
 * username String O nome do utilizador a ser eliminado
 * no response value expected for this operation
 **/
exports.apagarUtilizador = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualizar utilizador
 * Atualizar um utilizador
 *
 * username String Username do utilizador a ser atualizado
 * utilizador_ Utilizador__1 Objeto utilizador atualizado
 * no response value expected for this operation
 **/
exports.atualizarUtilizador = function(username,utilizador_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Buscar utilizador
 * Buscar um utilizador
 *
 * username String Username do utilizador a buscado
 * returns utilizador_
 **/
exports.buscarUtilizadorPeloNome = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "datanasc" : "2000-01-23",
  "id_funcionario" : 1,
  "funcionario" : "Janete Silva",
  "email" : "janete@silva.com",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Faz o login na API
 * Faz o login na API
 *
 * username String Username do utilizador para o login
 * password String Password correspondente ao username
 * returns String
 **/
exports.loginUtilizador = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Faz o logout da API
 * Faz o logout da API
 *
 * no response value expected for this operation
 **/
exports.logoutUtilizador = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Registar utilizador
 * Registar um novo utilizador
 *
 * utilizador_ Utilizador_ 
 * no response value expected for this operation
 **/
exports.registarUtilizador = function(utilizador_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

