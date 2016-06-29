(function(window, angular, undefined) {'use strict';

var urlBase = "/api";

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Users",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          url: urlBase + "/Users/login",
          method: "POST",
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.currentUserId = accessToken.userId;
              LoopBackAuth.accessTokenId = accessToken.id;
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          }
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          url: urlBase + "/Users/logout",
          method: "POST",
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserId = null;
              LoopBackAuth.accessTokenId = null;
              LoopBackAuth.save();
              return response.resource;
            }
          }
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
          url: urlBase + "/users/:id",
          method: "GET",
          params: {
            id: function() {
             var id = LoopBackAuth.currentUserId;
             if (id == null) id = '__anonymous__';
             return id;
           }
          },
          __isGetCurrentUser__ : true
        }
      }
    );


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Usuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Usuario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Usuarios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__findById__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__updateById__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__findById__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoPensions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fondoPensions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__findById__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__destroyById__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoPensions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fondoPensions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__updateById__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoPensions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fondoPensions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__updateById__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__get__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Queries accessTokens of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__create__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__delete__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__count__accessTokens
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Counts accessTokens of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Usuarios/:id/accessTokens/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__get__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions() instead.
         *
         * @description
         *
         * Queries fondoPensions of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__get__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__create__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoPensions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$__create__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__delete__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoPensions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$__count__fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.count() instead.
         *
         * @description
         *
         * Counts fondoPensions of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#create
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Usuarios",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#upsert
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Usuarios",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#exists
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Usuarios/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#findById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Usuarios/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#find
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Usuarios",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#findOne
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Usuarios/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#updateAll
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Usuarios/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#deleteById
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Usuarios/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#count
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Usuarios/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#prototype$updateAttributes
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Usuarios/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#createChangeStream
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Usuarios/change-stream",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#login
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          url: urlBase + "/Usuarios/login",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#logout
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          url: urlBase + "/Usuarios/logout",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#confirm
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Usuarios/confirm",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Usuario#resetPassword
         * @methodOf lbServices.Usuario
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Usuarios/reset",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.usuario() instead.
        "::get::FondoPension::usuario": {
          url: urlBase + "/FondoPensions/:id/usuario",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions() instead.
         *
         * @description
         *
         * Queries fondoPensions of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPensions = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::get::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions.count
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.count() instead.
         *
         * @description
         *
         * Counts fondoPensions of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.fondoPensions.count = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::count::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions.create
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoPensions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPensions.create = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::create::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions.destroyAll
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoPensions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoPensions.destroyAll = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::delete::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions.destroyById
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoPensions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fondoPensions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoPensions.destroyById = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::destroyById::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions.findById
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoPensions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fondoPensions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPensions.findById = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::findById::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Usuario#fondoPensions.updateById
         * @methodOf lbServices.Usuario
         * @deprecated Use Usuario.fondoPensions.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoPensions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for fondoPensions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPensions.updateById = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::updateById::Usuario::fondoPensions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Remuneracion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Remuneracion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Remuneracion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Remuneracions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#prototype$__get__fondoPension
         * @methodOf lbServices.Remuneracion
         * @deprecated Use Remuneracion.fondoPension() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "prototype$__get__fondoPension": {
          url: urlBase + "/Remuneracions/:id/fondoPension",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#create
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Remuneracions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#upsert
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Remuneracions",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#exists
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Remuneracions/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#findById
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Remuneracions/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#find
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Remuneracions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#findOne
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Remuneracions/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#updateAll
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Remuneracions/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#deleteById
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Remuneracions/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#count
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Remuneracions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#prototype$updateAttributes
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Remuneracions/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#createChangeStream
         * @methodOf lbServices.Remuneracion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Remuneracions/change-stream",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.remuneracions.findById() instead.
        "::findById::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/:fk",
          method: "GET",
        },

        // INTERNAL. Use FondoPension.remuneracions.destroyById() instead.
        "::destroyById::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use FondoPension.remuneracions.updateById() instead.
        "::updateById::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/:fk",
          method: "PUT",
        },

        // INTERNAL. Use FondoPension.remuneracions() instead.
        "::get::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use FondoPension.remuneracions.create() instead.
        "::create::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.remuneracions.destroyAll() instead.
        "::delete::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions",
          method: "DELETE",
        },

        // INTERNAL. Use FondoPension.remuneracions.count() instead.
        "::count::FondoPension::remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/count",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.Remuneracion#fondoPension
         * @methodOf lbServices.Remuneracion
         * @deprecated Use Remuneracion.fondoPension() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPension = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::get::Remuneracion::fondoPension"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FondoPension
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FondoPension` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FondoPension",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/FondoPensions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__findById__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.findById() instead.
         *
         * @description
         *
         * Find a related item by id for remuneracions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for remuneracions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__findById__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__destroyById__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for remuneracions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for remuneracions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__updateById__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for remuneracions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for remuneracions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__updateById__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__get__usuario
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.usuario() instead.
         *
         * @description
         *
         * Fetches belongsTo relation usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__get__usuario": {
          url: urlBase + "/FondoPensions/:id/usuario",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__findById__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__findById__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__destroyById__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__updateById__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__updateById__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__findById__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfpUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__findById__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__destroyById__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfpUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__updateById__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfpUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpUsuarios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__updateById__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__get__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions() instead.
         *
         * @description
         *
         * Queries remuneracions of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__get__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__create__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.create() instead.
         *
         * @description
         *
         * Creates a new instance in remuneracions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__create__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__delete__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.destroyAll() instead.
         *
         * @description
         *
         * Deletes all remuneracions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__count__remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.count() instead.
         *
         * @description
         *
         * Counts remuneracions of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__remuneracions": {
          url: urlBase + "/FondoPensions/:id/remuneracions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__get__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios() instead.
         *
         * @description
         *
         * Queries fondoAfpPensionUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__get__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__create__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__create__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__delete__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__count__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.count() instead.
         *
         * @description
         *
         * Counts fondoAfpPensionUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__get__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios() instead.
         *
         * @description
         *
         * Queries fondoAfpUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__get__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__create__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfpUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$__create__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__delete__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfpUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$__count__fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.count() instead.
         *
         * @description
         *
         * Counts fondoAfpUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#create
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/FondoPensions",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#upsert
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/FondoPensions",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#exists
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/FondoPensions/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#findById
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/FondoPensions/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#find
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/FondoPensions",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#findOne
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/FondoPensions/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#updateAll
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/FondoPensions/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#deleteById
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/FondoPensions/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#count
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/FondoPensions/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#prototype$updateAttributes
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/FondoPensions/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#createChangeStream
         * @methodOf lbServices.FondoPension
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/FondoPensions/change-stream",
          method: "POST",
        },

        // INTERNAL. Use Usuario.fondoPensions.findById() instead.
        "::findById::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/:fk",
          method: "GET",
        },

        // INTERNAL. Use Usuario.fondoPensions.destroyById() instead.
        "::destroyById::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Usuario.fondoPensions.updateById() instead.
        "::updateById::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Usuario.fondoPensions() instead.
        "::get::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Usuario.fondoPensions.create() instead.
        "::create::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions",
          method: "POST",
        },

        // INTERNAL. Use Usuario.fondoPensions.destroyAll() instead.
        "::delete::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions",
          method: "DELETE",
        },

        // INTERNAL. Use Usuario.fondoPensions.count() instead.
        "::count::Usuario::fondoPensions": {
          url: urlBase + "/Usuarios/:id/fondoPensions/count",
          method: "GET",
        },

        // INTERNAL. Use Remuneracion.fondoPension() instead.
        "::get::Remuneracion::fondoPension": {
          url: urlBase + "/Remuneracions/:id/fondoPension",
          method: "GET",
        },

        // INTERNAL. Use FondoAfpPensionUsuario.fondoPension() instead.
        "::get::FondoAfpPensionUsuario::fondoPension": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id/fondoPension",
          method: "GET",
        },

        // INTERNAL. Use FondoAfpUsuario.fondoPension() instead.
        "::get::FondoAfpUsuario::fondoPension": {
          url: urlBase + "/FondoAfpUsuarios/:id/fondoPension",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions() instead.
         *
         * @description
         *
         * Queries remuneracions of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        R.remuneracions = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::get::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions.count
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.count() instead.
         *
         * @description
         *
         * Counts remuneracions of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.remuneracions.count = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::count::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions.create
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.create() instead.
         *
         * @description
         *
         * Creates a new instance in remuneracions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        R.remuneracions.create = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::create::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions.destroyAll
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.destroyAll() instead.
         *
         * @description
         *
         * Deletes all remuneracions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.remuneracions.destroyAll = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::delete::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions.destroyById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for remuneracions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for remuneracions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.remuneracions.destroyById = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::destroyById::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions.findById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.findById() instead.
         *
         * @description
         *
         * Find a related item by id for remuneracions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for remuneracions
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        R.remuneracions.findById = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::findById::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#remuneracions.updateById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.remuneracions.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for remuneracions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for remuneracions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Remuneracion` object.)
         * </em>
         */
        R.remuneracions.updateById = function() {
          var TargetResource = $injector.get("Remuneracion");
          var action = TargetResource["::updateById::FondoPension::remuneracions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#usuario
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.usuario() instead.
         *
         * @description
         *
         * Fetches belongsTo relation usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.usuario = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::FondoPension::usuario"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios() instead.
         *
         * @description
         *
         * Queries fondoAfpPensionUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::get::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios.count
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.count() instead.
         *
         * @description
         *
         * Counts fondoAfpPensionUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.fondoAfpPensionUsuarios.count = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::count::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios.create
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios.create = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::create::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios.destroyAll
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfpPensionUsuarios.destroyAll = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::delete::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios.destroyById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfpPensionUsuarios.destroyById = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::destroyById::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios.findById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios.findById = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::findById::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpPensionUsuarios.updateById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpPensionUsuarios.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios.updateById = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::updateById::FondoPension::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios() instead.
         *
         * @description
         *
         * Queries fondoAfpUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        R.fondoAfpUsuarios = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::get::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios.count
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.count() instead.
         *
         * @description
         *
         * Counts fondoAfpUsuarios of FondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.fondoAfpUsuarios.count = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::count::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios.create
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfpUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        R.fondoAfpUsuarios.create = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::create::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios.destroyAll
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfpUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfpUsuarios.destroyAll = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::delete::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios.destroyById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfpUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfpUsuarios.destroyById = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::destroyById::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios.findById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfpUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        R.fondoAfpUsuarios.findById = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::findById::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoPension#fondoAfpUsuarios.updateById
         * @methodOf lbServices.FondoPension
         * @deprecated Use FondoPension.fondoAfpUsuarios.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfpUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpUsuarios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        R.fondoAfpUsuarios.updateById = function() {
          var TargetResource = $injector.get("FondoAfpUsuario");
          var action = TargetResource["::updateById::FondoPension::fondoAfpUsuarios"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FondoAfpPensionUsuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FondoAfpPensionUsuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FondoAfpPensionUsuario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/FondoAfpPensionUsuarios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#prototype$__get__fondoPension
         * @methodOf lbServices.FondoAfpPensionUsuario
         * @deprecated Use FondoAfpPensionUsuario.fondoPension() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "prototype$__get__fondoPension": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id/fondoPension",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#prototype$__get__fondoAfp
         * @methodOf lbServices.FondoAfpPensionUsuario
         * @deprecated Use FondoAfpPensionUsuario.fondoAfp() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoAfp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "prototype$__get__fondoAfp": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id/fondoAfp",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#create
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/FondoAfpPensionUsuarios",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#upsert
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/FondoAfpPensionUsuarios",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#exists
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#findById
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#find
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/FondoAfpPensionUsuarios",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#findOne
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/FondoAfpPensionUsuarios/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#updateAll
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/FondoAfpPensionUsuarios/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#deleteById
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#count
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/FondoAfpPensionUsuarios/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#prototype$updateAttributes
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#createChangeStream
         * @methodOf lbServices.FondoAfpPensionUsuario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/FondoAfpPensionUsuarios/change-stream",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios.findById() instead.
        "::findById::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/:fk",
          method: "GET",
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios.destroyById() instead.
        "::destroyById::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios.updateById() instead.
        "::updateById::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/:fk",
          method: "PUT",
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios() instead.
        "::get::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios.create() instead.
        "::create::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios.destroyAll() instead.
        "::delete::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios",
          method: "DELETE",
        },

        // INTERNAL. Use FondoPension.fondoAfpPensionUsuarios.count() instead.
        "::count::FondoPension::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpPensionUsuarios/count",
          method: "GET",
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios.findById() instead.
        "::findById::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/:fk",
          method: "GET",
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios.destroyById() instead.
        "::destroyById::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios.updateById() instead.
        "::updateById::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/:fk",
          method: "PUT",
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios() instead.
        "::get::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios.create() instead.
        "::create::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios",
          method: "POST",
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios.destroyAll() instead.
        "::delete::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios",
          method: "DELETE",
        },

        // INTERNAL. Use FondoAfp.fondoAfpPensionUsuarios.count() instead.
        "::count::FondoAfp::fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/count",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#fondoPension
         * @methodOf lbServices.FondoAfpPensionUsuario
         * @deprecated Use FondoAfpPensionUsuario.fondoPension() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPension = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::get::FondoAfpPensionUsuario::fondoPension"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpPensionUsuario#fondoAfp
         * @methodOf lbServices.FondoAfpPensionUsuario
         * @deprecated Use FondoAfpPensionUsuario.fondoAfp() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoAfp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        R.fondoAfp = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::get::FondoAfpPensionUsuario::fondoAfp"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FondoAfp
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FondoAfp` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FondoAfp",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/FondoAfps/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__findById__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "prototype$__findById__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__destroyById__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__updateById__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "prototype$__updateById__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__get__afp
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.afp() instead.
         *
         * @description
         *
         * Fetches belongsTo relation afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "prototype$__get__afp": {
          url: urlBase + "/FondoAfps/:id/afp",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__get__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios() instead.
         *
         * @description
         *
         * Queries fondoAfpPensionUsuarios of FondoAfp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "prototype$__get__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__create__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "prototype$__create__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__delete__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$__count__fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.count() instead.
         *
         * @description
         *
         * Counts fondoAfpPensionUsuarios of FondoAfp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__fondoAfpPensionUsuarios": {
          url: urlBase + "/FondoAfps/:id/fondoAfpPensionUsuarios/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#create
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/FondoAfps",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#upsert
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/FondoAfps",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#exists
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/FondoAfps/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#findById
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/FondoAfps/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#find
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/FondoAfps",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#findOne
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/FondoAfps/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#updateAll
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/FondoAfps/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#deleteById
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/FondoAfps/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#count
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/FondoAfps/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#prototype$updateAttributes
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/FondoAfps/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#createChangeStream
         * @methodOf lbServices.FondoAfp
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/FondoAfps/change-stream",
          method: "POST",
        },

        // INTERNAL. Use FondoAfpPensionUsuario.fondoAfp() instead.
        "::get::FondoAfpPensionUsuario::fondoAfp": {
          url: urlBase + "/FondoAfpPensionUsuarios/:id/fondoAfp",
          method: "GET",
        },

        // INTERNAL. Use Afp.fondoAfps.findById() instead.
        "::findById::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/:fk",
          method: "GET",
        },

        // INTERNAL. Use Afp.fondoAfps.destroyById() instead.
        "::destroyById::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Afp.fondoAfps.updateById() instead.
        "::updateById::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Afp.fondoAfps() instead.
        "::get::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Afp.fondoAfps.create() instead.
        "::create::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps",
          method: "POST",
        },

        // INTERNAL. Use Afp.fondoAfps.destroyAll() instead.
        "::delete::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps",
          method: "DELETE",
        },

        // INTERNAL. Use Afp.fondoAfps.count() instead.
        "::count::Afp::fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/count",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios() instead.
         *
         * @description
         *
         * Queries fondoAfpPensionUsuarios of FondoAfp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::get::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios.count
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.count() instead.
         *
         * @description
         *
         * Counts fondoAfpPensionUsuarios of FondoAfp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.fondoAfpPensionUsuarios.count = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::count::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios.create
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios.create = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::create::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios.destroyAll
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfpPensionUsuarios of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfpPensionUsuarios.destroyAll = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::delete::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios.destroyById
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfpPensionUsuarios.destroyById = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::destroyById::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios.findById
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios.findById = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::findById::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#fondoAfpPensionUsuarios.updateById
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.fondoAfpPensionUsuarios.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfpPensionUsuarios.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfpPensionUsuarios
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpPensionUsuario` object.)
         * </em>
         */
        R.fondoAfpPensionUsuarios.updateById = function() {
          var TargetResource = $injector.get("FondoAfpPensionUsuario");
          var action = TargetResource["::updateById::FondoAfp::fondoAfpPensionUsuarios"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.FondoAfp#afp
         * @methodOf lbServices.FondoAfp
         * @deprecated Use FondoAfp.afp() instead.
         *
         * @description
         *
         * Fetches belongsTo relation afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        R.afp = function() {
          var TargetResource = $injector.get("Afp");
          var action = TargetResource["::get::FondoAfp::afp"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Afp
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Afp` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Afp",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Afps/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__findById__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__findById__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__destroyById__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__updateById__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfps
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__updateById__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__findById__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.findById() instead.
         *
         * @description
         *
         * Find a related item by id for tasaAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasaAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__findById__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/:fk",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__destroyById__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for tasaAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasaAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/:fk",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__updateById__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for tasaAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasaAfps
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__updateById__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/:fk",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__get__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps() instead.
         *
         * @description
         *
         * Queries fondoAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__get__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__create__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__create__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__delete__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__count__fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.count() instead.
         *
         * @description
         *
         * Counts fondoAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__fondoAfps": {
          url: urlBase + "/Afps/:id/fondoAfps/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__get__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps() instead.
         *
         * @description
         *
         * Queries tasaAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__get__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__create__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.create() instead.
         *
         * @description
         *
         * Creates a new instance in tasaAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$__create__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__delete__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.destroyAll() instead.
         *
         * @description
         *
         * Deletes all tasaAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$__count__tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.count() instead.
         *
         * @description
         *
         * Counts tasaAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#create
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Afps",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#upsert
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Afps",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#exists
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Afps/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#findById
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Afps/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#find
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Afps",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#findOne
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Afps/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#updateAll
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Afps/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#deleteById
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Afps/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#count
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Afps/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#prototype$updateAttributes
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Afps/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Afp#createChangeStream
         * @methodOf lbServices.Afp
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Afps/change-stream",
          method: "POST",
        },

        // INTERNAL. Use FondoAfp.afp() instead.
        "::get::FondoAfp::afp": {
          url: urlBase + "/FondoAfps/:id/afp",
          method: "GET",
        },

        // INTERNAL. Use TasaAfp.afp() instead.
        "::get::TasaAfp::afp": {
          url: urlBase + "/TasaAfps/:id/afp",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps() instead.
         *
         * @description
         *
         * Queries fondoAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        R.fondoAfps = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::get::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps.count
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.count() instead.
         *
         * @description
         *
         * Counts fondoAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.fondoAfps.count = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::count::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps.create
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.create() instead.
         *
         * @description
         *
         * Creates a new instance in fondoAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        R.fondoAfps.create = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::create::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps.destroyAll
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.destroyAll() instead.
         *
         * @description
         *
         * Deletes all fondoAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfps.destroyAll = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::delete::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps.destroyById
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for fondoAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.fondoAfps.destroyById = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::destroyById::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps.findById
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.findById() instead.
         *
         * @description
         *
         * Find a related item by id for fondoAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        R.fondoAfps.findById = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::findById::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#fondoAfps.updateById
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.fondoAfps.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for fondoAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for fondoAfps
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfp` object.)
         * </em>
         */
        R.fondoAfps.updateById = function() {
          var TargetResource = $injector.get("FondoAfp");
          var action = TargetResource["::updateById::Afp::fondoAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps() instead.
         *
         * @description
         *
         * Queries tasaAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        R.tasaAfps = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::get::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps.count
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.count() instead.
         *
         * @description
         *
         * Counts tasaAfps of Afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.tasaAfps.count = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::count::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps.create
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.create() instead.
         *
         * @description
         *
         * Creates a new instance in tasaAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        R.tasaAfps.create = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::create::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps.destroyAll
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.destroyAll() instead.
         *
         * @description
         *
         * Deletes all tasaAfps of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasaAfps.destroyAll = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::delete::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps.destroyById
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.destroyById() instead.
         *
         * @description
         *
         * Delete a related item by id for tasaAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasaAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tasaAfps.destroyById = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::destroyById::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps.findById
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.findById() instead.
         *
         * @description
         *
         * Find a related item by id for tasaAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasaAfps
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        R.tasaAfps.findById = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::findById::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Afp#tasaAfps.updateById
         * @methodOf lbServices.Afp
         * @deprecated Use Afp.tasaAfps.updateById() instead.
         *
         * @description
         *
         * Update a related item by id for tasaAfps.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tasaAfps
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        R.tasaAfps.updateById = function() {
          var TargetResource = $injector.get("TasaAfp");
          var action = TargetResource["::updateById::Afp::tasaAfps"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.TasaAfp
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TasaAfp` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TasaAfp",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/TasaAfps/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#prototype$__get__afp
         * @methodOf lbServices.TasaAfp
         * @deprecated Use TasaAfp.afp() instead.
         *
         * @description
         *
         * Fetches belongsTo relation afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "prototype$__get__afp": {
          url: urlBase + "/TasaAfps/:id/afp",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#create
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/TasaAfps",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#upsert
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/TasaAfps",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#exists
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/TasaAfps/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#findById
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/TasaAfps/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#find
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/TasaAfps",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#findOne
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/TasaAfps/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#updateAll
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/TasaAfps/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#deleteById
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/TasaAfps/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#count
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/TasaAfps/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#prototype$updateAttributes
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TasaAfp` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/TasaAfps/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#createChangeStream
         * @methodOf lbServices.TasaAfp
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/TasaAfps/change-stream",
          method: "POST",
        },

        // INTERNAL. Use Afp.tasaAfps.findById() instead.
        "::findById::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/:fk",
          method: "GET",
        },

        // INTERNAL. Use Afp.tasaAfps.destroyById() instead.
        "::destroyById::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Afp.tasaAfps.updateById() instead.
        "::updateById::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Afp.tasaAfps() instead.
        "::get::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Afp.tasaAfps.create() instead.
        "::create::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps",
          method: "POST",
        },

        // INTERNAL. Use Afp.tasaAfps.destroyAll() instead.
        "::delete::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps",
          method: "DELETE",
        },

        // INTERNAL. Use Afp.tasaAfps.count() instead.
        "::count::Afp::tasaAfps": {
          url: urlBase + "/Afps/:id/tasaAfps/count",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.TasaAfp#afp
         * @methodOf lbServices.TasaAfp
         * @deprecated Use TasaAfp.afp() instead.
         *
         * @description
         *
         * Fetches belongsTo relation afp.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Afp` object.)
         * </em>
         */
        R.afp = function() {
          var TargetResource = $injector.get("Afp");
          var action = TargetResource["::get::TasaAfp::afp"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.FondoAfpUsuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FondoAfpUsuario` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "FondoAfpUsuario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/FondoAfpUsuarios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#prototype$__get__fondoPension
         * @methodOf lbServices.FondoAfpUsuario
         * @deprecated Use FondoAfpUsuario.fondoPension() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "prototype$__get__fondoPension": {
          url: urlBase + "/FondoAfpUsuarios/:id/fondoPension",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#create
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/FondoAfpUsuarios",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#upsert
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/FondoAfpUsuarios",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#exists
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/FondoAfpUsuarios/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#findById
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/FondoAfpUsuarios/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#find
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Array.<Object>, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/FondoAfpUsuarios",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#findOne
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/FondoAfpUsuarios/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#updateAll
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/FondoAfpUsuarios/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#deleteById
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/FondoAfpUsuarios/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#count
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/FondoAfpUsuarios/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#prototype$updateAttributes
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoAfpUsuario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/FondoAfpUsuarios/:id",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#createChangeStream
         * @methodOf lbServices.FondoAfpUsuario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/FondoAfpUsuarios/change-stream",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios.findById() instead.
        "::findById::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/:fk",
          method: "GET",
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios.destroyById() instead.
        "::destroyById::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios.updateById() instead.
        "::updateById::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/:fk",
          method: "PUT",
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios() instead.
        "::get::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios.create() instead.
        "::create::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios",
          method: "POST",
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios.destroyAll() instead.
        "::delete::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios",
          method: "DELETE",
        },

        // INTERNAL. Use FondoPension.fondoAfpUsuarios.count() instead.
        "::count::FondoPension::fondoAfpUsuarios": {
          url: urlBase + "/FondoPensions/:id/fondoAfpUsuarios/count",
          method: "GET",
        },
      }
    );


        /**
         * @ngdoc method
         * @name lbServices.FondoAfpUsuario#fondoPension
         * @methodOf lbServices.FondoAfpUsuario
         * @deprecated Use FondoAfpUsuario.fondoPension() instead.
         *
         * @description
         *
         * Fetches belongsTo relation fondoPension.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {Function(Object, Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `FondoPension` object.)
         * </em>
         */
        R.fondoPension = function() {
          var TargetResource = $injector.get("FondoPension");
          var action = TargetResource["::get::FondoAfpUsuario::fondoPension"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = '$LoopBack$' + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = '$LoopBack$' + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          if (LoopBackAuth.accessTokenId) {
            config.headers.authorization = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])
  .factory('LoopBackResource', [ '$resource', function($resource) {
    return function(url, params, actions) {
      var resource = $resource(url, params, actions);
      // Angular always calls POST on $save()
      // This hack is based on
      // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
      resource.prototype.$save = function(success, error) {
        // Fortunately, LoopBack provides a convenient `upsert` method
        // that exactly fits our needs.
        var result = resource.upsert.call(this, {}, this, success, error);
        return result.$promise || result;
      }

      return resource;
    };
  }]);

})(window, window.angular);
