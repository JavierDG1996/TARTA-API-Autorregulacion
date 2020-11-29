'use strict';

var utils = require('../utils/writer.js');
var Servidor = require('../service/ServidorService');

module.exports.changeTempGET = function changeTempGET (req, res, next) {
  Servidor.changeTempGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNewTempByGroupGET = function getNewTempByGroupGET (req, res, next) {
  Servidor.getNewTempByGroupGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNewTempGET = function getNewTempGET (req, res, next) {
  Servidor.getNewTempGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
