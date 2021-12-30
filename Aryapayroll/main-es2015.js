(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\aryapayroll\client\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    appBaseUrl: `http://127.0.0.1:4200`,
    apiBaseUrl: `http://192.168.1.140:3002`,
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


/***/ }),

/***/ "CG1p":
/*!*****************************************!*\
  !*** ./src/app/authGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        let url = state.url;
        return this.verifyLogin(url);
    }
    verifyLogin(url) {
        if (!this.isLoggedIn()) {
            this.router.navigateByUrl('users/login');
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    }
    isLoggedIn() {
        let status = false;
        if (localStorage.getItem('token') == "undefined" || localStorage.getItem('token') == null) {
            status = false;
        }
        else {
            status = true;
        }
        return status;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







class ApiService {
    constructor(http) {
        this.http = http;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
    }
    //Method for calling Register API
    submitSignup(data) {
        try {
            data.redirectUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appBaseUrl}/users/generate-password`; // Provide daynamic environment
            let apiURL = `${this.endpoint}/user/signup-via-email`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for calling login API
    submitLogin(data) {
        try {
            let apiURL = `${this.endpoint}/users/login`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Submit password and calling API
    submitPasswordData(data, token) {
        try {
            data.token = token;
            let apiURL = `${this.endpoint}/user/confirm-registration`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Submit forgot mail and calling API
    submitForgotPasswordData(data) {
        try {
            data.redirectUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appBaseUrl}/users/reset-password`;
            let apiURL = `${this.endpoint}/user/password/request-reset`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Submit password and calling API
    submitResetPasswordData(data, token) {
        try {
            data.token = token;
            let apiURL = `${this.endpoint}/user/password/set`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for logout
    submitLogout() {
        localStorage.setItem('token', "undefined");
        sessionStorage.removeItem('companyId');
    }
    //Method for submit company form Data and calling API
    submitCompanyData(data, countryName, stateName) {
        try {
            data.countryName = countryName;
            data.stateName = stateName;
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/company/add-company/${parentUserId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Method for add currency
    submitCurrency(data) {
        try {
            const userId = localStorage.getItem('token');
            let apiURL = `${this.endpoint}/company/add-currency/${userId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // List Currency
    listCurrency() {
        try {
            const userId = localStorage.getItem('token');
            let apiURL = `${this.endpoint}/company/list-currency/${userId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for submit updated company form Data and calling API
    submitUpdateCompanyData(data, companyId) {
        try {
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/company/update-company/${parentUserId}/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Method for get data from server and show company list
    getListData() {
        try {
            const parentUserId = localStorage.getItem("token");
            let apiURL = `${this.endpoint}/company/company-list/${parentUserId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Method for get individual company data
    getIndividualData(companyId) {
        try {
            let apiURL = `${this.endpoint}/company/details/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    //Method for Delete data of company list
    removeData(companyId) {
        try {
            let apiURL = `${this.endpoint}/company/delete-company/${companyId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Upload Company Logo and Company Report Logo
    uploadCompanyLogo(data, type, isCompanyLogo) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            const formData = new FormData();
            formData.append('companyLogo', data.get('companyLogo').value);
            let apiUrl = `${this.endpoint}/company/upload-logo/${companyId}/${type}/${isCompanyLogo}`;
            return this.http.post(apiUrl, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Method for get User Details
    getUserDetails() {
        try {
            let userId = localStorage.getItem('token');
            let apiURL = `${this.endpoint}/user-details/${userId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Get Time Zones
    getTimeZone() {
        try {
            let apiURL = `${this.endpoint}/availabe-timezone`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Update User Profile
    updateUSerProfile(data, timezone) {
        try {
            data.timeZone = timezone;
            let userId = localStorage.getItem('token');
            let apiUrl = `${this.endpoint}/user/update-details/${userId}`;
            return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Upload Profile Image
    uploadProfileImage(data, type, employeeId) {
        try {
            let companyId, userId;
            if (type === 'User') {
                userId = localStorage.getItem('token');
                companyId = undefined;
            }
            else if (type === 'Employee') {
                companyId = sessionStorage.getItem('companyId');
                userId = employeeId;
            }
            const formData = new FormData();
            formData.append('avatar', data.get('avatar').value);
            let apiUrl = `${this.endpoint}/user/upload-profile-picture/${userId}/${companyId}/${type}`;
            return this.http.post(apiUrl, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Get User Permission
    permissionDetails() {
        try {
            let userId = localStorage.getItem('token');
            let apiURL = `${this.endpoint}/user/permission-details/${userId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Get User Permission
    getCompanyReport(startDate, endDate, gradeuRuleId) {
        try {
            let companyId = localStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/company/excel-compnay-details/${companyId}/${startDate}/${endDate}/${gradeuRuleId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/utilities.service */ "cnwL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(permissionAPI, util) {
        this.permissionAPI = permissionAPI;
        this.util = util;
        this.title = 'Demo';
    }
    ngOnInit() {
        if (sessionStorage.length === 0) {
            sessionStorage.setItem('companyId', localStorage.getItem('companyId'));
        }
        this.permissionAPI.permissionDetails().subscribe((data) => {
            if (data.status === 'success') {
                this.util.permissionRoleInfo = data.data;
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authGuard/auth.guard */ "CG1p");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilities/utilities.service */ "cnwL");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Gi4r");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_12__["UtilitiesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]
        ], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]], exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"],
                    angular_notifier__WEBPACK_IMPORTED_MODULE_13__["NotifierModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]
                ],
                exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"]],
                providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _utilities_utilities_service__WEBPACK_IMPORTED_MODULE_12__["UtilitiesService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cnwL":
/*!************************************************!*\
  !*** ./src/app/utilities/utilities.service.ts ***!
  \************************************************/
/*! exports provided: UtilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class UtilitiesService {
    constructor(http) {
        this.http = http;
        this.timeZone = 'Asia/Kolkata';
        /** Here we provide daynamic environment value from environment */
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
    }
    /**Create method for manage errors when request and return response from the server*/
    errorMgmt(error) {
        try {
            let errorMessage = '';
            /** Handle client side error */
            if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
            }
            /** Handle server side error */
            else {
                errorMessage = `Error code:${error.status}\nMessage:${errorMessage}`;
            }
            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
        catch (err) {
            console.log(err.message);
        }
    }
    /**
     * Clean Form or clear unwanted values
     */
    cleanFormLevelTwo(formGroup) {
        try {
            let cleaningStuff = formGroup.value;
            for (var key in cleaningStuff) {
                if (typeof (cleaningStuff[key]) === 'object') {
                    for (var nestedKey in cleaningStuff[key]) {
                        if (typeof (cleaningStuff[key][nestedKey]) === 'object') {
                            for (var nestedNestedKey in cleaningStuff[key][nestedKey]) {
                                if (cleaningStuff[key][nestedKey][nestedNestedKey] === null) {
                                    formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue('');
                                }
                                else if (cleaningStuff[key][nestedKey][nestedNestedKey] === true || cleaningStuff[key][nestedKey][nestedNestedKey] === false) {
                                    // Do Nothing
                                }
                                else {
                                    formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue(formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).value.trim());
                                }
                            }
                        }
                        else {
                            if (cleaningStuff[key][nestedKey] === null) {
                                formGroup.get(key + '.' + nestedKey).setValue('');
                            }
                            else if (cleaningStuff[key][nestedKey] === true || cleaningStuff[key][nestedKey] === false) {
                                // DO Nothhing
                            }
                            else {
                                formGroup.get(key + '.' + nestedKey).setValue(formGroup.get(key + '.' + nestedKey).value.trim());
                            }
                        }
                    }
                }
                else {
                    if (cleaningStuff[key] === null) {
                        formGroup.get(key).setValue('');
                    }
                    else if (cleaningStuff[key] === true || cleaningStuff[key] === false) {
                        // Do Nothing
                    }
                    else {
                        formGroup.get(key).setValue(formGroup.get(key).value.trim());
                    }
                }
            }
            return formGroup;
        }
        catch (err) {
            console.log(err);
        }
    }
    cleanFormLevelOne(formGroup) {
        try {
            let cleaningStuff = formGroup.value;
            for (var key in cleaningStuff) {
                if (typeof (cleaningStuff[key]) === 'object') {
                    for (var nestedKey in cleaningStuff[key]) {
                        if (cleaningStuff[key][nestedKey] === null) {
                            formGroup.get(key + '.' + nestedKey).setValue('');
                        }
                        else if (cleaningStuff[key][nestedKey] === true || cleaningStuff[key][nestedKey] === false) {
                            // DO Nothing
                        }
                        else {
                            formGroup.get(key + '.' + nestedKey).setValue(formGroup.get(key + '.' + nestedKey).value.trim());
                        }
                    }
                }
                else {
                    if (cleaningStuff[key] === null) {
                        formGroup.get(key).setValue('');
                    }
                    else if (cleaningStuff[key] === true || cleaningStuff[key] === false) {
                        // DO Nothing
                    }
                    else {
                        formGroup.get(key).setValue(formGroup.get(key).value.trim());
                    }
                }
            }
            return formGroup;
        }
        catch (err) {
            console.log(err);
        }
    }
    // Clean Form or clear unwanted values
    cleanFormLevelThree(formGroup) {
        try {
            let cleaningStuff = formGroup.value;
            for (var key in cleaningStuff) {
                if (typeof (cleaningStuff[key]) === 'object') {
                    for (var nestedKey in cleaningStuff[key]) {
                        if (typeof (cleaningStuff[key][nestedKey]) === 'object') {
                            for (var nestedNestedKey in cleaningStuff[key][nestedKey]) {
                                if (typeof (cleaningStuff[key][nestedKey][nestedNestedKey]) === 'object') {
                                    for (var nestedNestedNestedKey in cleaningStuff[key][nestedKey][nestedNestedKey]) {
                                        if (cleaningStuff[key][nestedKey][nestedNestedKey][nestedNestedNestedKey] === null) {
                                            formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey + '.' + nestedNestedNestedKey).setValue('');
                                        }
                                        else if (cleaningStuff[key][nestedKey][nestedNestedKey][nestedNestedNestedKey] === true || cleaningStuff[key][nestedKey][nestedNestedKey][nestedNestedNestedKey] === false) {
                                            // Do Nothing
                                        }
                                        else {
                                            formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey + '.' + nestedNestedNestedKey).setValue(formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey + '.' + nestedNestedNestedKey).value.trim());
                                        }
                                    }
                                }
                                else {
                                    if (cleaningStuff[key][nestedKey][nestedNestedKey] === null) {
                                        formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue('');
                                    }
                                    else if (cleaningStuff[key][nestedKey][nestedNestedKey] === true || cleaningStuff[key][nestedKey][nestedNestedKey] === false) {
                                        // Do Nothing
                                    }
                                    else {
                                        formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).setValue(formGroup.get(key + '.' + nestedKey + '.' + nestedNestedKey).value.trim());
                                    }
                                }
                            }
                        }
                        else {
                            if (cleaningStuff[key][nestedKey] === null) {
                                formGroup.get(key + '.' + nestedKey).setValue('');
                            }
                            else if (cleaningStuff[key][nestedKey] === true || cleaningStuff[key][nestedKey] === false) {
                                // DO Nothhing
                            }
                            else {
                                formGroup.get(key + '.' + nestedKey).setValue(formGroup.get(key + '.' + nestedKey).value.trim());
                            }
                        }
                    }
                }
                else {
                    if (cleaningStuff[key] === null) {
                        formGroup.get(key).setValue('');
                    }
                    else if (cleaningStuff[key] === true || cleaningStuff[key] === false) {
                        // Do Nothing
                    }
                    else {
                        formGroup.get(key).setValue(formGroup.get(key).value.trim());
                    }
                }
            }
            return formGroup;
        }
        catch (err) {
            console.log(err);
        }
    }
    // Check Module Exists
    moduleExists(moduleId, type) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/company/check-module-exist/${moduleId}/${companyId}/${type}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UtilitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilitiesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'users',
        loadChildren: () => Promise.all(/*! import() | app-users-users-module */[__webpack_require__.e("default~app-users-users-module~employee-wizard-employee-wizard-module"), __webpack_require__.e("app-users-users-module")]).then(__webpack_require__.bind(null, /*! ../app/users/users.module */ "zrcO"))
            .then(m => m.UsersModule),
    },
    {
        path: 'pages',
        loadChildren: () => __webpack_require__.e(/*! import() | app-pages-pages-module */ "app-pages-pages-module").then(__webpack_require__.bind(null, /*! ../app/pages/pages.module */ "dgmN"))
            .then(m => m.PagesModule),
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: 'reload'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map