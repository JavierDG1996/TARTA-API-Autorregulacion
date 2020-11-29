'use strict';


/**
 * Devuelve el estado del dispositivo
 * Devuelve el estado actual del dispositivo térmico para saber si hay que encenderlo o apagarlo según sea la circunstancia
 *
 * no response value expected for this operation
 **/
exports.deviceStatusGET = function() {
  return new Promise(function(resolve, reject) {
    const result = {roomId:1234,status:false}

    resolve(result);
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
    const result = {roomId:1234,temp:25}

    resolve(result);
  });
}


/**
 * Modificar la temperatura de la sala
 * Modificar la temperatura de una sala con la nueva temperatura dada por el servidor, para ello se envía una señal para cambiar la temperatura
 *
 * no response value expected for this operation
 **/
exports.modifyTempPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve(body);
  });
}


/**
 * Apagar un dispositivo térmico de una sala
 * Envía una señal para apagar el dispositivo de una sala debido a que no hay ni una persona en esa sala
 *
 * no response value expected for this operation
 **/
exports.turnOffDevicePUT = function(body) {
  return new Promise(function(resolve, reject) {

    resolve(body);
  });
}


/**
 * Encender un dispositivo térmico de una sala
 * Envía una señal para encender el dispositivo de una sala debido a que hay al menos una persona en esa sala
 *
 * no response value expected for this operation
 **/
exports.turnOnDevicePUT = function(body) {
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
  const result = {roomId:1234,number:10}

    resolve(result);
  });
}

