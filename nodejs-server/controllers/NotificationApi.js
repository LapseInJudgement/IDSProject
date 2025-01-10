'use strict';

var utils = require('../utils/writer.js');
var NotificationApi = require('../service/NotificationApiService');

module.exports.apiNotificationGET = function apiNotificationGET (req, res, next) {
  NotificationApi.apiNotificationGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiNotificationIdDELETE = function apiNotificationIdDELETE (req, res, next, id) {
  NotificationApi.apiNotificationIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiNotificationIdGET = function apiNotificationIdGET (req, res, next, id) {
  NotificationApi.apiNotificationIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiNotificationIdPUT = function apiNotificationIdPUT (req, res, next, body, id) {
  NotificationApi.apiNotificationIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiNotificationPOST = function apiNotificationPOST (req, res, next, body) {
  NotificationApi.apiNotificationPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
