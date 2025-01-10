'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.apiCommentCommentIdReactionsPOST = function apiCommentCommentIdReactionsPOST (req, res, next, body, commentId) {
  Comment.apiCommentCommentIdReactionsPOST(body, commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentGET = function apiCommentGET (req, res, next) {
  Comment.apiCommentGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentIdDELETE = function apiCommentIdDELETE (req, res, next, id) {
  Comment.apiCommentIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentIdGET = function apiCommentIdGET (req, res, next, id) {
  Comment.apiCommentIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentIdPUT = function apiCommentIdPUT (req, res, next, body, id) {
  Comment.apiCommentIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentPOST = function apiCommentPOST (req, res, next, body) {
  Comment.apiCommentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentPostIdReactionsGET = function apiCommentPostIdReactionsGET (req, res, next, postId) {
  Comment.apiCommentPostIdReactionsGET(postId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiCommentPostIdReactionsReactionIdDELETE = function apiCommentPostIdReactionsReactionIdDELETE (req, res, next, postId, reactionId) {
  Comment.apiCommentPostIdReactionsReactionIdDELETE(postId, reactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
