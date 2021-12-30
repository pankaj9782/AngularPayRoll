(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branches-branches-module"], {
    /***/
    "+Jxb":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/branches/branch-service/branch.service.ts ***!
      \*****************************************************************/

    /*! exports provided: BranchService */

    /***/
    function Jxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchService", function () {
        return BranchService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var BranchService = /*#__PURE__*/function () {
        function BranchService(http) {
          _classCallCheck(this, BranchService);

          this.http = http;
          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        } //Method For submit branch form data to the server


        _createClass(BranchService, [{
          key: "submitBranchFormData",
          value: function submitBranchFormData(data, companyParentId, countryName, stateName) {
            try {
              data.countryName = countryName;
              data.countryState = stateName;
              var apiUrl = "".concat(this.endpoint, "/company/add-branch/").concat(companyParentId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for get branch list Data

        }, {
          key: "getBranchListData",
          value: function getBranchListData() {
            try {
              var companyParentId = sessionStorage.getItem("companyId");
              var apiUrl = "".concat(this.endpoint, "/company/branch-list/").concat(companyParentId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for Individual Branch Details

        }, {
          key: "getBranchDetails",
          value: function getBranchDetails(branchId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/company/branch-details/").concat(branchId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for submit updated branch data

        }, {
          key: "submitUpdatedData",
          value: function submitUpdatedData(data, branchId) {
            try {
              var companyParentId = sessionStorage.getItem("companyId");
              var apiUrl = "".concat(this.endpoint, "/company/update-branch/").concat(companyParentId, "/").concat(branchId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
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
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err);
            }
          } //Method for delete branch

        }, {
          key: "removeData",
          value: function removeData(branchId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/company/delete-branch/").concat(branchId);
              return this.http["delete"](apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } //Method for add department

        }, {
          key: "submitDepartmentData",
          value: function submitDepartmentData(data, branchId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/branch/add-department/").concat(branchId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } //Method for add department

        }, {
          key: "updateDepartmentData",
          value: function updateDepartmentData(data, branchId, departmentId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/branch/update-department/").concat(branchId, "/").concat(departmentId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          } //Method for get department list

        }, {
          key: "getDepartmentData",
          value: function getDepartmentData(branchId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/branch/list-department/").concat(branchId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } //Method for remove department

        }, {
          key: "removeDepartmentData",
          value: function removeDepartmentData(departmentId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/branch/delete-department/").concat(departmentId);
              return this.http["delete"](apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err.message);
            }
          }
        }]);

        return BranchService;
      }();

      BranchService.ɵfac = function BranchService_Factory(t) {
        return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BranchService,
        factory: BranchService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchService, [{
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
    "E8D2":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/branches/department/add-department/add-department.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: AddDepartmentComponent */

    /***/
    function E8D2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddDepartmentComponent", function () {
        return AddDepartmentComponent;
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


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../branch-service/branch.service */
      "+Jxb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddDepartmentComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);

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

      function AddDepartmentComponent_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

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

      function AddDepartmentComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r3.message, " ");
        }
      }

      function AddDepartmentComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddDepartmentComponent_div_20_div_1_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.departmentForm.get("title").hasError(validation_r3.type) && (ctx_r2.departmentForm.get("title").dirty || ctx_r2.departmentForm.get("title").touched));
        }
      }

      var AddDepartmentComponent = /*#__PURE__*/function () {
        function AddDepartmentComponent(route, api, fb, ngZone, router) {
          _classCallCheck(this, AddDepartmentComponent);

          this.route = route;
          this.api = api;
          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.successMessage = false;
          this.errorMsg = false; // For show error message

          this.validationMessage = {
            'title': [{
              type: 'required',
              message: 'Title is required'
            }]
          };
        }

        _createClass(AddDepartmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.snapshotParam = this.route.snapshot.paramMap.get("branchId");
            this.departmentValidation();
          } //Method for form validation

        }, {
          key: "departmentValidation",
          value: function departmentValidation() {
            try {
              this.departmentForm = this.fb.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
              });
            } catch (err) {
              console.log(err.message);
            }
          } //Method for submit form data

        }, {
          key: "departmentFormData",
          value: function departmentFormData() {
            var _this = this;

            try {
              if (this.departmentForm.valid) {
                this.api.submitDepartmentData(this.departmentForm.value, this.snapshotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this.successMessage = true;
                    setTimeout(function () {
                      _this.ngZone.run(function () {
                        _this.router.navigateByUrl("/pages/branches/show-departments/".concat(_this.snapshotParam));
                      });
                    }, 1000);
                    _this.errorMsg = false;
                    _this.successMsg = data.message;
                  } else if (data.status === "error" || data.status === 404) {
                    _this.errorMsg = true;
                    _this.successMessage = false;
                    _this.errMsg = data.message;
                  }
                });
              }
            } catch (err) {
              console.log(err.message);
            }
          }
        }]);

        return AddDepartmentComponent;
      }();

      AddDepartmentComponent.ɵfac = function AddDepartmentComponent_Factory(t) {
        return new (t || AddDepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AddDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddDepartmentComponent,
        selectors: [["app-add-department"]],
        decls: 31,
        vars: 6,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title"], [1, "btn", "btn-primary", "btn-circle", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-arrow-right"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "inputTitle", "placeholder", "Enter Department Name", "formControlName", "title", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "inputDescription", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"]],
        template: function AddDepartmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Department Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddDepartmentComponent_p_8_Template, 3, 1, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddDepartmentComponent_p_10_Template, 3, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddDepartmentComponent_Template_form_ngSubmit_11_listener() {
              return ctx.departmentFormData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddDepartmentComponent_div_20_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../show-departments/", ctx.snapshotParam, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.departmentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.departmentForm.invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmNoZXMvZGVwYXJ0bWVudC9hZGQtZGVwYXJ0bWVudC9hZGQtZGVwYXJ0bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9icmFuY2hlcy9kZXBhcnRtZW50L2FkZC1kZXBhcnRtZW50L2FkZC1kZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddDepartmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-department',
            templateUrl: './add-department.component.html',
            styleUrls: ['./add-department.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FDay":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/branches/show-branches/show-branches.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ShowBranchesComponent */

    /***/
    function FDay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowBranchesComponent", function () {
        return ShowBranchesComponent;
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


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../branch-service/branch.service */
      "+Jxb");
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

      function ShowBranchesComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowBranchesComponent_li_9_Template_b_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var list_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.showData(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowBranchesComponent_li_9_Template_i_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var list_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.showData(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Official Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fax:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Bank Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Account No:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Country Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Taxation No:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "State Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "PAN No:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Currency:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "BCC Address for all outgoing mails:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowBranchesComponent_li_9_Template_button_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var list_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.showConfirmationMessage(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showBranchCard[list_r1._id]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.officialNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.fax);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.bankName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.bankAccNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.countryName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.taxationNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.countryState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.panNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.outGoingMails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.permissionInfo.search("Edit Branch") === -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../update-branch-data/", list_r1._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.permissionInfo.search("Delete Branch") === -1);
        }
      }

      var ShowBranchesComponent = /*#__PURE__*/function () {
        function ShowBranchesComponent(api, route, ngZone, router, util) {
          _classCallCheck(this, ShowBranchesComponent);

          this.api = api;
          this.route = route;
          this.ngZone = ngZone;
          this.router = router;
          this.util = util; // branchList: any =Object;

          this.branchList = [];
          this.showBranchCard = {};
        }

        _createClass(ShowBranchesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.permissionInfo = this.util.permissionRoleInfo;
            this.showBranchList();
          } //Method for Show branch list

        }, {
          key: "showBranchList",
          value: function showBranchList() {
            var _this2 = this;

            try {
              this.api.getBranchListData().subscribe(function (data) {
                if (data.status === "success" || data.status === 200) {
                  _this2.branchList = data.branch;

                  if (data.branch.length == 0) {
                    _this2.router.navigateByUrl("/pages/branches/add-branch");
                  } else {
                    for (var i = 0; i < _this2.branchList.length; i++) {
                      _this2.showBranchCard[_this2.branchList[i]._id] = true;
                    }
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          } //Method for onclick data show when collapse

        }, {
          key: "showData",
          value: function showData(branchId) {
            try {
              this.showBranchCard["".concat(branchId)] = !this.showBranchCard["".concat(branchId)];
            } catch (err) {
              console.log(err);
            }
          } //Method for remove company branch

        }, {
          key: "showConfirmationMessage",
          value: function showConfirmationMessage(branchId) {
            var _this3 = this;

            try {
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
                  _this3.api.removeData(branchId).subscribe(function (data) {
                    if (data.status === "success" || data.status === 200) {
                      swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                      _this3.ngZone.run(function () {
                        _this3.router.navigateByUrl('/pages/branches/show-branches');
                      });

                      _this3.showBranchList();
                    } else if (data.status === 'error') {
                      swalWithBootstrapButtons.fire('ERROR!', data.message, 'error');
                    }
                  });
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "addBranches",
          value: function addBranches() {
            try {
              this.util.branchesSatus = 1;
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return ShowBranchesComponent;
      }();

      ShowBranchesComponent.ɵfac = function ShowBranchesComponent_Factory(t) {
        return new (t || ShowBranchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      ShowBranchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShowBranchesComponent,
        selectors: [["app-show-branches"]],
        decls: 10,
        vars: 3,
        consts: [[1, "card"], [1, "card-header", 2, "text-align", "center"], ["routerLink", "../add-branch", 1, "btn", "btn-primary", 2, "float", "right", 3, "click"], [1, "fa", "fa-plus-square"], [1, "panel-body"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [2, "cursor", "pointer", 3, "click"], [2, "float", "right"], [1, "dropdown-toggle", 3, "click"], [1, "card", 2, "background-color", "ghostwhite", 3, "hidden"], [1, "table", 2, "margin", "auto"], [1, "btn", "btn-primary", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 2, "float", "right", 3, "disabled", "click"], [1, "fa", "fa-trash"]],
        template: function ShowBranchesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Branches List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowBranchesComponent_Template_a_click_4_listener() {
              return ctx.addBranches();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0 Add Branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShowBranchesComponent_li_9_Template, 87, 19, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.permissionInfo.search("Create Branch") === -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchList);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  overflow: hidden;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px solid #ECF0F1;\n  padding: 10px;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: 1px solid #ECF0F1;\n  border-right: 1px solid #ECF0F1;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #4ECDC4;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%] {\n  background-color: #d9f4f2;\n}\n\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n}\n\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-width: 760px) {\n  p[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n  }\n\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.total-val) {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:first-child {\n    background-color: #d9f4f2;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd)   td[_ngcontent-%COMP%]:first-child {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:not(:first-child) {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 40%;\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    width: 60%;\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: block;\n    cursor: pointer;\n  }\n  table[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-val[_ngcontent-%COMP%] {\n    display: inline-block;\n    transform: translateY(0);\n    width: 75%;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmNoZXMvc2hvdy1icmFuY2hlcy9zaG93LWJyYW5jaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFHO0VBQ0csNkJBQUE7RUFDQSxhQUFBO0FBRU47O0FBQ0k7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FBQ047O0FBRUk7RUFDRSx5QkFBQTtBQUFOOztBQUdJO0VBQ0UseUJBQUE7QUFETjs7QUFLTTtFQUNFLHVCQUFBO0FBSFI7O0FBTU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBSlI7O0FBU0k7RUFDRSxhQUFBO0FBTk47O0FBU0U7RUFDRTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtFQU5KOztFQVdNO0lBQ0UsYUFBQTtFQVJSO0VBV007SUFDRSx5QkFBQTtFQVRSO0VBV007SUFDRSx1QkFBQTtFQVRSO0VBWU07SUFDRSx1QkFBQTtFQVZSO0VBYU07SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQVhSO0VBY007SUFDRSxVQUFBO0lBQ0EsbUNBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQVpSO0VBZU07SUFDRSxtQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQWJSO0VBZ0JNO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUFkUjtFQWlCTTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQWZSO0VBa0JNO0lBQ0UscUJBQUE7SUFDQSx3QkFBQTtJQUNBLFVBQUE7RUFoQlI7QUFDRjs7QUFxQkU7RUFHTTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBckJSO0VBd0JNO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUF0QlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaGVzL3Nob3ctYnJhbmNoZXMvc2hvdy1icmFuY2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuICB0YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgdGQsIHRoe1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQ0YwRjE7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIHRke1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUNGMEYxO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VDRjBGMTtcbiAgICB9XG5cbiAgICB0aHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RUNEQzQ7XG4gICAgfVxuXG4gICAgdHI6bnRoLW9mLXR5cGUoZXZlbikgdGR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCM0RUNEQzQsIDM1JSk7XG4gICAgfVxuXG4gICAgLnRvdGFse1xuICAgICAgdGh7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICB0ZHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICAubW9iaWxlLWhlYWRlcntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xuICAgIHB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIHRhYmxle1xuICAgICAgdHJ7XG4gICAgICAgIHRkOm5vdCg6Zmlyc3QtY2hpbGQpLCB0aDpub3QoOmZpcnN0LWNoaWxkKSwgdGQ6bm90KC50b3RhbC12YWwpe1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOmZpcnN0LWNoaWxke1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzRFQ0RDNCwgMzUlKTtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1vZi10eXBlKG9kZCkgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGg6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTk5OTlweCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTk5OTlweCk7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRvdGFsIHRoe1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQudG90YWwtdmFse1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xuICAgIHRhYmxle1xuICAgICAgdHJ7XG4gICAgICAgIHRoOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowBranchesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-show-branches',
            templateUrl: './show-branches.component.html',
            styleUrls: ['./show-branches.component.scss']
          }]
        }], function () {
          return [{
            type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IbTF":
    /*!***********************************************************!*\
      !*** ./src/app/pages/branches/branches-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: BranchesRoutingModule */

    /***/
    function IbTF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesRoutingModule", function () {
        return BranchesRoutingModule;
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


      var _branches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./branches.component */
      "XxlW");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _add_branches_add_branches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-branches/add-branches.component */
      "dU8S");
      /* harmony import */


      var _show_branches_show_branches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./show-branches/show-branches.component */
      "FDay");
      /* harmony import */


      var _update_branch_data_update_branch_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./update-branch-data/update-branch-data.component */
      "gw9w");
      /* harmony import */


      var _department_show_departments_show_departments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./department/show-departments/show-departments.component */
      "lnLD");
      /* harmony import */


      var _department_update_department_update_department_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./department/update-department/update-department.component */
      "Tq/o"); // import { AddDepartmentComponent } from './department/add-department/add-department.component';


      var routes = [{
        path: '',
        component: _branches_component__WEBPACK_IMPORTED_MODULE_3__["BranchesComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'add-branch',
          component: _add_branches_add_branches_component__WEBPACK_IMPORTED_MODULE_5__["AddBranchesComponent"]
        }, {
          path: 'show-branches',
          component: _show_branches_show_branches_component__WEBPACK_IMPORTED_MODULE_6__["ShowBranchesComponent"]
        }, {
          path: 'update-branch-data/:branchId',
          component: _update_branch_data_update_branch_data_component__WEBPACK_IMPORTED_MODULE_7__["UpdateBranchDataComponent"]
        }, // {
        //   path:'add-department/:branchId',
        //   component:AddDepartmentComponent,
        // },
        {
          path: 'show-departments/:branchId',
          component: _department_show_departments_show_departments_component__WEBPACK_IMPORTED_MODULE_8__["ShowDepartmentsComponent"]
        }, {
          path: 'update-department/:branchId/:departmentId',
          component: _department_update_department_update_department_component__WEBPACK_IMPORTED_MODULE_9__["UpdateDepartmentComponent"]
        }, {
          path: '',
          redirectTo: 'show-branches',
          pathMatch: 'full'
        }]
      }];

      var BranchesRoutingModule = function BranchesRoutingModule() {
        _classCallCheck(this, BranchesRoutingModule);
      };

      BranchesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BranchesRoutingModule
      });
      BranchesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BranchesRoutingModule_Factory(t) {
          return new (t || BranchesRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BranchesRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchesRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TEzN":
    /*!***************************************************!*\
      !*** ./src/app/pages/branches/branches.module.ts ***!
      \***************************************************/

    /*! exports provided: BranchesModule */

    /***/
    function TEzN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesModule", function () {
        return BranchesModule;
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


      var _branches_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./branches-routing.module */
      "IbTF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _branches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./branches.component */
      "XxlW");
      /* harmony import */


      var _add_branches_add_branches_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-branches/add-branches.component */
      "dU8S");
      /* harmony import */


      var _show_branches_show_branches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./show-branches/show-branches.component */
      "FDay");
      /* harmony import */


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./branch-service/branch.service */
      "+Jxb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _update_branch_data_update_branch_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./update-branch-data/update-branch-data.component */
      "gw9w");
      /* harmony import */


      var _department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./department/add-department/add-department.component */
      "E8D2");
      /* harmony import */


      var _department_show_departments_show_departments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./department/show-departments/show-departments.component */
      "lnLD");
      /* harmony import */


      var _department_update_department_update_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./department/update-department/update-department.component */
      "Tq/o");

      var BranchesModule = function BranchesModule() {
        _classCallCheck(this, BranchesModule);
      };

      BranchesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: BranchesModule
      });
      BranchesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function BranchesModule_Factory(t) {
          return new (t || BranchesModule)();
        },
        providers: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _branches_routing_module__WEBPACK_IMPORTED_MODULE_2__["BranchesRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BranchesModule, {
          declarations: [_branches_component__WEBPACK_IMPORTED_MODULE_5__["BranchesComponent"], _add_branches_add_branches_component__WEBPACK_IMPORTED_MODULE_6__["AddBranchesComponent"], _show_branches_show_branches_component__WEBPACK_IMPORTED_MODULE_7__["ShowBranchesComponent"], _update_branch_data_update_branch_data_component__WEBPACK_IMPORTED_MODULE_11__["UpdateBranchDataComponent"], _department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_12__["AddDepartmentComponent"], _department_show_departments_show_departments_component__WEBPACK_IMPORTED_MODULE_13__["ShowDepartmentsComponent"], _department_update_department_update_department_component__WEBPACK_IMPORTED_MODULE_14__["UpdateDepartmentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _branches_routing_module__WEBPACK_IMPORTED_MODULE_2__["BranchesRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_branches_component__WEBPACK_IMPORTED_MODULE_5__["BranchesComponent"], _add_branches_add_branches_component__WEBPACK_IMPORTED_MODULE_6__["AddBranchesComponent"], _show_branches_show_branches_component__WEBPACK_IMPORTED_MODULE_7__["ShowBranchesComponent"], _update_branch_data_update_branch_data_component__WEBPACK_IMPORTED_MODULE_11__["UpdateBranchDataComponent"], _department_add_department_add_department_component__WEBPACK_IMPORTED_MODULE_12__["AddDepartmentComponent"], _department_show_departments_show_departments_component__WEBPACK_IMPORTED_MODULE_13__["ShowDepartmentsComponent"], _department_update_department_update_department_component__WEBPACK_IMPORTED_MODULE_14__["UpdateDepartmentComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _branches_routing_module__WEBPACK_IMPORTED_MODULE_2__["BranchesRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
            providers: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Tq/o":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/branches/department/update-department/update-department.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: UpdateDepartmentComponent */

    /***/
    function TqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateDepartmentComponent", function () {
        return UpdateDepartmentComponent;
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


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../branch-service/branch.service */
      "+Jxb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UpdateDepartmentComponent_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

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

      function UpdateDepartmentComponent_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

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

      function UpdateDepartmentComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateDepartmentComponent_form_11_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.updateDepartmentFormData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.updateDepartmentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.updateDepartmentForm.invalid);
        }
      }

      var UpdateDepartmentComponent = /*#__PURE__*/function () {
        function UpdateDepartmentComponent(route, api, fb, ngZone, router) {
          _classCallCheck(this, UpdateDepartmentComponent);

          this.route = route;
          this.api = api;
          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.successMessage = false;
          this.errorMsg = false;
          this.departmentList = new Array(); // public departmentList: any=[];
          // public departmentData:any =[];

          this.departmentData = new Array();
        }

        _createClass(UpdateDepartmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.snapshotParam = this.route.snapshot.paramMap.get("branchId");
            this.departmentParam = this.route.snapshot.paramMap.get("departmentId");
            this.updateFormValidation();
            this.getExistingData();
          } //Method for form validation

        }, {
          key: "updateFormValidation",
          value: function updateFormValidation() {
            try {
              this.updateDepartmentForm = this.fb.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
              });
            } catch (err) {
              console.log(err.message);
            }
          } //Method for submit form data

        }, {
          key: "updateDepartmentFormData",
          value: function updateDepartmentFormData() {
            var _this4 = this;

            try {
              if (this.updateDepartmentForm.valid) {
                this.api.updateDepartmentData(this.updateDepartmentForm.value, this.snapshotParam, this.departmentParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this4.successMessage = true;
                    setTimeout(function () {
                      _this4.ngZone.run(function () {
                        _this4.router.navigateByUrl("/pages/branches/show-departments/".concat(_this4.snapshotParam));
                      });
                    }, 1000);
                    _this4.errorMsg = false;
                    _this4.successMsg = data.message;
                  } else if (data.status === "error" || data.status === 404) {
                    _this4.errorMsg = true;
                    _this4.successMessage = false;
                    _this4.errMsg = data.message;
                  }
                });
              }
            } catch (err) {
              console.log(err.message);
            }
          } //Method for get existing data show on update form

        }, {
          key: "getExistingData",
          value: function getExistingData() {
            var _this5 = this;

            this.api.getDepartmentData(this.snapshotParam).subscribe(function (data) {
              if (data.status === "success" || data.status === 200) {
                _this5.departmentList = data.department;
                var len = Object.keys(_this5.departmentList).length;

                for (var i = 0; i < len; i++) {
                  if (_this5.departmentList[i]._id === _this5.departmentParam) {
                    _this5.departmentData.push(_this5.departmentList[i]);

                    _this5.updateDepartmentForm = _this5.fb.group({
                      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this5.departmentList[i].title),
                      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this5.departmentList[i].description)
                    });
                  }
                }
              }
            });
          }
        }]);

        return UpdateDepartmentComponent;
      }();

      UpdateDepartmentComponent.ɵfac = function UpdateDepartmentComponent_Factory(t) {
        return new (t || UpdateDepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UpdateDepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateDepartmentComponent,
        selectors: [["app-update-department"]],
        decls: 12,
        vars: 4,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", 2, "text-align", "center"], [1, "btn", "btn-primary", "btn-circle", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-arrow-right"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "form-horizontal", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "inputTitle", "formControlName", "title", 1, "form-control"], ["type", "text", "id", "inputDescription", "formControlName", "description", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]],
        template: function UpdateDepartmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Department Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateDepartmentComponent_p_8_Template, 3, 1, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdateDepartmentComponent_p_10_Template, 3, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UpdateDepartmentComponent_form_11_Template, 19, 2, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../../show-departments/", ctx.snapshotParam, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departmentData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaGVzL2RlcGFydG1lbnQvdXBkYXRlLWRlcGFydG1lbnQvdXBkYXRlLWRlcGFydG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateDepartmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-department',
            templateUrl: './update-department.component.html',
            styleUrls: ['./update-department.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XxlW":
    /*!******************************************************!*\
      !*** ./src/app/pages/branches/branches.component.ts ***!
      \******************************************************/

    /*! exports provided: BranchesComponent */

    /***/
    function XxlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchesComponent", function () {
        return BranchesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BranchesComponent = /*#__PURE__*/function () {
        function BranchesComponent() {
          _classCallCheck(this, BranchesComponent);
        }

        _createClass(BranchesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BranchesComponent;
      }();

      BranchesComponent.ɵfac = function BranchesComponent_Factory(t) {
        return new (t || BranchesComponent)();
      };

      BranchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BranchesComponent,
        selectors: [["app-branches"]],
        decls: 1,
        vars: 0,
        template: function BranchesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaGVzL2JyYW5jaGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-branches',
            templateUrl: './branches.component.html',
            styleUrls: ['./branches.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dU8S":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/branches/add-branches/add-branches.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AddBranchesComponent */

    /***/
    function dU8S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBranchesComponent", function () {
        return AddBranchesComponent;
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


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../branch-service/branch.service */
      "+Jxb");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddBranchesComponent_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errMsg);
        }
      }

      function AddBranchesComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMsg);
        }
      }

      function AddBranchesComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
        }
      }

      function AddBranchesComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_19_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r14 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.branchForm.get("name").hasError(validation_r14.type) && (ctx_r3.branchForm.get("name").dirty || ctx_r3.branchForm.get("name").touched));
        }
      }

      function AddBranchesComponent_div_28_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r17.message, " ");
        }
      }

      function AddBranchesComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_28_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r17 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.branchForm.get("address").hasError(validation_r17.type) && (ctx_r4.branchForm.get("address").dirty || ctx_r4.branchForm.get("address").touched));
        }
      }

      function AddBranchesComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddBranchesComponent_div_40_Template_select_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.stateName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddBranchesComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "----Country Not Selected----");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddBranchesComponent_div_52_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r22.message, " ");
        }
      }

      function AddBranchesComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_52_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r22 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.branchForm.get("email").hasError(validation_r22.type) && (ctx_r7.branchForm.get("email").dirty || ctx_r7.branchForm.get("email").touched));
        }
      }

      function AddBranchesComponent_div_60_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r25.message, " ");
        }
      }

      function AddBranchesComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_60_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r25 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.branchForm.get("outGoingMails").hasError(validation_r25.type) && (ctx_r8.branchForm.get("outGoingMails").dirty || ctx_r8.branchForm.get("outGoingMails").touched));
        }
      }

      function AddBranchesComponent_div_84_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r28.message, " ");
        }
      }

      function AddBranchesComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_84_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r28 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.branchForm.get("bankAccNum").hasError(validation_r28.type) && (ctx_r9.branchForm.get("bankAccNum").dirty || ctx_r9.branchForm.get("bankAccNum").touched));
        }
      }

      function AddBranchesComponent_div_94_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r31.message, " ");
        }
      }

      function AddBranchesComponent_div_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_94_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r31 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.branchForm.get("officialNumber").hasError(validation_r31.type) && (ctx_r10.branchForm.get("officialNumber").dirty || ctx_r10.branchForm.get("officialNumber").touched));
        }
      }

      function AddBranchesComponent_div_103_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r34.message, " ");
        }
      }

      function AddBranchesComponent_div_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_103_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r34 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.branchForm.get("fax").hasError(validation_r34.type) && (ctx_r11.branchForm.get("fax").dirty || ctx_r11.branchForm.get("fax").touched));
        }
      }

      function AddBranchesComponent_div_111_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r37.message, " ");
        }
      }

      function AddBranchesComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_111_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r37 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.branchForm.get("taxationNumber").hasError(validation_r37.type) && (ctx_r12.branchForm.get("taxationNumber").dirty || ctx_r12.branchForm.get("taxationNumber").touched));
        }
      }

      function AddBranchesComponent_div_119_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r40.message, " ");
        }
      }

      function AddBranchesComponent_div_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddBranchesComponent_div_119_div_1_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r40 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.branchForm.get("panNumber").hasError(validation_r40.type) && (ctx_r13.branchForm.get("panNumber").dirty || ctx_r13.branchForm.get("panNumber").touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          display: a0
        };
      };

      var AddBranchesComponent = /*#__PURE__*/function () {
        function AddBranchesComponent(route, api, fb, ngZone, router, util) {
          _classCallCheck(this, AddBranchesComponent);

          this.route = route;
          this.api = api;
          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.util = util;
          this.successMessage = false;
          this.errorMsg = false; //Method for show validdation message

          this.validationMessage = {
            'name': [{
              type: 'required',
              message: 'Name is required'
            }],
            'email': [{
              type: 'required',
              message: 'Email is required'
            }, {
              type: 'pattern',
              message: 'Enter a valid email'
            }],
            'address': [{
              type: 'required',
              message: 'Address is required'
            }],
            'officialNumber': [{
              type: 'required',
              message: 'Number is required'
            }, {
              type: 'minlength',
              message: 'Number too short '
            }, {
              type: 'maxlength',
              message: 'Number is too large'
            }, {
              type: 'pattern',
              message: 'Company Number not valid'
            }],
            'fax': [{
              type: 'minlength',
              message: 'Fax number too short '
            }, {
              type: 'maxlength',
              message: 'Fax no. is too large'
            }, {
              type: 'pattern',
              message: 'Fax Number not valid'
            }],
            'outGoingMails': [{
              type: 'pattern',
              message: 'Invalid Mail'
            }],
            'taxNumber': [{
              type: 'pattern',
              message: 'Invalid Taxation No.'
            }],
            'panNumber': [{
              type: 'pattern',
              message: 'Invalid PAN Number'
            }],
            'bankAccNum': [{
              type: 'maxlength',
              message: 'Account No. limit exceeded'
            }, {
              type: 'pattern',
              message: 'Invalid Account No.'
            }]
          };
          this.isListAvaliable();
        }

        _createClass(AddBranchesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.permissionInfo = this.util.permissionRoleInfo;
            this.branchDataValidate();
            populateCountries("country", "state");
            this.snapshotParam = sessionStorage.getItem("companyId");

            if (this.permissionInfo.search('Create Branch') === -1) {
              this.branchForm.disable();
            }
          } //Method for Validation

        }, {
          key: "branchDataValidate",
          value: function branchDataValidate() {
            try {
              this.branchForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                officialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
                fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                outGoingMails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
                taxationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^[A-Za-z]{5}[0-9]{4}[A-Za-z]$)')),
                bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                bankAccNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])),
                bankType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "scroll",
          value: function scroll(element) {
            element.scrollIntoView();
          } //Method for submit form data

        }, {
          key: "branchFormData",
          value: function branchFormData() {
            var _this6 = this;

            try {
              var cleanAddCompanyForm = this.util.cleanFormLevelOne(this.branchForm);

              if (this.branchForm.valid) {
                this.api.submitBranchFormData(cleanAddCompanyForm.value, this.snapshotParam, this.selectCountryName, this.selectStateName).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this6.successMessage = true;
                    _this6.errorMsg = false;
                    _this6.successMsg = data.message;
                    setTimeout(function () {
                      _this6.handleErrors();

                      _this6.ngZone.run(function () {
                        return _this6.router.navigateByUrl('/pages/branches/show-branches');
                      });
                    }, 1500);
                  } else if (data.status == "error") {
                    _this6.errorMsg = true;
                    _this6.successMessage = false;
                    _this6.errMsg = data.message;
                    setTimeout(function () {
                      _this6.handleErrors();
                    }, 4000);
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
              this.api.getBranchListData().subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.branch.length > 0 && _this7.util.branchesSatus !== 1) {
                    _this7.router.navigateByUrl("/pages/branches/show-branches");

                    _this7.util.branchesSatus = 0;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          } //Check For Country Validation

        }, {
          key: "countryName",
          value: function countryName() {
            if (document.getElementById('country').value === '-1') {
              this.countryMsg = "Country Name is Required";
              this.stateOption = false;
            } else {
              this.selectCountryName = document.getElementById('country').value;
              this.countryMsg = '';
              this.stateOption = true;
              this.stateName();
            }
          } // State Option Functionality

        }, {
          key: "stateName",
          value: function stateName() {
            if (document.getElementById('state') === null) {
              this.selectStateName = '';
            } else if (document.getElementById('state').value === '') {
              this.selectStateName = '';
            } else {
              this.selectStateName = document.getElementById('state').value;
            }
          }
        }]);

        return AddBranchesComponent;
      }();

      AddBranchesComponent.ɵfac = function AddBranchesComponent_Factory(t) {
        return new (t || AddBranchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]));
      };

      AddBranchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddBranchesComponent,
        selectors: [["app-add-branches"]],
        decls: 126,
        vars: 19,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title"], ["target", ""], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "inputName", "placeholder", "Enter Branch Name", "formControlName", "name", 1, "form-control"], [4, "ngFor", "ngForOf"], ["id", "inputAddress", "placeholder", "Address", "formControlName", "address", 1, "form-control"], [1, "form-row"], [1, "form-group", "col-md-6"], [1, "col-sm-4", "control-label"], ["id", "country", "name", "country", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], [3, "ngStyle"], [2, "color", "red"], ["class", "form-group col-md-6", 4, "ngIf"], ["type", "email", "id", "inputEmail", "placeholder", "Enter Email ", "formControlName", "email", 1, "form-control"], ["type", "email", "id", "inputBcc", "placeholder", "Enter BCC Address", "formControlName", "outGoingMails", 1, "form-control"], ["type", "email", "placeholder", "Enter Bank Name ", "formControlName", "bankName", 1, "form-control"], ["type", "email", "placeholder", "Enter Account Type", "formControlName", "bankType", 1, "form-control"], ["type", "text", "id", "inputFax", "placeholder", "Enter Account Number:", "formControlName", "bankAccNum", 1, "form-control"], ["type", "text", "id", "inputCompanyNo", "placeholder", "Enter Official Branch Number", "formControlName", "officialNumber", 1, "form-control"], ["type", "text", "id", "inputFax", "placeholder", "Enter Fax Number:", "formControlName", "fax", 1, "form-control"], [1, "col-md-6"], ["type", "text", "id", "inputTaxationno.", "placeholder", "Enter Taxation Number", "formControlName", "taxationNumber", 1, "form-control"], ["onkeyup", "this.value = this.value.toUpperCase().trim();", "type", "text", "id", "inputPanno", "placeholder", "Enter PAN Number", "formControlName", "panNumber", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "submit", "routerLink", "../show-branches", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], ["name", "state", "id", "state", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["disabled", "", 1, "dropdown", "dropdown-toggle", "form-control"], [1, "dropdown-item"]],
        template: function AddBranchesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Branch Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddBranchesComponent_p_7_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddBranchesComponent_p_9_Template, 3, 1, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddBranchesComponent_Template_form_ngSubmit_10_listener() {
              return ctx.branchFormData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name (to appear on reports):\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddBranchesComponent_div_19_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddBranchesComponent_div_28_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Country:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddBranchesComponent_Template_select_change_36_listener() {
              return ctx.countryName();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddBranchesComponent_div_40_Template, 5, 0, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddBranchesComponent_div_41_Template, 7, 0, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email Address:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddBranchesComponent_div_52_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "BCC Address for all outgoing mails:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AddBranchesComponent_div_60_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Bank Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Account Type:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Account No:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, AddBranchesComponent_div_84_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Official Branch Number:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AddBranchesComponent_div_94_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Fax Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, AddBranchesComponent_div_103_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Taxation No:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AddBranchesComponent_div_111_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "PAN (Permanent Account Number):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AddBranchesComponent_div_119_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBranchesComponent_Template_button_click_122_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.scroll(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Add Branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.branchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.countryMsg === undefined ? "none" : "block"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stateOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stateOption);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.outGoingMails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.bankAccNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.officialNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.fax);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.taxNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.panNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.branchForm.invalid || ctx.countryMsg || ctx.countryMsg === undefined);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  max-height: 35px;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.delete-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 6px;\n  background: #a20909;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmNoZXMvYWRkLWJyYW5jaGVzL2FkZC1icmFuY2hlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0csZ0JBQUE7QUFFSDs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaGVzL2FkZC1icmFuY2hlcy9hZGQtYnJhbmNoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmRyb3Bkb3due1xuICAgbWF4LWhlaWdodDogMzVweDtcbn1cbi5idG4tY2lyY2xlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbi5kZWxldGUtYnV0dG9ue1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuLmRlbGV0ZS1idXR0b24gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA2cHggNnB4O1xuICAgIGJhY2tncm91bmQ6ICNhMjA5MDk7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBranchesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-branches',
            templateUrl: './add-branches.component.html',
            styleUrls: ['./add-branches.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gw9w":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/branches/update-branch-data/update-branch-data.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: UpdateBranchDataComponent */

    /***/
    function gw9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateBranchDataComponent", function () {
        return UpdateBranchDataComponent;
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


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../branch-service/branch.service */
      "+Jxb");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UpdateBranchDataComponent_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errMsg);
        }
      }

      function UpdateBranchDataComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMsg);
        }
      }

      function UpdateBranchDataComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r11.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_19_div_1_Template, 2, 1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r11 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.updateBranchForm.get("name").hasError(validation_r11.type) && (ctx_r3.updateBranchForm.get("name").dirty || ctx_r3.updateBranchForm.get("name").touched));
        }
      }

      function UpdateBranchDataComponent_div_28_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_28_div_1_Template, 2, 1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r14 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.updateBranchForm.get("address").hasError(validation_r14.type) && (ctx_r4.updateBranchForm.get("address").dirty || ctx_r4.updateBranchForm.get("address").touched));
        }
      }

      function UpdateBranchDataComponent_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r17.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_37_div_1_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r17 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.updateBranchForm.get("outGoingMails").hasError(validation_r17.type) && (ctx_r5.updateBranchForm.get("outGoingMails").dirty || ctx_r5.updateBranchForm.get("outGoingMails").touched));
        }
      }

      function UpdateBranchDataComponent_div_60_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r20.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_60_div_1_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r20 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.updateBranchForm.get("bankAccNum").hasError(validation_r20.type) && (ctx_r6.updateBranchForm.get("bankAccNum").dirty || ctx_r6.updateBranchForm.get("bankAccNum").touched));
        }
      }

      function UpdateBranchDataComponent_div_69_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r23.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_69_div_1_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r23 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.updateBranchForm.get("fax").hasError(validation_r23.type) && (ctx_r7.updateBranchForm.get("fax").dirty || ctx_r7.updateBranchForm.get("fax").touched));
        }
      }

      function UpdateBranchDataComponent_div_79_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r26.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_79_div_1_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r26 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.updateBranchForm.get("officialNumber").hasError(validation_r26.type) && (ctx_r8.updateBranchForm.get("officialNumber").dirty || ctx_r8.updateBranchForm.get("officialNumber").touched));
        }
      }

      function UpdateBranchDataComponent_div_88_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r29.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_88_div_1_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r29 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.updateBranchForm.get("taxationNumber").hasError(validation_r29.type) && (ctx_r9.updateBranchForm.get("taxationNumber").dirty || ctx_r9.updateBranchForm.get("taxationNumber").touched));
        }
      }

      function UpdateBranchDataComponent_div_96_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r32.message, " ");
        }
      }

      function UpdateBranchDataComponent_div_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateBranchDataComponent_div_96_div_1_Template, 2, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r32 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.updateBranchForm.get("panNumber").hasError(validation_r32.type) && (ctx_r10.updateBranchForm.get("panNumber").dirty || ctx_r10.updateBranchForm.get("panNumber").touched));
        }
      }

      var UpdateBranchDataComponent = /*#__PURE__*/function () {
        function UpdateBranchDataComponent(route, api, fb, ngZone, router, util, currencyApi) {
          var _this8 = this;

          _classCallCheck(this, UpdateBranchDataComponent);

          this.route = route;
          this.api = api;
          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.util = util;
          this.currencyApi = currencyApi;
          this.getBranchList = Object;
          this.branchData = [];
          this.successMessage = false;
          this.errMsg = String;
          this.errorMsg = false; //Method for show validdation message

          this.validationMessage = {
            'name': [{
              type: 'required',
              message: 'Name is Required '
            }],
            'address': [{
              type: 'required',
              message: 'Address is Required '
            }],
            'officialNumber': [{
              type: 'required',
              message: 'Official Number is Required '
            }, {
              type: 'minlength',
              message: 'Number too short '
            }, {
              type: 'maxlength',
              message: 'Number is too large'
            }, {
              type: 'pattern',
              message: 'Company Number not valid'
            }],
            'fax': [{
              type: 'minlength',
              message: 'Fax number too short '
            }, {
              type: 'maxlength',
              message: 'Fax no. is too large'
            }, {
              type: 'pattern',
              message: 'Fax Number not valid'
            }],
            'outGoingMails': [{
              type: 'pattern',
              message: 'Invalid Mail'
            }],
            'taxNumber': [{
              type: 'pattern',
              message: 'Invalid Taxation No.'
            }],
            'panNumber': [{
              type: 'pattern',
              message: 'Invalid PAN Number'
            }],
            'bankAccNum': [{
              type: 'maxlength',
              message: 'Account No. limit exceeded'
            }, {
              type: 'pattern',
              message: 'Invalid Account No.'
            }]
          };
          this.snapshotParam = this.route.snapshot.paramMap.get("branchId");
          this.util.moduleExists(this.snapshotParam, 'Branches').subscribe(function (data) {
            if (data.status === 'success') {
              if (!data.data) {
                _this8.router.navigateByUrl('/pages/branches/show-branches');
              }
            }
          });
        }

        _createClass(UpdateBranchDataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateBranchDataValidate();
            this.permissionInfo = this.util.permissionRoleInfo;
            this.getExistingData();

            if (this.permissionInfo.search('Edit Branch') === -1) {
              this.updateBranchForm.disable();
            }
          } //Method for Validation

        }, {
          key: "updateBranchDataValidate",
          value: function updateBranchDataValidate() {
            try {
              this.updateBranchForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                officialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                outGoingMails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
                taxationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^[A-Za-z]{5}[0-9]{4}[A-Za-z]$)')),
                bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                bankAccNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])),
                bankType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "scroll",
          value: function scroll(element) {
            element.scrollIntoView();
          } //Method for get existing data show on update form

        }, {
          key: "getExistingData",
          value: function getExistingData() {
            var _this9 = this;

            try {
              this.api.getBranchDetails(this.snapshotParam).subscribe(function (data) {
                if (data.status === "success") {
                  _this9.getBranchList = data.data;
                  _this9.updateBranchForm = _this9.fb.group({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
                    officialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.officialNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                    fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.fax, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)])),
                    address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    outGoingMails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.outGoingMails, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
                    taxationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.taxationNumber),
                    panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.panNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^[A-Za-z]{5}[0-9]{4}[A-Za-z]$)')),
                    bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.bankDetails.bankName),
                    bankAccNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.bankDetails.bankAccNum, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])),
                    bankType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this9.getBranchList.bankDetails.bankType)
                  });
                }
              });
            } catch (err) {
              console.log(err);
            }
          } //Method for submit updated form data

        }, {
          key: "updateBranchFormData",
          value: function updateBranchFormData() {
            var _this10 = this;

            try {
              var cleanUpdateBranchForm = this.util.cleanFormLevelOne(this.updateBranchForm);

              if (this.updateBranchForm.valid) {
                this.api.submitUpdatedData(cleanUpdateBranchForm.value, this.snapshotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this10.successMessage = true;
                    _this10.errorMsg = false;
                    _this10.successMsg = data.message;
                    setTimeout(function () {
                      _this10.handleErrors();

                      _this10.router.navigateByUrl("/pages/branches/show-branches");
                    }, 2000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this10.errorMsg = true;
                    _this10.successMessage = false;
                    _this10.errMsg = data.message;
                    setTimeout(function () {
                      _this10.handleErrors();
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

        return UpdateBranchDataComponent;
      }();

      UpdateBranchDataComponent.ɵfac = function UpdateBranchDataComponent_Factory(t) {
        return new (t || UpdateBranchDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]));
      };

      UpdateBranchDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateBranchDataComponent,
        selectors: [["app-update-branch-data"]],
        decls: 103,
        vars: 12,
        consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", 2, "text-align", "center"], ["target", ""], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "inputName", "placeholder", "Enter Branch Name", "formControlName", "name", 1, "form-control"], [4, "ngFor", "ngForOf"], ["id", "inputAddress", "placeholder", "Address", "formControlName", "address", 1, "form-control"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "email", "id", "inputBcc", "placeholder", "Enter BCC Address", "formControlName", "outGoingMails", 1, "form-control"], ["type", "text", "placeholder", "Enter Bank Name", "formControlName", "bankName", 1, "form-control"], ["type", "text", "placeholder", "Enter Account Type", "formControlName", "bankType", 1, "form-control"], ["type", "email", "placeholder", "Enter Account Number", "formControlName", "bankAccNum", 1, "form-control"], ["type", "text", "id", "inputFax", "placeholder", "Enter Fax Number:", "formControlName", "fax", 1, "form-control"], ["type", "text", "id", "inputCompanyNo", "placeholder", "Enter Official Branch Number", "formControlName", "officialNumber", 1, "form-control"], [1, "col-md-6"], ["type", "text", "id", "inputTaxationno.", "placeholder", "Enter Taxation Number", "formControlName", "taxationNumber", 1, "form-control"], ["onkeyup", "this.value = this.value.toUpperCase().trim();", "type", "text", "id", "inputPanno", "placeholder", "Enter PAN Number", "formControlName", "panNumber", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", "routerLink", "../../show-branches", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"]],
        template: function UpdateBranchDataComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update Branch Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UpdateBranchDataComponent_p_7_Template, 3, 1, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdateBranchDataComponent_p_9_Template, 3, 1, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateBranchDataComponent_Template_form_ngSubmit_10_listener() {
              return ctx.updateBranchFormData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name (to appear on reports):\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UpdateBranchDataComponent_div_19_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UpdateBranchDataComponent_div_28_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "BCC Address for all outgoing mails:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UpdateBranchDataComponent_div_37_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bank Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Account Type:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Account Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UpdateBranchDataComponent_div_60_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Fax Number:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, UpdateBranchDataComponent_div_69_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Official Branch Number:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, UpdateBranchDataComponent_div_79_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Taxation No:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, UpdateBranchDataComponent_div_88_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "PAN (Permanent Account Number):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, UpdateBranchDataComponent_div_96_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateBranchDataComponent_Template_button_click_99_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.scroll(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Update Branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateBranchForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.outGoingMails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.bankAccNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.fax);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.officialNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.taxNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.panNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updateBranchForm.invalid || ctx.permissionInfo.search("Edit Branch") === -1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JyYW5jaGVzL3VwZGF0ZS1icmFuY2gtZGF0YS91cGRhdGUtYnJhbmNoLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateBranchDataComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-branch-data',
            templateUrl: './update-branch-data.component.html',
            styleUrls: ['./update-branch-data.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lnLD":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/branches/department/show-departments/show-departments.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ShowDepartmentsComponent */

    /***/
    function lnLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowDepartmentsComponent", function () {
        return ShowDepartmentsComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../branch-service/branch.service */
      "+Jxb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ShowDepartmentsComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDepartmentsComponent_li_9_Template_b_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var list_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.showData(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDepartmentsComponent_li_9_Template_i_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var list_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.showData(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0 update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDepartmentsComponent_li_9_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var list_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.deleteList(list_r1._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA0 Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showDepartmentCard[list_r1._id]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "../../update-department/", ctx_r0.snapshotParam, "/", list_r1._id, "");
        }
      }

      var ShowDepartmentsComponent = /*#__PURE__*/function () {
        function ShowDepartmentsComponent(route, router, api, ngZone) {
          _classCallCheck(this, ShowDepartmentsComponent);

          this.route = route;
          this.router = router;
          this.api = api;
          this.ngZone = ngZone;
          this.departmentList = new Array();
          this.showDepartmentCard = {};
        }

        _createClass(ShowDepartmentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDepartmentListData();
          }
        }, {
          key: "navigate",
          value: function navigate() {
            this.router.navigateByUrl("/pages/branches/add-department/".concat(this.snapshotParam));
          }
        }, {
          key: "getDepartmentListData",
          value: function getDepartmentListData() {
            var _this11 = this;

            try {
              this.snapshotParam = this.route.snapshot.paramMap.get("branchId");
              this.api.getDepartmentData(this.snapshotParam).subscribe(function (data) {
                if (data.status === "success" || data.status === 200) {
                  _this11.departmentList = data.department;
                  var len = Object.keys(data.department).length;

                  for (var i = 0; i < len; i++) {
                    _this11.showDepartmentCard[_this11.departmentList[i]._id] = true;
                  }
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          } //Method for onclick data show when collapse

        }, {
          key: "showData",
          value: function showData(departmentId) {
            try {
              this.showDepartmentCard["".concat(departmentId)] = !this.showDepartmentCard["".concat(departmentId)];
            } catch (err) {
              console.log(err);
            }
          } //Method for remove company branch

        }, {
          key: "deleteList",
          value: function deleteList(departmentId) {
            var _this12 = this;

            try {
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
                  _this12.api.removeDepartmentData(departmentId).subscribe(function (data) {
                    if (data.status === "success" || data.status === 200) {
                      swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                      _this12.ngZone.run(function () {
                        _this12.router.navigateByUrl("/pages/branches/show-departments/".concat(_this12.snapshotParam));
                      });

                      _this12.getDepartmentListData();
                    }
                  });
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }]);

        return ShowDepartmentsComponent;
      }();

      ShowDepartmentsComponent.ɵfac = function ShowDepartmentsComponent_Factory(t) {
        return new (t || ShowDepartmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      ShowDepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShowDepartmentsComponent,
        selectors: [["app-show-departments"]],
        decls: 10,
        vars: 1,
        consts: [[1, "card"], [1, "card-header", 2, "text-align", "center"], [1, "btn", "btn-primary", 2, "float", "right", 3, "click"], [1, "fa", "fa-plus-square"], [1, "panel-body"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [2, "cursor", "pointer", 3, "click"], [2, "float", "right"], [1, "dropdown-toggle", 3, "click"], [1, "card", 2, "background-color", "ghostwhite", 3, "hidden"], [1, "table", 2, "margin", "auto"], [1, "btn", "btn-primary", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 2, "float", "right", 3, "click"], [1, "fa", "fa-trash"]],
        template: function ShowDepartmentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Departments List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDepartmentsComponent_Template_button_click_4_listener() {
              return ctx.navigate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xA0 Add Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShowDepartmentsComponent_li_9_Template, 25, 6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departmentList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJhbmNoZXMvZGVwYXJ0bWVudC9zaG93LWRlcGFydG1lbnRzL3Nob3ctZGVwYXJ0bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9icmFuY2hlcy9kZXBhcnRtZW50L3Nob3ctZGVwYXJ0bWVudHMvc2hvdy1kZXBhcnRtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDepartmentsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-show-departments',
            templateUrl: './show-departments.component.html',
            styleUrls: ['./show-departments.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _branch_service_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=branches-branches-module-es5.js.map