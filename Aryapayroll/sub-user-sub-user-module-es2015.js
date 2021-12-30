(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-user-sub-user-module"],{

/***/ "0vJA":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/sub-user/update-subusers-data/update-subusers-data.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UpdateSubusersDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSubusersDataComponent", function() { return UpdateSubusersDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sub-user-service/sub-user.service */ "rciO");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UpdateSubusersDataComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function UpdateSubusersDataComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
} }
function UpdateSubusersDataComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r4.message, " ");
} }
function UpdateSubusersDataComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateSubusersDataComponent_div_19_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.updateSubUserForm.get("name").hasError(validation_r4.type) && (ctx_r2.updateSubUserForm.get("name").dirty || ctx_r2.updateSubUserForm.get("name").touched));
} }
function UpdateSubusersDataComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r7.message, " ");
} }
function UpdateSubusersDataComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateSubusersDataComponent_div_29_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.updateSubUserForm.get("phone").hasError(validation_r7.type) && (ctx_r3.updateSubUserForm.get("phone").dirty || ctx_r3.updateSubUserForm.get("phone").touched));
} }
class UpdateSubusersDataComponent {
    constructor(route, api, fb, ngZone, router, util) {
        this.route = route;
        this.api = api;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.util = util;
        this.snapshotParam = String;
        this.successMsg = String;
        this.successMessage = false;
        this.errMsg = String;
        this.errorMsg = false;
        this.genderList = ['Male', 'Female', 'Others', 'N/A'];
        //Property for show error message
        this.validationMessage = {
            'name': [
                { type: 'required', message: 'Name Is Required' },
                { type: 'pattern', message: 'Not a valid' }
            ],
            'phone': [
                { type: 'required', message: 'Phone Number Is Required' },
                { type: 'minlength', message: 'Not a phone number ' },
                { type: 'maxlength', message: 'Phone no. is too large' },
                { type: 'pattern', message: 'Phone Number not valid' },
            ],
            'zipCode': [
                { type: 'pattern', message: 'ZIP code not valid' },
            ],
        };
    }
    ngOnInit() {
        this.snapshotParam = this.route.snapshot.paramMap.get("subUserId");
        this.subUserFormValidation();
        this.getSubUserExistingData();
    }
    //method for sub user validation
    subUserFormValidation() {
        try {
            this.updateSubUserForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$'),
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                ])),
                birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{6}(?:-[0-9]{4})?$'),
                ])),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Update Sub-User Details
    updateSubUserFormData() {
        try {
            let cleanUpdateSubUserForm = this.util.cleanFormLevelOne(this.updateSubUserForm);
            this.api.submitUpdateSubUserData(cleanUpdateSubUserForm.value, this.snapshotParam).subscribe((data) => {
                if (data.status === "success" || data.status === 200) {
                    this.getSubUserExistingData();
                    this.successMessage = true;
                    this.errorMsg = false;
                    this.successMsg = data.message;
                    setTimeout(() => {
                        this.handleErrors();
                        this.router.navigateByUrl('/pages/sub-user/show-subusers-list');
                    }, 2000);
                }
                else if (data.status == "error") {
                    this.errorMsg = true;
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
    //Method for Get existing data load on the form(autofill form)
    getSubUserExistingData() {
        try {
            this.api.subUserDetails(this.snapshotParam).subscribe(data => {
                if (data.status === "success") {
                    this.updateSubUserForm = this.fb.group({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$'),
                        ])),
                        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.data.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                        ])),
                        birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                        zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{6}(?:-[0-9]{4})?$'),
                        ])),
                        gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.data.email),
                    });
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
UpdateSubusersDataComponent.ɵfac = function UpdateSubusersDataComponent_Factory(t) { return new (t || UpdateSubusersDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_3__["SubUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"])); };
UpdateSubusersDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateSubusersDataComponent, selectors: [["app-update-subusers-data"]], decls: 42, vars: 6, consts: [[1, "card", "card-user"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "name", "formControlName", "name", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "phone", "formControlName", "phone", 1, "form-control"], ["type", "email", "id", "email", "formControlName", "email", "disabled", "", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "submit", "routerLink", "/pages/sub-user/show-subusers-list", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color:\u00A0red;margin-left:\u00A014px;", "style", "color:\u00A0red;margin-left:\u00A014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"]], template: function UpdateSubusersDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Sub-User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateSubusersDataComponent_p_6_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdateSubusersDataComponent_p_8_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateSubusersDataComponent_Template_form_ngSubmit_9_listener() { return ctx.updateSubUserFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UpdateSubusersDataComponent_div_19_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UpdateSubusersDataComponent_div_29_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateSubUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updateSubUserForm.invalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViLXVzZXIvdXBkYXRlLXN1YnVzZXJzLWRhdGEvdXBkYXRlLXN1YnVzZXJzLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3ViLXVzZXIvdXBkYXRlLXN1YnVzZXJzLWRhdGEvdXBkYXRlLXN1YnVzZXJzLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateSubusersDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-subusers-data',
                templateUrl: './update-subusers-data.component.html',
                styleUrls: ['./update-subusers-data.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_3__["SubUserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "Fb0g":
/*!***************************************************!*\
  !*** ./src/app/pages/sub-user/sub-user.module.ts ***!
  \***************************************************/
/*! exports provided: SubUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubUserModule", function() { return SubUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sub_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-user-routing.module */ "oPtM");
/* harmony import */ var _sub_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-user.component */ "X4tC");
/* harmony import */ var _add_subusers_add_subusers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-subusers/add-subusers.component */ "GtuV");
/* harmony import */ var _show_subusers_list_show_subusers_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-subusers-list/show-subusers-list.component */ "SmBv");
/* harmony import */ var _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sub-user-service/sub-user.service */ "rciO");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _update_subusers_data_update_subusers_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-subusers-data/update-subusers-data.component */ "0vJA");
/* harmony import */ var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/authGuard/auth.guard */ "CG1p");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");














class SubUserModule {
}
SubUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubUserModule });
SubUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubUserModule_Factory(t) { return new (t || SubUserModule)(); }, providers: [_sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_8__["SubUserService"], src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sub_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["SubUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubUserModule, { declarations: [_sub_user_component__WEBPACK_IMPORTED_MODULE_5__["SubUserComponent"], _add_subusers_add_subusers_component__WEBPACK_IMPORTED_MODULE_6__["AddSubusersComponent"], _show_subusers_list_show_subusers_list_component__WEBPACK_IMPORTED_MODULE_7__["ShowSubusersListComponent"], _update_subusers_data_update_subusers_data_component__WEBPACK_IMPORTED_MODULE_10__["UpdateSubusersDataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sub_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["SubUserRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sub_user_component__WEBPACK_IMPORTED_MODULE_5__["SubUserComponent"], _add_subusers_add_subusers_component__WEBPACK_IMPORTED_MODULE_6__["AddSubusersComponent"], _show_subusers_list_show_subusers_list_component__WEBPACK_IMPORTED_MODULE_7__["ShowSubusersListComponent"], _update_subusers_data_update_subusers_data_component__WEBPACK_IMPORTED_MODULE_10__["UpdateSubusersDataComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sub_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["SubUserRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
                ],
                providers: [_sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_8__["SubUserService"], src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "GtuV":
/*!***********************************************************************!*\
  !*** ./src/app/pages/sub-user/add-subusers/add-subusers.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddSubusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubusersComponent", function() { return AddSubusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-user-service/sub-user.service */ "rciO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utilities/utilities.service */ "cnwL");
/* harmony import */ var _roles_roles_service_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../roles/roles-service/roles.service */ "8fwW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function AddSubusersComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errMsg);
} }
function AddSubusersComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMsg);
} }
function AddSubusersComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r7.message, " ");
} }
function AddSubusersComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSubusersComponent_div_21_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.subUserForm.get("name").hasError(validation_r7.type) && (ctx_r2.subUserForm.get("name").dirty || ctx_r2.subUserForm.get("name").touched));
} }
function AddSubusersComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r10.message, " ");
} }
function AddSubusersComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSubusersComponent_div_30_div_1_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.subUserForm.get("phone").hasError(validation_r10.type) && (ctx_r3.subUserForm.get("phone").dirty || ctx_r3.subUserForm.get("phone").touched));
} }
function AddSubusersComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r13.message, " ");
} }
function AddSubusersComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSubusersComponent_div_41_div_1_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r13 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.subUserForm.get("email").hasError(validation_r13.type) && (ctx_r4.subUserForm.get("email").dirty || ctx_r4.subUserForm.get("email").touched));
} }
function AddSubusersComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", role_r16._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r16.title, " ");
} }
function AddSubusersComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", validation_r17.message, " ");
} }
function AddSubusersComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSubusersComponent_div_53_div_1_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r17 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.subUserForm.get("roleId").hasError(validation_r17.type) && (ctx_r6.subUserForm.get("roleId").dirty || ctx_r6.subUserForm.get("roleId").touched));
} }
class AddSubusersComponent {
    constructor(fb, api, ngZone, router, spinner, util, roleAPI) {
        this.fb = fb;
        this.api = api;
        this.ngZone = ngZone;
        this.router = router;
        this.spinner = spinner;
        this.util = util;
        this.roleAPI = roleAPI;
        this.successMessage = false;
        this.errorMsg = false;
        this.genderList = ['Male', 'Female', 'Others', 'N/A'];
        //Property for show error message
        this.validationMessage = {
            'name': [
                { type: 'required', message: 'Name is required' },
                { type: 'pattern', message: 'Not a valid name' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'phone': [
                { type: 'required', message: 'Phone No. is required' },
                { type: 'minlength', message: 'Not a phone number ' },
                { type: 'maxlength', message: 'Phone no. is too large' },
                { type: 'pattern', message: 'Phone Number not valid' },
            ],
            'roleId': [
                { type: 'required', message: 'Role is required' },
            ],
        };
    }
    ngOnInit() {
        this.subUserFormValidation();
        this.rolePermission();
    }
    //method for sub user validation
    subUserFormValidation() {
        try {
            this.subUserForm = this.fb.group({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$'),
                ])),
                phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
                ])),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                ])),
                roleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for submit add new sub-users form data an
    subUserFormData() {
        try {
            let cleansubUserForm = this.util.cleanFormLevelOne(this.subUserForm);
            this.spinner.show();
            this.api.addSubUsersData(cleansubUserForm.value).subscribe(data => {
                if (data.status === "success" || data.status === 200) {
                    this.successMessage = true;
                    this.errorMsg = false;
                    this.successMsg = data.message;
                    this.spinner.hide();
                    setTimeout(() => {
                        this.handleErrroMessage();
                        this.ngZone.run(() => this.router.navigateByUrl('/pages/sub-user/show-subusers-list'));
                    }, 7000);
                }
                else if (data.status == "error") {
                    this.subUserForm.get('email').setValue('');
                    this.errorMsg = true;
                    this.successMessage = false;
                    this.errMsg = data.message;
                    this.spinner.hide();
                    setTimeout(() => {
                        this.handleErrroMessage();
                    }, 2000);
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    // Error Handling Message
    handleErrroMessage() {
        this.successMessage = false;
        this.errorMsg = false;
        this.successMsg = '';
        this.errMsg = '';
    }
    // roles permissions
    rolePermission() {
        try {
            this.roleAPI.listAllRole().subscribe((data) => {
                if (data.status === 'success') {
                    this.rolePermissionInfo = data.data;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
AddSubusersComponent.ɵfac = function AddSubusersComponent_Factory(t) { return new (t || AddSubusersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_2__["SubUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_roles_roles_service_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"])); };
AddSubusersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddSubusersComponent, selectors: [["app-add-subusers"]], decls: 60, vars: 9, consts: [[1, "card", "card-user"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-scale-ripple-multiple"], [2, "font-size", "20px", "color", "white"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", "novalidate", "", 1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "col-sm-6", "control-label"], [2, "color", "darkred"], ["type", "text", "id", "inputName", "placeholder", "Enter Full Name", "formControlName", "name", "required", "", 1, "form-control"], [4, "ngFor", "ngForOf"], ["type", "text", "id", "inputPhone", "placeholder", "Enter Phone Number", "formControlName", "phone", 1, "form-control"], [1, "row"], [1, "col-md-6"], ["type", "email", "id", "inputEmail", "placeholder", "Enter Email ", "formControlName", "email", "required", "", 1, "form-control"], ["Name", "branchId", "formControlName", "roleId", 1, "dropdown", "dropdown-toggle", "form-control"], ["ng-selected", "true", "value", "", "disabled", "", "selected", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", "routerLink", "../show-subusers-list", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], ["style", "color: red;margin-left: 1%;", "style", "color: red;margin-left: 1%;", 4, "ngIf"], [2, "color", "red", "margin-left", "1%"], ["style", "color:\u00A0red;margin-left:\u00A014px;", "style", "color:\u00A0red;margin-left:\u00A014px;", 4, "ngIf"], [2, "color", "red", "margin-left", "14px"], [1, "dropdown-item", 3, "value"], ["style", "color:\u00A0red;margin-left:\u00A014px;", 4, "ngIf"]], template: function AddSubusersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sub-Users Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddSubusersComponent_p_9_Template, 3, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddSubusersComponent_p_11_Template, 3, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddSubusersComponent_Template_form_ngSubmit_12_listener() { return ctx.subUserFormData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Full Name:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddSubusersComponent_div_21_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone Number:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddSubusersComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddSubusersComponent_div_41_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Assign Role:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "----------Select Role----------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddSubusersComponent_option_52_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddSubusersComponent_div_53_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Add Subuser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.subUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rolePermissionInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.validationMessage.roleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.subUserForm.invalid);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViLXVzZXIvYWRkLXN1YnVzZXJzL2FkZC1zdWJ1c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWItdXNlci9hZGQtc3VidXNlcnMvYWRkLXN1YnVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSubusersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-subusers',
                templateUrl: './add-subusers.component.html',
                styleUrls: ['./add-subusers.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_2__["SubUserService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: src_app_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"] }, { type: _roles_roles_service_roles_service__WEBPACK_IMPORTED_MODULE_6__["RolesService"] }]; }, null); })();


/***/ }),

/***/ "SmBv":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sub-user/show-subusers-list/show-subusers-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShowSubusersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSubusersListComponent", function() { return ShowSubusersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sub-user-service/sub-user.service */ "rciO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ShowSubusersListComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowSubusersListComponent_li_9_Template_b_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const list_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showData(list_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowSubusersListComponent_li_9_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const list_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showData(list_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Phone No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowSubusersListComponent_li_9_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const list_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteSubUserListData(list_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((list_r1.profile.contactInfo == null ? null : list_r1.profile.contactInfo.firstName) + " " + (list_r1.profile.contactInfo == null ? null : list_r1.profile.contactInfo.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.showCard[list_r1._id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((list_r1.profile.contactInfo == null ? null : list_r1.profile.contactInfo.firstName) + " " + (list_r1.profile.contactInfo == null ? null : list_r1.profile.contactInfo.lastName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.profile.contactInfo.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.local.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../update-subuser-data/", list_r1._id, "");
} }
class ShowSubusersListComponent {
    constructor(api, fb, ngZone, router) {
        this.api = api;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.showCard = {};
        // subUsersListData: any = Object;
        this.subUsersListData = [];
    }
    ngOnInit() {
        this.getSubUsersList();
    }
    //Method for show sub-users in the list
    getSubUsersList() {
        try {
            this.api.getSubUsersListData().subscribe(data => {
                if (data.status === 'success' || data.status === 200) {
                    this.subUsersListData = data.users;
                    if (data.users.length == 0) {
                        this.router.navigateByUrl("/pages/sub-user/add-subuser");
                    }
                    else {
                        const len = Object.keys(this.subUsersListData).length;
                        for (var i = 0; i < len; i++) {
                            this.showCard[this.subUsersListData[i]._id] = true;
                        }
                    }
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method For collapsed List Data
    showData(subUsersId) {
        try {
            this.showCard[`${subUsersId}`] = !this.showCard[`${subUsersId}`];
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for remove company list
    deleteSubUserListData(subUserId) {
        try {
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
                    this.api.removeSubUsersData(subUserId).subscribe((data) => {
                        if (data.status === "success" || data.status === 200) {
                            swalWithBootstrapButtons.fire('Deleted!', data.message, 'success');
                            this.getSubUsersList();
                        }
                    });
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your Data Safe', 'error');
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}
ShowSubusersListComponent.ɵfac = function ShowSubusersListComponent_Factory(t) { return new (t || ShowSubusersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_2__["SubUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ShowSubusersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowSubusersListComponent, selectors: [["app-show-subusers-list"]], decls: 10, vars: 1, consts: [[1, "card"], [1, "card-header", 2, "text-align", "center"], ["routerLink", "../add-subuser", 1, "btn", "btn-primary", 2, "float", "right"], [1, "fa", "fa-plus"], [1, "panel-body"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [2, "cursor", "pointer", 3, "click"], [2, "float", "right"], [1, "dropdown-toggle", 3, "click"], [1, "card", 2, "background-color", "ghostwhite", 3, "hidden"], [1, "table", 2, "margin", "auto"], [1, "btn", "btn-primary", 2, "float", "right", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["type", "button", 1, "btn", "btn-danger", 2, "float", "right", 3, "click"], [1, "fa", "fa-trash"]], template: function ShowSubusersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sub-Users List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ShowSubusersListComponent_li_9_Template, 31, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subUsersListData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  overflow: hidden;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px solid #ECF0F1;\n  padding: 10px;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: 1px solid #ECF0F1;\n  border-right: 1px solid #ECF0F1;\n}\n\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #4ECDC4;\n}\n\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%] {\n  background-color: #d9f4f2;\n}\n\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n}\n\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-width: 760px) {\n  p[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n  }\n\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.total-val) {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:first-child {\n    background-color: #d9f4f2;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd)   td[_ngcontent-%COMP%]:first-child {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:not(:first-child) {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 40%;\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    width: 60%;\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: block;\n    cursor: pointer;\n  }\n  table[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-val[_ngcontent-%COMP%] {\n    display: inline-block;\n    transform: translateY(0);\n    width: 75%;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViLXVzZXIvc2hvdy1zdWJ1c2Vycy1saXN0L3Nob3ctc3VidXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRztFQUNHLDZCQUFBO0VBQ0EsYUFBQTtBQUVOOztBQUNJO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQUNOOztBQUVJO0VBQ0UseUJBQUE7QUFBTjs7QUFHSTtFQUNFLHlCQUFBO0FBRE47O0FBS007RUFDRSx1QkFBQTtBQUhSOztBQU1NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUpSOztBQVNJO0VBQ0UsYUFBQTtBQU5OOztBQVNFO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUFOSjs7RUFXTTtJQUNFLGFBQUE7RUFSUjtFQVdNO0lBQ0UseUJBQUE7RUFUUjtFQVdNO0lBQ0UsdUJBQUE7RUFUUjtFQVlNO0lBQ0UsdUJBQUE7RUFWUjtFQWFNO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUFYUjtFQWNNO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFaUjtFQWVNO0lBQ0UsbUNBQUE7SUFDQSw4QkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFiUjtFQWdCTTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBZFI7RUFpQk07SUFDRSxVQUFBO0lBQ0EscUJBQUE7RUFmUjtFQWtCTTtJQUNFLHFCQUFBO0lBQ0Esd0JBQUE7SUFDQSxVQUFBO0VBaEJSO0FBQ0Y7O0FBcUJFO0VBR007SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQXJCUjtFQXdCTTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBdEJSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdWItdXNlci9zaG93LXN1YnVzZXJzLWxpc3Qvc2hvdy1zdWJ1c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgdGQsIHRoe1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQ0YwRjE7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIHRke1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUNGMEYxO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VDRjBGMTtcbiAgICB9XG5cbiAgICB0aHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RUNEQzQ7XG4gICAgfVxuXG4gICAgdHI6bnRoLW9mLXR5cGUoZXZlbikgdGR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCM0RUNEQzQsIDM1JSk7XG4gICAgfVxuXG4gICAgLnRvdGFse1xuICAgICAgdGh7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICB0ZHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICAubW9iaWxlLWhlYWRlcntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xuICAgIHB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIHRhYmxle1xuICAgICAgdHJ7XG4gICAgICAgIHRkOm5vdCg6Zmlyc3QtY2hpbGQpLCB0aDpub3QoOmZpcnN0LWNoaWxkKSwgdGQ6bm90KC50b3RhbC12YWwpe1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOmZpcnN0LWNoaWxke1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzRFQ0RDNCwgMzUlKTtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1vZi10eXBlKG9kZCkgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGg6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTk5OTlweCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTk5OTlweCk7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIH1cblxuICAgICAgICB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRvdGFsIHRoe1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQudG90YWwtdmFse1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xuICAgIHRhYmxle1xuICAgICAgdHJ7XG4gICAgICAgIHRoOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowSubusersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-subusers-list',
                templateUrl: './show-subusers-list.component.html',
                styleUrls: ['./show-subusers-list.component.scss']
            }]
    }], function () { return [{ type: _sub_user_service_sub_user_service__WEBPACK_IMPORTED_MODULE_2__["SubUserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "X4tC":
/*!******************************************************!*\
  !*** ./src/app/pages/sub-user/sub-user.component.ts ***!
  \******************************************************/
/*! exports provided: SubUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubUserComponent", function() { return SubUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SubUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubUserComponent.ɵfac = function SubUserComponent_Factory(t) { return new (t || SubUserComponent)(); };
SubUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubUserComponent, selectors: [["app-sub-user"]], decls: 1, vars: 0, template: function SubUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Yi11c2VyL3N1Yi11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-user',
                templateUrl: './sub-user.component.html',
                styleUrls: ['./sub-user.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oPtM":
/*!***********************************************************!*\
  !*** ./src/app/pages/sub-user/sub-user-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SubUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubUserRoutingModule", function() { return SubUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sub_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-user.component */ "X4tC");
/* harmony import */ var _add_subusers_add_subusers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-subusers/add-subusers.component */ "GtuV");
/* harmony import */ var _show_subusers_list_show_subusers_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-subusers-list/show-subusers-list.component */ "SmBv");
/* harmony import */ var _update_subusers_data_update_subusers_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-subusers-data/update-subusers-data.component */ "0vJA");
/* harmony import */ var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/authGuard/auth.guard */ "CG1p");










const route = [
    {
        path: '',
        component: _sub_user_component__WEBPACK_IMPORTED_MODULE_3__["SubUserComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: 'add-subuser',
                component: _add_subusers_add_subusers_component__WEBPACK_IMPORTED_MODULE_4__["AddSubusersComponent"],
            },
            {
                path: 'show-subusers-list',
                component: _show_subusers_list_show_subusers_list_component__WEBPACK_IMPORTED_MODULE_5__["ShowSubusersListComponent"],
            },
            {
                path: 'update-subuser-data/:subUserId',
                component: _update_subusers_data_update_subusers_data_component__WEBPACK_IMPORTED_MODULE_6__["UpdateSubusersDataComponent"],
            },
            {
                path: '',
                redirectTo: 'show-subusers-list',
                pathMatch: 'full',
            },
        ],
    }
];
class SubUserRoutingModule {
}
SubUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubUserRoutingModule });
SubUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubUserRoutingModule_Factory(t) { return new (t || SubUserRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubUserRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubUserRoutingModule, [{
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

/***/ "rciO":
/*!*********************************************************************!*\
  !*** ./src/app/pages/sub-user/sub-user-service/sub-user.service.ts ***!
  \*********************************************************************/
/*! exports provided: SubUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubUserService", function() { return SubUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class SubUserService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
    }
    //Method for add new sub-users and submit sub-users form data
    addSubUsersData(data) {
        try {
            data.redirectUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appBaseUrl}/users/generate-password`;
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/user/add-subuser/${parentUserId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Method for get data from server and show company list
    getSubUsersListData() {
        try {
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/user/list-subusers/${parentUserId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Delete data of company list
    removeSubUsersData(subUserId) {
        try {
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/user/delete-subuser/${parentUserId}/${subUserId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for submit updated subusres details  Data and calling API
    submitUpdateSubUserData(data, subUserId) {
        try {
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/user/update-subuser/${parentUserId}/${subUserId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Create method for manage errors when request and return response from the server
    errorMgmt(error) {
        try {
            let errorMessage = '';
            //Handle client side error
            if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
            }
            //Handle server side error
            else {
                errorMessage = `Error code:${error.status}\nMessage:${errorMessage}`;
            }
            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
        catch (err) {
            console.log(err);
        }
    }
    // Sub User Details
    subUserDetails(userId) {
        try {
            let apiURL = `${this.endpoint}/user/subuser-details/${userId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
}
SubUserService.ɵfac = function SubUserService_Factory(t) { return new (t || SubUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SubUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubUserService, factory: SubUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=sub-user-sub-user-module-es2015.js.map