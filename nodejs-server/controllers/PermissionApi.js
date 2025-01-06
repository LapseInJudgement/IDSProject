'use strict';

var utils = require('../utils/writer.js');
var PermissionApi = require('../service/PermissionApiService');

module.exports.apiPermissionGET = function apiPermissionGET (req, res, next) {
  PermissionApi.apiPermissionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPermissionIdDELETE = function apiPermissionIdDELETE (req, res, next, id) {
  PermissionApi.apiPermissionIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPermissionIdGET = function apiPermissionIdGET (req, res, next, id) {
  PermissionApi.apiPermissionIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPermissionIdPUT = function apiPermissionIdPUT (req, res, next, body, id) {
  PermissionApi.apiPermissionIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPermissionPOST = function apiPermissionPOST (req, res, next, body) {
  PermissionApi.apiPermissionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
