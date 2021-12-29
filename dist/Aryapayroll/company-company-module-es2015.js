(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "2Ta4":
/*!****************************************************!*\
  !*** ./src/app/pages/company/company.component.ts ***!
  \****************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CompanyComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], decls: 1, vars: 0, template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html',
                styleUrls: ['./company.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4hzC":
/*!*********************************************************!*\
  !*** ./src/app/pages/company/company-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "2Ta4");
/* harmony import */ var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authGuard/auth.guard */ "CG1p");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-company/add-company.component */ "ukhj");
/* harmony import */ var _update_company_list_update_company_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-company-list/update-company-list.component */ "Y1qj");
/* harmony import */ var _company_report_company_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./company-report/company-report.component */ "oVZS");










const route = [
    {
        path: '',
        component: _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: 'add-company',
                component: _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"],
            },
            {
                path: 'update-company-list/:companyId',
                component: _update_company_list_update_company_list_component__WEBPACK_IMPORTED_MODULE_6__["UpdateCompanyListComponent"],
            },
            {
                path: 'company-report',
                component: _company_report_company_report_component__WEBPACK_IMPORTED_MODULE_7__["CompanyReportComponent"],
            },
            {
                path: '',
                redirectTo: 'company-list',
                pathMatch: 'full',
            },
        ],
    }
];
class CompanyRoutingModule {
}
CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRoutingModule, [{
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

/***/ "Y1qj":
/*!************************************************************************************!*\
  !*** ./src/app/pages/company/update-company-list/update-company-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: UpdateCompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyListComponent", function() { return UpdateCompanyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _dashboard_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/company-list/company-list.component */ "dvO3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function UpdateCompanyListComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errMsg);
} }
function UpdateCompanyListComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMsg);
} }
function UpdateCompanyListComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r11.message, " ");
} }
function UpdateCompanyListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_19_div_1_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.updateCompanyForm.get("name").hasError(validation_r11.type) && (ctx_r3.updateCompanyForm.get("name").dirty || ctx_r3.updateCompanyForm.get("name").touched));
} }
function UpdateCompanyListComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r14.message, " ");
} }
function UpdateCompanyListComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_28_div_1_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.updateCompanyForm.get("address").hasError(validation_r14.type) && (ctx_r4.updateCompanyForm.get("address").dirty || ctx_r4.updateCompanyForm.get("address").touched));
} }
function UpdateCompanyListComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r17.message, " ");
} }
function UpdateCompanyListComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_37_div_1_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r17 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.updateCompanyForm.get("domicile").hasError(validation_r17.type) && (ctx_r5.updateCompanyForm.get("domicile").dirty || ctx_r5.updateCompanyForm.get("domicile").touched));
} }
function UpdateCompanyListComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r20.message, " ");
} }
function UpdateCompanyListComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_60_div_1_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r20 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.updateCompanyForm.get("bankAccNum").hasError(validation_r20.type) && (ctx_r6.updateCompanyForm.get("bankAccNum").dirty || ctx_r6.updateCompanyForm.get("bankAccNum").touched));
} }
function UpdateCompanyListComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r23.message, " ");
} }
function UpdateCompanyListComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_71_div_1_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r23 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.updateCompanyForm.get("officialNumber").hasError(validation_r23.type) && (ctx_r7.updateCompanyForm.get("officialNumber").dirty || ctx_r7.updateCompanyForm.get("officialNumber").touched));
} }
function UpdateCompanyListComponent_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r26.message, " ");
} }
function UpdateCompanyListComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_79_div_1_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r26 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.updateCompanyForm.get("fax").hasError(validation_r26.type) && (ctx_r8.updateCompanyForm.get("fax").dirty || ctx_r8.updateCompanyForm.get("fax").touched));
} }
function UpdateCompanyListComponent_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r29.message, " ");
} }
function UpdateCompanyListComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_88_div_1_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r29 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.updateCompanyForm.get("taxationNumber").hasError(validation_r29.type) && (ctx_r9.updateCompanyForm.get("taxationNumber").dirty || ctx_r9.updateCompanyForm.get("taxationNumber").touched));
} }
function UpdateCompanyListComponent_div_96_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r32.message, " ");
} }
function UpdateCompanyListComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateCompanyListComponent_div_96_div_1_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r32 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.updateCompanyForm.get("panNumber").hasError(validation_r32.type) && (ctx_r10.updateCompanyForm.get("panNumber").dirty || ctx_r10.updateCompanyForm.get("panNumber").touched));
} }
class UpdateCompanyListComponent {
    // currency: any;
    // currencyOptionValue = 'Please Add Currency';
    constructor(route, api, fb, ngZone, router, util) {
        this.route = route;
        this.api = api;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.util = util;
        this.successMessage = false;
        this.errorMsg = false;
        //Method for show validation message
        this.validationMessage = {
            'name': [
                { type: 'required', message: 'Name is required' },
            ],
            'address': [
                { type: 'required', message: 'Address is required' }
            ],
            'officialNumber': [
                { type: 'required', message: 'Official Number is required' },
                { type: 'minlength', message: 'Number too short ' },
                { type: 'maxlength', message: 'Number is too large' },
                { type: 'pattern', message: 'Company Number not valid' },
            ],
            'fax': [
                { type: 'minlength', message: 'Fax number too short ' },
                { type: 'maxlength', message: 'Fax no. is too large' },
                { type: 'pattern', message: 'Fax Number not valid' },
            ],
            'domicile': [
                { type: 'pattern', message: 'Invalid Domicile' },
            ],
            'outGoingMails': [
                { type: 'pattern', message: 'Invalid Mail' },
            ],
            'taxNumber': [
                { type: 'pattern', message: 'Invalid Taxation No.' },
            ],
            'panNo': [
                { type: 'pattern', message: 'Invalid PAN No.' },
            ],
            'bankAccNum': [
                { type: 'maxlength', message: 'Account No. limit exceeded' },
                { type: 'pattern', message: 'Invalid Account No.' },
            ],
        };
    }
    ngOnDestroy() {
        document.getElementById('headerCompanyDropDown').removeAttribute('disabled');
    }
    ngOnInit() {
        this.permissionInfo = this.util.permissionRoleInfo;
        document.getElementById('headerCompanyDropDown').setAttribute('disabled', 'disabled');
        this.snapshotParam = this.route.snapshot.paramMap.get("companyId");
        // this.listCurrency();
        // this.addCurrencyFormValidation();
        this.formValidation();
        this.existingCompanyDataValues();
        this.updateComapnyLogo();
        if (this.permissionInfo.search('Edit Company') === -1) {
            this.updateCompanyForm.disable();
        }
    }
    // List Currency Information
    // listCurrency(){
    //   try{
    //     this.api.listCurrency().subscribe((data) =>{
    //       if(data.status === 'success'){
    //         if(data.data.length == 0){
    //           this.currencyOptionValue = 'Please Add Currency';
    //         } else {
    //           this.currency = data.data;
    //           this.currencyOptionValue = 'Select Currency';
    //         }
    //       }
    //     })
    //   } catch(err){}
    //   }
    // addCurrencyFormValidation() {
    //   try {
    //     this.addCurrencyForm = this.fb.group({
    //       name: new FormControl('', Validators.required),
    //       code: new FormControl('',Validators.required)
    //     });
    //   }
    //   catch (err) {
    //     console.log(err);
    //   }
    // }
    // Reset PopUp Currency Window
    //  resetForm(){
    //   try{
    //     this.addCurrencyForm.reset();
    //   } catch(err){
    //     console.log(err);
    //   }
    // }
    // addCurrency(){
    //   try{
    //     let cleanCurrencyForm = this.util.cleanFormLevelOne(this.addCurrencyForm);
    //     this.api.submitCurrency(cleanCurrencyForm.value).subscribe((data) => {
    //       if(data.status === "success"){
    //         this.successMessage = true ;
    //         this.errorMsg = false ;
    //         this.successMsg = data.message;
    //         setTimeout(() => {
    //           this.listCurrency();
    //           this.handleErrors();
    //           (document.getElementById('dismiss') as HTMLElement).click();
    //         },1500);
    //       } else {
    //         this.errorMsg = true;
    //         this.successMessage = false;
    //         this.errMsg = data.message;
    //         setTimeout(() => {
    //           this.handleErrors();
    //         },1500);
    //       }
    //     })
    //   } catch(err){
    //     console.log(err);
    //   }
    // }
    //Method for show currency validdation message
    // currencyValidationMessage = {
    //   'name': [
    //     { type: 'required', message: 'Currency Name is required' },
    //   ],
    //   'code': [
    //     { type: 'required', message: 'Currency Code is required' },
    //   ]
    // }
    //Method for form validation
    formValidation() {
        try {
            this.updateCompanyForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                officialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                ])),
                fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                ])),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                domicile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]*$')),
                outGoingMails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
                taxationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^[A-Za-z]{5}[0-9]{4}[A-Za-z]$)')),
                bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                bankAccNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])),
                bankType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
    //Method for set existing value in the form
    existingCompanyDataValues() {
        try {
            this.api.getIndividualData(this.snapshotParam).subscribe(data => {
                if (data.status === "success" || data.status === 200) {
                    console.log(data);
                    this.url = data.data.logoUrl;
                    this.existingUrl = data.data.logoUrl;
                    this.listCompanyData = data.data;
                    this.updateCompanyForm = this.fb.group({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                        officialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.officialNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
                        ])),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                        ])),
                        fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.fax, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                        ])),
                        address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                        domicile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.domicile, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]*$')),
                        taxationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.taxationNumber),
                        panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.panNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^[A-Za-z]{5}[0-9]{4}[A-Za-z]$)')),
                        bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.bankName),
                        bankAccNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.bankAccNum, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])),
                        bankType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.listCompanyData.bankType)
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Update Data
    updateCompanyFormData() {
        try {
            let cleanCompanyUpdateForm = this.util.cleanFormLevelOne(this.updateCompanyForm);
            if (this.updateCompanyForm.valid) {
                this.api.submitUpdateCompanyData(cleanCompanyUpdateForm.value, this.snapshotParam).subscribe((data) => {
                    if (data.status === "success" || data.status === 200) {
                        // Upload Company Logo
                        let isCompanyLogo;
                        if (document.getElementById('updateCompanyLogo').value.length === 0) {
                            isCompanyLogo = false;
                        }
                        else {
                            isCompanyLogo = true;
                        }
                        this.api.uploadCompanyLogo(this.updateCompanyLogoForm, 'Update CompanyLogo', isCompanyLogo).subscribe((responseData) => {
                            if (responseData.status === 'success') {
                                this.successMessage = true;
                                this.errorMsg = false;
                                this.successMsg = data.message;
                                setTimeout(() => {
                                    this.handleErrors();
                                    window.location.replace('/pages/dashboard/company-list');
                                }, 2000);
                            }
                        });
                    }
                    else if (data.status == "error") {
                        this.errorMsg = true;
                        this.successMessage = false;
                        this.errMsg = data.message;
                        setTimeout(() => {
                            this.handleErrors();
                        }, 2000);
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    //Onclick scrolling on div and  show message div
    scroll(element) {
        element.scrollIntoView();
    }
    handleErrors() {
        this.errorMsg = false;
        this.successMessage = false;
        this.errMsg = '';
        this.successMsg = '';
    }
    // When User Select the file
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target.result;
            };
            if (event.target.files.length > 0) {
                const file = event.target.files[0];
                this.updateCompanyLogoForm.get('companyLogo').setValue(file);
            }
        }
    }
    // update Company Logo
    updateComapnyLogo() {
        try {
            this.updateCompanyLogoForm = this.fb.group({
                companyLogo: ['']
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    reset() {
        try {
            this.url = this.existingUrl;
        }
        catch (error) {
            console.log(error);
        }
    }
}
UpdateCompanyListComponent.ɵfac = function UpdateCompanyListComponent_Factory(t) { return new (t || UpdateCompanyListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"])); };
UpdateCompanyListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateCompanyListComponent, selectors: [["app-update-company-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_dashboard_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_2__["CompanyListComponent"]])], decls: 120, vars: 13, consts: [[1, "card", "card-user"], [1, "card-header"], ["target", ""], [1, "card-title", 2, "text-align", "center"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "card-body"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "placeholder", "Enter Company Name", "formControlName", "name", 1, "form-control"], [4, "ngFor", "ngForOf"], ["id", "inputAddress", "placeholder", "Address", "formControlName", "address", 1, "form-control"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "text", "id", "inputDomiclie", "placeholder", "Enter Domicile", "formControlName", "domicile", 1, "form-control"], ["type", "text", "placeholder", "Enter Bank Name:", "formControlName", "bankName", 1, "form-control"], ["type", "text", "placeholder", "Enter Account Type:", "formControlName", "bankType", 1, "form-control"], ["type", "text", "placeholder", "Enter Account Number:", "formControlName", "bankAccNum", 1, "form-control"], ["type", "text", "id", "inputCompanyNo", "placeholder", "Enter Official Company Number", "formControlName", "officialNumber", 1, "form-control"], ["type", "text", "id", "inputFax", "placeholder", "Enter Fax Number:", "formControlName", "fax", 1, "form-control"], [1, "row"], [1, "col-md-6"], ["type", "text", "id", "inputTaxationno.", "placeholder", "Enter Taxation Number", "formControlName", "taxationNumber", 1, "form-control"], ["onkeyup", "this.value = this.value.toUpperCase();", "type", "text", "id", "inputPanno.", "placeholder", "Enter PAN Number", "formControlName", "panNumber", 1, "form-control"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "col-lg-10", "col-md-6", "col-sm-6"], [1, "control-label"], ["height", "70", 3, "src"], ["type", "file", "id", "updateCompanyLogo", "accept", "image/*", 1, "form-control-file", "border", 3, "change"], [1, "col-lg-2", "col-md-6", "col-sm-6"], [1, "delete-button"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "button", "routerLink", "/pages/dashboard/company-list", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\u00A0red;margin-left:\u00A014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], ["style", "color:\u00A0red;margin-left:\u00A014px;", "style", "color:\u00A0red;margin-left:\u00A014px;", 4, "ngIf"]], template: function UpdateCompanyListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateCompanyListComponent_p_6_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateCompanyListComponent_p_8_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateCompanyListComponent_Template_form_ngSubmit_10_listener() { return ctx.updateCompanyFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name (to appear on reports):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UpdateCompanyListComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UpdateCompanyListComponent_div_28_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Domicile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UpdateCompanyListComponent_div_37_Template, 2, 1, "div", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UpdateCompanyListComponent_div_60_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Official Company Number:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, UpdateCompanyListComponent_div_71_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Fax Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, UpdateCompanyListComponent_div_79_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Taxation No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, UpdateCompanyListComponent_div_88_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "PAN (Permanent Account Number):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, UpdateCompanyListComponent_div_96_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Company Logo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateCompanyListComponent_Template_input_change_107_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCompanyListComponent_Template_button_click_110_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u00A0 Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateCompanyListComponent_Template_button_click_116_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Update Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateCompanyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.domicile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.bankAccNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.officialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.fax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.taxNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.panNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updateCompanyForm.invalid || ctx.permissionInfo.search("Edit Company") === -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".delete-button[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.delete-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 6px;\n  background: #a20909;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS91cGRhdGUtY29tcGFueS1saXN0L3VwZGF0ZS1jb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFueS91cGRhdGUtY29tcGFueS1saXN0L3VwZGF0ZS1jb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlLWJ1dHRvbntcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cbi5kZWxldGUtYnV0dG9uIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjYTIwOTA5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCompanyListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-company-list',
                templateUrl: './update-company-list.component.html',
                styleUrls: ['./update-company-list.component.scss'],
                providers: [_dashboard_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_2__["CompanyListComponent"]],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "oVZS":
/*!**************************************************************************!*\
  !*** ./src/app/pages/company/company-report/company-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompanyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyReportComponent", function() { return CompanyReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ "6K47");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _graderule_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../graderule/graderule-service/graderule-api.service */ "y8g4");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");














function CompanyReportComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", list_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r6.title);
} }
function CompanyReportComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyReportComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.generateExcelSheet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompanyReportComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please fill sufficient data for the view of company reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CompanyReportComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyReportComponent_li_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const monthTab_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.changeTabData(monthTab_r9.sortingId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthTab_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r10 === 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("href", "#" + monthTab_r9.showMonthName + monthTab_r9.showYear, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("aria-controls", monthTab_r9.showMonthName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", monthTab_r9.showMonthName, " - ", monthTab_r9.showYear, "");
} }
function CompanyReportComponent_div_33_div_1_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r19 === 0 ? "sticky-col first-col" : i_r19 === 1 ? "sticky-col second-col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r18);
} }
function CompanyReportComponent_div_33_div_1_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empDet_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r23 === 0 ? "sticky-col first-col" : i_r23 === 1 ? "sticky-col second-col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDet_r22);
} }
function CompanyReportComponent_div_33_div_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompanyReportComponent_div_33_div_1_tr_6_td_1_Template, 2, 2, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emp_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", emp_r20);
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
function CompanyReportComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "thead", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CompanyReportComponent_div_33_div_1_th_4_Template, 2, 2, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyReportComponent_div_33_div_1_tr_6_Template, 2, 1, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "pagination-controls", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function CompanyReportComponent_div_33_div_1_Template_pagination_controls_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r15.headerData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 2, ctx_r15.viewData, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r15.currentPage)));
} }
function CompanyReportComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompanyReportComponent_div_33_div_1_Template, 10, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthTab_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("id", "", monthTab_r13.showMonthName, "", monthTab_r13.showYear, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r14 === 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.viewData.length !== 0);
} }
class CompanyReportComponent {
    constructor(datePipe, gradeApi, apiService, notifier, spinner) {
        this.datePipe = datePipe;
        this.gradeApi = gradeApi;
        this.apiService = apiService;
        this.notifier = notifier;
        this.spinner = spinner;
        this.earningDetails = [];
        this.deductionDetails = [];
        this.headerData = [];
        this.viewData = [];
        this.empData = [];
        this.gradeDetails = [];
        this.disableFilter = true;
        this.excelHeader = [];
        this.minMode = 'month'; // change for month:year
        this.sortMonthTabs = [];
        this.currentPage = 1;
        this.excelViewData = [];
        this.requestDatePicker = {
            startDate: '',
            endDate: ''
        };
        this.bsConfig = Object.assign({}, {
            minMode: this.minMode,
            rangeInputFormat: 'MM-YYYY',
            dateInputFormat: 'MM-YYYY'
        });
    }
    ngOnInit() {
        this.gradeApi.getGradeRuleList().subscribe(response => {
            if (response.status === 'success') {
                this.gradeDetails = response.data;
            }
        });
        this.getAllFilterValues();
    }
    getCompanyReport(tableData) {
        try {
            this.headerData = [];
            const header = [
                'Sr No.',
                'Name',
                'Date of Joining',
                'In Hand(P/M)',
                'Bonus',
                'Incentives',
                'Gross',
                'PresentDays',
                'Absent Days',
                'Working Days',
                'Adjust Leave',
                'Per day Salary',
                'Net Salary',
                'Pay Mode'
            ];
            // FOR EARNING INFO
            if (tableData.gradeRuleInfo.earningsInfo.length !== 0) {
                this.earningDetails = [];
                for (let earning of tableData.gradeRuleInfo.earningsInfo) {
                    if (earning.type === 'Percent') {
                        let earningString = `${earning.name}(${earning.value}%)`;
                        this.earningDetails.push(earningString);
                    }
                    if (earning.type === 'Fixed') {
                        let earningString = `${earning.name}(₹ ${earning.value})`;
                        this.earningDetails.push(earningString);
                    }
                    if ((earning.type).trim().length === 0) {
                        let earningString = `${earning.name}`;
                        this.earningDetails.push(earningString);
                    }
                }
            }
            // FOR DEDUCTION INFO
            if (tableData.gradeRuleInfo.deductionInfo.length !== 0) {
                this.deductionDetails = [];
                for (let deduction of tableData.gradeRuleInfo.deductionInfo) {
                    if (deduction.type === 'Percent') {
                        let deductionString = `${deduction.name}(${deduction.value}%)`;
                        this.deductionDetails.push(deductionString);
                    }
                    if (deduction.type === 'Fixed') {
                        let deductionString = `${deduction.name}(₹ ${deduction.value})`;
                        this.deductionDetails.push(deductionString);
                    }
                    if ((deduction.type).trim().length === 0) {
                        let deductionString = `${deduction.name}`;
                        this.deductionDetails.push(deductionString);
                    }
                }
            }
            // FOR MANAGE HEADER DATA
            this.headerData = header.concat(this.earningDetails.concat(this.deductionDetails));
            this.viewData = [];
            for (let j = 0; j < tableData.employeeSheetDetails.length; j++) {
                this.returnSheetValue(tableData.employeeSheetDetails[j], j + 1, this.headerData, 'companyReport');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // FOR MANAGE TABLE DATA ACCORDING TO HEADER DATA
    returnSheetValue(employeeData, srNo, headers, type) {
        let viewData = [
            srNo,
            employeeData.name,
            this.datePipe.transform(employeeData.doj, 'dd-MM-yyyy'),
            employeeData.inHand,
            employeeData.bonus,
            employeeData.incentives,
            employeeData.gross,
            employeeData.presentDays,
            employeeData.absentDays,
            employeeData.workingDays,
            employeeData.adjustLeave,
            employeeData.everyDaySalary,
            employeeData.netSalary,
            employeeData.payMode,
        ];
        for (let k = headers.indexOf("Pay Mode") + 1; k < headers.length; k++) {
            let empDedEarHeader = headers[k].substr(0, headers[k].indexOf('(')).trim();
            empDedEarHeader.trim().length === 0 ? empDedEarHeader = headers[k].trim() : '';
            let empDedEarIndex = employeeData.deductions.map((amount) => {
                return (amount.label).trim();
            }).indexOf(empDedEarHeader);
            if (empDedEarIndex === -1) {
                empDedEarIndex = employeeData.earnings.map((amount) => {
                    return (amount.label).trim();
                }).indexOf(empDedEarHeader);
                viewData.push(employeeData.earnings[empDedEarIndex]['amt']);
            }
            else {
                viewData.push(employeeData.deductions[empDedEarIndex]['amt']);
            }
        }
        return type === 'excelReport' ? this.excelViewData.push(viewData) : this.viewData.push(viewData);
    }
    // CHECK ALL FILTER BLANK OR NOT
    getAllFilterValues() {
        try {
            let grade = document.getElementById('gradeOptions').value;
            if (grade !== '' && this.requestDatePicker.startDate.trim().length > 0 && this.requestDatePicker.endDate.trim().length > 0) {
                this.disableFilter = false;
            }
            else {
                this.disableFilter = true;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // CHECK DROPDOWN VALUES
    selectGrade() {
        try {
            this.getAllFilterValues();
        }
        catch (error) {
            console.log(error);
        }
    }
    // FOR FILTER DATA AND GET COMPANY REPORT
    filterData() {
        try {
            this.spinner.show();
            let grade = document.getElementById('gradeOptions').value;
            this.apiService.getCompanyReport(this.requestDatePicker.startDate, this.requestDatePicker.endDate, grade).subscribe(response => {
                this.spinner.hide();
                if (response.status === 'success') {
                    if (response.data.length === 0) {
                        this.notifier.notify('info', 'Company Report Not Available');
                    }
                    if (response.data.length !== 0) {
                        this.sortMonthTabs = response.sortingCriteria;
                        this.tableData = response.data;
                        let tabIndex = this.tableData.map((monthObj) => {
                            return monthObj.sheetId;
                        }).indexOf(this.sortMonthTabs[0].sortingId);
                        this.getCompanyReport(this.tableData[tabIndex]);
                    }
                }
                else if (response.status === 'error') {
                    this.tableData = [];
                    this.notifier.notify(response.status, response.message);
                }
            }, error => {
                this.spinner.hide();
                console.log(error);
            });
        }
        catch (error) {
            this.spinner.hide();
            console.log(error);
        }
    }
    // FOR RESET FILTER VALUES
    reset() {
        try {
            document.getElementById('gradeOptions').value = '';
            document.getElementById('rangeDate').value = '';
            this.disableFilter = true;
            this.headerData = [];
            this.excelHeader = [];
            this.viewData = [];
            this.sortMonthTabs = [];
        }
        catch (error) {
            console.log(error);
        }
    }
    // FOR GENERATE COMPANY REPORT SHEET
    generateExcelSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__["Workbook"]();
                for (let tableData of this.tableData) {
                    const worksheet = workbook.addWorksheet(`${tableData.showMonthName} ${tableData.showYear}`);
                    worksheet.addRow([]);
                    // FOR MANAGE COMPANY NAME
                    worksheet.mergeCells('L2:R2');
                    worksheet.getCell('L2').value = `${tableData.companyExpen.name}, ${tableData.month} ${tableData.year}`;
                    worksheet.getCell('L2').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '7B7B7B' }, };
                    worksheet.getCell('L2').font = { name: 'Trebuchet MS', family: 4, size: 20, bold: true, };
                    worksheet.getCell('L2').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    worksheet.addRow([]);
                    worksheet.addRow([]);
                    const header = [
                        'Sr No.',
                        'Name',
                        'Date of Joining',
                        'In Hand(P/M)',
                        'Bonus',
                        'Incentives',
                        'Gross',
                        'PresentDays',
                        'Absent Days',
                        'Working Days',
                        'Adjust Leave',
                        'Per day Salary',
                        'Net Salary',
                        'Pay Mode'
                    ];
                    worksheet.mergeCells('A4:M4');
                    worksheet.getCell('A4:M4').value = 'Employee Details';
                    worksheet.getCell('A4:M4').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE1EFDA' } };
                    worksheet.getCell('A4:M4').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    worksheet.getCell('A4:M4').font = { name: 'Arial', family: 4, size: 12, bold: true, };
                    worksheet.getCell('A4:M4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    const earnings = [];
                    if (tableData.gradeRuleInfo.earningsInfo.length !== 0) {
                        this.cellValues = `${this.sheetAlgo(14 + tableData.gradeRuleInfo.earningsInfo.length)}4`;
                        worksheet.mergeCells(`N4:${this.cellValues}`);
                        worksheet.getCell('N4').value = 'Total Earnings';
                        worksheet.getCell('N4').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE1EFDA' } };
                        worksheet.getCell('N4').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                        worksheet.getCell('N4').font = { name: 'Arial', family: 4, size: 12, bold: true, };
                        worksheet.getCell('N4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        for (let earning of tableData.gradeRuleInfo.earningsInfo) {
                            if (earning.type === 'Percent') {
                                let earningString = `${earning.name}(${earning.value}%)`;
                                earnings.push(earningString);
                            }
                            if (earning.type === 'Fixed') {
                                let earningString = `${earning.name}(₹ ${earning.value})`;
                                earnings.push(earningString);
                            }
                            if ((earning.type).trim().length === 0) {
                                let earningString = `${earning.name}`;
                                earnings.push(earningString);
                            }
                        }
                    }
                    const deductions = [];
                    if (tableData.gradeRuleInfo.deductionInfo.length !== 0) {
                        let cell = `${this.sheetAlgo((14 + tableData.gradeRuleInfo.earningsInfo.length + 1))}4:${this.sheetAlgo((14 + tableData.gradeRuleInfo.earningsInfo.length + tableData.gradeRuleInfo.deductionInfo.length))}4`;
                        worksheet.mergeCells(cell);
                        worksheet.getCell(`${this.sheetAlgo(14 + tableData.gradeRuleInfo.earningsInfo.length + 1)}4`).value = 'Total Deduction';
                        worksheet.getCell(`${this.sheetAlgo(14 + tableData.gradeRuleInfo.earningsInfo.length + 1)}4`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE1EFDA' } };
                        worksheet.getCell(`${this.sheetAlgo(14 + tableData.gradeRuleInfo.earningsInfo.length + 1)}4`).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                        worksheet.getCell(`${this.sheetAlgo(14 + tableData.gradeRuleInfo.earningsInfo.length + 1)}4`).font = { name: 'Arial', family: 4, size: 12, bold: true, };
                        worksheet.getCell(`${this.sheetAlgo(14 + tableData.gradeRuleInfo.earningsInfo.length + 1)}4`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        for (let deduction of tableData.gradeRuleInfo.deductionInfo) {
                            if (deduction.type === 'Percent') {
                                let deductionString = `${deduction.name}(${deduction.value}%)`;
                                deductions.push(deductionString);
                            }
                            if (deduction.type === 'Fixed') {
                                let deductionString = `${deduction.name}(₹ ${deduction.value} )`;
                                deductions.push(deductionString);
                            }
                            if ((deduction.type).trim().length === 0) {
                                let deductionString = `${deduction.name}`;
                                deductions.push(deductionString);
                            }
                        }
                    }
                    this.excelHeader = header.concat(earnings.concat(deductions));
                    worksheet.addRow(this.excelHeader).eachCell(cell => {
                        cell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: 'FFE1EFDA' },
                        };
                        cell.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    });
                    for (let i = 0; i < this.excelHeader.length; i++) {
                        worksheet.getColumn(i + 1).width = 20;
                    }
                    this.excelViewData = [];
                    for (let j = 0; j < tableData.employeeSheetDetails.length; j++) {
                        this.returnSheetValue(tableData.employeeSheetDetails[j], j + 1, this.excelHeader, 'excelReport');
                    }
                    this.excelViewData.forEach(d => {
                        const row = worksheet.addRow(d);
                        row.eachCell((cell, number) => {
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                        });
                    });
                    worksheet.addRow([]);
                    worksheet.addRow([]);
                    const monthHeading = ['', '', 'Monthly Paid', ''];
                    worksheet.addRow(monthHeading).eachCell(cell => {
                        cell.font = { name: 'Arial', family: 4, size: 14, bold: true, };
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFDF2CC' } };
                        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    });
                    const monthSubHeader = ['Company Name', 'Cash', 'Cheque', 'Account Transfer'];
                    worksheet.addRow(monthSubHeader).eachCell(cell => {
                        cell.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE1EFDA' } };
                        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    });
                    const monthlyData = [[tableData.companyExpen.name, tableData.companyExpen.cash, tableData.companyExpen.cheque, tableData.companyExpen.bankTransfer]];
                    monthlyData.forEach(d => {
                        const row = worksheet.addRow(d);
                        row.eachCell((cell, number) => {
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                        });
                    });
                }
                // Generate Excel sheet
                workbook.xlsx.writeBuffer().then((data) => {
                    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](blob, `${this.tableData[0].companyExpen.name}-report.xlsx`);
                    this.excelHeader = [];
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    sheetAlgo(cellValue) {
        let basicVertCellVal = {
            1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J',
            11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T',
            21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z',
        };
        let value = Number(cellValue);
        if (value > 26) {
            let remainder = (value % 26).toString();
            let quotient = parseInt((value / 26).toString());
            let returnCellValue = remainder === '0' ? `${basicVertCellVal[Number(quotient) - 1]}Z` : `${basicVertCellVal[quotient]}${basicVertCellVal[remainder]}`;
            return returnCellValue;
        }
        else {
            return `${basicVertCellVal[cellValue]}`;
        }
    }
    // ON DATE SELECT CHECK VALIDATION
    rangeDatesUpdated(dateValues) {
        try {
            if (dateValues === null || dateValues === 'Invalid Date' || dateValues === [null] || dateValues[0] === null || dateValues[1] === null || dateValues.length < 2) {
                this.requestDatePicker = {
                    startDate: '',
                    endDate: '',
                };
            }
            else {
                this.requestDatePicker = {
                    startDate: moment__WEBPACK_IMPORTED_MODULE_4___default()(dateValues[0]).format('YYYY-MM'),
                    endDate: moment__WEBPACK_IMPORTED_MODULE_4___default()(dateValues[1]).format('YYYY-MM'),
                };
            }
            this.getAllFilterValues();
        }
        catch (error) {
            console.log(error);
        }
    }
    // FOR FILTER MONTH DATA
    changeTabData(sortingId) {
        try {
            let tabIndex = this.tableData.map((monthObj) => {
                return monthObj.sheetId;
            }).indexOf(sortingId);
            this.getCompanyReport(this.tableData[tabIndex]);
            this.currentPage = 1;
        }
        catch (error) {
            console.log(error);
        }
    }
    // on page change events
    onPageChange(page) {
        this.currentPage = page;
    }
}
CompanyReportComponent.ɵfac = function CompanyReportComponent_Factory(t) { return new (t || CompanyReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_graderule_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_6__["GraderuleApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"])); };
CompanyReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompanyReportComponent, selectors: [["app-company-report"]], decls: 34, vars: 7, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "large", "color", "#fff", "type", "square-jelly-box"], [2, "font-size", "20px", "color", "white"], [1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "form-row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "form-group"], ["id", "gradeOptions", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["ng-selected", "true", "value", "", "selected", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select Months", "id", "rangeDate", "bsDaterangepicker", "", 1, "form-control", 3, "bsConfig", "bsValueChange"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "form-group", "right-buttongroup"], [1, "btn", "btn-primary", "btn-margin", 3, "disabled", "click"], [1, "fa", "fa-filter"], [1, "btn", "btn-danger", "btn-margin", 3, "click"], [1, "fa", "fa-trash"], ["style", "float: right;", "class", "btn btn-success btn-round btn-margin", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["target", ""], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-pane", "role", "tabpanel", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "value"], [1, "btn", "btn-success", "btn-round", "btn-margin", 2, "float", "right", 3, "click"], [1, "fas", "fa-download"], [1, "text-center", 2, "font-size", "16px"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", 1, "nav-link", 3, "ngClass", "click"], ["role", "tabpanel", 1, "tab-pane", 3, "id", "ngClass"], [1, "table-responsive"], [1, "table"], [1, "text-primary"], ["class", "text-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "pagination-outer"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"], [1, "text-center", 3, "ngClass"]], template: function CompanyReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Company Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CompanyReportComponent_Template_select_change_12_listener() { return ctx.selectGrade(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select Grade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CompanyReportComponent_option_15_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function CompanyReportComponent_Template_input_bsValueChange_18_listener($event) { return ctx.rangeDatesUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyReportComponent_Template_button_click_21_listener() { return ctx.filterData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompanyReportComponent_Template_button_click_24_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CompanyReportComponent_button_27_Template, 3, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CompanyReportComponent_div_28_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CompanyReportComponent_li_31_Template, 3, 5, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CompanyReportComponent_div_33_Template, 2, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gradeDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", ctx.bsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disableFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewData.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewData.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortMonthTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortMonthTabs);
    } }, directives: [angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierContainerComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDaterangepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDaterangepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginatePipe"]], styles: [".tdcolumn-width100[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100px;\n  display: block;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: top;\n  white-space: nowrap;\n}\n\n.btn-margin[_ngcontent-%COMP%] {\n  margin: 0px 2px !important;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: red;\n  margin-bottom: 0rem !important;\n}\n\ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n@media screen and (max-width: 1200px) {\n  .right-buttongroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .right-buttongroup[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n.sticky-col[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  background-color: white;\n}\n\n.first-col[_ngcontent-%COMP%] {\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n  left: 0px;\n}\n\n.second-col[_ngcontent-%COMP%] {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9jb21wYW55LXJlcG9ydC9jb21wYW55LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFlBQUE7RUFBTjtBQUNGOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFueS9jb21wYW55LXJlcG9ydC9jb21wYW55LXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZGNvbHVtbi13aWR0aDEwMCBzcGFuIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50YWJsZSB0aGVhZCB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnRuLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAwcHggMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tc2cge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xufVxuXG50ciB0ZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjAwcHgpIHtcbiAgICAucmlnaHQtYnV0dG9uZ3JvdXAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5yaWdodC1idXR0b25ncm91cCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG5cbi5zdGlja3ktY29sIHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpcnN0LWNvbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBsZWZ0OiAwcHg7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGxlZnQ6IDEwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompanyReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-company-report',
                templateUrl: './company-report.component.html',
                styleUrls: ['./company-report.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _graderule_graderule_service_graderule_api_service__WEBPACK_IMPORTED_MODULE_6__["GraderuleApiService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "rXpt":
/*!*************************************************!*\
  !*** ./src/app/pages/company/company.module.ts ***!
  \*************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-company/add-company.component */ "ukhj");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-routing.module */ "4hzC");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.component */ "2Ta4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _update_company_list_update_company_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-company-list/update-company-list.component */ "Y1qj");
/* harmony import */ var _company_report_company_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company-report/company-report.component */ "oVZS");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
















const customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
class CompanyModule {
}
CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_2__["AddCompanyComponent"],
        _company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"],
        _update_company_list_update_company_list_component__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyListComponent"],
        _company_report_company_report_component__WEBPACK_IMPORTED_MODULE_8__["CompanyReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _add_company_add_company_component__WEBPACK_IMPORTED_MODULE_2__["AddCompanyComponent"],
                    _company_component__WEBPACK_IMPORTED_MODULE_4__["CompanyComponent"],
                    _update_company_list_update_company_list_component__WEBPACK_IMPORTED_MODULE_7__["UpdateCompanyListComponent"],
                    _company_report_company_report_component__WEBPACK_IMPORTED_MODULE_8__["CompanyReportComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _company_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompanyRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                    angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"].withConfig(customNotifierOptions),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ukhj":
/*!********************************************************************!*\
  !*** ./src/app/pages/company/add-company/add-company.component.ts ***!
  \********************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddCompanyComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errMsg);
} }
function AddCompanyComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMsg);
} }
function AddCompanyComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r17.message, " ");
} }
function AddCompanyComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_19_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r17 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.companyForm.get("name").hasError(validation_r17.type) && (ctx_r3.companyForm.get("name").dirty || ctx_r3.companyForm.get("name").touched));
} }
function AddCompanyComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r20.message, " ");
} }
function AddCompanyComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_28_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r20 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.companyForm.get("address").hasError(validation_r20.type) && (ctx_r4.companyForm.get("address").dirty || ctx_r4.companyForm.get("address").touched));
} }
function AddCompanyComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCompanyComponent_div_40_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.stateName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "----Country Not Selected----");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddCompanyComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r25.message, " ");
} }
function AddCompanyComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_50_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r25 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.companyForm.get("domicile").hasError(validation_r25.type) && (ctx_r7.companyForm.get("domicile").dirty || ctx_r7.companyForm.get("domicile").touched));
} }
function AddCompanyComponent_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r28.message, " ");
} }
function AddCompanyComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_58_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r28 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.companyForm.get("fax").hasError(validation_r28.type) && (ctx_r8.companyForm.get("fax").dirty || ctx_r8.companyForm.get("fax").touched));
} }
function AddCompanyComponent_div_69_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r31.message, " ");
} }
function AddCompanyComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_69_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r31 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.companyForm.get("email").hasError(validation_r31.type) && (ctx_r9.companyForm.get("email").dirty || ctx_r9.companyForm.get("email").touched));
} }
function AddCompanyComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r34.message, " ");
} }
function AddCompanyComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_77_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r34 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.companyForm.get("outGoingMails").hasError(validation_r34.type) && (ctx_r10.companyForm.get("outGoingMails").dirty || ctx_r10.companyForm.get("outGoingMails").touched));
} }
function AddCompanyComponent_div_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r37.message, " ");
} }
function AddCompanyComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_101_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r37 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.companyForm.get("bankAccNum").hasError(validation_r37.type) && (ctx_r11.companyForm.get("bankAccNum").dirty || ctx_r11.companyForm.get("bankAccNum").touched));
} }
function AddCompanyComponent_div_111_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r40.message, " ");
} }
function AddCompanyComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_111_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r40 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.companyForm.get("officialNumber").hasError(validation_r40.type) && (ctx_r12.companyForm.get("officialNumber").dirty || ctx_r12.companyForm.get("officialNumber").touched));
} }
function AddCompanyComponent_div_119_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r43.message, " ");
} }
function AddCompanyComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_119_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r43 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.companyForm.get("taxationNumber").hasError(validation_r43.type) && (ctx_r13.companyForm.get("taxationNumber").dirty || ctx_r13.companyForm.get("taxationNumber").touched));
} }
function AddCompanyComponent_div_127_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r46.message, " ");
} }
function AddCompanyComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddCompanyComponent_div_127_div_1_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r46 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.companyForm.get("panNumber").hasError(validation_r46.type) && (ctx_r14.companyForm.get("panNumber").dirty || ctx_r14.companyForm.get("panNumber").touched));
} }
function AddCompanyComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.imageError);
} }
function AddCompanyComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.imageErrorMsg);
} }
const _c0 = function (a0) { return { display: a0 }; };
class AddCompanyComponent {
    // currency: any;
    // currencyOptionValue = 'Please Add Currency';
    constructor(api, fb, ngZone, router, util) {
        this.api = api;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.util = util;
        this.successMessage = false;
        this.errorMsg = false;
        this.stateOption = false;
        this.imageError = 'Image Size should be less than 2MB';
        this.imageFlag = false;
        // addCurrencyFormValidation() {
        //   try {
        //     this.addCurrencyForm = this.fb.group({
        //       name: new FormControl('', Validators.required),
        //       code: new FormControl('',Validators.required)
        //     });
        //   }
        //   catch (err) {
        //     console.log(err);
        //   }
        // }
        // Reset PopUp Currency Window
        //  resetForm(){
        //   try{
        //     this.addCurrencyForm.reset();
        //   } catch(err){
        //     console.log(err);
        //   }
        // }
        // Add Currency Value
        // addCurrency(){
        //   try{
        //     let cleanCurrencyForm = this.util.cleanFormLevelOne(this.addCurrencyForm);
        //     this.api.submitCurrency(cleanCurrencyForm.value).subscribe((data) => {
        //       if(data.status === "success"){
        //         this.successMessage = true ;
        //         this.errorMsg = false ;
        //         this.successMsg = data.message;
        //         setTimeout(() => {
        //           // this.listCurrency();
        //           this.handleErrors();
        //           (document.getElementById('dismiss') as HTMLElement).click();
        //         },1500);
        //       } else {
        //         this.errorMsg = true;
        //         this.successMessage = false;
        //         this.errMsg = data.message;
        //         setTimeout(() => {
        //           this.handleErrors();
        //         },1500);
        //       }
        //     })
        //   } catch(err){
        //     console.log(err);
        //   }
        // }
        //Method for show currency validdation message
        this.currencyValidationMessage = {
            'name': [
                { type: 'required', message: 'Currency Name is required' },
            ],
            'code': [
                { type: 'required', message: 'Currency Code is required' },
            ]
        };
        //Method for show validdation message
        this.validationMessage = {
            'name': [
                { type: 'required', message: 'Name is required' },
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'address': [
                { type: 'required', message: 'Address is required' },
            ],
            'officialNumber': [
                { type: 'required', message: 'Number is required' },
                { type: 'minlength', message: 'Number too short ' },
                { type: 'maxlength', message: 'Number is too large' },
                { type: 'pattern', message: 'Company Number not valid' },
            ],
            'fax': [
                { type: 'minlength', message: 'Fax number too short ' },
                { type: 'maxlength', message: 'Fax no. is too large' },
                { type: 'pattern', message: 'Fax Number not valid' },
            ],
            'domicile': [
                { type: 'pattern', message: 'Invalid Domicile' },
            ],
            'outGoingMails': [
                { type: 'pattern', message: 'Invalid Mail' },
            ],
            'taxNumber': [
                { type: 'pattern', message: 'Invalid Taxation No.' },
            ],
            'panNo': [
                { type: 'pattern', message: 'Invalid PAN No.' },
            ],
            'bankAccNum': [
                { type: 'maxlength', message: 'Account No. limit exceeded' },
                { type: 'pattern', message: 'Invalid Account No.' },
            ],
        };
    }
    ngOnInit() {
        this.permissionsInfo = this.util.permissionRoleInfo;
        this.companyDataValidate();
        populateCountries("country", "state");
        this.uploadCompanyLogo();
        if (this.permissionsInfo.search('Create Company') === -1) {
            this.companyForm.disable();
        }
        // this.addCurrencyFormValidation();
        // this.listCurrency();
    }
    // List Currency Information
    // listCurrency(){
    // try{
    //   this.api.listCurrency().subscribe((data) =>{
    //     if(data.status === 'success'){
    //       if(data.data.length == 0){
    //         this.currencyOptionValue = 'Please Add Currency';
    //       } else {
    //         this.currency = data.data;
    //         this.currencyOptionValue = 'Select Currency';
    //       }
    //     }
    //   })
    // } catch(err){
    //   console.log(err);
    // }
    // }
    //Method for Validation
    companyDataValidate() {
        try {
            this.companyForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ])),
                officialNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                ])),
                fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                ])),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                domicile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]*$')),
                outGoingMails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
                taxationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                panNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(^[A-Za-z]{5}[0-9]{4}[A-Za-z]$)')),
                bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                bankAccNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]*$/)])),
                bankType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    scroll(element) {
        element.scrollIntoView();
    }
    //Method for submit new company list data
    companyFormData() {
        try {
            let cleanCompanyForm = this.util.cleanFormLevelOne(this.companyForm);
            if (this.companyForm.valid) {
                this.api.submitCompanyData(cleanCompanyForm.value, this.selectCountryName, this.selectStateName).subscribe((data) => {
                    if (data.status == "success") {
                        sessionStorage.setItem('companyId', data.company._id);
                        // Upload Company Logo
                        let isCompanyLogo;
                        if (document.getElementById('companyLogo').value.length === 0) {
                            isCompanyLogo = false;
                        }
                        else {
                            isCompanyLogo = true;
                        }
                        this.api.uploadCompanyLogo(this.companyLogoForm, 'Add CompanyLogo', isCompanyLogo).subscribe((responseData) => {
                            if (responseData.status === 'success') {
                                this.successMessage = true;
                                this.errorMsg = false;
                                this.successMsg = data.message;
                                setTimeout(() => {
                                    this.handleErrors();
                                    window.location.replace('/pages/dashboard/company-list');
                                }, 2000);
                            }
                        });
                    }
                    else if (data.status === "error") {
                        this.errorMsg = true;
                        this.successMessage = false;
                        this.errMsg = data.message;
                        setTimeout(() => {
                            this.handleErrors();
                        }, 2000);
                    }
                });
            }
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
    // Country Option Functionality
    countryName() {
        if (document.getElementById('country').value === '-1') {
            this.countryMsg = "Country Name is Required";
            this.stateOption = false;
        }
        else {
            this.selectCountryName = document.getElementById('country').value;
            this.countryMsg = '';
            this.stateOption = true;
            this.stateName();
        }
    }
    // State Option Functionality
    stateName() {
        if (document.getElementById('state') === null) {
            this.selectStateName = '';
        }
        else if (document.getElementById('state').value === '') {
            this.selectStateName = '';
        }
        else {
            this.selectStateName = document.getElementById('state').value;
        }
    }
    // Upload company Logo form
    uploadCompanyLogo() {
        try {
            this.companyLogoForm = this.fb.group({
                companyLogo: ['']
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target.result;
            };
            if (event.target.files[0].size > 2000000) {
                this.imageFlag = true;
                this.imageErrorMsg = "File Size Exceeded than 2MB";
            }
            else {
                if (event.target.files.length > 0) {
                    this.imageFlag = false;
                    this.imageError = '';
                    this.imageErrorMsg = '';
                    const file = event.target.files[0];
                    this.companyLogoForm.get('companyLogo').setValue(file);
                }
            }
        }
    }
    // Reset Image
    reset() {
        try {
            document.getElementById('companyLogo').value = '';
            this.url = '';
            this.imageError = 'Image Size should be less than 2MB';
            this.imageFlag = false;
        }
        catch (error) {
            console.log(error);
        }
    }
}
AddCompanyComponent.ɵfac = function AddCompanyComponent_Factory(t) { return new (t || AddCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
AddCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCompanyComponent, selectors: [["app-add-company"]], decls: 153, vars: 23, consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title"], ["target", ""], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "inputName", "placeholder", "Enter Company Name", "formControlName", "name", 1, "form-control"], [4, "ngFor", "ngForOf"], ["id", "inputAddress", "placeholder", "Address", "formControlName", "address", 1, "form-control"], [1, "form-row"], [1, "form-group", "col-md-6"], [1, "col-sm-4", "control-label"], ["id", "country", "name", "country", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], [3, "ngStyle"], [2, "color", "red"], ["class", "form-group col-md-6", 4, "ngIf"], ["type", "text", "id", "inputDomiclie", "placeholder", "Enter Domicile", "formControlName", "domicile", 1, "form-control"], ["type", "text", "id", "inputFax", "placeholder", "Enter Fax Number:", "formControlName", "fax", 1, "form-control"], ["type", "email", "id", "inputEmail", "placeholder", "Enter Email ", "formControlName", "email", 1, "form-control"], ["type", "email", "id", "inputBcc", "placeholder", "Enter BCC Address", "formControlName", "outGoingMails", 1, "form-control"], ["type", "text", "placeholder", "Enter Bank Name ", "formControlName", "bankName", 1, "form-control"], ["type", "text", "placeholder", "Enter Account Type", "formControlName", "bankType", 1, "form-control"], [1, "col-md-6"], ["placeholder", "Enter Account Number", "formControlName", "bankAccNum", 1, "form-control"], ["type", "text", "id", "inputCompanyNo", "placeholder", "Enter Official Company Number", "formControlName", "officialNumber", 1, "form-control"], ["type", "text", "id", "inputTaxationno.", "placeholder", "Enter Taxation Number", "formControlName", "taxationNumber", 1, "form-control"], ["onkeyup", "this.value = this.value.toUpperCase().trim();", "type", "text", "id", "inputPanno.", "placeholder", "Enter PAN Number", "formControlName", "panNumber", 1, "form-control"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "col-lg-10", "col-md-6", "col-sm-6"], [1, "control-label"], ["height", "70", 3, "src"], ["type", "file", "id", "companyLogo", "accept", "image/*", 1, "form-control-file", "border", 3, "change"], [4, "ngIf"], [1, "col-lg-2", "col-md-6", "col-sm-6"], [1, "delete-button"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "submit", "routerLink", "/pages/dashboard/company-list", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\u00A0red;margin-left:\u00A014px;", "style", "color:\u00A0red;margin-left:\u00A014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], ["name", "state", "id", "state", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["disabled", "", 1, "dropdown", "dropdown-toggle", "form-control"], [1, "drop-down"], [1, "imageError"]], template: function AddCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddCompanyComponent_p_7_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddCompanyComponent_p_9_Template, 3, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCompanyComponent_Template_form_ngSubmit_10_listener() { return ctx.companyFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name (to appear on reports):\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddCompanyComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddCompanyComponent_div_28_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Country:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCompanyComponent_Template_select_change_36_listener() { return ctx.countryName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddCompanyComponent_div_40_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddCompanyComponent_div_41_Template, 7, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Domicile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AddCompanyComponent_div_50_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Fax Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AddCompanyComponent_div_58_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Email Address:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AddCompanyComponent_div_69_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "BCC Address for all outgoing mails:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AddCompanyComponent_div_77_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Bank Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Account Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Account Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AddCompanyComponent_div_101_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Official Company Number:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AddCompanyComponent_div_111_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Taxation No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AddCompanyComponent_div_119_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "PAN (Permanent Account Number):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, AddCompanyComponent_div_127_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Company Logo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddCompanyComponent_Template_input_change_138_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, AddCompanyComponent_div_139_Template, 3, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](140, AddCompanyComponent_div_140_Template, 3, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_143_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u00A0 Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCompanyComponent_Template_button_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.scroll(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Add Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.companyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.countryMsg === undefined ? "none" : "block"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countryMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stateOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stateOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.domicile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.fax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.outGoingMails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.bankAccNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.officialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.taxNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.panNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.companyForm.invalid || ctx.countryMsg || ctx.countryMsg === undefined || ctx.imageFlag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".card-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  max-height: 35px;\n}\n\n.btn-circle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.delete-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 6px 6px;\n  background: #a20909;\n  margin-top: 30px;\n}\n\n.imageError[_ngcontent-%COMP%] {\n  color: #a20807;\n  margin-left: 34%;\n  margin-top: 6px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDRyxnQkFBQTtBQUNIOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW55L2FkZC1jb21wYW55L2FkZC1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5kcm9wZG93bntcbiAgIG1heC1oZWlnaHQ6IDM1cHg7XG59XG4uYnRuLWNpcmNsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4uZGVsZXRlLWJ1dHRvbntcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cbi5kZWxldGUtYnV0dG9uIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjYTIwOTA5O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5pbWFnZUVycm9ye1xuICAgIGNvbG9yOiAjYTIwODA3O1xuICAgIG1hcmdpbi1sZWZ0OiAzNCU7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-company',
                templateUrl: './add-company.component.html',
                styleUrls: ['./add-company.component.scss']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=company-company-module-es2015.js.map