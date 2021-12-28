(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "8fwW":
/*!************************************************************!*\
  !*** ./src/app/pages/roles/roles-service/roles.service.ts ***!
  \************************************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class RolesService {
    constructor(http) {
        this.http = http;
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
    //Method for get rules list for create, edit and delete
    getRolesListData() {
        try {
            const apiUrl = `${this.endpoint}/user/role-list/`;
            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err.message);
        }
    }
    //Method to Add Role
    addRole(data) {
        try {
            const userId = localStorage.getItem('token');
            let apiUrl = `${this.endpoint}/user/add-role/${userId}`;
            return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
        }
    }
    //Method for get all role list
    listAllRole() {
        try {
            let userId = localStorage.getItem('token');
            const apiUrl = `${this.endpoint}/user/all-role-list/${userId}`;
            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err.message);
        }
    }
    //Method for get individaul role list
    listIndividualRole(roleId) {
        try {
            const apiUrl = `${this.endpoint}/user/individaul-role-list/${roleId}`;
            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err.message);
        }
    }
    //Method to Update Role
    updateRole(data, roleId) {
        try {
            const userId = localStorage.getItem('token');
            let apiUrl = `${this.endpoint}/user/update-role/${userId}/${roleId}`;
            return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
        }
    }
    //Method for get individaul permission list
    listIndividualPermissions(roleId) {
        try {
            const apiUrl = `${this.endpoint}/user/individaul-permissions-list/${roleId}`;
            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err.message);
        }
    }
    // Update Role Permissions
    updateRolePermissions(data, roleId) {
        try {
            const userId = localStorage.getItem('token');
            let apiUrl = `${this.endpoint}/user/update-role-permission/${userId}/${roleId}`;
            return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Delete Permission
    deletePermission(roleId, permissionId) {
        try {
            let apiURL = `${this.endpoint}/user/delete-permission/${permissionId}/${roleId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RolesService, factory: RolesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "VFOk":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/job category/jobCategory-service/jobCategory-api.service.ts ***!
  \***********************************************************************************/
/*! exports provided: JobCategoryApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCategoryApiService", function() { return JobCategoryApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class JobCategoryApiService {
    constructor(http) {
        this.http = http;
        /** Here we provide daynamic environment value from environment */
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
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
    /**Create Method for Get Job Category list */
    getJobCategoryData() {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/list-job-categories/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    jobCategoryDetails(jobCategoryId) {
        try {
            let apiURL = `${this.endpoint}/company/job-category-details/${jobCategoryId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**Create Method for add Job Category  */
    addJobCategoy(data) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            console.log(companyId);
            let apiURL = `${this.endpoint}/company/add-job-category/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Method for Update Job Category   */
    updateJobCategory(data, jobCategoryId) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/update-job-category/${companyId}/${jobCategoryId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**Method for delete (remove) Job Category*/
    removeData(jobCategoryId) {
        try {
            let apiURL = `${this.endpoint}/company/delete-job-category/${jobCategoryId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
}
JobCategoryApiService.ɵfac = function JobCategoryApiService_Factory(t) { return new (t || JobCategoryApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JobCategoryApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobCategoryApiService, factory: JobCategoryApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobCategoryApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Zz1j":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/document-types/document-services/document.services.ts ***!
  \*****************************************************************************/
/*! exports provided: DocumentServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentServices", function() { return DocumentServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class DocumentServices {
    constructor(http) {
        this.http = http;
        /** Here we provide daynamic environment value from environment */
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
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
    /**Create Method for Get document List  */
    documentData() {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/list-all-document-types/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Individual document type details
    documentTypeDetails(documentTypeId) {
        try {
            let apiURL = `${this.endpoint}/company/document-type-details/${documentTypeId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Method for get data from company for document */
    addDocumentSubmit(data, companyId) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/add-document-types/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Method for Update document type  */
    updateDocument(data, companyId, documentTypeId) {
        try {
            let apiURL = `${this.endpoint}/company/update-document-types/${companyId}/${documentTypeId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**Method for delete (remove) document type */
    removeDocument(documentTypeId) {
        try {
            let apiURL = `${this.endpoint}/company/delete-document-type/${documentTypeId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
}
DocumentServices.ɵfac = function DocumentServices_Factory(t) { return new (t || DocumentServices)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DocumentServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentServices, factory: DocumentServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fuoZ":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/skill-category/skillCategory-service/skillCategory-api.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: skillCategoryApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skillCategoryApiService", function() { return skillCategoryApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class skillCategoryApiService {
    constructor(http) {
        this.http = http;
        /** Here we provide daynamic environment value from environment */
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
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
    /**Create Method for Get skill Category list */
    skillCategoryData() {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/category/list-skill-category/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // List Individual category list
    skillCategoryDetails(skillCategoryId) {
        try {
            let apiURL = `${this.endpoint}/category/skill-category-details/${skillCategoryId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**Create Method for add Job Category  */
    addSkillCategoy(data) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            const userId = localStorage.getItem('token');
            let apiURL = `${this.endpoint}/category/add-skill-category/${companyId}/${userId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Method for Update skill Category   */
    updateSkillCategory(data, skillCategoryId) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            const userId = localStorage.getItem('token');
            let apiURL = `${this.endpoint}/category/update-skill-category/${skillCategoryId}/${companyId}/${userId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**Method for delete (remove) skill Category*/
    removeData(skillCategoryId) {
        try {
            let apiURL = `${this.endpoint}/category/delete-skill-category/${skillCategoryId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
}
skillCategoryApiService.ɵfac = function skillCategoryApiService_Factory(t) { return new (t || skillCategoryApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
skillCategoryApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: skillCategoryApiService, factory: skillCategoryApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](skillCategoryApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wZQ7":
/*!**********************************************************************!*\
  !*** ./src/app/pages/leave-types/service-leave/leave-api.service.ts ***!
  \**********************************************************************/
/*! exports provided: LeaveApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApiService", function() { return LeaveApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class LeaveApiService {
    constructor(http) {
        this.http = http;
        /** Here we provide daynamic environment value from environment */
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
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
    /**Create Method for Get Company List  */
    getListData() {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/list-leave-types/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Method for get data from company for leave */
    leaveDataSubmit(data) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/add-leave-type/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Method for Update leave type  */
    updateLeaveType(data, leaveTypeId) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/update-leave-type/${companyId}/${leaveTypeId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /** Getting Individual List Leave Type  */
    leaveTypeDetails(leaveTypeId) {
        try {
            let apiURL = `${this.endpoint}/company/leave-type-details/${leaveTypeId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**Method for delete (remove) Leave type */
    removeData(leaveTypeId) {
        try {
            let apiURL = `${this.endpoint}/company/delete-leave-type/${leaveTypeId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Mark Employee Absent
    markEmployeeAbsent(data, userId) {
        try {
            let apiURL = `${this.endpoint}/employee/mark-leave-absent-or-sandwich/${userId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
}
LeaveApiService.ɵfac = function LeaveApiService_Factory(t) { return new (t || LeaveApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LeaveApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeaveApiService, factory: LeaveApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaveApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "y8g4":
/*!****************************************************************************!*\
  !*** ./src/app/pages/graderule/graderule-service/graderule-api.service.ts ***!
  \****************************************************************************/
/*! exports provided: GraderuleApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraderuleApiService", function() { return GraderuleApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class GraderuleApiService {
    constructor(http) {
        this.http = http;
        /** Here we provide daynamic environment value from environment */
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Contant-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
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
    getGradeRule(data, percentOfValue) {
        try {
            if (percentOfValue === 'basicSalary') {
                data.paymentHead.fixedPercentOfName = percentOfValue;
                data.paymentHead.fixedPercentOfId = '';
            }
            else {
                data.paymentHead.fixedPercentOfId = percentOfValue;
                data.paymentHead.fixedPercentOfName = '';
            }
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/add-grade-rule/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    updateGadeRule(data, gradeRuleId) {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/update-grade-rule/${companyId}/${gradeRuleId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Update Payment Heads
    updatePaymentHeads(data, paymentHeadsId, gradeRuleId, percentOfValue, percent) {
        try {
            if (percent) {
                if (percentOfValue === 'basicSalary') {
                    data.fixedPercentOfName = percentOfValue;
                }
                else {
                    data.fixedPercentOfId = percentOfValue;
                }
            }
            let apiURL = `${this.endpoint}/company/update-grade-rule-payment-head/${paymentHeadsId}/${gradeRuleId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**get payment heads data  */
    getPaymentHeadData() {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/list-payment-heads/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    getGradeRuleList() {
        try {
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/company/list-all-grade-rule/${companyId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    existingData(gradeRuleId) {
        try {
            let apiURL = `${this.endpoint}/company/grade-rule-list/${gradeRuleId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    removeData(gradeRuleId) {
        try {
            let apiURL = `${this.endpoint}/company/delete-grade-rule/${gradeRuleId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Manage Payment heads start here
    companyPaymentHeads(paymentHeadId) {
        try {
            let apiURL = `${this.endpoint}/company/payment-head-details/${paymentHeadId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // addgrad rule payment heads
    addGradules(data, gradeRuleId, percentOfValue) {
        try {
            if (percentOfValue === 'basicSalary') {
                data.paymentHead.fixedPercentOfName = percentOfValue;
            }
            else {
                data.paymentHead.fixedPercentOfId = percentOfValue;
            }
            console.log(data);
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/company/add-grade-rule-payment-head/${gradeRuleId}/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    removeGradeData(paymentHeadsId, gradeRuleId) {
        try {
            let apiURL = `${this.endpoint}/company/delete-grade-rule-payment-head/${paymentHeadsId}/${gradeRuleId}`;
            return this.http.delete(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Get Fixed Payment Heads
    fixedPaymentHeads(gradeRuleId) {
        try {
            let apiURL = `${this.endpoint}/company/fixed-payment-heads/${gradeRuleId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Get Filter payment heads
    filterPaymentHeads(gradeRuleId) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/company/filter-payment-heads/${companyId}/${gradeRuleId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
}
GraderuleApiService.ɵfac = function GraderuleApiService_Factory(t) { return new (t || GraderuleApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GraderuleApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GraderuleApiService, factory: GraderuleApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraderuleApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map