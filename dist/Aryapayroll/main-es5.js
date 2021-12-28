(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\user\Desktop\aryapayroll\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        appBaseUrl: "http://127.0.0.1:4200",
        apiBaseUrl: "http://192.168.1.140:3002",
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CG1p":
    /*!*****************************************!*\
      !*** ./src/app/authGuard/auth.guard.ts ***!
      \*****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function CG1p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var url = state.url;
            return this.verifyLogin(url);
          }
        }, {
          key: "verifyLogin",
          value: function verifyLogin(url) {
            if (!this.isLoggedIn()) {
              this.router.navigateByUrl('users/login');
              return false;
            } else if (this.isLoggedIn()) {
              return true;
            }
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var status = false;

            if (localStorage.getItem('token') == "undefined" || localStorage.getItem('token') == null) {
              status = false;
            } else {
              status = true;
            }

            return status;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
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
      /*! ../../environments/environment */
      "AytR");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        } //Method for calling Register API


        _createClass(ApiService, [{
          key: "submitSignup",
          value: function submitSignup(data) {
            try {
              data.redirectUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appBaseUrl, "/users/generate-password"); // Provide daynamic environment

              var apiURL = "".concat(this.endpoint, "/user/signup-via-email");
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for calling login API

        }, {
          key: "submitLogin",
          value: function submitLogin(data) {
            try {
              var apiURL = "".concat(this.endpoint, "/users/login");
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for Submit password and calling API

        }, {
          key: "submitPasswordData",
          value: function submitPasswordData(data, token) {
            try {
              data.token = token;
              var apiURL = "".concat(this.endpoint, "/user/confirm-registration");
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for Submit forgot mail and calling API

        }, {
          key: "submitForgotPasswordData",
          value: function submitForgotPasswordData(data) {
            try {
              data.redirectUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appBaseUrl, "/users/reset-password");
              var apiURL = "".concat(this.endpoint, "/user/password/request-reset");
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for Submit password and calling API

        }, {
          key: "submitResetPasswordData",
          value: function submitResetPasswordData(data, token) {
            try {
              data.token = token;
              var apiURL = "".concat(this.endpoint, "/user/password/set");
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Create method for manage errors when request and return response from the server

        }, {
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = ''; //Handle client side error

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              } //Handle server side error
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err);
            }
          } //Method for logout

        }, {
          key: "submitLogout",
          value: function submitLogout() {
            localStorage.setItem('token', "undefined");
            sessionStorage.removeItem('companyId');
          } //Method for submit company form Data and calling API

        }, {
          key: "submitCompanyData",
          value: function submitCompanyData(data, countryName, stateName) {
            try {
              data.countryName = countryName;
              data.stateName = stateName;
              var parentUserId = localStorage.getItem("token");
              var apiURL = "".concat(this.endpoint, "/company/add-company/").concat(parentUserId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Method for add currency

        }, {
          key: "submitCurrency",
          value: function submitCurrency(data) {
            try {
              var userId = localStorage.getItem('token');
              var apiURL = "".concat(this.endpoint, "/company/add-currency/").concat(userId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // List Currency

        }, {
          key: "listCurrency",
          value: function listCurrency() {
            try {
              var userId = localStorage.getItem('token');
              var apiURL = "".concat(this.endpoint, "/company/list-currency/").concat(userId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for submit updated company form Data and calling API

        }, {
          key: "submitUpdateCompanyData",
          value: function submitUpdateCompanyData(data, companyId) {
            try {
              var parentUserId = localStorage.getItem("token");
              var apiURL = "".concat(this.endpoint, "/company/update-company/").concat(parentUserId, "/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Method for get data from server and show company list

        }, {
          key: "getListData",
          value: function getListData() {
            try {
              var parentUserId = localStorage.getItem("token");
              var apiURL = "".concat(this.endpoint, "/company/company-list/").concat(parentUserId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Method for get individual company data

        }, {
          key: "getIndividualData",
          value: function getIndividualData(companyId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/details/").concat(companyId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for Delete data of company list

        }, {
          key: "removeData",
          value: function removeData(companyId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-company/").concat(companyId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Upload Company Logo and Company Report Logo

        }, {
          key: "uploadCompanyLogo",
          value: function uploadCompanyLogo(data, type, isCompanyLogo) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var formData = new FormData();
              formData.append('companyLogo', data.get('companyLogo').value);
              var apiUrl = "".concat(this.endpoint, "/company/upload-logo/").concat(companyId, "/").concat(type, "/").concat(isCompanyLogo);
              return this.http.post(apiUrl, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Method for get User Details

        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            try {
              var userId = localStorage.getItem('token');
              var apiURL = "".concat(this.endpoint, "/user-details/").concat(userId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Get Time Zones

        }, {
          key: "getTimeZone",
          value: function getTimeZone() {
            try {
              var apiURL = "".concat(this.endpoint, "/availabe-timezone");
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Update User Profile

        }, {
          key: "updateUSerProfile",
          value: function updateUSerProfile(data, timezone) {
            try {
              data.timeZone = timezone;
              var userId = localStorage.getItem('token');
              var apiUrl = "".concat(this.endpoint, "/user/update-details/").concat(userId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Upload Profile Image

        }, {
          key: "uploadProfileImage",
          value: function uploadProfileImage(data, type, employeeId) {
            try {
              var companyId, userId;

              if (type === 'User') {
                userId = localStorage.getItem('token');
                companyId = undefined;
              } else if (type === 'Employee') {
                companyId = sessionStorage.getItem('companyId');
                userId = employeeId;
              }

              var formData = new FormData();
              formData.append('avatar', data.get('avatar').value);
              var apiUrl = "".concat(this.endpoint, "/user/upload-profile-picture/").concat(userId, "/").concat(companyId, "/").concat(type);
              return this.http.post(apiUrl, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Get User Permission

        }, {
          key: "permissionDetails",
          value: function permissionDetails() {
            try {
              var userId = localStorage.getItem('token');
              var apiURL = "".concat(this.endpoint, "/user/permission-details/").concat(userId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Get User Permission

        }, {
          key: "getCompanyReport",
          value: function getCompanyReport(startDate, endDate, gradeuRuleId) {
            try {
              var companyId = localStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/company/excel-compnay-details/").concat(companyId, "/").concat(startDate, "/").concat(endDate, "/").concat(gradeuRuleId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
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
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/api.service */
      "H+bZ");
      /* harmony import */


      var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(permissionAPI, util) {
          _classCallCheck(this, AppComponent);

          this.permissionAPI = permissionAPI;
          this.util = util;
          this.title = 'Demo';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            if (sessionStorage.length === 0) {
              sessionStorage.setItem('companyId', localStorage.getItem('companyId'));
            }

            this.permissionAPI.permissionDetails().subscribe(function (data) {
              if (data.status === 'success') {
                _this.util.permissionRoleInfo = data.data;
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/api.service */
      "H+bZ");
      /* harmony import */


      var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-notifier */
      "VO+5");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_12__["UtilitiesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(), ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_12__["UtilitiesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cnwL":
    /*!************************************************!*\
      !*** ./src/app/utilities/utilities.service.ts ***!
      \************************************************/

    /*! exports provided: UtilitiesService */

    /***/
    function cnwL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilitiesService", function () {
        return UtilitiesService;
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

      var UtilitiesService = /*#__PURE__*/function () {
        function UtilitiesService(http) {
          _classCallCheck(this, UtilitiesService);

          this.http = http;
          this.timeZone = 'Asia/Kolkata';
          /** Here we provide daynamic environment value from environment */

          this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(UtilitiesService, [{
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
          /**
           * Clean Form or clear unwanted values
           */

        }, {
          key: "cleanFormLevelTwo",
          value: function cleanFormLevelTwo(formGroup) {
            try {
              var cleaningStuff = formGroup.value;

              for (var key in cleaningStuff) {
                if (typeof cleaningStuff[key] === 'object') {
                  for (var nestedKey in cleaningStuff[key]) {
                    if (typeof cleaningStuff[key][nestedKey] === 'object') {
                      for (var nestedNestedKey in cleaningStuff[key][nestedKey]) {
                        if (cleaningStuff[key][nestedKey][nestedNestedKey] === null) {
                          formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue('');
                        } else if (cleaningStuff[key][nestedKey][nestedNestedKey] === true || cleaningStuff[key][nestedKey][nestedNestedKey] === false) {// Do Nothing
                        } else {
                          formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue(formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).value.trim());
                        }
                      }
                    } else {
                      if (cleaningStuff[key][nestedKey] === null) {
                        formGroup.get(key + '.' + nestedKey).setValue('');
                      } else if (cleaningStuff[key][nestedKey] === true || cleaningStuff[key][nestedKey] === false) {// DO Nothhing
                      } else {
                        formGroup.get(key + '.' + nestedKey).setValue(formGroup.get(key + '.' + nestedKey).value.trim());
                      }
                    }
                  }
                } else {
                  if (cleaningStuff[key] === null) {
                    formGroup.get(key).setValue('');
                  } else if (cleaningStuff[key] === true || cleaningStuff[key] === false) {// Do Nothing
                  } else {
                    formGroup.get(key).setValue(formGroup.get(key).value.trim());
                  }
                }
              }

              return formGroup;
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "cleanFormLevelOne",
          value: function cleanFormLevelOne(formGroup) {
            try {
              var cleaningStuff = formGroup.value;

              for (var key in cleaningStuff) {
                if (typeof cleaningStuff[key] === 'object') {
                  for (var nestedKey in cleaningStuff[key]) {
                    if (cleaningStuff[key][nestedKey] === null) {
                      formGroup.get(key + '.' + nestedKey).setValue('');
                    } else if (cleaningStuff[key][nestedKey] === true || cleaningStuff[key][nestedKey] === false) {// DO Nothing
                    } else {
                      formGroup.get(key + '.' + nestedKey).setValue(formGroup.get(key + '.' + nestedKey).value.trim());
                    }
                  }
                } else {
                  if (cleaningStuff[key] === null) {
                    formGroup.get(key).setValue('');
                  } else if (cleaningStuff[key] === true || cleaningStuff[key] === false) {// DO Nothing
                  } else {
                    formGroup.get(key).setValue(formGroup.get(key).value.trim());
                  }
                }
              }

              return formGroup;
            } catch (err) {
              console.log(err);
            }
          } // Clean Form or clear unwanted values

        }, {
          key: "cleanFormLevelThree",
          value: function cleanFormLevelThree(formGroup) {
            try {
              var cleaningStuff = formGroup.value;

              for (var key in cleaningStuff) {
                if (typeof cleaningStuff[key] === 'object') {
                  for (var nestedKey in cleaningStuff[key]) {
                    if (typeof cleaningStuff[key][nestedKey] === 'object') {
                      for (var nestedNestedKey in cleaningStuff[key][nestedKey]) {
                        if (typeof cleaningStuff[key][nestedKey][nestedNestedKey] === 'object') {
                          for (var nestedNestedNestedKey in cleaningStuff[key][nestedKey][nestedNestedKey]) {
                            if (cleaningStuff[key][nestedKey][nestedNestedKey][nestedNestedNestedKey] === null) {
                              formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey + '.' + nestedNestedNestedKey).setValue('');
                            } else if (cleaningStuff[key][nestedKey][nestedNestedKey][nestedNestedNestedKey] === true || cleaningStuff[key][nestedKey][nestedNestedKey][nestedNestedNestedKey] === false) {// Do Nothing
                            } else {
                              formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey + '.' + nestedNestedNestedKey).setValue(formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey + '.' + nestedNestedNestedKey).value.trim());
                            }
                          }
                        } else {
                          if (cleaningStuff[key][nestedKey][nestedNestedKey] === null) {
                            formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue('');
                          } else if (cleaningStuff[key][nestedKey][nestedNestedKey] === true || cleaningStuff[key][nestedKey][nestedNestedKey] === false) {// Do Nothing
                          } else {
                            formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue(formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).value.trim());
                          }
                        }
                      }
                    } else {
                      if (cleaningStuff[key][nestedKey] === null) {
                        formGroup.get(key + '.' + nestedKey).setValue('');
                      } else if (cleaningStuff[key][nestedKey] === true || cleaningStuff[key][nestedKey] === false) {// DO Nothhing
                      } else {
                        formGroup.get(key + '.' + nestedKey).setValue(formGroup.get(key + '.' + nestedKey).value.trim());
                      }
                    }
                  }
                } else {
                  if (cleaningStuff[key] === null) {
                    formGroup.get(key).setValue('');
                  } else if (cleaningStuff[key] === true || cleaningStuff[key] === false) {// Do Nothing
                  } else {
                    formGroup.get(key).setValue(formGroup.get(key).value.trim());
                  }
                }
              }

              return formGroup;
            } catch (err) {
              console.log(err);
            }
          } // Check Module Exists

        }, {
          key: "moduleExists",
          value: function moduleExists(moduleId, type) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/company/check-module-exist/").concat(moduleId, "/").concat(companyId, "/").concat(type);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return UtilitiesService;
      }();

      UtilitiesService.ɵfac = function UtilitiesService_Factory(t) {
        return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      UtilitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UtilitiesService,
        factory: UtilitiesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitiesService, [{
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
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | app-users-users-module */
          [__webpack_require__.e("default~app-users-users-module~employee-wizard-employee-wizard-module"), __webpack_require__.e("app-users-users-module")]).then(__webpack_require__.bind(null,
          /*! ../app/users/users.module */
          "zrcO")).then(function (m) {
            return m.UsersModule;
          });
        }
      }, {
        path: 'pages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app-pages-pages-module */
          "app-pages-pages-module").then(__webpack_require__.bind(null,
          /*! ../app/pages/pages.module */
          "dgmN")).then(function (m) {
            return m.PagesModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      }, {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: 'reload'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              onSameUrlNavigation: 'reload'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map