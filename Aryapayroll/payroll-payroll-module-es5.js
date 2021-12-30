(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payroll-payroll-module"], {
    /***/
    "Cej+":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/payroll/payroll-service/payroll-api.service.ts ***!
      \**********************************************************************/

    /*! exports provided: PayrollApiService */

    /***/
    function Cej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayrollApiService", function () {
        return PayrollApiService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");

      var PayrollApiService = /*#__PURE__*/function () {
        function PayrollApiService(http) {
          _classCallCheck(this, PayrollApiService);

          this.http = http;
          /** Here we provide daynamic environment value from environment */

          this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiBaseUrl;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded'); //Set a Header Value.
        }
        /**Create method for manage errors when request and return response from the server*/


        _createClass(PayrollApiService, [{
          key: "errorMgmt",
          value: function errorMgmt(error) {
            try {
              var errorMessage = '';
              /** Handle client side error */

              if (error.error instanceof ErrorEvent) {
                errorMessage = error.error.message;
              }
              /** Handle server side error */
              else {
                  errorMessage = "Error code:".concat(error.status, "\nMessage:").concat(errorMessage);
                }

              console.log(errorMessage);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            } catch (err) {
              console.log(err.message);
            }
          }
        }, {
          key: "getPayrolData",
          value: function getPayrolData(year, month) {
            try {
              var data = {
                year: year,
                month: month
              };
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/employee/salary-slip-list/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "getSalarySlip",
          value: function getSalarySlip(salarySlipId) {
            try {
              var apiURL = "".concat(this.endpoint, "/employee/salary-slip-details/").concat(salarySlipId);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Generate Salary Slip

        }, {
          key: "generateSalarySlip",
          value: function generateSalarySlip(employeeIdArray, year, month) {
            try {
              var data = {
                year: year,
                month: month,
                employeeIdArray: employeeIdArray.employeeIdArray
              };
              var companyId = sessionStorage.getItem("companyId");
              var apiURL = "".concat(this.endpoint, "/employee/generate-salary-slip/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // Filter Employee Data

        }, {
          key: "filterSalarySlip",
          value: function filterSalarySlip(modeType, year, month) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/employee/filter-salary-slip/").concat(companyId, "/").concat(modeType, "/").concat(year, "/").concat(month);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // List Employee salary slip upto date

        }, {
          key: "listSalarySlipDetails",
          value: function listSalarySlipDetails(month, year) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/employee/current-month-salary-slip/").concat(companyId, "/").concat(year, "/").concat(month);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Generate and Update the employee salary slip

        }, {
          key: "monthlyGenerateSlip",
          value: function monthlyGenerateSlip(data, month, year, type) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/employee/generate-current-month-slip/").concat(companyId, "/").concat(year, "/").concat(month, "/").concat(type);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } // Filter Employee Data

        }, {
          key: "filterCurrentSalarySlip",
          value: function filterCurrentSalarySlip(modeType, year, month) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/employee/filter-current-month-salary-slip/").concat(companyId, "/").concat(modeType, "/").concat(year, "/").concat(month);
              return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (err) {
              console.log(err);
            }
          } // GENERATE BANK STATEMENT(SALARY UPLOAD) API

        }, {
          key: "bankStatement",
          value: function bankStatement(data) {
            try {
              var companyId = sessionStorage.getItem('companyId');
              var apiURL = "".concat(this.endpoint, "/company/bank-statement/").concat(companyId);
              return this.http.post(apiURL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } //  ADD CHEQUE DETAILS API

        }, {
          key: "addChequeApi",
          value: function addChequeApi(salaryId, data) {
            try {
              var apiUrl = "".concat(this.endpoint, "/user/add-cheque-details/").concat(salaryId);
              return this.http.post(apiUrl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } //  GET CHEQUE DETAILS API

        }, {
          key: "getChequeApi",
          value: function getChequeApi(salaryId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/user/get-cheque-details/").concat(salaryId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          } //  GET CHEQUE DETAILS API

        }, {
          key: "getCompanyDetails",
          value: function getCompanyDetails(companyId) {
            try {
              var apiUrl = "".concat(this.endpoint, "/company/details/").concat(companyId);
              return this.http.get(apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorMgmt));
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return PayrollApiService;
      }();

      PayrollApiService.ɵfac = function PayrollApiService_Factory(t) {
        return new (t || PayrollApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      PayrollApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PayrollApiService,
        factory: PayrollApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollApiService, [{
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
    "JrtD":
    /*!*************************************************!*\
      !*** ./src/app/pages/payroll/payroll.module.ts ***!
      \*************************************************/

    /*! exports provided: PayrollModule */

    /***/
    function JrtD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayrollModule", function () {
        return PayrollModule;
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


      var _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./payroll-routing.module */
      "dElJ");
      /* harmony import */


      var _payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payroll.component */
      "cKqs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-payroll/list-report.component */
      "jmsI");
      /* harmony import */


      var _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./add-payroll/add-payroll.component */
      "Yylz");
      /* harmony import */


      var _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./update-payroll/update-report.component */
      "sB2f");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angular-notifier */
      "VO+5");
      /* harmony import */


      var _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./payroll-sheet/payroll-sheet.component */
      "LzcQ");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");

      var customNotifierOptions = {
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

      var PayrollModule = function PayrollModule() {
        _classCallCheck(this, PayrollModule);
      };

      PayrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PayrollModule
      });
      PayrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PayrollModule_Factory(t) {
          return new (t || PayrollModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"].withConfig(customNotifierOptions), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PayrollModule, {
          declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"], _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_6__["ListPayrollComponent"], _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_7__["AddPayrollComponent"], _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePayrollComponent"], _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_11__["PayrollSheetComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"], _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_6__["ListPayrollComponent"], _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_7__["AddPayrollComponent"], _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePayrollComponent"], _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_11__["PayrollSheetComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _payroll_routing_module__WEBPACK_IMPORTED_MODULE_2__["PayrollRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_10__["NotifierModule"].withConfig(customNotifierOptions), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LzcQ":
    /*!************************************************************************!*\
      !*** ./src/app/pages/payroll/payroll-sheet/payroll-sheet.component.ts ***!
      \************************************************************************/

    /*! exports provided: PayrollSheetComponent */

    /***/
    function LzcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayrollSheetComponent", function () {
        return PayrollSheetComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var exceljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! exceljs */
      "6K47");
      /* harmony import */


      var exceljs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../payroll-service/payroll-api.service */
      "Cej+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-notifier */
      "VO+5");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");

      var PayrollSheetComponent = /*#__PURE__*/function () {
        function PayrollSheetComponent(apiService, titleCase) {
          _classCallCheck(this, PayrollSheetComponent);

          this.apiService = apiService;
          this.titleCase = titleCase;
          this.minMode = 'month'; // change for month:year

          this.bsValue = new Date();
          this.requestDateDetails = {
            year: "".concat(new Date().getFullYear()),
            month: "".concat(new Date().getMonth() + 1).padStart(2, '0')
          };
          this.bsConfig = Object.assign({}, {
            minMode: this.minMode,
            dateInputFormat: 'MM-YYYY'
          });
        }

        _createClass(PayrollSheetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCompanyDetails();
          }
        }, {
          key: "rangeDatesUpdated",
          value: function rangeDatesUpdated(dateValues) {
            try {
              this.requestDateDetails = {
                year: "".concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(dateValues).get('years')),
                month: "".concat(moment__WEBPACK_IMPORTED_MODULE_2___default()(dateValues).get('months') + 1).padStart(2, '0')
              };
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "getCompanyDetails",
          value: function getCompanyDetails() {
            var _this = this;

            this.apiService.getCompanyDetails(localStorage.getItem('companyId')).subscribe(function (companyDetails) {
              if (companyDetails.status === 'success') {
                _this.companyDetails = companyDetails.data;
              }
            });
          } // GENERATE SALARY UPLOAD(BANK STATEMENT)

        }, {
          key: "statementSheet",
          value: function statementSheet(sheetType) {
            var _this2 = this;

            try {
              this.apiService.bankStatement({
                year: this.requestDateDetails.year,
                month: this.requestDateDetails.month,
                statementType: sheetType
              }).subscribe(function (response) {
                if (response.status === 'success') {
                  response.data.bankStatement.length === 0 ? sheetType === 'Bank' ? sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Bank Statement is not available or may be you didn't add Empolyees Bank Details") : sheetType === 'Cash' ? sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Cash Statement is not available") : sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Cheque Statement is not available") : sheetType === 'Bank' ? _this2.generateBankSheet(response.data) : sheetType === 'Cash' ? _this2.generateCashStatement(response.data) : _this2.generateChequeStatement(response.data);
                }

                if (response.status === 'error') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(response.message);
                }
              });
            } catch (error) {
              console.log(error);
            }
          } // FOR GENRATE EXCEL SHEET FOR BANK STATEMENT

        }, {
          key: "generateBankSheet",
          value: function generateBankSheet(bankStatementData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var workbook, worksheet, subHeading, subject, tableSubHeading, header1, header2, footer, bankData, i, data, key, subTitleRow, sheetHeading, sheetSubHeading1, sheetSubHeading2, headerRow1, headerRow2;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // Create workbook and worksheet
                      workbook = new exceljs__WEBPACK_IMPORTED_MODULE_3__["Workbook"]();
                      worksheet = workbook.addWorksheet('Bank Statement');
                      subHeading = ["We request you to transfer our Salary from Indusind salary account for the amount of  \u20B9 ".concat(bankStatementData.totalAmoutPaid, " (").concat(this.titleCase.transform(bankStatementData.totalAmoutPaidWords), " Only). Please refer  transfer from Aryavrat Infotech Pvt. Ltd. to IndusInd Salary Account of IndusInd Bank of amount \u20B9 ").concat(bankStatementData.totalAmoutPaid, "/-through cheque on 10th ").concat(bankStatementData.month, ".")];
                      subject = 'IndusInd bank, Jaipur';
                      tableSubHeading = ["Please find the list below for the salary transfer of ".concat(bankStatementData.month, " ").concat(bankStatementData.year)];
                      header1 = bankStatementData.headerDetails;
                      header2 = ['', '', '', '', ''];
                      footer = [['', 'Total', '', bankStatementData.totalAmoutPaid, '']];
                      bankData = [];

                      for (i = 0; i < bankStatementData.bankStatement.length; i++) {
                        data = [];
                        data.push(i + 1);

                        for (key in bankStatementData.bankStatement[i]) {
                          data.push(bankStatementData.bankStatement[i][key]);
                        }

                        bankData.push(data);
                      } // Add Row and formatting


                      subTitleRow = worksheet.addRow(['TO', '', '', '', 'Date : ' + bankStatementData.currentDate]);
                      worksheet.getCell('B2').value = subject; // Add sheet heading

                      sheetHeading = worksheet.addRow([bankStatementData.subject]);
                      worksheet.mergeCells('A3:E3');
                      worksheet.addRow([]);
                      sheetHeading.font = {
                        name: 'Arial',
                        family: 4,
                        size: 10,
                        underline: 'double',
                        bold: true
                      };
                      sheetHeading.alignment = {
                        vertical: 'middle',
                        horizontal: 'center',
                        wrapText: true
                      }; // Add sheet sub heading

                      sheetSubHeading1 = worksheet.addRow(subHeading);
                      worksheet.mergeCells('A5:E7');
                      sheetSubHeading1.getCell(5).border = {
                        top: {
                          style: 'thin'
                        },
                        left: {
                          style: 'thin'
                        },
                        bottom: {
                          style: 'thin'
                        },
                        right: {
                          style: 'thin'
                        }
                      };
                      sheetSubHeading1.getCell(5).alignment = {
                        vertical: 'top',
                        horizontal: 'left',
                        wrapText: true
                      }; // Add table sub heading

                      sheetSubHeading2 = worksheet.addRow(tableSubHeading);
                      worksheet.mergeCells('A8:E8');
                      sheetSubHeading2.eachCell(function (cell, number) {
                        cell.border = {
                          top: {
                            style: 'thin'
                          },
                          left: {
                            style: 'thin'
                          },
                          bottom: {
                            style: 'thin'
                          },
                          right: {
                            style: 'thin'
                          }
                        };
                        cell.alignment = {
                          vertical: 'middle',
                          horizontal: 'center',
                          wrapText: true
                        };
                      });
                      headerRow1 = worksheet.addRow(header2);
                      headerRow1.eachCell(function (cell, number) {
                        cell.border = {
                          top: {
                            style: 'thin'
                          },
                          left: {
                            style: 'thin'
                          },
                          bottom: {
                            style: 'thin'
                          },
                          right: {
                            style: 'thin'
                          }
                        };
                      });
                      headerRow2 = worksheet.addRow(header1);
                      headerRow2.eachCell(function (cell, number) {
                        cell.border = {
                          top: {
                            style: 'thin'
                          },
                          left: {
                            style: 'thin'
                          },
                          bottom: {
                            style: 'thin'
                          },
                          right: {
                            style: 'thin'
                          }
                        };
                        cell.font = {
                          name: 'Arial',
                          family: 4,
                          size: 10,
                          bold: true
                        };
                      });
                      worksheet.getColumn(2).width = 30;
                      worksheet.getColumn(3).width = 30;
                      worksheet.getColumn(5).width = 30;
                      bankData.forEach(function (d) {
                        var row = worksheet.addRow(d);
                        row.eachCell(function (cell, number) {
                          cell.border = {
                            top: {
                              style: 'thin'
                            },
                            left: {
                              style: 'thin'
                            },
                            bottom: {
                              style: 'thin'
                            },
                            right: {
                              style: 'thin'
                            }
                          };
                          cell.alignment = {
                            vertical: 'bottom',
                            horizontal: 'left',
                            wrapText: true
                          };
                        });
                      });
                      footer.forEach(function (f) {
                        var footerRow = worksheet.addRow(f);
                        footerRow.eachCell(function (cell, number) {
                          cell.border = {
                            top: {
                              style: 'thin'
                            },
                            left: {
                              style: 'thin'
                            },
                            bottom: {
                              style: 'thin'
                            },
                            right: {
                              style: 'thin'
                            }
                          };
                          cell.alignment = {
                            vertical: 'bottom',
                            horizontal: 'left',
                            wrapText: true
                          };
                          cell.font = {
                            name: 'Arial',
                            family: 4,
                            size: 10,
                            bold: true
                          };
                        });
                      }); // Generate Excel sheet

                      workbook.xlsx.writeBuffer().then(function (data) {
                        var blob = new Blob([data], {
                          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        });
                        file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'Bank Statement.xlsx');
                      });

                    case 34:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // FOR GENRATE EXCEL SHEET FOR CASH STATEMENT

        }, {
          key: "generateCashStatement",
          value: function generateCashStatement(salaryStatementData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var workbook, worksheet, header1, data, headerRow2, footerRow;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      try {
                        // Create workbook and worksheet
                        workbook = new exceljs__WEBPACK_IMPORTED_MODULE_3__["Workbook"]();
                        worksheet = workbook.addWorksheet('Cash Statement');
                        worksheet.addRow([]);
                        worksheet.mergeCells('A2:E2');
                        worksheet.getCell('A2').value = "".concat(salaryStatementData.companyName, ", ").concat(salaryStatementData.month, " ").concat(salaryStatementData.year);
                        worksheet.getCell('A2').font = {
                          name: 'Trebuchet MS',
                          family: 4,
                          size: 15,
                          bold: true
                        };
                        worksheet.getCell('A2').alignment = {
                          vertical: 'middle',
                          horizontal: 'center',
                          wrapText: true
                        };
                        worksheet.addRow([]);
                        worksheet.addRow([]);
                        header1 = salaryStatementData.headerDetails;
                        data = [];
                        salaryStatementData.bankStatement.forEach(function (salaryInfo, index) {
                          var salaryDetail = [index + 1, salaryInfo.name, salaryInfo.cashAmt, '', ''];
                          data.push(salaryDetail);
                        });
                        headerRow2 = worksheet.addRow(header1);
                        headerRow2.eachCell(function (cell) {
                          cell.alignment = {
                            vertical: 'middle',
                            horizontal: 'center',
                            wrapText: true
                          };
                          cell.font = {
                            name: 'Arial',
                            family: 4,
                            size: 10,
                            bold: true
                          };
                        });
                        data.forEach(function (d) {
                          var row = worksheet.addRow(d);
                          row.eachCell(function (cell) {
                            cell.alignment = {
                              vertical: 'middle',
                              horizontal: 'center',
                              wrapText: true
                            };
                          });
                        });
                        worksheet.getColumn(2).width = 30;
                        worksheet.getColumn(3).width = 30;
                        worksheet.getColumn(4).width = 30;
                        worksheet.getColumn(5).width = 30; // Footer Row

                        footerRow = worksheet.addRow(['Total', '', salaryStatementData.totalCashAmtPaid, '']);
                        footerRow.font = {
                          name: 'Arial',
                          family: 4,
                          size: 10,
                          bold: true
                        };
                        footerRow.alignment = {
                          vertical: 'middle',
                          horizontal: 'center',
                          wrapText: true
                        }; // Generate Excel sheet

                        workbook.xlsx.writeBuffer().then(function (data) {
                          var blob = new Blob([data], {
                            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                          });
                          file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'Cash-Statement.xlsx');
                        });
                      } catch (error) {
                        console.log(error);
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          } // FOR GENRATE EXCEL SHEET FOR CASH STATEMENT

        }, {
          key: "generateChequeStatement",
          value: function generateChequeStatement(salaryStatementData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var workbook, worksheet, header1, data, headerRow2, footerRow;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      try {
                        // Create workbook and worksheet
                        workbook = new exceljs__WEBPACK_IMPORTED_MODULE_3__["Workbook"]();
                        worksheet = workbook.addWorksheet('Cheque Statement');
                        worksheet.addRow([]);
                        worksheet.mergeCells('A2:E2');
                        worksheet.getCell('A2').value = "".concat(salaryStatementData.companyName, ", ").concat(salaryStatementData.month, " ").concat(salaryStatementData.year);
                        worksheet.getCell('A2').font = {
                          name: 'Trebuchet MS',
                          family: 4,
                          size: 15,
                          bold: true
                        };
                        worksheet.getCell('A2').alignment = {
                          vertical: 'middle',
                          horizontal: 'center',
                          wrapText: true
                        };
                        worksheet.addRow([]);
                        worksheet.addRow([]);
                        header1 = salaryStatementData.headerDetails;
                        data = [];
                        salaryStatementData.bankStatement.forEach(function (salaryInfo, index) {
                          var salaryDetail = [index + 1, salaryInfo.name, salaryInfo.chequeAmt, salaryInfo.chequeNum, '', ''];
                          data.push(salaryDetail);
                        });
                        headerRow2 = worksheet.addRow(header1);
                        headerRow2.eachCell(function (cell) {
                          cell.alignment = {
                            vertical: 'middle',
                            horizontal: 'center',
                            wrapText: true
                          };
                          cell.font = {
                            name: 'Arial',
                            family: 4,
                            size: 10,
                            bold: true
                          };
                        });
                        data.forEach(function (d) {
                          var row = worksheet.addRow(d);
                          row.eachCell(function (cell) {
                            cell.alignment = {
                              vertical: 'middle',
                              horizontal: 'center',
                              wrapText: true
                            };
                          });
                        });
                        worksheet.getColumn(2).width = 30;
                        worksheet.getColumn(3).width = 30;
                        worksheet.getColumn(4).width = 30;
                        worksheet.getColumn(5).width = 30; // Footer Row

                        footerRow = worksheet.addRow(['Total', '', salaryStatementData.totalChequeAmtPaid, '', '', '']);
                        footerRow.font = {
                          name: 'Arial',
                          family: 4,
                          size: 10,
                          bold: true
                        };
                        footerRow.alignment = {
                          vertical: 'middle',
                          horizontal: 'center',
                          wrapText: true
                        }; // Generate Excel sheet

                        workbook.xlsx.writeBuffer().then(function (data) {
                          var blob = new Blob([data], {
                            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                          });
                          file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](blob, 'Cheque-Statement.xlsx');
                        });
                      } catch (error) {
                        console.log(error);
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return PayrollSheetComponent;
      }();

      PayrollSheetComponent.ɵfac = function PayrollSheetComponent_Factory(t) {
        return new (t || PayrollSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_6__["PayrollApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]));
      };

      PayrollSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PayrollSheetComponent,
        selectors: [["app-payroll-sheet"]],
        decls: 98,
        vars: 15,
        consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "timer"], [1, "card", "card-user"], [1, "card-header"], [1, "card-title", "text-center"], [1, "card-body"], [1, "form-row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "form-group"], [1, "col-sm-offset-2"], ["type", "text", "placeholder", "Select Months", "bsDatepicker", "", 1, "form-control", 3, "bsConfig", "bsValue", "bsValueChange"], [1, "col-lg-9", "col-md-9", "col-sm-12"], [1, "form-group", "sheet-btn"], ["type", "button", 1, "btn", "btn-secondary", "sheet-btn-format", 3, "click"], [1, "fa", "fa-download"], [1, "table", 2, "margin", "auto"]],
        template: function PayrollSheetComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bsValueChange", function PayrollSheetComponent_Template_input_bsValueChange_11_listener($event) {
              return ctx.rangeDatesUpdated($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayrollSheetComponent_Template_button_click_14_listener() {
              return ctx.statementSheet("Bank");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Bank Statement");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayrollSheetComponent_Template_button_click_17_listener() {
              return ctx.statementSheet("Cash");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cash Statement");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PayrollSheetComponent_Template_button_click_20_listener() {
              return ctx.statementSheet("Cheque");
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierContainerComponent"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerDirective"]],
        styles: [".sheet-btn[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -11px;\n  font: caption;\n}\n\n.sheet-btn-format[_ngcontent-%COMP%] {\n  font-family: fantasy;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC9wYXlyb2xsLXNoZWV0L3BheXJvbGwtc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXlyb2xsL3BheXJvbGwtc2hlZXQvcGF5cm9sbC1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGVldC1idG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xuICAgIGZvbnQ6IGNhcHRpb247XG59XG5cbi5zaGVldC1idG4tZm9ybWF0e1xuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PayrollSheetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-payroll-sheet',
            templateUrl: './payroll-sheet.component.html',
            styleUrls: ['./payroll-sheet.component.scss']
          }]
        }], function () {
          return [{
            type: _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_6__["PayrollApiService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Yylz":
    /*!********************************************************************!*\
      !*** ./src/app/pages/payroll/add-payroll/add-payroll.component.ts ***!
      \********************************************************************/

    /*! exports provided: AddPayrollComponent */

    /***/
    function Yylz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPayrollComponent", function () {
        return AddPayrollComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddPayrollComponent = /*#__PURE__*/function () {
        function AddPayrollComponent() {
          _classCallCheck(this, AddPayrollComponent);
        }

        _createClass(AddPayrollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddPayrollComponent;
      }();

      AddPayrollComponent.ɵfac = function AddPayrollComponent_Factory(t) {
        return new (t || AddPayrollComponent)();
      };

      AddPayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddPayrollComponent,
        selectors: [["app-add-payroll"]],
        decls: 0,
        vars: 0,
        template: function AddPayrollComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPayrollComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-payroll',
            templateUrl: './add-payroll.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cKqs":
    /*!****************************************************!*\
      !*** ./src/app/pages/payroll/payroll.component.ts ***!
      \****************************************************/

    /*! exports provided: PayrollComponent */

    /***/
    function cKqs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayrollComponent", function () {
        return PayrollComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var PayrollComponent = /*#__PURE__*/function () {
        function PayrollComponent() {
          _classCallCheck(this, PayrollComponent);
        }

        _createClass(PayrollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PayrollComponent;
      }();

      PayrollComponent.ɵfac = function PayrollComponent_Factory(t) {
        return new (t || PayrollComponent)();
      };

      PayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PayrollComponent,
        selectors: [["app-payroll"]],
        decls: 1,
        vars: 0,
        template: function PayrollComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheXJvbGwvcGF5cm9sbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-payroll',
            templateUrl: './payroll.component.html',
            styleUrls: ['./payroll.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dElJ":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payroll/payroll-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: PayrollRoutingModule */

    /***/
    function dElJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayrollRoutingModule", function () {
        return PayrollRoutingModule;
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


      var _payroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payroll.component */
      "cKqs");
      /* harmony import */


      var src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/authGuard/auth.guard */
      "CG1p");
      /* harmony import */


      var _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-payroll/list-report.component */
      "jmsI");
      /* harmony import */


      var _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-payroll/add-payroll.component */
      "Yylz");
      /* harmony import */


      var _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./update-payroll/update-report.component */
      "sB2f");
      /* harmony import */


      var _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./payroll-sheet/payroll-sheet.component */
      "LzcQ");

      var route = [{
        path: '',
        component: _payroll_component__WEBPACK_IMPORTED_MODULE_3__["PayrollComponent"],
        canActivate: [src_app_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [{
          path: 'list-payroll',
          component: _list_payroll_list_report_component__WEBPACK_IMPORTED_MODULE_5__["ListPayrollComponent"]
        }, {
          path: 'add-payroll',
          component: _add_payroll_add_payroll_component__WEBPACK_IMPORTED_MODULE_6__["AddPayrollComponent"]
        }, {
          path: 'update-payroll/:employeeId/:month/:year',
          component: _update_payroll_update_report_component__WEBPACK_IMPORTED_MODULE_7__["UpdatePayrollComponent"]
        }, {
          path: 'payroll-sheet',
          component: _payroll_sheet_payroll_sheet_component__WEBPACK_IMPORTED_MODULE_8__["PayrollSheetComponent"]
        }, {
          path: '',
          redirectTo: 'list-payroll',
          pathMatch: 'full'
        }]
      }];

      var PayrollRoutingModule = function PayrollRoutingModule() {
        _classCallCheck(this, PayrollRoutingModule);
      };

      PayrollRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PayrollRoutingModule
      });
      PayrollRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PayrollRoutingModule_Factory(t) {
          return new (t || PayrollRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PayrollRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayrollRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(route)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jmsI":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/payroll/list-payroll/list-report.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ListPayrollComponent */

    /***/
    function jmsI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPayrollComponent", function () {
        return ListPayrollComponent;
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


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jspdf */
      "5RHE");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../payroll-service/payroll-api.service */
      "Cej+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _employee_wizard_services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../employee-wizard/services/employee.service */
      "qp47");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-notifier */
      "VO+5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function ListPayrollComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var employee_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", employee_r5._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](employee_r5.name);
        }
      }

      function ListPayrollComponent_option_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var modeType_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", modeType_r6.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", modeType_r6.name, "");
        }
      }

      function ListPayrollComponent_div_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListPayrollComponent_div_96_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.headerCheckBox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Select All ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r2.selectAllCheckBox);
        }
      }

      function ListPayrollComponent_tbody_107_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListPayrollComponent_tbody_107_td_2_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.listCheckBoxes(list_r9._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r10.showCheckbox[list_r9._id]);
        }
      }

      function ListPayrollComponent_tbody_107_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ListPayrollComponent_tbody_107_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_tbody_107_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.addChequeNo(list_r9._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ListPayrollComponent_tbody_107_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_tbody_107_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.generatePdf(list_r9._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ListPayrollComponent_tbody_107_div_22_table_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("routerLink", "/pages/payroll/update-payroll/", list_r9._id, "/", list_r9.month, "/", list_r9.year, "");
        }
      }

      function ListPayrollComponent_tbody_107_div_22_table_1_table_34_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total Earnings");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ListPayrollComponent_tbody_107_div_22_table_1_table_34_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var empDetailsEarnings_r31 = ctx.$implicit;
          var i_r32 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r32 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsEarnings_r31.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsEarnings_r31.amt);
        }
      }

      function ListPayrollComponent_tbody_107_div_22_table_1_table_36_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total Deductions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ListPayrollComponent_tbody_107_div_22_table_1_table_36_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var empDetailsDeductions_r34 = ctx.$implicit;
          var i_r35 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r35 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsDeductions_r34.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](empDetailsDeductions_r34.amt);
        }
      }

      function ListPayrollComponent_tbody_107_div_22_table_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var empDetails_r26 = ctx.$implicit;

          var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      function ListPayrollComponent_tbody_107_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListPayrollComponent_tbody_107_div_22_table_1_Template, 37, 9, "table", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var list_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r14.salarySlipDetails[list_r9._id].employeeSalaryDetails);
        }
      }

      function ListPayrollComponent_tbody_107_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_tbody_107_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40);

            var list_r9 = ctx.$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r39.showSalarySlipDetails(list_r9._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\xA0 ");

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
        }

        if (rf & 2) {
          var list_r9 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      function ListPayrollComponent_div_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.salarySlipStatus);
        }
      }

      var ListPayrollComponent = /*#__PURE__*/function () {
        function ListPayrollComponent(api, fb, employeeListAPI, spinner, notifier) {
          _classCallCheck(this, ListPayrollComponent);

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
          this.paymentModeType = [{
            name: 'Transfer to Bank Account',
            value: 'Tansfer to Bank Account'
          }, {
            name: 'Cash',
            value: 'Cash'
          }, {
            name: 'Cheque',
            value: 'Cheque'
          }];
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

        _createClass(ListPayrollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var dataSetting = this.currentMonthSetting();
            this.listSalarySlipDetails(dataSetting.monthValue, dataSetting.year, 'later', false);
            var monthValue = Number(dataSetting.monthValue);

            for (var i = 1; i <= 12; i++) {
              if (monthValue >= i) {
                this.currentMonthValue[i.toString().padStart(2, '0')] = true;
              } else {
                this.currentMonthValue[i.toString().padStart(2, '0')] = false;
              }
            }

            this.employeeList();
          } // Employee List

        }, {
          key: "employeeList",
          value: function employeeList() {
            var _this3 = this;

            try {
              this.employeeListAPI.getEmployeeList(this.status).subscribe(function (data) {
                if (data.status === 'success') {
                  _this3.companyEmployeelist = data.data;
                }
              });
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "allDownload",
          value: function allDownload() {
            var _this4 = this;

            try {
              this.spinner.show();

              if (document.getElementById('salarySlipType').value === 'later') {
                if (this.generateSalaryForEmployees.length === 0) {
                  this.spinner.hide();
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No Salary Slip Selected');
                } else {
                  var generateSlip = {
                    employeeIdArray: this.generateSalaryForEmployees
                  };
                  var year = document.getElementById('payrollYear').value;
                  var month = document.getElementById('salarySlipMonth').value;
                  var currentDate = new Date();

                  if (Number(year) === currentDate.getFullYear()) {
                    this.api.monthlyGenerateSlip(generateSlip, month, year, 'multipleGenerate').forEach(function (data) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var i;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                if (data.status === 'success') {
                                  for (i = 0; i < data.data.length; i++) {
                                    this.generatePdf(data.data[i]);
                                  }

                                  this.listSalarySlipDetails(month, year, 'later', false);
                                  this.spinner.hide();
                                }

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });
                    this.generateSalaryForEmployees = [];
                  } else {
                    this.api.generateSalarySlip(generateSlip, year, month).forEach(function (data) {
                      if (data.status === 'success') {
                        for (var i = 0; i < data.data.length; i++) {
                          _this4.generatePdf(data.data[i]);
                        }

                        _this4.listSalarySlipDetails(month, year, 'later', false);

                        _this4.spinner.hide();
                      }
                    });
                  }
                }
              } else if (document.getElementById('salarySlipType').value === 'former') {
                this.dataSalary.forEach(function (items) {
                  _this4.generatePdf(items._id);
                });
                this.spinner.hide();
              } // this.spinner.hide();

            } catch (error) {
              console.log(error);
              this.spinner.hide();
            }
          } // download pdf start

        }, {
          key: "generatePdf",
          value: function generatePdf(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.api.getSalarySlip(id).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var doc, image, textY, maxLength, i, rectY;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return data.data;

                                case 2:
                                  this.existingData = _context5.sent;
                                  this.demo.push(data.data);
                                  _context5.next = 6;
                                  return data.data.gross.amt;

                                case 6:
                                  this.grossAmt = _context5.sent;
                                  _context5.next = 9;
                                  return data.data.netSalary.amt;

                                case 9:
                                  this.netSalaryAmt = _context5.sent;
                                  _context5.next = 12;
                                  return data.data.totalDeduction.amt;

                                case 12:
                                  this.totalDeductionAmt = _context5.sent;
                                  _context5.next = 15;
                                  return data.data.employeeDetails;

                                case 15:
                                  this.employeeDetails = _context5.sent;
                                  _context5.next = 18;
                                  return new jspdf__WEBPACK_IMPORTED_MODULE_3__();

                                case 18:
                                  doc = _context5.sent;
                                  image = new Image();
                                  _context5.next = 22;
                                  return data.data.companyImageUrl;

                                case 22:
                                  image.src = _context5.sent;
                                  _context5.next = 25;
                                  return doc.setFontSize(12);

                                case 25:
                                  _context5.next = 27;
                                  return doc.rect(155, 20, 50, 24);

                                case 27:
                                  _context5.next = 29;
                                  return doc.addImage(image, 'PNG', 170, 22, 20, 20, 'Default Logo', 'NONE');

                                case 29:
                                  _context5.next = 31;
                                  return doc.rect(5, 20, 150, 8);

                                case 31:
                                  _context5.next = 33;
                                  return doc.setFontStyle("bold");

                                case 33:
                                  _context5.t0 = doc;
                                  _context5.next = 36;
                                  return this.employeeDetails.companyName;

                                case 36:
                                  _context5.t1 = _context5.sent;
                                  _context5.next = 39;
                                  return _context5.t0.text.call(_context5.t0, _context5.t1, 75, 26, "center", "a");

                                case 39:
                                  _context5.next = 41;
                                  return doc.setFontStyle("normal");

                                case 41:
                                  _context5.next = 43;
                                  return doc.rect(5, 28, 150, 8);

                                case 43:
                                  _context5.next = 45;
                                  return doc.setFontStyle("bold");

                                case 45:
                                  _context5.next = 47;
                                  return doc.text("Salary Slip for the Month of ".concat(data.data.month, ", ").concat(data.data.year), 75, 34, "center", "a");

                                case 47:
                                  _context5.next = 49;
                                  return doc.setFontStyle("normal");

                                case 49:
                                  _context5.next = 51;
                                  return doc.rect(5, 36, 75, 8);

                                case 51:
                                  _context5.next = 53;
                                  return doc.text("Employee Name", 22, 42, "center", "a");

                                case 53:
                                  _context5.next = 55;
                                  return doc.rect(80, 36, 75, 8);

                                case 55:
                                  _context5.next = 57;
                                  return doc.setFontStyle("bold");

                                case 57:
                                  _context5.t2 = doc;
                                  _context5.next = 60;
                                  return this.employeeDetails.employeeName;

                                case 60:
                                  _context5.t3 = _context5.sent;
                                  _context5.next = 63;
                                  return _context5.t2.text.call(_context5.t2, _context5.t3, 120, 42, "center", "a");

                                case 63:
                                  _context5.next = 65;
                                  return doc.setFontStyle("normal");

                                case 65:
                                  _context5.next = 67;
                                  return doc.rect(5, 44, 50, 13);

                                case 67:
                                  _context5.next = 69;
                                  return doc.text("Account No.", 18, 52, "center", "a");

                                case 69:
                                  _context5.next = 71;
                                  return doc.rect(55, 44, 50, 13);

                                case 71:
                                  _context5.next = 73;
                                  return this.employeeDetails.accountNum;

                                case 73:
                                  if (!_context5.sent) {
                                    _context5.next = 82;
                                    break;
                                  }

                                  _context5.t4 = doc;
                                  _context5.next = 77;
                                  return this.employeeDetails.accountNum;

                                case 77:
                                  _context5.t5 = _context5.sent;
                                  _context5.next = 80;
                                  return _context5.t4.text.call(_context5.t4, _context5.t5, 80, 52, "center", "a");

                                case 80:
                                  _context5.next = 84;
                                  break;

                                case 82:
                                  _context5.next = 84;
                                  return doc.text('', 80, 52, "center", "a");

                                case 84:
                                  _context5.next = 86;
                                  return doc.rect(105, 44, 50, 13);

                                case 86:
                                  _context5.next = 88;
                                  return doc.text("Designation", 125, 52, "center", "a");

                                case 88:
                                  _context5.next = 90;
                                  return doc.rect(155, 44, 50, 13);

                                case 90:
                                  _context5.t6 = doc;
                                  _context5.next = 93;
                                  return this.employeeDetails.designation;

                                case 93:
                                  _context5.t7 = _context5.sent;
                                  _context5.next = 96;
                                  return _context5.t6.text.call(_context5.t6, _context5.t7, 180, 52, "center", "a");

                                case 96:
                                  _context5.next = 98;
                                  return doc.rect(5, 57, 50, 8);

                                case 98:
                                  _context5.next = 100;
                                  return doc.text("Days Present", 19, 63, "center", "a");

                                case 100:
                                  _context5.next = 102;
                                  return doc.rect(55, 57, 50, 8);

                                case 102:
                                  _context5.t8 = doc;
                                  _context5.next = 105;
                                  return this.employeeDetails.present;

                                case 105:
                                  _context5.t9 = _context5.sent;
                                  _context5.next = 108;
                                  return _context5.t8.text.call(_context5.t8, _context5.t9, 80, 63, "center", "a");

                                case 108:
                                  _context5.next = 110;
                                  return doc.rect(105, 57, 50, 8);

                                case 110:
                                  _context5.next = 112;
                                  return doc.text("Earned Leaves", 125, 63, "center", "a");

                                case 112:
                                  _context5.next = 114;
                                  return doc.rect(155, 57, 50, 8);

                                case 114:
                                  _context5.t10 = doc;
                                  _context5.next = 117;
                                  return this.employeeDetails.earnedLeaves;

                                case 117:
                                  _context5.t11 = _context5.sent;
                                  _context5.next = 120;
                                  return _context5.t10.text.call(_context5.t10, _context5.t11, 175, 63, "center", "a");

                                case 120:
                                  _context5.next = 122;
                                  return doc.rect(5, 65, 100, 8);

                                case 122:
                                  _context5.next = 124;
                                  return doc.text("ESIC No :-", 17, 71, "center", "a");

                                case 124:
                                  _context5.next = 126;
                                  return doc.rect(105, 65, 100, 8);

                                case 126:
                                  _context5.next = 128;
                                  return doc.text("P.F. No :-", 120, 71, "center", "a");

                                case 128:
                                  _context5.next = 130;
                                  return doc.rect(5, 73, 65, 8);

                                case 130:
                                  _context5.next = 132;
                                  return doc.text("Leave Without Sanction", 29, 79, "center", "a");

                                case 132:
                                  _context5.next = 134;
                                  return doc.rect(70, 73, 35, 8);

                                case 134:
                                  _context5.t12 = doc;
                                  _context5.next = 137;
                                  return this.employeeDetails.unsanctionedLeave;

                                case 137:
                                  _context5.t13 = _context5.sent;
                                  _context5.next = 140;
                                  return _context5.t12.text.call(_context5.t12, _context5.t13, 83, 79, "center", "a");

                                case 140:
                                  _context5.next = 142;
                                  return doc.rect(105, 73, 60, 8);

                                case 142:
                                  _context5.next = 144;
                                  return doc.text("Payable Days", 125, 79, "center", "a");

                                case 144:
                                  _context5.next = 146;
                                  return doc.rect(165, 73, 40, 8);

                                case 146:
                                  _context5.t14 = doc;
                                  _context5.next = 149;
                                  return this.employeeDetails.payDays;

                                case 149:
                                  _context5.t15 = _context5.sent;
                                  _context5.next = 152;
                                  return _context5.t14.text.call(_context5.t14, _context5.t15, 180, 79, "center", "a");

                                case 152:
                                  _context5.next = 154;
                                  return doc.rect(5, 81, 65, 8);

                                case 154:
                                  _context5.next = 156;
                                  return doc.text("Total CTC/Month", 22, 87, "center", "a");

                                case 156:
                                  _context5.next = 158;
                                  return doc.rect(70, 81, 35, 8);

                                case 158:
                                  _context5.next = 160;
                                  return doc.setFontStyle("bold");

                                case 160:
                                  _context5.t16 = doc;
                                  _context5.next = 163;
                                  return this.employeeDetails.monthlyctc;

                                case 163:
                                  _context5.t17 = _context5.sent;
                                  _context5.next = 166;
                                  return _context5.t16.text.call(_context5.t16, _context5.t17, 85, 87, "center", "a");

                                case 166:
                                  _context5.next = 168;
                                  return doc.setFontStyle("normal");

                                case 168:
                                  _context5.next = 170;
                                  return doc.rect(105, 81, 60, 8);

                                case 170:
                                  _context5.next = 172;
                                  return doc.text("Total CTC/Annum", 129, 87, "center", "a");

                                case 172:
                                  _context5.next = 174;
                                  return doc.rect(165, 81, 40, 8);

                                case 174:
                                  _context5.t18 = doc;
                                  _context5.next = 177;
                                  return this.employeeDetails.annuallyctc;

                                case 177:
                                  _context5.t19 = _context5.sent;
                                  _context5.next = 180;
                                  return _context5.t18.text.call(_context5.t18, _context5.t19, 180, 87, "center", "a");

                                case 180:
                                  _context5.next = 182;
                                  return doc.rect(5, 89, 100, 12);

                                case 182:
                                  _context5.next = 184;
                                  return doc.setFontStyle("bold");

                                case 184:
                                  _context5.next = 186;
                                  return doc.text("Earnings", 40, 97, "center", "a");

                                case 186:
                                  _context5.next = 188;
                                  return doc.rect(105, 89, 100, 12);

                                case 188:
                                  _context5.next = 190;
                                  return doc.text("Deductions", 135, 97, "center", "a");

                                case 190:
                                  _context5.next = 192;
                                  return doc.rect(5, 101, 65, 8);

                                case 192:
                                  _context5.next = 194;
                                  return doc.rect(70, 101, 35, 8);

                                case 194:
                                  _context5.next = 196;
                                  return doc.text("Amount", 85, 107, "center", "a");

                                case 196:
                                  _context5.next = 198;
                                  return doc.rect(105, 101, 60, 8);

                                case 198:
                                  _context5.next = 200;
                                  return doc.rect(165, 101, 40, 8);

                                case 200:
                                  _context5.next = 202;
                                  return doc.text("Amount", 185, 107, "center", "a");

                                case 202:
                                  _context5.next = 204;
                                  return doc.setFontStyle("normal");

                                case 204:
                                  // Daynamic part start
                                  textY = 115;

                                  if (!(this.demo[0].deductions.length > this.demo[0].earnings.length)) {
                                    _context5.next = 211;
                                    break;
                                  }

                                  _context5.next = 208;
                                  return this.demo[0].deductions.length;

                                case 208:
                                  maxLength = _context5.sent;
                                  _context5.next = 214;
                                  break;

                                case 211:
                                  _context5.next = 213;
                                  return this.demo[0].earnings.length;

                                case 213:
                                  maxLength = _context5.sent;

                                case 214:
                                  i = 0;

                                case 215:
                                  if (!(i < maxLength)) {
                                    _context5.next = 261;
                                    break;
                                  }

                                  rectY = textY - 6;
                                  _context5.next = 219;
                                  return this.demo[0].earnings[i];

                                case 219:
                                  _context5.t20 = _context5.sent;
                                  _context5.t21 = undefined;

                                  if (!(_context5.t20 == _context5.t21)) {
                                    _context5.next = 229;
                                    break;
                                  }

                                  _context5.next = 224;
                                  return doc.rect(5, rectY, 65, 8);

                                case 224:
                                  _context5.next = 226;
                                  return doc.rect(70, rectY, 35, 8);

                                case 226:
                                  textY = textY + 8;
                                  _context5.next = 237;
                                  break;

                                case 229:
                                  _context5.next = 231;
                                  return doc.rect(5, rectY, 65, 8);

                                case 231:
                                  _context5.next = 233;
                                  return doc.text(this.demo[0].earnings[i].label, 8, textY, "left", "a");

                                case 233:
                                  _context5.next = 235;
                                  return doc.rect(70, rectY, 35, 8);

                                case 235:
                                  _context5.next = 237;
                                  return doc.text(this.demo[0].earnings[i].amt, 95, textY, "center", "a");

                                case 237:
                                  _context5.next = 239;
                                  return this.demo[0].deductions[i];

                                case 239:
                                  _context5.t22 = _context5.sent;
                                  _context5.t23 = undefined;

                                  if (!(_context5.t22 == _context5.t23)) {
                                    _context5.next = 249;
                                    break;
                                  }

                                  _context5.next = 244;
                                  return doc.rect(105, rectY, 60, 8);

                                case 244:
                                  _context5.next = 246;
                                  return doc.rect(165, rectY, 40, 8);

                                case 246:
                                  textY = textY + 8;
                                  _context5.next = 258;
                                  break;

                                case 249:
                                  _context5.next = 251;
                                  return doc.rect(105, rectY, 60, 8);

                                case 251:
                                  _context5.next = 253;
                                  return doc.text(this.demo[0].deductions[i].label, 117, textY, "left", "a");

                                case 253:
                                  _context5.next = 255;
                                  return doc.rect(165, rectY, 40, 8);

                                case 255:
                                  _context5.next = 257;
                                  return doc.text(this.demo[0].deductions[i].amt, 195, textY, "center", "a");

                                case 257:
                                  textY = textY + 8;

                                case 258:
                                  i++;
                                  _context5.next = 215;
                                  break;

                                case 261:
                                  textY = textY - 6;
                                  _context5.next = 264;
                                  return doc.rect(5, textY, 65, 8);

                                case 264:
                                  _context5.next = 266;
                                  return doc.text("Gross", 13, textY + 6, "center", "a");

                                case 266:
                                  _context5.next = 268;
                                  return doc.rect(70, textY, 35, 8);

                                case 268:
                                  _context5.next = 270;
                                  return doc.text(this.grossAmt, 90, textY + 6, "center", "a");

                                case 270:
                                  _context5.next = 272;
                                  return doc.rect(105, textY, 60, 8);

                                case 272:
                                  _context5.next = 274;
                                  return doc.text("Total Deductions", 134, textY + 6, "center", "a");

                                case 274:
                                  _context5.next = 276;
                                  return doc.rect(165, textY, 40, 8);

                                case 276:
                                  _context5.next = 278;
                                  return doc.text(this.totalDeductionAmt, 192, textY + 6, "center", "a");

                                case 278:
                                  textY = textY + 8;
                                  _context5.next = 281;
                                  return doc.rect(5, textY, 65, 8);

                                case 281:
                                  _context5.next = 283;
                                  return doc.setFontStyle("bold");

                                case 283:
                                  _context5.next = 285;
                                  return doc.text("Net Salary", 17, textY + 6, "center", "a");

                                case 285:
                                  _context5.next = 287;
                                  return doc.rect(5, textY, 200, 8);

                                case 287:
                                  _context5.next = 289;
                                  return doc.text(this.netSalaryAmt, 90, textY + 6, "center", "a");

                                case 289:
                                  _context5.next = 291;
                                  return doc.setFontStyle("normal");

                                case 291:
                                  textY = textY + 8;
                                  _context5.next = 294;
                                  return doc.rect(5, textY, 200, 8);

                                case 294:
                                  _context5.next = 296;
                                  return doc.save(this.employeeDetails.employeeName + '.pdf');

                                case 296:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // account pdf start

        }, {
          key: "accountpdfPdf",
          value: function accountpdfPdf() {
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
            } // doc.addPage();


            doc.save('my.pdf');
          } // accoutn pdf end
          // Year Validation

        }, {
          key: "yearValidation",
          value: function yearValidation() {
            try {
              var currentDate = new Date();
              var year = currentDate.getFullYear();
              var yearValue = document.getElementById('payrollYear').value;
              var yearRegularExpression = /^(19|20)\d{2}$/;
              var result = yearValue.match(yearRegularExpression);

              if (yearValue.length === 0 && result === null) {
                this.earnedLeaveYearMsg = '';
              } else if (result === null) {
                this.earnedLeaveYearMsg = "Year Value is not acceptable";
              } else {
                this.earnedLeaveYearMsg = '';
              }

              if (Number(yearValue) < year) {
                for (var key in this.currentMonthValue) {
                  this.currentMonthValue[key] = true;
                }

                document.getElementById('salarySlipMonth').value = '01';
              } else if (Number(yearValue) === year) {
                var monthValue = currentDate.getMonth() + 1;

                for (var i = 1; i <= 12; i++) {
                  if (monthValue >= i) {
                    this.currentMonthValue[i.toString().padStart(2, '0')] = true;
                  } else {
                    this.currentMonthValue[i.toString().padStart(2, '0')] = false;
                  }
                }
              } else if (Number(yearValue) > year) {
                this.earnedLeaveYearMsg = "Forthcoming data is not available";
              }
            } catch (err) {
              console.log(err);
            }
          } // Filter Functionality

        }, {
          key: "filterFunctionality",
          value: function filterFunctionality() {
            this.selectAllCheckBox = false;

            if (document.getElementById('payrollYear').value.length === 0) {
              var currentDate = new Date().toString();
              document.getElementById('payrollYear').value = currentDate.substring(11, 15);
            }

            if (document.getElementById('salaryEmployee').value.length !== 0) {
              this.filterEmployeeId = document.getElementById('salaryEmployee').value;
              var month = document.getElementById('salarySlipMonth').value;
              var year = document.getElementById('payrollYear').value;
              this.listSalarySlipDetails(month, year, 'later', true);
            } else {
              if (document.getElementById('salarySlipType').value === 'former') {
                this.currentSalarySlipFilterStatus = 'former';
                var _month = document.getElementById('salarySlipMonth').value;
                var _year = document.getElementById('payrollYear').value;

                if (document.getElementById('salaryModeType').value.length !== 0) {
                  var paymentMode = document.getElementById('salaryModeType').value;
                  this.filterSalarySlip(paymentMode, _year, _month);
                } else {
                  this.listSalarySlipDetails(_month, _year, 'former', false);
                }
              } else if (document.getElementById('salarySlipType').value === 'later') {
                this.currentSalarySlipFilterStatus = 'later';
                var _month2 = document.getElementById('salarySlipMonth').value;
                var _year2 = document.getElementById('payrollYear').value;

                if (document.getElementById('salaryModeType').value.length !== 0) {
                  var _paymentMode = document.getElementById('salaryModeType').value;
                  this.filterCurrentSalarySlip(_paymentMode, _year2, _month2);
                } else {
                  this.listSalarySlipDetails(_month2, _year2, 'later', false);
                }
              }
            }

            document.getElementById('salaryModeType').value === 'Cheque' ? this.showChequeBtn = true : this.showChequeBtn = false;
          } // Current Month Setting

        }, {
          key: "currentMonthSetting",
          value: function currentMonthSetting() {
            try {
              var curretDate = new Date();
              var manipulateDate,
                  month,
                  year,
                  monthValue,
                  returnData = {
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
              return returnData;
            } catch (error) {
              console.log(error);
            }
          } // List Salary Slips

        }, {
          key: "listSalarySlips",
          value: function listSalarySlips(year, monthValue) {
            var _this6 = this;

            try {
              this.api.getPayrolData(year, monthValue).subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.data.length > 0) {
                    _this6.dataSalary = data.data;
                    _this6.salarySlipStatus = '';
                  } else {
                    _this6.dataSalary = [];
                    _this6.salarySlipStatus = 'Salary Slip Not Found';
                  }
                }
              });
            } catch (error) {
              console.log(error);
            }
          } // Filter Employee According to payment Mode

        }, {
          key: "filterSalarySlip",
          value: function filterSalarySlip(modeType, year, month) {
            var _this7 = this;

            try {
              this.api.filterSalarySlip(modeType, year, month).subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.data.length > 0) {
                    _this7.dataSalary = data.data;
                    _this7.salarySlipStatus = '';
                  } else {
                    _this7.dataSalary = [];
                    _this7.salarySlipStatus = 'No Salary Slip Found';
                  }
                }
              });
            } catch (error) {
              console.log(error);
            }
          } // List Employee Salary Details

        }, {
          key: "listSalarySlipDetails",
          value: function listSalarySlipDetails(monthValue, year, type, employeeFilter) {
            var _this8 = this;

            try {
              if (employeeFilter) {
                this.api.listSalarySlipDetails(monthValue, year).subscribe(function (data) {
                  if (data.status === 'success') {
                    _this8.dataSalary = [];

                    for (var i = 0; i < data.data.length; i++) {
                      if (data.data[i].isGenerated) {
                        if (data.data[i].employeeId == _this8.filterEmployeeId) {
                          _this8.dataSalary.push(data.data[i]);

                          document.getElementById('salarySlipType').value = 'former';
                          _this8.currentSalarySlipFilterStatus = 'former';
                          break;
                        } else {
                          continue;
                        }
                      } else if (!data.data[i].isGenerated) {
                        if (data.data[i]._id == _this8.filterEmployeeId) {
                          _this8.dataSalary.push(data.data[i]);

                          document.getElementById('salarySlipType').value = 'later';
                          _this8.currentSalarySlipFilterStatus = 'later';
                          break;
                        } else {
                          continue;
                        }
                      }
                    }

                    _this8.showSalaryDetailsCards = {};
                    _this8.showCheckbox = {};

                    for (var i = 0; i < _this8.dataSalary.length; i++) {
                      _this8.showSalaryDetailsCards[_this8.dataSalary[i]._id] = true;

                      if (!_this8.dataSalary[i].isGenerated) {
                        _this8.showCheckbox[_this8.dataSalary[i]._id] = false;
                      }
                    }

                    if (_this8.dataSalary.length === 0) {
                      _this8.salarySlipStatus = 'No Salary Slip Found';
                      _this8.selectAllCheckBox = false;
                    } else {
                      _this8.salarySlipStatus = '';
                    }
                  }
                });
              } else {
                this.api.listSalarySlipDetails(monthValue, year).subscribe(function (data) {
                  if (data.status === 'success') {
                    _this8.dataSalary = [];

                    if (type === 'later') {
                      for (var i = 0; i < data.data.length; i++) {
                        if (!data.data[i].isGenerated) {
                          _this8.dataSalary.push(data.data[i]);
                        }
                      }
                    } else if (type === 'former') {
                      for (var i = 0; i < data.data.length; i++) {
                        if (data.data[i].isGenerated) {
                          _this8.dataSalary.push(data.data[i]);
                        }
                      }
                    }

                    _this8.showSalaryDetailsCards = {};
                    _this8.showCheckbox = {};

                    for (var i = 0; i < _this8.dataSalary.length; i++) {
                      _this8.showSalaryDetailsCards[_this8.dataSalary[i]._id] = true;

                      if (!_this8.dataSalary[i].isGenerated) {
                        _this8.showCheckbox[_this8.dataSalary[i]._id] = false;
                      }
                    }

                    if (_this8.dataSalary.length === 0) {
                      _this8.salarySlipStatus = 'No Salary Slip Found';
                      _this8.selectAllCheckBox = false;
                    } else {
                      _this8.salarySlipStatus = '';
                    }
                  }
                });
              }
            } catch (error) {
              console.log(error);
            }
          } // Header Checkbox Functionality

        }, {
          key: "headerCheckBox",
          value: function headerCheckBox() {
            try {
              this.selectAllCheckBox = !this.selectAllCheckBox;

              if (this.selectAllCheckBox) {
                this.generateSalaryForEmployees = [];

                for (var key in this.showCheckbox) {
                  this.showCheckbox[key] = true;
                  this.generateSalaryForEmployees.push(key);
                }
              } else {
                for (var key in this.showCheckbox) {
                  this.showCheckbox[key] = false;
                  this.generateSalaryForEmployees = [];
                }
              }
            } catch (error) {
              console.log(error);
            }
          } // List CheckBoxes Functionalities

        }, {
          key: "listCheckBoxes",
          value: function listCheckBoxes(id) {
            try {
              this.showCheckbox[id] = !this.showCheckbox[id];

              if (this.showCheckbox[id]) {
                this.generateSalaryForEmployees.push(id);
              } else {
                for (var i = 0; i < this.generateSalaryForEmployees.length; i++) {
                  if (id == this.generateSalaryForEmployees[i]) {
                    this.generateSalaryForEmployees.splice(i, 1);
                    break;
                  }
                }
              }
            } catch (error) {
              console.log(error);
            }
          } // Show Salary Details

        }, {
          key: "showSalarySlipDetails",
          value: function showSalarySlipDetails(employeeId) {
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
            } catch (error) {
              console.log(error);
            }
          } // Filter the later generate salary slip

        }, {
          key: "filterCurrentSalarySlip",
          value: function filterCurrentSalarySlip(modeType, year, month) {
            var _this9 = this;

            try {
              this.showSalaryDetailsCards = {};
              this.showCheckbox = {};
              this.api.filterCurrentSalarySlip(modeType, year, month).subscribe(function (data) {
                if (data.status === 'success') {
                  if (data.data.length > 0) {
                    _this9.dataSalary = data.data;
                    _this9.salarySlipStatus = '';

                    for (var i = 0; i < data.data.length; i++) {
                      _this9.showSalaryDetailsCards[data.data[i]._id] = true;

                      if (!data.data[i].isGenerated) {
                        _this9.showCheckbox[data.data[i]._id] = false;
                      }
                    }
                  } else {
                    _this9.dataSalary = [];
                    _this9.salarySlipStatus = 'No Salary Slip Found';
                  }
                }
              });
            } catch (error) {
              console.log(error);
            }
          } // Reset Functionality

        }, {
          key: "resetFunctionality",
          value: function resetFunctionality() {
            try {
              this.earnedLeaveYearMsg = '';
              this.currentSalarySlipFilterStatus = 'later';
              this.filterOnEmployee = false;
              var dataSetting = this.currentMonthSetting();
              var currentDate = new Date(); // let monthValue = (currentDate.getMonth()+1).toString().padStart(2,'0');

              var monthValue = currentDate.getMonth() + 1;

              for (var i = 1; i <= 12; i++) {
                if (monthValue >= i) {
                  this.currentMonthValue[i.toString().padStart(2, '0')] = true;
                } else {
                  this.currentMonthValue[i.toString().padStart(2, '0')] = false;
                }
              }

              document.getElementById("".concat(dataSetting.monthValue)).removeAttribute('selected');
              document.getElementById('salarySlipType').value = 'later';
              document.getElementById('salaryEmployee').value = '';
              document.getElementById('salaryModeType').value = '';
              document.getElementById('salarySlipMonth').value = monthValue.toString().padStart(2, '0');
              this.listSalarySlipDetails(dataSetting.monthValue, dataSetting.year, 'later', false);
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "employeeFilter",
          value: function employeeFilter() {
            this.filterOnEmployee = true;
          } // ADD CHEQUE NO.

        }, {
          key: "addChequeNo",
          value: function addChequeNo(salaryId) {
            var _this10 = this;

            try {
              this.api.getChequeApi(salaryId).subscribe(function (response) {
                if (response.status === 'success') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: "Cheque Details",
                    text: "Enter Cheque No.:",
                    input: 'text',
                    inputValue: response.data.chequeNum,
                    showCancelButton: true,
                    inputValidator: function inputValidator(value) {
                      return !value && 'Cheque No. Mandatory';
                    }
                  }).then(function (result) {
                    if (result.value) {
                      _this10.api.addChequeApi(salaryId, {
                        checkNum: result.value
                      }).subscribe(function (response) {
                        response.status === 'success' ? _this10.notifier.notify(response.status, response.message) : _this10.notifier.notify(response.status, response.message);
                      }, function (error) {
                        console.log(error);
                      });
                    }
                  });
                }

                if (response.status === 'error') {
                  _this10.notifier.notify(response.status, response.message);
                }
              }, function (error) {
                console.log(error);
              });
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return ListPayrollComponent;
      }();

      ListPayrollComponent.ɵfac = function ListPayrollComponent_Factory(t) {
        return new (t || ListPayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_4__["PayrollApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_employee_wizard_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]));
      };

      ListPayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListPayrollComponent,
        selectors: [["app-list-payroll"]],
        decls: 109,
        vars: 22,
        consts: [["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "timer"], [1, "card", "card-user"], [1, "card-header", 3, "keyup.enter"], [1, "card-title", "text-center"], [1, "card-body"], [1, "form-row"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "form-group"], [1, "col-sm-6", "control-label"], ["id", "salaryEmployee", 1, "dropdown", "dropdown-toggle", "form-control", 3, "change"], ["value", "", "disabled", "", "selected", "", 1, "dropdown-item"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-offset-2"], ["type", "text", "id", "payrollYear", "placeholder", "Enter Year", 1, "form-control", 3, "keyup"], [2, "color", "red"], ["id", "salarySlipMonth", 1, "dropdown", "dropdown-toggle", "form-control"], ["id", "01", "value", "01", 1, "dropdown-item", 3, "disabled"], ["id", "02", "value", "02", 1, "dropdown-item", 3, "disabled"], ["id", "03", "value", "03", 1, "dropdown-item", 3, "disabled"], ["id", "04", "value", "04", 1, "dropdown-item", 3, "disabled"], ["id", "05", "value", "05", 1, "dropdown-item", 3, "disabled"], ["id", "06", "value", "06", 1, "dropdown-item", 3, "disabled"], ["id", "07", "value", "07", 1, "dropdown-item", 3, "disabled"], ["id", "08", "value", "08", 1, "dropdown-item", 3, "disabled"], ["id", "09", "value", "09", 1, "dropdown-item", 3, "disabled"], ["id", "10", "value", "10", 1, "dropdown-item", 3, "disabled"], ["id", "11", "value", "11", 1, "dropdown-item", 3, "disabled"], ["id", "12", "value", "12", 1, "dropdown-item", 3, "disabled"], ["id", "salarySlipType", 1, "dropdown", "dropdown-toggle", "form-control", 3, "disabled"], ["value", "former", 1, "dropdown-item"], ["value", "later", 1, "dropdown-item"], ["id", "salaryModeType", 1, "dropdown", "dropdown-toggle", "form-control", 3, "disabled"], [1, "form-group", "right-buttongroup"], [1, "btn", "btn-primary", "btn-margin", 3, "disabled", "click"], [1, "fa", "fa-filter"], [1, "btn", "btn-danger", "btn-margin", 3, "click"], [1, "fa", "fa-trash"], [1, "btn", "btn-success", "btn-round", 2, "float", "right", 3, "disabled", "click"], [1, "fas", "fa-download"], [1, "table", 2, "text-align", "center"], [1, "text-primary"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "value"], ["type", "checkbox", 3, "checked", "change"], ["class", "btn btn-danger", "type", "button", 3, "click", 4, "ngIf"], ["title", "info", "type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-info"], ["class", "btn btn-default btn-fab btn-icon btn-round", "type", "button", 3, "click", 4, "ngIf"], ["colspan", "6"], [1, "card", 2, "background-color", "whitesmoke", 3, "hidden"], [1, "fa", "fa-check", 2, "color", "green", "font-size", "25px"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-default", "btn-fab", "btn-icon", "btn-round", 3, "click"], [1, "fas", "fa-file-download"], ["width", "100%", "class", "payrollDetails1", 4, "ngFor", "ngForOf"], ["width", "100%", 1, "payrollDetails1"], ["colspan", "6", 1, "text-center"], [1, "display-flex"], ["class", "margin-top3", 4, "ngIf"], ["colspan", "3"], ["width", "100%", "class", "innertable", 4, "ngFor", "ngForOf"], [1, "margin-top3"], ["title", "Update", 1, "editbutton"], ["href", "javascript:void(0);", 3, "routerLink"], [1, "fa", "fa-pencil-square-o"], ["width", "100%", 1, "innertable"], ["colspan", "2"], [2, "text-align", "center"]],
        template: function ListPayrollComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "notifier-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ListPayrollComponent_Template_div_keyup_enter_3_listener() {
              return ctx.filterFunctionality();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ListPayrollComponent_Template_select_change_13_listener() {
              return ctx.employeeFilter();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ListPayrollComponent_Template_input_keyup_23_listener() {
              return ctx.yearValidation();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_Template_button_click_82_listener() {
              return ctx.filterFunctionality();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\xA0 Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_Template_button_click_85_listener() {
              return ctx.resetFunctionality();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\xA0 Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListPayrollComponent_Template_button_click_88_listener() {
              return ctx.allDownload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\xA0 Download All");

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]],
        styles: [".payrollDetails1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 0 10px rgba(142, 133, 133, 0.5);\n  border: 0;\n  border-radius: 5px;\n}\n\n.payrollDetails1[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .payrollDetails1[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .payrollDetails1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-right: 1px solid #ccc;\n}\n\n.innertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .innertable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .innertable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-left: 1px solid #ccc;\n}\n\n.innertable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #ccc;\n}\n\n.editbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.editbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #51cbce;\n  border: 0;\n  background: none;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-margin[_ngcontent-%COMP%] {\n  margin: 0px 2px !important;\n}\n\n@media screen and (max-width: 1200px) {\n  .right-buttongroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 10px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .right-buttongroup[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n.form-group.right-buttongroup[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-top: 26px;\n}\n\n.display-flex[_ngcontent-%COMP%], b[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\ndiv[_ngcontent-%COMP%], .margin-top3[_ngcontent-%COMP%] {\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC9saXN0LXBheXJvbGwvbGlzdC1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFBQTtFQUNJLDJCQUFBO0FBR0o7O0FBREE7RUFDSSw2QkFBQTtBQUlKOztBQUNBO0VBQ0ksYUFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksa0JBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxZQUFBO0VBQU47QUFDRjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNBLG9CQUFBO0FBRkE7O0FBS0E7RUFDSSxnQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5cm9sbC9saXN0LXBheXJvbGwvbGlzdC1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheXJvbGxEZXRhaWxzMXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMTQyLCAxMzMsIDEzMywgMC41KTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBheXJvbGxEZXRhaWxzMSB0ciwucGF5cm9sbERldGFpbHMxIHRkLC5wYXlyb2xsRGV0YWlsczEgdGh7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbn1cbi5pbm5lcnRhYmxlIHRyLC5pbm5lcnRhYmxlIHRkLC5pbm5lcnRhYmxlIHRoe1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbn1cbi5pbm5lcnRhYmxlIHRyOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4vLyAucGF5cm9sbERldGFpbHMxLCB0aCwgdHIsIHRke1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4vLyB9XG4uZWRpdGJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmVkaXRidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBjb2xvcjogIzUxY2JjZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4uYnRuLW1hcmdpbntcbiAgICBtYXJnaW46IDBweCAycHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjAwcHgpe1xuICAgIC5yaWdodC1idXR0b25ncm91cCBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAucmlnaHQtYnV0dG9uZ3JvdXAge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG5cbi5mb3JtLWdyb3VwLnJpZ2h0LWJ1dHRvbmdyb3VwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbi5kaXNwbGF5LWZsZXgsIGJ7XG5kaXNwbGF5OiBpbmxpbmUtZmxleFxufVxuXG5kaXYsIC5tYXJnaW4tdG9wM3tcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListPayrollComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-list-payroll',
            templateUrl: './list-payroll.component.html',
            styleUrls: ['./list-payroll.component.scss']
          }]
        }], function () {
          return [{
            type: _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_4__["PayrollApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: _employee_wizard_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
          }, {
            type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sB2f":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/payroll/update-payroll/update-report.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UpdatePayrollComponent */

    /***/
    function sB2f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatePayrollComponent", function () {
        return UpdatePayrollComponent;
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


      var _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../payroll-service/payroll-api.service */
      "Cej+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UpdatePayrollComponent_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);

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

      function UpdatePayrollComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

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

      function UpdatePayrollComponent_div_59_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UpdatePayrollComponent_div_59_div_8_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var earnings_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.checkValidation(earnings_r6.label);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var earnings_r6 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](earnings_r6.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", earnings_r6.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", earnings_r6.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.salarySlipPattern[earnings_r6.label]);
        }
      }

      function UpdatePayrollComponent_div_59_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function UpdatePayrollComponent_div_59_div_16_Template_input_keyup_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var deductions_r9 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.checkValidation(deductions_r9.label);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var deductions_r9 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deductions_r9.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", deductions_r9.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", deductions_r9.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.salarySlipPattern[deductions_r9.label]);
        }
      }

      function UpdatePayrollComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      var UpdatePayrollComponent = /*#__PURE__*/function () {
        function UpdatePayrollComponent(api, fb, route, ngZone, router) {
          _classCallCheck(this, UpdatePayrollComponent);

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

        _createClass(UpdatePayrollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            try {
              this.employeeId = this.route.snapshot.paramMap.get("employeeId");
              this.requestMonth = this.route.snapshot.paramMap.get("month");
              this.requestYear = this.route.snapshot.paramMap.get("year");
              this.salarySlipForm();
              this.api.listSalarySlipDetails(this.requestMonth, this.requestYear).subscribe(function (data) {
                if (data.status === 'success') {
                  for (var i = 0; i < data.data.length; i++) {
                    if (data.data[i]._id == _this11.employeeId) {
                      _this11.existingSalaryDetails = data.data[i];
                      _this11.salarySlipDeductions = data.data[i].deductions;
                      _this11.salarySlipEarnings = data.data[i].earnings;
                      _this11.isGenerated = data.data[i].isGenerated;
                      break;
                    }
                  } // Basic Details


                  _this11.updateSalarySlipForm = _this11.fb.group({
                    employeeDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                      employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this11.existingSalaryDetails.employeeDetails.employeeName),
                      designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this11.existingSalaryDetails.employeeDetails.designation),
                      present: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this11.existingSalaryDetails.employeeDetails.present),
                      earnedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this11.existingSalaryDetails.employeeDetails.earnedLeaves),
                      unsanctionedLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this11.existingSalaryDetails.employeeDetails.unsanctionedLeave),
                      payDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this11.existingSalaryDetails.employeeDetails.payDays)
                    })
                  }); // Create Deduction Form Dynamically

                  var deduction = {};

                  _this11.salarySlipDeductions.forEach(function (totalDeductions) {
                    deduction[totalDeductions.label] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](totalDeductions.amt);
                    _this11.salarySlipPattern[totalDeductions.label] = '';
                  });

                  _this11.deductionForm = _this11.fb.group({
                    deductions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](deduction)
                  }); // Create Earnings Form Dynamically

                  var earnings = {};

                  _this11.salarySlipEarnings.forEach(function (totalEarnings) {
                    earnings[totalEarnings.label] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](totalEarnings.amt);
                    _this11.salarySlipPattern[totalEarnings.label] = '';
                  });

                  _this11.earningsForm = _this11.fb.group({
                    earnings: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](earnings)
                  });
                }
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "salarySlipForm",
          value: function salarySlipForm() {
            try {
              this.updateSalarySlipForm = this.fb.group({
                employeeDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                  employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                  designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                  present: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                  earnedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                  unsanctionedLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                  payDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
                })
              });
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "updateSalarySlip",
          value: function updateSalarySlip(element) {
            var _this12 = this;

            try {
              this.updatedSalaryForm = this.fb.group({
                employeeDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                  employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.employeeName').value),
                  designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.designation').value),
                  present: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.present').value),
                  earnedLeaves: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.earnedLeaves').value),
                  unsanctionedLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.unsanctionedLeave').value),
                  payDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.updateSalarySlipForm.get('employeeDetails.payDays').value)
                }),
                deductions: this.deductionForm,
                earnings: this.earningsForm,
                employeeIdArray: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.employeeId)]),
                isGenerated: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.isGenerated)
              });
              var currentDate = new Date(); // If salary Slip is not generated for the current month

              if ((currentDate.getMonth() + 1).toString().padStart(2, '0') === this.requestMonth && !this.isGenerated) {
                this.api.monthlyGenerateSlip(this.updatedSalaryForm.value, this.requestMonth, this.requestYear, 'Generate').subscribe(function (data) {
                  if (data.status === 'success') {
                    _this12.successMessage = true;
                    _this12.errorMsg = false;
                    _this12.successMsg = data.message;
                    setTimeout(function () {
                      _this12.router.navigateByUrl("/pages/payroll/list-payroll");

                      _this12.handelErrors();
                    }, 2000);
                  } else if (data.status === 'error') {
                    _this12.successMessage = false;
                    _this12.errorMsg = true;
                    _this12.errMsg = data.message;
                    setTimeout(function () {
                      _this12.handelErrors();
                    }, 5000);
                  }
                });
              } // If salary Slip is generated for the current month and user want to update the data


              if ((currentDate.getMonth() + 1).toString().padStart(2, '0') === this.requestMonth && this.isGenerated) {
                this.api.monthlyGenerateSlip(this.updatedSalaryForm.value, this.requestMonth, this.requestYear, 'Update').subscribe(function (data) {
                  if (data.status === 'success') {
                    _this12.successMessage = true;
                    _this12.errorMsg = false;
                    _this12.successMsg = data.message;
                    setTimeout(function () {
                      _this12.router.navigateByUrl("/pages/payroll/list-payroll");

                      _this12.handelErrors();
                    }, 2000);
                  } else if (data.status === 'error') {
                    _this12.successMessage = false;
                    _this12.errorMsg = true;
                    _this12.errMsg = data.message;
                    setTimeout(function () {
                      _this12.handelErrors();
                    }, 5000);
                  }
                });
              }

              element.scrollIntoView();
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "showFunctinality",
          value: function showFunctinality() {
            try {
              this.showButtonValue = !this.showButtonValue;

              if (this.showButtonValue) {
                this.buttonValue = 'Show Less';
              } else {
                this.buttonValue = 'Show More';
              }
            } catch (err) {
              console.log(err);
            }
          }
        }, {
          key: "checkValidation",
          value: function checkValidation(label) {
            try {
              if (document.getElementById(label).value.match(/^\$?[0-9]?((\.[0-9]+)|([0-9]+(\.[0-9]+)?))$/) === null) {
                this.salarySlipPattern[label] = "".concat(label, " value is not acceptable");
              } else {
                this.salarySlipPattern[label] = '';
              }

              for (var key in this.salarySlipPattern) {
                if (this.salarySlipPattern[key].length > 0) {
                  this.didUpdate = true;
                  break;
                } else {
                  this.didUpdate = false;
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        }, {
          key: "handelErrors",
          value: function handelErrors() {
            try {
              this.successMessage = false;
              this.errorMsg = false;
              this.successMsg = '';
              this.errMsg = '';
            } catch (error) {
              console.log(error);
            }
          }
        }]);

        return UpdatePayrollComponent;
      }();

      UpdatePayrollComponent.ɵfac = function UpdatePayrollComponent_Factory(t) {
        return new (t || UpdatePayrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_2__["PayrollApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      UpdatePayrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdatePayrollComponent,
        selectors: [["app-update-payroll"]],
        decls: 66,
        vars: 7,
        consts: [[1, "card", "card-u"], [1, "card-header"], [1, "card-title", "text-center"], ["target", ""], [1, "card-body"], [1, "col-sm-offset-2"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["role", "form", 1, "form-horizontal", 3, "formGroup"], [3, "formGroup"], [1, "row"], [1, "col-lg-6", "col-md-6", "col-sm-6"], [1, "form-group"], [1, "control-label"], ["type", "text", "formControlName", "employeeName", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "designation", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "present", 1, "form-control"], [1, "control-label", "col-sm-6"], ["type", "text", "formControlName", "payDays", 1, "form-control"], ["type", "text", "formControlName", "earnedLeaves", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "unsanctionedLeave", "readonly", "", 1, "form-control"], [1, "btn", "btn-success", 3, "click"], ["class", "row", 4, "ngIf"], [1, ""], ["type", "submit", 1, "btn", "btn-success", 3, "disabled", "click"], ["type", "submit", "routerLink", "/pages/payroll/list-payroll", 1, "btn", "btn-danger"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "edit-form-heading"], ["class", "col-lg-6 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [1, "redtext"], ["type", "text", 1, "form-control", 3, "id", "formControlName", "keyup"], [1, "errortext", "bottomspace-none"]],
        template: function UpdatePayrollComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePayrollComponent_Template_button_click_57_listener() {
              return ctx.showFunctinality();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, UpdatePayrollComponent_div_59_Template, 17, 6, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePayrollComponent_Template_button_click_62_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.updateSalarySlip(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cancel");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateSalarySlipForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateSalarySlipForm.get("employeeDetails"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButtonValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.didUpdate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: [".edit-form-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 10px 0;\n  font-weight: 500;\n}\n\n.errortext[_ngcontent-%COMP%], .redtext[_ngcontent-%COMP%] {\n  color: #ff0000;\n}\n\n.bottomspace-none[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cm9sbC91cGRhdGUtcGF5cm9sbC91cGRhdGUtcGF5cm9sbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXlyb2xsL3VwZGF0ZS1wYXlyb2xsL3VwZGF0ZS1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtZm9ybS1oZWFkaW5nIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5lcnJvcnRleHQsLnJlZHRleHR7XG4gICAgY29sb3I6ICNmZjAwMDA7XG59XG4uYm90dG9tc3BhY2Utbm9uZXtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePayrollComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-update-payroll',
            templateUrl: 'update-payroll.component.html',
            styleUrls: ['update-payroll.component.scss']
          }]
        }], function () {
          return [{
            type: _payroll_service_payroll_api_service__WEBPACK_IMPORTED_MODULE_2__["PayrollApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=payroll-payroll-module-es5.js.map