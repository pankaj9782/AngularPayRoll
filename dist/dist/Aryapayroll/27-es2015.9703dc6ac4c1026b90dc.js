(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Fufc:function(t,s,e){"use strict";e.r(s),e.d(s,"SkillCategoryModule",(function(){return H}));var i=e("ofXK"),a=e("tyNb"),r=e("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=r.Nb({type:t,selectors:[["app-skill-category"]],decls:1,vars:0,template:function(t,s){1&t&&r.Ub(0,"router-outlet")},directives:[a.g],styles:[""]}),t})();var l=e("CG1p"),c=e("PSD3"),n=e.n(c),b=e("fuoZ"),g=e("cnwL");function u(t,s){if(1&t){const t=r.ac();r.Zb(0,"tbody"),r.Zb(1,"tr"),r.Zb(2,"td"),r.Zb(3,"b"),r.Ic(4),r.Yb(),r.Yb(),r.Zb(5,"td"),r.Ic(6),r.Yb(),r.Zb(7,"td"),r.Zb(8,"a",7),r.Ub(9,"i",8),r.Yb(),r.Ic(10,"\xa0 "),r.Zb(11,"button",9),r.gc("click",(function(){r.Bc(t);const e=s.$implicit;return r.jc().showConfirmationMessage(e._id)})),r.Ub(12,"i",10),r.Yb(),r.Yb(),r.Yb(),r.Yb()}if(2&t){const t=s.$implicit,e=s.index,i=r.jc();r.Hb(4),r.Kc("",e+1,"."),r.Hb(2),r.Kc(" ",t.skillName," "),r.Hb(2),r.Lb("disabled",-1===i.permissionInfo.search("Edit SkillCategory")),r.rc("routerLink","/pages/skill-category/update-skill-category/",null==t?null:t._id,""),r.Hb(3),r.pc("disabled",-1===i.permissionInfo.search("Delete SkillCategory"))}}let d=(()=>{class t{constructor(t,s,e,i){this.api=t,this.route=s,this._Activatedroute=e,this.util=i,this.showCard={},this.leaveListData=[],this.companyShowData=[]}ngOnInit(){this.leaveList(),this.permissionInfo=this.util.permissionRoleInfo}leaveList(){try{this.api.skillCategoryData().subscribe(t=>{"success"!==t.status&&200!==t.status||(this.leaveListData=t.skillCategory,0==this.leaveListData.length&&this.route.navigateByUrl("/pages/skill-category/add-skill-category"))})}catch(t){console.log(t.message)}}showConfirmationMessage(t){const s=n.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});s.fire({title:"Are you sure?",text:"You want to delete it",type:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then(e=>{e.value?this.api.removeData(t).subscribe(t=>{"success"!==t.status&&200!==t.status||(s.fire("Deleted!",t.message,"success"),this.leaveList())}):e.dismiss===n.a.DismissReason.cancel&&s.fire("Cancelled","Your list data safe","error")})}addSkillCategory(){try{this.util.skillCategoryStatus=1}catch(t){console.log(t)}}}return t.\u0275fac=function(s){return new(s||t)(r.Tb(b.a),r.Tb(a.b),r.Tb(a.a),r.Tb(g.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["app-list-skill-category"]],decls:15,vars:2,consts:[[1,"card"],[1,"card-header",2,"text-align","center"],["type","button","routerLink","/pages/skill-category/add-skill-category",1,"btn","btn-primary",2,"float","right",3,"disabled","click"],[1,"fa","fa-plus-square"],[1,"table",2,"text-align","center"],[1,"text-primary"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"routerLink"],[1,"fa","fa-pencil-square-o"],["type","button",1,"btn","btn-danger",3,"disabled","click"],[1,"fa","fa-trash"]],template:function(t,s){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"h2"),r.Ic(3,"Skill Category"),r.Yb(),r.Zb(4,"button",2),r.gc("click",(function(){return s.addSkillCategory()})),r.Ub(5,"i",3),r.Ic(6,"\xa0 Add skill Category"),r.Yb(),r.Yb(),r.Zb(7,"table",4),r.Zb(8,"thead",5),r.Zb(9,"tr"),r.Zb(10,"th"),r.Ic(11," S.No "),r.Yb(),r.Zb(12,"th"),r.Ic(13," Skill Name "),r.Yb(),r.Yb(),r.Yb(),r.Gc(14,u,13,6,"tbody",6),r.Yb(),r.Yb()),2&t&&(r.Hb(4),r.pc("disabled",-1===s.permissionInfo.search("Create SkillCategory")),r.Hb(10),r.pc("ngForOf",s.leaveListData))},directives:[a.c,i.l,a.e],encapsulation:2}),t})();var m=e("3Pt+"),p=e("H+bZ"),h=e("VFOk");function f(t,s){if(1&t&&(r.Zb(0,"p",21),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&t){const t=r.jc();r.Hb(2),r.Jc(t.errMsg)}}function y(t,s){if(1&t&&(r.Zb(0,"p",22),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&t){const t=r.jc();r.Hb(2),r.Jc(t.successMsg)}}function k(t,s){if(1&t&&(r.Zb(0,"option",23),r.Ic(1),r.Yb()),2&t){const t=s.$implicit;r.pc("ngValue",t._id),r.Hb(1),r.Kc(" ",t.categoryName," ")}}function v(t,s){if(1&t&&(r.Zb(0,"div",25),r.Ic(1),r.Yb()),2&t){const t=r.jc().$implicit;r.Hb(1),r.Kc(" ",t.message," ")}}function Z(t,s){if(1&t&&(r.Zb(0,"div"),r.Gc(1,v,2,1,"div",24),r.Yb()),2&t){const t=s.$implicit,e=r.jc();r.Hb(1),r.pc("ngIf",e.skillForm.get("categoryId").hasError(t.type)&&(e.skillForm.get("categoryId").dirty||e.skillForm.get("categoryId").touched))}}function Y(t,s){if(1&t&&(r.Zb(0,"div",25),r.Ic(1),r.Yb()),2&t){const t=r.jc().$implicit;r.Hb(1),r.Kc(" ",t.message," ")}}function I(t,s){if(1&t&&(r.Zb(0,"div"),r.Gc(1,Y,2,1,"div",24),r.Yb()),2&t){const t=s.$implicit,e=r.jc();r.Hb(1),r.pc("ngIf",e.skillForm.get("skillName").hasError(t.type)&&(e.skillForm.get("skillName").dirty||e.skillForm.get("skillName").touched))}}function C(t,s){if(1&t&&(r.Zb(0,"p",16),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&t){const t=r.jc();r.Hb(2),r.Jc(t.errMsg)}}function M(t,s){if(1&t&&(r.Zb(0,"p",17),r.Zb(1,"strong"),r.Ic(2),r.Yb(),r.Yb()),2&t){const t=r.jc();r.Hb(2),r.Jc(t.successMsg)}}function N(t,s){if(1&t&&(r.Zb(0,"div",19),r.Ic(1),r.Yb()),2&t){const t=r.jc().$implicit;r.Hb(1),r.Jc(t.message)}}function S(t,s){if(1&t&&(r.Zb(0,"div"),r.Gc(1,N,2,1,"div",18),r.Yb()),2&t){const t=s.$implicit,e=r.jc();r.Hb(1),r.pc("ngIf",e.skillForm.get("skillName").hasError(t.type)&&(e.skillForm.get("skillName").dirty||e.skillForm.get("skillName").touched))}}const F=[{path:"",component:o,canActivate:[l.a],children:[{path:"list-skill-category",component:d},{path:"add-skill-category",component:(()=>{class t{constructor(t,s,e,i,a,r,o){this._api=t,this.fb=s,this.ngZone=e,this.router=i,this.api=a,this.apiService=r,this.util=o,this.successMsg=String,this.successMessage=!1,this.errMsg=String,this.errorMsg=!1,this.companyListData=[],this.companyName=[],this.demo=["Akshay"],this.validationMessage={skillName:[{type:"required",message:"Skill Name is required"}],categoryId:[{type:"required",message:"Category Name is required"}]},this.isListAvaliable()}ngOnInit(){this.getCategoryList(),this.companyDataValidate(),this.permissionInfo=this.util.permissionRoleInfo,-1===this.permissionInfo.search("Create SkillCategory")&&this.skillForm.disable()}companyDataValidate(){try{this.skillForm=this.fb.group({skillName:new m.f("",m.v.required),categoryId:new m.f("",m.v.required)})}catch(t){console.log(t)}}companyValue(){this._api.getListData().subscribe(t=>{"success"!=t.status&&200!=t.status||(this.companyNameStore=t.company)})}getCategoryList(){try{this.apiService.getJobCategoryData().subscribe(t=>{this.categoryList=t.jobCategory})}catch(t){console.log(t.message)}}onChangeCompany(t){this.companyId=t}skillData(){try{let t=this.util.cleanFormLevelOne(this.skillForm);this.skillForm.value&&this.api.addSkillCategoy(t.value).subscribe(t=>{"success"===t.status||200===t.status?(this.successMessage=!0,this.errorMsg=!1,this.successMsg=t.message,setTimeout(()=>{this.handleErrors(),this.ngZone.run(()=>this.router.navigateByUrl("/pages/skill-category/list-skill-category"))},2e3)):"error"!==t.status&&404!==t.status||(this.errorMsg=!0,this.successMessage=!1,this.errMsg=t.message,setTimeout(()=>{this.handleErrors()},3e3))})}catch(t){console.log(t)}}handleErrors(){this.errorMsg=!1,this.successMessage=!1,this.errMsg="",this.successMsg=""}isListAvaliable(){try{this.api.skillCategoryData().subscribe(t=>{"success"===t.status&&t.skillCategory.length>0&&1!==this.util.skillCategoryStatus&&(this.router.navigateByUrl("/pages/skill-category/list-skill-category"),this.util.skillCategoryStatus=0)})}catch(t){console.log(t)}}}return t.\u0275fac=function(s){return new(s||t)(r.Tb(p.a),r.Tb(m.e),r.Tb(r.E),r.Tb(a.b),r.Tb(b.a),r.Tb(h.a),r.Tb(g.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["app-add-skill-category"]],decls:40,vars:7,consts:[[1,"card","card-user"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["role","form","novalidate","",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md"],[1,"form-group"],[1,"col-sm-6","control-label"],[2,"color","darkred"],["Name","category","formControlName","categoryId",1,"dropdown","dropdown-toggle","form-control"],["ng-selected","true","value","","disabled",""],["class","dropdown-item",3,"ngValue",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["type","text","id","sName","placeholder","Enter Skill Name","formControlName","skillName","required","",1,"form-control"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button","routerLink","../list-skill-category",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[1,"dropdown-item",3,"ngValue"],["style","color:\xa0red;margin-left:\xa014px;","style","color:\xa0red;margin-left:\xa014px;",4,"ngIf"],[2,"color","red","margin-left","14px"]],template:function(t,s){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"h2",2),r.Ic(3,"Skill Category Details"),r.Yb(),r.Yb(),r.Zb(4,"div",3),r.Zb(5,"div",4),r.Gc(6,f,3,1,"p",5),r.Yb(),r.Zb(7,"div",4),r.Gc(8,y,3,1,"p",6),r.Yb(),r.Zb(9,"form",7),r.gc("ngSubmit",(function(){return s.skillData()})),r.Zb(10,"div",8),r.Zb(11,"div",9),r.Zb(12,"div",10),r.Zb(13,"label",11),r.Zb(14,"b"),r.Ic(15,"Category Name: "),r.Zb(16,"span",12),r.Ic(17,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(18,"div",4),r.Zb(19,"select",13),r.Zb(20,"option",14),r.Ic(21,"----- Select Category Name ------"),r.Yb(),r.Gc(22,k,2,2,"option",15),r.Yb(),r.Gc(23,Z,2,1,"div",16),r.Yb(),r.Yb(),r.Yb(),r.Zb(24,"div",9),r.Zb(25,"div",10),r.Zb(26,"label",11),r.Zb(27,"b"),r.Ic(28,"Skill Name: "),r.Zb(29,"span",12),r.Ic(30,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(31,"div",4),r.Ub(32,"input",17),r.Gc(33,I,2,1,"div",16),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(34,"div",10),r.Zb(35,"div",18),r.Zb(36,"button",19),r.Ic(37,"Submit"),r.Yb(),r.Zb(38,"button",20),r.Ic(39,"Cancel"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Hb(6),r.pc("ngIf",s.errorMsg),r.Hb(2),r.pc("ngIf",s.successMessage),r.Hb(1),r.pc("formGroup",s.skillForm),r.Hb(13),r.pc("ngForOf",s.categoryList),r.Hb(1),r.pc("ngForOf",s.validationMessage.categoryId),r.Hb(10),r.pc("ngForOf",s.validationMessage.skillName),r.Hb(3),r.pc("disabled",s.skillForm.invalid))},directives:[i.m,m.x,m.o,m.i,m.u,m.n,m.g,m.q,m.w,i.l,m.c,m.t,a.c],encapsulation:2}),t})()},{path:"update-skill-category/:categoryId",component:(()=>{class t{constructor(t,s,e,i,a,r){this.fb=t,this.router=s,this.ngZone=e,this.route=i,this.api=a,this.util=r,this.successMsg=String,this.successMessage=!1,this.errMsg=String,this.errorMsg=!1,this.companyNameStore=[],this.companyName=[],this.leaveData=[],this.leaveFormData=[],this.validationMessage={skillName:[{type:"required",message:"Skill Name is Required"}]},this.skillCategoryId=this.route.snapshot.paramMap.get("categoryId"),this.util.moduleExists(this.skillCategoryId,"SkillCategory").subscribe(t=>{"success"===t.status&&(t.data||this.router.navigateByUrl("/pages/skill-category/list-skill-category"))})}ngOnInit(){this.companyDataValidate(),this.existingData(),this.permissionInfo=this.util.permissionRoleInfo,-1===this.permissionInfo.search("Edit SkillCategory")&&this.skillForm.disable()}existingData(){this.api.skillCategoryDetails(this.skillCategoryId).subscribe(t=>{this.existinglist=t,this.skillForm=this.fb.group({skillName:new m.f(this.existinglist.data.skillName)})})}companyDataValidate(){try{this.skillForm=this.fb.group({skillName:new m.f("",m.v.required)})}catch(t){console.log(t.message)}}skillDataUpdate(){try{let t=this.util.cleanFormLevelOne(this.skillForm);this.skillForm.value&&this.api.updateSkillCategory(t.value,this.skillCategoryId).subscribe(t=>{"success"===t.status||200===t.status?(this.successMessage=!0,this.errorMsg=!1,this.successMsg=t.message,setTimeout(()=>{this.handleErrors(),this.ngZone.run(()=>this.router.navigateByUrl("/pages/skill-category/list-skill-category"))},2e3)):"error"==t.status&&(this.errorMsg=!0,this.successMessage=!1,this.errMsg=t.message,setTimeout(()=>{this.handleErrors()},3e3))})}catch(t){console.log(t.message)}}handleErrors(){this.errorMsg=!1,this.successMessage=!1,this.errMsg="",this.successMsg=""}}return t.\u0275fac=function(s){return new(s||t)(r.Tb(m.e),r.Tb(a.b),r.Tb(r.E),r.Tb(a.a),r.Tb(b.a),r.Tb(g.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["app-update-skill-category"]],decls:25,vars:5,consts:[[1,"card","card-user"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["role","form","novalidate","",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-sm-6","control-label"],[2,"color","darkred"],["type","text","id","sName","placeholder","Enter Skill Name","formControlName","skillName","required","",1,"form-control"],[4,"ngFor","ngForOf"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button","routerLink","../../list-skill-category",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],["style","color:\xa0red;margin-left:\xa014px;","style","color:\xa0red;margin-left:\xa014px;",4,"ngIf"],[2,"color","red","margin-left","14px"]],template:function(t,s){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"h2",2),r.Ic(3,"Update Skill Category"),r.Yb(),r.Yb(),r.Zb(4,"div",3),r.Zb(5,"div",4),r.Gc(6,C,3,1,"p",5),r.Yb(),r.Zb(7,"div",4),r.Gc(8,M,3,1,"p",6),r.Yb(),r.Zb(9,"form",7),r.gc("ngSubmit",(function(){return s.skillDataUpdate()})),r.Zb(10,"div",8),r.Zb(11,"label",9),r.Zb(12,"b"),r.Ic(13,"Skill Name:"),r.Zb(14,"span",10),r.Ic(15,"*"),r.Yb(),r.Yb(),r.Yb(),r.Zb(16,"div",4),r.Ub(17,"input",11),r.Gc(18,S,2,1,"div",12),r.Yb(),r.Yb(),r.Zb(19,"div",8),r.Zb(20,"div",13),r.Zb(21,"button",14),r.Ic(22,"Update"),r.Yb(),r.Zb(23,"button",15),r.Ic(24,"Cancel"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Hb(6),r.pc("ngIf",s.errorMsg),r.Hb(2),r.pc("ngIf",s.successMessage),r.Hb(1),r.pc("formGroup",s.skillForm),r.Hb(9),r.pc("ngForOf",s.validationMessage.skillName),r.Hb(3),r.pc("disabled",s.skillForm.invalid||-1===s.permissionInfo.search("Edit SkillCategory")))},directives:[i.m,m.x,m.o,m.i,m.c,m.n,m.g,m.t,i.l,a.c],encapsulation:2}),t})()},{path:"",redirectTo:"list-skill-category",pathMatch:"full"}]}];let w=(()=>{class t{}return t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({factory:function(s){return new(s||t)},imports:[[i.c,a.f.forChild(F)]]}),t})(),H=(()=>{class t{}return t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({factory:function(s){return new(s||t)},imports:[[i.c,w,m.j,m.s,a.f]]}),t})()}}]);
//# sourceMappingURL=27-es2015.9703dc6ac4c1026b90dc.js.map