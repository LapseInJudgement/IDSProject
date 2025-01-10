'use strict';


/**
 *
 * returns List
 **/
exports.apiNotificationGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "actionType" : "actionType",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "relatedType" : "relatedType",
  "reaction" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "relatedType" : "relatedType",
    "reactionType" : "reactionType",
    "id" : 5,
    "userId" : 2,
    "user" : {
      "country" : "country",
      "reports" : [ null, null ],
      "comments" : [ {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      }, {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      } ],
      "roleId" : 3,
      "posts" : [ null, null ],
      "passwordHash" : "passwordHash",
      "userRoles" : [ {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      }, {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      } ],
      "isDeleted" : true,
      "reactions" : [ null, null ],
      "id" : 9,
      "email" : "email",
      "age" : 2,
      "notifications" : [ null, null ],
      "username" : "username"
    },
    "notifications" : [ null, null ],
    "relatedId" : 7
  },
  "reactionId" : 1,
  "isRead" : true,
  "id" : 0,
  "message" : "message",
  "userId" : 6,
  "relatedId" : 5
}, {
  "actionType" : "actionType",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "relatedType" : "relatedType",
  "reaction" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "relatedType" : "relatedType",
    "reactionType" : "reactionType",
    "id" : 5,
    "userId" : 2,
    "user" : {
      "country" : "country",
      "reports" : [ null, null ],
      "comments" : [ {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      }, {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      } ],
      "roleId" : 3,
      "posts" : [ null, null ],
      "passwordHash" : "passwordHash",
      "userRoles" : [ {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      }, {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      } ],
      "isDeleted" : true,
      "reactions" : [ null, null ],
      "id" : 9,
      "email" : "email",
      "age" : 2,
      "notifications" : [ null, null ],
      "username" : "username"
    },
    "notifications" : [ null, null ],
    "relatedId" : 7
  },
  "reactionId" : 1,
  "isRead" : true,
  "id" : 0,
  "message" : "message",
  "userId" : 6,
  "relatedId" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.apiNotificationIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * returns Notification
 **/
exports.apiNotificationIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "actionType" : "actionType",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "relatedType" : "relatedType",
  "reaction" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "relatedType" : "relatedType",
    "reactionType" : "reactionType",
    "id" : 5,
    "userId" : 2,
    "user" : {
      "country" : "country",
      "reports" : [ null, null ],
      "comments" : [ {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      }, {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      } ],
      "roleId" : 3,
      "posts" : [ null, null ],
      "passwordHash" : "passwordHash",
      "userRoles" : [ {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      }, {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      } ],
      "isDeleted" : true,
      "reactions" : [ null, null ],
      "id" : 9,
      "email" : "email",
      "age" : 2,
      "notifications" : [ null, null ],
      "username" : "username"
    },
    "notifications" : [ null, null ],
    "relatedId" : 7
  },
  "reactionId" : 1,
  "isRead" : true,
  "id" : 0,
  "message" : "message",
  "userId" : 6,
  "relatedId" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Notification  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.apiNotificationIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body Notification  (optional)
 * returns Notification
 **/
exports.apiNotificationPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "actionType" : "actionType",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "relatedType" : "relatedType",
  "reaction" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "relatedType" : "relatedType",
    "reactionType" : "reactionType",
    "id" : 5,
    "userId" : 2,
    "user" : {
      "country" : "country",
      "reports" : [ null, null ],
      "comments" : [ {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      }, {
        "createdAt" : "2000-01-23T04:56:07.000+00:00",
        "reports" : [ null, null ],
        "deletedAt" : "2000-01-23T04:56:07.000+00:00",
        "post" : {
          "createdAt" : "2000-01-23T04:56:07.000+00:00",
          "reports" : [ {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          }, {
            "reason" : "reason",
            "reportedType" : "reportedType",
            "commentId" : 4,
            "id" : 6,
            "postId" : 1,
            "userId" : 7,
            "status" : "status"
          } ],
          "deletedAt" : "2000-01-23T04:56:07.000+00:00",
          "comments" : [ null, null ],
          "id" : 1,
          "title" : "title",
          "userId" : 1,
          "content" : "content"
        },
        "id" : 4,
        "postId" : 1,
        "userId" : 7,
        "content" : "content"
      } ],
      "roleId" : 3,
      "posts" : [ null, null ],
      "passwordHash" : "passwordHash",
      "userRoles" : [ {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      }, {
        "role" : {
          "userRoles" : [ null, null ],
          "moderations" : [ {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          }, {
            "reason" : "reason",
            "createdAt" : "2000-01-23T04:56:07.000+00:00",
            "roleId" : 9,
            "id" : 8,
            "relatedId" : 6
          } ],
          "rolePermissions" : [ {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          }, {
            "permissionId" : 1,
            "roleId" : 6,
            "permission" : {
              "permissionId" : 2,
              "rolePermissions" : [ null, null ],
              "actionName" : "actionName"
            },
            "id" : 3
          } ],
          "roleName" : "roleName",
          "id" : 6
        },
        "roleId" : 9,
        "id" : 5,
        "userId" : 9
      } ],
      "isDeleted" : true,
      "reactions" : [ null, null ],
      "id" : 9,
      "email" : "email",
      "age" : 2,
      "notifications" : [ null, null ],
      "username" : "username"
    },
    "notifications" : [ null, null ],
    "relatedId" : 7
  },
  "reactionId" : 1,
  "isRead" : true,
  "id" : 0,
  "message" : "message",
  "userId" : 6,
  "relatedId" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

