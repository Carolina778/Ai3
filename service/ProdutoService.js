'use strict';

const Produto = require('../models/produto')
/**
 * Adicionar produto
 * Adicionar um novo produto
 *
 * produto_ Produto_ Produto a ser adicionado à loja
 * no response value expected for this operation
 **/
exports.adicionarProduto = function (produto_) {
  return new Promise(function (resolve, reject) {
    const produtoExistente = Produto.find({
      nome: produto_.nome,
    })
    produtoExistente
      .exec()
      .then(res => {
        if (res.length < 1) {
          var produtoNovo = new Produto({
            nome: produto_.nome,
            tipo: produto_.tipo,
            preço: produto_.preço,
            descrição: produto_.descrição,
            disp: produto_.disp,
            stock: produto_.stock
          })
          produtoNovo
            .save()
            .then(res => {
              console.log(res)
              resolve(200);
            })
            .catch(err => {
              reject(400);

            });
        }
        else {
          reject(406);
        }
      })
      .catch(err => {
        reject(400);
      });
  });
}


/**
 * Apaga produto pelo ID
 * Apaga produto pelo ID
 *
 * id_produto Integer ID do produto a ser apagado
 * no response value expected for this operation
 **/
exports.apagarProdutoId = function (id_produto) {
  return new Promise(function (resolve, reject) {
    Produto.remove({ _id: id_produto })
      .exec()
      .then(res => {
        resolve(200);
      })
      .catch(err => {
        reject(404);
      })
  });
}


/**
 * Atualizar um produto
 * Atualizar um produto
 *
 * produto_ Produto_ Objeto produto a ser atualizado
 * no response value expected for this operation
 **/
exports.atualizarProduto = function (id_produto, produto_) {
  return new Promise(function (resolve, reject) {
    const produtoExistente = {
            nome: produto_.nome,
            tipo: produto_.tipo,
            preço: produto_.preço,
            descrição: produto_.descrição,
            disp: produto_.disp, 
            stock: produto_.stock
  }
    Produto.updateOne({ _id: id_produto}, {$set:produtoExistente})
    .exec()
    .then(result=>{
      console.log("Sucesso! Produto atualizado!");
      resolve(result)
  })
  .catch(err=>{
    console.log("Erro!");
    reject(err)
})
});
}

/**
 * Mostrar todos os produtos
 * Mostrar todos os produtos
 *
 * returns List
 **/
exports.mostrarProduto = function () {
  return new Promise(function (resolve, reject) {
    Produto.find()
      .exec()
      .then(result => {
        if (result.length > 0)
          resolve(result)
        else
          reject(404)
      })
      .catch(err => {
        reject(400)
      })
  });
}

