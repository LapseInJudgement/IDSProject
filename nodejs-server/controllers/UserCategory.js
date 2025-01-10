'use strict';

var utils = require('../utils/writer.js');
var UserCategory = require('../service/UserCategoryService');

module.exports.apiUserCategoryGET = function apiUserCategoryGET (req, res, next) {
  UserCategory.apiUserCategoryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserCategoryIdDELETE = function apiUserCategoryIdDELETE (req, res, next, id) {
  UserCategory.apiUserCategoryIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserCategoryIdGET = function apiUserCategoryIdGET (req, res, next, id) {
  UserCategory.apiUserCategoryIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserCategoryIdPUT = function apiUserCategoryIdPUT (req, res, next, body, id) {
  UserCategory.apiUserCategoryIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiUserCategoryPOST = function apiUserCategoryPOST (req, res, next, body) {
  UserCategory.apiUserCategoryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
