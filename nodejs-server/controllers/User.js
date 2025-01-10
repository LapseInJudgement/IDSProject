'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.apiUserGET = function apiUserGET (req, res, next) {
  User.apiUserGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserIdDELETE = function apiUserIdDELETE (req, res, next, id) {
  User.apiUserIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserIdGET = function apiUserIdGET (req, res, next, id) {
  User.apiUserIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserIdPUT = function apiUserIdPUT (req, res, next, body, id) {
  User.apiUserIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserPOST = function apiUserPOST (req, res, next, body) {
  User.apiUserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
