'use strict';

var utils = require('../utils/writer.js');
var DispositivoRegulacion = require('../service/DispositivoRegulacionService');

module.exports.deviceStatusGET = function deviceStatusGET (req, res, next) {
  DispositivoRegulacion.deviceStatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTempGET = function getTempGET (req, res, next) {
  DispositivoRegulacion.getTempGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyTempPUT = function modifyTempPUT (req, res, next) {
  DispositivoRegulacion.modifyTempPUT()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.turnOffDevicePOST = function turnOffDevicePOST (req, res, next, body) {
  DispositivoRegulacion.turnOffDevicePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.turnOnDevicePOST = function turnOnDevicePOST (req, res, next, body) {
  DispositivoRegulacion.turnOnDevicePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usernumberGET = function usernumberGET (req, res, next) {
  DispositivoRegulacion.usernumberGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
