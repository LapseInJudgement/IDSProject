'use strict';

var utils = require('../utils/writer.js');
var Post = require('../service/PostService');

module.exports.apiPostGET = function apiPostGET (req, res, next) {
  Post.apiPostGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostIdDELETE = function apiPostIdDELETE (req, res, next, id) {
  Post.apiPostIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostIdGET = function apiPostIdGET (req, res, next, id) {
  Post.apiPostIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostIdPUT = function apiPostIdPUT (req, res, next, body, id) {
  Post.apiPostIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostPOST = function apiPostPOST (req, res, next, body) {
  Post.apiPostPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostPostIdReactionsGET = function apiPostPostIdReactionsGET (req, res, next, postId) {
  Post.apiPostPostIdReactionsGET(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostPostIdReactionsPOST = function apiPostPostIdReactionsPOST (req, res, next, body, postId) {
  Post.apiPostPostIdReactionsPOST(body, postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiPostPostIdReactionsReactionIdDELETE = function apiPostPostIdReactionsReactionIdDELETE (req, res, next, postId, reactionId) {
  Post.apiPostPostIdReactionsReactionIdDELETE(postId, reactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
