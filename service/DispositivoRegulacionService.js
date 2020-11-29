'use strict';


/**
 * Devuelve el estado del dispositivo
 * Devuelve el estado actual del dispositivo térmico para saber si hay que encenderlo o apagarlo según sea la circunstancia
 *
 * no response value expected for this operation
 **/
exports.deviceStatusGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Devuelve la temperatura actual de una sala
 * Devuelve la temperatura actual de una sala para conocer si es la temperatura adecuada para los usuarios de la misma sala.
 *
 * no response value expected for this operation
 **/
exports.getTempGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Modificar la temperatura de la sala
 * Modificar la temperatura de una sala con la nueva temperatura dada por el servidor, para ello se envía una señal para cambiar la temperatura
 *
 * no response value expected for this operation
 **/
exports.modifyTempPUT = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Apagar un dispositivo térmico de una sala
 * Envía una señal para apagar el dispositivo de una sala debido a que no hay ni una persona en esa sala
 *
 * body Boolean Parámetros a enviar (optional)
 * no response value expected for this operation
 **/
exports.turnOffDevicePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encender un dispositivo térmico de una sala
 * Envía una señal para encender el dispositivo de una sala debido a que hay al menos una persona en esa sala
 *
 * body Boolean Parámetros a enviar (optional)
 * no response value expected for this operation
 **/
exports.turnOnDevicePOST = function(body) {
  return new Promise(function(resolve, reject) {

    resolve(body);
  });
}


/**
 * Devuelve el número de personas en una sala
 * Devuelve el número actual de personas que se encuentran en una sala conociendo de antemano el número de pulseras que se han conectado al controlador
 *
 * no response value expected for this operation
 **/
exports.usernumberGET = function() {
  return new Promise(function(resolve, reject) {
    const room = { roomId: 123242, numberusers: 5 }
    resolve(room);
  });
}

