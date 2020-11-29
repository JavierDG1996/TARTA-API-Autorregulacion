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
  DispositivoRegulacion.modifyTempPUT(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.turnOffDevicePUT = function turnOffDevicePUT (req, res, next) {
  DispositivoRegulacion.turnOffDevicePUT(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.turnOnDevicePUT = function turnOnDevicePUT (req, res, next) {
  DispositivoRegulacion.turnOnDevicePUT(req.body)
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
