'use strict';

const Encomenda = require('../models/encomenda')

/**
 * Atualizar uma encomenda pelo id
 * Atualizar uma encomenda
 *
 * id_encomenda String Objeto encomenda a ser atualizada
 * atualizarEncomenda_ AtualizarEncomenda_ Information to update the order (optional)
 * no response value expected for this operation
 **/
exports.atualizarEncomenda = function (id_encomenda, atualizarEncomenda_) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar encomenda pelo ID
 * Encontrar encomenda pelo ID
 *
 * id_encomenda Integer ID da encomenda a encontrar
 * returns encomenda_
 **/
exports.encontrarEncomenda = function (id_encomenda) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "estado": "Criada",
      "data_cria": "2000-01-23",
      "id_encomenda": 0
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * Mostrar todas as encomendas
 * Mostrar todas as encomendas
 *
 * returns List
 **/
exports.mostrarEncomenda = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = ["", ""];
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
 * encomenda_ Encomenda_ Objeto encomenda
 * no response value expected for this operation
 **/
exports.registarEncomenda = function (encomenda_) {
  return new Promise(function (resolve, reject) {

    resolve();
  });
}
