'use strict';


/**
 * Devuelve si la temperatura debe ser cambiada o no
 * Al preguntar al servidor si hay que cambiar la temperatura de una sala, este devolverá si hay que cambiarla o no
 *
 * no response value expected for this operation
 **/
exports.changeTempGET = function() {
  return new Promise(function(resolve, reject) {
    const result = {roomId:1234,change:"yes"}

    resolve(result);
  });
}


/**
 * Devuelve la temperatura ideal a la que debe cambiar la sala en función de varios usuarios.
 * El servidor devuelve la temperatura ideal que debe tener la sala, previamente calculada con un algoritmo, para que sea cambiada y cumpla con la satisfacción de todos los usuarios que se encuentran la sala.
 *
 * no response value expected for this operation
 **/
exports.getNewTempByGroupGET = function() {
  return new Promise(function(resolve, reject) {
    const result = {roomId:1234,temp:26}

    resolve(result);
  });
}


/**
 * Devuelve la temperatura ideal a la que debe cambiar la sala en función de un usuario.
 * El servidor devuelve la temperatura ideal que debe tener la sala, previamente calculada con un algoritmo, para que sea cambiada y cumpla con la satisfacción del único usuario de la sala.
 *
 * no response value expected for this operation
 **/
exports.getNewTempGET = function() {
  return new Promise(function(resolve, reject) {
    const result = {roomId:1234,temp:24}

    resolve(result);
  });
}

