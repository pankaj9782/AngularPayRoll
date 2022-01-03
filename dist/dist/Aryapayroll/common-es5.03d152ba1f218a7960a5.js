!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8fwW":function(e,n,c){"use strict";c.d(n,"a",(function(){return l}));var a=c("AytR"),r=c("tk/3"),i=c("z6cu"),s=c("JIr8"),p=c("fXoL"),l=function(){var e=function(){function e(o){t(this,e),this.http=o,this.endpoint=a.a.apiBaseUrl,this.headers=(new r.c).set("Contant-Type","application/x-www-form-urlencoded")}return o(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(i.a)(e)}catch(o){console.log(o.message)}}},{key:"getRolesListData",value:function(){try{return this.http.get(this.endpoint+"/user/role-list/").pipe(Object(s.a)(this.errorMgmt))}catch(t){console.log(t.message)}}},{key:"addRole",value:function(t){try{var e=localStorage.getItem("token");return this.http.post("".concat(this.endpoint,"/user/add-role/").concat(e),t).pipe(Object(s.a)(this.errorMgmt))}catch(o){}}},{key:"listAllRole",value:function(){try{var t=localStorage.getItem("token");return this.http.get("".concat(this.endpoint,"/user/all-role-list/").concat(t)).pipe(Object(s.a)(this.errorMgmt))}catch(e){console.log(e.message)}}},{key:"listIndividualRole",value:function(t){try{return this.http.get("".concat(this.endpoint,"/user/individaul-role-list/").concat(t)).pipe(Object(s.a)(this.errorMgmt))}catch(e){console.log(e.message)}}},{key:"updateRole",value:function(t,e){try{var o=localStorage.getItem("token");return this.http.post("".concat(this.endpoint,"/user/update-role/").concat(o,"/").concat(e),t).pipe(Object(s.a)(this.errorMgmt))}catch(n){}}},{key:"listIndividualPermissions",value:function(t){try{return this.http.get("".concat(this.endpoint,"/user/individaul-permissions-list/").concat(t)).pipe(Object(s.a)(this.errorMgmt))}catch(e){console.log(e.message)}}},{key:"updateRolePermissions",value:function(t,e){try{var o=localStorage.getItem("token");return this.http.post("".concat(this.endpoint,"/user/update-role-permission/").concat(o,"/").concat(e),t).pipe(Object(s.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"deletePermission",value:function(t,e){try{return this.http.delete("".concat(this.endpoint,"/user/delete-permission/").concat(e,"/").concat(t)).pipe(Object(s.a)(this.errorMgmt))}catch(o){console.log(o)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.dc(r.a))},e.\u0275prov=p.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},VFOk:function(e,n,c){"use strict";c.d(n,"a",(function(){return l}));var a=c("tk/3"),r=c("JIr8"),i=c("z6cu"),s=c("AytR"),p=c("fXoL"),l=function(){var e=function(){function e(o){t(this,e),this.http=o,this.endpoint=s.a.apiBaseUrl,this.headers=(new a.c).set("Contant-Type","application/x-www-form-urlencoded")}return o(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(i.a)(e)}catch(o){console.log(o.message)}}},{key:"getJobCategoryData",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/list-job-categories/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"jobCategoryDetails",value:function(t){try{return this.http.get("".concat(this.endpoint,"/company/job-category-details/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"addJobCategoy",value:function(t){try{var e=sessionStorage.getItem("companyId");return console.log(e),this.http.post("".concat(this.endpoint,"/company/add-job-category/").concat(e),t).pipe(Object(r.a)(this.errorMgmt))}catch(o){console.log(o)}}},{key:"updateJobCategory",value:function(t,e){try{var o=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/update-job-category/").concat(o,"/").concat(e),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"removeData",value:function(t){try{return this.http.delete("".concat(this.endpoint,"/company/delete-job-category/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.dc(a.a))},e.\u0275prov=p.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},Zz1j:function(e,n,c){"use strict";c.d(n,"a",(function(){return l}));var a=c("tk/3"),r=c("JIr8"),i=c("z6cu"),s=c("AytR"),p=c("fXoL"),l=function(){var e=function(){function e(o){t(this,e),this.http=o,this.endpoint=s.a.apiBaseUrl,this.headers=(new a.c).set("Contant-Type","application/x-www-form-urlencoded")}return o(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(i.a)(e)}catch(o){console.log(o.message)}}},{key:"documentData",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/list-all-document-types/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"documentTypeDetails",value:function(t){try{return this.http.get("".concat(this.endpoint,"/company/document-type-details/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"addDocumentSubmit",value:function(t,e){try{var o=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/add-document-types/").concat(o),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"updateDocument",value:function(t,e,o){try{return this.http.post("".concat(this.endpoint,"/company/update-document-types/").concat(e,"/").concat(o),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"removeDocument",value:function(t){try{return this.http.delete("".concat(this.endpoint,"/company/delete-document-type/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.dc(a.a))},e.\u0275prov=p.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},fuoZ:function(e,n,c){"use strict";c.d(n,"a",(function(){return l}));var a=c("tk/3"),r=c("JIr8"),i=c("z6cu"),s=c("AytR"),p=c("fXoL"),l=function(){var e=function(){function e(o){t(this,e),this.http=o,this.endpoint=s.a.apiBaseUrl,this.headers=(new a.c).set("Contant-Type","application/x-www-form-urlencoded")}return o(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(i.a)(e)}catch(o){console.log(o.message)}}},{key:"skillCategoryData",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/category/list-skill-category/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"skillCategoryDetails",value:function(t){try{return this.http.get("".concat(this.endpoint,"/category/skill-category-details/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"addSkillCategoy",value:function(t){try{var e=sessionStorage.getItem("companyId"),o=localStorage.getItem("token");return this.http.post("".concat(this.endpoint,"/category/add-skill-category/").concat(e,"/").concat(o),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"updateSkillCategory",value:function(t,e){try{var o=sessionStorage.getItem("companyId"),n=localStorage.getItem("token");return this.http.post("".concat(this.endpoint,"/category/update-skill-category/").concat(e,"/").concat(o,"/").concat(n),t).pipe(Object(r.a)(this.errorMgmt))}catch(c){console.log(c)}}},{key:"removeData",value:function(t){try{return this.http.delete("".concat(this.endpoint,"/category/delete-skill-category/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.dc(a.a))},e.\u0275prov=p.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},wZQ7:function(e,n,c){"use strict";c.d(n,"a",(function(){return l}));var a=c("tk/3"),r=c("JIr8"),i=c("z6cu"),s=c("AytR"),p=c("fXoL"),l=function(){var e=function(){function e(o){t(this,e),this.http=o,this.endpoint=s.a.apiBaseUrl,this.headers=(new a.c).set("Contant-Type","application/x-www-form-urlencoded")}return o(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(i.a)(e)}catch(o){console.log(o.message)}}},{key:"getListData",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/list-leave-types/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"leaveDataSubmit",value:function(t){try{var e=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/add-leave-type/").concat(e),t).pipe(Object(r.a)(this.errorMgmt))}catch(o){console.log(o)}}},{key:"updateLeaveType",value:function(t,e){try{var o=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/update-leave-type/").concat(o,"/").concat(e),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"leaveTypeDetails",value:function(t){try{return this.http.get("".concat(this.endpoint,"/company/leave-type-details/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"removeData",value:function(t){try{return this.http.delete("".concat(this.endpoint,"/company/delete-leave-type/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"markEmployeeAbsent",value:function(t,e){try{return this.http.post("".concat(this.endpoint,"/employee/mark-leave-absent-or-sandwich/").concat(e),t).pipe(Object(r.a)(this.errorMgmt))}catch(o){console.log(o)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.dc(a.a))},e.\u0275prov=p.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},y8g4:function(e,n,c){"use strict";c.d(n,"a",(function(){return l}));var a=c("tk/3"),r=c("JIr8"),i=c("z6cu"),s=c("AytR"),p=c("fXoL"),l=function(){var e=function(){function e(o){t(this,e),this.http=o,this.endpoint=s.a.apiBaseUrl,this.headers=(new a.c).set("Contant-Type","application/x-www-form-urlencoded")}return o(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(i.a)(e)}catch(o){console.log(o.message)}}},{key:"getGradeRule",value:function(t,e){try{"basicSalary"===e?(t.paymentHead.fixedPercentOfName=e,t.paymentHead.fixedPercentOfId=""):(t.paymentHead.fixedPercentOfId=e,t.paymentHead.fixedPercentOfName="");var o=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/add-grade-rule/").concat(o),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"updateGadeRule",value:function(t,e){try{var o=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/update-grade-rule/").concat(o,"/").concat(e),t).pipe(Object(r.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"updatePaymentHeads",value:function(t,e,o,n,c){try{return c&&("basicSalary"===n?t.fixedPercentOfName=n:t.fixedPercentOfId=n),this.http.post("".concat(this.endpoint,"/company/update-grade-rule-payment-head/").concat(e,"/").concat(o),t).pipe(Object(r.a)(this.errorMgmt))}catch(a){console.log(a)}}},{key:"getPaymentHeadData",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/list-payment-heads/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"getGradeRuleList",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/list-all-grade-rule/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"existingData",value:function(t){try{return this.http.get("".concat(this.endpoint,"/company/grade-rule-list/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"removeData",value:function(t){try{return this.http.delete("".concat(this.endpoint,"/company/delete-grade-rule/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"companyPaymentHeads",value:function(t){try{return this.http.get("".concat(this.endpoint,"/company/payment-head-details/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"addGradules",value:function(t,e,o){try{"basicSalary"===o?t.paymentHead.fixedPercentOfName=o:t.paymentHead.fixedPercentOfId=o,console.log(t);var n=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/company/add-grade-rule-payment-head/").concat(e,"/").concat(n),t).pipe(Object(r.a)(this.errorMgmt))}catch(c){console.log(c)}}},{key:"removeGradeData",value:function(t,e){try{return this.http.delete("".concat(this.endpoint,"/company/delete-grade-rule-payment-head/").concat(t,"/").concat(e)).pipe(Object(r.a)(this.errorMgmt))}catch(o){console.log(o)}}},{key:"fixedPaymentHeads",value:function(t){try{return this.http.get("".concat(this.endpoint,"/company/fixed-payment-heads/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"filterPaymentHeads",value:function(t){try{var e=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/filter-payment-heads/").concat(e,"/").concat(t)).pipe(Object(r.a)(this.errorMgmt))}catch(o){console.log(o)}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.dc(a.a))},e.\u0275prov=p.Pb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();
//# sourceMappingURL=common-es5.03d152ba1f218a7960a5.js.map