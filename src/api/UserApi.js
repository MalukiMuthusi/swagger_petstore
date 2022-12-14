/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import User from '../model/User';

/**
* User service.
* @module api/UserApi
* @version 1.0.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create user
     * This can only be done by the logged in user.
     * @param {module:model/User} user Created user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createUserWithHttpInfo(user) {
      let postBody = user;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param {module:model/User} user Created user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createUser(user) {
      return this.createUserWithHttpInfo(user)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates list of users with given input array
     * 
     * @param {Array.<module:model/User>} user List of user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createUsersWithArrayInputWithHttpInfo(user) {
      let postBody = user;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUsersWithArrayInput");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/createWithArray', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates list of users with given input array
     * 
     * @param {Array.<module:model/User>} user List of user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createUsersWithArrayInput(user) {
      return this.createUsersWithArrayInputWithHttpInfo(user)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates list of users with given input array
     * 
     * @param {Array.<module:model/User>} user List of user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createUsersWithListInputWithHttpInfo(user) {
      let postBody = user;
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling createUsersWithListInput");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/createWithList', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates list of users with given input array
     * 
     * @param {Array.<module:model/User>} user List of user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createUsersWithListInput(user) {
      return this.createUsersWithListInputWithHttpInfo(user)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param {String} username The name that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUserWithHttpInfo(username) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUser");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param {String} username The name that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteUser(username) {
      return this.deleteUserWithHttpInfo(username)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user by user name
     * 
     * @param {String} username The name that needs to be fetched. Use user1 for testing.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    getUserByNameWithHttpInfo(username) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserByName");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/user/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get user by user name
     * 
     * @param {String} username The name that needs to be fetched. Use user1 for testing.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    getUserByName(username) {
      return this.getUserByNameWithHttpInfo(username)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logs user into the system
     * 
     * @param {String} username The user name for login
     * @param {String} password The password for login in clear text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    loginUserWithHttpInfo(username, password) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling loginUser");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling loginUser");
      }

      let pathParams = {
      };
      let queryParams = {
        'username': username,
        'password': password
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/user/login', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logs user into the system
     * 
     * @param {String} username The user name for login
     * @param {String} password The password for login in clear text
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    loginUser(username, password) {
      return this.loginUserWithHttpInfo(username, password)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logs out current logged in user session
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    logoutUserWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/logout', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logs out current logged in user session
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    logoutUser() {
      return this.logoutUserWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param {String} username name that need to be deleted
     * @param {module:model/User} user Updated user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateUserWithHttpInfo(username, user) {
      let postBody = user;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateUser");
      }
      // verify the required parameter 'user' is set
      if (user === undefined || user === null) {
        throw new Error("Missing the required parameter 'user' when calling updateUser");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/{username}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param {String} username name that need to be deleted
     * @param {module:model/User} user Updated user object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateUser(username, user) {
      return this.updateUserWithHttpInfo(username, user)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
