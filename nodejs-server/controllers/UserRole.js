'use strict';

var utils = require('../utils/writer.js');
var UserRole = require('../service/UserRoleService');

module.exports.apiUserRoleGET = function apiUserRoleGET (req, res, next) {
  UserRole.apiUserRoleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserRoleIdDELETE = function apiUserRoleIdDELETE (req, res, next, id) {
  UserRole.apiUserRoleIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserRoleIdGET = function apiUserRoleIdGET (req, res, next, id) {
  UserRole.apiUserRoleIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserRoleIdPUT = function apiUserRoleIdPUT (req, res, next, body, id) {
  UserRole.apiUserRoleIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserRolePOST = function apiUserRolePOST (req, res, next, body) {
  UserRole.apiUserRolePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
