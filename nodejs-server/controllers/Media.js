'use strict';

var utils = require('../utils/writer.js');
var Media = require('../service/MediaService');

module.exports.apiMediaGET = function apiMediaGET (req, res, next) {
  Media.apiMediaGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiMediaIdDELETE = function apiMediaIdDELETE (req, res, next, id) {
  Media.apiMediaIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiMediaIdGET = function apiMediaIdGET (req, res, next, id) {
  Media.apiMediaIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiMediaIdPUT = function apiMediaIdPUT (req, res, next, body, id) {
  Media.apiMediaIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiMediaPOST = function apiMediaPOST (req, res, next, body) {
  Media.apiMediaPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
