'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.apiCategoryGET = function apiCategoryGET (req, res, next) {
  Category.apiCategoryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCategoryIdDELETE = function apiCategoryIdDELETE (req, res, next, id) {
  Category.apiCategoryIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCategoryIdGET = function apiCategoryIdGET (req, res, next, id) {
  Category.apiCategoryIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCategoryIdPUT = function apiCategoryIdPUT (req, res, next, body, id) {
  Category.apiCategoryIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCategoryPOST = function apiCategoryPOST (req, res, next, body) {
  Category.apiCategoryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
