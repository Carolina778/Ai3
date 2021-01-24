'use strict';


/**
 * Atualizar uma encomenda
 * Atualizar uma encomenda
 *
 * encomenda_ Encomenda_ Objeto encomenda a ser atualizada
 * no response value expected for this operation
 **/
exports.atualizarEncomenda = function(encomenda_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar encomenda pelo ID
 * Encontrar encomenda pelo ID
 *
 * id_encomenda Integer ID da encomenda a encontrar
 * returns encomenda__1
 **/
exports.encontrarEncomenda = function(id_encomenda) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estado" : "Criada",
  "password" : "password",
  "data_cria" : "2000-01-23",
  "datanasc" : "2000-01-23",
  "id_encomenda" : 1,
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
 * Registar encomenda
 * Registar uma nova encomenda
 *
 * encomenda_ Encomenda__1 Objeto encomenda
 * no response value expected for this operation
 **/
exports.registarEncomenda = function(encomenda_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

