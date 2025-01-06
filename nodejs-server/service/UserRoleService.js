'use strict';


/**
 *
 * returns List
 **/
exports.apiUserRoleGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
exports.apiUserRoleIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * id Integer 
 * returns UserRole
 **/
exports.apiUserRoleIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
 * body UserRole  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.apiUserRoleIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * body UserRole  (optional)
 * returns UserRole
 **/
exports.apiUserRolePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

