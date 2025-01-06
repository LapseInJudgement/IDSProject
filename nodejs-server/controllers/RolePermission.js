'use strict';

var utils = require('../utils/writer.js');
var RolePermission = require('../service/RolePermissionService');

module.exports.apiRolePermissionGET = function apiRolePermissionGET (req, res, next) {
  RolePermission.apiRolePermissionGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRolePermissionIdDELETE = function apiRolePermissionIdDELETE (req, res, next, id) {
  RolePermission.apiRolePermissionIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRolePermissionIdGET = function apiRolePermissionIdGET (req, res, next, id) {
  RolePermission.apiRolePermissionIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRolePermissionIdPUT = function apiRolePermissionIdPUT (req, res, next, body, id) {
  RolePermission.apiRolePermissionIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRolePermissionPOST = function apiRolePermissionPOST (req, res, next, body) {
  RolePermission.apiRolePermissionPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
