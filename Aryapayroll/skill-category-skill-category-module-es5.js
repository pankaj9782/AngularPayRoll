(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skill-category-skill-category-module"], {
    /***/
    "FtYb":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/skill-category/skill-category-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SkillCategoryRoutingModule */

    /***/
    function FtYb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillCategoryRoutingModule", function () {
        return SkillCategoryRoutingModule;
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


      var _skill_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./skill-category.component */
      "aoRq");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _list_skill_category_list_skill_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-skill-category/list-skill-category.component */
      "m8ZL");
      /* harmony import */


      var _add_skill_category_add_skill_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-skill-category/add-skill-category.component */
      "dL4K");
      /* harmony import */


      var _update_skill_category_update_skill_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./update-skill-category/update-skill-category.component */
      "hMJN");

      var route = [{
        path: '',
        component: _skill_category_component__WEBPACK_IMPORTED_MODULE_3__["SkillCategoryComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'list-skill-category',
          component: _list_skill_category_list_skill_category_component__WEBPACK_IMPORTED_MODULE_5__["ListSkillCategoryComponent"]
        }, {
          path: 'add-skill-category',
          component: _add_skill_category_add_skill_category_component__WEBPACK_IMPORTED_MODULE_6__["AddSkillCategoryComponent"]
        }, {
          path: 'update-skill-category/:categoryId',
          component: _update_skill_category_update_skill_category_component__WEBPACK_IMPORTED_MODULE_7__["UpdateSkillCategoryComponent"]
        }, {
          path: '',
          redirectTo: 'list-skill-category',
          pathMatch: 'full'
        }]
      }];

      var SkillCategoryRoutingModule = function SkillCategoryRoutingModule() {
        _classCallCheck(this, SkillCategoryRoutingModule);
      };

      SkillCategoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SkillCategoryRoutingModule
      });
      SkillCategoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SkillCategoryRoutingModule_Factory(t) {
          return new (t || SkillCategoryRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkillCategoryRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillCategoryRoutingModule, [{
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
    "Fufc":
    /*!***************************************************************!*\
      !*** ./src/app/pages/skill-category/skill-category.module.ts ***!
      \***************************************************************/

    /*! exports provided: SkillCategoryModule */

    /***/
    function Fufc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillCategoryModule", function () {
        return SkillCategoryModule;
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


      var _skill_category_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./skill-category-routing.module */
      "FtYb");
      /* harmony import */


      var _skill_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./skill-category.component */
      "aoRq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_skill_category_list_skill_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-skill-category/list-skill-category.component */
      "m8ZL");
      /* harmony import */


      var _add_skill_category_add_skill_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-skill-category/add-skill-category.component */
      "dL4K");
      /* harmony import */


      var _update_skill_category_update_skill_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./update-skill-category/update-skill-category.component */
      "hMJN");

      var SkillCategoryModule = function SkillCategoryModule() {
        _classCallCheck(this, SkillCategoryModule);
      };

      SkillCategoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SkillCategoryModule
      });
      SkillCategoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SkillCategoryModule_Factory(t) {
          return new (t || SkillCategoryModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _skill_category_routing_module__WEBPACK_IMPORTED_MODULE_2__["SkillCategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkillCategoryModule, {
          declarations: [_skill_category_component__WEBPACK_IMPORTED_MODULE_3__["SkillCategoryComponent"], _list_skill_category_list_skill_category_component__WEBPACK_IMPORTED_MODULE_6__["ListSkillCategoryComponent"], _add_skill_category_add_skill_category_component__WEBPACK_IMPORTED_MODULE_7__["AddSkillCategoryComponent"], _update_skill_category_update_skill_category_component__WEBPACK_IMPORTED_MODULE_8__["UpdateSkillCategoryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _skill_category_routing_module__WEBPACK_IMPORTED_MODULE_2__["SkillCategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillCategoryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_skill_category_component__WEBPACK_IMPORTED_MODULE_3__["SkillCategoryComponent"], _list_skill_category_list_skill_category_component__WEBPACK_IMPORTED_MODULE_6__["ListSkillCategoryComponent"], _add_skill_category_add_skill_category_component__WEBPACK_IMPORTED_MODULE_7__["AddSkillCategoryComponent"], _update_skill_category_update_skill_category_component__WEBPACK_IMPORTED_MODULE_8__["UpdateSkillCategoryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _skill_category_routing_module__WEBPACK_IMPORTED_MODULE_2__["SkillCategoryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aoRq":
    /*!******************************************************************!*\
      !*** ./src/app/pages/skill-category/skill-category.component.ts ***!
      \******************************************************************/

    /*! exports provided: SkillCategoryComponent */

    /***/
    function aoRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillCategoryComponent", function () {
        return SkillCategoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SkillCategoryComponent = /*#__PURE__*/function () {
        function SkillCategoryComponent() {
          _classCallCheck(this, SkillCategoryComponent);
        }

        _createClass(SkillCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillCategoryComponent;
      }();

      SkillCategoryComponent.ɵfac = function SkillCategoryComponent_Factory(t) {
        return new (t || SkillCategoryComponent)();
      };

      SkillCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillCategoryComponent,
        selectors: [["app-skill-category"]],
        decls: 1,
        vars: 0,
        template: function SkillCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NraWxsLWNhdGVnb3J5L3NraWxsLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skill-category',
            templateUrl: './skill-category.component.html',
            styleUrls: ['./skill-category.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dL4K":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/skill-category/add-skill-category/add-skill-category.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: AddSkillCategoryComponent */

    /***/
    function dL4K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSkillCategoryComponent", function () {
        return AddSkillCategoryComponent;
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


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../skillCategory-service/skillCategory-api.service */
      "fuoZ");
      /* harmony import */


      var _job_category_jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../job category/jobCategory-service/jobCategory-api.service */
      "VFOk");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddSkillCategoryComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);

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

      function AddSkillCategoryComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);

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

      function AddSkillCategoryComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", list_r5._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r5.categoryName, " ");
        }
      }

      function AddSkillCategoryComponent_div_23_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r6.message, " ");
        }
      }

      function AddSkillCategoryComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSkillCategoryComponent_div_23_div_1_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r6 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.skillForm.get("categoryId").hasError(validation_r6.type) && (ctx_r3.skillForm.get("categoryId").dirty || ctx_r3.skillForm.get("categoryId").touched));
        }
      }

      function AddSkillCategoryComponent_div_33_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r9.message, " ");
        }
      }

      function AddSkillCategoryComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSkillCategoryComponent_div_33_div_1_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r9 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.skillForm.get("skillName").hasError(validation_r9.type) && (ctx_r4.skillForm.get("skillName").dirty || ctx_r4.skillForm.get("skillName").touched));
        }
      }

      var AddSkillCategoryComponent = /*#__PURE__*/function () {
        function AddSkillCategoryComponent(_api, fb, ngZone, router, api, apiService, util) {
          _classCallCheck(this, AddSkillCategoryComponent);

          this._api = _api;
          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.api = api;
          this.apiService = apiService;
          this.util = util;
          this.successMsg = String;
          this.successMessage = false;
          this.errMsg = String;
          this.errorMsg = false;
          this.companyListData = [];
          this.companyName = [];
          this.demo = ['Akshay'];
          this.validationMessage = {
            'skillName': [{
              type: 'required',
              message: 'Skill Name is required'
            }],
            'categoryId': [{
              type: 'required',
              message: 'Category Name is required'
            }]
          };
          this.isListAvaliable();
        }

        _createClass(AddSkillCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategoryList();
            this.companyDataValidate();
            this.permissionInfo = this.util.permissionRoleInfo;

            if (this.permissionInfo.search('Create SkillCategory') === -1) {
              this.skillForm.disable();
            }
          }
        }, {
          key: "companyDataValidate",
          value: function companyDataValidate() {
            try {
              this.skillForm = this.fb.group({
                skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "companyValue",
          value: function companyValue() {
            var _this = this;

            this._api.getListData().subscribe(function (data) {
              if (data.status == 'success' || data.status == 200) {
                _this.companyNameStore = data.company;
              }
            });
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var _this2 = this;

            try {
              this.apiService.getJobCategoryData().subscribe(function (data) {
                _this2.categoryList = data.jobCategory;
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "onChangeCompany",
          value: function onChangeCompany(value) {
            this.companyId = value;
          }
        }, {
          key: "skillData",
          value: function skillData() {
            var _this3 = this;

            try {
              var cleanSkillCategoryForm = this.util.cleanFormLevelOne(this.skillForm);

              if (this.skillForm.value) {
                this.api.addSkillCategoy(cleanSkillCategoryForm.value).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this3.successMessage = true;
                    _this3.errorMsg = false;
                    _this3.successMsg = data.message;
                    setTimeout(function () {
                      _this3.handleErrors();

                      _this3.ngZone.run(function () {
                        return _this3.router.navigateByUrl('/pages/skill-category/list-skill-category');
                      });
                    }, 2000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this3.errorMsg = true;
                    _this3.successMessage = false;
                    _this3.errMsg = data.message;
                    setTimeout(function () {
                      _this3.handleErrors();
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
            var _this4 = this;

            try {
              this.api.skillCategoryData().subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.skillCategory.length > 0 && _this4.util.skillCategoryStatus !== 1) {
                    _this4.router.navigateByUrl("/pages/skill-category/list-skill-category");

                    _this4.util.skillCategoryStatus = 0;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return AddSkillCategoryComponent;
      }();

      AddSkillCategoryComponent.ɵfac = function AddSkillCategoryComponent_Factory(t) {
        return new (t || AddSkillCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_4__["skillCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_job_category_jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_5__["JobCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]));
      };

      AddSkillCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddSkillCategoryComponent,
        selectors: [["app-add-skill-category"]],
        decls: 40,
        vars: 7,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["Name", "category", "formControlName", "categoryId", 1, "dropdown", "dropdown-toggle", "form-control"], ["ng-selected", "true", "value", "", "disabled", ""], ["class", "dropdown-item", 3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "sName", "placeholder", "Enter Skill Name", "formControlName", "skillName", "required", "", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "routerLink", "../list-skill-category", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "dropdown-item", 3, "ngValue"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"]],
        template: function AddSkillCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skill Category Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddSkillCategoryComponent_p_6_Template, 3, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddSkillCategoryComponent_p_8_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddSkillCategoryComponent_Template_form_ngSubmit_9_listener() {
              return ctx.skillData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "----- Select Category Name ------");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddSkillCategoryComponent_option_22_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddSkillCategoryComponent_div_23_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Skill Name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddSkillCategoryComponent_div_33_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.skillForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.categoryId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.skillName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.skillForm.invalid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSkillCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-skill-category',
            templateUrl: './add-skill-category.component.html'
          }]
        }], function () {
          return [{
            type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_4__["skillCategoryApiService"]
          }, {
            type: _job_category_jobCategory_service_jobCategory_api_service__WEBPACK_IMPORTED_MODULE_5__["JobCategoryApiService"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hMJN":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/skill-category/update-skill-category/update-skill-category.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: UpdateSkillCategoryComponent */

    /***/
    function hMJN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateSkillCategoryComponent", function () {
        return UpdateSkillCategoryComponent;
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


      var _skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../skillCategory-service/skillCategory-api.service */
      "fuoZ");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UpdateSkillCategoryComponent_p_6_Template(rf, ctx) {
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

      function UpdateSkillCategoryComponent_p_8_Template(rf, ctx) {
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

      function UpdateSkillCategoryComponent_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](validation_r3.message);
        }
      }

      function UpdateSkillCategoryComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateSkillCategoryComponent_div_18_div_1_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.skillForm.get("skillName").hasError(validation_r3.type) && (ctx_r2.skillForm.get("skillName").dirty || ctx_r2.skillForm.get("skillName").touched));
        }
      }

      var UpdateSkillCategoryComponent = /*#__PURE__*/function () {
        function UpdateSkillCategoryComponent(fb, router, ngZone, route, api, util) {
          var _this5 = this;

          _classCallCheck(this, UpdateSkillCategoryComponent);

          this.fb = fb;
          this.router = router;
          this.ngZone = ngZone;
          this.route = route;
          this.api = api;
          this.util = util;
          this.successMsg = String;
          this.successMessage = false;
          this.errMsg = String;
          this.errorMsg = false;
          this.companyNameStore = [];
          this.companyName = [];
          this.leaveData = [];
          this.leaveFormData = [];
          this.validationMessage = {
            'skillName': [{
              type: 'required',
              message: 'Skill Name is Required'
            }]
          };
          this.skillCategoryId = this.route.snapshot.paramMap.get("categoryId");
          this.util.moduleExists(this.skillCategoryId, 'SkillCategory').subscribe(function (data) {
            if (data.status === 'success') {
              if (!data.data) {
                _this5.router.navigateByUrl('/pages/skill-category/list-skill-category');
              }
            }
          });
        }

        _createClass(UpdateSkillCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyDataValidate();
            this.existingData();
            this.permissionInfo = this.util.permissionRoleInfo;

            if (this.permissionInfo.search('Edit SkillCategory') === -1) {
              this.skillForm.disable();
            }
          }
        }, {
          key: "existingData",
          value: function existingData() {
            var _this6 = this;

            this.api.skillCategoryDetails(this.skillCategoryId).subscribe(function (data) {
              _this6.existinglist = data;
              _this6.skillForm = _this6.fb.group({
                skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this6.existinglist.data.skillName)
              });
            });
          }
        }, {
          key: "companyDataValidate",
          value: function companyDataValidate() {
            try {
              this.skillForm = this.fb.group({
                skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "skillDataUpdate",
          value: function skillDataUpdate() {
            var _this7 = this;

            try {
              var cleanSkillCategoryUpdateForm = this.util.cleanFormLevelOne(this.skillForm);

              if (this.skillForm.value) {
                this.api.updateSkillCategory(cleanSkillCategoryUpdateForm.value, this.skillCategoryId).subscribe(function (data) {
                  if (data.status === 'success' || data.status === 200) {
                    _this7.successMessage = true;
                    _this7.errorMsg = false;
                    _this7.successMsg = data.message;
                    setTimeout(function () {
                      _this7.handleErrors();

                      _this7.ngZone.run(function () {
                        return _this7.router.navigateByUrl('/pages/skill-category/list-skill-category');
                      });
                    }, 2000);
                  } else if (data.status == "error") {
                    _this7.errorMsg = true;
                    _this7.successMessage = false;
                    _this7.errMsg = data.message;
                    setTimeout(function () {
                      _this7.handleErrors();
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

        return UpdateSkillCategoryComponent;
      }();

      UpdateSkillCategoryComponent.ɵfac = function UpdateSkillCategoryComponent_Factory(t) {
        return new (t || UpdateSkillCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_3__["skillCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      UpdateSkillCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateSkillCategoryComponent,
        selectors: [["app-update-skill-category"]],
        decls: 25,
        vars: 5,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "sName", "placeholder", "Enter Skill Name", "formControlName", "skillName", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "routerLink", "../../list-skill-category", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"]],
        template: function UpdateSkillCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Skill Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateSkillCategoryComponent_p_6_Template, 3, 1, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateSkillCategoryComponent_p_8_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateSkillCategoryComponent_Template_form_ngSubmit_9_listener() {
              return ctx.skillDataUpdate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skill Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UpdateSkillCategoryComponent_div_18_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.skillForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.skillName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.skillForm.invalid || ctx.permissionInfo.search("Edit SkillCategory") === -1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateSkillCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-skill-category',
            templateUrl: 'update-skill-category.component.html'
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
            type: _skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_3__["skillCategoryApiService"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "m8ZL":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/skill-category/list-skill-category/list-skill-category.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: ListSkillCategoryComponent */

    /***/
    function m8ZL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSkillCategoryComponent", function () {
        return ListSkillCategoryComponent;
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


      var _skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../skillCategory-service/skillCategory-api.service */
      "fuoZ");
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

      function ListSkillCategoryComponent_tbody_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListSkillCategoryComponent_tbody_14_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var list_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.showConfirmationMessage(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.skillName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.permissionInfo.search("Edit SkillCategory") === -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/skill-category/update-skill-category/", list_r1 == null ? null : list_r1._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.permissionInfo.search("Delete SkillCategory") === -1);
        }
      }

      var ListSkillCategoryComponent = /*#__PURE__*/function () {
        function ListSkillCategoryComponent(api, route, _Activatedroute, util) {
          _classCallCheck(this, ListSkillCategoryComponent);

          this.api = api;
          this.route = route;
          this._Activatedroute = _Activatedroute;
          this.util = util;
          this.showCard = {}; // leaveListData: Object;

          this.leaveListData = [];
          this.companyShowData = [];
        }

        _createClass(ListSkillCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.leaveList();
            this.permissionInfo = this.util.permissionRoleInfo;
          }
        }, {
          key: "leaveList",
          value: function leaveList() {
            var _this8 = this;

            try {
              this.api.skillCategoryData().subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this8.leaveListData = data.skillCategory;
                  var len = _this8.leaveListData.length;

                  if (len == 0) {
                    _this8.route.navigateByUrl("/pages/skill-category/add-skill-category");
                  }
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "showConfirmationMessage",
          value: function showConfirmationMessage(skillCategoryId) {
            var _this9 = this;

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
                _this9.api.removeData(skillCategoryId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                    _this9.leaveList();
                  }
                });
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
              }
            });
          }
        }, {
          key: "addSkillCategory",
          value: function addSkillCategory() {
            try {
              this.util.skillCategoryStatus = 1;
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return ListSkillCategoryComponent;
      }();

      ListSkillCategoryComponent.ɵfac = function ListSkillCategoryComponent_Factory(t) {
        return new (t || ListSkillCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_2__["skillCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      ListSkillCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListSkillCategoryComponent,
        selectors: [["app-list-skill-category"]],
        decls: 15,
        vars: 2,
        consts: [[1, "card"], [1, "card-header", 2, "text-align", "center"], ["type", "button", "routerLink", "/pages/skill-category/add-skill-category", 1, "btn", "btn-primary", 2, "float", "right", 3, "disabled", "click"], [1, "fa", "fa-plus-square"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"]],
        template: function ListSkillCategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skill Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListSkillCategoryComponent_Template_button_click_4_listener() {
              return ctx.addSkillCategory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0 Add skill Category");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " S.No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Skill Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListSkillCategoryComponent_tbody_14_Template, 13, 6, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.permissionInfo.search("Create SkillCategory") === -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leaveListData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListSkillCategoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-skill-category',
            templateUrl: './list-skill-category.component.html'
          }]
        }], function () {
          return [{
            type: _skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_2__["skillCategoryApiService"]
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

    }
  }]);
})();
//# sourceMappingURL=skill-category-skill-category-module-es5.js.map