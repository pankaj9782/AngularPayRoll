(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["graderule-graderule-module"],{

/***/ "2K7U":
/*!********************************************************!*\
  !*** ./src/app/pages/graderule/graderule.component.ts ***!
  \********************************************************/
/*! exports provided: GraderuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraderuleComponent", function() { return GraderuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class GraderuleComponent {
    constructor() { }
    ngOnInit() {
    }
}
GraderuleComponent.ɵfac = function GraderuleComponent_Factory(t) { return new (t || GraderuleComponent)(); };
GraderuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraderuleComponent, selectors: [["app-graderule"]], decls: 1, vars: 0, template: function GraderuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyYWRlcnVsZS9ncmFkZXJ1bGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraderuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graderule',
                templateUrl: './graderule.component.html',
                styleUrls: ['./graderule.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A1/I":
/*!****************************************************************************!*\
  !*** ./src/app/pages/graderule/list-graderule/list-graderule.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListGraderuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGraderuleComponent", function() { return ListGraderuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ListGraderuleComponent_tbody_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGraderuleComponent_tbody_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const list_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showConfirmationMessage(list_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Manage Payment Heads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.permissionInfo.search("Edit GradeRule") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/graderule/update-graderule/", list_r1._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.permissionInfo.search("Delete GradeRule") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../list-managePaymentHeads/", list_r1._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.permissionInfo.search("Create PaymentHeads") === -1);
} }
class ListGraderuleComponent {
    constructor(api, fb, route, util) {
        this.api = api;
        this.fb = fb;
        this.route = route;
        this.util = util;
    }
    ngOnInit() {
        this.listGradRule();
        this.permissionInfo = this.util.permissionRoleInfo;
    }
    listGradRule() {
        try {
            this.api.getGradeRuleList().subscribe(data => {
                if (data.status === 'success' || data.status === 200) {
                    this.listGradRuleData = data.data;
                    const len = Object.keys(this.listGradRuleData).length;
                    if (len == 0) {
                        this.route.navigateByUrl("pages/graderule/add-graderule");
                    }
                    else {
                        this.listGradRuleData = data.data;
                    }
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    showConfirmationMessage(gradeRuleid) {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
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
        }).then((result) => {
            if (result.value) {
                this.api.removeData(gradeRuleid).subscribe((data) => {
                    if (data.status === 'success') {
                        swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');
                    }
                    else if (data.status === 'error') {
                        swalWithBootstrapButtons.fire('ERROR!', data.message, 'error');
                    }
                    this.listGradRule();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
            }
        });
    }
    addGradeRule() {
        try {
            this.util.gradeRuleStatus = 1;
        }
        catch (err) {
            console.log(err);
        }
    }
}
ListGraderuleComponent.ɵfac = function ListGraderuleComponent_Factory(t) { return new (t || ListGraderuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"])); };
ListGraderuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListGraderuleComponent, selectors: [["app-list-graderule"]], decls: 15, vars: 2, consts: [[1, "card"], [1, "card-header", 2, "text-align", "center"], ["type", "button", "routerLink", "/pages/graderule/add-graderule", 1, "btn", "btn-primary", 2, "float", "right", 3, "disabled", "click"], [1, "fa", "fa-plus-square"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"], ["type", "button", 1, "btn", "btn-info", 3, "disabled", "routerLink"]], template: function ListGraderuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grade Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGraderuleComponent_Template_button_click_4_listener() { return ctx.addGradeRule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 Add Grade Rule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " S.No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListGraderuleComponent_tbody_14_Template, 16, 8, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.permissionInfo.search("Create GradeRule") === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listGradRuleData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JhZGVydWxlL2xpc3QtZ3JhZGVydWxlL2xpc3QtZ3JhZGVydWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyYWRlcnVsZS9saXN0LWdyYWRlcnVsZS9saXN0LWdyYWRlcnVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiB0YWJsZSB7XG4gIHdpZHRoOjEwMCU7XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG50aCwgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGFibGUjdDAxIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG50YWJsZSN0MDEgdHI6bnRoLWNoaWxkKG9kZCkge1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG50YWJsZSN0MDEgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufSAqL1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListGraderuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-graderule',
                templateUrl: './list-graderule.component.html',
                styleUrls: ['./list-graderule.component.css']
            }]
    }], function () { return [{ type: _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "LtOp":
/*!*************************************************************!*\
  !*** ./src/app/pages/graderule/graderule-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GraderuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraderuleRoutingModule", function() { return GraderuleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _graderule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graderule.component */ "2K7U");
/* harmony import */ var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authGuard/auth.guard */ "CG1p");
/* harmony import */ var _list_graderule_list_graderule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-graderule/list-graderule.component */ "A1/I");
/* harmony import */ var _add_graderule_add_graderule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-graderule/add-graderule.component */ "tq4x");
/* harmony import */ var _update_graderule_update_graderule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-graderule/update-graderule.component */ "Ro/x");
/* harmony import */ var _managePaymentHeads_list_managePaymentHeads_list_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./managePaymentHeads/list-managePaymentHeads/list-managePaymentHeads.component */ "nkfr");
/* harmony import */ var _managePaymentHeads_add_managePaymentHeads_add_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./managePaymentHeads/add-managePaymentHeads/add-managePaymentHeads.component */ "RKk6");
/* harmony import */ var _managePaymentHeads_update_managePaymentHeads_update_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./managePaymentHeads/update-managePaymentHeads/update-managePaymentHeads.component */ "u65t");













const route = [
    {
        path: '',
        component: _graderule_component__WEBPACK_IMPORTED_MODULE_3__["GraderuleComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: 'list-graderule',
                component: _list_graderule_list_graderule_component__WEBPACK_IMPORTED_MODULE_5__["ListGraderuleComponent"],
            },
            {
                path: 'list-managePaymentHeads/:gradeRuleId',
                component: _managePaymentHeads_list_managePaymentHeads_list_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_8__["ListManagePaymentHeadsComponent"]
            },
            {
                path: 'add-managePaymentHeads/:gradeRuleId',
                component: _managePaymentHeads_add_managePaymentHeads_add_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_9__["AddManagePaymentHeadsComponent"]
            },
            {
                path: 'update-managePaymentHeads/:paymentHeadId/:gradeRuleId',
                component: _managePaymentHeads_update_managePaymentHeads_update_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_10__["UpdateManagePaymentHeadsComponent"]
            },
            {
                path: 'add-graderule',
                component: _add_graderule_add_graderule_component__WEBPACK_IMPORTED_MODULE_6__["AddGraderuleComponent"]
            },
            {
                path: 'update-graderule/:gradeRuleId',
                component: _update_graderule_update_graderule_component__WEBPACK_IMPORTED_MODULE_7__["UpdateGraderuleComponent"]
            },
            {
                path: '',
                redirectTo: 'list-graderule',
                pathMatch: 'full',
            },
        ],
    }
];
class GraderuleRoutingModule {
}
GraderuleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraderuleRoutingModule });
GraderuleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraderuleRoutingModule_Factory(t) { return new (t || GraderuleRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraderuleRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraderuleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RKk6":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/graderule/managePaymentHeads/add-managePaymentHeads/add-managePaymentHeads.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AddManagePaymentHeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddManagePaymentHeadsComponent", function() { return AddManagePaymentHeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddManagePaymentHeadsComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function AddManagePaymentHeadsComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
} }
function AddManagePaymentHeadsComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", list_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r9.title);
} }
function AddManagePaymentHeadsComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r10.message, " ");
} }
function AddManagePaymentHeadsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddManagePaymentHeadsComponent_div_20_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.managePaymentForm.get("paymentHead.paymentHeadId").hasError(validation_r10.type) && (ctx_r3.managePaymentForm.get("paymentHead.paymentHeadId").dirty || ctx_r3.managePaymentForm.get("paymentHead.paymentHeadId").touched));
} }
function AddManagePaymentHeadsComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r13);
} }
function AddManagePaymentHeadsComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
} }
function AddManagePaymentHeadsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddManagePaymentHeadsComponent_div_33_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.managePaymentForm.get("paymentHead.type").hasError(validation_r14.type) && (ctx_r5.managePaymentForm.get("paymentHead.type").dirty || ctx_r5.managePaymentForm.get("paymentHead.type").touched));
} }
function AddManagePaymentHeadsComponent_div_34_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r18.message, " ");
} }
function AddManagePaymentHeadsComponent_div_34_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddManagePaymentHeadsComponent_div_34_div_9_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.managePaymentForm.get("paymentHead.value").hasError(validation_r18.type) && (ctx_r17.managePaymentForm.get("paymentHead.value").dirty || ctx_r17.managePaymentForm.get("paymentHead.value").touched));
} }
function AddManagePaymentHeadsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Amount:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddManagePaymentHeadsComponent_div_34_div_9_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.validationMessage.value);
} }
function AddManagePaymentHeadsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Percent:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AddManagePaymentHeadsComponent_div_35_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.demo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.percentErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMsg, "");
} }
function AddManagePaymentHeadsComponent_div_36_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fixedHeads_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fixedHeads_r24.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fixedHeads_r24.name);
} }
function AddManagePaymentHeadsComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Percent Of:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddManagePaymentHeadsComponent_div_36_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.percentOf($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "----Select Percent Of----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddManagePaymentHeadsComponent_div_36_option_10_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.fixedPaymentHeadsList);
} }
class AddManagePaymentHeadsComponent {
    constructor(api, fb, route, ngZone, router, util) {
        this.api = api;
        this.fb = fb;
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this.util = util;
        this.fixedPaymentHeadsList = [];
        this.Fixed = false;
        this.Percent = false;
        this.gradeType = ['Fixed', 'Percent'];
        this.successMessage = false;
        this.serverErrorMsg = false;
        this.percentOfValue = 'basicSalary';
        this.validationMessage = {
            'value': [
                { type: 'required', message: 'Amount is Required' },
                { type: 'maxlength', message: 'Amount is too Large' },
                { type: 'pattern', message: 'Amount not valid' },
            ],
            'paymentHeadId': [
                { type: 'required', message: 'Payment Head is Required' },
            ],
            'type': [
                { type: 'required', message: 'Type  is Required' },
            ],
        };
    }
    ngOnDestroy() {
        document.getElementById('headerCompanyDropDown').removeAttribute('disabled');
    }
    // constructor(private api:GraderuleApiService,private fb:FormBuilder,public route:Router,){}
    ngOnInit() {
        this.gradeRuleId = this.route.snapshot.paramMap.get("gradeRuleId");
        this.addMemberValidation();
        this.fixedPaymentHeads();
        this.paymentHeadList();
        document.getElementById('headerCompanyDropDown').setAttribute('disabled', 'disabled');
        this.permissionInfo = this.util.permissionRoleInfo;
        if (this.permissionInfo.search('Create PaymentHeads') === -1) {
            this.managePaymentForm.disable();
        }
    }
    check(name) {
        let dynamicValidation = {
            fixed: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
            ],
            percent: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/)
            ]
        };
        try {
            let gradeType = name.target.options[name.target.options.selectedIndex].text;
            if (gradeType == 'Fixed') {
                this.Fixed = true;
                this.Percent = false;
                this.errorMsg = '';
                this.percentErrorMsg = '';
                this.managePaymentForm.get('paymentHead.value').setValidators(dynamicValidation['fixed']);
                this.managePaymentForm.get('paymentHead.value').updateValueAndValidity();
            }
            else if (gradeType == 'Percent') {
                this.Percent = true;
                this.Fixed = false;
                if (this.managePaymentForm.get('paymentHead.value').value) {
                    this.switchTypeValidation(this.managePaymentForm.get('paymentHead.value').value);
                }
                this.managePaymentForm.get('paymentHead.value').setValidators(dynamicValidation['percent']);
                this.managePaymentForm.get('paymentHead.value').updateValueAndValidity();
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    addMemberValidation() {
        try {
            this.managePaymentForm = this.fb.group({
                paymentHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    paymentHeadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'),])),
                })
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    paymentHeadList() {
        this.api.filterPaymentHeads(this.gradeRuleId).subscribe(data => {
            this.paymentHeadDataList = data.data;
        });
    }
    managePaymentData() {
        try {
            this.api.addGradules(this.managePaymentForm.value, this.gradeRuleId, this.percentOfValue).subscribe(data => {
                if (data.status === 'success') {
                    this.successMessage = true;
                    this.serverErrorMsg = false;
                    this.successMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                        this.router.navigateByUrl(`pages/graderule/list-managePaymentHeads/${this.gradeRuleId}`);
                    }, 2000);
                }
                else {
                    this.serverErrorMsg = true;
                    this.successMessage = false;
                    this.errMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                    }, 3000);
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    handleErrors() {
        this.serverErrorMsg = false;
        this.successMessage = false;
        this.errMsg = '';
        this.successMsg = '';
    }
    demo() {
        if (document.getElementById('typeValue').value != 'Fixed') {
            this.inputValue = document.getElementById('percentValue').value;
            if (this.inputValue > 0 && this.inputValue <= 100) {
                this.percentErrorMsg = '';
                this.errorMsg = '';
            }
            else if (this.inputValue.length == 0) {
                this.percentErrorMsg = 'Percent is Required';
                this.errorMsg = '';
            }
            else {
                this.percentErrorMsg = '';
                this.errorMsg = 'Enter value is not valid';
            }
        }
    }
    // Check For Validation When User Switch The Type
    switchTypeValidation(inputValue) {
        if (inputValue > 0 && inputValue <= 100) {
            this.percentErrorMsg = '';
            this.errorMsg = '';
        }
        else if ((inputValue).toString().length == 0) {
            this.percentErrorMsg = 'Percent is Required';
            this.errorMsg = '';
        }
        else if ((inputValue).toString().length > 6) {
            this.percentErrorMsg = 'Percent Value is too Large';
            this.errorMsg = '';
        }
        else {
            this.percentErrorMsg = '';
            this.errorMsg = 'Enter value is not valid';
        }
    }
    // Fixed Payment Heads
    fixedPaymentHeads() {
        try {
            this.api.fixedPaymentHeads(this.gradeRuleId).subscribe((data) => {
                if (data.status === 'success') {
                    this.fixedPaymentHeadsList = data.data;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    percentOf(value) {
        this.percentOfValue = value;
    }
}
AddManagePaymentHeadsComponent.ɵfac = function AddManagePaymentHeadsComponent_Factory(t) { return new (t || AddManagePaymentHeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
AddManagePaymentHeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddManagePaymentHeadsComponent, selectors: [["app-add-managePaymentHeads"]], decls: 41, vars: 13, consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [3, "formGroup"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["name", "Payment Heades", "formControlName", "paymentHeadId", 1, "dropdown", "dropdown-toggle", "form-control"], ["ng-selected", "true", "value", "", "disabled", ""], ["selected", "", 3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-4"], [1, "col-sm-8", "control-label"], ["id", "typeValue", "formControlName", "type", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "btn", "btn-danger", 3, "routerLink"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["selected", "", 3, "ngValue"], ["style", "color: red;margin-left: 1%;", "style", "color: red;margin-left: 1%;", 4, "ngIf"], [2, "color", "red", "margin-left", "1%"], [1, "dropdown-item"], [1, "form-group"], ["type", "text", "id", "value", "placeholder", "Enter Amount", "formControlName", "value", "required", "", 1, "form-control"], ["type", "number", "id", "percentValue", "placeholder", "Enter Percent", "formControlName", "value", "required", "", 1, "form-control", 3, "input"], [2, "color", "red"], ["name", "Payment Heades", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["selected", "", 3, "value"]], template: function AddManagePaymentHeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Manage Payment Heads Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddManagePaymentHeadsComponent_p_6_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddManagePaymentHeadsComponent_p_8_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddManagePaymentHeadsComponent_Template_form_ngSubmit_9_listener() { return ctx.managePaymentData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Payment Head:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "----------Select Payment Head Name----------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddManagePaymentHeadsComponent_option_19_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddManagePaymentHeadsComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Type:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddManagePaymentHeadsComponent_Template_select_change_29_listener($event) { return ctx.check($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "----------Select Grade Type----------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddManagePaymentHeadsComponent_option_32_Template, 2, 1, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddManagePaymentHeadsComponent_div_33_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddManagePaymentHeadsComponent_div_34_Template, 10, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddManagePaymentHeadsComponent_div_35_Template, 15, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddManagePaymentHeadsComponent_div_36_Template, 11, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.managePaymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.managePaymentForm.get("paymentHead"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentHeadDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.paymentHeadId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gradeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.managePaymentForm.invalid || ctx.errorMsg || ctx.percentErrorMsg || ctx.permissionInfo.search("Create PaymentHeads") === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/graderule/list-managePaymentHeads/", ctx.gradeRuleId, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddManagePaymentHeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-managePaymentHeads',
                templateUrl: './add-managePaymentHeads.component.html'
            }]
    }], function () { return [{ type: _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "Ro/x":
/*!********************************************************************************!*\
  !*** ./src/app/pages/graderule/update-graderule/update-graderule.component.ts ***!
  \********************************************************************************/
/*! exports provided: UpdateGraderuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateGraderuleComponent", function() { return UpdateGraderuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UpdateGraderuleComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function UpdateGraderuleComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
} }
function UpdateGraderuleComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r3.message, " ");
} }
function UpdateGraderuleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateGraderuleComponent_div_18_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.graderuleUpdateForm.get("title").hasError(validation_r3.type) && (ctx_r2.graderuleUpdateForm.get("title").dirty || ctx_r2.graderuleUpdateForm.get("title").touched));
} }
class UpdateGraderuleComponent {
    constructor(api, fb, route, ngZone, router, util) {
        this.api = api;
        this.fb = fb;
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this.util = util;
        this.successMessage = false;
        this.errorMsg = false;
        this.validationMessage = {
            'title': [
                { type: 'required', message: 'Title is required' },
            ],
        };
        this.gradeRuleId = this.route.snapshot.paramMap.get("gradeRuleId");
        this.util.moduleExists(this.gradeRuleId, 'GradeRule').subscribe((data) => {
            if (data.status === 'success') {
                if (!data.data) {
                    this.router.navigateByUrl('/pages/graderule/list-graderule');
                }
            }
        });
    }
    ngOnInit() {
        this.addMemberValidation();
        this.existingData();
        this.permissionInfo = this.util.permissionRoleInfo;
        if (this.permissionInfo.search('Edit GradeRule') === -1) {
            this.graderuleUpdateForm.disable();
        }
    }
    addMemberValidation() {
        this.graderuleUpdateForm = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    existingData() {
        this.api.existingData(this.gradeRuleId).subscribe(data => {
            this.graderuleUpdateForm = this.fb.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.data.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
        });
    }
    graderuleUpdateData() {
        try {
            let cleanUpdateGradeRuleForm = this.util.cleanFormLevelOne(this.graderuleUpdateForm);
            this.api.updateGadeRule(cleanUpdateGradeRuleForm.value, this.gradeRuleId).subscribe(data => {
                if (data.status === 'success') {
                    this.successMessage = true;
                    this.errorMsg = false;
                    this.successMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                        this.ngZone.run(() => this.router.navigateByUrl('/pages/graderule/list-graderule'));
                    }, 2000);
                }
                else {
                    this.successMessage = false;
                    this.errorMsg = true;
                    this.errMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                    }, 3000);
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    handleErrors() {
        this.errorMsg = false;
        this.successMessage = false;
        this.errMsg = '';
        this.successMsg = '';
    }
}
UpdateGraderuleComponent.ɵfac = function UpdateGraderuleComponent_Factory(t) { return new (t || UpdateGraderuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
UpdateGraderuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateGraderuleComponent, selectors: [["app-update-graderule"]], decls: 23, vars: 5, consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "placeholder", "Enter Title", "formControlName", "title", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["routerLink", "/pages/graderule/list-graderule", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color: red;margin-left: 1%;", "style", "color: red;margin-left: 1%;", 4, "ngIf"], [2, "color", "red", "margin-left", "1%"]], template: function UpdateGraderuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Grade Rule Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateGraderuleComponent_p_6_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateGraderuleComponent_p_8_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateGraderuleComponent_Template_form_ngSubmit_9_listener() { return ctx.graderuleUpdateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UpdateGraderuleComponent_div_18_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.graderuleUpdateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.graderuleUpdateForm.invalid || ctx.permissionInfo.search("Edit GradeRule") === -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateGraderuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-graderule',
                templateUrl: 'update-graderule.component.html'
            }]
    }], function () { return [{ type: _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "nkfr":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/graderule/managePaymentHeads/list-managePaymentHeads/list-managePaymentHeads.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ListManagePaymentHeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListManagePaymentHeadsComponent", function() { return ListManagePaymentHeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ListManagePaymentHeadsComponent_tbody_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListManagePaymentHeadsComponent_tbody_24_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const list_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showConfirmationMessage(list_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.paymentHeadName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.permissionInfo.search("Edit PaymentHeads") === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/pages/graderule/update-managePaymentHeads/", list_r1._id, "/", ctx_r0.gradeRuleId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.permissionInfo.search("Delete PaymentHeads") === -1);
} }
class ListManagePaymentHeadsComponent {
    constructor(api, fb, route, ngZone, router, util) {
        this.api = api;
        this.fb = fb;
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this.util = util;
        this.showCard = {};
        this.leaveListData = new Array();
        this.companyShowData = [];
    }
    ngOnDestroy() {
        document.getElementById('headerCompanyDropDown').removeAttribute('disabled');
    }
    ngOnInit() {
        this.gradeRuleId = this.route.snapshot.paramMap.get("gradeRuleId");
        this.listGradeRule();
        document.getElementById('headerCompanyDropDown').setAttribute('disabled', 'disabled');
        this.permissionInfo = this.util.permissionRoleInfo;
    }
    listGradeRule() {
        this.api.existingData(this.gradeRuleId).subscribe(data => {
            this.gradeRuleTitle = data.data.title;
            this.dataValue = data.data.paymentHeads;
        });
    }
    showConfirmationMessage(paymentHeadsId) {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
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
        }).then((result) => {
            if (result.value) {
                this.api.removeGradeData(paymentHeadsId, this.gradeRuleId).subscribe((data) => {
                    swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');
                    this.listGradeRule();
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your list data safe', 'error');
            }
        });
    }
}
ListManagePaymentHeadsComponent.ɵfac = function ListManagePaymentHeadsComponent_Factory(t) { return new (t || ListManagePaymentHeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"])); };
ListManagePaymentHeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListManagePaymentHeadsComponent, selectors: [["app-list-managePaymentHeads"]], decls: 25, vars: 4, consts: [[1, "card"], [1, "card-header"], [2, "text-align", "center"], ["type", "button", 1, "btn", "btn-primary", 2, "float", "right", 3, "disabled", "routerLink"], [1, "fa", "fa-plus-square"], ["type", "button", "routerLink", "/pages/graderule/list-graderule", 1, "btn", "btn-primary", 2, "float", "right"], [1, "fa", "fa-arrow-left"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-trash"]], template: function ListManagePaymentHeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Heads List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 Add Payment Heads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "S.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Amount/Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ListManagePaymentHeadsComponent_tbody_24_Template, 18, 9, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/graderule/add-managePaymentHeads/", ctx.gradeRuleId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.permissionInfo.search("Create PaymentHeads") === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gradeRuleTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataValue);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #50cbce;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JhZGVydWxlL21hbmFnZVBheW1lbnRIZWFkcy9saXN0LW1hbmFnZVBheW1lbnRIZWFkcy9saXN0LW1hbmFnZVBheW1lbnRIZWFkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3JhZGVydWxlL21hbmFnZVBheW1lbnRIZWFkcy9saXN0LW1hbmFnZVBheW1lbnRIZWFkcy9saXN0LW1hbmFnZVBheW1lbnRIZWFkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciBoNHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzUwY2JjZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListManagePaymentHeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-managePaymentHeads',
                templateUrl: './list-managePaymentHeads.component.html',
                styleUrls: ['./list-managePaymentHeads.component.scss']
            }]
    }], function () { return [{ type: _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "nqxb":
/*!*****************************************************!*\
  !*** ./src/app/pages/graderule/graderule.module.ts ***!
  \*****************************************************/
/*! exports provided: GraderuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraderuleModule", function() { return GraderuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _graderule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graderule-routing.module */ "LtOp");
/* harmony import */ var _graderule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graderule.component */ "2K7U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_graderule_list_graderule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-graderule/list-graderule.component */ "A1/I");
/* harmony import */ var _add_graderule_add_graderule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-graderule/add-graderule.component */ "tq4x");
/* harmony import */ var _update_graderule_update_graderule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-graderule/update-graderule.component */ "Ro/x");
/* harmony import */ var _managePaymentHeads_list_managePaymentHeads_list_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./managePaymentHeads/list-managePaymentHeads/list-managePaymentHeads.component */ "nkfr");
/* harmony import */ var _managePaymentHeads_add_managePaymentHeads_add_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./managePaymentHeads/add-managePaymentHeads/add-managePaymentHeads.component */ "RKk6");
/* harmony import */ var _managePaymentHeads_update_managePaymentHeads_update_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./managePaymentHeads/update-managePaymentHeads/update-managePaymentHeads.component */ "u65t");













class GraderuleModule {
}
GraderuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GraderuleModule });
GraderuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GraderuleModule_Factory(t) { return new (t || GraderuleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _graderule_routing_module__WEBPACK_IMPORTED_MODULE_2__["GraderuleRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraderuleModule, { declarations: [_graderule_component__WEBPACK_IMPORTED_MODULE_3__["GraderuleComponent"],
        _list_graderule_list_graderule_component__WEBPACK_IMPORTED_MODULE_6__["ListGraderuleComponent"],
        _add_graderule_add_graderule_component__WEBPACK_IMPORTED_MODULE_7__["AddGraderuleComponent"],
        _update_graderule_update_graderule_component__WEBPACK_IMPORTED_MODULE_8__["UpdateGraderuleComponent"],
        _managePaymentHeads_list_managePaymentHeads_list_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_9__["ListManagePaymentHeadsComponent"],
        _managePaymentHeads_add_managePaymentHeads_add_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_10__["AddManagePaymentHeadsComponent"], _managePaymentHeads_update_managePaymentHeads_update_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_11__["UpdateManagePaymentHeadsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _graderule_routing_module__WEBPACK_IMPORTED_MODULE_2__["GraderuleRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraderuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _graderule_component__WEBPACK_IMPORTED_MODULE_3__["GraderuleComponent"],
                    _list_graderule_list_graderule_component__WEBPACK_IMPORTED_MODULE_6__["ListGraderuleComponent"],
                    _add_graderule_add_graderule_component__WEBPACK_IMPORTED_MODULE_7__["AddGraderuleComponent"],
                    _update_graderule_update_graderule_component__WEBPACK_IMPORTED_MODULE_8__["UpdateGraderuleComponent"],
                    _managePaymentHeads_list_managePaymentHeads_list_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_9__["ListManagePaymentHeadsComponent"],
                    _managePaymentHeads_add_managePaymentHeads_add_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_10__["AddManagePaymentHeadsComponent"], _managePaymentHeads_update_managePaymentHeads_update_managePaymentHeads_component__WEBPACK_IMPORTED_MODULE_11__["UpdateManagePaymentHeadsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _graderule_routing_module__WEBPACK_IMPORTED_MODULE_2__["GraderuleRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tq4x":
/*!**************************************************************************!*\
  !*** ./src/app/pages/graderule/add-graderule/add-graderule.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddGraderuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGraderuleComponent", function() { return AddGraderuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddGraderuleComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function AddGraderuleComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
} }
function AddGraderuleComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r10.message, " ");
} }
function AddGraderuleComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddGraderuleComponent_div_19_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.graderuleForm.get("title").hasError(validation_r10.type) && (ctx_r2.graderuleForm.get("title").dirty || ctx_r2.graderuleForm.get("title").touched));
} }
function AddGraderuleComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", list_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r13.title);
} }
function AddGraderuleComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
} }
function AddGraderuleComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddGraderuleComponent_div_30_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.graderuleForm.get("paymentHead.paymentHeadId").hasError(validation_r14.type) && (ctx_r4.graderuleForm.get("paymentHead.paymentHeadId").dirty || ctx_r4.graderuleForm.get("paymentHead.paymentHeadId").touched));
} }
function AddGraderuleComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r17);
} }
function AddGraderuleComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r18.message, " ");
} }
function AddGraderuleComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddGraderuleComponent_div_41_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.graderuleForm.get("paymentHead.type").hasError(validation_r18.type) && (ctx_r6.graderuleForm.get("paymentHead.type").dirty || ctx_r6.graderuleForm.get("paymentHead.type").touched));
} }
function AddGraderuleComponent_div_42_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r22.message, " ");
} }
function AddGraderuleComponent_div_42_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddGraderuleComponent_div_42_div_9_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.graderuleForm.get("paymentHead.value").hasError(validation_r22.type) && (ctx_r21.graderuleForm.get("paymentHead.value").dirty || ctx_r21.graderuleForm.get("paymentHead.value").touched));
} }
function AddGraderuleComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Amount:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddGraderuleComponent_div_42_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.validationMessage.value);
} }
function AddGraderuleComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Percent:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AddGraderuleComponent_div_43_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.demo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.percentErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.errorMsg, "");
} }
function AddGraderuleComponent_div_44_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fixedHeads_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", fixedHeads_r28.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fixedHeads_r28.name);
} }
function AddGraderuleComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Percent Of:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "----Select Percent Of----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddGraderuleComponent_div_44_option_10_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.fixedPaymentHeadsList);
} }
class AddGraderuleComponent {
    constructor(api, fb, router, util) {
        this.api = api;
        this.fb = fb;
        this.router = router;
        this.util = util;
        this.Fixed = false;
        this.Percent = false;
        this.percentErrorMsg = 'Percent is Required';
        this.gradeType = ['Fixed', 'Percent'];
        this.successMessage = false;
        this.serverErrorMsg = false;
        this.fixedPaymentHeadsList = [];
        this.percentOfValue = 'basicSalary';
        this.validationMessage = {
            'title': [
                { type: 'required', message: 'Title is required' },
            ],
            'value': [
                { type: 'required', message: 'Amount is required' },
                { type: 'maxlength', message: 'Amount is too Large' },
                { type: 'pattern', message: 'Amount not valid' },
            ],
            'paymentHeadId': [
                { type: 'required', message: 'Payment Head is required' },
            ],
            'type': [
                { type: 'required', message: 'Type  is required' },
            ],
        };
        this.isListAvaliable();
    }
    ngOnInit() {
        this.paymentHeadList();
        this.addMemberValidation();
        this.fixedPaymentHeads();
        this.permissionInfo = this.util.permissionRoleInfo;
        if (this.permissionInfo.search('Create GradeRule') === -1) {
            this.graderuleForm.disable();
        }
    }
    check(name) {
        let dynamicValidation = {
            fixed: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
            ],
            percent: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/)
            ]
        };
        let gradeType = name.target.options[name.target.options.selectedIndex].text;
        if (gradeType == 'Fixed') {
            this.Fixed = true;
            this.Percent = false;
            this.errorMsg = '';
            this.percentErrorMsg = '';
            this.graderuleForm.get('paymentHead.value').setValidators(dynamicValidation['fixed']);
            this.graderuleForm.get('paymentHead.value').updateValueAndValidity();
        }
        else if (gradeType == 'Percent') {
            this.Percent = true;
            this.Fixed = false;
            if (this.graderuleForm.get('paymentHead.value').value) {
                this.switchTypeValidation(this.graderuleForm.get('paymentHead.value').value);
            }
            this.graderuleForm.get('paymentHead.value').setValidators(dynamicValidation['percent']);
            this.graderuleForm.get('paymentHead.value').updateValueAndValidity();
        }
    }
    addMemberValidation() {
        this.graderuleForm = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            paymentHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                paymentHeadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'),
                ])),
            })
        });
    }
    paymentHeadList() {
        this.api.getPaymentHeadData().subscribe(data => {
            this.paymentHeadDataList = data.data;
        });
    }
    graderuleData() {
        try {
            this.api.getGradeRule(this.graderuleForm.value, this.percentOfValue).subscribe(data => {
                if (data.status === 'success') {
                    this.successMessage = true;
                    this.serverErrorMsg = false;
                    this.successMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                        this.router.navigateByUrl("pages/graderule/list-graderule");
                    }, 2000);
                }
                else {
                    this.serverErrorMsg = true;
                    this.successMessage = false;
                    this.errMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                    }, 3000);
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    demo() {
        if (document.getElementById('typeValue').value != 'Fixed') {
            this.inputValue = document.getElementById('percentValue').value;
            if (this.inputValue > 0 && this.inputValue <= 100) {
                this.percentErrorMsg = '';
                this.errorMsg = '';
            }
            else if (this.inputValue.length == 0) {
                this.percentErrorMsg = 'Percent is Required';
                this.errorMsg = '';
            }
            else if (this.inputValue.length > 6) {
                this.percentErrorMsg = 'Percent Value is too Large';
                this.errorMsg = '';
            }
            else {
                this.percentErrorMsg = '';
                this.errorMsg = 'Enter value is not valid';
            }
        }
    }
    // Check For Validation When User Switch The Type
    switchTypeValidation(inputValue) {
        if (inputValue > 0 && inputValue <= 100) {
            this.percentErrorMsg = '';
            this.errorMsg = '';
        }
        else if ((inputValue).toString().length == 0) {
            this.percentErrorMsg = 'Percent is Required';
            this.errorMsg = '';
        }
        else if ((inputValue).toString().length > 6) {
            this.percentErrorMsg = 'Percent Value is too Large';
            this.errorMsg = '';
        }
        else {
            this.percentErrorMsg = '';
            this.errorMsg = 'Enter value is not valid';
        }
    }
    handleErrors() {
        this.serverErrorMsg = false;
        this.successMessage = false;
        this.errMsg = '';
        this.successMsg = '';
    }
    isListAvaliable() {
        try {
            this.api.getGradeRuleList().subscribe((data) => {
                if (data.status === 'success') {
                    if (data.data.length > 0 && this.util.gradeRuleStatus !== 1) {
                        this.router.navigateByUrl("/pages/graderule/list-graderule");
                        this.util.gradeRuleStatus = 0;
                    }
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    // Fixed Payment Heads
    fixedPaymentHeads() {
        try {
            this.api.fixedPaymentHeads(undefined).subscribe((data) => {
                if (data.status === 'success') {
                    this.fixedPaymentHeadsList = data.data;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
AddGraderuleComponent.ɵfac = function AddGraderuleComponent_Factory(t) { return new (t || AddGraderuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
AddGraderuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddGraderuleComponent, selectors: [["app-add-graderule"]], decls: 49, vars: 13, consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "cols"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "title", "placeholder", "Enter Title", "formControlName", "title", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["name", "Payment Heades", "formControlName", "paymentHeadId", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["ng-selected", "true", "value", "", "disabled", ""], ["selected", "", 3, "ngValue", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-4"], [1, "col-sm-4", "control-label"], ["id", "typeValue", "formControlName", "type", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["routerLink", "/pages/graderule/list-graderule", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color: red;margin-left: 1%;", "style", "color: red;margin-left: 1%;", 4, "ngIf"], [2, "color", "red", "margin-left", "1%"], ["selected", "", 3, "ngValue"], [1, "dropdown-item"], ["type", "text", "id", "value", "placeholder", "Enter Amount", "formControlName", "value", "required", "", 1, "form-control"], ["type", "number", "id", "percentValue", "placeholder", "Enter Percent", "formControlName", "value", "required", "", 1, "form-control", 3, "input"], [2, "color", "red"], ["name", "Payment Heades", 1, "dropdown", "dropdown-toggle", "form-control"]], template: function AddGraderuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grade Rule Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddGraderuleComponent_p_6_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddGraderuleComponent_p_8_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddGraderuleComponent_Template_form_ngSubmit_9_listener() { return ctx.graderuleData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddGraderuleComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Payment Head:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddGraderuleComponent_Template_select_change_26_listener($event) { return ctx.check($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "----------Select Payment Head Name----------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddGraderuleComponent_option_29_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddGraderuleComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Type:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddGraderuleComponent_Template_select_change_37_listener($event) { return ctx.check($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "----------Select Grade Type----------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddGraderuleComponent_option_40_Template, 2, 1, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddGraderuleComponent_div_41_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddGraderuleComponent_div_42_Template, 10, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddGraderuleComponent_div_43_Template, 15, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddGraderuleComponent_div_44_Template, 11, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddGraderuleComponent_Template_button_click_45_listener() { return ctx.demo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.graderuleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.graderuleForm.get("paymentHead"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentHeadDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.paymentHeadId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gradeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.graderuleForm.invalid || ctx.errorMsg || ctx.percentErrorMsg || ctx.permissionInfo.search("Create GradeRule") === -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddGraderuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-graderule',
                templateUrl: './add-graderule.component.html'
            }]
    }], function () { return [{ type: _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "u65t":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/graderule/managePaymentHeads/update-managePaymentHeads/update-managePaymentHeads.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: UpdateManagePaymentHeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateManagePaymentHeadsComponent", function() { return UpdateManagePaymentHeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UpdateManagePaymentHeadsComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function UpdateManagePaymentHeadsComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
} }
function UpdateManagePaymentHeadsComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", list_r9._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r9.title);
} }
function UpdateManagePaymentHeadsComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r10.message, " ");
} }
function UpdateManagePaymentHeadsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateManagePaymentHeadsComponent_div_18_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.updateManagePaymentForm.get("paymentHead.paymentHeadId").hasError(validation_r10.type) && (ctx_r3.updateManagePaymentForm.get("paymentHead.paymentHeadId").dirty || ctx_r3.updateManagePaymentForm.get("paymentHead.paymentHeadId").touched));
} }
function UpdateManagePaymentHeadsComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r13);
} }
function UpdateManagePaymentHeadsComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
} }
function UpdateManagePaymentHeadsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateManagePaymentHeadsComponent_div_29_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.updateManagePaymentForm.get("paymentHead.type").hasError(validation_r14.type) && (ctx_r5.updateManagePaymentForm.get("paymentHead.type").dirty || ctx_r5.updateManagePaymentForm.get("paymentHead.type").touched));
} }
function UpdateManagePaymentHeadsComponent_div_30_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r18.message, " ");
} }
function UpdateManagePaymentHeadsComponent_div_30_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateManagePaymentHeadsComponent_div_30_div_9_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.updateManagePaymentForm.get("paymentHead.value").hasError(validation_r18.type) && (ctx_r17.updateManagePaymentForm.get("paymentHead.value").dirty || ctx_r17.updateManagePaymentForm.get("paymentHead.value").touched));
} }
function UpdateManagePaymentHeadsComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Amount:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdateManagePaymentHeadsComponent_div_30_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.validationMessage.value);
} }
function UpdateManagePaymentHeadsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter Percent:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UpdateManagePaymentHeadsComponent_div_31_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.demo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.percentErrorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMsg, "");
} }
function UpdateManagePaymentHeadsComponent_div_32_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fixedHeads_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fixedHeads_r24.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fixedHeads_r24.name);
} }
function UpdateManagePaymentHeadsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Percent Of:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateManagePaymentHeadsComponent_div_32_Template_select_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.percentOf($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "----Select Percent Of----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdateManagePaymentHeadsComponent_div_32_option_10_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.fixedPaymentHeadsList);
} }
class UpdateManagePaymentHeadsComponent {
    constructor(fb, api, router, ngZone, route, util) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.ngZone = ngZone;
        this.route = route;
        this.util = util;
        this.gradeType = ['Fixed', 'Percent'];
        this.Fixed = false;
        this.Percent = false;
        this.successMessage = false;
        this.serverErrorMsg = false;
        this.validationMessage = {
            'value': [
                { type: 'required', message: 'Amount is Required' },
                { type: 'maxlength', message: 'Amount is too Large' },
                { type: 'pattern', message: 'Amount not valid' },
            ],
            'paymentHeadId': [
                { type: 'required', message: 'Payment Head is Required' },
            ],
            'type': [
                { type: 'required', message: 'Type  is Required' },
            ],
        };
        this.percentOfFunction = function percentOfFunction(percentValue) {
            setTimeout(() => {
                document.getElementById('percentOfValue').value = percentValue;
            }, 200);
        };
    }
    ngOnDestroy() {
        document.getElementById('headerCompanyDropDown').removeAttribute('disabled');
    }
    ngOnInit() {
        this.paymentHeadId = this.route.snapshot.paramMap.get("paymentHeadId");
        this.gradeRuleId = this.route.snapshot.paramMap.get("gradeRuleId");
        this.paymentHeadList();
        this.addMemberValidation();
        this.existing();
        this.fixedPaymentHeadList();
        document.getElementById('headerCompanyDropDown').setAttribute('disabled', 'disabled');
        this.permissionInfo = this.util.permissionRoleInfo;
        if (this.permissionInfo.search('Edit PaymentHeads') === -1) {
            this.updateManagePaymentForm.disable();
        }
    }
    existing() {
        try {
            this.api.existingData(this.gradeRuleId).subscribe(data => {
                if (data.status === 'success') {
                    this.existingGradeRule = data.data.paymentHeads;
                    this.existingGradeRule.forEach((items) => {
                        if (items._id == this.paymentHeadId) {
                            if (items.type === 'Percent') {
                                this.Percent = true;
                                this.Fixed = false;
                                this.percentOfValue = items.percentOfValue;
                                this.percentOfFunction(items.percentOfValue);
                                this.errorMsg = '';
                                this.percentErrorMsg = '';
                                this.updateManagePaymentForm = this.fb.group({
                                    paymentHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                                        paymentHeadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](items.paymentHeadId),
                                        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](items.type),
                                        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](items.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/),])),
                                    })
                                });
                            }
                            else {
                                this.Percent = false;
                                this.Fixed = true;
                                this.updateManagePaymentForm = this.fb.group({
                                    paymentHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                                        paymentHeadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](items.paymentHeadId),
                                        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](items.type),
                                        value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](items.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$'),])),
                                    })
                                });
                            }
                            this.existingPaymentHeadId = items._id;
                            this.existingPaymentHeadName = items.paymentHeadName;
                        }
                        else {
                            return;
                        }
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    paymentHeadList() {
        this.api.getPaymentHeadData().subscribe(data => {
            this.paymentHeadDataList = data.data;
        });
    }
    // Update Payment Heads
    updatePaymentHeads() {
        try {
            this.api.updatePaymentHeads(this.updateManagePaymentForm.value, this.paymentHeadId, this.gradeRuleId, this.percentOfValue, this.Percent).subscribe(data => {
                if (data.status === 'success') {
                    this.successMessage = true;
                    this.serverErrorMsg = false;
                    this.successMsg = data.message;
                    setTimeout(() => {
                        this.router.navigateByUrl("pages/graderule/list-graderule");
                    }, 1000);
                }
                else {
                    this.serverErrorMsg = true;
                    this.successMessage = false;
                    this.errMsg = data.message;
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    addMemberValidation() {
        try {
            this.updateManagePaymentForm = this.fb.group({
                paymentHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    paymentHeadId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/),])),
                })
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    check(name) {
        let dynamicValidation = {
            fixed: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')
            ],
            percent: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\d{0,2}(?:\.\d{0,2})?$/)
            ]
        };
        let gradeType = name.target.options[name.target.options.selectedIndex].text;
        if (gradeType == 'Fixed') {
            this.Fixed = true;
            this.Percent = false;
            this.errorMsg = '';
            this.percentErrorMsg = '';
            this.updateManagePaymentForm.get('paymentHead.value').setValidators(dynamicValidation['fixed']);
            this.updateManagePaymentForm.get('paymentHead.value').updateValueAndValidity();
        }
        else if (gradeType == 'Percent') {
            this.Percent = true;
            this.Fixed = false;
            if (this.updateManagePaymentForm.get('paymentHead.value').value) {
                this.switchTypeValidation(this.updateManagePaymentForm.get('paymentHead.value').value);
            }
            this.updateManagePaymentForm.get('paymentHead.value').setValidators(dynamicValidation['percent']);
            this.updateManagePaymentForm.get('paymentHead.value').updateValueAndValidity();
        }
    }
    demo() {
        if (document.getElementById('typeValue').value != 'Fixed') {
            this.inputValue = document.getElementById('percentValue').value;
            if (this.inputValue > 0 && this.inputValue <= 100) {
                this.percentErrorMsg = '';
                this.errorMsg = '';
            }
            else if (this.inputValue.length == 0) {
                this.percentErrorMsg = 'Percent is Required';
                this.errorMsg = '';
            }
            else if (this.inputValue.length > 6) {
                this.percentErrorMsg = 'Percent Value is too Large';
                this.errorMsg = '';
            }
            else {
                this.percentErrorMsg = '';
                this.errorMsg = 'Enter value is not valid';
            }
        }
    }
    // Check For Validation When User Switch The Type
    switchTypeValidation(inputValue) {
        if (inputValue > 0 && inputValue <= 100) {
            this.percentErrorMsg = '';
            this.errorMsg = '';
        }
        else if ((inputValue).toString().length == 0) {
            this.percentErrorMsg = 'Percent is Required';
            this.errorMsg = '';
        }
        else if ((inputValue).toString().length > 6) {
            this.percentErrorMsg = 'Percent Value is too Large';
            this.errorMsg = '';
        }
        else {
            this.percentErrorMsg = '';
            this.errorMsg = 'Enter value is not valid';
        }
    }
    fixedPaymentHeadList() {
        this.api.fixedPaymentHeads(this.gradeRuleId).subscribe((data) => {
            if (data.status === 'success') {
                this.fixedPaymentHeadsList = data.data;
            }
        });
    }
    percentOf(value) {
        this.percentOfValue = value;
    }
}
UpdateManagePaymentHeadsComponent.ɵfac = function UpdateManagePaymentHeadsComponent_Factory(t) { return new (t || UpdateManagePaymentHeadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
UpdateManagePaymentHeadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateManagePaymentHeadsComponent, selectors: [["app-update-managePaymentHeads"]], decls: 37, vars: 13, consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [3, "formGroup"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["name", "Payment Heades", "formControlName", "paymentHeadId", 1, "dropdown", "dropdown-toggle", "form-control"], ["selected", "", 3, "ngValue", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-4"], [1, "col-sm-8", "control-label"], ["id", "typeValue", "formControlName", "type", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], ["class", "col-md-4", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "btn", "btn-danger", 3, "routerLink"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["selected", "", 3, "ngValue"], ["style", "color: red;margin-left: 1%;", "style", "color: red;margin-left: 1%;", 4, "ngIf"], [2, "color", "red", "margin-left", "1%"], [1, "dropdown-item"], [1, "form-group"], ["type", "text", "id", "value", "placeholder", "Enter Amount", "formControlName", "value", 1, "form-control"], ["type", "number", "id", "percentValue", "placeholder", "Enter Percent", "formControlName", "value", "required", "", 1, "form-control", 3, "input"], [2, "color", "red"], ["name", "Payment Heades", "id", "percentOfValue", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["ng-selected", "true", "value", "", "disabled", ""], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["selected", "", 3, "value"]], template: function UpdateManagePaymentHeadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Payment Heads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateManagePaymentHeadsComponent_p_6_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateManagePaymentHeadsComponent_p_8_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateManagePaymentHeadsComponent_Template_form_ngSubmit_9_listener() { return ctx.updatePaymentHeads(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Payment Head:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UpdateManagePaymentHeadsComponent_option_17_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UpdateManagePaymentHeadsComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Type:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateManagePaymentHeadsComponent_Template_select_change_27_listener($event) { return ctx.check($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UpdateManagePaymentHeadsComponent_option_28_Template, 2, 1, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UpdateManagePaymentHeadsComponent_div_29_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UpdateManagePaymentHeadsComponent_div_30_Template, 10, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UpdateManagePaymentHeadsComponent_div_31_Template, 15, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UpdateManagePaymentHeadsComponent_div_32_Template, 11, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serverErrorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateManagePaymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateManagePaymentForm.get("paymentHead"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paymentHeadDataList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.paymentHeadId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gradeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Fixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updateManagePaymentForm.invalid || ctx.errorMsg || ctx.percentErrorMsg || ctx.permissionInfo.search("Edit PaymentHeads") === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pages/graderule/list-managePaymentHeads/", ctx.gradeRuleId, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateManagePaymentHeadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-managePaymentHeads',
                templateUrl: 'update-managePaymentHeads.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_2__["GraderuleApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=graderule-graderule-module-es2015.js.map