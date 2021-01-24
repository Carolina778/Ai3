'use strict';


/**
 * Adicionar produto
 * Adicionar um novo produto
 *
 * produto_ Produto__1 Produto a ser adicionado à loja
 * no response value expected for this operation
 **/
exports.adicinonarProduto = function(produto_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Apaga produto pelo ID
 * Apaga produto pelo ID
 *
 * id_produto Integer ID do produto a ser apagado
 * no response value expected for this operation
 **/
exports.apagarProdutoId = function(id_produto) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualizar um produto
 * Atualizar um produto
 *
 * produto_ Produto_ Objeto produto a ser atualizado
 * no response value expected for this operation
 **/
exports.atualizarProduto = function(produto_) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontra produto pela disponibilidade
 * Encontra produto pela disponibilidade
 *
 * disp List Disponibilidade do produto a ser encontrado
 * returns inline_response_200
 **/
exports.encontrarProdutoDisp = function(disp) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tipo" : "alimento",
  "descrição" : "descrição",
  "preço" : 0.8008281904610115,
  "nome" : "Leite",
  "stock" : 4,
  "id_produto" : 1,
  "disp" : "Disponível"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Encontra produto pelo ID
 * Encontra produto pelo ID
 *
 * id_produto Integer ID do produto a ser encontrado
 * returns produto__1
 **/
exports.encontrarProdutoId = function(id_produto) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tipo" : "alimento",
  "descrição" : "descrição",
  "preço" : 0.8008281904610115,
  "nome" : "Leite",
  "stock" : 6,
  "id_produto" : 1,
  "disp" : "Disponível"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

