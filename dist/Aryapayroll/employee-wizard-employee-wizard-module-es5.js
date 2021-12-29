(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-wizard-employee-wizard-module"], {
    /***/
    "4lST":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/employee-wizard/employee-list/employee-list.component.ts ***!
      \********************************************************************************/

    /*! exports provided: EmployeeListComponent */

    /***/
    function lST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
        return EmployeeListComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      "etMh");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/employee.service */
      "qp47");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EmployeeListComponent_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", employee_r14._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r14.name, " ");
        }
      }

      function EmployeeListComponent_tbody_57_a_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_a_36_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var list_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.statusConfirmationMessage(list_r15._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx_r17.activeStatus, "");
        }
      }

      function EmployeeListComponent_tbody_57_a_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_a_37_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var list_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.statusConfirmationMessage(list_r15._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx_r18.activeStatus, "");
        }
      }

      function EmployeeListComponent_tbody_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 56, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmployeeListComponent_tbody_57_Template_input_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var list_r15 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.onSelectFile($event, list_r15._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_Template_input_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return _r16.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.updateFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\xA0Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var list_r15 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onSelect(list_r15._id, "setPassword");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA0Set Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var list_r15 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.onSelect(list_r15._id, "Assign");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\xA0Assign TL/Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_57_Template_a_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var list_r15 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.onSelect(list_r15._id, "UnAssign");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\xA0UnAssign TL/Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EmployeeListComponent_tbody_57_a_36_Template, 3, 1, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EmployeeListComponent_tbody_57_a_37_Template, 3, 1, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r15 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", list_r15.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r15.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r15.departmentName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r15.jobProfile, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r15.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r15.age, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../employee-profile/", list_r15._id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeStatus === "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeStatus === "Active");
        }
      }

      function EmployeeListComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.filterEmployeeDataMsg);
        }
      }

      function EmployeeListComponent_p_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errMessage);
        }
      }

      function EmployeeListComponent_p_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.successMsg);
        }
      }

      function EmployeeListComponent_div_78_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r32.message, " ");
        }
      }

      function EmployeeListComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeListComponent_div_78_div_1_Template, 2, 1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r32 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.setPasswordForm.get("password").hasError(validation_r32.type) && (ctx_r5.setPasswordForm.get("password").dirty || ctx_r5.setPasswordForm.get("password").touched));
        }
      }

      function EmployeeListComponent_div_86_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r35.message, " ");
        }
      }

      function EmployeeListComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeListComponent_div_86_div_1_Template, 2, 1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r35 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.setPasswordForm.get("passwordConfirmation").hasError(validation_r35.type) && (ctx_r6.setPasswordForm.get("passwordConfirmation").dirty || ctx_r6.setPasswordForm.get("passwordConfirmation").touched));
        }
      }

      function EmployeeListComponent_p_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errMessage);
        }
      }

      function EmployeeListComponent_p_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.successMsg);
        }
      }

      function EmployeeListComponent_option_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var companyTL_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("selected", companyTL_r38.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", companyTL_r38._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", companyTL_r38.name, " ");
        }
      }

      function EmployeeListComponent_div_114_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r39.message, " ");
        }
      }

      function EmployeeListComponent_div_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeListComponent_div_114_div_1_Template, 2, 1, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r39 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.assignTlForm.get("parentIdsData.parentUserId").hasError(validation_r39.type) && (ctx_r10.assignTlForm.get("parentIdsData.parentUserId").dirty || ctx_r10.assignTlForm.get("parentIdsData.parentUserId").touched));
        }
      }

      function EmployeeListComponent_p_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.errMessage);
        }
      }

      function EmployeeListComponent_p_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.successMsg);
        }
      }

      function EmployeeListComponent_tbody_143_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tbody_143_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var employeeTL_r42 = ctx.$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.unassignTL(employeeTL_r42._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employeeTL_r42 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employeeTL_r42.displayName, " ");
        }
      }

      var EmployeeListComponent = /*#__PURE__*/function () {
        function EmployeeListComponent(fb, api, ngZone, router, route, uploadAvatarAPI, util) {
          _classCallCheck(this, EmployeeListComponent);

          this.fb = fb;
          this.api = api;
          this.ngZone = ngZone;
          this.router = router;
          this.route = route;
          this.uploadAvatarAPI = uploadAvatarAPI;
          this.util = util;
          this.employeeList = new Array();
          this.filterEmployeeDataMsg = '';
          this.minPasswordLength = 8;
          this.maxPasswordLength = 14;
          this.status = "Active";
          this.employeeLabelName = 'Active Employees';
          this.activeStatus = 'Inactive';
          this.filterEmployeeList = [];
          this.statusStatus = false; //For print Validation and error message.

          this.validationErrorMessage = {
            'password': [{
              type: 'required',
              message: 'Password is required'
            }, {
              type: 'minlength',
              message: "Password must be at least ".concat(this.minPasswordLength, " characters long")
            }, {
              type: 'maxlength',
              message: "Password should not be greater than ".concat(this.maxPasswordLength, " characters")
            }, {
              type: 'pattern',
              message: 'Your password must contain at least one uppercase, one lowercase, one digit and one special characters'
            }],
            'passwordConfirmation': [{
              type: 'required',
              message: 'Confirm Password is required'
            }, {
              type: 'compare',
              message: 'Passwords do not match'
            }]
          };
          this.assignTLValidation = {
            'parentUserId': [{
              type: 'required',
              message: 'TL/Manager Name is Required'
            }]
          };
        }

        _createClass(EmployeeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.assignTLForm();
            this.getEmployeeListData();
            this.passwordFormValidation();
            this.getTlList();
            this.userProfileForm();
            this.permissionInfo = this.util.permissionRoleInfo;
          }
        }, {
          key: "updateFunction",
          value: function updateFunction() {
            try {
              if (this.permissionInfo.search('Create Employees') === -1) {
                document.getElementById('updateEmployeePermission').classList.add('disabled');
              } else {
                document.getElementById('updateEmployeePermission').classList.remove('disabled');
              }
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "getEmployeeListData",
          value: function getEmployeeListData() {
            var _this = this;

            try {
              this.api.getEmployeeList(this.status).subscribe(function (data) {
                if (data.status === "success") {
                  if (data.data.length === 0) {
                    if (_this.status === 'Active') {
                      document.getElementById('employeeStatus').value = "Inactive";
                      document.getElementById('filterClick').click();
                    } else if (_this.status === 'Inactive') {
                      _this.api.employeeCount().subscribe(function (data) {
                        if (data.status === 'success') {
                          if (data.data === 0) {
                            _this.router.navigateByUrl("/pages/employee-wizard/employee-profile");
                          } else {
                            _this.filterEmployeeDataMsg = 'No Data Found';
                            _this.employeeList = [];
                            _this.filterEmployeeList = [];
                          }
                        }
                      });
                    }
                  } else {
                    _this.employeeList = data.data;
                    _this.filterEmployeeList = data.data;
                    _this.filterEmployeeDataMsg = '';
                  }
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "passwordFormValidation",
          value: function passwordFormValidation() {
            try {
              this.setPasswordForm = this.fb.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8}$') //this is for the letters both uppercase & lowercase and numbers.
                ])),
                passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_3__["RxwebValidators"].compare({
                  fieldName: 'password'
                })]))
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "onSelect",
          value: function onSelect(value, type) {
            try {
              this.employeeId = value;

              if (type === 'Assign') {
                this.resetModal('Assign');

                if (this.companyTlList.length === 0) {
                  setTimeout(function () {
                    document.getElementById('dismissTLModal').click();
                  }, 0);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Add TL/Manager First');
                }
              } else if (type === 'setPassword') {
                this.resetModal('setPassword');
              } else if (type === 'UnAssign') {
                this.employeeTlList();
              }
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "setPasswordFormData",
          value: function setPasswordFormData() {
            var _this2 = this;

            try {
              if (this.setPasswordForm.valid) {
                this.api.setPassword(this.setPasswordForm.value, this.employeeId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this2.successFlag = true;
                    _this2.successMsg = data.message;
                    _this2.passwordFlag = false;
                    setTimeout(function () {
                      _this2.ngZone.run(function () {
                        return _this2.router.navigateByUrl('/pages/employee-wizard/employee-list');
                      });

                      _this2.handleErrroMessage();

                      document.getElementById('dismissSetPassword').click();
                    }, 2000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this2.passwordFlag = true;
                    _this2.successFlag = false;
                    _this2.errMessage = data.message;
                    setTimeout(function () {
                      _this2.handleErrroMessage();

                      document.getElementById('dismissSetPassword').click();
                    }, 3000);
                  }
                });
              }
            } catch (err) {
              console.log(err.message);
            }
          } //For resetFunctionality of employee fields

        }, {
          key: "resetFunctionality",
          value: function resetFunctionality() {
            document.getElementById('listEmployee').value = "";
            document.getElementById('employeeStatus').value = "Active";
            this.status = 'Active';
            this.activeStatus = 'Inactive';
            this.filterEmployeeDataMsg = '';
            this.statusStatus = false;
            this.getEmployeeListData();
          } // filterFunctionality of employee fields list

        }, {
          key: "filterFunctionality",
          value: function filterFunctionality() {
            try {
              var employeeId = document.getElementById('listEmployee').value;
              var status = document.getElementById('employeeStatus').value;

              if (employeeId.length != 0) {
                status = '';
                this.filterEmployeeDetails(employeeId);
              }

              if (status === "Active") {
                this.status = 'Active';
                this.activeStatus = 'Inactive';
                this.employeeLabelName = 'Active Employees';
                this.getEmployeeListData();
              } else if (status === 'Inactive') {
                this.status = 'Inactive';
                this.activeStatus = 'Active';
                this.employeeLabelName = 'Inactive Employees';
                this.getEmployeeListData();
              }
            } catch (err) {
              console.log(err);
            }
          } // Company Tl List

        }, {
          key: "getTlList",
          value: function getTlList() {
            var _this3 = this;

            try {
              this.api.getTlList().subscribe(function (data) {
                if (data.status === 'success') {
                  _this3.companyTlList = data.data;
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Assign Tl list form

        }, {
          key: "assignTLForm",
          value: function assignTLForm() {
            try {
              this.assignTlForm = this.fb.group({
                parentIdsData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                  userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                  parentUserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
                })
              });
            } catch (err) {
              console.log(err);
            }
          } // Assign And Unassign TL ID

        }, {
          key: "actionOnTl",
          value: function actionOnTl(tlId, type) {
            try {
              if (type === 'Assign') {
                this.assignTlForm.get('parentIdsData.userId').setValue(this.employeeId);
                this.assignTlForm.get('parentIdsData.parentUserId').setValue(tlId);
              }
            } catch (err) {
              console.log(err);
            }
          } // Submit Assign TL Form

        }, {
          key: "assignTl",
          value: function assignTl() {
            var _this4 = this;

            try {
              this.api.assignTl(this.assignTlForm.value, this.employeeId).subscribe(function (data) {
                if (data.status === "success") {
                  _this4.successFlag = true;
                  _this4.successMsg = data.message;
                  _this4.passwordFlag = false;
                  setTimeout(function () {
                    _this4.ngZone.run(function () {
                      return _this4.router.navigateByUrl('/pages/employee-wizard/employee-list');
                    });

                    document.getElementById('dismissTLModal').click();

                    _this4.handleErrroMessage();
                  }, 2000);
                } else if (data.status === 'error') {
                  _this4.passwordFlag = true;
                  _this4.successFlag = false;
                  _this4.errMessage = data.message;
                  setTimeout(function () {
                    document.getElementById('dismissTLModal').click();

                    _this4.handleErrroMessage();
                  }, 3000);
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Error Handling Message

        }, {
          key: "handleErrroMessage",
          value: function handleErrroMessage() {
            this.successFlag = false;
            this.passwordFlag = false;
            this.successMsg = '';
            this.errMessage = '';
          }
        }, {
          key: "resetModal",
          value: function resetModal(type) {
            try {
              if (type === 'Assign') {
                this.assignTlForm.reset();
              } else if (type === 'setPassword') {
                this.setPasswordForm.reset();
              }
            } catch (err) {
              console.log(err);
            }
          } // Unassign TL

        }, {
          key: "unassignTL",
          value: function unassignTL(tlId) {
            var _this5 = this;

            try {
              var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              });
              swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You want to UnAssign TL/Manager",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true,
                allowOutsideClick: false
              }).then(function (result) {
                if (result.value) {
                  _this5.api.unassignTl(_this5.employeeId, tlId).subscribe(function (data) {
                    if (data.status === "success") {
                      swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');
                      setTimeout(function () {
                        document.getElementById('dismissUnAssignTLModal').click();
                      }, 0);
                    }
                  });
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire('Cancelled', "Didn't UnAssign TL/Manager", 'error');
                }
              });
            } catch (err) {
              console.log(err);
            }
          } //Employee TL List

        }, {
          key: "employeeTlList",
          value: function employeeTlList() {
            var _this6 = this;

            try {
              this.api.employeeTlList(this.employeeId).subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.data.parentUsersIds.length === 0) {
                    setTimeout(function () {
                      document.getElementById('dismissUnAssignTLModal').click();
                    }, 0);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Nothing to UnAssign');
                  } else {
                    _this6.companyEmployeeTlList = data.data.parentUsersIds;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Change Status

        }, {
          key: "changeStatus",
          value: function changeStatus() {
            try {
              document.getElementById('listEmployee').value = "";
            } catch (err) {
              console.log(err);
            }
          } // Get Employee Details

        }, {
          key: "filterEmployeeDetails",
          value: function filterEmployeeDetails(employeeId) {
            var _this7 = this;

            try {
              this.api.filterEmployeeList(employeeId).subscribe(function (data) {
                if (data.status === 'success') {
                  _this7.employeeList = [];

                  _this7.employeeList.push(data.data);
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "statusConfirmationMessage",
          value: function statusConfirmationMessage(value) {
            var _this8 = this;

            var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
              title: 'Are you sure?',
              text: "You want to ".concat(this.activeStatus, " the employee status"),
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No',
              reverseButtons: true,
              allowOutsideClick: false
            }).then(function (result) {
              if (result.value) {
                _this8.api.updateEmployeeStatus(value, _this8.activeStatus).subscribe(function (data) {
                  if (data.status === "success") {
                    swalWithBootstrapButtons.fire('Employee Status!', data.message, 'success');

                    _this8.filterFunctionality();
                  }
                });
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', "Employee Status didn't changed", 'error');
              }
            });
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event, employeeId) {
            var _this9 = this;

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                for (var i = 0; i < _this9.employeeList.length; i++) {
                  if (_this9.employeeList[i]._id == employeeId) {
                    _this9.url = _this9.employeeList[i].avatar;
                    _this9.employeeList[i].avatar = event.target.result;
                    break;
                  }
                }
              };

              if (event.target.files.length > 0) {
                var file = event.target.files[0];
                this.userAvatar.get('avatar').setValue(file); // Open Modal

                var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
                  customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                  },
                  buttonsStyling: false
                });
                swalWithBootstrapButtons.fire({
                  title: 'Are you sure?',
                  text: "You want to change your profile picture",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'No',
                  reverseButtons: true,
                  allowOutsideClick: false
                }).then(function (result) {
                  if (result.value) {
                    _this9.uploadAvatarAPI.uploadProfileImage(_this9.userAvatar, 'Employee', employeeId).subscribe(function (data) {
                      if (data.status === 'success') {
                        swalWithBootstrapButtons.fire('Uploaded!', data.message, 'success');
                      }
                    });
                  } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your profile not changed', 'error');

                    for (var i = 0; i < _this9.employeeList.length; i++) {
                      if (_this9.employeeList[i]._id == employeeId) {
                        _this9.employeeList[i].avatar = _this9.url;
                        break;
                      }
                    }
                  }
                });
              }
            }
          } // Profile Image Form

        }, {
          key: "userProfileForm",
          value: function userProfileForm() {
            try {
              this.userAvatar = this.fb.group({
                avatar: ['']
              });
            } catch (error) {
              console.log(error);
            }
          } // Update the filter functionality

        }, {
          key: "employeeFilter",
          value: function employeeFilter() {
            try {
              if (document.getElementById('listEmployee').value.length !== 0) {
                this.statusStatus = true;
              } else {
                this.statusStatus = false;
              }
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return EmployeeListComponent;
      }();

      EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) {
        return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]));
      };

      EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeeListComponent,
        selectors: [["app-employee-list"]],
        decls: 146,
        vars: 22,
        consts: [[1, "card"], [1, "card-header"], [1, "text-center"], [1, "card-body"], [1, "form-row"], [1, "col-lg-3", "col-md-3", "col-sm-4"], [1, "form-group"], [1, "col-sm-6", "control-label"], ["id", "listEmployee", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["ng-selected", "true", "value", "", "disabled", "", "selected", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], ["id", "employeeStatus", 1, "dropdown", "dropdown-toggle", "form-control", 3, "disabled", "change"], ["ng-selected", "true", "value", "Active", "selected", "", 1, "dropdown-item"], ["ng-selected", "true", "value", "Inactive", 1, "dropdown-item"], [1, "form-group", "right-buttongroup"], ["id", "filterClick", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-filter"], [1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-trash-restore"], [1, "col-lg-3", "col-md-3", "col-sm-3"], ["routerLink", "../employee-profile", 1, "btn", "btn-primary", 2, "float", "right"], [1, "fa", "fa-plus-square"], [1, "panel-body"], [1, "list-group"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "myModal", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "modal-body"], ["role", "form", 3, "formGroup", "ngSubmit"], [2, "color", "darkred"], ["type", "password", "formControlName", "password", "placeholder", "Enter Password", 1, "form-control"], [1, "col-sm-8", "control-label"], ["type", "password", "formControlName", "passwordConfirmation", "placeholder", "Confirm Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 2, "float", "right", 3, "disabled"], ["type", "button", "id", "dismissSetPassword", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "float", "right"], ["id", "assignTL", 1, "modal"], ["Name", "AssignTL", "formControlName", "parentUserId", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["value", "null", "selected", "", "disabled", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "selected", "value", 4, "ngFor", "ngForOf"], ["type", "button", "id", "dismissTLModal", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "float", "right"], ["id", "unAssignTL", 1, "modal"], [1, "card", 2, "background-color", "whitesmoke"], ["type", "button", "id", "dismissUnAssignTLModal", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "float", "right"], [1, "dropdown-item", 3, "value"], [1, "image-container"], ["id", "imgProfile", 1, "rounded-circle", 2, "width", "60px", "height", "50px", 3, "src"], [1, "middle"], ["type", "file", "accept", "image/*", "id", "profilePicture", 2, "display", "none", 3, "change"], ["file", ""], ["type", "button", "id", "btnChangePicture", "value", "Change", 3, "click"], [1, "dropdown"], ["href", "javascript:void(0);", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-secondary", 3, "click"], [1, "fa", "fa-ellipsis-h"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", 2, "background-color", "rgb(190, 230, 231)"], ["id", "updateEmployeePermission", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#myModal", "data-backdrop", "static", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-key"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#assignTL", "data-backdrop", "static", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-user-plus"], ["href", "javascript:void(0);", "data-toggle", "modal", "data-target", "#unAssignTL", "data-backdrop", "static", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-user-slash"], ["href", "javascript:void(0);", "class", "dropdown-item", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-battery-half"], [1, "fas", "fa-battery-full"], [2, "text-align", "center"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], [1, "dropdown-item", 3, "selected", "value"], ["title", "UnAssign", 1, "btn", "btn-danger", 2, "color", "white", 3, "click"], [1, "fa", "fa-trash"]],
        template: function EmployeeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Employee List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmployeeListComponent_Template_select_change_11_listener() {
              return ctx.employeeFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Employee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeeListComponent_option_14_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Status:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmployeeListComponent_Template_select_change_20_listener() {
              return ctx.changeStatus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_Template_button_click_27_listener() {
              return ctx.filterFunctionality();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA0 Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_Template_button_click_30_listener() {
              return ctx.resetFunctionality();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\xA0 Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xA0 Add Employee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Employee Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Job Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Age");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, EmployeeListComponent_tbody_57_Template, 38, 9, "tbody", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, EmployeeListComponent_div_58_Template, 3, 1, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Set Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, EmployeeListComponent_p_66_Template, 3, 1, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, EmployeeListComponent_p_68_Template, 3, 1, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "form", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeeListComponent_Template_form_ngSubmit_70_listener() {
              return ctx.setPasswordFormData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Password:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, EmployeeListComponent_div_78_Template, 2, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Confirm Password:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, EmployeeListComponent_div_86_Template, 2, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Assign TL/Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, EmployeeListComponent_p_99_Template, 3, 1, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, EmployeeListComponent_p_101_Template, 3, 1, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "form", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeeListComponent_Template_form_ngSubmit_103_listener() {
              return ctx.assignTl();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "TL/Manager Name:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "select", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EmployeeListComponent_Template_select_change_110_listener($event) {
              return ctx.actionOnTl($event.target.value, "Assign");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "-----Select TL/Manager-----");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, EmployeeListComponent_option_113_Template, 2, 3, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, EmployeeListComponent_div_114_Template, 2, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "UnAssign TL/Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, EmployeeListComponent_p_127_Template, 3, 1, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, EmployeeListComponent_p_129_Template, 3, 1, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ul", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "thead", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Employee Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](143, EmployeeListComponent_tbody_143_Template, 7, 1, "tbody", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeLabelName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterEmployeeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.statusStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.permissionInfo.search("Create Employees") === -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterEmployeeDataMsg.length != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.setPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationErrorMessage.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationErrorMessage.passwordConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.setPasswordForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.assignTlForm.get("parentIdsData"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyTlList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assignTLValidation.parentUserId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.assignTlForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyEmployeeTlList);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"]],
        styles: ["a[_ngcontent-%COMP%]:hover   .dropdown-menu-right[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.image[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle[_ngcontent-%COMP%] {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .image[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.image-container[_ngcontent-%COMP%]:hover   .middle[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#btnChangePicture[_ngcontent-%COMP%] {\n  border-width: 2px;\n  font-weight: 600;\n  font-size: 0.8571em;\n  line-height: 1.35em;\n  text-transform: uppercase;\n  border: none;\n  margin: 10px 1px;\n  border-radius: 3px;\n  padding: 7px 7px;\n  cursor: pointer;\n  background-color: #66615B;\n  color: #FFFFFF;\n  transition: all 150ms linear;\n}\n\na.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: none;\n  opacity: 0.6;\n}\n\n.form-group.right-buttongroup[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-top: 14px;\n}\n\n@media screen and (max-width: 1200px) {\n  .right-buttongroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .right-buttongroup[_ngcontent-%COMP%] {\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wbG95ZWUtd2l6YXJkL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtFQUVOO0FBQ0Y7O0FBQ0E7RUFDSTtJQUNJLFdBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1wbG95ZWUtd2l6YXJkL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6aG92ZXIgLmRyb3Bkb3duLW1lbnUtcmlnaHR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubWlkZGxlIHtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAubWlkZGxlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4jYnRuQ2hhbmdlUGljdHVyZXtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMC44NTcxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMzVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDEwcHggMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA3cHggN3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2MTVCO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBsaW5lYXI7XG59XG5cbmEuZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cblxuICAuZm9ybS1ncm91cC5yaWdodC1idXR0b25ncm91cCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XG4gICAgLnJpZ2h0LWJ1dHRvbmdyb3VwIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5yaWdodC1idXR0b25ncm91cCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NaB9":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/employee-wizard/employee-wizard.module.ts ***!
      \*****************************************************************/

    /*! exports provided: EmployeeWizardModule */

    /***/
    function NaB9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeWizardModule", function () {
        return EmployeeWizardModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _employee_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./employee-wizard.component */
      "yWt3");
      /* harmony import */


      var _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-profile/employee-profile.component */
      "mdJb");
      /* harmony import */


      var _employee_wizard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee-wizard-routing.module */
      "kMJ/");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/employee.service */
      "qp47");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./employee-list/employee-list.component */
      "4lST");

      var EmployeeWizardModule = function EmployeeWizardModule() {
        _classCallCheck(this, EmployeeWizardModule);
      };

      EmployeeWizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EmployeeWizardModule
      });
      EmployeeWizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EmployeeWizardModule_Factory(t) {
          return new (t || EmployeeWizardModule)();
        },
        providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"], src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _employee_wizard_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeWizardRouitngModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeWizardModule, {
          declarations: [_employee_wizard_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeWizardComponent"], _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeProfileComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _employee_wizard_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeWizardRouitngModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeWizardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_employee_wizard_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeWizardComponent"], _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeProfileComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _employee_wizard_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeWizardRouitngModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
            providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"], src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kMJ/":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/employee-wizard/employee-wizard-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: EmployeeWizardRouitngModule */

    /***/
    function kMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeWizardRouitngModule", function () {
        return EmployeeWizardRouitngModule;
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


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _employee_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./employee-wizard.component */
      "yWt3");
      /* harmony import */


      var _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-profile/employee-profile.component */
      "mdJb");
      /* harmony import */


      var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee-list/employee-list.component */
      "4lST");

      var route = [{
        path: '',
        component: _employee_wizard_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeWizardComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [{
          path: 'employee-profile',
          component: _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeProfileComponent"]
        }, {
          path: 'employee-profile/:employeeId',
          component: _employee_profile_employee_profile_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeProfileComponent"]
        }, {
          path: 'employee-list',
          component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeListComponent"]
        }, {
          path: '',
          redirectTo: 'employee-list',
          pathMatch: 'full'
        }]
      }];

      var EmployeeWizardRouitngModule = function EmployeeWizardRouitngModule() {
        _classCallCheck(this, EmployeeWizardRouitngModule);
      };

      EmployeeWizardRouitngModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EmployeeWizardRouitngModule
      });
      EmployeeWizardRouitngModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EmployeeWizardRouitngModule_Factory(t) {
          return new (t || EmployeeWizardRouitngModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeWizardRouitngModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeWizardRouitngModule, [{
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
    "mdJb":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/employee-wizard/employee-profile/employee-profile.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: EmployeeProfileComponent */

    /***/
    function mdJb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeProfileComponent", function () {
        return EmployeeProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _document_types_document_services_document_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../document-types/document-services/document.services */
      "Zz1j");
      /* harmony import */


      var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/employee.service */
      "qp47");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _skill_category_skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../skill-category/skillCategory-service/skillCategory-api.service */
      "fuoZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/utilities/utilities.service */
      "cnwL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["familyId"];

      function EmployeeProfileComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r74.bioListData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Employee Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r76.showAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_8_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r78.showEducationDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Education Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_9_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r80.uploadedDocumentList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Upload Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_10_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r82.bankDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bank Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_11_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r84.showWorkList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Skill Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_13_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r86.getFamilyDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Family Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_14_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r88.payrollListData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Payroll Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_15_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r91);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r90.listSkillLanguage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Language Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_16_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r92.employeeLeaveDataList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Leave Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_li_17_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r94.getEmployeeIdProofsList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Identity Proofs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_p_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.errMsg);
        }
      }

      function EmployeeProfileComponent_p_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.successMsg);
        }
      }

      function EmployeeProfileComponent_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var company_r96 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("selected", company_r96.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", company_r96._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r96.name, " ");
        }
      }

      function EmployeeProfileComponent_div_41_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r97.message, " ");
        }
      }

      function EmployeeProfileComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_41_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r97 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.employeeBasicForm.get("companyId").hasError(validation_r97.type) && (ctx_r16.employeeBasicForm.get("companyId").dirty || ctx_r16.employeeBasicForm.get("companyId").touched));
        }
      }

      function EmployeeProfileComponent_option_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var branch_r100 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", branch_r100._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", branch_r100.name, " ");
        }
      }

      function EmployeeProfileComponent_div_53_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r101.message, " ");
        }
      }

      function EmployeeProfileComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_53_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r101 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r18.employeeBasicForm.get("branchId").hasError(validation_r101.type) && (ctx_r18.employeeBasicForm.get("branchId").dirty || ctx_r18.employeeBasicForm.get("branchId").touched));
        }
      }

      function EmployeeProfileComponent_option_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r104 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", department_r104._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", department_r104.title, " ");
        }
      }

      function EmployeeProfileComponent_div_65_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r105.message, " ");
        }
      }

      function EmployeeProfileComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_65_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r105 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r20.employeeBasicForm.get("departmentId").hasError(validation_r105.type) && (ctx_r20.employeeBasicForm.get("departmentId").dirty || ctx_r20.employeeBasicForm.get("departmentId").touched));
        }
      }

      function EmployeeProfileComponent_option_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobProfile_r108 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", jobProfile_r108._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", jobProfile_r108.positionName, " - ", jobProfile_r108.payBasis, " ");
        }
      }

      function EmployeeProfileComponent_div_78_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r109.message, " ");
        }
      }

      function EmployeeProfileComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_78_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r109 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.employeeBasicForm.get("jobProfileId").hasError(validation_r109.type) && (ctx_r22.employeeBasicForm.get("jobProfileId").dirty || ctx_r22.employeeBasicForm.get("jobProfileId").touched));
        }
      }

      function EmployeeProfileComponent_div_88_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r112.message, " ");
        }
      }

      function EmployeeProfileComponent_div_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_88_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r112 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.employeeBasicForm.get("name").hasError(validation_r112.type) && (ctx_r23.employeeBasicForm.get("name").dirty || ctx_r23.employeeBasicForm.get("name").touched));
        }
      }

      function EmployeeProfileComponent_div_98_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r115.message, " ");
        }
      }

      function EmployeeProfileComponent_div_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_98_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r115 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r24.employeeBasicForm.get("dob").hasError(validation_r115.type) && (ctx_r24.employeeBasicForm.get("dob").dirty || ctx_r24.employeeBasicForm.get("dob").touched));
        }
      }

      function EmployeeProfileComponent_div_111_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r118.message, " ");
        }
      }

      function EmployeeProfileComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_111_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r118 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r25.employeeBasicForm.get("contactDetails.personal.phone").hasError(validation_r118.type) && (ctx_r25.employeeBasicForm.get("contactDetails.personal.phone").dirty || ctx_r25.employeeBasicForm.get("contactDetails.personal.phone").touched));
        }
      }

      function EmployeeProfileComponent_div_118_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r121.message, " ");
        }
      }

      function EmployeeProfileComponent_div_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_118_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r121 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.employeeBasicForm.get("contactDetails.personal.landLineNum").hasError(validation_r121.type) && (ctx_r26.employeeBasicForm.get("contactDetails.personal.landLineNum").dirty || ctx_r26.employeeBasicForm.get("contactDetails.personal.landLineNum").touched));
        }
      }

      function EmployeeProfileComponent_div_126_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r124.message, " ");
        }
      }

      function EmployeeProfileComponent_div_126_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_126_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r124 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.employeeBasicForm.get("contactDetails.personal.email").hasError(validation_r124.type) && (ctx_r27.employeeBasicForm.get("contactDetails.personal.email").dirty || ctx_r27.employeeBasicForm.get("contactDetails.personal.email").touched));
        }
      }

      function EmployeeProfileComponent_div_141_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r127.message, " ");
        }
      }

      function EmployeeProfileComponent_div_141_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_141_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r127 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.employeeBasicForm.get("contactDetails.official.phone").hasError(validation_r127.type) && (ctx_r28.employeeBasicForm.get("contactDetails.official.phone").dirty || ctx_r28.employeeBasicForm.get("contactDetails.official.phone").touched));
        }
      }

      function EmployeeProfileComponent_div_148_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r130.message, " ");
        }
      }

      function EmployeeProfileComponent_div_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_148_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r130 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.employeeBasicForm.get("contactDetails.official.landLineNum").hasError(validation_r130.type) && (ctx_r29.employeeBasicForm.get("contactDetails.official.landLineNum").dirty || ctx_r29.employeeBasicForm.get("contactDetails.official.landLineNum").touched));
        }
      }

      function EmployeeProfileComponent_div_156_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r133.message, " ");
        }
      }

      function EmployeeProfileComponent_div_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_156_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r133 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.employeeBasicForm.get("contactDetails.official.email").hasError(validation_r133.type) && (ctx_r30.employeeBasicForm.get("contactDetails.official.email").dirty || ctx_r30.employeeBasicForm.get("contactDetails.official.email").touched));
        }
      }

      function EmployeeProfileComponent_div_161_Template(rf, ctx) {
        if (rf & 1) {
          var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_161_Template_input_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r137);

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r136.oncheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0 Assign TL/Manager ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_162_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tl_r139 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("selected", tl_r139.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", tl_r139._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tl_r139.name, " ");
        }
      }

      function EmployeeProfileComponent_div_162_Template(rf, ctx) {
        if (rf & 1) {
          var _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_div_162_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r141);

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r140.onSelect($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select TL/Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_162_option_4_Template, 2, 3, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r32.companyTlList);
        }
      }

      function EmployeeProfileComponent_div_163_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r142.message, " ");
        }
      }

      function EmployeeProfileComponent_div_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_163_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r142 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.employeeBasicForm.get("companyId").hasError(validation_r142.type) && (ctx_r33.employeeBasicForm.get("companyId").dirty || ctx_r33.employeeBasicForm.get("companyId").touched));
        }
      }

      function EmployeeProfileComponent_div_170_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Employee Bio Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Height:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Weight:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Color:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mole Identification:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Multiple Handicapped:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Multiple Handicapped Percent:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Eye Power:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Blood Group:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Physical Description Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Hospital Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Mental Illness Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Treatment Duration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Treatment Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Mental Description Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Hospital Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Account Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Physical Illness Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Treatment Duration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Treatment Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_170_li_3_Template_button_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r148);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r147.bioEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\xA0Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r146 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.moleIdentification);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.multipleHandicapped);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.multipleHandicappedPercent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.eyePower);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.bloodGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.mental.hospitalName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.mental.mentalIllnessName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.mental.treatmentDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.mental.treatmentName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.physical.hospitalName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.physical.illnessStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.physical.physicalIllnessName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.physical.treatmentDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r146.illness.physical.treatmentName);
        }
      }

      function EmployeeProfileComponent_div_170_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmployeeProfileComponent_div_170_li_3_Template, 92, 17, "li", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r35.biodata);
        }
      }

      function EmployeeProfileComponent_p_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.errMsg);
        }
      }

      function EmployeeProfileComponent_p_174_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r37.successMsg);
        }
      }

      function EmployeeProfileComponent_form_175_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r154.message, " ");
        }
      }

      function EmployeeProfileComponent_form_175_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_175_div_13_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r154 = ctx.$implicit;

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r149.employeeBioForm.get("bio.height").hasError(validation_r154.type) && (ctx_r149.employeeBioForm.get("bio.height").dirty || ctx_r149.employeeBioForm.get("bio.height").touched));
        }
      }

      function EmployeeProfileComponent_form_175_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r157.message, " ");
        }
      }

      function EmployeeProfileComponent_form_175_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_175_div_21_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r157 = ctx.$implicit;

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r150.employeeBioForm.get("bio.weight").hasError(validation_r157.type) && (ctx_r150.employeeBioForm.get("bio.weight").dirty || ctx_r150.employeeBioForm.get("bio.weight").touched));
        }
      }

      function EmployeeProfileComponent_form_175_div_64_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r160.message, " ");
        }
      }

      function EmployeeProfileComponent_form_175_div_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_175_div_64_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r160 = ctx.$implicit;

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r151.employeeBioForm.get("bio.bloodGroup").hasError(validation_r160.type) && (ctx_r151.employeeBioForm.get("bio.bloodGroup").dirty || ctx_r151.employeeBioForm.get("bio.bloodGroup").touched));
        }
      }

      function EmployeeProfileComponent_form_175_div_85_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r164.message, " ");
        }
      }

      function EmployeeProfileComponent_form_175_div_85_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_175_div_85_div_7_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r164 = ctx.$implicit;

          var ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r163.employeeBioForm.get("bio.handicappedPercent").hasError(validation_r164.type) && (ctx_r163.employeeBioForm.get("bio.handicappedPercent").dirty || ctx_r163.employeeBioForm.get("bio.handicappedPercent").touched));
        }
      }

      function EmployeeProfileComponent_form_175_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "HANDICAPPED PERCENTAGE:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmployeeProfileComponent_form_175_div_85_div_7_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r152.bioValidationMessage.handicappedPercent);
        }
      }

      function EmployeeProfileComponent_form_175_div_99_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r168.message, " ");
        }
      }

      function EmployeeProfileComponent_form_175_div_99_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_175_div_99_div_7_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r168 = ctx.$implicit;

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r167.employeeBioForm.get("bio.multipleHandicappedPercent").hasError(validation_r168.type) && (ctx_r167.employeeBioForm.get("bio.multipleHandicappedPercent").dirty || ctx_r167.employeeBioForm.get("bio.multipleHandicappedPercent").touched));
        }
      }

      function EmployeeProfileComponent_form_175_div_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MULTIPLE HANDICAPPED PERCENTAGE:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmployeeProfileComponent_form_175_div_99_div_7_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r153.bioValidationMessage.multipleHandicappedPercent);
        }
      }

      function EmployeeProfileComponent_form_175_Template(rf, ctx) {
        if (rf & 1) {
          var _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_form_175_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172);

            var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r171.employeeBioFormData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Employee Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "HEIGHT:\xA0(In Feet and Inches)\xA0(for eg: 3'11\")");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmployeeProfileComponent_form_175_div_13_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "WEIGHT:\xA0(In Kgs only)\xA0(for eg: 30kg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, EmployeeProfileComponent_form_175_div_21_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "SKIN COMPLEXION:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "----- Select Skin Complexion----- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "optgroup", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Light");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "optgroup", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "White");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "optgroup", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "optgroup", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Olive");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "optgroup", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Brown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "optgroup", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Very Dark");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "MOLE IDENTIFICATION OR OTHER MARKS:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "BLOOD GROUP:\xA0(for eg: AB-)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, EmployeeProfileComponent_form_175_div_64_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "EYE POWER:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "HANDICAPPED:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "select", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_form_175_Template_select_change_78_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172);

            var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r173.check($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "----- Select Option----- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "option", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, EmployeeProfileComponent_form_175_div_85_Template, 8, 1, "div", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "MULTIPLE HANDICAPPED:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "select", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_form_175_Template_select_change_92_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172);

            var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r174.checked($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "----- Select Option----- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "option", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, EmployeeProfileComponent_form_175_div_99_Template, 8, 1, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Physical Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "PHYSICHAL ILLNESS IF ANY PROLONG MORE THAN A WEEK :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "NAME OF THE TREATMENT TAKEN:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "HOSPITAL NAME:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "input", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "DURATION OF TREATMENT:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "CURRENT STATUS OF ILLNESS:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Mental Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "MENTAL ILLNESS IF ANY PROLONG MORE THAN A WEEK :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "input", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "NAME OF THE TREATMENT TAKEN:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "input", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "HOSPITAL NAME:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "input", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "DURATION OF TREATMENT:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "input", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "CURRENT STATUS OF ILLNESS:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "input", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_form_175_Template_button_click_177_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172);

            var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx_r175.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_form_175_Template_button_click_179_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r172);

            var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r176.bioCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r38.employeeBioForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r38.employeeBioForm.get("bio"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r38.bioValidationMessage.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r38.bioValidationMessage.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r38.bioValidationMessage.bloodGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.shown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r38.employeeBioForm.get("bio.illness.physical"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r38.employeeBioForm.get("bio.illness.mental"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r38.employeeBioForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r38.employeeBioButton, " ");
        }
      }

      function EmployeeProfileComponent_div_180_tbody_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_180_tbody_15_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r180);

            var list_r178 = ctx.$implicit;

            var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r179.addressEdit(list_r178._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_180_tbody_15_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r180);

            var list_r178 = ctx.$implicit;

            var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r181.removeAddess(list_r178._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r178 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r178.doorNum, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r178.zipcode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r178.streetName1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r178.addressType, "");
        }
      }

      function EmployeeProfileComponent_div_180_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Door Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Zip code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Street Name 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Address Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_div_180_tbody_15_Template, 16, 4, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r40.addressList);
        }
      }

      function EmployeeProfileComponent_div_181_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r182.errMsg);
        }
      }

      function EmployeeProfileComponent_div_181_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r183.successMsg);
        }
      }

      function EmployeeProfileComponent_div_181_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var addressType_r186 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", addressType_r186);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", addressType_r186, " ");
        }
      }

      function EmployeeProfileComponent_div_181_div_56_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r187.message, " ");
        }
      }

      function EmployeeProfileComponent_div_181_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_181_div_56_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r187 = ctx.$implicit;

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r185.employeeAddressForm.get("address.zipcode").hasError(validation_r187.type) && (ctx_r185.employeeAddressForm.get("address.zipcode").dirty || ctx_r185.employeeAddressForm.get("address.zipcode").touched));
        }
      }

      function EmployeeProfileComponent_div_181_Template(rf, ctx) {
        if (rf & 1) {
          var _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_181_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_181_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_181_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r191);

            var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r190.addressForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "DOOR NO :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "LANDMARK :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "ADDRESS TYPE :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "----- Choose Address Type----- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EmployeeProfileComponent_div_181_option_31_Template, 2, 2, "option", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "STREET NAME 1 :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "STREET NAME 2 :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "ZIPCODE :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, EmployeeProfileComponent_div_181_div_56_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "CITY :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "STATE :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_181_Template_button_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r191);

            var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r192.cancleAddForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r41.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r41.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r41.employeeAddressForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r41.titleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r41.employeeAddressForm.get("address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.validationMessageZip.zipcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r41.employeeAddressForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r41.buttonName, " ");
        }
      }

      function EmployeeProfileComponent_button_182_Template(rf, ctx) {
        if (rf & 1) {
          var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_button_182_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r194);

            var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r193.addNewAddress();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_184_tbody_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_184_tbody_15_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198);

            var list_r196 = ctx.$implicit;

            var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r197.educationEdit(list_r196._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_184_tbody_15_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r198);

            var list_r196 = ctx.$implicit;

            var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r199.removeEducation(list_r196._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r196 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r196 == null ? null : list_r196.courseName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r196 == null ? null : list_r196.instituteName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r196 == null ? null : list_r196.passOutYear, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r196 == null ? null : list_r196.scoredPercent, "");
        }
      }

      function EmployeeProfileComponent_div_184_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Course Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Institute Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Pass Out Year ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Scored Percentage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_div_184_tbody_15_Template, 16, 4, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r43.educationData);
        }
      }

      function EmployeeProfileComponent_div_185_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r200.errMsg);
        }
      }

      function EmployeeProfileComponent_div_185_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r201.successMsg);
        }
      }

      function EmployeeProfileComponent_div_185_div_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r205.message, " ");
        }
      }

      function EmployeeProfileComponent_div_185_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_185_div_32_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r205 = ctx.$implicit;

          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r202.empEducationForm.get("educationalDetails.passOutYear").hasError(validation_r205.type) && (ctx_r202.empEducationForm.get("educationalDetails.passOutYear").dirty || ctx_r202.empEducationForm.get("educationalDetails.passOutYear").touched));
        }
      }

      function EmployeeProfileComponent_div_185_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var courseStatus_r208 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", courseStatus_r208);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", courseStatus_r208, " ");
        }
      }

      function EmployeeProfileComponent_div_185_div_58_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r209.message, " ");
        }
      }

      function EmployeeProfileComponent_div_185_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_185_div_58_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r209 = ctx.$implicit;

          var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r204.empEducationForm.get("educationalDetails.scoredPercent").hasError(validation_r209.type) && (ctx_r204.empEducationForm.get("educationalDetails.scoredPercent").dirty || ctx_r204.empEducationForm.get("educationalDetails.scoredPercent").touched));
        }
      }

      function EmployeeProfileComponent_div_185_Template(rf, ctx) {
        if (rf & 1) {
          var _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_185_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_185_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_185_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r213);

            var ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r212.educationForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "COURSE NAME:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "INSTITUTE NAME:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "PASS OUT YEAR:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EmployeeProfileComponent_div_185_div_32_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "STATUS:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "select", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "----- Select Course Status----- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, EmployeeProfileComponent_div_185_option_42_Template, 2, 2, "option", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "DESCRIPTION OF COURSE:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "SCORED PERCENTAGE:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EmployeeProfileComponent_div_185_div_58_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_185_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r213);

            var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r214.cancleEducation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r44.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r44.empEducationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r44.education);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r44.empEducationForm.get("educationalDetails"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.validationMessageEducation.passOutYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.educationalStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r44.validationMessageEducation.scoredPercent);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r44.empEducationForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r44.educationBtnadd, " ");
        }
      }

      function EmployeeProfileComponent_a_186_Template(rf, ctx) {
        if (rf & 1) {
          var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_a_186_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r216);

            var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r215.addNewEducation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_189_tbody_18_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_189_tbody_18_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_189_tbody_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_189_tbody_18_td_4_Template, 2, 0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmployeeProfileComponent_div_189_tbody_18_td_5_Template, 2, 0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_div_189_tbody_18_Template_input_change_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r223);

            var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r222.onFileSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_189_tbody_18_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r223);

            var uploadedDocuments_r218 = ctx.$implicit;
            var i_r219 = ctx.index;

            var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r224.uploadDocs(uploadedDocuments_r218._id, i_r219 + 1, "Add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var uploadedDocuments_r218 = ctx.$implicit;
          var i_r219 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", uploadedDocuments_r218.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", uploadedDocuments_r218.isRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !uploadedDocuments_r218.isRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "documnetDocImage", i_r219 + 1, "");
        }
      }

      function EmployeeProfileComponent_div_189_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Upload Employee Enlisted Documents");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Document Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Upload Doc Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EmployeeProfileComponent_div_189_tbody_18_Template, 12, 4, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r46.uploadedDocumentDetails);
        }
      }

      function EmployeeProfileComponent_div_190_tbody_20_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_190_tbody_20_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_190_tbody_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_190_tbody_20_td_4_Template, 2, 0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmployeeProfileComponent_div_190_tbody_20_td_5_Template, 2, 0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_190_tbody_20_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r231);

            var existingDocuments_r226 = ctx.$implicit;

            var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r230.updateDocuments(existingDocuments_r226.documentTypeId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_190_tbody_20_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r231);

            var existingDocuments_r226 = ctx.$implicit;

            var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r232.openImage(existingDocuments_r226.file);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_190_tbody_20_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r231);

            var existingDocuments_r226 = ctx.$implicit;

            var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r233.deleteDocument(existingDocuments_r226.documentTypeId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var existingDocuments_r226 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", existingDocuments_r226.documentTypeName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", existingDocuments_r226.isRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !existingDocuments_r226.isRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", existingDocuments_r226.fileSize, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 6, existingDocuments_r226.metaData.createdAt, "fullDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 9, existingDocuments_r226.metaData.createdAt, "shortTime"), "");
        }
      }

      function EmployeeProfileComponent_div_190_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Uploaded Documents Enlisted");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Document Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "File Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Uploaded At");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, EmployeeProfileComponent_div_190_tbody_20_Template, 21, 12, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r47.employeeDocumentsDetails);
        }
      }

      function EmployeeProfileComponent_div_192_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Offical Bank Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Bank Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Account Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Account Place:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Account Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Remarks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Personal Bank Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Bank Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Account Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Account Place:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Account Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Remarks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_192_li_3_Template_button_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r237);

            var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r236.editBankDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\xA0Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r235 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.official.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.official.accountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.official.accountPlace);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.official.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.official.remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.personal.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.personal.accountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.personal.accountPlace);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.personal.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r235.personal.remarks);
        }
      }

      function EmployeeProfileComponent_div_192_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmployeeProfileComponent_div_192_li_3_Template, 58, 10, "li", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r48.bankListData);
        }
      }

      function EmployeeProfileComponent_p_194_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r49.errMsg);
        }
      }

      function EmployeeProfileComponent_p_196_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r50.successMsg);
        }
      }

      function EmployeeProfileComponent_form_197_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r242.message, " ");
        }
      }

      function EmployeeProfileComponent_form_197_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_197_div_15_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r242 = ctx.$implicit;

          var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r238.bankDetailsForm.get("bankDetails.official.name").hasError(validation_r242.type) && (ctx_r238.bankDetailsForm.get("bankDetails.official.name").dirty || ctx_r238.bankDetailsForm.get("bankDetails.official.name").touched));
        }
      }

      function EmployeeProfileComponent_form_197_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r245.message, " ");
        }
      }

      function EmployeeProfileComponent_form_197_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_197_div_24_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r245 = ctx.$implicit;

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r239.bankDetailsForm.get("bankDetails.official.accountNum").hasError(validation_r245.type) && (ctx_r239.bankDetailsForm.get("bankDetails.official.accountNum").dirty || ctx_r239.bankDetailsForm.get("bankDetails.official.accountNum").touched));
        }
      }

      function EmployeeProfileComponent_form_197_div_63_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r248.message, " ");
        }
      }

      function EmployeeProfileComponent_form_197_div_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_197_div_63_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r248 = ctx.$implicit;

          var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r240.bankDetailsForm.get("bankDetails.personal.name").hasError(validation_r248.type) && (ctx_r240.bankDetailsForm.get("bankDetails.personal.name").dirty || ctx_r240.bankDetailsForm.get("bankDetails.personal.name").touched));
        }
      }

      function EmployeeProfileComponent_form_197_div_72_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r251.message, " ");
        }
      }

      function EmployeeProfileComponent_form_197_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_197_div_72_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r251 = ctx.$implicit;

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r241.bankDetailsForm.get("bankDetails.personal.accountNum").hasError(validation_r251.type) && (ctx_r241.bankDetailsForm.get("bankDetails.personal.accountNum").dirty || ctx_r241.bankDetailsForm.get("bankDetails.personal.accountNum").touched));
        }
      }

      function EmployeeProfileComponent_form_197_Template(rf, ctx) {
        if (rf & 1) {
          var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_form_197_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r255);

            var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r254.bankDetailsAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Official Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_form_197_div_15_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Account Number:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EmployeeProfileComponent_form_197_div_24_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Account Origin:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Remarks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Account Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "input", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_form_197_Template_input_change_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r255);

            var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r256.sameAsOfficialDetails(ctx_r256.actionBox);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Same as Official Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h5", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Personal Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Name:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, EmployeeProfileComponent_form_197_div_63_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Account Number:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, EmployeeProfileComponent_form_197_div_72_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Account Origin:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Remarks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Account Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_form_197_Template_button_click_92_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r255);

            var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx_r257.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_form_197_Template_button_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r255);

            var ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r258.bankDetailsCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r51.bankDetailsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r51.bankDetailsForm.get("bankDetails.official"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r51.validationMessageBank.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r51.validationMessageBank.accountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r51.actionBox);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r51.bankDetailsForm.get("bankDetails.personal"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r51.validationMessageBank.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r51.validationMessageBank.accountNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r51.bankDetailsForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r51.bannBtn);
        }
      }

      function EmployeeProfileComponent_div_199_tbody_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_199_tbody_15_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r262);

            var list_r260 = ctx.$implicit;

            var ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r261.expriceneEdit(list_r260._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_199_tbody_15_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r262);

            var list_r260 = ctx.$implicit;

            var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r263.removeExpeience(list_r260._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r260 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r260 == null ? null : list_r260.companyName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r260 == null ? null : list_r260.experienceYears, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r260 == null ? null : list_r260.designation, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r260 == null ? null : list_r260.remarks, "");
        }
      }

      function EmployeeProfileComponent_div_199_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Company Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Experience Years ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Designation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Remarks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_div_199_tbody_15_Template, 16, 4, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r52.exprienceListData);
        }
      }

      function EmployeeProfileComponent_div_200_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r264.errMsg);
        }
      }

      function EmployeeProfileComponent_div_200_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r265.successMsg);
        }
      }

      function EmployeeProfileComponent_div_200_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r268.message, " ");
        }
      }

      function EmployeeProfileComponent_div_200_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_200_div_30_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r268 = ctx.$implicit;

          var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r266.workExperienceForm.get("workExperiences.experienceYears").hasError(validation_r268.type) && (ctx_r266.workExperienceForm.get("workExperiences.experienceYears").dirty || ctx_r266.workExperienceForm.get("workExperiences.experienceYears").touched));
        }
      }

      function EmployeeProfileComponent_div_200_option_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var reliving_r271 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", reliving_r271);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", reliving_r271, " ");
        }
      }

      function EmployeeProfileComponent_div_200_Template(rf, ctx) {
        if (rf & 1) {
          var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_200_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_200_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_200_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r273);

            var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r272.addWorkExp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Company Name:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Designation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Experience Years:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, EmployeeProfileComponent_div_200_div_30_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Job Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Reliving Reason:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Reliving Is:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "-----Choose Reliving Status-----");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, EmployeeProfileComponent_div_200_option_52_Template, 2, 2, "option", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Remarks:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_200_Template_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r273);

            var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx_r274.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_200_Template_button_click_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r273);

            var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r275.cancleExperience();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r53.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r53.workExperienceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.exprienceTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r53.workExperienceForm.get("workExperiences"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r53.validationMessageExper.experienceYears);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r53.relivingIs);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r53.workExperienceForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.experienceBtn);
        }
      }

      function EmployeeProfileComponent_a_201_Template(rf, ctx) {
        if (rf & 1) {
          var _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_a_201_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r277);

            var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r276.addExperience();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_206_tbody_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_206_tbody_17_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r281);

            var list_r279 = ctx.$implicit;

            var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r280.updateValidation(list_r279._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_206_tbody_17_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r281);

            var list_r279 = ctx.$implicit;

            var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r282.deleteFamilyDetails(list_r279._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r279 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r279.relation, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r279.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r279.education, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r279.occupation, "");
        }
      }

      function EmployeeProfileComponent_div_206_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Relation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Occupation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmployeeProfileComponent_div_206_tbody_17_Template, 16, 4, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r56.familyDetailsList);
        }
      }

      function EmployeeProfileComponent_div_207_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r283.errMsg);
        }
      }

      function EmployeeProfileComponent_div_207_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r284.successMsg);
        }
      }

      function EmployeeProfileComponent_div_207_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var relationMember_r288 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", relationMember_r288);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", relationMember_r288, " ");
        }
      }

      function EmployeeProfileComponent_div_207_div_33_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r289.message, " ");
        }
      }

      function EmployeeProfileComponent_div_207_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_207_div_33_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r289 = ctx.$implicit;

          var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r286.addRelationForm.get("family.members.age").hasError(validation_r289.type) && (ctx_r286.addRelationForm.get("family.members.age").dirty || ctx_r286.addRelationForm.get("family.members.age").touched));
        }
      }

      function EmployeeProfileComponent_div_207_option_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r292 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", list_r292);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r292);
        }
      }

      function EmployeeProfileComponent_div_207_Template(rf, ctx) {
        if (rf & 1) {
          var _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_207_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_207_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_207_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r294);

            var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r293.addFamilyDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select Relation:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "-----Choose Relation Type-----");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EmployeeProfileComponent_div_207_option_18_Template, 2, 2, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Age:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EmployeeProfileComponent_div_207_div_33_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Occupation:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Education:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Annually Income:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Family Type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "-----Choose Family Type-----");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, EmployeeProfileComponent_div_207_option_59_Template, 2, 2, "option", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_207_Template_button_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r294);

            var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx_r295.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_207_Template_button_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r294);

            var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r296.cancelValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r57.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r57.title, " Family Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r57.addRelationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r57.addRelationForm.get("family"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r57.addRelationForm.get("family.members"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.relation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.validationMessageFamily.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.familyType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r57.addRelationForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r57.addfamilyBtn);
        }
      }

      function EmployeeProfileComponent_button_208_Template(rf, ctx) {
        if (rf & 1) {
          var _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_button_208_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r298);

            var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r297.showAddFamilyForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Add Family");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_210_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Payroll Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "CTC:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CTC Effective From Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "CTC Effective To Date:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Earned Leave Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Grade Rule:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Paid Leave Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Basic Pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Payment Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_210_li_3_Template_button_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r302);

            var ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r301.payrollSettingEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\xA0Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r300 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r300.ctc);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, list_r300.ctcEffectiveFromDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, list_r300.ctcEffectiveToDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r300.earnedLeaveBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r300.gradeRuleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r300.paidLeaveBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r300.basicPay);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r300.mode);
        }
      }

      function EmployeeProfileComponent_div_210_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, EmployeeProfileComponent_div_210_li_3_Template, 47, 12, "li", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r59.payrollData);
        }
      }

      function EmployeeProfileComponent_p_212_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r60.errMsg);
        }
      }

      function EmployeeProfileComponent_p_214_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r61.successMsg);
        }
      }

      function EmployeeProfileComponent_form_215_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r311.message, " ");
        }
      }

      function EmployeeProfileComponent_form_215_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_215_div_15_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r311 = ctx.$implicit;

          var ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r303.payrollDetailsForm.get("payroll.ctc").hasError(validation_r311.type) && (ctx_r303.payrollDetailsForm.get("payroll.ctc").dirty || ctx_r303.payrollDetailsForm.get("payroll.ctc").touched));
        }
      }

      function EmployeeProfileComponent_form_215_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r314.message, " ");
        }
      }

      function EmployeeProfileComponent_form_215_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_215_div_24_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r314 = ctx.$implicit;

          var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r304.payrollDetailsForm.get("payroll.ctcEffectiveFromDate").hasError(validation_r314.type) && (ctx_r304.payrollDetailsForm.get("payroll.ctcEffectiveFromDate").dirty || ctx_r304.payrollDetailsForm.get("payroll.ctcEffectiveFromDate").touched));
        }
      }

      function EmployeeProfileComponent_form_215_div_33_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r317.message, " ");
        }
      }

      function EmployeeProfileComponent_form_215_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_215_div_33_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r317 = ctx.$implicit;

          var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r305.payrollDetailsForm.get("payroll.ctcEffectiveToDate").hasError(validation_r317.type) && (ctx_r305.payrollDetailsForm.get("payroll.ctcEffectiveToDate").dirty || ctx_r305.payrollDetailsForm.get("payroll.ctcEffectiveToDate").touched));
        }
      }

      function EmployeeProfileComponent_form_215_div_40_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r320.message, " ");
        }
      }

      function EmployeeProfileComponent_form_215_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_215_div_40_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r320 = ctx.$implicit;

          var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r306.payrollDetailsForm.get("payroll.paidLeaveBalance").hasError(validation_r320.type) && (ctx_r306.payrollDetailsForm.get("payroll.paidLeaveBalance").dirty || ctx_r306.payrollDetailsForm.get("payroll.paidLeaveBalance").touched));
        }
      }

      function EmployeeProfileComponent_form_215_option_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gradeRule_r323 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", gradeRule_r323._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](gradeRule_r323.title);
        }
      }

      function EmployeeProfileComponent_form_215_div_59_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r324.message, " ");
        }
      }

      function EmployeeProfileComponent_form_215_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_215_div_59_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r324 = ctx.$implicit;

          var ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r308.payrollDetailsForm.get("payroll.gradeRule").hasError(validation_r324.type) && (ctx_r308.payrollDetailsForm.get("payroll.gradeRule").dirty || ctx_r308.payrollDetailsForm.get("payroll.gradeRule").touched));
        }
      }

      function EmployeeProfileComponent_form_215_div_68_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r327.message, " ");
        }
      }

      function EmployeeProfileComponent_form_215_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_form_215_div_68_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r327 = ctx.$implicit;

          var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r309.payrollDetailsForm.get("payroll.basicPay").hasError(validation_r327.type) && (ctx_r309.payrollDetailsForm.get("payroll.basicPay").dirty || ctx_r309.payrollDetailsForm.get("payroll.basicPay").touched));
        }
      }

      function EmployeeProfileComponent_form_215_option_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var paymentMode_r330 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", paymentMode_r330);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", paymentMode_r330, " ");
        }
      }

      function EmployeeProfileComponent_form_215_Template(rf, ctx) {
        if (rf & 1) {
          var _r332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_form_215_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r332);

            var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r331.payrollAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Payroll Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "CTC:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_form_215_div_15_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "CTC Effective From Date:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, EmployeeProfileComponent_form_215_div_24_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "CTC Effective To Date:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, EmployeeProfileComponent_form_215_div_33_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Paid Leave Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EmployeeProfileComponent_form_215_div_40_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Earned Leave Balance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Grade Rule:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "select", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "-----Choose Grade Rule Name-----");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, EmployeeProfileComponent_form_215_option_58_Template, 2, 2, "option", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, EmployeeProfileComponent_form_215_div_59_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Basic Pay:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, EmployeeProfileComponent_form_215_div_68_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Payment Mode:\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "select", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "option", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "----- Choose Payment Mode----- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, EmployeeProfileComponent_form_215_option_78_Template, 2, 2, "option", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_form_215_Template_button_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r332);

            var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx_r333.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_form_215_Template_button_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r332);

            var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r334.backPayrollBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r62.payrollDetailsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r62.payrollDetailsForm.get("payroll"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollValidations.ctc);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollValidations.ctcEffectiveFromDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollValidations.ctcEffectiveToDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollValidations.paidLeaveBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollGradeRuleList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollValidations.gradeRule);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.payrollValidations.paidLeaveBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r62.paymentType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r62.payrollDetailsForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r62.payrollButton);
        }
      }

      function EmployeeProfileComponent_div_217_tbody_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_217_tbody_13_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r338);

            var list_r336 = ctx.$implicit;

            var ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r337.languageSkillEdit(list_r336._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r336 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r336.toRead, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r336.toSpeak, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r336.toWrite, "");
        }
      }

      function EmployeeProfileComponent_div_217_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Read ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Speak ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Write ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmployeeProfileComponent_div_217_tbody_13_Template, 11, 3, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r63.LanguageData);
        }
      }

      function EmployeeProfileComponent_div_218_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r339.errMsg);
        }
      }

      function EmployeeProfileComponent_div_218_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r340.successMsg);
        }
      }

      function EmployeeProfileComponent_div_218_Template(rf, ctx) {
        if (rf & 1) {
          var _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_218_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_218_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_218_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342);

            var ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r341.addLanguageSkill();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Speak:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Read:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Write:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_218_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342);

            var ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx_r343.scroll(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_218_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r342);

            var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r344.cancelLanguageSkill();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r64.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r64.languageSkillForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r64.languageSkillTitle, " Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r64.languageSkillForm.get("languageSkills"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r64.languageSkillForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r64.skillLanguageBtn);
        }
      }

      function EmployeeProfileComponent_button_219_Template(rf, ctx) {
        if (rf & 1) {
          var _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_button_219_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r346);

            var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r345.addLanguageSkillList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_224_tbody_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_224_tbody_17_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r350);

            var list_r348 = ctx.$implicit;

            var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r349.leaveSettingUpdateDetails(list_r348._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r348 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, list_r348.startDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, list_r348.endDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r348.leavePerMonth, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r348.reason, "");
        }
      }

      function EmployeeProfileComponent_div_224_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Start Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "End Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Leave Per Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Reason");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmployeeProfileComponent_div_224_tbody_17_Template, 15, 8, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r67.employeeLeaveData);
        }
      }

      function EmployeeProfileComponent_div_225_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r351.errMsg);
        }
      }

      function EmployeeProfileComponent_div_225_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r352.successMsg);
        }
      }

      function EmployeeProfileComponent_div_225_div_18_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r356.message, " ");
        }
      }

      function EmployeeProfileComponent_div_225_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_225_div_18_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r356 = ctx.$implicit;

          var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r353.employeeLeaveDetailsForm.get("startDate").hasError(validation_r356.type) && (ctx_r353.employeeLeaveDetailsForm.get("startDate").dirty || ctx_r353.employeeLeaveDetailsForm.get("startDate").touched));
        }
      }

      function EmployeeProfileComponent_div_225_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r359.message, " ");
        }
      }

      function EmployeeProfileComponent_div_225_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_225_div_27_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r359 = ctx.$implicit;

          var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r354.employeeLeaveDetailsForm.get("leavePerMonth").hasError(validation_r359.type) && (ctx_r354.employeeLeaveDetailsForm.get("leavePerMonth").dirty || ctx_r354.employeeLeaveDetailsForm.get("leavePerMonth").touched));
        }
      }

      function EmployeeProfileComponent_div_225_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r362.message, " ");
        }
      }

      function EmployeeProfileComponent_div_225_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_225_div_37_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r362 = ctx.$implicit;

          var ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r355.employeeLeaveDetailsForm.get("endDate").hasError(validation_r362.type) && (ctx_r355.employeeLeaveDetailsForm.get("endDate").dirty || ctx_r355.employeeLeaveDetailsForm.get("endDate").touched));
        }
      }

      function EmployeeProfileComponent_div_225_Template(rf, ctx) {
        if (rf & 1) {
          var _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_225_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_225_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_225_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r366);

            var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r365.addLeaveSetting();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Start Date :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 228);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, EmployeeProfileComponent_div_225_div_18_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Leave Per Month :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EmployeeProfileComponent_div_225_div_27_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "End Date :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 230);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, EmployeeProfileComponent_div_225_div_37_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Reason :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_225_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r366);

            var ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r367.leaveSettingCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r68.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r68.employeeLeaveDetailsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r68.leaveSettingHeadingButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r68.validationMessageLeaveSettings.startDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r68.validationMessageLeaveSettings.leavePerMonth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r68.validationMessageLeaveSettings.endDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r68.employeeLeaveDetailsForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r68.leaveButton, " ");
        }
      }

      function EmployeeProfileComponent_button_226_Template(rf, ctx) {
        if (rf & 1) {
          var _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_button_226_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r369);

            var ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r368.addNewLeaveSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Leave Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function EmployeeProfileComponent_div_231_tbody_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r373 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_231_tbody_15_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r373);

            var list_r371 = ctx.$implicit;

            var ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r372.idProofsSettingUpdateDetails(list_r371._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_231_tbody_15_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r373);

            var list_r371 = ctx.$implicit;

            var ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r374.deleteIdentityProofs(list_r371._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r371 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r371.identityName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", list_r371.identityNum, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, list_r371.expiryDate), "");
        }
      }

      function EmployeeProfileComponent_div_231_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "thead", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Identity Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Identity Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Expiry Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_div_231_tbody_15_Template, 15, 5, "tbody", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r71.idProofsData);
        }
      }

      function EmployeeProfileComponent_div_232_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r375.errMsg);
        }
      }

      function EmployeeProfileComponent_div_232_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r376.successMsg);
        }
      }

      function EmployeeProfileComponent_div_232_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r380.message, " ");
        }
      }

      function EmployeeProfileComponent_div_232_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_232_div_19_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r380 = ctx.$implicit;

          var ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r377.idProofsDetailsForm.get("identityProofs.identityName").hasError(validation_r380.type) && (ctx_r377.idProofsDetailsForm.get("identityProofs.identityName").dirty || ctx_r377.idProofsDetailsForm.get("identityProofs.identityName").touched));
        }
      }

      function EmployeeProfileComponent_div_232_div_28_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r383.message, " ");
        }
      }

      function EmployeeProfileComponent_div_232_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_232_div_28_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r383 = ctx.$implicit;

          var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r378.idProofsDetailsForm.get("identityProofs.identityNum").hasError(validation_r383.type) && (ctx_r378.idProofsDetailsForm.get("identityProofs.identityNum").dirty || ctx_r378.idProofsDetailsForm.get("identityProofs.identityNum").touched));
        }
      }

      function EmployeeProfileComponent_div_232_div_51_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r386 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", validation_r386.message, " ");
        }
      }

      function EmployeeProfileComponent_div_232_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EmployeeProfileComponent_div_232_div_51_div_1_Template, 2, 1, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var validation_r386 = ctx.$implicit;

          var ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r379.idProofsDetailsForm.get("identityProofs.expiryDate").hasError(validation_r386.type) && (ctx_r379.idProofsDetailsForm.get("identityProofs.expiryDate").dirty || ctx_r379.idProofsDetailsForm.get("identityProofs.expiryDate").touched));
        }
      }

      function EmployeeProfileComponent_div_232_Template(rf, ctx) {
        if (rf & 1) {
          var _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmployeeProfileComponent_div_232_p_2_Template, 3, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EmployeeProfileComponent_div_232_p_4_Template, 3, 1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_div_232_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r390);

            var ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r389.addIdProofs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Identity Name :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 232);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EmployeeProfileComponent_div_232_div_19_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Identity Number :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 233);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, EmployeeProfileComponent_div_232_div_28_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Authority Name :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 234);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Issue Place :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 235);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Expiry Date :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 236);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, EmployeeProfileComponent_div_232_div_51_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Remarks :\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 237);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 238);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_div_232_Template_button_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r390);

            var ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r391.idProofsSettingsCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r72.successMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r72.idProofsDetailsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r72.idProofsDetailsForm.get("identityProofs"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r72.idProofsHeadingButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r72.validationMessageIdProofsSettings.identityName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r72.validationMessageIdProofsSettings.identityNum);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r72.validationMessageIdProofsSettings.expiryDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r72.idProofsDetailsForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r72.idProofsButton, " ");
        }
      }

      function EmployeeProfileComponent_button_233_Template(rf, ctx) {
        if (rf & 1) {
          var _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_button_233_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r393);

            var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r392.addNewIdProofsSettings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Identity Proofs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var EmployeeProfileComponent = /*#__PURE__*/function () {
        function EmployeeProfileComponent(fb, docApi, api, ngZone, router, route, skillApi, http, util) {
          _classCallCheck(this, EmployeeProfileComponent);

          this.fb = fb;
          this.docApi = docApi;
          this.api = api;
          this.ngZone = ngZone;
          this.router = router;
          this.route = route;
          this.skillApi = skillApi;
          this.http = http;
          this.util = util;
          this.companyListData = new Array();
          this.branchList = new Array();
          this.departmentList = new Array();
          this.jobProfileList = new Array();
          this.successMessage = false;
          this.errorMsg = false;
          this.address = ['Current', 'Permanent', 'Others'];
          this.familyType = ['Joint', 'Nuclear Family'];
          this.familyDetailsList = new Array();
          this.divShow = false;
          this.formShow = false;
          this.showAddFamilyButton = true;
          this.educationBtn = true;
          this.imageSrc = ''; // upload Document variable

          this.actionBox = false;
          this.relivingIs = ['Formal', 'InFormal']; // Work Experience Reliving type

          this.basicDetail = 'Submit';
          this.checkbox = false;
          this.relation = ["Mother", "Father", "Brother", "Sister", "Uncle", "Aunt", "Spouse", "Son", "Daughter"]; // Family relation array

          this.items = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // this one is use for testing only

          this.openval = 0;
          this.shown = false;
          this.show = false;
          this.addAddess = true; // add address div show and hide

          this.buttonName = 'Submit';
          this.button = true;
          this.addressMsg = true;
          this.EducationForm = true; // show and hidde EducationForm

          this.addessBtn = true;
          this.listMesg = true;
          this.workExperience = true;
          this.listExprience = true; // exprience list flag

          this.addExpbtn = true;
          this.showCard = {}; // use in bank list show

          this.bankList = true; // value in bank list or not in bank list flag

          this.bankForm = true; // bank form show and hidde

          this.payrollList = true; // flag of payroll list

          this.payrollForm = true; // flag of payroll form

          this.paymentType = ['Cash', 'Cheque', 'Tansfer to Bank Account'];
          this.bioForm = true; //bio form flag

          this.bioList = true; // bio list glag

          this.languageSkillList = false; // language skill list flag

          this.lsnguageSkillForm = false; // language skill form flag

          this.addLanguageBtn = true; // btn flag for add language

          this.percentErrorMsg = 'Percent is Required';
          this.basicDetailsData = [];
          this.educationalStatus = ['Completed', 'Pursuing'];
          this.employeeLeaveList = true; // flag of leave list

          this.employeeLeaveForm = true; // flag of leave form

          this.leaveSettingButton = true;
          this.idProofsList = true; // flag of Id's list

          this.idProofsForm = true; // flag of Id's form

          this.idProofsSettingButton = true;
          this.bannBtn = 'Submit';
          this.experienceBtn = 'Submit';
          this.educationBtnadd = 'Submit';
          this.addfamilyBtn = 'Submit';
          this.skillLanguageBtn = 'Submit';
          this.payrollButton = 'Submit';
          this.leaveButton = 'Submit';
          this.idProofsButton = 'Submit'; // Validations For Employee Bio

          this.bioValidationMessage = {
            'height': [{
              type: 'pattern',
              message: 'Height value is not acceptable.'
            }],
            'weight': [{
              type: 'pattern',
              message: 'Weight value is not acceptable.'
            }],
            'bloodGroup': [{
              type: 'pattern',
              message: 'Blood Group value is not acceptable.'
            }],
            'handicappedPercent': [{
              type: 'pattern',
              message: 'Percentage is not acceptable.'
            }, {
              type: 'required',
              message: 'Percentage is Required.'
            }],
            'multipleHandicappedPercent': [{
              type: 'pattern',
              message: 'Percentage value is not acceptable.'
            }, {
              type: 'required',
              message: 'Percentage is Required.'
            }]
          }; //Address Validation Message

          this.validationMessageZip = {
            'zipcode': [{
              type: 'required',
              message: 'Zipcode is Required'
            }, {
              type: 'pattern',
              message: 'Invalid Zipcode'
            }, {
              type: 'minlength',
              message: 'Not a Zipcode '
            }, {
              type: 'maxlength',
              message: 'Zipcode is too large'
            }]
          };
          this.validationMessageEducation = {
            'passOutYear': [{
              type: 'required',
              message: 'Pass Out Year is Required'
            }, {
              type: 'pattern',
              message: 'Invalid Year'
            }],
            'scoredPercent': [{
              type: 'required',
              message: 'Percentage is Required'
            }, {
              type: 'pattern',
              message: 'Invalid Percentage'
            }]
          }; //Method for show validation message

          this.validationMessage = {
            'name': [{
              type: 'required',
              message: 'Name is required'
            }],
            'departmentId': [{
              type: 'required',
              message: 'Department Name is required'
            }],
            'branchId': [{
              type: 'required',
              message: 'Branch Name is required'
            }],
            'companyId': [{
              type: 'required',
              message: 'Company Name is required'
            }],
            'jobProfileId': [{
              type: 'required',
              message: 'Job Profile Name is required'
            }],
            'dob': [{
              type: 'required',
              message: 'Birthday Date is required'
            }],
            'email': [{
              type: 'required',
              message: 'Email is required'
            }, {
              type: 'pattern',
              message: 'Enter a valid email'
            }],
            'phone': [{
              type: 'required',
              message: 'Phone number is required'
            }, {
              type: 'pattern',
              message: 'Invalid Phone Number'
            }, {
              type: 'minlength',
              message: 'Not a phone number '
            }, {
              type: 'maxlength',
              message: 'Phone no. is too large'
            }],
            'landLineNum': [{
              type: 'pattern',
              message: 'Invalid Landline Number'
            }, {
              type: 'minlength',
              message: 'Not a Landline number '
            }, {
              type: 'maxlength',
              message: 'Landline no. is too large'
            }]
          };
          this.validationMessageFamily = {
            'age': [{
              type: 'pattern',
              message: 'Invalid Age'
            }]
          };
          this.validationMessageExper = {
            'experienceYears': [{
              type: 'pattern',
              message: 'Invalid Experience Years'
            }, {
              type: 'max',
              message: 'Experience Years should be less than 40'
            }]
          };
          this.validationMessageBank = {
            'name': [{
              type: 'required',
              message: 'Bank Name is Required'
            }],
            'accountNum': [{
              type: 'required',
              message: 'Account Number is Required'
            }, {
              type: 'maxlength',
              message: 'Account Number is maximum of 16 digits'
            }, {
              type: 'pattern',
              message: 'Account Number is not Acceptable'
            }]
          };
          this.payrollValidations = {
            'ctc': [{
              type: 'required',
              message: 'CTC Value is Required'
            }, {
              type: 'pattern',
              message: 'CTC Value is not Acceptable'
            }],
            'ctcEffectiveFromDate': [{
              type: 'required',
              message: 'Selcted Field is Required'
            }],
            'ctcEffectiveToDate': [{
              type: 'required',
              message: 'Selcted Field is Required'
            }],
            'paidLeaveBalance': [{
              type: 'pattern',
              message: 'Paid Leave Balance is not Acceptable'
            }],
            'gradeRule': [{
              type: 'gradeRule',
              message: 'Selcted Field is Required'
            }],
            'basicPay': [{
              type: 'required',
              message: 'Basic Pay Value is Required'
            }, {
              type: 'pattern',
              message: 'Basic Pay Value is not Acceptable'
            }]
          };
          this.validationMessageLeaveSettings = {
            'startDate': [{
              type: 'required',
              message: 'Start Date is Required'
            }],
            'endDate': [{
              type: 'required',
              message: 'End Date is Required'
            }],
            'leavePerMonth': [{
              type: 'required',
              message: 'Leave Per Month is Required'
            }]
          };
          this.validationMessageIdProofsSettings = {
            'identityName': [{
              type: 'required',
              message: 'Identity Name is Required'
            }],
            'identityNum': [{
              type: 'required',
              message: 'Identity Number is Required'
            }],
            'authorityName': [{
              type: 'required',
              message: 'Authority Name is Required'
            }],
            'issuePlace': [{
              type: 'required',
              message: 'Issue Place is Required'
            }],
            'expiryDate': [{
              type: 'required',
              message: 'Expiry Date is Required'
            }],
            'remarks': [{
              type: 'required',
              message: 'Remarks is Required'
            }]
          };
          this.uploadedDocumentDetails = [];
          this.employeeDocumentsDetails = [];
        }

        _createClass(EmployeeProfileComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            document.getElementById('headerCompanyDropDown').removeAttribute('disabled');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.snapShotParam = this.route.snapshot.paramMap.get("employeeId");
            this.snapShotParam === null ? this.basicDetail = 'Submit' : this.basicDetail = 'Update';
            this.getTlList();
            this.existingBasicDetails();
            this.formDataValidation();
            this.listDocument();
            this.getList();
            this.addressValidation();
            this.educationDetailsValidation();
            this.empBioValidation();
            this.bankDataValidation(); // this function use in upload bank details for validation check

            this.experienceValidation(); // this function use in data validation for work Expeience

            this.skillCate(); // this function use in skill categray

            this.addMemberValidation(); // this function use for check validation of add member relation

            this.payrollValidation(); // this.payollvalidation function to fill value

            this.languageSkillValidation(); // check validation

            this.leaveSettingForm();
            this.uploadImageForm();
            this.idProofsSettingForm();
            document.getElementById('headerCompanyDropDown').setAttribute('disabled', 'disabled');
          }
          /**
           * Basic Form Functionality Start From Here
           * Basic Form Validation While Adding an Employee
           */

        }, {
          key: "formDataValidation",
          value: function formDataValidation() {
            this.employeeBasicForm = this.fb.group({
              departmentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              jobProfileId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              contactDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                personal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                  landLineNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')])),
                  email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
                }),
                official: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                  landLineNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')])),
                  email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
                })
              }),
              officialEmailAsLoginEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
              isTL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
              tlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          }
          /**
           * Functionality While Updating Employee Basic Details
           * Validation While Updating Employee Basic Details
           */

        }, {
          key: "existingBasicDetails",
          value: function existingBasicDetails() {
            var _this10 = this;

            this.api.employeeList(this.snapShotParam).subscribe(function (data) {
              if (data.status === 'success') {
                _this10.basicDetailsData.push(data.data);

                for (var i = 0; i < _this10.basicDetailsData.length; i++) {
                  if (_this10.snapShotParam != null) {
                    _this10.onSelect(_this10.basicDetailsData[i].companyId);

                    _this10.getDepartmentListData(_this10.basicDetailsData[i].branchId);
                  }

                  _this10.employeeBasicForm = _this10.fb.group({
                    departmentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].departmentId),
                    branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].branchId),
                    jobProfileId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].jobProfileId),
                    companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].companyId),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].employeeName),
                    dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].dob),
                    contactDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      personal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].personalContactNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                        landLineNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].personalPhoneNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')])),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].personalEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
                      }),
                      official: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].officialContactNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                        landLineNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].officialPhoneNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')])),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this10.basicDetailsData[i].officialEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]))
                      })
                    }),
                    officialEmailAsLoginEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                    isTL: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                    tlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                  });
                }
              }
            });
          }
          /**
           * Calling for API for Submit Data and Update Date
           * Clean Reactive Form Validation was Added here
           */

        }, {
          key: "employeeForm",
          value: function employeeForm() {
            var _this11 = this;

            try {
              // Clean Form
              var cleanBasicDetailForm = this.util.cleanFormLevelTwo(this.employeeBasicForm);

              if (this.snapShotParam === null) {
                if (this.employeeBasicForm.valid) {
                  this.api.submitData(cleanBasicDetailForm.value).subscribe(function (data) {
                    if (data.status == "success" || data.status === 200) {
                      _this11.successMessage = true;
                      _this11.errorMsg = false;
                      _this11.successMsg = data.message;
                      _this11.hidden = data.data.employeeDetails._id;
                      setTimeout(function () {
                        _this11.ngZone.run(function () {
                          return _this11.router.navigateByUrl("/pages/employee-wizard/employee-profile/".concat(_this11.hidden));
                        });

                        _this11.handleErrroMessage();
                      }, 1500);
                    } else if (data.status == "error" || data.status === 404) {
                      _this11.errorMsg = true;
                      _this11.successMessage = false;
                      _this11.errMsg = data.message;
                      setTimeout(function () {
                        _this11.handleErrroMessage();
                      }, 1500);
                    }
                  });
                }
              } else {
                if (this.employeeBasicForm.valid) {
                  this.api.updateEmployeeBasicDetails(cleanBasicDetailForm.value, this.snapShotParam).subscribe(function (data) {
                    if (data.status == "success" || data.status === 200) {
                      _this11.successMessage = true;
                      _this11.errorMsg = false;
                      _this11.successMsg = data.message;
                      setTimeout(function () {
                        _this11.handleErrroMessage();
                      }, 1500);
                    } else if (data.status == "error" || data.status === 404) {
                      _this11.errorMsg = true;
                      _this11.successMessage = false;
                      _this11.errMsg = data.message;
                      setTimeout(function () {
                        _this11.handleErrroMessage();
                      }, 1500);
                    }
                  });
                }
              }
            } catch (err) {
              console.log(err);
            }
          } // checkbox for officail details as personal details

        }, {
          key: "sameAsPersonalDetails",
          value: function sameAsPersonalDetails(action) {
            if (action === false) {
              this.actionBox = true;
            } else if (action === true) {
              this.actionBox = false;
            }

            if (this.actionBox === true) {
              this.existingPersonalDetails = this.employeeBasicForm.value.contactDetails.personal;
              this.employeeBasicForm.get('contactDetails.official.phone').setValue(this.existingPersonalDetails.phone);
              this.employeeBasicForm.get('contactDetails.official.landLineNum').setValue(this.existingPersonalDetails.landLineNum);
              this.employeeBasicForm.get('contactDetails.official.email').setValue(this.existingPersonalDetails.email);
            } else if (this.actionBox === false) {
              this.employeeBasicForm.get('contactDetails.official.phone').setValue('');
              this.employeeBasicForm.get('contactDetails.official.landLineNum').setValue('');
              this.employeeBasicForm.get('contactDetails.official.email').setValue('');
            }
          } // Whole Functionality Ends Here For Basic Details!!

          /**
           * Employee Bio Details Form Functionality Start from here
           * Validation While Updating Employee Bio Details
           */

        }, {
          key: "empBioValidation",
          value: function empBioValidation() {
            try {
              this.employeeBioForm = this.fb.group({
                bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  height: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]'((\s?)(-?)(\s?)([0-9]|(1[0-1]))\")?$/)])),
                  weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{2,3} ?kg$/)])),
                  color: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  moleIdentification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(A|B|AB|O)[+-]$/)])),
                  eyePower: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  handicapped: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                  handicappedPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i)])),
                  multipleHandicapped: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
                  multipleHandicappedPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i)])),
                  illness: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    physical: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      physicalIllnessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      treatmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      hospitalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      treatmentDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      illnessStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    }),
                    mental: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      mentalIllnessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      treatmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      hospitalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      treatmentDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                      illnessStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                    })
                  })
                })
              });
            } catch (err) {
              console.log(err.message);
            }
          }
          /**
           * Functionality while updating Employee Bio Details
           * Employee Bio Details Form Validation
           */

        }, {
          key: "bioEdit",
          value: function bioEdit() {
            this.bioList = false;
            this.bioForm = true;
            this.shown = this.biodata[0].multipleHandicapped;
            this.show = this.biodata[0].handicapped;

            for (var i = 0; i < this.biodata.length; i++) {
              this.employeeBioForm = this.fb.group({
                bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  height: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].height, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[1-9]'((\s?)(-?)(\s?)([0-9]|(1[0-1]))\")?$/)])),
                  weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].weight, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{2,3} ?kg$/)])),
                  color: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].color),
                  moleIdentification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].moleIdentification),
                  bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].bloodGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(A|B|AB|O)[+-]$/)])),
                  eyePower: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].eyePower),
                  handicapped: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].handicapped),
                  handicappedPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].handicappedPercent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i)])),
                  multipleHandicapped: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].multipleHandicapped),
                  multipleHandicappedPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].multipleHandicappedPercent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i)])),
                  illness: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    physical: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      physicalIllnessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.physical.physicalIllnessName),
                      treatmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.physical.treatmentName),
                      hospitalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.physical.hospitalName),
                      treatmentDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.physical.treatmentDuration),
                      illnessStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.physical.illnessStatus)
                    }),
                    mental: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      mentalIllnessName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.mental.mentalIllnessName),
                      treatmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.mental.treatmentName),
                      hospitalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.mental.hospitalName),
                      treatmentDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.mental.treatmentDuration),
                      illnessStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.biodata[i].illness.mental.illnessStatus)
                    })
                  })
                })
              });
            }
          }
          /**bio list data function configuration */

        }, {
          key: "bioListData",
          value: function bioListData() {
            var _this12 = this;

            this.api.bioDataList(this.snapShotParam).subscribe(function (data) {
              if (data.status === 200 || data.status === 'success') {
                if (Object.keys(data.data).length === 3) {
                  _this12.bioList = false;
                  _this12.bioForm = true;
                  _this12.employeeBioButton = 'Submit';
                } else {
                  _this12.employeeBioButton = 'Update';
                  _this12.bioList = true;
                  _this12.bioForm = false;
                  _this12.biodata = data.data;
                  _this12.biodata = Array.of(_this12.biodata);
                }
              }
            });
          }
        }, {
          key: "employeeBioFormData",
          value: function employeeBioFormData() {
            var _this13 = this;

            try {
              var cleanBioData = this.util.cleanFormLevelThree(this.employeeBioForm);

              if (this.employeeBioButton === 'Submit') {
                this.api.submitBioData(cleanBioData.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this13.successMessage = true;
                    _this13.errorMsg = false;
                    _this13.successMsg = data.message;
                    setTimeout(function () {
                      _this13.bioListData();

                      _this13.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this13.errorMsg = true;
                    _this13.successMessage = false;
                    _this13.errMsg = data.message;
                    setTimeout(function () {
                      _this13.handleErrroMessage();
                    }, 2000);
                  }
                });
              } else if (this.employeeBioButton === 'Update') {
                this.api.updateBio(cleanBioData.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this13.successMessage = true;
                    _this13.errorMsg = false;
                    _this13.successMsg = data.message;
                    setTimeout(function () {
                      _this13.bioListData();

                      _this13.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this13.errorMsg = true;
                    _this13.successMessage = false;
                    _this13.errMsg = data.message;
                    setTimeout(function () {
                      _this13.handleErrroMessage();
                    }, 2000);
                  }
                });
              }
            } catch (err) {
              console.log(err);
            }
          }
          /**
           *
           * @Function setValidators(),updateValueAndValidity(),clearValidators()
           * Predefined Function Of Reactive Form
           */

        }, {
          key: "check",
          value: function check(value) {
            var dynamicValidation = {
              'dynamic': [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i)]
            };

            if (value === "true") {
              if (this.employeeBioButton === 'Update') {
                this.employeeBioForm.get('bio.handicappedPercent').setValue('');
                this.employeeBioForm.get('bio.handicappedPercent').setValidators(dynamicValidation['dynamic']);
                this.employeeBioForm.get('bio.handicappedPercent').updateValueAndValidity();
              } else {
                this.show = true;
                this.employeeBioForm.get('bio.handicapped').setValue(true);
                this.employeeBioForm.get('bio.handicappedPercent').setValidators(dynamicValidation['dynamic']);
                this.employeeBioForm.get('bio.handicappedPercent').updateValueAndValidity();
              }
            } else {
              this.show = false;
              this.employeeBioForm.get('bio.handicapped').setValue(false);
              this.employeeBioForm.get('bio.handicappedPercent').clearValidators();
              this.employeeBioForm.get('bio.handicappedPercent').updateValueAndValidity();
            }
          }
          /**
           *
           * @Function setValidators(),updateValueAndValidity(),clearValidators()
           * Predefined Function Of Reactive Form
           */

        }, {
          key: "checked",
          value: function checked(value) {
            var dynamicValidation = {
              'dynamic': [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i)]
            };

            if (value === "true") {
              if (this.employeeBioButton === 'Update') {
                this.employeeBioForm.get('bio.multipleHandicappedPercent').setValue('');
                this.employeeBioForm.get('bio.multipleHandicappedPercent').setValidators(dynamicValidation['dynamic']);
                this.employeeBioForm.get('bio.multipleHandicappedPercent').updateValueAndValidity();
              } else {
                this.shown = true;
                this.employeeBioForm.get('bio.multipleHandicapped').setValue(true);
                this.employeeBioForm.get('bio.multipleHandicappedPercent').setValidators(dynamicValidation['dynamic']);
                this.employeeBioForm.get('bio.multipleHandicappedPercent').updateValueAndValidity();
              }
            } else {
              this.shown = false;
              this.employeeBioForm.get('bio.multipleHandicapped').setValue(false);
              this.employeeBioForm.get('bio.multipleHandicappedPercent').clearValidators();
              this.employeeBioForm.get('bio.multipleHandicappedPercent').updateValueAndValidity();
            }
          }
          /**Update address and show address*/

          /**
           * Address Form Functionality Start Fom Here
           * Address Form Validation Functionality
           */

        }, {
          key: "addressValidation",
          value: function addressValidation() {
            try {
              this.employeeAddressForm = this.fb.group({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  doorNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  streetName1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  streetName2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  // zipcode: new FormControl(''),
                  zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')])),
                  district: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  addressType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Current')
                })
              });
            } catch (err) {
              console.log(err.message);
            }
          } // Address List Functionality

        }, {
          key: "showAddress",
          value: function showAddress() {
            var _this14 = this;

            this.api.oldAddress(this.snapShotParam).subscribe(function (data) {
              if (data.status === 'success' || data.status === 200) {
                if (data.data.length == 0 || data.status == 'error' || data.state == 400) {
                  _this14.titleName = "Add Address";
                  _this14.addessBtn = false;
                  _this14.addAddess = true;
                  _this14.addressMsg = false;
                } else {
                  _this14.addAddess = false;
                  _this14.addessBtn = true;
                  _this14.addressList = data.data;
                  _this14.addressMsg = true;
                }
              }
            });
          } // Address driver function

        }, {
          key: "addNewAddress",
          value: function addNewAddress() {
            this.employeeAddressForm.reset();
            this.addessBtn = false;
            this.titleName = "Add Address";
            this.buttonName = "Submit";
            this.addAddess = true;
            this.addressId = ' ';
          } // Calling API for Add And Update Employee Address

        }, {
          key: "addressForm",
          value: function addressForm() {
            var _this15 = this;

            try {
              var cleanAddressForm = this.util.cleanFormLevelOne(this.employeeAddressForm);

              if (this.addressId == " " || this.addressId === null || this.addressId === undefined) {
                this.api.submitAddress(cleanAddressForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this15.successMessage = true;
                    _this15.errorMsg = false;
                    _this15.successMsg = data.message;
                    setTimeout(function () {
                      _this15.showAddress();

                      _this15.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this15.errorMsg = true;
                    _this15.successMessage = false;
                    _this15.errMsg = data.message;
                    setTimeout(function () {
                      _this15.handleErrroMessage();
                    });
                  }
                });
              } else {
                this.api.updateAddess(cleanAddressForm.value, this.snapShotParam, this.addressId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this15.previousValue = data.data;
                    _this15.successMessage = true;
                    _this15.errorMsg = false;
                    _this15.successMsg = data.message;
                    setTimeout(function () {
                      _this15.showAddress();

                      _this15.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this15.errorMsg = true;
                    _this15.successMessage = false;
                    _this15.errMsg = data.message;
                    setTimeout(function () {
                      _this15.handleErrroMessage();
                    });
                  }
                });
                this.addressId = "";
              }
            } catch (err) {
              console.log(err);
            }
          }
          /**
           * Employee Address Update Functionality
           * Employee Address Fom Validation
           */

        }, {
          key: "addressEdit",
          value: function addressEdit(id) {
            this.titleName = "Update Address";
            this.buttonName = "Update";
            this.addressId = id;
            this.addAddess = true;
            this.addessBtn = true;
            this.addressList;

            for (var i = 0; i < this.addressList.length; i++) {
              if (this.addressList[i]._id === this.addressId) {
                this.employeeAddressForm = this.fb.group({
                  address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    doorNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].doorNum),
                    streetName1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].streetName1),
                    streetName2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].streetName2),
                    landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].landmark),
                    zipcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].zipcode),
                    district: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].district),
                    state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.addressList[i].state),
                    addressType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Current')
                  })
                });
              }
            }
          }
        }, {
          key: "cancleAddForm",
          value: function cancleAddForm() {
            this.addressId = " ";
            this.addAddess = false;
            this.addessBtn = true;
          } //Delete Employee Address

        }, {
          key: "removeAddess",
          value: function removeAddess(addressId) {
            var _this16 = this;

            var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
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
                _this16.api.deleteAddress(_this16.snapShotParam, addressId).subscribe(function (data) {
                  swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                  _this16.showAddress();
                });
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your data is safe', 'error');
              }
            });
          } // Employee Address Whole Functinality Ends Here
          //Method for job profile list

        }, {
          key: "getJobProfile",
          value: function getJobProfile(companyId) {
            var _this17 = this;

            try {
              this.api.getJobProfileListData(companyId).subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this17.jobProfileList = data.data;
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          } //For Form value and validation

        }, {
          key: "educationDetailsValidation",
          value: function educationDetailsValidation() {
            try {
              this.empEducationForm = this.fb.group({
                educationalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  courseName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  instituteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  passOutYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(19|20)\d{2}$/)])),
                  status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  scoredPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]))
                })
              });
            } catch (err) {
              console.log(err.message);
            }
          } //Method for get company list

        }, {
          key: "getList",
          value: function getList() {
            var _this18 = this;

            try {
              this.api.getCompanyData().subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this18.companyListData = data.company;
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          } //Method for Show branch list

        }, {
          key: "showBranchList",
          value: function showBranchList(companyId) {
            var _this19 = this;

            try {
              this.api.getBranchListData(companyId).subscribe(function (data) {
                if (data.status === "success" || data.status === 200) {
                  _this19.branch = data.branch.length;
                  _this19.branchList = data.branch;
                }
              });
            } catch (err) {
              console.log(err);
            }
          } //Method for set selected value according to companyId.

        }, {
          key: "onSelect",
          value: function onSelect(companyId) {
            try {
              this.showBranchList(companyId);
              this.getJobProfile(companyId);
            } catch (err) {
              console.log(err);
            }
          }
          /* Method for set selected value according to branchId. */

        }, {
          key: "onClick",
          value: function onClick(branchId) {
            try {
              this.getDepartmentListData(branchId);
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "scroll",
          value: function scroll(element) {
            element.scrollIntoView();
          } // Get DepartmentList

        }, {
          key: "getDepartmentListData",
          value: function getDepartmentListData(branchId) {
            var _this20 = this;

            try {
              this.api.getDepartmentData(branchId).subscribe(function (data) {
                if (data.status === "success" || data.status === 200) {
                  _this20.departmentList = data.department;
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
          /** Upload Document ts file configration start here */

        }, {
          key: "listDocument",
          value: function listDocument() {
            var _this21 = this;

            try {
              this.docApi.documentData().subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this21.docData = data.data;
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();

            if (!file.type.match(pattern)) {
              alert('Image Format is not valid');
              return;
            }

            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(file);
          }
        }, {
          key: "_handleReaderLoaded",
          value: function _handleReaderLoaded(e) {
            var reader = e.target;
            this.imageSrc = reader.result;
            this.imagePath = this.imageSrc;
          }
        }, {
          key: "remove",
          value: function remove() {
            alert("Remove button is working");
          }
        }, {
          key: "counter",
          value: function counter(i) {
            return new Array(i);
          }
          /** Upload Document ts file configration End here */

          /** skill category functions */

        }, {
          key: "skillCate",
          value: function skillCate() {
            var _this22 = this;

            this.skillApi.skillCategoryData().subscribe(function (data) {
              if (data.status === 'success' || data.status === 200) {
                _this22.skillValue = data.skillCategory;
              }
            });
          }
          /** skill category functions */

          /** add Family  */

        }, {
          key: "onSelectRelation",
          value: function onSelectRelation(value) {
            this.showForm = value;
          } //add family details form validation

        }, {
          key: "addMemberValidation",
          value: function addMemberValidation() {
            this.addRelationForm = this.fb.group({
              family: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                members: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Father", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                  name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/)])),
                  occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  education: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  income: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                })
              }),
              familyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Joint')
            });
          }
        }, {
          key: "updateValidation",
          value: function updateValidation(familyId) {
            try {
              this.addfamilyBtn = 'Update';
              this.showAddFamilyButton = false;
              this.familyIdValue = familyId;
              this.formShow = true;
              this.title = "Update";

              for (var i = 0; i < this.familyDetailsList.length; i++) {
                if (this.familyDetailsList[i]._id === familyId) {
                  console.log("n", this.familyDetailsList[i]._id);
                  console.log("v", this.familyId);
                  this.addRelationForm = this.fb.group({
                    family: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      members: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyDetailsList[i].relation, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyDetailsList[i].name),
                        age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyDetailsList[i].age, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/)])),
                        occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyDetailsList[i].occupation),
                        education: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyDetailsList[i].education),
                        income: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyDetailsList[i].income)
                      })
                    }),
                    familyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.familyTypeList)
                  });
                }
              }
            } catch (err) {
              console.log(err.message);
            }
          }
          /** add family */
          //Method for onclick on button show form and hide current button

        }, {
          key: "showAddFamilyForm",
          value: function showAddFamilyForm() {
            this.familyIdValue = "";
            this.addfamilyBtn = 'Submit';
            this.formShow = true;
            this.addRelationForm.reset();
            this.title = "Add";
            this.showAddFamilyButton = false;
          } //Function for onclick button for hide form

        }, {
          key: "cancelValue",
          value: function cancelValue() {
            this.formShow = false;
            this.showAddFamilyButton = true;
          } //Method for add and update employee details

        }, {
          key: "addFamilyDetails",
          value: function addFamilyDetails() {
            var _this23 = this;

            this.addfamilyBtn = 'submit';

            try {
              var cleanFamilyForm = this.util.cleanFormLevelThree(this.addRelationForm);
              this.showAddFamilyButton = true;

              if (this.familyId.nativeElement.value === "") {
                this.api.addFamilyMember(cleanFamilyForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === 'success' || data.status === 200) {
                    _this23.successMessage = true;
                    _this23.errorMsg = false;
                    _this23.successMsg = data.message;
                    setTimeout(function () {
                      _this23.getFamilyDetails();

                      _this23.handleErrroMessage();
                    }, 500);

                    _this23.addRelationForm.reset();
                  } else if (data.status === "error" || data.status === 404) {
                    _this23.errorMsg = true;
                    _this23.successMessage = false;
                    _this23.errMsg = data.message;
                    setTimeout(function () {
                      _this23.handleErrroMessage();
                    }, 2000);
                  }
                });
              } else {
                if (this.addRelationForm.valid) {
                  this.api.updateFamilyDetails(cleanFamilyForm.value, this.snapShotParam, this.familyId.nativeElement.value).subscribe(function (data) {
                    if (data.status === "success" || data.status === 200) {
                      _this23.successMessage = true;
                      _this23.errorMsg = false;
                      _this23.successMsg = data.message;
                      setTimeout(function () {
                        _this23.getFamilyDetails();

                        _this23.handleErrroMessage();
                      }, 1000);
                    } else if (data.status === "error" || data.status === 404) {
                      _this23.errorMsg = true;
                      _this23.successMessage = false;
                      _this23.errMsg = data.message;
                      setTimeout(function () {
                        _this23.handleErrroMessage();
                      }, 2000);
                    }
                  });
                }
              }
            } catch (err) {
              console.log(err);
            }
          } //Get family details

        }, {
          key: "getFamilyDetails",
          value: function getFamilyDetails() {
            var _this24 = this;

            try {
              this.formShow = false;
              this.api.getFamilyData(this.snapShotParam).subscribe(function (response) {
                if (response.status === "success" || response.status === 200) {
                  if (response.data.familyDetails.length > 0) {
                    _this24.divShow = true;
                    _this24.familyDetailsList = response.data.familyDetails;
                    _this24.familyTypeList = response.data.familyType;
                  } else if (response.data.familyDetails.length === 0) {
                    _this24.divShow = false;

                    _this24.showAddFamilyForm();
                  }
                } else if (response.status === "error" || response.status === 404) {}
              });
            } catch (err) {
              console.log(err.message);
            }
          } //Method for remove company branch

        }, {
          key: "deleteFamilyDetails",
          value: function deleteFamilyDetails(familyId) {
            var _this25 = this;

            try {
              var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
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
                  _this25.api.removeFamilyDetails(_this25.snapShotParam, familyId).subscribe(function (data) {
                    if (data.status === "success" || data.status === 200) {
                      swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                      _this25.getFamilyDetails();
                    }
                  });
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire('Cancelled', 'Your data is safe', 'error');
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
          /**Update Education details */

        }, {
          key: "showEducationDetails",
          value: function showEducationDetails() {
            var _this26 = this;

            this.api.educationDetails(this.snapShotParam).subscribe(function (data) {
              if (data.status === 'success') {
                if (data.data.length == 0) {
                  _this26.education = "Education-Details";
                  _this26.EducationForm = true;
                  _this26.listMesg = false;
                  _this26.educationBtn = false;
                } else {
                  _this26.EducationForm = false;
                  _this26.educationBtn = true;
                  _this26.educationData = data.data;
                  _this26.listMesg = true;
                }
              } else {
                _this26.errorMsg = true;
              }
            });
          }
        }, {
          key: "switchTypeValidation",
          value: function switchTypeValidation(inputValue) {
            if (inputValue > 0 && inputValue <= 100) {
              this.percentErrorMsg = '';
              this.errorMsgg = '';
            } else if (inputValue.toString().length == 0) {
              this.percentErrorMsg = 'Percent is Required';
              this.errorMsgg = '';
            } else if (inputValue.toString().length > 6) {
              this.percentErrorMsg = 'Percent Value is too Large';
              this.errorMsgg = '';
            } else {
              this.percentErrorMsg = '';
              this.errorMsgg = 'Enter value is not valid';
            }
          }
        }, {
          key: "educationEdit",
          value: function educationEdit(id) {
            this.eduBtn = "Update";
            this.educationBtnadd = 'Update';
            this.education = "Update Education-Details";
            this.educationCurentId = id;
            this.EducationForm = true;
            this.educationData; // const len = Object.keys(this.educationData).length;

            for (var i = 0; i < this.educationData.length; i++) {
              if (this.educationData[i]._id === this.educationCurentId) {
                this.empEducationForm = this.fb.group({
                  educationalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    courseName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.educationData[i].courseName),
                    instituteName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.educationData[i].instituteName),
                    passOutYear: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.educationData[i].passOutYear, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(19|20)\d{2}$/)])),
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.educationData[i].status),
                    description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.educationData[i].description),
                    // scoredPercent: new FormControl(this.educationData[i].scoredPercent),
                    scoredPercent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.educationData[i].scoredPercent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/)]))
                  })
                });
              }
            }
          }
        }, {
          key: "removeEducation",
          value: function removeEducation(id) {
            var _this27 = this;

            var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
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
                _this27.api.removeEducation(_this27.snapShotParam, id).subscribe(function (data) {
                  swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                  _this27.showEducationDetails();
                });
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
              }
            });
          }
        }, {
          key: "addNewEducation",
          value: function addNewEducation() {
            this.eduBtn = "Submit";
            this.educationBtn = false;
            this.education = "Education-Details";
            this.empEducationForm.reset();
            this.EducationForm = true;
            this.educationCurentId = " ";
          }
        }, {
          key: "cancleEducation",
          value: function cancleEducation() {
            this.EducationForm = false;
            this.educationBtn = true;
            this.educationCurentId = " ";
          }
        }, {
          key: "educationForm",
          value: function educationForm() {
            var _this28 = this;

            try {
              var cleanEducationalFormData = this.util.cleanFormLevelOne(this.empEducationForm);

              if (this.educationCurentId == " " || this.educationCurentId === null || this.educationCurentId === undefined) {
                this.api.submitEducationalData(cleanEducationalFormData.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this28.previousValue = data.data;
                    _this28.successMessage = true;
                    _this28.errorMsg = false;
                    _this28.successMsg = data.message;
                    setTimeout(function () {
                      _this28.showEducationDetails();

                      _this28.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this28.errorMsg = true;
                    _this28.successMessage = false;
                    _this28.errMsg = data.message;
                    setTimeout(function () {
                      _this28.handleErrroMessage();
                    }, 2000);
                  }
                });
              } else {
                this.api.updateEducation(cleanEducationalFormData.value, this.snapShotParam, this.educationCurentId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this28.previousValue = data.data;
                    _this28.successMessage = true;
                    _this28.errorMsg = false;
                    _this28.successMsg = data.message;
                    setTimeout(function () {
                      _this28.showEducationDetails();

                      _this28.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this28.errorMsg = true;
                    _this28.successMessage = false;
                    _this28.errMsg = data.message;
                    setTimeout(function () {
                      _this28.handleErrroMessage();
                    }, 2000);
                  }
                });
                this.educationCurentId = "";
              }
            } catch (err) {
              console.log(err.message);
            }
          }
          /**Update Education details */

          /**Update work exprience */

        }, {
          key: "showWorkList",
          value: function showWorkList() {
            var _this29 = this;

            this.api.workExprience(this.snapShotParam).subscribe(function (data) {
              if (data.status === 'success') {
                if (data.data.length == 0) {
                  _this29.exprienceTitle = "Work Experience";
                  _this29.addExpbtn = false;
                  _this29.workExperience = true;
                  _this29.listExprience = false;
                } else {
                  _this29.workExperience = false;
                  _this29.exprienceListData = data.data;
                  _this29.listExprience = true;
                  _this29.addExpbtn = true;
                }
              } else {
                _this29.errorMsg = true;
              }
            });
          }
        }, {
          key: "expriceneEdit",
          value: function expriceneEdit(id) {
            this.exprienceTitle = "Update Experience";
            this.experienceBtn = 'Update';
            this.workExperience = true;
            this.addExpbtn = true;
            this.expCurentId = id;

            for (var i = 0; i < this.exprienceListData.length; i++) {
              if (this.exprienceListData[i]._id === this.expCurentId) {
                this.workExperienceForm = this.fb.group({
                  workExperiences: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].companyName),
                    designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].designation),
                    experienceYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].experienceYears, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(40)])),
                    jobDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].jobDescription),
                    relivingReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].relivingReason),
                    relivingIs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].relivingIs),
                    remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.exprienceListData[i].remarks)
                  })
                });
              }
            }
          }
        }, {
          key: "removeExpeience",
          value: function removeExpeience(id) {
            var _this30 = this;

            var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
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
                _this30.api.removeExprience(_this30.snapShotParam, id).subscribe(function (data) {
                  swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                  _this30.showWorkList();
                });
              } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
              }
            });
          }
        }, {
          key: "cancleExperience",
          value: function cancleExperience() {
            this.workExperience = false;
            this.addExpbtn = true;
          }
        }, {
          key: "addExperience",
          value: function addExperience() {
            this.workExperienceForm.reset();
            this.experienceBtn = 'Submit';
            this.exprienceTitle = "Add Experience";
            this.workExperience = true;
            this.addExpbtn = false;
            this.expCurentId = '';
          }
          /**upload work Experience */

        }, {
          key: "addWorkExp",
          value: function addWorkExp() {
            var _this31 = this;

            try {
              var cleanWorkExperienceForm = this.util.cleanFormLevelOne(this.workExperienceForm);

              if (this.expCurentId == '' || this.expCurentId == null) {
                this.api.experiAdd(cleanWorkExperienceForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this31.successMessage = true;
                    _this31.errorMsg = false;
                    _this31.successMsg = data.message;
                    setTimeout(function () {
                      _this31.showWorkList();

                      _this31.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this31.errorMsg = true;
                    _this31.successMessage = false;
                    _this31.errMsg = data.message;
                    setTimeout(function () {
                      _this31.handleErrroMessage();
                    }, 2000);
                  }
                });
              } else {
                this.api.updateWokExprience(cleanWorkExperienceForm.value, this.snapShotParam, this.expCurentId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this31.successMessage = true;
                    _this31.errorMsg = false;
                    _this31.successMsg = data.message;
                    setTimeout(function () {
                      _this31.showWorkList();

                      _this31.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this31.errorMsg = true;
                    _this31.successMessage = false;
                    _this31.errMsg = data.message;
                    setTimeout(function () {
                      _this31.handleErrroMessage();
                    }, 2000);
                  }
                });
              }
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "experienceValidation",
          value: function experienceValidation() {
            try {
              this.workExperienceForm = this.fb.group({
                workExperiences: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  experienceYears: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(40)])),
                  jobDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  relivingReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  relivingIs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                  remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                })
              });
            } catch (err) {
              console.log(err);
            }
          }
          /** upload work experience */

          /** Update work exprience */

          /**Bank details update delete */

        }, {
          key: "bankDetails",
          value: function bankDetails() {
            var _this32 = this;

            try {
              this.actionBox = false;
              this.api.bankDetailsList(this.snapShotParam).subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this32.lenthoffical = Object.keys(data.data.official).length;
                  _this32.lenthperosnal = Object.keys(data.data.personal).length;

                  if (_this32.lenthoffical == 0 || _this32.lenthperosnal == 0) {
                    _this32.bankList = false;
                    _this32.bankForm = true;

                    _this32.bankDetailsForm.reset();
                  } else {
                    _this32.bankListData = data.data;
                    _this32.bankListData = Array.of(_this32.bankListData);
                    _this32.bankList = true;
                    _this32.bankForm = false;
                  }
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "editBankDetails",
          value: function editBankDetails() {
            this.bankForm = true;
            this.bankList = false;
            this.bannBtn = 'Update';
            this.bankListData;

            for (var i = 0; i < this.bankListData.length; i++) {
              this.bankDetailsForm = this.fb.group({
                bankDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  official: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.name),
                    accountNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.accountNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)])),
                    accountPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.accountPlace),
                    accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.accountType),
                    debitCardNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.debitCardNum),
                    debitCardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.debitCardType),
                    remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].official.remarks)
                  }),
                  personal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.name),
                    accountNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.accountNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)])),
                    accountPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.accountPlace),
                    accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.accountType),
                    debitCardNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.debitCardNum),
                    debitCardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.debitCardType),
                    remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.bankListData[i].personal.remarks)
                  })
                })
              });
            }
          }
          /** Upload Banke details file configration start */

        }, {
          key: "sameAsOfficialDetails",
          value: function sameAsOfficialDetails(action) {
            if (action === false) {
              this.actionBox = true;
            } else if (action === true) {
              this.actionBox = false;
            }

            if (this.actionBox === true) {
              this.existingBankDetails = this.bankDetailsForm.value.bankDetails.official;
              this.bankDetailsForm.get('bankDetails.personal.name').setValue(this.existingBankDetails.name);
              this.bankDetailsForm.get('bankDetails.personal.accountNum').setValue(this.existingBankDetails.accountNum);
              this.bankDetailsForm.get('bankDetails.personal.accountPlace').setValue(this.existingBankDetails.accountPlace);
              this.bankDetailsForm.get('bankDetails.personal.accountType').setValue(this.existingBankDetails.accountType);
              this.bankDetailsForm.get('bankDetails.personal.remarks').setValue(this.existingBankDetails.remarks);
            } else if (this.actionBox === false) {
              this.bankDetailsForm.get('bankDetails.personal.name').setValue('');
              this.bankDetailsForm.get('bankDetails.personal.accountNum').setValue('');
              this.bankDetailsForm.get('bankDetails.personal.accountPlace').setValue('');
              this.bankDetailsForm.get('bankDetails.personal.accountType').setValue('');
              this.bankDetailsForm.get('bankDetails.personal.remarks').setValue('');
            }
          }
        }, {
          key: "bankDetailsAdd",
          value: function bankDetailsAdd() {
            var _this33 = this;

            try {
              var cleanBankForm = this.util.cleanFormLevelTwo(this.bankDetailsForm);
              this.api.employBank(cleanBankForm.value, this.snapShotParam).subscribe(function (data) {
                if (data.status === "success" || data.status === 200) {
                  _this33.successMessage = true;
                  _this33.errorMsg = false;
                  _this33.successMsg = data.message;
                  setTimeout(function () {
                    _this33.bankDetails();

                    _this33.handleErrroMessage();
                  }, 1500);
                } else if (data.status === "error" || data.status === 404) {
                  _this33.errorMsg = true;
                  _this33.successMessage = false;
                  _this33.errMsg = data.message;
                  setTimeout(function () {
                    _this33.bankDetails();

                    _this33.handleErrroMessage();
                  }, 2000);
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "bankDetailsCancel",
          value: function bankDetailsCancel() {
            this.bankDetails();
          }
        }, {
          key: "bankDataValidation",
          value: function bankDataValidation() {
            try {
              this.bankDetailsForm = this.fb.group({
                bankDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  official: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    accountNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)])),
                    accountPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    debitCardNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    debitCardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                  }),
                  personal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    accountNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)])),
                    accountPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    debitCardNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    debitCardType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                  })
                })
              });
            } catch (err) {
              console.log(err);
            }
          }
          /** upload bank details file configration end */

          /**Bank details update delete */

          /** payroll add details configratin  start*/

        }, {
          key: "payrollValidation",
          value: function payrollValidation() {
            this.payrollDetailsForm = this.fb.group({
              payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                ctc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{1,10}(?:\.\d{0,2})?$/)])),
                ctcEffectiveFromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                ctcEffectiveToDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                paidLeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/)])),
                earnedLeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                gradeRule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                basicPay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{1,10}(?:\.\d{0,2})?$/)])),
                mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Cash')
              })
            });
          }
        }, {
          key: "payrollAdd",
          value: function payrollAdd() {
            var _this34 = this;

            try {
              if (this.payrollButton === 'Submit') {
                this.api.payrollDataSubmit(this.payrollDetailsForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this34.successMessage = true;
                    _this34.errorMsg = false;
                    _this34.successMsg = data.message;
                    setTimeout(function () {
                      _this34.payrollListData();

                      _this34.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this34.errorMsg = true;
                    _this34.successMessage = false;
                    _this34.errMsg = data.message;
                    setTimeout(function () {
                      _this34.handleErrroMessage();
                    }, 2000);
                  }
                });
              } else if (this.payrollButton === 'Update') {
                this.api.updatePayrollSettings(this.payrollDetailsForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this34.successMessage = true;
                    _this34.errorMsg = false;
                    _this34.successMsg = data.message;
                    setTimeout(function () {
                      _this34.payrollListData();

                      _this34.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this34.errorMsg = true;
                    _this34.successMessage = false;
                    _this34.errMsg = data.message;
                    setTimeout(function () {
                      _this34.handleErrroMessage();
                    }, 2000);
                  }
                });
              }
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "payrollListData",
          value: function payrollListData() {
            var _this35 = this;

            try {
              this.api.payollDataList(this.snapShotParam).subscribe(function (data) {
                if (data.status === 'success' || data.status === 200) {
                  _this35.gradeRuleList();

                  _this35.payollDataLength = Object.keys(data.data).length;

                  if (_this35.payollDataLength === 2) {
                    _this35.payrollList = false;
                    _this35.payrollForm = true;

                    _this35.payrollDetailsForm.get('payroll.earnedLeaveBalance').setValue(data.data.earnedLeaveBalance);
                  } else {
                    _this35.payrollData = data.data;
                    _this35.payrollData = Array.of(_this35.payrollData);
                    _this35.payrollList = true;
                    _this35.payrollForm = false;
                    _this35.payrollButton = 'Update';

                    _this35.payrollDetailsForm.get('payroll.earnedLeaveBalance').setValue(data.data.earnedLeaveBalance);
                  }
                } else {
                  console.log(data.message);
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Grade Rule List

        }, {
          key: "gradeRuleList",
          value: function gradeRuleList() {
            var _this36 = this;

            try {
              this.api.gradeRuleList().subscribe(function (data) {
                if (data.status === 'success') {
                  _this36.payrollGradeRuleList = data.data;
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "payrollSettingEdit",
          value: function payrollSettingEdit() {
            this.payrollForm = true;
            this.payrollList = false;

            for (var i = 0; i < this.payrollData.length; i++) {
              this.payrollDetailsForm = this.fb.group({
                payroll: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                  ctc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].ctc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{1,10}(?:\.\d{0,2})?$/)])),
                  ctcEffectiveFromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].ctcEffectiveFromDate.substring(0, 10)),
                  ctcEffectiveToDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].ctcEffectiveToDate.substring(0, 10)),
                  paidLeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].paidLeaveBalance, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/)])),
                  earnedLeaveBalance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].earnedLeaveBalance),
                  gradeRule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].gradeRule),
                  basicPay: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].basicPay, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{1,10}(?:\.\d{0,2})?$/)])),
                  mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.payrollData[i].mode)
                })
              });
            }
          }
        }, {
          key: "backPayrollBtn",
          value: function backPayrollBtn() {
            this.payrollForm = false;
            this.payrollList = true;
            this.payrollListData();
          }
          /** payroll add details configration end  */

          /** employee Leave Settings details configratin  start*/

        }, {
          key: "employeeLeaveDataList",
          value: function employeeLeaveDataList() {
            var _this37 = this;

            try {
              this.api.leaveEmployeeDataList(this.snapShotParam).subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.data.leaveSettings.length == 0) {
                    _this37.employeeLeaveList = false;
                    _this37.employeeLeaveForm = true;
                    _this37.leaveSettingButton = false;
                    _this37.leaveButton = 'Submit';
                    _this37.leaveSettingHeadingButton = "Add Leave Settings"; // this.addLeaveSettingButton = true;
                  } else {
                    _this37.employeeLeaveData = data.data.leaveSettings;
                    _this37.employeeLeaveList = true;
                    _this37.employeeLeaveForm = false;
                    _this37.leaveSettingButton = true;
                    _this37.leaveButton = 'Update'; // this.addLeaveSettingButton = false;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Add Leave Settings

        }, {
          key: "addLeaveSetting",
          value: function addLeaveSetting() {
            var _this38 = this;

            try {
              var cleanLeaveSettingForm = this.util.cleanFormLevelOne(this.employeeLeaveDetailsForm);

              if (this.leaveButton === 'Submit') {
                this.api.addLeaveSettings(cleanLeaveSettingForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success") {
                    _this38.successMessage = true;
                    _this38.errorMsg = false;
                    _this38.successMsg = data.message;
                    setTimeout(function () {
                      _this38.employeeLeaveDataList();

                      _this38.handleErrroMessage();
                    }, 2000);
                  } else if (data.status === "error") {
                    _this38.errorMsg = true;
                    _this38.successMessage = false;
                    _this38.errMsg = data.message;
                    setTimeout(function () {
                      _this38.handleErrroMessage();
                    }, 3000);
                  }
                });
              } else if (this.leaveButton === 'Update') {
                this.api.updateLeaveSettings(cleanLeaveSettingForm.value, this.snapShotParam, this.leaveSettingId).subscribe(function (data) {
                  if (data.status === "success") {
                    _this38.successMessage = true;
                    _this38.errorMsg = false;
                    _this38.successMsg = data.message;
                    setTimeout(function () {
                      _this38.employeeLeaveDataList();

                      _this38.handleErrroMessage();
                    }, 2000);
                  } else if (data.status === "error") {
                    _this38.errorMsg = true;
                    _this38.successMessage = false;
                    _this38.errMsg = data.message;
                    setTimeout(function () {
                      _this38.handleErrroMessage();
                    }, 3000);
                  }
                });
              }
            } catch (err) {
              console.log(err);
            }
          } // Leave Setting Update Details

        }, {
          key: "leaveSettingUpdateDetails",
          value: function leaveSettingUpdateDetails(leaveSettingId) {
            try {
              this.leaveSettingId = leaveSettingId;
              this.leaveSettingHeadingButton = "Update Leave Settings";
              this.leaveButton = "Update";
              this.employeeLeaveForm = true;
              this.leaveSettingButton = true;

              for (var i = 0; i < this.employeeLeaveData.length; i++) {
                if (this.employeeLeaveData[i]._id == leaveSettingId) {
                  this.employeeLeaveDetailsForm = this.fb.group({
                    startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.employeeLeaveData[i].startDate.substring(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.employeeLeaveData[i].endDate.substring(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    leavePerMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.employeeLeaveData[i].leavePerMonth, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                    reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.employeeLeaveData[i].reason)
                  });
                }
              }
            } catch (err) {
              console.log(err);
            }
          }
          /** Leave Settings add details */

        }, {
          key: "leaveSettingForm",
          value: function leaveSettingForm() {
            this.employeeLeaveDetailsForm = this.fb.group({
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              leavePerMonth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          } // Leave Setting ADD Leave Setting Button Functionality

        }, {
          key: "addNewLeaveSettings",
          value: function addNewLeaveSettings() {
            this.employeeLeaveDetailsForm.reset();
            this.leaveSettingButton = false;
            this.leaveSettingHeadingButton = "Add Leave Settings";
            this.leaveButton = "Submit";
            this.employeeLeaveForm = true;
          } // Leave Setting Cancel Button Functionality

        }, {
          key: "leaveSettingCancel",
          value: function leaveSettingCancel() {
            this.employeeLeaveDataList();
            this.employeeLeaveDetailsForm.reset();
          }
          /** employee Leave details configratin End*/

          /** employee Identity Proofs configratin Start*/

        }, {
          key: "getEmployeeIdProofsList",
          value: function getEmployeeIdProofsList() {
            var _this39 = this;

            try {
              this.api.employeeIdProofsDataList(this.snapShotParam).subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.data.length == 0) {
                    _this39.idProofsList = false;
                    _this39.idProofsForm = true;
                    _this39.idProofsSettingButton = false;
                    _this39.idProofsButton = 'Submit';
                    _this39.idProofsHeadingButton = "Add Identity Proofs Settings"; // this.addLeaveSettingButton = true;
                  } else {
                    _this39.idProofsData = data.data;
                    _this39.idProofsList = true;
                    _this39.idProofsForm = false;
                    _this39.idProofsSettingButton = true;
                    _this39.idProofsButton = 'Update'; // this.addLeaveSettingButton = false;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Add Employee Id Poofs Details

        }, {
          key: "addIdProofs",
          value: function addIdProofs() {
            var _this40 = this;

            try {
              var cleanIdProofsSettingForm = this.util.cleanFormLevelTwo(this.idProofsDetailsForm);

              if (this.idProofsButton === 'Submit') {
                this.api.addEmployeeIdProofs(cleanIdProofsSettingForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success") {
                    _this40.successMessage = true;
                    _this40.errorMsg = false;
                    _this40.successMsg = data.message;
                    setTimeout(function () {
                      _this40.getEmployeeIdProofsList();

                      _this40.handleErrroMessage();
                    }, 2000);
                  } else if (data.status === "error") {
                    _this40.errorMsg = true;
                    _this40.successMessage = false;
                    _this40.errMsg = data.message;
                    setTimeout(function () {
                      _this40.handleErrroMessage();
                    }, 3000);
                  }
                });
              } else if (this.idProofsButton === 'Update') {
                this.api.updateIdProofsSettings(cleanIdProofsSettingForm.value, this.snapShotParam, this.idProofsSettingId).subscribe(function (data) {
                  if (data.status === "success") {
                    _this40.successMessage = true;
                    _this40.errorMsg = false;
                    _this40.successMsg = data.message;
                    setTimeout(function () {
                      _this40.getEmployeeIdProofsList();

                      _this40.handleErrroMessage();
                    }, 2000);
                  } else if (data.status === "error") {
                    _this40.errorMsg = true;
                    _this40.successMessage = false;
                    _this40.errMsg = data.message;
                    setTimeout(function () {
                      _this40.handleErrroMessage();
                    }, 3000);
                  }
                });
              }
            } catch (err) {
              console.log(err);
            }
          } // Id Proofs Setting Update Details

        }, {
          key: "idProofsSettingUpdateDetails",
          value: function idProofsSettingUpdateDetails(proofsId) {
            try {
              this.idProofsSettingId = proofsId;
              this.idProofsHeadingButton = "Update Id Proofs Settings";
              this.idProofsButton = 'Update';
              this.idProofsForm = true;
              this.idProofsSettingButton = false;

              for (var i = 0; i < this.idProofsData.length; i++) {
                if (this.idProofsData[i]._id === proofsId) {
                  this.idProofsDetailsForm = this.fb.group({
                    identityProofs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                      identityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idProofsData[i].identityName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                      identityNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idProofsData[i].identityNum, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                      authorityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idProofsData[i].authorityName),
                      issuePlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idProofsData[i].issuePlace),
                      expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idProofsData[i].expiryDate.substring(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                      remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.idProofsData[i].remarks)
                    })
                  });
                }
              }
            } catch (err) {
              console.log(err);
            }
          } //Method for remove Employee Id Proofs

        }, {
          key: "deleteIdentityProofs",
          value: function deleteIdentityProofs(proofId) {
            var _this41 = this;

            try {
              var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
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
                  _this41.api.removeIdProofsDetails(_this41.snapShotParam, proofId).subscribe(function (data) {
                    if (data.status === "success" || data.status === 200) {
                      swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                      _this41.getEmployeeIdProofsList();
                    }
                  });
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire('Cancelled', 'Your data is safe', 'error');
                }
              });
            } catch (err) {
              console.log(err.message);
            }
          } // Add New Id Proofs Setting Add Identity Proofs Button Functionality

        }, {
          key: "addNewIdProofsSettings",
          value: function addNewIdProofsSettings() {
            this.idProofsDetailsForm.reset();
            this.idProofsSettingButton = false;
            this.idProofsHeadingButton = "Add Identity Proofs";
            this.idProofsButton = 'Submit';
            this.idProofsForm = true;
          } // New Id Proofs Setting Cancel Button Functionality

        }, {
          key: "idProofsSettingsCancel",
          value: function idProofsSettingsCancel() {
            this.getEmployeeIdProofsList();
            this.idProofsDetailsForm.reset();
          } //Employee ID's Form add details //

        }, {
          key: "idProofsSettingForm",
          value: function idProofsSettingForm() {
            this.idProofsDetailsForm = this.fb.group({
              identityProofs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                identityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                identityNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                authorityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                issuePlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
              })
            });
          }
          /** employee Identity Proofs configratin End*/

        }, {
          key: "bioCancel",
          value: function bioCancel() {
            this.bioForm = false;
            this.bioList = true;
          }
          /** bio complete function configratin */

          /** langulage skills function configation  start*/

        }, {
          key: "listSkillLanguage",
          value: function listSkillLanguage() {
            var _this42 = this;

            try {
              this.lsnguageSkillForm = false;
              this.api.LanguageSkill(this.snapShotParam).subscribe(function (data) {
                if (data.status == 'success' || data.status == 200) {
                  if (data.data.length === 0) {
                    _this42.languageSkillList = false;

                    _this42.addLanguageSkillList();
                  } else {
                    _this42.LanguageData = data.data;
                    _this42.languageSkillList = true;
                  }
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "languageSkillEdit",
          value: function languageSkillEdit(id) {
            this.languageSkillEditId = id;
            this.skillLanguageBtn = 'Update';
            this.languageSkillTitle = "Update Language";
            this.lsnguageSkillForm = true;
            this.addLanguageBtn = false;

            for (var i = 0; i < this.LanguageData.length; i++) {
              if (this.LanguageData[i]._id == id) {
                this.languageSkillForm = this.fb.group({
                  languageSkills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    toSpeak: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.LanguageData[i].toSpeak),
                    toRead: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.LanguageData[i].toRead),
                    toWrite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.LanguageData[i].toWrite)
                  })
                });
              }
            }
          }
        }, {
          key: "cancelLanguageSkill",
          value: function cancelLanguageSkill() {
            this.lsnguageSkillForm = false;
            this.addLanguageBtn = true;
          }
        }, {
          key: "addLanguageSkill",
          value: function addLanguageSkill() {
            var _this43 = this;

            try {
              var cleanLaungugeSkillForm = this.util.cleanFormLevelOne(this.languageSkillForm);

              if (this.languageSkillEditId == "" || this.languageSkillEditId === null) {
                this.api.addLanguageSkill(cleanLaungugeSkillForm.value, this.snapShotParam).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this43.successMessage = true;
                    _this43.errorMsg = false;
                    _this43.successMsg = data.message;
                    _this43.addLanguageBtn = true;
                    setTimeout(function () {
                      _this43.listSkillLanguage();

                      _this43.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this43.errorMsg = true;
                    _this43.successMessage = false;
                    _this43.errMsg = data.message;
                    setTimeout(function () {
                      _this43.handleErrroMessage();
                    }, 2000);
                  }
                });
              } else {
                this.api.updateLanguageSkill(cleanLaungugeSkillForm.value, this.snapShotParam, this.languageSkillEditId).subscribe(function (data) {
                  if (data.status === "success" || data.status === 200) {
                    _this43.successMessage = true;
                    _this43.errorMsg = false;
                    _this43.successMsg = data.message;
                    _this43.addLanguageBtn = true;
                    setTimeout(function () {
                      _this43.listSkillLanguage();

                      _this43.handleErrroMessage();
                    }, 1000);
                  } else if (data.status === "error" || data.status === 404) {
                    _this43.errorMsg = true;
                    _this43.successMessage = false;
                    _this43.errMsg = data.message;
                    setTimeout(function () {
                      _this43.handleErrroMessage();
                    }, 2000);
                  }
                });
              }

              this.languageSkillEditId = "";
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "languageSkillValidation",
          value: function languageSkillValidation() {
            this.languageSkillForm = this.fb.group({
              languageSkills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                toSpeak: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                toRead: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                toWrite: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
              })
            });
          }
        }, {
          key: "addLanguageSkillList",
          value: function addLanguageSkillList() {
            this.languageSkillEditId = "";
            this.languageSkillTitle = "Add";
            this.skillLanguageBtn = 'Submit';
            this.lsnguageSkillForm = true;
            this.addLanguageBtn = false;
            this.languageSkillForm.reset();
          }
          /**langualge skills function configration end */
          // Error Handling Message

        }, {
          key: "handleErrroMessage",
          value: function handleErrroMessage() {
            this.successMessage = false;
            this.errorMsg = false;
            this.successMsg = '';
            this.errMsg = '';
          }
        }, {
          key: "oncheck",
          value: function oncheck() {
            this.checkbox = !this.checkbox;
            this.employeeBasicForm.get('isTL').setValue(this.checkbox);
          } // Get Tl List

        }, {
          key: "getTlList",
          value: function getTlList() {
            var _this44 = this;

            this.api.getTlList().subscribe(function (data) {
              if (data.status === 'success') {
                _this44.companyTlList = data.data;
              }
            });
          } // get documnet list uploaded which are no uploaded yet

        }, {
          key: "uploadedDocumentList",
          value: function uploadedDocumentList() {
            var _this45 = this;

            try {
              this.api.uploadedDocuments(this.snapShotParam).subscribe(function (data) {
                if (data.status === 'success') {
                  _this45.uploadedDocumentDetails = data.data;
                }
              });
              this.employeeDocumentList();
            } catch (err) {
              console.log(err);
            }
          } // Image Upload Form

        }, {
          key: "uploadImageForm",
          value: function uploadImageForm() {
            try {
              this.uploadForm = this.fb.group({
                document: ['']
              });
            } catch (err) {
              console.log(err);
            }
          } // Upload Docs

        }, {
          key: "uploadDocs",
          value: function uploadDocs(documentTypeId, index, type) {
            var _this46 = this;

            try {
              if (type === 'Update') {
                if (document.getElementById("".concat(index)).value.length === 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('No Image Selected');
                } else {
                  this.api.uploadDocuments(this.uploadForm, documentTypeId, this.snapShotParam, type).subscribe(function (data) {
                    if (data.status === 'success') {
                      document.getElementById('dismissUpdateDocuments').click();
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Status', data.message, 'success');

                      _this46.employeeDocumentList();
                    } else if (data.status === 'error') {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(data.message);
                    }
                  });
                }
              } else if (type === 'Add') {
                if (document.getElementById("documnetDocImage".concat(index)).value.length === 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('No Image Selected');
                } else {
                  this.api.uploadDocuments(this.uploadForm, documentTypeId, this.snapShotParam, type).subscribe(function (data) {
                    if (data.status === 'success') {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Status', data.message, 'success');

                      _this46.uploadedDocumentList();

                      _this46.employeeDocumentList();
                    } else if (data.status === 'error') {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire(data.message);
                    }
                  });
                }
              }
            } catch (err) {
              console.log(err);
            }
          } // When User select document image

        }, {
          key: "onFileSelect",
          value: function onFileSelect(event) {
            try {
              if (event.target.files.length > 0) {
                var file = event.target.files[0];
                this.uploadForm.get('document').setValue(file);
              }
            } catch (err) {
              console.log(err);
            }
          } // Get Uploaded Documnets By the employee

        }, {
          key: "employeeDocumentList",
          value: function employeeDocumentList() {
            var _this47 = this;

            try {
              this.api.employeeDocumentList(this.snapShotParam).subscribe(function (data) {
                if (data.status === 'success') {
                  _this47.employeeDocumentsDetails = data.data;
                }
              });
            } catch (err) {
              console.log(err);
            }
          } // Show Image On new tab

        }, {
          key: "openImage",
          value: function openImage(imageUrl) {
            try {
              window.open(imageUrl);
            } catch (err) {
              console.log(err);
            }
          } // Delete Employee Document

        }, {
          key: "deleteDocument",
          value: function deleteDocument(documentTypeId) {
            var _this48 = this;

            try {
              var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
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
                reverseButtons: true,
                allowOutsideClick: false
              }).then(function (result) {
                if (result.value) {
                  _this48.api.deleteEmployeeDocument(documentTypeId, _this48.snapShotParam).subscribe(function (data) {
                    if (data.status === "success" || data.status === 200) {
                      swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');

                      _this48.employeeDocumentList();

                      _this48.uploadedDocumentList();
                    }
                  });
                } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire('Cancelled', 'Document Still Exists', 'error');
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "updateDocuments",
          value: function updateDocuments(documentTypeId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      try {
                        this.documentTypeId = documentTypeId;
                      } catch (err) {
                        console.log(err);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return EmployeeProfileComponent;
      }();

      EmployeeProfileComponent.ɵfac = function EmployeeProfileComponent_Factory(t) {
        return new (t || EmployeeProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_document_types_document_services_document_services__WEBPACK_IMPORTED_MODULE_4__["DocumentServices"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_skill_category_skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_7__["skillCategoryApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"]));
      };

      EmployeeProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EmployeeProfileComponent,
        selectors: [["app-employee-profile"]],
        viewQuery: function EmployeeProfileComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.familyId = _t.first);
          }
        },
        decls: 263,
        vars: 77,
        consts: [[1, "card", "card-body"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["target", ""], [1, "nav-item"], ["data-toggle", "tab", "href", "#basicDetails", "role", "tab", "aria-controls", "basic details", 1, "nav-link", "active"], ["class", "nav-item", 4, "ngIf"], [1, "tab-content"], ["id", "basicDetails", "role", "tabpanel", 1, "tab-pane", "active"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-md-4"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["Name", "Company", "formControlName", "companyId", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["value", "", "selected", "", "disabled", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "selected", "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["Name", "branchId", "formControlName", "branchId", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["value", "", "disabled", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], ["Name", "departmentId", "formControlName", "departmentId", 1, "dropdown", "dropdown-toggle", "form-control"], ["Name", "jobProfileId", "formControlName", "jobProfileId", 1, "dropdown", "dropdown-toggle", "form-control"], ["type", "text", "id", "inputName", "placeholder", "Enter Employee Name", "formControlName", "name", 1, "form-control"], ["type", "date", "placeholder", "Enter Employee DOB", "formControlName", "dob", 1, "form-control"], [1, "form-group", 3, "formGroup"], ["type", "text", "placeholder", "Enter Phone No.", "formControlName", "phone", 1, "form-control"], ["type", "text", "placeholder", "Enter Landline No.", "formControlName", "landLineNum", 1, "form-control"], ["type", "text", "placeholder", "Enter Email Id", "formControlName", "email", 1, "form-control"], ["type", "checkbox", "name", "vehicle2", 3, "change"], [1, "row", 2, "height", "30px"], [1, "form-group", "col-sm-offset-2", "col-md-5"], ["type", "checkbox", "formControlName", "officialEmailAsLoginEmail"], [4, "ngIf"], ["class", "form-group col-sm-offset-2 col-md-2", 4, "ngIf"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["id", "bio", "role", "tabpanel", 1, "tab-pane"], ["class", "card", 4, "ngIf"], ["class", "form-horizontal", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "address", "role", "tabpanel", 1, "tab-pane"], [1, "card-body"], ["type", "hidden", "id", "employeeId", 3, "value"], ["employeeId", ""], ["class", "card", "style", "background-color:whitesmoke;", 4, "ngIf"], ["class", "btn btn-info", "style", "color: white; float: right;", 3, "click", 4, "ngIf"], ["id", "educationDetails", "role", "tabpanel", 1, "tab-pane"], ["id", "uploadDocument", "role", "tabpanel", 1, "tab-pane"], ["id", "bankDetails", "role", "tabpanel", 1, "tab-pane"], ["id", "workExperience", "role", "tabpanel", 1, "tab-pane"], ["id", "skillCat", "role", "tabpanel", 1, "tab-pane"], ["id", "addFamily", "role", "tabpanel", 1, "tab-pane"], ["type", "hidden", "id", "familyId", 3, "value"], ["familyId", ""], ["class", "card", "style", "background-color:whitesmoke;", "id", "hide", 4, "ngIf"], ["type", "button", "style", "float: right", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["id", "profilePayroll", "role", "tabpanel", 1, "tab-pane"], ["id", "languageSkill", "role", "tabpanel", 1, "tab-pane"], ["id", "leaveSetting", "role", "tabpanel", 1, "tab-pane"], ["id", "identityproofs", "role", "tabpanel", 1, "tab-pane"], ["id", "updateDocument", 1, "modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "card", 2, "background-color", "whitesmoke"], [1, "panel-body"], [1, "list-group"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], ["type", "file", "id", "updateExistingDocument", "accept", "image/*", 1, "form-control-file", "border", 3, "change"], [1, "btn", "btn-outline-primary", "btn-round", 3, "click"], [1, "fas", "fa-camera-retro"], ["type", "button", "id", "dismissUpdateDocuments", "data-dismiss", "modal", 1, "btn", "btn-danger", 2, "float", "right"], ["data-toggle", "tab", "href", "#bio", "role", "tab", "aria-controls", "bio", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#address", "role", "tab", "aria-controls", "address", 1, "nav-link", "addesstab", 3, "click"], ["data-toggle", "tab", "href", "#educationDetails", "role", "tab", "aria-controls", "educationDetails", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#uploadDocument", "role", "tab", "aria-controls", "uploadDocument", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#bankDetails", "role", "tab", "aria-controls", "bankDetails", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#workExperience", "role", "tab", "aria-controls", "workExperience", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#skillCat", "role", "tab", "aria-controls", "skillCat", 1, "nav-link"], ["data-toggle", "tab", "href", "#addFamily", "role", "tab", "aria-controls", "addFamily", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#profilePayroll", "role", "tab", "aria-controls", "profilePayroll", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#languageSkill", "role", "tab", "aria-controls", "languageSkill", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#leaveSetting", "role", "tab", "aria-controls", "leaveSetting", 1, "nav-link", 3, "click"], ["data-toggle", "tab", "href", "#identityproofs", "role", "tab", "aria-controls", "identityproofs", 1, "nav-link", 3, "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "dropdown-item", 3, "selected", "value"], ["style", "color:\xA0red;margin-left:\xA014px;", "style", "color:\xA0red;margin-left:\xA014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], [1, "dropdown-item", 3, "value"], ["type", "checkbox", 2, "margin-top", "5px", 3, "click"], [1, "form-group", "col-sm-offset-2", "col-md-2"], ["Name", "Company", "formControlName", "tlId", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["ng-selected", "true", "value", "", "selected", "", "disabled", "", 1, "dropdown-item"], [1, "card"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "card", 2, "background-color", "ghostwhite"], [2, "text-align", "center"], [1, "table", 2, "margin", "auto"], [1, "btn", "btn-primary", 2, "float", "right", 3, "click"], [1, "fa", "fa-pencil-square-o"], [3, "formGroup"], [1, "col-sm-8", "control-label"], ["type", "text", "placeholder", "Enter Employee Height", "formControlName", "height", 1, "form-control"], ["type", "text", "placeholder", "Enter Employee Weight", "formControlName", "weight", 1, "form-control"], ["formControlName", "color", 1, "dropdown", "dropdown-toggle", "form-control"], ["label", "Pale White"], ["value", "Light", 1, "dropdown-item"], ["label", "Fair"], ["value", "White", 1, "dropdown-item"], ["label", "White to Light Brown"], ["value", "Medium", 1, "dropdown-item"], ["label", "Moderate Brown"], ["value", "Olive", 1, "dropdown-item"], ["label", "Dark Brown"], ["value", "Brown", 1, "dropdown-item"], ["label", "Brown to Black"], ["value", "Very Dark", 1, "dropdown-item"], [1, "form-group", "col-md-6"], ["type", "text", "placeholder", "Enter Employee Mole Identification", "formControlName", "moleIdentification", 1, "form-control"], ["type", "text", "placeholder", "Enter Employee Blood Group", "formControlName", "bloodGroup", 1, "form-control"], ["type", "text", "placeholder", "Enter Employee Eye Power", "formControlName", "eyePower", 1, "form-control"], ["formControlName", "handicapped", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["value", "false", 1, "dropdown-item"], ["value", "true", 1, "dropdown-item"], ["class", "form-group col-md-4", 4, "ngIf"], ["formControlName", "multipleHandicapped", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["class", "form-group col-md-6", 4, "ngIf"], [1, "form-row", 3, "formGroup"], [1, "col-sm-10", "control-label"], ["type", "text", "placeholder", "Enter Physical Illness", "formControlName", "physicalIllnessName", 1, "form-control"], ["type", "text", "placeholder", "Enter Treatment", "formControlName", "treatmentName", 1, "form-control"], ["type", "text", "placeholder", "Enter Hospital Name", "formControlName", "hospitalName", 1, "form-control"], ["type", "text", "placeholder", "Enter Treatment Duration", "formControlName", "treatmentDuration", 1, "form-control"], ["type", "text", "placeholder", "Enter Illness Status", "formControlName", "illnessStatus", 1, "form-control"], [1, "form-group", "col-md-8"], ["type", "text", "placeholder", "Enter Mental Illness", "formControlName", "mentalIllnessName", 1, "form-control"], ["type", "text", "placeholder", "Enter Treatment Name", "formControlName", "treatmentName", 1, "form-control"], ["type", "text", "placeholder", "Enter Hospital name", "formControlName", "hospitalName", 1, "form-control"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "text", "placeholder", "Enter Percenatge", "formControlName", "handicappedPercent", 1, "form-control"], ["type", "text", "placeholder", "Enter Percenatge", "formControlName", "multipleHandicappedPercent", 1, "form-control"], [1, "btn", "btn-primary", 2, "color", "white", 3, "click"], [1, "fa", "fa-trash"], ["type", "text", "placeholder", "Enter Door No.", "value", "", "formControlName", "doorNum", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Landmark", "formControlName", "landmark", 1, "form-control"], ["formControlName", "addressType", 1, "dropdown", "dropdown-toggle", "form-control"], ["value", "null", "disabled", "", 1, "dropdown-item"], ["value", "", 3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "value", "", "placeholder", "Enter Street Name 1", "formControlName", "streetName1", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Street Name 2", "formControlName", "streetName2", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Zipcode", "formControlName", "zipcode", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter City", "formControlName", "district", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter State", "formControlName", "state", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "submit", 1, "btn", "btn-danger", 3, "click"], ["value", "", 3, "ngValue"], [1, "btn", "btn-info", 2, "color", "white", "float", "right", 3, "click"], ["type", "text", "placeholder", "Enter Course name", "formControlName", "courseName", 1, "form-control"], ["type", "text", "placeholder", "Enter Name of the INSTITUTE", "formControlName", "instituteName", 1, "form-control"], ["type", "text", "placeholder", "Enter Year", "formControlName", "passOutYear", 1, "form-control"], ["formControlName", "status", 1, "dropdown", "dropdown-toggle", "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Enter Description", "formControlName", "description", 1, "form-control"], ["type", "text", "placeholder", "Enter Percenatge", "formControlName", "scoredPercent", 1, "form-control"], ["type", "submit", 1, "btn", "btn-danger", 2, "margin-top", "-45%", "margin-left", "72%", 3, "click"], [3, "ngValue"], ["type", "file", "accept", "image/*", 1, "form-control-file", "border", 3, "id", "change"], [1, "fa", "fa-check", 2, "color", "green", "font-size", "25px"], [1, "fa", "fa-times", 2, "color", "red", "font-size", "25px"], ["title", "Update", "data-toggle", "modal", "data-target", "#updateDocument", "data-backdrop", "static", 1, "btn", "btn-primary", 2, "color", "white", 3, "click"], ["title", "Info", 1, "btn", "btn-info", 2, "color", "white", 3, "click"], [1, "fas", "fa-file-alt"], ["title", "Delete", 1, "btn", "btn-danger", 3, "click"], [1, "text-center"], [1, "row"], [1, "col-md-6"], ["type", "text", "id", "inputName", "placeholder", "Enter Bank Name", "formControlName", "name", 1, "form-control"], ["type", "text", "id", "acountnumber", "placeholder", "Enter Account Number", "formControlName", "accountNum", 1, "form-control"], ["type", "text", "id", "acountplace", "placeholder", "Enter Account Origin", "formControlName", "accountPlace", 1, "form-control"], ["type", "text", "id", "remark", "placeholder", "Enter Remarks", "formControlName", "remarks", 1, "form-control"], ["type", "text", "id", "acountType", "placeholder", "Enter Account Type", "formControlName", "accountType", 1, "form-control"], ["type", "checkbox", "name", "vehicle2", 3, "checked", "change"], ["type", "text", "id", "pinputName", "placeholder", "Enter Bank Name", "formControlName", "name", 1, "form-control"], ["type", "text", "id", "pacountnumber", "placeholder", "Enter Account Number", "formControlName", "accountNum", 1, "form-control"], ["type", "text", "id", "pacountplace", "placeholder", "Enter Account Origin", "formControlName", "accountPlace", 1, "form-control"], ["type", "text", "id", "premark", "placeholder", "Enter Remarks", "formControlName", "remarks", 1, "form-control"], ["type", "text", "id", "pacountType", "placeholder", "Enter Account Type", "formControlName", "accountType", 1, "form-control"], [1, "row", 3, "formGroup"], ["type", "text", "id", "name", "placeholder", "Enter Company Name", "formControlName", "companyName", 1, "form-control"], ["type", "text", "id", "designation", "placeholder", "Enter Designation", "formControlName", "designation", 1, "form-control"], ["type", "text", "id", "experience", "placeholder", "Enter Experience Years", "formControlName", "experienceYears", 1, "form-control"], ["type", "text", "id", "description", "placeholder", "Enter Job Description", "formControlName", "jobDescription", 1, "form-control"], ["type", "text", "id", "relivingre", "placeholder", "Enter Reliving Reason", "formControlName", "relivingReason", 1, "form-control"], ["formControlName", "relivingIs", 1, "dropdown", "dropdown-toggle", "form-control"], ["disabled", "", 3, "ngValue"], [1, "btn", "btn-danger", 3, "click"], ["id", "hide", 1, "card", 2, "background-color", "whitesmoke"], [1, "btn", "btn-primary", 3, "click"], ["formControlName", "relation", 1, "dropdown", "dropdown-toggle", "form-control"], ["type", "text", "id", "name", "placeholder", "Enter Name", "formControlName", "name", 1, "form-control"], ["type", "text", "id", "age", "placeholder", "Enter Age", "formControlName", "age", 1, "form-control"], ["type", "text", "id", "occupation", "placeholder", "Enter Occupation", "formControlName", "occupation", 1, "form-control"], ["type", "text", "id", "education", "placeholder", "Enter education", "formControlName", "education", 1, "form-control"], ["type", "text", "id", "income", "placeholder", "Enter Income", "formControlName", "income", 1, "form-control"], ["name", "familyType", "formControlName", "familyType", 1, "dropdown", "dropdown-toggle", "form-control"], ["selected", "", 3, "ngValue", 4, "ngFor", "ngForOf"], ["selected", "", 3, "ngValue"], ["type", "button", 1, "btn", "btn-primary", 2, "float", "right", 3, "click"], [1, "fa", "fa-plus-square"], ["type", "text", "id", "ctc", "placeholder", "Enter CTC", "formControlName", "ctc", 1, "form-control"], ["type", "date", "id", "ctcEffectiveFromDate", "placeholder", "Enter CTC Effective From Date", "formControlName", "ctcEffectiveFromDate", 1, "form-control"], ["type", "date", "id", "ctcEffectiveToDate", "placeholder", "Enter CTC Effective To Date", "formControlName", "ctcEffectiveToDate", 1, "form-control"], ["type", "text", "id", "paidLeaveBalance", "placeholder", "Enter Paid Leave Balance", "formControlName", "paidLeaveBalance", 1, "form-control"], ["type", "text", "id", "earnedLeaveBalance", "formControlName", "earnedLeaveBalance", "disabled", "", 1, "form-control"], ["name", "familyType", "formControlName", "gradeRule", 1, "dropdown", "dropdown-toggle", "form-control"], ["type", "text", "id", "basicPay", "placeholder", "Enter Basic Pay", "formControlName", "basicPay", 1, "form-control"], ["formControlName", "mode", 1, "dropdown", "dropdown-toggle", "form-control"], ["type", "text", "id", "toSpeak", "placeholder", "Enter Speak Language", "formControlName", "toSpeak", 1, "form-control"], ["type", "text", "id", "toRead", "placeholder", "Enter Read Language", "formControlName", "toRead", 1, "form-control"], ["type", "text", "id", "toWrite", "placeholder", "Enter Write Language", "formControlName", "toWrite", 1, "form-control"], ["type", "date", "placeholder", "Enter Start Date", "value", "", "formControlName", "startDate", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Leave Per Month", "formControlName", "leavePerMonth", 1, "form-control"], ["type", "date", "value", "", "placeholder", "Enter End Date", "formControlName", "endDate", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Reason", "formControlName", "reason", 1, "form-control"], ["type", "text", "placeholder", "Enter Identity Name", "value", "", "formControlName", "identityName", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Identity Number", "formControlName", "identityNum", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Authority Name", "formControlName", "authorityName", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Issue Place", "formControlName", "issuePlace", 1, "form-control"], ["type", "date", "value", "", "placeholder", "Enter Expiry Date", "formControlName", "expiryDate", 1, "form-control"], ["type", "text", "value", "", "placeholder", "Enter Remarks", "formControlName", "remarks", 1, "form-control"], [1, "row", "col-sm-offset-2", "col-sm-10"]],
        template: function EmployeeProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Basic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmployeeProfileComponent_li_6_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EmployeeProfileComponent_li_7_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EmployeeProfileComponent_li_8_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmployeeProfileComponent_li_9_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmployeeProfileComponent_li_10_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EmployeeProfileComponent_li_11_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, EmployeeProfileComponent_li_12_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EmployeeProfileComponent_li_13_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EmployeeProfileComponent_li_14_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, EmployeeProfileComponent_li_15_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EmployeeProfileComponent_li_16_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EmployeeProfileComponent_li_17_Template, 3, 0, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EmployeeProfileComponent_p_23_Template, 3, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, EmployeeProfileComponent_p_25_Template, 3, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EmployeeProfileComponent_Template_form_ngSubmit_26_listener() {
              return ctx.employeeForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Basic Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Company Name :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_Template_select_change_37_listener($event) {
              return ctx.onSelect($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "-----Select a Company-----");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EmployeeProfileComponent_option_40_Template, 2, 3, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, EmployeeProfileComponent_div_41_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Branch Name :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_Template_select_change_49_listener($event) {
              return ctx.onClick($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "----- Select A Branch----- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, EmployeeProfileComponent_option_52_Template, 2, 2, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, EmployeeProfileComponent_div_53_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Department Name :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "----- Select A Department----- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, EmployeeProfileComponent_option_64_Template, 2, 2, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, EmployeeProfileComponent_div_65_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "JobProfile Name :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "select", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "----- Select A JobProfile----- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, EmployeeProfileComponent_option_77_Template, 2, 3, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, EmployeeProfileComponent_div_78_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Employee Name :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, EmployeeProfileComponent_div_88_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "DOB :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, EmployeeProfileComponent_div_98_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Contact Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Personal Details :-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Phone No. :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, EmployeeProfileComponent_div_111_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Landline No. :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, EmployeeProfileComponent_div_118_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Email :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, EmployeeProfileComponent_div_126_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_Template_input_change_128_listener() {
              return ctx.sameAsPersonalDetails(ctx.actionBox);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, " Same as Personal Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Official Details :-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Phone No. :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, EmployeeProfileComponent_div_141_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Landline No. :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, EmployeeProfileComponent_div_148_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Email :\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, EmployeeProfileComponent_div_156_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "\xA0 Do You Want Official Email as Login Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, EmployeeProfileComponent_div_161_Template, 3, 0, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, EmployeeProfileComponent_div_162_Template, 5, 1, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, EmployeeProfileComponent_div_163_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_Template_button_click_166_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r394);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

              return ctx.scroll(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 40, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](170, EmployeeProfileComponent_div_170_Template, 4, 1, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, EmployeeProfileComponent_p_172_Template, 3, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](174, EmployeeProfileComponent_p_174_Template, 3, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, EmployeeProfileComponent_form_175_Template, 181, 11, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "input", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, EmployeeProfileComponent_div_180_Template, 16, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](181, EmployeeProfileComponent_div_181_Template, 76, 9, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](182, EmployeeProfileComponent_button_182_Template, 2, 0, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](184, EmployeeProfileComponent_div_184_Template, 16, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](185, EmployeeProfileComponent_div_185_Template, 65, 10, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](186, EmployeeProfileComponent_a_186_Template, 2, 0, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, EmployeeProfileComponent_div_189_Template, 19, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](190, EmployeeProfileComponent_div_190_Template, 21, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](192, EmployeeProfileComponent_div_192_Template, 4, 1, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](194, EmployeeProfileComponent_p_194_Template, 3, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](196, EmployeeProfileComponent_p_196_Template, 3, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](197, EmployeeProfileComponent_form_197_Template, 96, 10, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](199, EmployeeProfileComponent_div_199_Template, 16, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, EmployeeProfileComponent_div_200_Template, 63, 10, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](201, EmployeeProfileComponent_a_201_Template, 2, 0, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "input", 55, 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](206, EmployeeProfileComponent_div_206_Template, 18, 1, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](207, EmployeeProfileComponent_div_207_Template, 64, 11, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](208, EmployeeProfileComponent_button_208_Template, 3, 0, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](210, EmployeeProfileComponent_div_210_Template, 4, 1, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](212, EmployeeProfileComponent_p_212_Template, 3, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](214, EmployeeProfileComponent_p_214_Template, 3, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](215, EmployeeProfileComponent_form_215_Template, 83, 12, "form", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](217, EmployeeProfileComponent_div_217_Template, 14, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](218, EmployeeProfileComponent_div_218_Template, 31, 7, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](219, EmployeeProfileComponent_button_219_Template, 2, 0, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "input", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](224, EmployeeProfileComponent_div_224_Template, 18, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](225, EmployeeProfileComponent_div_225_Template, 49, 9, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](226, EmployeeProfileComponent_button_226_Template, 2, 0, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "input", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](231, EmployeeProfileComponent_div_231_Template, 16, 1, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](232, EmployeeProfileComponent_div_232_Template, 64, 10, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](233, EmployeeProfileComponent_button_233_Template, 2, 0, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "h4", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Update Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "ul", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "table", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "thead", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Update Doc Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "input", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function EmployeeProfileComponent_Template_input_change_255_listener($event) {
              return ctx.onFileSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "button", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_Template_button_click_257_listener() {
              return ctx.uploadDocs(ctx.documentTypeId, "updateExistingDocument", "Update");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "i", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.snapShotParam);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.employeeBasicForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyListData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.companyId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.branchList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.branchId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.departmentList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.departmentId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobProfileList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.jobProfileId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.dob);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.employeeBasicForm.get("contactDetails.personal"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.landLineNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.employeeBasicForm.get("contactDetails.official"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.landLineNum);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.basicDetail === "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.validationMessage.companyId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.employeeBasicForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.basicDetail, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bioList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bioForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addressMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addAddess);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addessBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listMesg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.EducationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.educationBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.uploadedDocumentDetails.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.employeeDocumentsDetails.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bankList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bankForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listExprience);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.workExperience);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addExpbtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.familyIdValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.divShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAddFamilyButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.payrollList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.payrollForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.languageSkillList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lsnguageSkillForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addLanguageBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.employeeLeaveList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.employeeLeaveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.leaveSettingButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.hidden);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idProofsList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idProofsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idProofsSettingButton);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: ["h4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: #f4f3ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wbG95ZWUtd2l6YXJkL2VtcGxveWVlLXByb2ZpbGUvZW1wbG95ZWUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGtCQUFBO0FBQ0w7O0FBRUE7RUFDSyx5QkFBQTtBQUNMIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1wbG95ZWUtd2l6YXJkL2VtcGxveWVlLXByb2ZpbGUvZW1wbG95ZWUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5uYXYtbGluay5hY3RpdmUge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmM2VmO1xufVxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-employee-profile',
            templateUrl: './employee-profile.component.html',
            styleUrls: ['./employee-profile.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _document_types_document_services_document_services__WEBPACK_IMPORTED_MODULE_4__["DocumentServices"]
          }, {
            type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _skill_category_skillCategory_service_skillCategory_api_service__WEBPACK_IMPORTED_MODULE_7__["skillCategoryApiService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
          }, {
            type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"]
          }];
        }, {
          familyId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['familyId', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "yWt3":
    /*!********************************************************************!*\
      !*** ./src/app/pages/employee-wizard/employee-wizard.component.ts ***!
      \********************************************************************/

    /*! exports provided: EmployeeWizardComponent */

    /***/
    function yWt3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeWizardComponent", function () {
        return EmployeeWizardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EmployeeWizardComponent = /*#__PURE__*/function () {
        function EmployeeWizardComponent() {
          _classCallCheck(this, EmployeeWizardComponent);
        }

        _createClass(EmployeeWizardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmployeeWizardComponent;
      }();

      EmployeeWizardComponent.ɵfac = function EmployeeWizardComponent_Factory(t) {
        return new (t || EmployeeWizardComponent)();
      };

      EmployeeWizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeeWizardComponent,
        selectors: [["app-employee-wizard"]],
        decls: 1,
        vars: 0,
        template: function EmployeeWizardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlLXdpemFyZC9lbXBsb3llZS13aXphcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeWizardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employee-wizard',
            templateUrl: './employee-wizard.component.html',
            styleUrls: ['./employee-wizard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=employee-wizard-employee-wizard-module-es5.js.map