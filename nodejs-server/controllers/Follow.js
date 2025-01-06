'use strict';

var utils = require('../utils/writer.js');
var Follow = require('../service/FollowService');

module.exports.apiFollowGET = function apiFollowGET (req, res, next) {
  Follow.apiFollowGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiFollowIdDELETE = function apiFollowIdDELETE (req, res, next, id) {
  Follow.apiFollowIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiFollowIdGET = function apiFollowIdGET (req, res, next, id) {
  Follow.apiFollowIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiFollowIdPUT = function apiFollowIdPUT (req, res, next, body, id) {
  Follow.apiFollowIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiFollowPOST = function apiFollowPOST (req, res, next, body) {
  Follow.apiFollowPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
