(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ka8b:function(e,t,s){"use strict";s.r(t),s.d(t,"LeavetypesModule",(function(){return x}));var a=s("ofXK"),i=s("tyNb"),r=s("fXoL");let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Nb({type:e,selectors:[["app-leave-types"]],decls:1,vars:0,template:function(e,t){1&e&&r.Ub(0,"router-outlet")},directives:[i.g],styles:[""]}),e})();var c=s("CG1p"),n=s("PSD3"),l=s.n(n),b=s("wZQ7"),p=s("cnwL");function d(e,t){1&e&&(r.Zb(0,"td"),r.Ub(1,"i",12),r.Yb())}function u(e,t){1&e&&(r.Zb(0,"td"),r.Ub(1,"i",13),r.Yb())}function v(e,t){if(1&e){const e=r.ac();r.Zb(0,"tbody"),r.Zb(1,"tr"),r.Zb(2,"td"),r.Zb(3,"b"),r.Ic(4),r.Yb(),r.Yb(),r.Zb(5,"td"),r.Ic(6),r.Yb(),r.Zb(7,"td"),r.Ic(8),r.Yb(),r.Gc(9,d,2,0,"td",7),r.Gc(10,u,2,0,"td",7),r.Zb(11,"td"),r.Zb(12,"a",8),r.Ub(13,"i",9),r.Yb(),r.Ic(14,"\xa0 "),r.Zb(15,"button",10),r.gc("click",(function(){r.Bc(e);const s=t.$implicit;return r.jc().showConfirmationMessage(s._id)})),r.Ub(16,"i",11),r.Yb(),r.Yb(),r.Yb(),r.Yb()}if(2&e){const e=t.$implicit,s=t.index,a=r.jc();r.Hb(4),r.Kc("",s+1,"."),r.Hb(2),r.Jc(e.leaveTypeName),r.Hb(2),r.Jc(e.leaveTypeCode),r.Hb(1),r.pc("ngIf",e.isPaid),r.Hb(1),r.pc("ngIf",!e.isPaid),r.Hb(2),r.Lb("disabled",-1===a.permissionInfo.search("Edit LeaveType")),r.rc("routerLink","/pages/leave-types/update-leave-type/",e._id,""),r.Hb(3),r.pc("disabled",-1===a.permissionInfo.search("Delete LeaveType"))}}let m=(()=>{class e{constructor(e,t,s,a){this.api=e,this.route=t,this._Activatedroute=s,this.util=a,this.showCard={},this.leaveListData=[],this.companyShowData=[]}ngOnInit(){this.permissionInfo=this.util.permissionRoleInfo,this.leaveList()}leaveList(){try{this.api.getListData().subscribe(e=>{if("success"===e.status||200===e.status)if(this.leaveListData=e.leaveTypes,0==e.leaveTypes.length)this.route.navigateByUrl("/pages/leave-types/add-leave-types");else{const e=Object.keys(this.leaveListData).length;for(var t=0;t<e;t++)this.showCard[this.leaveListData[t]._id]=!0}})}catch(e){console.log(e.message)}}showData(e){this.showCard[""+e]=!this.showCard[""+e]}showConfirmationMessage(e){const t=l.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});t.fire({title:"Are you sure?",text:"You want to delete it",type:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then(s=>{s.value?this.api.removeData(e).subscribe(e=>{"success"!==e.status&&200!==e.status||(t.fire("Deleted!",e.message,"success"),this.leaveList())}):s.dismiss===l.a.DismissReason.cancel&&t.fire("Cancelled","Your list data safe","error")})}addLeaveTypes(){try{this.util.leaveStatus=1}catch(e){console.log(e)}}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(b.a),r.Tb(i.b),r.Tb(i.a),r.Tb(p.a))},e.\u0275cmp=r.Nb({type:e,selectors:[["app-list-leave-types"]],decls:21,vars:2,consts:[[1,"card"],[1,"card-header",2,"text-align","center"],["type","button","routerLink","/pages/leave-types/add-leave-types",1,"btn","btn-primary",2,"float","right",3,"disabled","click"],[1,"fa","fa-plus-square"],[1,"table",2,"text-align","center"],[1,"text-primary"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"btn","btn-primary",3,"routerLink"],[1,"fa","fa-pencil-square-o"],["type","button",1,"btn","btn-danger",3,"disabled","click"],[1,"fa","fa-trash"],[1,"fa","fa-check",2,"color","green","font-size","25px"],[1,"fa","fa-times",2,"color","red","font-size","25px"]],template:function(e,t){1&e&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"h2"),r.Ic(3,"Leave Types"),r.Yb(),r.Zb(4,"button",2),r.gc("click",(function(){return t.addLeaveTypes()})),r.Ub(5,"i",3),r.Ic(6,"\xa0 Add Leave Type"),r.Yb(),r.Yb(),r.Zb(7,"table",4),r.Zb(8,"thead",5),r.Zb(9,"tr"),r.Zb(10,"th"),r.Ic(11,"S.No"),r.Yb(),r.Zb(12,"th"),r.Ic(13,"Name"),r.Yb(),r.Zb(14,"th"),r.Ic(15,"Code"),r.Yb(),r.Zb(16,"th"),r.Ic(17,"Is Paid"),r.Yb(),r.Zb(18,"th"),r.Ic(19,"Action"),r.Yb(),r.Yb(),r.Yb(),r.Gc(20,v,17,9,"tbody",6),r.Yb(),r.Yb()),2&e&&(r.Hb(4),r.pc("disabled",-1===t.permissionInfo.search("Create LeaveType")),r.Hb(16),r.pc("ngForOf",t.leaveListData))},directives:[i.c,a.l,a.m,i.e],encapsulation:2}),e})();var h=s("3Pt+"),g=s("H+bZ");function f(e,t){if(1&e&&(r.Zb(0,"p",18),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&e){const e=r.jc();r.Hb(2),r.Jc(e.errMsg)}}function y(e,t){if(1&e&&(r.Zb(0,"p",19),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&e){const e=r.jc();r.Hb(2),r.Jc(e.successMsg)}}function Z(e,t){if(1&e&&(r.Zb(0,"div",21),r.Ic(1),r.Yb()),2&e){const e=r.jc().$implicit;r.Hb(1),r.Kc(" ",e.message," ")}}function Y(e,t){if(1&e&&(r.Zb(0,"div"),r.Gc(1,Z,2,1,"div",20),r.Yb()),2&e){const e=t.$implicit,s=r.jc();r.Hb(1),r.pc("ngIf",s.leaveForm.get("leaveTypeName").hasError(e.type)&&(s.leaveForm.get("leaveTypeName").dirty||s.leaveForm.get("leaveTypeName").touched))}}function T(e,t){if(1&e&&(r.Zb(0,"div",21),r.Ic(1),r.Yb()),2&e){const e=r.jc().$implicit;r.Hb(1),r.Kc(" ",e.message," ")}}function I(e,t){if(1&e&&(r.Zb(0,"div"),r.Gc(1,T,2,1,"div",20),r.Yb()),2&e){const e=t.$implicit,s=r.jc();r.Hb(1),r.pc("ngIf",s.leaveForm.get("leaveTypeCode").hasError(e.type)&&(s.leaveForm.get("leaveTypeCode").dirty||s.leaveForm.get("leaveTypeCode").touched))}}function L(e,t){if(1&e&&(r.Zb(0,"p",19),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&e){const e=r.jc();r.Hb(2),r.Jc(e.errMsg)}}function M(e,t){if(1&e&&(r.Zb(0,"p",20),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&e){const e=r.jc();r.Hb(2),r.Jc(e.successMsg)}}function C(e,t){if(1&e&&(r.Zb(0,"div",22),r.Ic(1),r.Yb()),2&e){const e=r.jc().$implicit;r.Hb(1),r.Kc(" ",e.message," ")}}function N(e,t){if(1&e&&(r.Zb(0,"div"),r.Gc(1,C,2,1,"div",21),r.Yb()),2&e){const e=t.$implicit,s=r.jc();r.Hb(1),r.pc("ngIf",s.leaveForm1.get("leaveTypeName").hasError(e.type)&&(s.leaveForm1.get("leaveTypeName").dirty||s.leaveForm1.get("leaveTypeName").touched))}}function F(e,t){if(1&e&&(r.Zb(0,"div",22),r.Ic(1),r.Yb()),2&e){const e=r.jc().$implicit;r.Hb(1),r.Kc(" ",e.message," ")}}function w(e,t){if(1&e&&(r.Zb(0,"div"),r.Gc(1,F,2,1,"div",21),r.Yb()),2&e){const e=t.$implicit,s=r.jc();r.Hb(1),r.pc("ngIf",s.leaveForm1.get("leaveTypeCode").hasError(e.type)&&(s.leaveForm1.get("leaveTypeCode").dirty||s.leaveForm1.get("leaveTypeCode").touched))}}const H=[{path:"",component:o,canActivate:[c.a],children:[{path:"list-leave-types",component:m},{path:"add-leave-types",component:(()=>{class e{constructor(e,t,s,a,i,r){this._api=e,this.fb=t,this.ngZone=s,this.router=a,this.api=i,this.util=r,this.successMsg=String,this.successMessage=!1,this.errMsg=String,this.errorMsg=!1,this.companyListData=Object,this.companyName=[],this.validationMessage={leaveTypeName:[{type:"required",message:"Name is required"}],leaveTypeCode:[{type:"required",message:"Code is required"}]},this.isListAvaliable()}ngOnInit(){this.permissionInfo=this.util.permissionRoleInfo,this.companyDataValidate(),-1===this.permissionInfo.search("Create LeaveType")&&this.leaveForm.disable()}companyDataValidate(){try{this.leaveForm=this.fb.group({leaveTypeName:new h.f("",h.v.required),leaveTypeCode:new h.f("",h.v.required),isPaid:new h.f(!1)})}catch(e){console.log(e)}}leaveFormData(){try{let e=this.util.cleanFormLevelOne(this.leaveForm);this.leaveForm.value&&this.api.leaveDataSubmit(e.value).subscribe(e=>{"success"===e.status||200===e.status?(this.successMessage=!0,this.errorMsg=!1,this.successMsg=e.message,setTimeout(()=>{this.handleErrors(),this.ngZone.run(()=>this.router.navigateByUrl("/pages/leave-types/list-leave-types"))},2e3)):"error"!==e.status&&404!==e.status||(this.errorMsg=!0,this.successMessage=!1,this.errMsg=e.message,setTimeout(()=>{this.handleErrors()},3e3))})}catch(e){console.log(e)}}handleErrors(){this.errorMsg=!1,this.successMessage=!1,this.errMsg="",this.successMsg=""}isListAvaliable(){try{this.api.getListData().subscribe(e=>{"success"===e.status&&e.leaveTypes.length>0&&1!==this.util.leaveStatus&&(this.router.navigateByUrl("/pages/leave-types/list-leave-types"),this.util.leaveStatus=0)})}catch(e){console.log(e)}}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(g.a),r.Tb(h.e),r.Tb(r.E),r.Tb(i.b),r.Tb(b.a),r.Tb(p.a))},e.\u0275cmp=r.Nb({type:e,selectors:[["app-add-leave-types"]],decls:42,vars:6,consts:[[1,"card","card-user"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["novalidate","",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-sm-6","control-label"],[2,"color","darkred"],["type","text","id","inputName","placeholder","Enter Name","formControlName","leaveTypeName","required","",1,"form-control"],[4,"ngFor","ngForOf"],["type","text","id","inputName","placeholder","Enter Code","formControlName","leaveTypeCode","required","",1,"form-control"],["type","checkbox","formControlName","isPaid"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button","routerLink","../list-leave-types",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],["style","color:\xa0red;margin-left:\xa014px;",4,"ngIf"],[2,"color","red","margin-left","14px"]],template:function(e,t){1&e&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"h2",2),r.Ic(3,"Leave Type Details"),r.Yb(),r.Yb(),r.Zb(4,"div",3),r.Zb(5,"div",4),r.Gc(6,f,3,1,"p",5),r.Yb(),r.Zb(7,"div",4),r.Gc(8,y,3,1,"p",6),r.Yb(),r.Zb(9,"form",7),r.gc("ngSubmit",(function(){return t.leaveFormData()})),r.Zb(10,"div",8),r.Ic(11," \xa0"),r.Zb(12,"label",9),r.Zb(13,"b"),r.Ic(14,"Leave Type Name: "),r.Zb(15,"span",10),r.Ic(16,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(17,"div",4),r.Ub(18,"input",11),r.Gc(19,Y,2,1,"div",12),r.Yb(),r.Yb(),r.Zb(20,"div",8),r.Ic(21," \xa0"),r.Zb(22,"label",9),r.Zb(23,"b"),r.Ic(24,"Leave Type Code: "),r.Zb(25,"span",10),r.Ic(26,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(27,"div",4),r.Ub(28,"input",13),r.Gc(29,I,2,1,"div",12),r.Yb(),r.Yb(),r.Zb(30,"div",8),r.Zb(31,"div",4),r.Zb(32,"label"),r.Zb(33,"b"),r.Ic(34,"Is Paid: "),r.Yb(),r.Yb(),r.Ub(35,"input",14),r.Yb(),r.Yb(),r.Zb(36,"div",8),r.Zb(37,"div",15),r.Zb(38,"button",16),r.Ic(39,"Submit"),r.Yb(),r.Zb(40,"button",17),r.Ic(41,"Cancel"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&e&&(r.Hb(6),r.pc("ngIf",t.errorMsg),r.Hb(2),r.pc("ngIf",t.successMessage),r.Hb(1),r.pc("formGroup",t.leaveForm),r.Hb(10),r.pc("ngForOf",t.validationMessage.leaveTypeName),r.Hb(10),r.pc("ngForOf",t.validationMessage.leaveTypeCode),r.Hb(9),r.pc("disabled",t.leaveForm.invalid||-1===t.permissionInfo.search("Create LeaveType")))},directives:[a.m,h.x,h.o,h.i,h.c,h.n,h.g,h.t,a.l,h.b,i.c],encapsulation:2}),e})()},{path:"update-leave-type/:leaveTypeId",component:(()=>{class e{constructor(e,t,s,a,i,r){this.fb=e,this.router=t,this.ngZone=s,this.route=a,this.api=i,this.util=r,this.successMsg=String,this.successMessage=!1,this.errMsg=String,this.errorMsg=!1,this.companyNameStore=[],this.companyName=[],this.leaveData=[],this.leaveFormData=Object,this.validationMessage={leaveTypeName:[{type:"required",message:"Name is required"}],leaveTypeCode:[{type:"required",message:"Code is required"}]},this.leaveTypeId=this.route.snapshot.paramMap.get("leaveTypeId"),this.util.moduleExists(this.leaveTypeId,"LeaveTypes").subscribe(e=>{"success"===e.status&&(e.data||this.router.navigateByUrl("/pages/leave-types/list-leave-types"))})}ngOnInit(){this.permissionInfo=this.util.permissionRoleInfo,this.companyDataValidate(),this.existingLeaveTypeValues(),-1===this.permissionInfo.search("Edit LeaveType")&&this.leaveForm1.disable()}companyDataValidate(){try{this.leaveForm1=this.fb.group({leaveTypeName:new h.f("",h.v.required),leaveTypeCode:new h.f("",h.v.required),isPaid:new h.f(!1)})}catch(e){console.log(e.message)}}existingLeaveTypeValues(){try{this.api.leaveTypeDetails(this.leaveTypeId).subscribe(e=>{"success"!==e.status&&200!==e.status||(this.existingData=e.data,this.leaveForm1=this.fb.group({leaveTypeName:new h.f(this.existingData.leaveTypeName,h.v.required),leaveTypeCode:new h.f(this.existingData.leaveTypeCode,h.v.required),isPaid:new h.f(this.existingData.isPaid)}))})}catch(e){console.log(e)}}updateLeaveFormData(){try{let e=this.util.cleanFormLevelOne(this.leaveForm1);this.leaveForm1.value&&this.api.updateLeaveType(e.value,this.leaveTypeId).subscribe(e=>{"success"===e.status||200===e.status?(this.successMessage=!0,this.errorMsg=!1,this.successMsg=e.message,setTimeout(()=>{this.handleErrors(),this.ngZone.run(()=>this.router.navigateByUrl("/pages/leave-types/list-leave-types"))},2e3)):"error"==e.status&&(this.errorMsg=!0,this.successMessage=!1,this.errMsg=e.message,setTimeout(()=>{this.handleErrors()},3e3))})}catch(e){console.log(e.message)}}handleErrors(){this.errorMsg=!1,this.successMessage=!1,this.errMsg="",this.successMsg=""}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(h.e),r.Tb(i.b),r.Tb(r.E),r.Tb(i.a),r.Tb(b.a),r.Tb(p.a))},e.\u0275cmp=r.Nb({type:e,selectors:[["app-update-leave-type"]],decls:39,vars:6,consts:[[1,"card","card-user"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-sm-6","control-label"],[2,"color","darkred"],["type","text","id","inputName","placeholder","Enter Name","formControlName","leaveTypeName",1,"form-control"],[4,"ngFor","ngForOf"],["type","text","id","inputName1","placeholder","Enter Code","formControlName","leaveTypeCode",1,"form-control"],[1,"control-label"],["type","checkbox","formControlName","isPaid"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button","routerLink","../../list-leave-types",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],["style","color:\xa0red;margin-left:\xa014px;",4,"ngIf"],[2,"color","red","margin-left","14px"]],template:function(e,t){1&e&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"h2",2),r.Ic(3,"Update Leave Type"),r.Yb(),r.Yb(),r.Zb(4,"div",3),r.Zb(5,"div",4),r.Gc(6,L,3,1,"p",5),r.Yb(),r.Zb(7,"div",4),r.Gc(8,M,3,1,"p",6),r.Yb(),r.Zb(9,"form",7),r.gc("ngSubmit",(function(){return t.updateLeaveFormData()})),r.Zb(10,"div",8),r.Zb(11,"label",9),r.Zb(12,"b"),r.Ic(13,"Leave Type Name: "),r.Zb(14,"span",10),r.Ic(15,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(16,"div",4),r.Ub(17,"input",11),r.Gc(18,N,2,1,"div",12),r.Yb(),r.Yb(),r.Zb(19,"div",8),r.Zb(20,"label",9),r.Zb(21,"b"),r.Ic(22,"Leave Type Code: "),r.Zb(23,"span",10),r.Ic(24,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(25,"div",4),r.Ub(26,"input",13),r.Gc(27,w,2,1,"div",12),r.Yb(),r.Yb(),r.Zb(28,"div",8),r.Zb(29,"label",14),r.Zb(30,"b"),r.Ic(31,"Is Paid:"),r.Yb(),r.Yb(),r.Ub(32,"input",15),r.Yb(),r.Zb(33,"div",8),r.Zb(34,"div",16),r.Zb(35,"button",17),r.Ic(36,"Update"),r.Yb(),r.Zb(37,"button",18),r.Ic(38,"Cancel"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&e&&(r.Hb(6),r.pc("ngIf",t.errorMsg),r.Hb(2),r.pc("ngIf",t.successMessage),r.Hb(1),r.pc("formGroup",t.leaveForm1),r.Hb(9),r.pc("ngForOf",t.validationMessage.leaveTypeName),r.Hb(9),r.pc("ngForOf",t.validationMessage.leaveTypeCode),r.Hb(8),r.pc("disabled",-1===t.permissionInfo.search("Edit LeaveType")||t.leaveForm1.invalid))},directives:[a.m,h.x,h.o,h.i,h.c,h.n,h.g,a.l,h.b,i.c],encapsulation:2}),e})()},{path:"",redirectTo:"list-leave-types",pathMatch:"full"}]}];let D=(()=>{class e{}return e.\u0275mod=r.Rb({type:e}),e.\u0275inj=r.Qb({factory:function(t){return new(t||e)},imports:[[a.c,i.f.forChild(H)]]}),e})(),x=(()=>{class e{}return e.\u0275mod=r.Rb({type:e}),e.\u0275inj=r.Qb({factory:function(t){return new(t||e)},imports:[[a.c,D,h.j,h.s,i.f]]}),e})()}}]);
//# sourceMappingURL=23-es2015.b7bfb91168faa69f3918.js.map