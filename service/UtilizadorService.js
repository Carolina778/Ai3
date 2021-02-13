'use strict';
const bcrypt = require('bcrypt');
const Utilizador = require('../models/utilizador');
/**
 * Apagar utilizador
 * Apagar um utilizador
 *
 * username String O nome do utilizador a ser eliminado
 * no response value expected for this operation
 **/
exports.apagarUtilizador = function (username) {
  return new Promise(function (resolve, reject) {
    Utilizador.remove({ username: username })
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
 * Atualizar utilizador
 * Atualizar um utilizador
 *
 * username String Username do utilizador a ser atualizado
 * utilizador_ Utilizador_ Objeto utilizador atualizado
 * no response value expected for this operation
 **/
exports.atualizarUtilizador = function (username, utilizador_) {
  return new Promise(function (resolve, reject) {
    const utilizadorExistente = {
      funcionario: utilizador_.funcionario,
      email: utilizador_.email,
      username: utilizador_.username,
      datanasc: utilizador_.datanasc,
      cargo: utilizador_.cargo,
    }
    Utilizador.updateOne({username: username }, { $set: utilizadorExistente })
      .exec()
      .then(result => {
        console.log("Sucesso! Utilizador atualizado!");
        resolve(result)
      })
      .catch(err => {
        console.log("Erro!");
        reject(err)
      })
  });
}


/**
 * Buscar utilizador
 * Buscar um utilizador
 *
 * username String Username do utilizador a buscado
 * returns utilizador_
 **/
exports.buscarUtilizadorPeloNome = function (username) {
  return new Promise(function (resolve, reject) {
    Utilizador.find({username: username})
    .exec()
    .then(result => {
      if (result.length > 0)
        resolve(result);
      else { 
        reject(404)
      }
    })
    .catch(err => {
      reject(404)
    });
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
exports.loginUtilizador = function(login_) {
  return new Promise(function(resolve, reject) {
    Utilizador.find({ 
      username: login_.username
    })
      .exec()
      .then(utilizadorExistente => {
        if (utilizadorExistente.length < 1) {
          reject(401);
        }
        else {
          bcrypt.compare(login_.password, utilizadorExistente[0].password, function (err, result) {
            if (err) {
              reject(err);
            }
            if (result === true) {
              var examples = {};
              const token = jwt.sign(
                {
                  signature: login_.username
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "30min"
                });
              examples['application/json'] = "{token:" + token + "}";
              resolve(examples[Object.keys(examples)[0]]);
            }
            else {
              reject(401);
            }
          });
        }
      })
      .catch(err => {
        reject(401);
      })
  });
}

/**
 * Faz o logout da API
 * Faz o logout da API
 *
 * no response value expected for this operation
 **/
exports.logoutUtilizador = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}



/**
 * Mostrar todos os utilizadores
 * Mostrar todos os utilizadores
 *
 * returns List
 **/
exports.mostrarUtilizador = function () {
  return new Promise(function (resolve, reject) {
    Utilizador.find()
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

/**
 * Registar utilizador
 * Registar um novo utilizador
 *
 * utilizador_ Utilizador_ 
 * no response value expected for this operation
 **/
exports.registarUtilizador = function (utilizador_) {
  return new Promise(function (resolve, reject) {
    const utilizadorExistente = Utilizador.find({
      username: utilizador_.username
    })
    utilizadorExistente
      .exec()
      .then(result => {
        if (result.length < 1) {
          bcrypt.hash(utilizador_.password, 10, function (err, hash) {
            var novoUtilizador = new Utilizador({
              funcionario: utilizador_.funcionario,
              email: utilizador_.email,
              password: hash,
              username: utilizador_.username,
              datanasc: utilizador_.datanasc,
              cargo: utilizador_.cargo,
            });
            novoUtilizador
              .save()
              .then(saved => {
                resolve(200);
              })
              .catch(err => {
                reject(400);
              });
          });
        } else {
          reject(406);
        }
      })
      .catch(err => {
        reject(400);
      });
  });
}

