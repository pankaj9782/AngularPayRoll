(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"], {
    /***/
    "KZJ6":
    /*!**************************************************!*\
      !*** ./src/app/pages/report/report.component.ts ***!
      \**************************************************/

    /*! exports provided: ReportComponent */

    /***/
    function KZJ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
        return ReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ReportComponent = /*#__PURE__*/function () {
        function ReportComponent() {
          _classCallCheck(this, ReportComponent);
        }

        _createClass(ReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportComponent;
      }();

      ReportComponent.ɵfac = function ReportComponent_Factory(t) {
        return new (t || ReportComponent)();
      };

      ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportComponent,
        selectors: [["app-report"]],
        decls: 1,
        vars: 0,
        template: function ReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report',
            templateUrl: './report.component.html',
            styleUrls: ['./report.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Q0Id":
    /*!***********************************************!*\
      !*** ./src/app/pages/report/report.module.ts ***!
      \***********************************************/

    /*! exports provided: ReportModule */

    /***/
    function Q0Id(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportModule", function () {
        return ReportModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report-routing.module */
      "UYUb");
      /* harmony import */


      var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report.component */
      "KZJ6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_report_list_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-report/list-report.component */
      "mjjI");
      /* harmony import */


      var _add_report_add_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-report/add-report.component */
      "VL8j");
      /* harmony import */


      var _update_report_update_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./update-report/update-report.component */
      "hTwD");

      var ReportModule = function ReportModule() {
        _classCallCheck(this, ReportModule);
      };

      ReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReportModule
      });
      ReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReportModule_Factory(t) {
          return new (t || ReportModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportModule, {
          declarations: [_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"], _list_report_list_report_component__WEBPACK_IMPORTED_MODULE_6__["ListReportComponent"], _add_report_add_report_component__WEBPACK_IMPORTED_MODULE_7__["AddReportComponent"], _update_report_update_report_component__WEBPACK_IMPORTED_MODULE_8__["UpdateReportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"], _list_report_list_report_component__WEBPACK_IMPORTED_MODULE_6__["ListReportComponent"], _add_report_add_report_component__WEBPACK_IMPORTED_MODULE_7__["AddReportComponent"], _update_report_update_report_component__WEBPACK_IMPORTED_MODULE_8__["UpdateReportComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UYUb":
    /*!*******************************************************!*\
      !*** ./src/app/pages/report/report-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ReportRoutingModule */

    /***/
    function UYUb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function () {
        return ReportRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report.component */
      "KZJ6");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _list_report_list_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-report/list-report.component */
      "mjjI");
      /* harmony import */


      var _add_report_add_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-report/add-report.component */
      "VL8j");
      /* harmony import */


      var _update_report_update_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./update-report/update-report.component */
      "hTwD");

      var route = [{
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'list-report',
          component: _list_report_list_report_component__WEBPACK_IMPORTED_MODULE_5__["ListReportComponent"]
        }, {
          path: 'add-report',
          component: _add_report_add_report_component__WEBPACK_IMPORTED_MODULE_6__["AddReportComponent"]
        }, {
          path: 'update-report/:jobCategoryId',
          component: _update_report_update_report_component__WEBPACK_IMPORTED_MODULE_7__["UpdateReportComponent"]
        }, {
          path: '',
          redirectTo: 'list-report',
          pathMatch: 'full'
        }]
      }];

      var ReportRoutingModule = function ReportRoutingModule() {
        _classCallCheck(this, ReportRoutingModule);
      };

      ReportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReportRoutingModule
      });
      ReportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReportRoutingModule_Factory(t) {
          return new (t || ReportRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "VL8j":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/report/add-report/add-report.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AddReportComponent */

    /***/
    function VL8j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddReportComponent", function () {
        return AddReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddReportComponent = /*#__PURE__*/function () {
        function AddReportComponent() {
          _classCallCheck(this, AddReportComponent);
        }

        _createClass(AddReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddReportComponent;
      }();

      AddReportComponent.ɵfac = function AddReportComponent_Factory(t) {
        return new (t || AddReportComponent)();
      };

      AddReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddReportComponent,
        selectors: [["app-add-report"]],
        decls: 0,
        vars: 0,
        template: function AddReportComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-report',
            templateUrl: './add-report.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "d0+X":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/report/report-service/report-api.service.ts ***!
      \*******************************************************************/

    /*! exports provided: ReportApiService */

    /***/
    function d0X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportApiService", function () {
        return ReportApiService;
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

      var ReportApiService = /*#__PURE__*/function () {
        function ReportApiService(http) {
          _classCallCheck(this, ReportApiService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(ReportApiService, [{
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
          /** add payment heads */

        }, {
          key: "addPaymentHeads",
          value: function addPaymentHeads(data) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/add-payment-head/").concat(companyId);
              return this.http.post(apiURL, data).pipe();
            } catch (err) {
              console.log(err);
            }
          }
          /**update payment heads */

        }, {
          key: "updatePaymentHeads",
          value: function updatePaymentHeads(data, paymentHeadId) {
            try {
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/company/update-payment-head/").concat(companyId, "/").concat(paymentHeadId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
          /**remove payment head */

        }, {
          key: "removePaymentHead",
          value: function removePaymentHead(paymentHeadId) {
            try {
              var apiURL = "".concat(this.endpoint, "/company/delete-payment-head/").concat(paymentHeadId);
              return this.http["delete"](apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "salarySlipData",
          value: function salarySlipData() {
            try {
              var apiURL = "".concat(this.endpoint, "/employee/salaray-slip");
              return this.http.get(apiURL).pipe();
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return ReportApiService;
      }();

      ReportApiService.ɵfac = function ReportApiService_Factory(t) {
        return new (t || ReportApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ReportApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReportApiService,
        factory: ReportApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportApiService, [{
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
    "hTwD":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/report/update-report/update-report.component.ts ***!
      \***********************************************************************/

    /*! exports provided: UpdateReportComponent */

    /***/
    function hTwD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateReportComponent", function () {
        return UpdateReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _report_service_report_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../report-service/report-api.service */
      "d0+X");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UpdateReportComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
        }
      }

      function UpdateReportComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
        }
      }

      function UpdateReportComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var h_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", h_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r3);
        }
      }

      var UpdateReportComponent = /*#__PURE__*/function () {
        function UpdateReportComponent(api, fb, route, ngZone, router) {
          _classCallCheck(this, UpdateReportComponent);

          this.api = api;
          this.fb = fb;
          this.route = route;
          this.ngZone = ngZone;
          this.router = router;
          this.successMessage = false;
          this.errorMsg = false;
          this.paymentHeadTypes = ['Addition', 'Deduction'];
        }

        _createClass(UpdateReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.existingDataList();
            this.paymentHeadId = this.route.snapshot.paramMap.get("jobCategoryId");
            this.updatePaymentHeadValidation();
          }
        }, {
          key: "updatePaymentHeadValidation",
          value: function updatePaymentHeadValidation() {
            try {
              this.paymentHeadUpdateForm = this.fb.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "existingDataList",
          value: function existingDataList() {
            var _this = this;

            this.api.getPaymentHeadData().subscribe(function (data) {
              _this.existingData = data.data;
              var len = Object.keys(_this.existingData).length;

              for (var i = 0; i < len; i++) {
                _this.paymentHeadUpdateForm = _this.fb.group({
                  title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.existingData[i].title),
                  type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.existingData[i].type)
                });
              }
            });
          }
        }, {
          key: "updatePaymenthead",
          value: function updatePaymenthead() {
            var _this2 = this;

            this.api.updatePaymentHeads(this.paymentHeadUpdateForm.value, this.paymentHeadId).subscribe(function (data) {
              if (data.data === 'success' || data.data === 200) {
                _this2.successMessage = true;

                _this2.ngZone.run(function () {
                  return _this2.router.navigateByUrl('/pages/payment-heads/list-payment-heads');
                });

                _this2.errorMsg = false;
                _this2.successMsg = data.message;
              } else {
                _this2.errorMsg = true;
                _this2.successMessage = false;
                _this2.errMsg = data.message;
              }
            });
          }
        }]);

        return UpdateReportComponent;
      }();

      UpdateReportComponent.ɵfac = function UpdateReportComponent_Factory(t) {
        return new (t || UpdateReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_report_service_report_api_service__WEBPACK_IMPORTED_MODULE_2__["ReportApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      UpdateReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateReportComponent,
        selectors: [["app-update-report"]],
        decls: 29,
        vars: 5,
        consts: [[1, "card", "card-u</div>ser"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], ["type", "text", "id", "title", "placeholder", "Enter Title", "formControlName", "title", 1, "form-control"], ["id", "type", "formControlName", "type", 1, "dropdown", "dropdown-toggle", "form-control", 2, "width", "100%", "height", "40px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "submit", "routerLink", "../../list-payment-heads", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [3, "value"]],
        template: function UpdateReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Payment Heads");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateReportComponent_p_6_Template, 3, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateReportComponent_p_8_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateReportComponent_Template_form_ngSubmit_9_listener() {
              return ctx.updatePaymenthead();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "title: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "type:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UpdateReportComponent_option_22_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paymentHeadUpdateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentHeadTypes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.paymentHeadUpdateForm.invalid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-report',
            templateUrl: 'update-report.component.html'
          }]
        }], function () {
          return [{
            type: _report_service_report_api_service__WEBPACK_IMPORTED_MODULE_2__["ReportApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mjjI":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/report/list-report/list-report.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ListReportComponent */

    /***/
    function mjjI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListReportComponent", function () {
        return ListReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jspdf */
      "5RHE");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _report_service_report_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../report-service/report-api.service */
      "d0+X");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ListReportComponent = /*#__PURE__*/function () {
        function ListReportComponent(api, fb) {
          _classCallCheck(this, ListReportComponent);

          this.api = api;
          this.fb = fb;
          this.demo = [];
          this.demo1 = [];
        }

        _createClass(ListReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.existingDataList();
          }
        }, {
          key: "existingDataList",
          value: function existingDataList() {
            var _this3 = this;

            this.api.salarySlipData().subscribe(function (data) {
              _this3.existingData = data.data;

              _this3.demo.push(data.data);

              _this3.grossAmt = data.data.gross.amt;
              _this3.netSalaryAmt = data.data.netSalary.amt;
              _this3.totalDeductionAmt = data.data.totalDeduction.amt;
              var fixddata = data.data.employeeDetails;
              _this3.fixdetails = Object.keys(fixddata).map(function (key) {
                return fixddata[key];
              }); // static header data of pdf

              _this3.fixdetails = Object.keys(fixddata).map(function (key) {
                return fixddata[key];
              }); // static header data of pdf

              _this3.imgData = _this3.fixdetails[2];
            });
          } // download pdf start

        }, {
          key: "generatePdf",
          value: function generatePdf() {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__();
            doc.setFontSize(12);
            doc.rect(5, 20, 150, 8);
            doc.text(this.fixdetails[0], 75, 26, "center", "a"); // doc.addImage(this.imgData, 'png', 10, 1, 50, 50, 'logo');

            doc.rect(5, 28, 150, 8);
            doc.text("Salary Slip for the Month of April, 2017", 75, 34, "center", "a");
            doc.rect(5, 36, 75, 8);
            doc.text("Employee Name", 22, 42, "center", "a");
            doc.rect(80, 36, 75, 8);
            doc.text(this.fixdetails[1], 120, 42, "center", "a");
            doc.rect(5, 44, 50, 13);
            doc.text("Account No.", 18, 52, "center", "a");
            doc.rect(55, 44, 50, 13);
            doc.text(this.fixdetails[3], 80, 52, "center", "a");
            doc.rect(105, 44, 50, 13);
            doc.text("Designation", 125, 52, "center", "a");
            doc.rect(155, 44, 50, 13);
            doc.text(this.fixdetails[4], 175, 52, "center", "a");
            doc.rect(5, 57, 50, 8);
            doc.text("Days Present", 19, 63, "center", "a");
            doc.rect(55, 57, 50, 8);
            doc.text(this.fixdetails[5], 80, 63, "center", "a");
            doc.rect(105, 57, 50, 8);
            doc.text("Earned Leaves", 125, 63, "center", "a");
            doc.rect(155, 57, 50, 8);
            doc.text(this.fixdetails[1], 175, 63, "center", "a");
            doc.rect(5, 65, 100, 8);
            doc.text("ESIC No :-", 17, 71, "center", "a");
            doc.rect(105, 65, 100, 8);
            doc.text("P.F. No :-", 120, 71, "center", "a");
            doc.rect(5, 73, 65, 8);
            doc.text("Leave Without Sanction", 29, 79, "center", "a");
            doc.rect(70, 73, 35, 8);
            doc.text(this.fixdetails[9], 83, 79, "center", "a");
            doc.rect(105, 73, 60, 8);
            doc.text("Payable Days", 125, 79, "center", "a");
            doc.rect(165, 73, 40, 8);
            doc.text(this.fixdetails[10], 180, 79, "center", "a");
            doc.rect(5, 81, 65, 8);
            doc.text("Total CTC/Month", 22, 87, "center", "a");
            doc.rect(70, 81, 35, 8);
            doc.text(this.fixdetails[11], 85, 87, "center", "a");
            doc.rect(105, 81, 60, 8);
            doc.text("Total CTC/Annum", 129, 87, "center", "a");
            doc.rect(165, 81, 40, 8);
            doc.text(this.fixdetails[12], 180, 87, "center", "a");
            doc.rect(5, 89, 100, 12);
            doc.text("Earnings", 40, 97, "center", "a");
            doc.rect(105, 89, 100, 12);
            doc.text("Deductions", 135, 97, "center", "a");
            doc.rect(5, 101, 65, 8);
            doc.rect(70, 101, 35, 8);
            doc.text("Amount", 85, 107, "center", "a");
            doc.rect(105, 101, 60, 8);
            doc.rect(165, 101, 40, 8);
            doc.text("Amount", 185, 107, "center", "a"); // Daynamic part start

            var textY = 115;
            var maxLength;

            if (this.demo[0].deductions.length > this.demo[0].earnigs.length) {
              maxLength = this.demo[0].deductions.length;
            } else {
              maxLength = this.demo[0].earnigs.length;
            }

            for (var i = 0; i < maxLength; i++) {
              var rectY = textY - 6;

              if (this.demo[0].earnigs[i] == undefined) {
                doc.rect(5, rectY, 65, 8);
                doc.rect(70, rectY, 35, 8);
                textY = textY + 8;
              } else {
                doc.rect(5, rectY, 65, 8);
                doc.text(this.demo[0].earnigs[i].label, 8, textY, "left", "a");
                doc.rect(70, rectY, 35, 8);
                doc.text("xxx", 95, textY, "center", "a");
              }

              if (this.demo[0].deductions[i] == undefined) {
                doc.rect(105, rectY, 60, 8);
                doc.rect(165, rectY, 40, 8);
                textY = textY + 8;
              } else {
                doc.rect(105, rectY, 60, 8);
                doc.text(this.demo[0].deductions[i].label, 117, textY, "left", "a");
                doc.rect(165, rectY, 40, 8);
                doc.text("xxx", 195, textY, "center", "a");
                textY = textY + 8;
              }
            }

            textY = textY - 6;
            doc.rect(5, textY, 65, 8);
            doc.text("Gross", 13, textY + 6, "center", "a");
            doc.rect(70, textY, 35, 8);
            doc.text(this.grossAmt, 90, textY + 6, "center", "a");
            doc.rect(105, textY, 60, 8);
            doc.text("Tootal Deductions", 134, textY + 6, "center", "a");
            doc.rect(165, textY, 40, 8);
            doc.text(this.totalDeductionAmt, 192, textY + 6, "center", "a");
            textY = textY + 8;
            doc.rect(5, textY, 65, 8);
            doc.text("Net Salary", 17, textY + 6, "center", "a");
            doc.rect(5, textY, 200, 8);
            doc.text(this.netSalaryAmt, 90, textY + 6, "center", "a");
            textY = textY + 8;
            doc.rect(5, textY, 200, 8);
            doc.save('my.pdf');
          } // download pdf end 
          // account pdf start 

        }, {
          key: "accountpdfPdf",
          value: function accountpdfPdf() {
            var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__('a', 'mm', [700, 1000]);
            doc.setFontSize(10);
            var headerSpace = 30;
            doc.text(18, headerSpace + 7, "To");
            doc.text(23, headerSpace + 20, "Indusind bank, Jaipur");
            doc.text(190, headerSpace + 7, "Date:10/2019");
            doc.text(80, headerSpace + 30, "Sub: Salary Transfer for the Month of sep 2019");
            doc.rect(15, headerSpace + 35, 200, 30);
            doc.rect(15, headerSpace + 65, 200, 5);
            doc.rect(15, headerSpace + 70, 15, 5);
            doc.rect(15, headerSpace + 70, 70, 5);
            doc.rect(15, headerSpace + 70, 105, 5);
            doc.rect(15, headerSpace + 70, 140, 5);
            doc.rect(15, headerSpace + 70, 200, 5);
            doc.rect(15, headerSpace + 75, 15, 5);
            doc.text("Sr. No", 17, headerSpace + 79, "left", "a");
            doc.rect(15, headerSpace + 75, 70, 5);
            doc.text("Name", 31, headerSpace + 79, "left", "a");
            doc.rect(15, headerSpace + 75, 105, 5);
            doc.text("Account Number", 86, headerSpace + 79, "left", "a");
            doc.rect(15, headerSpace + 75, 140, 5);
            doc.text("Amount", 123, headerSpace + 79, "left", "a");
            doc.rect(15, headerSpace + 75, 200, 5);
            doc.text("Salary for the month", 157, headerSpace + 79, "left", "a");
            headerSpace = headerSpace + 80;

            for (var i = 0; i < 20; i++) {
              doc.rect(15, headerSpace, 15, 5);
              doc.rect(15, headerSpace, 70, 5);
              doc.rect(15, headerSpace, 105, 5);
              doc.rect(15, headerSpace, 140, 5);
              doc.rect(15, headerSpace, 200, 5);
              headerSpace = headerSpace + 5;
            } // doc.addPage();


            doc.save('my.pdf');
          }
        }]);

        return ListReportComponent;
      }();

      ListReportComponent.ɵfac = function ListReportComponent_Factory(t) {
        return new (t || ListReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_report_service_report_api_service__WEBPACK_IMPORTED_MODULE_2__["ReportApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      ListReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListReportComponent,
        selectors: [["app-list-report"]],
        decls: 6,
        vars: 1,
        consts: [[3, "src"], ["img", ""], ["id", "btnDownload", 3, "click"]],
        template: function ListReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListReportComponent_Template_button_click_2_listener() {
              return ctx.generatePdf();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Download PDF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListReportComponent_Template_button_click_4_listener() {
              return ctx.accountpdfPdf();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Account pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0L2xpc3QtcmVwb3J0L2xpc3QtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydC9saXN0LXJlcG9ydC9saXN0LXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiB0YWJsZSB7XG4gIHdpZHRoOjEwMCU7XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG50aCwgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGFibGUjdDAxIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG50YWJsZSN0MDEgdHI6bnRoLWNoaWxkKG9kZCkge1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG50YWJsZSN0MDEgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufSAqL1xuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-report',
            templateUrl: './list-report.component.html',
            styleUrls: ['./list-report.component.css']
          }]
        }], function () {
          return [{
            type: _report_service_report_api_service__WEBPACK_IMPORTED_MODULE_2__["ReportApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=report-report-module-es5.js.map