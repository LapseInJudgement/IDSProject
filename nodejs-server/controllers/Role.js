'use strict';

var utils = require('../utils/writer.js');
var Role = require('../service/RoleService');

module.exports.apiRoleGET = function apiRoleGET (req, res, next) {
  Role.apiRoleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRoleIdDELETE = function apiRoleIdDELETE (req, res, next, id) {
  Role.apiRoleIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRoleIdGET = function apiRoleIdGET (req, res, next, id) {
  Role.apiRoleIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRoleIdPUT = function apiRoleIdPUT (req, res, next, body, id) {
  Role.apiRoleIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRolePOST = function apiRolePOST (req, res, next, body) {
  Role.apiRolePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
