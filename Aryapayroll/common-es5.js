(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "8fwW":
    /*!************************************************************!*\
      !*** ./src/app/pages/roles/roles-service/roles.service.ts ***!
      \************************************************************/

    /*! exports provided: RolesService */

    /***/
    function fwW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesService", function () {
        return RolesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var RolesService = /*#__PURE__*/function () {
        function RolesService(http) {
          _classCallCheck(this, RolesService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(RolesService, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          } //Method for get rules list for create, edit and delete

        }, {
          key: "getRolesListData",
          value: function getRolesListData() {
            try {
              var apiUrl = "".concat(this.endpoint, "/user/role-list/");
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } //Method to Add Role

        }, {
          key: "addRole",
          value: function addRole(data) {
            try {
              var userId = localStorage.getItem('token');
              var apiUrl = "".concat(this.endpoint, "/user/add-role/").concat(userId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {}
          } //Method for get all role list

        }, {
          key: "listAllRole",
          value: function listAllRole() {
            try {
              var userId = localStorage.getItem('token');
              var apiUrl = "".concat(this.endpoint, "/user/all-role-list/").concat(userId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } //Method for get individaul role list

        }, {
          key: "listIndividualRole",
          value: function listIndividualRole(roleId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/user/individaul-role-list/").concat(roleId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } //Method to Update Role

        }, {
          key: "updateRole",
          value: function updateRole(data, roleId) {
            try {
              var userId = localStorage.getItem('token');
              var apiUrl = "".concat(this.endpoint, "/user/update-role/").concat(userId, "/").concat(roleId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {}
          } //Method for get individaul permission list

        }, {
          key: "listIndividualPermissions",
          value: function listIndividualPermissions(roleId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/user/individaul-permissions-list/").concat(roleId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } // Update Role Permissions

        }, {
          key: "updateRolePermissions",
          value: function updateRolePermissions(data, roleId) {
            try {
              var userId = localStorage.getItem('token');
              var apiUrl = "".concat(this.endpoint, "/user/update-role-permission/").concat(userId, "/").concat(roleId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Delete Permission

        }, {
          key: "deletePermission",
          value: function deletePermission(roleId, permissionId) {
            try {
              var apiURL = "".concat(this.endpoint, "/user/delete-permission/").concat(permissionId, "/").concat(roleId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return RolesService;
      }();

      RolesService.ɵfac = function RolesService_Factory(t) {
        return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RolesService,
        factory: RolesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VFOk":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/job category/jobCategory-service/jobCategory-api.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: JobCategoryApiService */

    /***/
    function VFOk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobCategoryApiService", function () {
        return JobCategoryApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var JobCategoryApiService = /*#__PURE__*/function () {
        function JobCategoryApiService(http) {
          _classCallCheck(this, JobCategoryApiService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(JobCategoryApiService, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          }
          /**Create Method for Get Job Category list */

        }, {
          key: "getJobCategoryData",
          value: function getJobCategoryData() {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/list-job-categories/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "jobCategoryDetails",
          value: function jobCategoryDetails(jobCategoryId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/job-category-details/").concat(jobCategoryId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**Create Method for add Job Category  */

        }, {
          key: "addJobCategoy",
          value: function addJobCategoy(data) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              console.log(companyId);
              var apiURL = "".concat(this.endpoint, "/company/add-job-category/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Method for Update Job Category   */

        }, {
          key: "updateJobCategory",
          value: function updateJobCategory(data, jobCategoryId) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/update-job-category/").concat(companyId, "/").concat(jobCategoryId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**Method for delete (remove) Job Category*/

        }, {
          key: "removeData",
          value: function removeData(jobCategoryId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-job-category/").concat(jobCategoryId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return JobCategoryApiService;
      }();

      JobCategoryApiService.ɵfac = function JobCategoryApiService_Factory(t) {
        return new (t || JobCategoryApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      JobCategoryApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JobCategoryApiService,
        factory: JobCategoryApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobCategoryApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Zz1j":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/document-types/document-services/document.services.ts ***!
      \*****************************************************************************/

    /*! exports provided: DocumentServices */

    /***/
    function Zz1j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentServices", function () {
        return DocumentServices;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var DocumentServices = /*#__PURE__*/function () {
        function DocumentServices(http) {
          _classCallCheck(this, DocumentServices);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(DocumentServices, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          }
          /**Create Method for Get document List  */

        }, {
          key: "documentData",
          value: function documentData() {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/list-all-document-types/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Individual document type details

        }, {
          key: "documentTypeDetails",
          value: function documentTypeDetails(documentTypeId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/document-type-details/").concat(documentTypeId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Method for get data from company for document */

        }, {
          key: "addDocumentSubmit",
          value: function addDocumentSubmit(data, companyId) {
            try {
              var _companyId = sessionStorage.getItem("companyId");

              var apiURL = "".concat(this.endpoint, "/company/add-document-types/").concat(_companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Method for Update document type  */

        }, {
          key: "updateDocument",
          value: function updateDocument(data, companyId, documentTypeId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/update-document-types/").concat(companyId, "/").concat(documentTypeId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**Method for delete (remove) document type */

        }, {
          key: "removeDocument",
          value: function removeDocument(documentTypeId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-document-type/").concat(documentTypeId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return DocumentServices;
      }();

      DocumentServices.ɵfac = function DocumentServices_Factory(t) {
        return new (t || DocumentServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      DocumentServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DocumentServices,
        factory: DocumentServices.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentServices, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fuoZ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/skill-category/skillCategory-service/skillCategory-api.service.ts ***!
      \*****************************************************************************************/

    /*! exports provided: skillCategoryApiService */

    /***/
    function fuoZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "skillCategoryApiService", function () {
        return skillCategoryApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var skillCategoryApiService = /*#__PURE__*/function () {
        function skillCategoryApiService(http) {
          _classCallCheck(this, skillCategoryApiService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(skillCategoryApiService, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          }
          /**Create Method for Get skill Category list */

        }, {
          key: "skillCategoryData",
          value: function skillCategoryData() {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/category/list-skill-category/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // List Individual category list

        }, {
          key: "skillCategoryDetails",
          value: function skillCategoryDetails(skillCategoryId) {
            try {
              var apiURL = "".concat(this.endpoint, "/category/skill-category-details/").concat(skillCategoryId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**Create Method for add Job Category  */

        }, {
          key: "addSkillCategoy",
          value: function addSkillCategoy(data) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var userId = localStorage.getItem('token');
              var apiURL = "".concat(this.endpoint, "/category/add-skill-category/").concat(companyId, "/").concat(userId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Method for Update skill Category   */

        }, {
          key: "updateSkillCategory",
          value: function updateSkillCategory(data, skillCategoryId) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var userId = localStorage.getItem('token');
              var apiURL = "".concat(this.endpoint, "/category/update-skill-category/").concat(skillCategoryId, "/").concat(companyId, "/").concat(userId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**Method for delete (remove) skill Category*/

        }, {
          key: "removeData",
          value: function removeData(skillCategoryId) {
            try {
              var apiURL = "".concat(this.endpoint, "/category/delete-skill-category/").concat(skillCategoryId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return skillCategoryApiService;
      }();

      skillCategoryApiService.ɵfac = function skillCategoryApiService_Factory(t) {
        return new (t || skillCategoryApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      skillCategoryApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: skillCategoryApiService,
        factory: skillCategoryApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](skillCategoryApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wZQ7":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/leave-types/service-leave/leave-api.service.ts ***!
      \**********************************************************************/

    /*! exports provided: LeaveApiService */

    /***/
    function wZQ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaveApiService", function () {
        return LeaveApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var LeaveApiService = /*#__PURE__*/function () {
        function LeaveApiService(http) {
          _classCallCheck(this, LeaveApiService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(LeaveApiService, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          }
          /**Create Method for Get Company List  */

        }, {
          key: "getListData",
          value: function getListData() {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/list-leave-types/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Method for get data from company for leave */

        }, {
          key: "leaveDataSubmit",
          value: function leaveDataSubmit(data) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/add-leave-type/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Method for Update leave type  */

        }, {
          key: "updateLeaveType",
          value: function updateLeaveType(data, leaveTypeId) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/update-leave-type/").concat(companyId, "/").concat(leaveTypeId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /** Getting Individual List Leave Type  */

        }, {
          key: "leaveTypeDetails",
          value: function leaveTypeDetails(leaveTypeId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/leave-type-details/").concat(leaveTypeId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**Method for delete (remove) Leave type */

        }, {
          key: "removeData",
          value: function removeData(leaveTypeId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-leave-type/").concat(leaveTypeId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Mark Employee Absent

        }, {
          key: "markEmployeeAbsent",
          value: function markEmployeeAbsent(data, userId) {
            try {
              var apiURL = "".concat(this.endpoint, "/employee/mark-leave-absent-or-sandwich/").concat(userId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return LeaveApiService;
      }();

      LeaveApiService.ɵfac = function LeaveApiService_Factory(t) {
        return new (t || LeaveApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      LeaveApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LeaveApiService,
        factory: LeaveApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaveApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "y8g4":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/graderule/graderule-service/graderule-api.service.ts ***!
      \****************************************************************************/

    /*! exports provided: GraderuleApiService */

    /***/
    function y8g4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraderuleApiService", function () {
        return GraderuleApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var GraderuleApiService = /*#__PURE__*/function () {
        function GraderuleApiService(http) {
          _classCallCheck(this, GraderuleApiService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(GraderuleApiService, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "getGradeRule",
          value: function getGradeRule(data, percentOfValue) {
            try {
              if (percentOfValue === 'basicSalary') {
                data.paymentHead.fixedPercentOfName = percentOfValue;
                data.paymentHead.fixedPercentOfId = '';
              } else {
                data.paymentHead.fixedPercentOfId = percentOfValue;
                data.paymentHead.fixedPercentOfName = '';
              }

              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/add-grade-rule/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "updateGadeRule",
          value: function updateGadeRule(data, gradeRuleId) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/update-grade-rule/").concat(companyId, "/").concat(gradeRuleId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Update Payment Heads

        }, {
          key: "updatePaymentHeads",
          value: function updatePaymentHeads(data, paymentHeadsId, gradeRuleId, percentOfValue, percent) {
            try {
              if (percent) {
                if (percentOfValue === 'basicSalary') {
                  data.fixedPercentOfName = percentOfValue;
                } else {
                  data.fixedPercentOfId = percentOfValue;
                }
              }

              var apiURL = "".concat(this.endpoint, "/company/update-grade-rule-payment-head/").concat(paymentHeadsId, "/").concat(gradeRuleId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**get payment heads data  */

        }, {
          key: "getPaymentHeadData",
          value: function getPaymentHeadData() {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/list-payment-heads/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "getGradeRuleList",
          value: function getGradeRuleList() {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/list-all-grade-rule/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "existingData",
          value: function existingData(gradeRuleId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/grade-rule-list/").concat(gradeRuleId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "removeData",
          value: function removeData(gradeRuleId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-grade-rule/").concat(gradeRuleId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Manage Payment heads start here

        }, {
          key: "companyPaymentHeads",
          value: function companyPaymentHeads(paymentHeadId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/payment-head-details/").concat(paymentHeadId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // addgrad rule payment heads

        }, {
          key: "addGradules",
          value: function addGradules(data, gradeRuleId, percentOfValue) {
            try {
              if (percentOfValue === 'basicSalary') {
                data.paymentHead.fixedPercentOfName = percentOfValue;
              } else {
                data.paymentHead.fixedPercentOfId = percentOfValue;
              }

              console.log(data);
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/company/add-grade-rule-payment-head/").concat(gradeRuleId, "/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "removeGradeData",
          value: function removeGradeData(paymentHeadsId, gradeRuleId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-grade-rule-payment-head/").concat(paymentHeadsId, "/").concat(gradeRuleId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Get Fixed Payment Heads

        }, {
          key: "fixedPaymentHeads",
          value: function fixedPaymentHeads(gradeRuleId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/fixed-payment-heads/").concat(gradeRuleId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Get Filter payment heads

        }, {
          key: "filterPaymentHeads",
          value: function filterPaymentHeads(gradeRuleId) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/company/filter-payment-heads/").concat(companyId, "/").concat(gradeRuleId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return GraderuleApiService;
      }();

      GraderuleApiService.ɵfac = function GraderuleApiService_Factory(t) {
        return new (t || GraderuleApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GraderuleApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GraderuleApiService,
        factory: GraderuleApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraderuleApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map