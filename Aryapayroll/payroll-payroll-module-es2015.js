(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payroll-payroll-module"],{

/***/ "Cej+":
/*!**********************************************************************!*\
  !*** ./src/app/pages/payroll/payroll-service/payroll-api.service.ts ***!
  \**********************************************************************/
/*! exports provided: PayrollApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollApiService", function() { return PayrollApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");







class PayrollApiService {
    constructor(http) {
        this.http = http;
        /** Here we provide daynamic environment value from environment */
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
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
    getPayrolData(year, month) {
        try {
            let data = {
                year: year,
                month: month
            };
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/employee/salary-slip-list/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    getSalarySlip(salarySlipId) {
        try {
            let apiURL = `${this.endpoint}/employee/salary-slip-details/${salarySlipId}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Generate Salary Slip
    generateSalarySlip(employeeIdArray, year, month) {
        try {
            let data = {
                year: year,
                month: month,
                employeeIdArray: employeeIdArray.employeeIdArray
            };
            const companyId = sessionStorage.getItem("companyId");
            let apiURL = `${this.endpoint}/employee/generate-salary-slip/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // Filter Employee Data
    filterSalarySlip(modeType, year, month) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/employee/filter-salary-slip/${companyId}/${modeType}/${year}/${month}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // List Employee salary slip upto date
    listSalarySlipDetails(month, year) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/employee/current-month-salary-slip/${companyId}/${year}/${month}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Generate and Update the employee salary slip
    monthlyGenerateSlip(data, month, year, type) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/employee/generate-current-month-slip/${companyId}/${year}/${month}/${type}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    // Filter Employee Data
    filterCurrentSalarySlip(modeType, year, month) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/employee/filter-current-month-salary-slip/${companyId}/${modeType}/${year}/${month}`;
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (err) {
            console.log(err);
        }
    }
    // GENERATE BANK STATEMENT(SALARY UPLOAD) API
    bankStatement(data) {
        try {
            let companyId = sessionStorage.getItem('companyId');
            let apiURL = `${this.endpoint}/company/bank-statement/${companyId}`;
            return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    //  ADD CHEQUE DETAILS API
    addChequeApi(salaryId, data) {
        try {
            let apiUrl = `${this.endpoint}/user/add-cheque-details/${salaryId}`;
            return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    //  GET CHEQUE DETAILS API
    getChequeApi(salaryId) {
        try {
            let apiUrl = `${this.endpoint}/user/get-cheque-details/${salaryId}`;
            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
    //  GET CHEQUE DETAILS API
    getCompanyDetails(companyId) {
        try {
            let apiUrl = `${this.endpoint}/company/details/${companyId}`;
            return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
        }
        catch (error) {
            console.log(error);
        }
    }
}
PayrollApiService.ɵfac = function PayrollApiService_Factory(t) { return new (t || PayrollApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PayrollApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PayrollApiService, factory: PayrollApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JrtD":
/*!*************************************************!*\
  !*** ./src/app/pages/payroll/payroll.module.ts ***!
  \*************************************************/
/*! exports provided: PayrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollModule", function() { return PayrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payroll-routing.module */ "dElJ");
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payroll.component */ "cKqs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-payroll/list-report.component */ "jmsI");
/* harmony import */ var _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-payroll/add-payroll.component */ "Yylz");
/* harmony import */ var _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-payroll/update-report.component */ "sB2f");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payroll-sheet/payroll-sheet.component */ "LzcQ");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
















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
        autoHide: 3000,
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
class PayrollModule {
}
PayrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PayrollModule });
PayrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PayrollModule_Factory(t) { return new (t || PayrollModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"].withConfig(customNotifierOptions),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PayrollModule, { declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"],
        _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_6__["ListPayrollComponent"],
        _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_7__["AddPayrollComponent"],
        _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePayrollComponent"],
        _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_11__["PayrollSheetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"],
                    _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_6__["ListPayrollComponent"],
                    _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_7__["AddPayrollComponent"],
                    _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePayrollComponent"],
                    _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_11__["PayrollSheetComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                    angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"].withConfig(customNotifierOptions),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "LzcQ":
/*!************************************************************************!*\
  !*** ./src/app/pages/payroll/payroll-sheet/payroll-sheet.component.ts ***!
  \************************************************************************/
/*! exports provided: PayrollSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollSheetComponent", function() { return PayrollSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! exceljs */ "6K47");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../payroll-service/payroll-api.service */ "Cej+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");












class PayrollSheetComponent {
    constructor(apiService, titleCase) {
        this.apiService = apiService;
        this.titleCase = titleCase;
        this.minMode = 'month'; // change for month:year
        this.bsValue = new Date();
        this.requestDateDetails = {
            year: `${new Date().getFullYear()}`,
            month: `${new Date().getMonth() + 1}`.padStart(2, '0')
        };
        this.bsConfig = Object.assign({}, {
            minMode: this.minMode,
            dateInputFormat: 'MM-YYYY'
        });
    }
    ngOnInit() {
        this.getCompanyDetails();
    }
    rangeDatesUpdated(dateValues) {
        try {
            this.requestDateDetails = {
                year: `${moment__WEBPACK_IMPORTED_MODULE_2___default()(dateValues).get('years')}`,
                month: `${moment__WEBPACK_IMPORTED_MODULE_2___default()(dateValues).get('months') + 1}`.padStart(2, '0')
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    getCompanyDetails() {
        this.apiService.getCompanyDetails(localStorage.getItem('companyId')).subscribe((companyDetails) => {
            if (companyDetails.status === 'success') {
                this.companyDetails = companyDetails.data;
            }
        });
    }
    // GENERATE SALARY UPLOAD(BANK STATEMENT)
    statementSheet(sheetType) {
        try {
            this.apiService.bankStatement({ year: this.requestDateDetails.year, month: this.requestDateDetails.month, statementType: sheetType }).subscribe(response => {
                if (response.status === 'success') {
                    (response.data.bankStatement.length === 0) ?
                        sheetType === 'Bank' ?
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Bank Statement is not available or may be you didn't add Empolyees Bank Details") :
                            sheetType === 'Cash' ?
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Cash Statement is not available") :
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Cheque Statement is not available")
                        : sheetType === 'Bank' ?
                            this.generateBankSheet(response.data) :
                            sheetType === 'Cash' ?
                                this.generateCashStatement(response.data) :
                                this.generateChequeStatement(response.data);
                }
                if (response.status === 'error') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(response.message);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    // FOR GENRATE EXCEL SHEET FOR BANK STATEMENT
    generateBankSheet(bankStatementData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Create workbook and worksheet
            const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_3__["Workbook"]();
            const worksheet = workbook.addWorksheet('Bank Statement');
            const subHeading = [`We request you to transfer our Salary from Indusind salary account for the amount of  ₹ ${bankStatementData.totalAmoutPaid} (${this.titleCase.transform(bankStatementData.totalAmoutPaidWords)} Only). Please refer  transfer from Aryavrat Infotech Pvt. Ltd. to IndusInd Salary Account of IndusInd Bank of amount ₹ ${bankStatementData.totalAmoutPaid}/-through cheque on 10th ${bankStatementData.month}.`];
            const subject = 'IndusInd bank, Jaipur';
            const tableSubHeading = [`Please find the list below for the salary transfer of ${bankStatementData.month} ${bankStatementData.year}`];
            const header1 = bankStatementData.headerDetails;
            const header2 = ['', '', '', '', ''];
            const footer = [
                ['', 'Total', '', bankStatementData.totalAmoutPaid, ''],
            ];
            const bankData = [];
            for (let i = 0; i < bankStatementData.bankStatement.length; i++) {
                const data = [];
                data.push(i + 1);
                for (let key in bankStatementData.bankStatement[i]) {
                    data.push(bankStatementData.bankStatement[i][key]);
                }
                bankData.push(data);
            }
            // Add Row and formatting
            const subTitleRow = worksheet.addRow(['TO', '', '', '', 'Date : ' + bankStatementData.currentDate]);
            worksheet.getCell('B2').value = subject;
            // Add sheet heading
            const sheetHeading = worksheet.addRow([bankStatementData.subject]);
            worksheet.mergeCells('A3:E3');
            worksheet.addRow([]);
            sheetHeading.font = { name: 'Arial', family: 4, size: 10, underline: 'double', bold: true, };
            sheetHeading.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
            // Add sheet sub heading
            const sheetSubHeading1 = worksheet.addRow(subHeading);
            worksheet.mergeCells('A5:E7');
            sheetSubHeading1.getCell(5).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            sheetSubHeading1.getCell(5).alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
            // Add table sub heading
            const sheetSubHeading2 = worksheet.addRow(tableSubHeading);
            worksheet.mergeCells('A8:E8');
            sheetSubHeading2.eachCell((cell, number) => {
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
            });
            const headerRow1 = worksheet.addRow(header2);
            headerRow1.eachCell((cell, number) => {
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            });
            const headerRow2 = worksheet.addRow(header1);
            headerRow2.eachCell((cell, number) => {
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                cell.font = { name: 'Arial', family: 4, size: 10, bold: true, };
            });
            worksheet.getColumn(2).width = 30;
            worksheet.getColumn(3).width = 30;
            worksheet.getColumn(5).width = 30;
            bankData.forEach(d => {
                const row = worksheet.addRow(d);
                row.eachCell((cell, number) => {
                    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    cell.alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                });
            });
            footer.forEach(f => {
                const footerRow = worksheet.addRow(f);
                footerRow.eachCell((cell, number) => {
                    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    cell.alignment = { vertical: 'bottom', horizontal: 'left', wrapText: true };
                    cell.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                });
            });
            // Generate Excel sheet
            workbook.xlsx.writeBuffer().then((data) => {
                const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'Bank Statement.xlsx');
            });
        });
    }
    // FOR GENRATE EXCEL SHEET FOR CASH STATEMENT
    generateCashStatement(salaryStatementData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Create workbook and worksheet
                const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_3__["Workbook"]();
                const worksheet = workbook.addWorksheet('Cash Statement');
                worksheet.addRow([]);
                worksheet.mergeCells('A2:E2');
                worksheet.getCell('A2').value = `${salaryStatementData.companyName}, ${salaryStatementData.month} ${salaryStatementData.year}`;
                worksheet.getCell('A2').font = { name: 'Trebuchet MS', family: 4, size: 15, bold: true, };
                worksheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                worksheet.addRow([]);
                worksheet.addRow([]);
                const header1 = salaryStatementData.headerDetails;
                const data = [];
                salaryStatementData.bankStatement.forEach((salaryInfo, index) => {
                    let salaryDetail = [index + 1, salaryInfo.name, salaryInfo.cashAmt, '', ''];
                    data.push(salaryDetail);
                });
                const headerRow2 = worksheet.addRow(header1);
                headerRow2.eachCell((cell) => {
                    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    cell.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                });
                data.forEach(d => {
                    const row = worksheet.addRow(d);
                    row.eachCell((cell) => {
                        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    });
                });
                worksheet.getColumn(2).width = 30;
                worksheet.getColumn(3).width = 30;
                worksheet.getColumn(4).width = 30;
                worksheet.getColumn(5).width = 30;
                // Footer Row
                const footerRow = worksheet.addRow(['Total', '', salaryStatementData.totalCashAmtPaid, '']);
                footerRow.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                footerRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                // Generate Excel sheet
                workbook.xlsx.writeBuffer().then((data) => {
                    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'Cash-Statement.xlsx');
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // FOR GENRATE EXCEL SHEET FOR CASH STATEMENT
    generateChequeStatement(salaryStatementData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Create workbook and worksheet
                const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_3__["Workbook"]();
                const worksheet = workbook.addWorksheet('Cheque Statement');
                worksheet.addRow([]);
                worksheet.mergeCells('A2:E2');
                worksheet.getCell('A2').value = `${salaryStatementData.companyName}, ${salaryStatementData.month} ${salaryStatementData.year}`;
                worksheet.getCell('A2').font = { name: 'Trebuchet MS', family: 4, size: 15, bold: true, };
                worksheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                worksheet.addRow([]);
                worksheet.addRow([]);
                const header1 = salaryStatementData.headerDetails;
                const data = [];
                salaryStatementData.bankStatement.forEach((salaryInfo, index) => {
                    let salaryDetail = [index + 1, salaryInfo.name, salaryInfo.chequeAmt, salaryInfo.chequeNum, '', ''];
                    data.push(salaryDetail);
                });
                const headerRow2 = worksheet.addRow(header1);
                headerRow2.eachCell((cell) => {
                    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    cell.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                });
                data.forEach(d => {
                    const row = worksheet.addRow(d);
                    row.eachCell((cell) => {
                        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                    });
                });
                worksheet.getColumn(2).width = 30;
                worksheet.getColumn(3).width = 30;
                worksheet.getColumn(4).width = 30;
                worksheet.getColumn(5).width = 30;
                // Footer Row
                const footerRow = worksheet.addRow(['Total', '', salaryStatementData.totalChequeAmtPaid, '', '', '']);
                footerRow.font = { name: 'Arial', family: 4, size: 10, bold: true, };
                footerRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                // Generate Excel sheet
                workbook.xlsx.writeBuffer().then((data) => {
                    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'Cheque-Statement.xlsx');
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
PayrollSheetComponent.ɵfac = function PayrollSheetComponent_Factory(t) { return new (t || PayrollSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_6__["PayrollApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"])); };
PayrollSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PayrollSheetComponent, selectors: [["app-payroll-sheet"]], decls: 98, vars: 15, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "timer"], [1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "form-row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "form-group"], [1, "col-sm-offset-2"], ["type", "text", "placeholder", "Select Months", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "bsValue", "bsValueChange"], [1, "col-lg-9", "col-md-9", "col-sm-12"], [1, "form-group", "sheet-btn"], ["type", "button", 1, "btn", "btn-secondary", "sheet-btn-format", 3, "click"], [1, "fa", "fa-download"], [1, "table", 2, "margin", "auto"]], template: function PayrollSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Salary Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function PayrollSheetComponent_Template_input_bsValueChange_11_listener($event) { return ctx.rangeDatesUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayrollSheetComponent_Template_button_click_14_listener() { return ctx.statementSheet("Bank"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Bank Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayrollSheetComponent_Template_button_click_17_listener() { return ctx.statementSheet("Cash"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cash Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayrollSheetComponent_Template_button_click_20_listener() { return ctx.statementSheet("Cheque"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cheque Statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Domicile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Official Company Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Fax Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Email Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Bank Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Account No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Currency:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Taxation No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "PAN No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "BCC Address for all outgoing mails:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bsConfig", ctx.bsConfig)("bsValue", ctx.bsValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.domicile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.officialNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.fax, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.bankName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.bankAccNum, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.countryName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.currency, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.taxationNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.panNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.bccEmail, " ");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierContainerComponent"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerDirective"]], styles: [".sheet-btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -11px;\n  font: caption;\n}\n\n.sheet-btn-format[_ngcontent-%COMP%] {\n  font-family: fantasy;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC9wYXlyb2xsLXNoZWV0L3BheXJvbGwtc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXlyb2xsL3BheXJvbGwtc2hlZXQvcGF5cm9sbC1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGVldC1idG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xuICAgIGZvbnQ6IGNhcHRpb247XG59XG5cbi5zaGVldC1idG4tZm9ybWF0e1xuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PayrollSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-payroll-sheet',
                templateUrl: './payroll-sheet.component.html',
                styleUrls: ['./payroll-sheet.component.scss']
            }]
    }], function () { return [{ type: _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_6__["PayrollApiService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"] }]; }, null); })();


/***/ }),

/***/ "Yylz":
/*!********************************************************************!*\
  !*** ./src/app/pages/payroll/add-payroll/add-payroll.component.ts ***!
  \********************************************************************/
/*! exports provided: AddPayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPayrollComponent", function() { return AddPayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddPayrollComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddPayrollComponent.ɵfac = function AddPayrollComponent_Factory(t) { return new (t || AddPayrollComponent)(); };
AddPayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPayrollComponent, selectors: [["app-add-payroll"]], decls: 0, vars: 0, template: function AddPayrollComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPayrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-payroll',
                templateUrl: './add-payroll.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cKqs":
/*!****************************************************!*\
  !*** ./src/app/pages/payroll/payroll.component.ts ***!
  \****************************************************/
/*! exports provided: PayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollComponent", function() { return PayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PayrollComponent {
    constructor() { }
    ngOnInit() {
    }
}
PayrollComponent.ɵfac = function PayrollComponent_Factory(t) { return new (t || PayrollComponent)(); };
PayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PayrollComponent, selectors: [["app-payroll"]], decls: 1, vars: 0, template: function PayrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheXJvbGwvcGF5cm9sbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payroll',
                templateUrl: './payroll.component.html',
                styleUrls: ['./payroll.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dElJ":
/*!*********************************************************!*\
  !*** ./src/app/pages/payroll/payroll-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PayrollRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayrollRoutingModule", function() { return PayrollRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payroll.component */ "cKqs");
/* harmony import */ var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authGuard/auth.guard */ "CG1p");
/* harmony import */ var _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-payroll/list-report.component */ "jmsI");
/* harmony import */ var _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-payroll/add-payroll.component */ "Yylz");
/* harmony import */ var _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-payroll/update-report.component */ "sB2f");
/* harmony import */ var _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payroll-sheet/payroll-sheet.component */ "LzcQ");











const route = [
    {
        path: '',
        component: _payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: 'list-payroll',
                component: _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_5__["ListPayrollComponent"],
            },
            {
                path: 'add-payroll',
                component: _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_6__["AddPayrollComponent"]
            },
            {
                path: 'update-payroll/:employeeId/:month/:year',
                component: _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_7__["UpdatePayrollComponent"]
            },
            {
                path: 'payroll-sheet',
                component: _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_8__["PayrollSheetComponent"]
            },
            {
                path: '',
                redirectTo: 'list-payroll',
                pathMatch: 'full',
            },
        ],
    }
];
class PayrollRoutingModule {
}
PayrollRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PayrollRoutingModule });
PayrollRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PayrollRoutingModule_Factory(t) { return new (t || PayrollRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PayrollRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jmsI":
/*!*********************************************************************!*\
  !*** ./src/app/pages/payroll/list-payroll/list-report.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListPayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPayrollComponent", function() { return ListPayrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "5RHE");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payroll-service/payroll-api.service */ "Cej+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _employee_wizard_services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../employee-wizard/services/employee.service */ "qp47");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");












function ListPayrollComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r5.name);
} }
function ListPayrollComponent_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const modeType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", modeType_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", modeType_r6.name, "");
} }
function ListPayrollComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListPayrollComponent_div_96_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.headerCheckBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Select All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.selectAllCheckBox);
} }
function ListPayrollComponent_tbody_107_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListPayrollComponent_tbody_107_td_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.listCheckBoxes(list_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r10.showCheckbox[list_r9._id]);
} }
function ListPayrollComponent_tbody_107_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListPayrollComponent_tbody_107_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_tbody_107_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.addChequeNo(list_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListPayrollComponent_tbody_107_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_tbody_107_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.generatePdf(list_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListPayrollComponent_tbody_107_div_22_table_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("routerLink", "/pages/payroll/update-payroll/", list_r9._id, "/", list_r9.month, "/", list_r9.year, "");
} }
function ListPayrollComponent_tbody_107_div_22_table_1_table_34_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total Earnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListPayrollComponent_tbody_107_div_22_table_1_table_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListPayrollComponent_tbody_107_div_22_table_1_table_34_tr_1_Template, 3, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empDetailsEarnings_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r32 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsEarnings_r31.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsEarnings_r31.amt);
} }
function ListPayrollComponent_tbody_107_div_22_table_1_table_36_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total Deductions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListPayrollComponent_tbody_107_div_22_table_1_table_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListPayrollComponent_tbody_107_div_22_table_1_table_36_tr_1_Template, 3, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empDetailsDeductions_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r35 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsDeductions_r34.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsDeductions_r34.amt);
} }
function ListPayrollComponent_tbody_107_div_22_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Payroll Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ListPayrollComponent_tbody_107_div_22_table_1_div_5_Template, 4, 3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Annual CTC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Monthly Pay:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Earned Leave Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Account Number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Present Days:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Pay Days:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, ListPayrollComponent_tbody_107_div_22_table_1_table_34_Template, 7, 3, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListPayrollComponent_tbody_107_div_22_table_1_table_36_Template, 7, 3, "table", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empDetails_r26 = ctx.$implicit;
    const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !list_r9.isGenerated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetails_r26.annuallyctc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetails_r26.monthlyctc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetails_r26.earnedLeaves);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetails_r26.accountNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetails_r26.present);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetails_r26.payDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.salarySlipDetails[list_r9._id].earningDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.salarySlipDetails[list_r9._id].deductionDetails);
} }
function ListPayrollComponent_tbody_107_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListPayrollComponent_tbody_107_div_22_table_1_Template, 37, 9, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.salarySlipDetails[list_r9._id].employeeSalaryDetails);
} }
function ListPayrollComponent_tbody_107_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListPayrollComponent_tbody_107_td_2_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ListPayrollComponent_tbody_107_td_3_Template, 2, 0, "td", 41);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ListPayrollComponent_tbody_107_button_13_Template, 2, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_tbody_107_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const list_r9 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.showSalarySlipDetails(list_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ListPayrollComponent_tbody_107_button_18_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ListPayrollComponent_tbody_107_div_22_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !list_r9.isGenerated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r9.isGenerated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r9.employeeDetails.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r9.gross.amt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r9.totalDeduction.amt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r9.netSalary.amt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showChequeBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r9.isGenerated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r3.showSalaryDetailsCards[list_r9._id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.salarySlipDetails[list_r9._id] !== undefined);
} }
function ListPayrollComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.salarySlipStatus);
} }
class ListPayrollComponent {
    constructor(api, fb, employeeListAPI, spinner, notifier) {
        this.api = api;
        this.fb = fb;
        this.employeeListAPI = employeeListAPI;
        this.spinner = spinner;
        this.notifier = notifier;
        this.existingData = [];
        this.demo = [];
        this.dataSalary = [];
        this.showPayrollDetials = false;
        this.salarySlipStatus = '';
        this.paymentModeType = [
            { name: 'Transfer to Bank Account', value: 'Tansfer to Bank Account' },
            { name: 'Cash', value: 'Cash' },
            { name: 'Cheque', value: 'Cheque' }
        ];
        this.status = "Active";
        this.showSalaryDetailsCards = {};
        this.showCheckbox = {};
        this.selectAllCheckBox = false;
        this.generateSalaryForEmployees = [];
        this.salarySlipDetails = {};
        this.currentMonthValue = {};
        this.filterOnEmployee = false;
        this.currentSalarySlipFilterStatus = 'later';
        this.showChequeBtn = false;
    }
    ngOnInit() {
        let dataSetting = this.currentMonthSetting();
        this.listSalarySlipDetails(dataSetting.monthValue, dataSetting.year, 'later', false);
        let monthValue = Number(dataSetting.monthValue);
        for (var i = 1; i <= 12; i++) {
            if (monthValue >= i) {
                this.currentMonthValue[i.toString().padStart(2, '0')] = true;
            }
            else {
                this.currentMonthValue[i.toString().padStart(2, '0')] = false;
            }
        }
        this.employeeList();
    }
    // Employee List
    employeeList() {
        try {
            this.employeeListAPI.getEmployeeList(this.status).subscribe((data) => {
                if (data.status === 'success') {
                    this.companyEmployeelist = data.data;
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    allDownload() {
        try {
            this.spinner.show();
            if (document.getElementById('salarySlipType').value === 'later') {
                if (this.generateSalaryForEmployees.length === 0) {
                    this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No Salary Slip Selected');
                }
                else {
                    let generateSlip = {
                        employeeIdArray: this.generateSalaryForEmployees
                    };
                    let year = document.getElementById('payrollYear').value;
                    let month = document.getElementById('salarySlipMonth').value;
                    let currentDate = new Date();
                    if (Number(year) === currentDate.getFullYear()) {
                        this.api.monthlyGenerateSlip(generateSlip, month, year, 'multipleGenerate').forEach((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (data.status === 'success') {
                                for (var i = 0; i < data.data.length; i++) {
                                    this.generatePdf(data.data[i]);
                                }
                                this.listSalarySlipDetails(month, year, 'later', false);
                                this.spinner.hide();
                            }
                        }));
                        this.generateSalaryForEmployees = [];
                    }
                    else {
                        this.api.generateSalarySlip(generateSlip, year, month).forEach((data) => {
                            if (data.status === 'success') {
                                for (var i = 0; i < data.data.length; i++) {
                                    this.generatePdf(data.data[i]);
                                }
                                this.listSalarySlipDetails(month, year, 'later', false);
                                this.spinner.hide();
                            }
                        });
                    }
                }
            }
            else if (document.getElementById('salarySlipType').value === 'former') {
                this.dataSalary.forEach((items) => {
                    this.generatePdf(items._id);
                });
                this.spinner.hide();
            }
            // this.spinner.hide();
        }
        catch (error) {
            console.log(error);
            this.spinner.hide();
        }
    }
    // download pdf start
    generatePdf(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.api.getSalarySlip(id).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.existingData = yield data.data;
                this.demo.push(data.data);
                this.grossAmt = yield data.data.gross.amt;
                this.netSalaryAmt = yield data.data.netSalary.amt;
                this.totalDeductionAmt = yield data.data.totalDeduction.amt;
                this.employeeDetails = yield data.data.employeeDetails;
                var doc = yield new jspdf__WEBPACK_IMPORTED_MODULE_3__();
                var image = new Image();
                image.src = yield data.data.companyImageUrl;
                yield doc.setFontSize(12);
                yield doc.rect(155, 20, 50, 24);
                yield doc.addImage(image, 'PNG', 170, 22, 20, 20, 'Default Logo', 'NONE');
                yield doc.rect(5, 20, 150, 8);
                yield doc.setFontStyle("bold");
                yield doc.text(yield this.employeeDetails.companyName, 75, 26, "center", "a");
                yield doc.setFontStyle("normal");
                yield doc.rect(5, 28, 150, 8);
                yield doc.setFontStyle("bold");
                yield doc.text(`Salary Slip for the Month of ${data.data.month}, ${data.data.year}`, 75, 34, "center", "a");
                yield doc.setFontStyle("normal");
                yield doc.rect(5, 36, 75, 8);
                yield doc.text("Employee Name", 22, 42, "center", "a");
                yield doc.rect(80, 36, 75, 8);
                yield doc.setFontStyle("bold");
                yield doc.text(yield this.employeeDetails.employeeName, 120, 42, "center", "a");
                yield doc.setFontStyle("normal");
                yield doc.rect(5, 44, 50, 13);
                yield doc.text("Account No.", 18, 52, "center", "a");
                yield doc.rect(55, 44, 50, 13);
                if (yield this.employeeDetails.accountNum) {
                    yield doc.text(yield this.employeeDetails.accountNum, 80, 52, "center", "a");
                }
                else {
                    yield doc.text('', 80, 52, "center", "a");
                }
                yield doc.rect(105, 44, 50, 13);
                yield doc.text("Designation", 125, 52, "center", "a");
                yield doc.rect(155, 44, 50, 13);
                yield doc.text(yield this.employeeDetails.designation, 180, 52, "center", "a");
                yield doc.rect(5, 57, 50, 8);
                yield doc.text("Days Present", 19, 63, "center", "a");
                yield doc.rect(55, 57, 50, 8);
                yield doc.text(yield this.employeeDetails.present, 80, 63, "center", "a");
                yield doc.rect(105, 57, 50, 8);
                yield doc.text("Earned Leaves", 125, 63, "center", "a");
                yield doc.rect(155, 57, 50, 8);
                yield doc.text(yield this.employeeDetails.earnedLeaves, 175, 63, "center", "a");
                yield doc.rect(5, 65, 100, 8);
                yield doc.text("ESIC No :-", 17, 71, "center", "a");
                yield doc.rect(105, 65, 100, 8);
                yield doc.text("P.F. No :-", 120, 71, "center", "a");
                yield doc.rect(5, 73, 65, 8);
                yield doc.text("Leave Without Sanction", 29, 79, "center", "a");
                yield doc.rect(70, 73, 35, 8);
                yield doc.text(yield this.employeeDetails.unsanctionedLeave, 83, 79, "center", "a");
                yield doc.rect(105, 73, 60, 8);
                yield doc.text("Payable Days", 125, 79, "center", "a");
                yield doc.rect(165, 73, 40, 8);
                yield doc.text(yield this.employeeDetails.payDays, 180, 79, "center", "a");
                yield doc.rect(5, 81, 65, 8);
                yield doc.text("Total CTC/Month", 22, 87, "center", "a");
                yield doc.rect(70, 81, 35, 8);
                yield doc.setFontStyle("bold");
                yield doc.text(yield this.employeeDetails.monthlyctc, 85, 87, "center", "a");
                yield doc.setFontStyle("normal");
                yield doc.rect(105, 81, 60, 8);
                yield doc.text("Total CTC/Annum", 129, 87, "center", "a");
                yield doc.rect(165, 81, 40, 8);
                yield doc.text(yield this.employeeDetails.annuallyctc, 180, 87, "center", "a");
                yield doc.rect(5, 89, 100, 12);
                yield doc.setFontStyle("bold");
                yield doc.text("Earnings", 40, 97, "center", "a");
                yield doc.rect(105, 89, 100, 12);
                yield doc.text("Deductions", 135, 97, "center", "a");
                yield doc.rect(5, 101, 65, 8);
                yield doc.rect(70, 101, 35, 8);
                yield doc.text("Amount", 85, 107, "center", "a");
                yield doc.rect(105, 101, 60, 8);
                yield doc.rect(165, 101, 40, 8);
                yield doc.text("Amount", 185, 107, "center", "a");
                yield doc.setFontStyle("normal");
                // Daynamic part start
                var textY = 115;
                var maxLength;
                if (this.demo[0].deductions.length > this.demo[0].earnings.length) {
                    maxLength = yield this.demo[0].deductions.length;
                }
                else {
                    maxLength = yield this.demo[0].earnings.length;
                }
                for (var i = 0; i < maxLength; i++) {
                    var rectY = textY - 6;
                    if ((yield this.demo[0].earnings[i]) == undefined) {
                        yield doc.rect(5, rectY, 65, 8);
                        yield doc.rect(70, rectY, 35, 8);
                        textY = textY + 8;
                    }
                    else {
                        yield doc.rect(5, rectY, 65, 8);
                        yield doc.text(this.demo[0].earnings[i].label, 8, textY, "left", "a");
                        yield doc.rect(70, rectY, 35, 8);
                        yield doc.text(this.demo[0].earnings[i].amt, 95, textY, "center", "a");
                    }
                    if ((yield this.demo[0].deductions[i]) == undefined) {
                        yield doc.rect(105, rectY, 60, 8);
                        yield doc.rect(165, rectY, 40, 8);
                        textY = textY + 8;
                    }
                    else {
                        yield doc.rect(105, rectY, 60, 8);
                        yield doc.text(this.demo[0].deductions[i].label, 117, textY, "left", "a");
                        yield doc.rect(165, rectY, 40, 8);
                        yield doc.text(this.demo[0].deductions[i].amt, 195, textY, "center", "a");
                        textY = textY + 8;
                    }
                }
                textY = textY - 6;
                yield doc.rect(5, textY, 65, 8);
                yield doc.text("Gross", 13, textY + 6, "center", "a");
                yield doc.rect(70, textY, 35, 8);
                yield doc.text(this.grossAmt, 90, textY + 6, "center", "a");
                yield doc.rect(105, textY, 60, 8);
                yield doc.text("Total Deductions", 134, textY + 6, "center", "a");
                yield doc.rect(165, textY, 40, 8);
                yield doc.text(this.totalDeductionAmt, 192, textY + 6, "center", "a");
                textY = textY + 8;
                yield doc.rect(5, textY, 65, 8);
                yield doc.setFontStyle("bold");
                yield doc.text("Net Salary", 17, textY + 6, "center", "a");
                yield doc.rect(5, textY, 200, 8);
                yield doc.text(this.netSalaryAmt, 90, textY + 6, "center", "a");
                yield doc.setFontStyle("normal");
                textY = textY + 8;
                yield doc.rect(5, textY, 200, 8);
                // doc.save('my.pdf');
                yield doc.save(this.employeeDetails.employeeName + '.pdf');
            }));
        });
    }
    // account pdf start
    accountpdfPdf() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__('a', 'mm', [700, 1000]);
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
        }
        // doc.addPage();
        doc.save('my.pdf');
    }
    // accoutn pdf end
    // Year Validation
    yearValidation() {
        try {
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let yearValue = document.getElementById('payrollYear').value;
            let yearRegularExpression = /^(19|20)\d{2}$/;
            let result = yearValue.match(yearRegularExpression);
            if (yearValue.length === 0 && result === null) {
                this.earnedLeaveYearMsg = '';
            }
            else if (result === null) {
                this.earnedLeaveYearMsg = "Year Value is not acceptable";
            }
            else {
                this.earnedLeaveYearMsg = '';
            }
            if (Number(yearValue) < year) {
                for (var key in this.currentMonthValue) {
                    this.currentMonthValue[key] = true;
                }
                document.getElementById('salarySlipMonth').value = '01';
            }
            else if (Number(yearValue) === year) {
                let monthValue = currentDate.getMonth() + 1;
                for (var i = 1; i <= 12; i++) {
                    if (monthValue >= i) {
                        this.currentMonthValue[i.toString().padStart(2, '0')] = true;
                    }
                    else {
                        this.currentMonthValue[i.toString().padStart(2, '0')] = false;
                    }
                }
            }
            else if (Number(yearValue) > year) {
                this.earnedLeaveYearMsg = "Forthcoming data is not available";
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    // Filter Functionality
    filterFunctionality() {
        this.selectAllCheckBox = false;
        if (document.getElementById('payrollYear').value.length === 0) {
            let currentDate = new Date().toString();
            document.getElementById('payrollYear').value = currentDate.substring(11, 15);
        }
        if (document.getElementById('salaryEmployee').value.length !== 0) {
            this.filterEmployeeId = document.getElementById('salaryEmployee').value;
            let month = document.getElementById('salarySlipMonth').value;
            let year = document.getElementById('payrollYear').value;
            this.listSalarySlipDetails(month, year, 'later', true);
        }
        else {
            if (document.getElementById('salarySlipType').value === 'former') {
                this.currentSalarySlipFilterStatus = 'former';
                let month = document.getElementById('salarySlipMonth').value;
                let year = document.getElementById('payrollYear').value;
                if (document.getElementById('salaryModeType').value.length !== 0) {
                    let paymentMode = document.getElementById('salaryModeType').value;
                    this.filterSalarySlip(paymentMode, year, month);
                }
                else {
                    this.listSalarySlipDetails(month, year, 'former', false);
                }
            }
            else if (document.getElementById('salarySlipType').value === 'later') {
                this.currentSalarySlipFilterStatus = 'later';
                let month = document.getElementById('salarySlipMonth').value;
                let year = document.getElementById('payrollYear').value;
                if (document.getElementById('salaryModeType').value.length !== 0) {
                    let paymentMode = document.getElementById('salaryModeType').value;
                    this.filterCurrentSalarySlip(paymentMode, year, month);
                }
                else {
                    this.listSalarySlipDetails(month, year, 'later', false);
                }
            }
        }
        document.getElementById('salaryModeType').value === 'Cheque' ? this.showChequeBtn = true : this.showChequeBtn = false;
    }
    // Current Month Setting
    currentMonthSetting() {
        try {
            let curretDate = new Date();
            let manipulateDate, month, year, monthValue, returnData = {
                month: String,
                year: String,
                monthValue: String
            };
            monthValue = (curretDate.getMonth() + 1).toString().padStart(2, '0');
            year = curretDate.toString();
            year = year.substring(11, 15);
            month = curretDate.toString();
            month = month.substring(4, 7);
            returnData.month = month;
            returnData.monthValue = monthValue;
            returnData.year = year;
            document.getElementById('payrollYear').value = year;
            document.getElementById(monthValue).setAttribute('selected', 'selected');
            document.getElementById('salarySlipType').value = 'later';
            return (returnData);
        }
        catch (error) {
            console.log(error);
        }
    }
    // List Salary Slips
    listSalarySlips(year, monthValue) {
        try {
            this.api.getPayrolData(year, monthValue).subscribe((data) => {
                if (data.status === 'success') {
                    if (data.data.length > 0) {
                        this.dataSalary = data.data;
                        this.salarySlipStatus = '';
                    }
                    else {
                        this.dataSalary = [];
                        this.salarySlipStatus = 'Salary Slip Not Found';
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    // Filter Employee According to payment Mode
    filterSalarySlip(modeType, year, month) {
        try {
            this.api.filterSalarySlip(modeType, year, month).subscribe((data) => {
                if (data.status === 'success') {
                    if (data.data.length > 0) {
                        this.dataSalary = data.data;
                        this.salarySlipStatus = '';
                    }
                    else {
                        this.dataSalary = [];
                        this.salarySlipStatus = 'No Salary Slip Found';
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    // List Employee Salary Details
    listSalarySlipDetails(monthValue, year, type, employeeFilter) {
        try {
            if (employeeFilter) {
                this.api.listSalarySlipDetails(monthValue, year).subscribe((data) => {
                    if (data.status === 'success') {
                        this.dataSalary = [];
                        for (var i = 0; i < data.data.length; i++) {
                            if (data.data[i].isGenerated) {
                                if (data.data[i].employeeId == this.filterEmployeeId) {
                                    this.dataSalary.push(data.data[i]);
                                    document.getElementById('salarySlipType').value = 'former';
                                    this.currentSalarySlipFilterStatus = 'former';
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                            else if (!data.data[i].isGenerated) {
                                if (data.data[i]._id == this.filterEmployeeId) {
                                    this.dataSalary.push(data.data[i]);
                                    document.getElementById('salarySlipType').value = 'later';
                                    this.currentSalarySlipFilterStatus = 'later';
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                        this.showSalaryDetailsCards = {};
                        this.showCheckbox = {};
                        for (var i = 0; i < this.dataSalary.length; i++) {
                            this.showSalaryDetailsCards[this.dataSalary[i]._id] = true;
                            if (!this.dataSalary[i].isGenerated) {
                                this.showCheckbox[this.dataSalary[i]._id] = false;
                            }
                        }
                        if (this.dataSalary.length === 0) {
                            this.salarySlipStatus = 'No Salary Slip Found';
                            this.selectAllCheckBox = false;
                        }
                        else {
                            this.salarySlipStatus = '';
                        }
                    }
                });
            }
            else {
                this.api.listSalarySlipDetails(monthValue, year).subscribe((data) => {
                    if (data.status === 'success') {
                        this.dataSalary = [];
                        if (type === 'later') {
                            for (var i = 0; i < data.data.length; i++) {
                                if (!data.data[i].isGenerated) {
                                    this.dataSalary.push(data.data[i]);
                                }
                            }
                        }
                        else if (type === 'former') {
                            for (var i = 0; i < data.data.length; i++) {
                                if (data.data[i].isGenerated) {
                                    this.dataSalary.push(data.data[i]);
                                }
                            }
                        }
                        this.showSalaryDetailsCards = {};
                        this.showCheckbox = {};
                        for (var i = 0; i < this.dataSalary.length; i++) {
                            this.showSalaryDetailsCards[this.dataSalary[i]._id] = true;
                            if (!this.dataSalary[i].isGenerated) {
                                this.showCheckbox[this.dataSalary[i]._id] = false;
                            }
                        }
                        if (this.dataSalary.length === 0) {
                            this.salarySlipStatus = 'No Salary Slip Found';
                            this.selectAllCheckBox = false;
                        }
                        else {
                            this.salarySlipStatus = '';
                        }
                    }
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // Header Checkbox Functionality
    headerCheckBox() {
        try {
            this.selectAllCheckBox = !this.selectAllCheckBox;
            if (this.selectAllCheckBox) {
                this.generateSalaryForEmployees = [];
                for (var key in this.showCheckbox) {
                    this.showCheckbox[key] = true;
                    this.generateSalaryForEmployees.push(key);
                }
            }
            else {
                for (var key in this.showCheckbox) {
                    this.showCheckbox[key] = false;
                    this.generateSalaryForEmployees = [];
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // List CheckBoxes Functionalities
    listCheckBoxes(id) {
        try {
            this.showCheckbox[id] = !this.showCheckbox[id];
            if (this.showCheckbox[id]) {
                this.generateSalaryForEmployees.push(id);
            }
            else {
                for (var i = 0; i < this.generateSalaryForEmployees.length; i++) {
                    if (id == this.generateSalaryForEmployees[i]) {
                        this.generateSalaryForEmployees.splice(i, 1);
                        break;
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // Show Salary Details
    showSalarySlipDetails(employeeId) {
        try {
            this.showSalaryDetailsCards[employeeId] = !this.showSalaryDetailsCards[employeeId];
            this.salarySlipDetails[employeeId] = {};
            this.salarySlipDetails[employeeId].employeeSalaryDetails = [];
            this.salarySlipDetails[employeeId].deductionDetails = [];
            this.salarySlipDetails[employeeId].earningDetails = [];
            for (var i = 0; i < this.dataSalary.length; i++) {
                if (this.dataSalary[i]._id == employeeId) {
                    this.salarySlipDetails[employeeId].employeeSalaryDetails.push(this.dataSalary[i].employeeDetails);
                    this.salarySlipDetails[employeeId].deductionDetails = this.dataSalary[i].deductions;
                    this.salarySlipDetails[employeeId].earningDetails = this.dataSalary[i].earnings;
                    break;
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    // Filter the later generate salary slip
    filterCurrentSalarySlip(modeType, year, month) {
        try {
            this.showSalaryDetailsCards = {};
            this.showCheckbox = {};
            this.api.filterCurrentSalarySlip(modeType, year, month).subscribe((data) => {
                if (data.status === 'success') {
                    if (data.data.length > 0) {
                        this.dataSalary = data.data;
                        this.salarySlipStatus = '';
                        for (var i = 0; i < data.data.length; i++) {
                            this.showSalaryDetailsCards[data.data[i]._id] = true;
                            if (!data.data[i].isGenerated) {
                                this.showCheckbox[data.data[i]._id] = false;
                            }
                        }
                    }
                    else {
                        this.dataSalary = [];
                        this.salarySlipStatus = 'No Salary Slip Found';
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    // Reset Functionality
    resetFunctionality() {
        try {
            this.earnedLeaveYearMsg = '';
            this.currentSalarySlipFilterStatus = 'later';
            this.filterOnEmployee = false;
            let dataSetting = this.currentMonthSetting();
            let currentDate = new Date();
            // let monthValue = (currentDate.getMonth()+1).toString().padStart(2,'0');
            let monthValue = (currentDate.getMonth() + 1);
            for (var i = 1; i <= 12; i++) {
                if (monthValue >= i) {
                    this.currentMonthValue[i.toString().padStart(2, '0')] = true;
                }
                else {
                    this.currentMonthValue[i.toString().padStart(2, '0')] = false;
                }
            }
            document.getElementById(`${dataSetting.monthValue}`).removeAttribute('selected');
            document.getElementById('salarySlipType').value = 'later';
            document.getElementById('salaryEmployee').value = '';
            document.getElementById('salaryModeType').value = '';
            document.getElementById('salarySlipMonth').value = monthValue.toString().padStart(2, '0');
            this.listSalarySlipDetails(dataSetting.monthValue, dataSetting.year, 'later', false);
        }
        catch (error) {
            console.log(error);
        }
    }
    employeeFilter() {
        this.filterOnEmployee = true;
    }
    // ADD CHEQUE NO.
    addChequeNo(salaryId) {
        try {
            this.api.getChequeApi(salaryId).subscribe(response => {
                if (response.status === 'success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Cheque Details",
                        text: "Enter Cheque No.:",
                        input: 'text',
                        inputValue: response.data.chequeNum,
                        showCancelButton: true,
                        inputValidator: (value) => {
                            return !value && 'Cheque No. Mandatory';
                        }
                    }).then((result) => {
                        if (result.value) {
                            this.api.addChequeApi(salaryId, { checkNum: result.value }).subscribe(response => {
                                (response.status === 'success') ? this.notifier.notify(response.status, response.message) :
                                    this.notifier.notify(response.status, response.message);
                            }, error => {
                                console.log(error);
                            });
                        }
                    });
                }
                if (response.status === 'error') {
                    this.notifier.notify(response.status, response.message);
                }
            }, error => {
                console.log(error);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
ListPayrollComponent.ɵfac = function ListPayrollComponent_Factory(t) { return new (t || ListPayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_4__["PayrollApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_employee_wizard_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"])); };
ListPayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListPayrollComponent, selectors: [["app-list-payroll"]], decls: 109, vars: 22, consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "timer"], [1, "card", "card-user"], [1, "card-header", 3, "keyup.enter"], [1, "card-title", "text-center"], [1, "card-body"], [1, "form-row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "form-group"], [1, "col-sm-6", "control-label"], ["id", "salaryEmployee", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["value", "", "disabled", "", "selected", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-offset-2"], ["type", "text", "id", "payrollYear", "placeholder", "Enter Year", 1, "form-control", 3, "keyup"], [2, "color", "red"], ["id", "salarySlipMonth", 1, "dropdown", "dropdown-toggle", "form-control"], ["id", "01", "value", "01", 1, "dropdown-item", 3, "disabled"], ["id", "02", "value", "02", 1, "dropdown-item", 3, "disabled"], ["id", "03", "value", "03", 1, "dropdown-item", 3, "disabled"], ["id", "04", "value", "04", 1, "dropdown-item", 3, "disabled"], ["id", "05", "value", "05", 1, "dropdown-item", 3, "disabled"], ["id", "06", "value", "06", 1, "dropdown-item", 3, "disabled"], ["id", "07", "value", "07", 1, "dropdown-item", 3, "disabled"], ["id", "08", "value", "08", 1, "dropdown-item", 3, "disabled"], ["id", "09", "value", "09", 1, "dropdown-item", 3, "disabled"], ["id", "10", "value", "10", 1, "dropdown-item", 3, "disabled"], ["id", "11", "value", "11", 1, "dropdown-item", 3, "disabled"], ["id", "12", "value", "12", 1, "dropdown-item", 3, "disabled"], ["id", "salarySlipType", 1, "dropdown", "dropdown-toggle", "form-control", 3, "disabled"], ["value", "former", 1, "dropdown-item"], ["value", "later", 1, "dropdown-item"], ["id", "salaryModeType", 1, "dropdown", "dropdown-toggle", "form-control", 3, "disabled"], [1, "form-group", "right-buttongroup"], [1, "btn", "btn-primary", "btn-margin", 3, "disabled", "click"], [1, "fa", "fa-filter"], [1, "btn", "btn-danger", "btn-margin", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "btn-success", "btn-round", 2, "float", "right", 3, "disabled", "click"], [1, "fas", "fa-download"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "value"], ["type", "checkbox", 3, "checked", "change"], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf"], ["title", "info", "type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-info"], ["class", "btn btn-default btn-fab btn-icon btn-round", "type", "button", 3, "click", 4, "ngIf"], ["colspan", "6"], [1, "card", 2, "background-color", "whitesmoke", 3, "hidden"], [1, "fa", "fa-check", 2, "color", "green", "font-size", "25px"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-default", "btn-fab", "btn-icon", "btn-round", 3, "click"], [1, "fas", "fa-file-download"], ["width", "100%", "class", "payrollDetails1", 4, "ngFor", "ngForOf"], ["width", "100%", 1, "payrollDetails1"], ["colspan", "6", 1, "text-center"], [1, "display-flex"], ["class", "margin-top3", 4, "ngIf"], ["colspan", "3"], ["width", "100%", "class", "innertable", 4, "ngFor", "ngForOf"], [1, "margin-top3"], ["title", "Update", 1, "editbutton"], ["href", "javascript:void(0);", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["width", "100%", 1, "innertable"], ["colspan", "2"], [2, "text-align", "center"]], template: function ListPayrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ListPayrollComponent_Template_div_keyup_enter_3_listener() { return ctx.filterFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Payroll Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select Employee:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListPayrollComponent_Template_select_change_13_listener() { return ctx.employeeFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "--Select Employee--");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ListPayrollComponent_option_16_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Enter Year:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ListPayrollComponent_Template_input_keyup_23_listener() { return ctx.yearValidation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Enter Month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Jan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Feb ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Mar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Apr ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "May ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Jun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Jul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Aug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Sep ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Oct ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Nov ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Dec ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Salary Slip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Formerly Generated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Generate Later");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Pay Mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "--Select Payment Mode--");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, ListPayrollComponent_option_79_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_Template_button_click_82_listener() { return ctx.filterFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u00A0 Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_Template_button_click_85_listener() { return ctx.resetFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u00A0 Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_Template_button_click_88_listener() { return ctx.allDownload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u00A0 Download All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "thead", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Generate Payroll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, ListPayrollComponent_div_96_Template, 3, 1, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Gross Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Salary Deduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Net Salary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, ListPayrollComponent_tbody_107_Template, 23, 10, "tbody", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, ListPayrollComponent_div_108_Template, 3, 1, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companyEmployeelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.earnedLeaveYearMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["01"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["02"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["03"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["04"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["05"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["06"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["07"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["08"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["09"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["10"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["11"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.currentMonthValue["12"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.filterOnEmployee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.filterOnEmployee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.paymentModeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.earnedLeaveYearMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.earnedLeaveYearMsg || ctx.dataSalary.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataSalary.length > 0 && ctx.currentSalarySlipFilterStatus === "later");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataSalary);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.salarySlipStatus.length != 0);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]], styles: [".payrollDetails1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(142, 133, 133, 0.5);\n  border: 0;\n  border-radius: 5px;\n}\n\n.payrollDetails1[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .payrollDetails1[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .payrollDetails1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-right: 1px solid #ccc;\n}\n\n.innertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .innertable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .innertable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-left: 1px solid #ccc;\n}\n\n.innertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #ccc;\n}\n\n.editbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.editbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #51cbce;\n  border: 0;\n  background: none;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-margin[_ngcontent-%COMP%] {\n  margin: 0px 2px !important;\n}\n\n@media screen and (max-width: 1200px) {\n  .right-buttongroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .right-buttongroup[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n.form-group.right-buttongroup[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-top: 26px;\n}\n\n.display-flex[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\ndiv[_ngcontent-%COMP%], .margin-top3[_ngcontent-%COMP%] {\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC9saXN0LXBheXJvbGwvbGlzdC1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSw2QkFBQTtBQUlKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksa0JBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxZQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNBLG9CQUFBO0FBRkE7O0FBS0E7RUFDSSxnQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5cm9sbC9saXN0LXBheXJvbGwvbGlzdC1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheXJvbGxEZXRhaWxzMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTQyLCAxMzMsIDEzMywgMC41KTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBheXJvbGxEZXRhaWxzMSB0ciwucGF5cm9sbERldGFpbHMxIHRkLC5wYXlyb2xsRGV0YWlsczEgdGh7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbn1cbi5pbm5lcnRhYmxlIHRyLC5pbm5lcnRhYmxlIHRkLC5pbm5lcnRhYmxlIHRoe1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbn1cbi5pbm5lcnRhYmxlIHRyOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4vLyAucGF5cm9sbERldGFpbHMxLCB0aCwgdHIsIHRke1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4vLyB9XG4uZWRpdGJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmVkaXRidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBjb2xvcjogIzUxY2JjZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4uYnRuLW1hcmdpbntcbiAgICBtYXJnaW46IDBweCAycHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjAwcHgpe1xuICAgIC5yaWdodC1idXR0b25ncm91cCBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAucmlnaHQtYnV0dG9uZ3JvdXAge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG5cbi5mb3JtLWdyb3VwLnJpZ2h0LWJ1dHRvbmdyb3VwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbi5kaXNwbGF5LWZsZXgsIGJ7XG5kaXNwbGF5OiBpbmxpbmUtZmxleFxufVxuXG5kaXYsIC5tYXJnaW4tdG9wM3tcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListPayrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list-payroll',
                templateUrl: './list-payroll.component.html',
                styleUrls: ['./list-payroll.component.scss']
            }]
    }], function () { return [{ type: _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_4__["PayrollApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _employee_wizard_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"] }]; }, null); })();


/***/ }),

/***/ "sB2f":
/*!*************************************************************************!*\
  !*** ./src/app/pages/payroll/update-payroll/update-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: UpdatePayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePayrollComponent", function() { return UpdatePayrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payroll-service/payroll-api.service */ "Cej+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UpdatePayrollComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errMsg);
} }
function UpdatePayrollComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.successMsg);
} }
function UpdatePayrollComponent_div_59_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "sup", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UpdatePayrollComponent_div_59_div_8_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const earnings_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.checkValidation(earnings_r6.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const earnings_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](earnings_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", earnings_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", earnings_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.salarySlipPattern[earnings_r6.label]);
} }
function UpdatePayrollComponent_div_59_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "sup", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UpdatePayrollComponent_div_59_div_16_Template_input_keyup_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const deductions_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.checkValidation(deductions_r9.label); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deductions_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deductions_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", deductions_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", deductions_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.salarySlipPattern[deductions_r9.label]);
} }
function UpdatePayrollComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Earnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UpdatePayrollComponent_div_59_div_8_Template, 13, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Total Deductions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdatePayrollComponent_div_59_div_16_Template, 13, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.earningsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.earningsForm.get("earnings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.salarySlipEarnings);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.deductionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.deductionForm.get("deductions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.salarySlipDeductions);
} }
class UpdatePayrollComponent {
    constructor(api, fb, route, ngZone, router) {
        this.api = api;
        this.fb = fb;
        this.route = route;
        this.ngZone = ngZone;
        this.router = router;
        this.salarySlipDeductions = [];
        this.salarySlipEarnings = [];
        this.buttonValue = 'Show More';
        this.showButtonValue = false;
        this.salarySlipPattern = {};
        this.didUpdate = false;
        this.errorMsg = false;
        this.successMessage = false;
    }
    ngOnInit() {
        try {
            this.employeeId = this.route.snapshot.paramMap.get("employeeId");
            this.requestMonth = this.route.snapshot.paramMap.get("month");
            this.requestYear = this.route.snapshot.paramMap.get("year");
            this.salarySlipForm();
            this.api.listSalarySlipDetails(this.requestMonth, this.requestYear).subscribe((data) => {
                if (data.status === 'success') {
                    for (var i = 0; i < data.data.length; i++) {
                        if (data.data[i]._id == this.employeeId) {
                            this.existingSalaryDetails = data.data[i];
                            this.salarySlipDeductions = data.data[i].deductions;
                            this.salarySlipEarnings = data.data[i].earnings;
                            this.isGenerated = data.data[i].isGenerated;
                            break;
                        }
                    }
                    // Basic Details
                    this.updateSalarySlipForm = this.fb.group({
                        employeeDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                            employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.existingSalaryDetails.employeeDetails.employeeName),
                            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.existingSalaryDetails.employeeDetails.designation),
                            present: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.existingSalaryDetails.employeeDetails.present),
                            earnedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.existingSalaryDetails.employeeDetails.earnedLeaves),
                            unsanctionedLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.existingSalaryDetails.employeeDetails.unsanctionedLeave),
                            payDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.existingSalaryDetails.employeeDetails.payDays),
                        })
                    });
                    // Create Deduction Form Dynamically
                    let deduction = {};
                    this.salarySlipDeductions.forEach(totalDeductions => {
                        deduction[totalDeductions.label] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](totalDeductions.amt);
                        this.salarySlipPattern[totalDeductions.label] = '';
                    });
                    this.deductionForm = this.fb.group({
                        deductions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](deduction)
                    });
                    // Create Earnings Form Dynamically
                    let earnings = {};
                    this.salarySlipEarnings.forEach(totalEarnings => {
                        earnings[totalEarnings.label] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](totalEarnings.amt);
                        this.salarySlipPattern[totalEarnings.label] = '';
                    });
                    this.earningsForm = this.fb.group({
                        earnings: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](earnings)
                    });
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    salarySlipForm() {
        try {
            this.updateSalarySlipForm = this.fb.group({
                employeeDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    present: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    earnedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    unsanctionedLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                    payDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                })
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    updateSalarySlip(element) {
        try {
            this.updatedSalaryForm = this.fb.group({
                employeeDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.employeeName').value),
                    designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.designation').value),
                    present: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.present').value),
                    earnedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.earnedLeaves').value),
                    unsanctionedLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.unsanctionedLeave').value),
                    payDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.payDays').value),
                }),
                deductions: this.deductionForm,
                earnings: this.earningsForm,
                employeeIdArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.employeeId),
                ]),
                isGenerated: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.isGenerated)
            });
            let currentDate = new Date();
            // If salary Slip is not generated for the current month
            if ((currentDate.getMonth() + 1).toString().padStart(2, '0') === this.requestMonth && !this.isGenerated) {
                this.api.monthlyGenerateSlip(this.updatedSalaryForm.value, this.requestMonth, this.requestYear, 'Generate').subscribe((data) => {
                    if (data.status === 'success') {
                        this.successMessage = true;
                        this.errorMsg = false;
                        this.successMsg = data.message;
                        setTimeout(() => {
                            this.router.navigateByUrl("/pages/payroll/list-payroll");
                            this.handelErrors();
                        }, 2000);
                    }
                    else if (data.status === 'error') {
                        this.successMessage = false;
                        this.errorMsg = true;
                        this.errMsg = data.message;
                        setTimeout(() => {
                            this.handelErrors();
                        }, 5000);
                    }
                });
            }
            // If salary Slip is generated for the current month and user want to update the data
            if ((currentDate.getMonth() + 1).toString().padStart(2, '0') === this.requestMonth && this.isGenerated) {
                this.api.monthlyGenerateSlip(this.updatedSalaryForm.value, this.requestMonth, this.requestYear, 'Update').subscribe((data) => {
                    if (data.status === 'success') {
                        this.successMessage = true;
                        this.errorMsg = false;
                        this.successMsg = data.message;
                        setTimeout(() => {
                            this.router.navigateByUrl("/pages/payroll/list-payroll");
                            this.handelErrors();
                        }, 2000);
                    }
                    else if (data.status === 'error') {
                        this.successMessage = false;
                        this.errorMsg = true;
                        this.errMsg = data.message;
                        setTimeout(() => {
                            this.handelErrors();
                        }, 5000);
                    }
                });
            }
            element.scrollIntoView();
        }
        catch (err) {
            console.log(err);
        }
    }
    showFunctinality() {
        try {
            this.showButtonValue = !this.showButtonValue;
            if (this.showButtonValue) {
                this.buttonValue = 'Show Less';
            }
            else {
                this.buttonValue = 'Show More';
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    checkValidation(label) {
        try {
            if (document.getElementById(label).value.match(/^\$?[0-9]?((\.[0-9]+)|([0-9]+(\.[0-9]+)?))$/) === null) {
                this.salarySlipPattern[label] = `${label} value is not acceptable`;
            }
            else {
                this.salarySlipPattern[label] = '';
            }
            for (var key in this.salarySlipPattern) {
                if (this.salarySlipPattern[key].length > 0) {
                    this.didUpdate = true;
                    break;
                }
                else {
                    this.didUpdate = false;
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    handelErrors() {
        try {
            this.successMessage = false;
            this.errorMsg = false;
            this.successMsg = '';
            this.errMsg = '';
        }
        catch (error) {
            console.log(error);
        }
    }
}
UpdatePayrollComponent.ɵfac = function UpdatePayrollComponent_Factory(t) { return new (t || UpdatePayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_2__["PayrollApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UpdatePayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePayrollComponent, selectors: [["app-update-payroll"]], decls: 66, vars: 7, consts: [[1, "card", "card-u"], [1, "card-header"], [1, "card-title", "text-center"], ["target", ""], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", 1, "form-horizontal", 3, "formGroup"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "formControlName", "employeeName", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "designation", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "present", 1, "form-control"], [1, "control-label", "col-sm-6"], ["type", "text", "formControlName", "payDays", 1, "form-control"], ["type", "text", "formControlName", "earnedLeaves", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "unsanctionedLeave", "readonly", "", 1, "form-control"], [1, "btn", "btn-success", 3, "click"], ["class", "row", 4, "ngIf"], [1, ""], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "submit", "routerLink", "/pages/payroll/list-payroll", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "edit-form-heading"], ["class", "col-lg-6 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "redtext"], ["type", "text", 1, "form-control", 3, "id", "formControlName", "keyup"], [1, "errortext", "bottomspace-none"]], template: function UpdatePayrollComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update Salary Slip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UpdatePayrollComponent_p_7_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UpdatePayrollComponent_p_9_Template, 3, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Employee Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Designation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Present Days:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Pay Days:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Earned Leaves:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Unsactioned Leaves:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePayrollComponent_Template_button_click_57_listener() { return ctx.showFunctinality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, UpdatePayrollComponent_div_59_Template, 17, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePayrollComponent_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.updateSalarySlip(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateSalarySlipForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateSalarySlipForm.get("employeeDetails"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtonValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.didUpdate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".edit-form-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0;\n  font-weight: 500;\n}\n\n.errortext[_ngcontent-%COMP%], .redtext[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n.bottomspace-none[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC91cGRhdGUtcGF5cm9sbC91cGRhdGUtcGF5cm9sbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXlyb2xsL3VwZGF0ZS1wYXlyb2xsL3VwZGF0ZS1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtZm9ybS1oZWFkaW5nIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5lcnJvcnRleHQsLnJlZHRleHR7XG4gICAgY29sb3I6ICNmZjAwMDA7XG59XG4uYm90dG9tc3BhY2Utbm9uZXtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePayrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-payroll',
                templateUrl: 'update-payroll.component.html',
                styleUrls: ['update-payroll.component.scss']
            }]
    }], function () { return [{ type: _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_2__["PayrollApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=payroll-payroll-module-es2015.js.map