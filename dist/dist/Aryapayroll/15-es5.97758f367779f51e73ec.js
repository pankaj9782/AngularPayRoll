!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{goCz:function(e,n,a){"use strict";a.r(n),a.d(n,"DepartmentModule",(function(){return q}));var i,s,o=a("ofXK"),c=a("tyNb"),b=a("fXoL"),p=((i=function(){function e(){t(this,e)}return r(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=b.Nb({type:i,selectors:[["app-department"]],decls:1,vars:0,template:function(t,e){1&t&&b.Ub(0,"router-outlet")},directives:[c.g],styles:[""]}),i),d=a("CG1p"),l=a("PSD3"),u=a.n(l),m=a("tk/3"),f=a("JIr8"),h=a("z6cu"),g=a("AytR"),v=((s=function(){function e(r){t(this,e),this.http=r,this.endpoint=g.a.apiBaseUrl,this.headers=(new m.c).set("Contant-Type","application/x-www-form-urlencoded")}return r(e,[{key:"errorMgmt",value:function(t){try{var e="";return e=t.error instanceof ErrorEvent?t.error.message:"Error code:".concat(t.status,"\nMessage:").concat(e),console.log(e),Object(h.a)(e)}catch(r){console.log(r.message)}}},{key:"getDepartment",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/departments/list-all/").concat(t)).pipe(Object(f.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"getDepartmentDetails",value:function(t){try{return this.http.get("".concat(this.endpoint,"/branch/department-details/").concat(t)).pipe(Object(f.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"addDepatment",value:function(t,e){try{var r=sessionStorage.getItem("companyId");return this.http.post("".concat(this.endpoint,"/branch/add-department/").concat(e,"/").concat(r),t).pipe(Object(f.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"updateDepartment",value:function(t,e,r){try{return this.http.post("".concat(this.endpoint,"/branch/update-department/").concat(e,"/").concat(r),t).pipe(Object(f.a)(this.errorMgmt))}catch(n){console.log(n)}}},{key:"removeData",value:function(t){try{return this.http.delete("".concat(this.endpoint,"/branch/delete-department/").concat(t)).pipe(Object(f.a)(this.errorMgmt))}catch(e){console.log(e)}}},{key:"DepartmentList",value:function(){try{var t=sessionStorage.getItem("companyId");return this.http.get("".concat(this.endpoint,"/company/branch-list/").concat(t)).pipe(Object(f.a)(this.errorMgmt))}catch(e){console.log(e)}}}]),e}()).\u0275fac=function(t){return new(t||s)(b.dc(m.a))},s.\u0275prov=b.Pb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),y=a("cnwL");function I(t,e){if(1&t){var r=b.ac();b.Zb(0,"tbody"),b.Zb(1,"tr"),b.Zb(2,"td"),b.Zb(3,"b"),b.Ic(4),b.Yb(),b.Yb(),b.Zb(5,"td"),b.Ic(6),b.Yb(),b.Zb(7,"td"),b.Ic(8),b.Yb(),b.Zb(9,"td"),b.Zb(10,"a",7),b.Ub(11,"i",8),b.Yb(),b.Ic(12,"\xa0 "),b.Zb(13,"button",9),b.gc("click",(function(){b.Bc(r);var t=e.$implicit;return b.jc().showConfirmationMessage(t._id)})),b.Ub(14,"i",10),b.Yb(),b.Yb(),b.Yb(),b.Yb()}if(2&t){var n=e.$implicit,a=e.index,i=b.jc();b.Hb(4),b.Kc("",a+1,"."),b.Hb(2),b.Kc(" ",n.title," "),b.Hb(2),b.Kc(" ",n.description,""),b.Hb(2),b.Lb("disabled",-1===i.permissionInfo.search("Edit Department")),b.sc("routerLink","/pages/department/update-department/",n._id,"/",n.userId,""),b.Hb(3),b.pc("disabled",-1===i.permissionInfo.search("Delete Department"))}}var Y,Z=((Y=function(){function e(r,n,a){t(this,e),this.api=r,this.route=n,this.util=a,this.departmentData=[],this.showCard={}}return r(e,[{key:"ngOnInit",value:function(){this.departmentList(),this.permissionInfo=this.util.permissionRoleInfo}},{key:"departmentList",value:function(){var t=this;try{this.api.getDepartment().subscribe((function(e){"success"!==e.status&&200!==e.status||(t.departmentData=e.data,0==t.departmentData.length&&t.route.navigateByUrl("/pages/department/add-department"))}))}catch(e){console.log(e)}}},{key:"showConfirmationMessage",value:function(t){var e=this,r=u.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});r.fire({title:"Are you sure?",text:"You want to delete it",type:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0,allowOutsideClick:!1}).then((function(n){n.value?e.api.removeData(t).subscribe((function(t){"success"===t.status||200===t.status?r.fire("Deleted!","Your row has been deleted.","success"):"error"===t.status&&r.fire("ERROR!",t.message,"error"),e.departmentList()})):n.dismiss===u.a.DismissReason.cancel&&r.fire("Cancelled","Your list data safe","error")}))}},{key:"addDepartment",value:function(){try{this.util.departmentSatus=1}catch(t){console.log(t)}}}]),e}()).\u0275fac=function(t){return new(t||Y)(b.Tb(v),b.Tb(c.b),b.Tb(y.a))},Y.\u0275cmp=b.Nb({type:Y,selectors:[["app-list-department"]],decls:19,vars:2,consts:[[1,"card"],[1,"card-header",2,"text-align","center"],["type","button","routerLink","/pages/department/add-department",1,"btn","btn-primary",2,"float","right",3,"disabled","click"],[1,"fa","fa-plus-square"],[1,"table",2,"text-align","center"],[1,"text-primary"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"routerLink"],[1,"fa","fa-pencil-square-o"],["type","button",1,"btn","btn-danger",3,"disabled","click"],[1,"fa","fa-trash"]],template:function(t,e){1&t&&(b.Zb(0,"div",0),b.Zb(1,"div",1),b.Zb(2,"h2"),b.Ic(3,"Departments List"),b.Yb(),b.Zb(4,"button",2),b.gc("click",(function(){return e.addDepartment()})),b.Ub(5,"i",3),b.Ic(6,"\xa0 Add Department"),b.Yb(),b.Yb(),b.Zb(7,"table",4),b.Zb(8,"thead",5),b.Zb(9,"tr"),b.Zb(10,"th"),b.Ic(11," S.No "),b.Yb(),b.Zb(12,"th"),b.Ic(13," Title "),b.Yb(),b.Zb(14,"th"),b.Ic(15,"description"),b.Yb(),b.Zb(16,"th"),b.Ic(17," Action "),b.Yb(),b.Yb(),b.Yb(),b.Gc(18,I,15,8,"tbody",6),b.Yb(),b.Yb()),2&t&&(b.Hb(4),b.pc("disabled",-1===e.permissionInfo.search("Create Department")),b.Hb(14),b.pc("ngForOf",e.departmentData))},directives:[c.c,o.l,c.e],styles:[""]}),Y),D=a("3Pt+");function M(t,e){if(1&t&&(b.Zb(0,"p",22),b.Zb(1,"strong"),b.Ic(2),b.Yb(),b.Yb()),2&t){var r=b.jc();b.Hb(2),b.Jc(r.errMsg)}}function k(t,e){if(1&t&&(b.Zb(0,"p",23),b.Zb(1,"strong"),b.Ic(2),b.Yb(),b.Yb()),2&t){var r=b.jc();b.Hb(2),b.Jc(r.successMsg)}}function w(t,e){if(1&t&&(b.Zb(0,"option",24),b.Ic(1),b.Yb()),2&t){var r=e.$implicit;b.qc("value",r._id),b.Hb(1),b.Kc(" ",r.name," ")}}function F(t,e){if(1&t&&(b.Zb(0,"div",26),b.Ic(1),b.Yb()),2&t){var r=b.jc().$implicit;b.Hb(1),b.Kc(" ",r.message," ")}}function T(t,e){if(1&t&&(b.Zb(0,"div"),b.Gc(1,F,2,1,"div",25),b.Yb()),2&t){var r=e.$implicit,n=b.jc();b.Hb(1),b.pc("ngIf",n.DepartmentForm.get("branchId").hasError(r.type)&&(n.DepartmentForm.get("branchId").dirty||n.DepartmentForm.get("branchId").touched))}}function H(t,e){if(1&t&&(b.Zb(0,"div",26),b.Ic(1),b.Yb()),2&t){var r=b.jc().$implicit;b.Hb(1),b.Kc(" ",r.message," ")}}function U(t,e){if(1&t&&(b.Zb(0,"div"),b.Gc(1,H,2,1,"div",25),b.Yb()),2&t){var r=e.$implicit,n=b.jc();b.Hb(1),b.pc("ngIf",n.DepartmentForm.get("title").hasError(r.type)&&(n.DepartmentForm.get("title").dirty||n.DepartmentForm.get("title").touched))}}function E(t,e){if(1&t&&(b.Zb(0,"p",17),b.Zb(1,"strong"),b.Ic(2),b.Yb(),b.Yb()),2&t){var r=b.jc();b.Hb(2),b.Jc(r.errMsg)}}function O(t,e){if(1&t&&(b.Zb(0,"p",18),b.Zb(1,"strong"),b.Ic(2),b.Yb(),b.Yb()),2&t){var r=b.jc();b.Hb(2),b.Jc(r.successMsg)}}function x(t,e){if(1&t&&(b.Zb(0,"div",20),b.Ic(1),b.Yb()),2&t){var r=b.jc().$implicit;b.Hb(1),b.Kc(" ",r.message," ")}}function j(t,e){if(1&t&&(b.Zb(0,"div"),b.Gc(1,x,2,1,"div",19),b.Yb()),2&t){var r=e.$implicit,n=b.jc();b.Hb(1),b.pc("ngIf",n.DepartmentUpdateForm.get("title").hasError(r.type)&&(n.DepartmentUpdateForm.get("title").dirty||n.DepartmentUpdateForm.get("title").touched))}}var C,L,N,G,B=[{path:"",component:p,canActivate:[d.a],children:[{path:"list-department",component:Z},{path:"add-department",component:(L=function(){function e(r,n,a,i,s,o){t(this,e),this.fb=r,this.api=n,this.router=a,this.ngZone=i,this.route=s,this.util=o,this.successMessage=!1,this.errorMsg=!1,this.validationMessage={title:[{type:"required",message:"Title is required"}],branchId:[{type:"required",message:"Branch Name is required"}]},this.isListAvaliable()}return r(e,[{key:"ngOnInit",value:function(){this.permissionInfo=this.util.permissionRoleInfo,this.departmentDataValidate(),this.departmentName(),-1===this.permissionInfo.search("Create Department")&&this.DepartmentForm.disable()}},{key:"departmentDataValidate",value:function(){try{this.DepartmentForm=this.fb.group({title:new D.f("",D.v.required),description:new D.f(""),branchId:new D.f("",D.v.required)})}catch(t){console.log(t)}}},{key:"submitDepatmentData",value:function(){var t=this;try{var e=this.util.cleanFormLevelOne(this.DepartmentForm);this.api.addDepatment(e.value,this.branchId).subscribe((function(e){"success"===e.status||200===e.status?(t.successMessage=!0,t.errorMsg=!1,t.successMsg=e.message,setTimeout((function(){t.handleErrors(),t.ngZone.run((function(){return t.router.navigateByUrl("/pages/department/list-department")}))}),1500)):"error"==e.status&&(t.errorMsg=!0,t.successMessage=!1,t.errMsg=e.message,setTimeout((function(){t.handleErrors()}),3e3))}))}catch(r){console.log(r)}}},{key:"departmentName",value:function(){var t=this;this.api.DepartmentList().subscribe((function(e){t.departmentNameList=e.branch}))}},{key:"onClick",value:function(t){this.branchId=t}},{key:"handleErrors",value:function(){this.errorMsg=!1,this.successMessage=!1,this.errMsg="",this.successMsg=""}},{key:"isListAvaliable",value:function(){var t=this;try{this.api.getDepartment().subscribe((function(e){"success"===e.status&&e.data.length>0&&1!==t.util.departmentSatus&&(t.router.navigateByUrl("/pages/department/list-department"),t.util.departmentSatus=0)}))}catch(e){console.log(e)}}}]),e}(),L.\u0275fac=function(t){return new(t||L)(b.Tb(D.e),b.Tb(v),b.Tb(c.b),b.Tb(b.E),b.Tb(c.a),b.Tb(y.a))},L.\u0275cmp=b.Nb({type:L,selectors:[["app-add-department"]],decls:47,vars:7,consts:[[1,"card","card-user"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["role","form","novalidate","",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md"],[1,"form-group"],[1,"col-sm-6","control-label"],[2,"color","darkred"],["Name","branchId","formControlName","branchId",1,"dropdown","dropdown-toggle","form-control",3,"change"],["ng-selected","true","value","","disabled","","selected","",1,"dropdown-item"],["class","dropdown-item",3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["type","text","id","title","placeholder","Enter Title","formControlName","title",1,"form-control"],["type","text","id","description","placeholder","Enter Description","formControlName","description",1,"form-control"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button","routerLink","../list-department",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"dropdown-item",3,"value"],["style","color:\xa0red;margin-left:\xa014px;",4,"ngIf"],[2,"color","red","margin-left","14px"]],template:function(t,e){1&t&&(b.Zb(0,"div",0),b.Zb(1,"div",1),b.Zb(2,"h2",2),b.Ic(3,"Department Details"),b.Yb(),b.Yb(),b.Zb(4,"div",3),b.Zb(5,"div",4),b.Gc(6,M,3,1,"p",5),b.Yb(),b.Zb(7,"div",4),b.Gc(8,k,3,1,"p",6),b.Yb(),b.Zb(9,"form",7),b.gc("ngSubmit",(function(){return e.submitDepatmentData()})),b.Zb(10,"div",8),b.Zb(11,"div",9),b.Zb(12,"div",10),b.Zb(13,"label",11),b.Zb(14,"b"),b.Ic(15,"Branch-Name :\xa0"),b.Zb(16,"span",12),b.Ic(17,"*"),b.Yb(),b.Yb(),b.Yb(),b.Zb(18,"select",13),b.gc("change",(function(t){return e.onClick(t.target.value)})),b.Zb(19,"option",14),b.Ic(20,"----------Select Branch----------"),b.Yb(),b.Gc(21,w,2,2,"option",15),b.Yb(),b.Gc(22,T,2,1,"div",16),b.Yb(),b.Yb(),b.Zb(23,"div",9),b.Zb(24,"div",10),b.Ic(25," \xa0"),b.Zb(26,"label",11),b.Zb(27,"b"),b.Ic(28,"Title:\xa0"),b.Zb(29,"span",12),b.Ic(30,"*"),b.Yb(),b.Yb(),b.Yb(),b.Zb(31,"div",4),b.Ub(32,"input",17),b.Gc(33,U,2,1,"div",16),b.Yb(),b.Yb(),b.Yb(),b.Zb(34,"div",9),b.Zb(35,"div",10),b.Zb(36,"label",11),b.Zb(37,"b"),b.Ic(38,"Enter Description :"),b.Yb(),b.Yb(),b.Zb(39,"div",4),b.Ub(40,"input",18),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Zb(41,"div",10),b.Zb(42,"div",19),b.Zb(43,"button",20),b.Ic(44,"Submit"),b.Yb(),b.Zb(45,"button",21),b.Ic(46,"Cancel"),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb()),2&t&&(b.Hb(6),b.pc("ngIf",e.errorMsg),b.Hb(2),b.pc("ngIf",e.successMessage),b.Hb(1),b.pc("formGroup",e.DepartmentForm),b.Hb(12),b.pc("ngForOf",e.departmentNameList),b.Hb(1),b.pc("ngForOf",e.validationMessage.branchId),b.Hb(11),b.pc("ngForOf",e.validationMessage.title),b.Hb(10),b.pc("disabled",e.DepartmentForm.invalid))},directives:[o.m,D.x,D.o,D.i,D.u,D.n,D.g,D.q,D.w,o.l,D.c,c.c],encapsulation:2}),L)},{path:"update-department/:id/:userId",component:(C=function(){function e(r,n,a,i,s,o){var c=this;t(this,e),this.fb=r,this.api=n,this.router=a,this.ngZone=i,this.route=s,this.util=o,this.successMessage=!1,this.errorMsg=!1,this.validationMessage={title:[{type:"required",message:"Title is required"}]};var b=this.route.snapshot.paramMap.get("id");this.util.moduleExists(b,"Department").subscribe((function(t){"success"===t.status&&(t.data||c.router.navigateByUrl("/pages/department/list-department"))}))}return r(e,[{key:"ngOnInit",value:function(){this.permissionInfo=this.util.permissionRoleInfo,this.userId=this.route.snapshot.paramMap.get("id"),this.branchId=this.route.snapshot.paramMap.get("userId"),this.departmentDataValidate(),this.existingData(),-1===this.permissionInfo.search("Edit Department")&&this.DepartmentUpdateForm.disable()}},{key:"existingData",value:function(){var t=this;this.api.getDepartmentDetails(this.userId).subscribe((function(e){"success"==e.status&&(t.departmentData=e.data,t.DepartmentUpdateForm=t.fb.group({title:new D.f(t.departmentData.title,D.v.required),description:new D.f(t.departmentData.description)}))}))}},{key:"departmentDataValidate",value:function(){try{this.DepartmentUpdateForm=this.fb.group({title:new D.f("",D.v.required),description:new D.f("")})}catch(t){console.log(t)}}},{key:"updateDepartment",value:function(){var t=this;try{var e=this.util.cleanFormLevelOne(this.DepartmentUpdateForm);this.DepartmentUpdateForm.valid&&this.api.updateDepartment(e.value,this.branchId,this.userId).subscribe((function(e){"success"===e.status||200===e.status?(t.successMessage=!0,t.errorMsg=!1,t.successMsg=e.message,setTimeout((function(){t.handleErrors(),t.router.navigateByUrl("/pages/department/list-department")}),2e3)):"error"!==e.status&&404!==e.status||(t.errorMsg=!0,t.successMessage=!1,t.errMsg=e.message,setTimeout((function(){t.handleErrors()}),3e3))}))}catch(r){console.log(r)}}},{key:"handleErrors",value:function(){this.errorMsg=!1,this.successMessage=!1,this.errMsg="",this.successMsg=""}}]),e}(),C.\u0275fac=function(t){return new(t||C)(b.Tb(D.e),b.Tb(v),b.Tb(c.b),b.Tb(b.E),b.Tb(c.a),b.Tb(y.a))},C.\u0275cmp=b.Nb({type:C,selectors:[["app-update-department"]],decls:31,vars:5,consts:[[1,"card","card-user"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["role","form","novalidate","",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-sm-6","control-label"],[2,"color","darkred"],["type","text","id","title","placeholder","Enter Title","formControlName","title",1,"form-control"],[4,"ngFor","ngForOf"],["type","text","id","description","placeholder","Enter Description","formControlName","description",1,"form-control"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button","routerLink","../../../list-department",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],["style","color:\xa0red;margin-left:\xa014px;",4,"ngIf"],[2,"color","red","margin-left","14px"]],template:function(t,e){1&t&&(b.Zb(0,"div",0),b.Zb(1,"div",1),b.Zb(2,"h2",2),b.Ic(3,"Update Department"),b.Yb(),b.Yb(),b.Zb(4,"div",3),b.Zb(5,"div",4),b.Gc(6,E,3,1,"p",5),b.Yb(),b.Zb(7,"div",4),b.Gc(8,O,3,1,"p",6),b.Yb(),b.Zb(9,"form",7),b.gc("ngSubmit",(function(){return e.updateDepartment()})),b.Zb(10,"div",8),b.Zb(11,"label",9),b.Zb(12,"b"),b.Ic(13,"Title:\xa0"),b.Zb(14,"span",10),b.Ic(15,"*"),b.Yb(),b.Yb(),b.Yb(),b.Zb(16,"div",4),b.Ub(17,"input",11),b.Gc(18,j,2,1,"div",12),b.Yb(),b.Yb(),b.Zb(19,"div",8),b.Zb(20,"label",9),b.Zb(21,"b"),b.Ic(22,"Description: "),b.Yb(),b.Yb(),b.Zb(23,"div",4),b.Ub(24,"input",13),b.Yb(),b.Yb(),b.Zb(25,"div",8),b.Zb(26,"div",14),b.Zb(27,"button",15),b.Ic(28,"Update"),b.Yb(),b.Zb(29,"button",16),b.Ic(30,"Cancel"),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb()),2&t&&(b.Hb(6),b.pc("ngIf",e.errorMsg),b.Hb(2),b.pc("ngIf",e.successMessage),b.Hb(1),b.pc("formGroup",e.DepartmentUpdateForm),b.Hb(9),b.pc("ngForOf",e.validationMessage.title),b.Hb(9),b.pc("disabled",e.DepartmentUpdateForm.invalid||-1===e.permissionInfo.search("Edit Department")))},directives:[o.m,D.x,D.o,D.i,D.c,D.n,D.g,o.l,c.c],encapsulation:2}),C)},{path:"",redirectTo:"list-department",pathMatch:"full"}]}],S=((G=function e(){t(this,e)}).\u0275mod=b.Rb({type:G}),G.\u0275inj=b.Qb({factory:function(t){return new(t||G)},imports:[[o.c,c.f.forChild(B)]]}),G),q=((N=function e(){t(this,e)}).\u0275mod=b.Rb({type:N}),N.\u0275inj=b.Qb({factory:function(t){return new(t||N)},imports:[[o.c,S,D.j,D.s,c.f]]}),N)}}])}();
//# sourceMappingURL=15-es5.97758f367779f51e73ec.js.map