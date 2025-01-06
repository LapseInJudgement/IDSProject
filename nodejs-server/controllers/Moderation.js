'use strict';

var utils = require('../utils/writer.js');
var Moderation = require('../service/ModerationService');

module.exports.apiModerationGET = function apiModerationGET (req, res, next) {
  Moderation.apiModerationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiModerationIdDELETE = function apiModerationIdDELETE (req, res, next, id) {
  Moderation.apiModerationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiModerationIdGET = function apiModerationIdGET (req, res, next, id) {
  Moderation.apiModerationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiModerationIdPUT = function apiModerationIdPUT (req, res, next, body, id) {
  Moderation.apiModerationIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiModerationPOST = function apiModerationPOST (req, res, next, body) {
  Moderation.apiModerationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
