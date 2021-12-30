(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-category-job-category-module"], {
    /***/
    "6Ky3":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/job category/list-job-category/list-job-category.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ListJobCategoryComponent */

    /***/
    function Ky3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListJobCategoryComponent", function () {
        return ListJobCategoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../jobCategory-service/jobCategory-api.service */
      "VFOk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ListJobCategoryComponent_tbody_16_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListJobCategoryComponent_tbody_16_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListJobCategoryComponent_tbody_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListJobCategoryComponent_tbody_16_td_7_Template, 2, 0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListJobCategoryComponent_tbody_16_td_8_Template, 2, 0, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListJobCategoryComponent_tbody_16_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var list_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.showConfirmationMessage(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.categoryName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !list_r1.isActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.permissionInfo.search("Edit JobCategory") === -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/job-category/update-job-category/", list_r1._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.permissionInfo.search("Delete JobCategory") === -1);
        }
      }

      var ListJobCategoryComponent = /*#__PURE__*/function () {
        function ListJobCategoryComponent(api, route, _Activatedroute, util) {
          _classCallCheck(this, ListJobCategoryComponent);

          this.api = api;
          this.route = route;
          this._Activatedroute = _Activatedroute;
          this.util = util;
          this.showCard = {}; // leaveListData: any = Object;

          this.companyShowData = [];
          this.leaveListData = [];
        }

        _createClass(ListJobCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.jobList();
            this.permissionInfo = this.util.permissionRoleInfo;
          }
        }, {
          key: "jobList",
          value: function jobList() {
            var _this = this;

            try {
              this.api.getJobCategoryData().subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this.leaveListData = data.jobCategory;

                  if (_this.leaveListData.length == 0) {
                    _this.route.navigateByUrl("/pages/job-category/add-job-category");
                  } else {
                    for (var i = 0; i < _this.leaveListData.length; i++) {
                      _this.showCard[_this.leaveListData[i]._id] = true;
                      _this.isActive = data.jobCategory[i].isActive == true;
                    }
                  }
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "showConfirmationMessage",
          value: function showConfirmationMessage(jobCategoryId) {
            var _this2 = this;

            var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
              title: 'Are you sure?',
              text: "You want to delete it",
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
              reverseButtons: true
            }).then(function (result) {
              if (result.value) {
                _this2.api.removeData(jobCategoryId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                    _this2.jobList();
                  }
                });
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
              }
            });
          }
        }, {
          key: "addJobCategory",
          value: function addJobCategory() {
            try {
              this.util.jobCategoryStatus = 1;
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return ListJobCategoryComponent;
      }();

      ListJobCategoryComponent.ɵfac = function ListJobCategoryComponent_Factory(t) {
        return new (t || ListJobCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_2__["JobCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      ListJobCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListJobCategoryComponent,
        selectors: [["app-list-job-category"]],
        decls: 17,
        vars: 2,
        consts: [[1, "card"], [1, "card-header", 2, "text-align", "center"], ["type", "button", "routerLink", "/pages/job-category/add-job-category", 1, "btn", "btn-primary", 2, "float", "right", 3, "disabled", "click"], [1, "fa", "fa-plus-square"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"], [1, "fa", "fa-check", 2, "color", "green", "font-size", "25px"], [1, "fa", "fa-times", 2, "color", "red", "font-size", "25px"]],
        template: function ListJobCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Job Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListJobCategoryComponent_Template_button_click_4_listener() {
              return ctx.addJobCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0 Add Job Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " S.No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Category Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Is Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListJobCategoryComponent_tbody_16_Template, 15, 8, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.permissionInfo.search("Create JobCategory") === -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leaveListData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListJobCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-job-category',
            templateUrl: './list-job-category.component.html'
          }]
        }], function () {
          return [{
            type: _jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_2__["JobCategoryApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Lo0G":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/job category/job-category-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: JobCategoryRoutingModule */

    /***/
    function Lo0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobCategoryRoutingModule", function () {
        return JobCategoryRoutingModule;
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


      var _job_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-category.component */
      "d4I6");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _list_job_category_list_job_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-job-category/list-job-category.component */
      "6Ky3");
      /* harmony import */


      var _add_job_category_add_job_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-job-category/add-job-category.component */
      "lkcj");
      /* harmony import */


      var _update_job_category_update_job_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./update-job-category/update-job-category.component */
      "gKt1");

      var route = [{
        path: '',
        component: _job_category_component__WEBPACK_IMPORTED_MODULE_3__["JobCategoryComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'list-job-category',
          component: _list_job_category_list_job_category_component__WEBPACK_IMPORTED_MODULE_5__["ListJobCategoryComponent"]
        }, {
          path: 'add-job-category',
          component: _add_job_category_add_job_category_component__WEBPACK_IMPORTED_MODULE_6__["AddJobCategoryComponent"]
        }, {
          path: 'update-job-category/:jobCategoryId',
          component: _update_job_category_update_job_category_component__WEBPACK_IMPORTED_MODULE_7__["UpdateJobCategoryComponent"]
        }, {
          path: '',
          redirectTo: 'list-job-category',
          pathMatch: 'full'
        }]
      }];

      var JobCategoryRoutingModule = function JobCategoryRoutingModule() {
        _classCallCheck(this, JobCategoryRoutingModule);
      };

      JobCategoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: JobCategoryRoutingModule
      });
      JobCategoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function JobCategoryRoutingModule_Factory(t) {
          return new (t || JobCategoryRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobCategoryRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobCategoryRoutingModule, [{
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
    "d4I6":
    /*!**************************************************************!*\
      !*** ./src/app/pages/job category/job-category.component.ts ***!
      \**************************************************************/

    /*! exports provided: JobCategoryComponent */

    /***/
    function d4I6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobCategoryComponent", function () {
        return JobCategoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var JobCategoryComponent = /*#__PURE__*/function () {
        function JobCategoryComponent() {
          _classCallCheck(this, JobCategoryComponent);
        }

        _createClass(JobCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return JobCategoryComponent;
      }();

      JobCategoryComponent.ɵfac = function JobCategoryComponent_Factory(t) {
        return new (t || JobCategoryComponent)();
      };

      JobCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: JobCategoryComponent,
        selectors: [["app-job-category"]],
        decls: 1,
        vars: 0,
        template: function JobCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvYiBjYXRlZ29yeS9qb2ItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-job-category',
            templateUrl: './job-category.component.html',
            styleUrls: ['./job-category.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gKt1":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/job category/update-job-category/update-job-category.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: UpdateJobCategoryComponent */

    /***/
    function gKt1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateJobCategoryComponent", function () {
        return UpdateJobCategoryComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../jobCategory-service/jobCategory-api.service */
      "VFOk");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UpdateJobCategoryComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);

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

      function UpdateJobCategoryComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

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

      function UpdateJobCategoryComponent_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r3.message, " ");
        }
      }

      function UpdateJobCategoryComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateJobCategoryComponent_div_18_div_1_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.jobForm.get("categoryName").hasError(validation_r3.type) && (ctx_r2.jobForm.get("categoryName").dirty || ctx_r2.jobForm.get("categoryName").touched));
        }
      }

      var UpdateJobCategoryComponent = /*#__PURE__*/function () {
        function UpdateJobCategoryComponent(fb, router, ngZone, route, api, util) {
          var _this3 = this;

          _classCallCheck(this, UpdateJobCategoryComponent);

          this.fb = fb;
          this.router = router;
          this.ngZone = ngZone;
          this.route = route;
          this.api = api;
          this.util = util;
          this.successMessage = false;
          this.errorMsg = false; // leaveData: Object[] = [];
          // leaveFormData: Object;

          this.leaveData = [];
          this.validationMessage = {
            'categoryName': [{
              type: 'required',
              message: 'Category Name is required'
            }]
          };
          this.jobCategoryId = this.route.snapshot.paramMap.get("jobCategoryId");
          this.util.moduleExists(this.jobCategoryId, 'JobCategory').subscribe(function (data) {
            if (data.status === 'success') {
              if (!data.data) {
                _this3.router.navigateByUrl('/pages/job-category/list-job-category');
              }
            }
          });
        }

        _createClass(UpdateJobCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyDataValidate();
            this.getExistingData();
            this.permissionInfo = this.util.permissionRoleInfo;

            if (this.permissionInfo.search('Edit JobCategory') === -1) {
              this.jobForm.disable();
            }
          }
        }, {
          key: "getExistingData",
          value: function getExistingData() {
            var _this4 = this;

            this.api.jobCategoryDetails(this.jobCategoryId).subscribe(function (data) {
              _this4.leaveFormData = data.data;
              _this4.jobForm = _this4.fb.group({
                categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this4.leaveFormData.categoryName),
                isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this4.leaveFormData.isActive)
              });
            });
          }
        }, {
          key: "companyDataValidate",
          value: function companyDataValidate() {
            try {
              this.jobForm = this.fb.group({
                categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "updateJobForm",
          value: function updateJobForm() {
            var _this5 = this;

            try {
              var cleanJobPofileUpdateForm = this.util.cleanFormLevelOne(this.jobForm);

              if (this.jobForm.value) {
                this.api.updateJobCategory(cleanJobPofileUpdateForm.value, this.jobCategoryId).subscribe(function (data) {
                  if (data.status === 'success' || data.status === 200) {
                    _this5.successMessage = true;
                    _this5.errorMsg = false;
                    _this5.successMsg = data.message;
                    setTimeout(function () {
                      _this5.handleErrors();

                      _this5.ngZone.run(function () {
                        return _this5.router.navigateByUrl('/pages/job-category/list-job-category');
                      });
                    }, 2000);
                  } else if (data.status == "error") {
                    _this5.errorMsg = true;
                    _this5.successMessage = false;
                    _this5.errMsg = data.message;
                    setTimeout(function () {
                      _this5.handleErrors();
                    }, 3000);
                  }
                });
              }
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "handleErrors",
          value: function handleErrors() {
            this.errorMsg = false;
            this.successMessage = false;
            this.errMsg = '';
            this.successMsg = '';
          }
        }]);

        return UpdateJobCategoryComponent;
      }();

      UpdateJobCategoryComponent.ɵfac = function UpdateJobCategoryComponent_Factory(t) {
        return new (t || UpdateJobCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_3__["JobCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      UpdateJobCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateJobCategoryComponent,
        selectors: [["app-update-job-category"]],
        decls: 31,
        vars: 5,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "CategoryName", "placeholder", "Enter Category Name", "formControlName", "categoryName", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "formControlName", "isActive"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "submit", "routerLink", "../../list-job-category", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"]],
        template: function UpdateJobCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Job Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateJobCategoryComponent_p_6_Template, 3, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateJobCategoryComponent_p_8_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateJobCategoryComponent_Template_form_ngSubmit_9_listener() {
              return ctx.updateJobForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Category Name:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UpdateJobCategoryComponent_div_18_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Is Active: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.jobForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.categoryName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.jobForm.invalid || ctx.permissionInfo.search("Edit JobCategory") === -1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateJobCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-job-category',
            templateUrl: 'update-job-category.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_3__["JobCategoryApiService"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lkcj":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/job category/add-job-category/add-job-category.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: AddJobCategoryComponent */

    /***/
    function lkcj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddJobCategoryComponent", function () {
        return AddJobCategoryComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../jobCategory-service/jobCategory-api.service */
      "VFOk");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddJobCategoryComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);

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

      function AddJobCategoryComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

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

      function AddJobCategoryComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r3.message, " ");
        }
      }

      function AddJobCategoryComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddJobCategoryComponent_div_19_div_1_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.jobForm.get("categoryName").hasError(validation_r3.type) && (ctx_r2.jobForm.get("categoryName").dirty || ctx_r2.jobForm.get("categoryName").touched));
        }
      }

      var AddJobCategoryComponent = /*#__PURE__*/function () {
        function AddJobCategoryComponent(fb, ngZone, router, api, util) {
          _classCallCheck(this, AddJobCategoryComponent);

          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.api = api;
          this.util = util;
          this.successMessage = false;
          this.errorMsg = false;
          this.companyName = [];
          this.validationMessage = {
            'categoryName': [{
              type: 'required',
              message: 'Category Name is Required'
            }]
          };
          this.isListAvaliable();
        }

        _createClass(AddJobCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyDataValidate();
            this.permissionInfo = this.util.permissionRoleInfo;

            if (this.permissionInfo.search('Create JobCategory') === -1) {
              this.jobForm.disable();
            }
          }
        }, {
          key: "companyDataValidate",
          value: function companyDataValidate() {
            try {
              this.jobForm = this.fb.group({
                categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "jobFormData",
          value: function jobFormData() {
            var _this6 = this;

            try {
              var cleanJobCategoryForm = this.util.cleanFormLevelOne(this.jobForm);

              if (this.jobForm.value) {
                this.api.addJobCategoy(cleanJobCategoryForm.value).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this6.successMessage = true;
                    _this6.errorMsg = false;
                    _this6.successMsg = data.message;
                    setTimeout(function () {
                      _this6.handleErrors();

                      _this6.ngZone.run(function () {
                        return _this6.router.navigateByUrl('/pages/job-category/list-job-category');
                      });
                    }, 2000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this6.errorMsg = true;
                    _this6.successMessage = false;
                    _this6.errMsg = data.message;
                    setTimeout(function () {
                      _this6.handleErrors();
                    }, 3000);
                  }
                });
              }
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "handleErrors",
          value: function handleErrors() {
            this.errorMsg = false;
            this.successMessage = false;
            this.errMsg = '';
            this.successMsg = '';
          }
        }, {
          key: "isListAvaliable",
          value: function isListAvaliable() {
            var _this7 = this;

            try {
              this.api.getJobCategoryData().subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.jobCategory.length > 0 && _this7.util.jobCategoryStatus !== 1) {
                    _this7.router.navigateByUrl("/pages/job-category/list-job-category");

                    _this7.util.jobCategoryStatus = 0;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return AddJobCategoryComponent;
      }();

      AddJobCategoryComponent.ɵfac = function AddJobCategoryComponent_Factory(t) {
        return new (t || AddJobCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_3__["JobCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      AddJobCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddJobCategoryComponent,
        selectors: [["app-add-job-category"]],
        decls: 32,
        vars: 5,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "CategoryName", "placeholder", "Enter Category Name", "formControlName", "categoryName", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "checkbox", "formControlName", "isActive"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "routerLink", "../list-job-category", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"]],
        template: function AddJobCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Job Category Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddJobCategoryComponent_p_6_Template, 3, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddJobCategoryComponent_p_8_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddJobCategoryComponent_Template_form_ngSubmit_9_listener() {
              return ctx.jobFormData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Category Name:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddJobCategoryComponent_div_19_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Is Active: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.jobForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.categoryName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.jobForm.invalid || ctx.permissionInfo.search("Create JobCategory") === -1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddJobCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-job-category',
            templateUrl: './add-job-category.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_3__["JobCategoryApiService"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "pkwT":
    /*!***********************************************************!*\
      !*** ./src/app/pages/job category/job-category.module.ts ***!
      \***********************************************************/

    /*! exports provided: JobCategoryModule */

    /***/
    function pkwT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobCategoryModule", function () {
        return JobCategoryModule;
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


      var _job_category_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-category-routing.module */
      "Lo0G");
      /* harmony import */


      var _job_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./job-category.component */
      "d4I6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_job_category_list_job_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-job-category/list-job-category.component */
      "6Ky3");
      /* harmony import */


      var _add_job_category_add_job_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-job-category/add-job-category.component */
      "lkcj");
      /* harmony import */


      var _update_job_category_update_job_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./update-job-category/update-job-category.component */
      "gKt1");

      var JobCategoryModule = function JobCategoryModule() {
        _classCallCheck(this, JobCategoryModule);
      };

      JobCategoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: JobCategoryModule
      });
      JobCategoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function JobCategoryModule_Factory(t) {
          return new (t || JobCategoryModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _job_category_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobCategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobCategoryModule, {
          declarations: [_job_category_component__WEBPACK_IMPORTED_MODULE_3__["JobCategoryComponent"], _list_job_category_list_job_category_component__WEBPACK_IMPORTED_MODULE_6__["ListJobCategoryComponent"], _add_job_category_add_job_category_component__WEBPACK_IMPORTED_MODULE_7__["AddJobCategoryComponent"], _update_job_category_update_job_category_component__WEBPACK_IMPORTED_MODULE_8__["UpdateJobCategoryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _job_category_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobCategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobCategoryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_job_category_component__WEBPACK_IMPORTED_MODULE_3__["JobCategoryComponent"], _list_job_category_list_job_category_component__WEBPACK_IMPORTED_MODULE_6__["ListJobCategoryComponent"], _add_job_category_add_job_category_component__WEBPACK_IMPORTED_MODULE_7__["AddJobCategoryComponent"], _update_job_category_update_job_category_component__WEBPACK_IMPORTED_MODULE_8__["UpdateJobCategoryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _job_category_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobCategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=job-category-job-category-module-es5.js.map