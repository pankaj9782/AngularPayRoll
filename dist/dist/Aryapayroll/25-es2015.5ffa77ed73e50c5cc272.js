(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Q0Id:function(t,e,a){"use strict";a.r(e),a.d(e,"ReportModule",(function(){return v}));var r=a("ofXK"),n=a("tyNb"),s=a("fXoL");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Nb({type:t,selectors:[["app-report"]],decls:1,vars:0,template:function(t,e){1&t&&s.Ub(0,"router-outlet")},directives:[n.g],styles:[""]}),t})();var i=a("CG1p"),o=a("5RHE"),d=a("tk/3"),l=a("JIr8"),p=a("z6cu"),h=a("AytR");let u=(()=>{class t{constructor(t){this.http=t,this.endpoint=h.a.apiBaseUrl,this.headers=(new d.c).set("Contant-Type","application/x-www-form-urlencoded")}errorMgmt(t){try{let e="";return e=t.error instanceof ErrorEvent?t.error.message:`Error code:${t.status}\nMessage:${e}`,console.log(e),Object(p.a)(e)}catch(e){console.log(e.message)}}getPaymentHeadData(){try{const t=sessionStorage.getItem("companyId");return this.http.get(`${this.endpoint}/company/list-payment-heads/${t}`).pipe(Object(l.a)(this.errorMgmt))}catch(t){console.log(t)}}addPaymentHeads(t){try{const e=sessionStorage.getItem("companyId");return this.http.post(`${this.endpoint}/company/add-payment-head/${e}`,t).pipe()}catch(e){console.log(e)}}updatePaymentHeads(t,e){try{const a=sessionStorage.getItem("companyId");return this.http.post(`${this.endpoint}/company/update-payment-head/${a}/${e}`,t).pipe(Object(l.a)(this.errorMgmt))}catch(a){console.log(a)}}removePaymentHead(t){try{return this.http.delete(`${this.endpoint}/company/delete-payment-head/${t}`).pipe(Object(l.a)(this.errorMgmt))}catch(e){console.log(e)}}salarySlipData(){try{return this.http.get(this.endpoint+"/employee/salaray-slip").pipe()}catch(t){console.log(t)}}}return t.\u0275fac=function(e){return new(e||t)(s.dc(d.a))},t.\u0275prov=s.Pb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=a("3Pt+");function b(t,e){if(1&t&&(s.Zb(0,"p",16),s.Zb(1,"strong"),s.Ic(2),s.Yb(),s.Yb()),2&t){const t=s.jc();s.Hb(2),s.Jc(t.errMsg)}}function f(t,e){if(1&t&&(s.Zb(0,"p",17),s.Zb(1,"strong"),s.Ic(2),s.Yb(),s.Yb()),2&t){const t=s.jc();s.Hb(2),s.Jc(t.successMsg)}}function g(t,e){if(1&t&&(s.Zb(0,"option",18),s.Ic(1),s.Yb()),2&t){const t=e.$implicit;s.pc("value",t),s.Hb(1),s.Jc(t)}}const y=[{path:"",component:c,canActivate:[i.a],children:[{path:"list-report",component:(()=>{class t{constructor(t,e){this.api=t,this.fb=e,this.demo=[],this.demo1=[]}ngOnInit(){this.existingDataList()}existingDataList(){this.api.salarySlipData().subscribe(t=>{this.existingData=t.data,this.demo.push(t.data),this.grossAmt=t.data.gross.amt,this.netSalaryAmt=t.data.netSalary.amt,this.totalDeductionAmt=t.data.totalDeduction.amt;let e=t.data.employeeDetails;this.fixdetails=Object.keys(e).map(t=>e[t]),this.fixdetails=Object.keys(e).map(t=>e[t]),this.imgData=this.fixdetails[2]})}generatePdf(){var t=new o;t.setFontSize(12),t.rect(5,20,150,8),t.text(this.fixdetails[0],75,26,"center","a"),t.rect(5,28,150,8),t.text("Salary Slip for the Month of April, 2017",75,34,"center","a"),t.rect(5,36,75,8),t.text("Employee Name",22,42,"center","a"),t.rect(80,36,75,8),t.text(this.fixdetails[1],120,42,"center","a"),t.rect(5,44,50,13),t.text("Account No.",18,52,"center","a"),t.rect(55,44,50,13),t.text(this.fixdetails[3],80,52,"center","a"),t.rect(105,44,50,13),t.text("Designation",125,52,"center","a"),t.rect(155,44,50,13),t.text(this.fixdetails[4],175,52,"center","a"),t.rect(5,57,50,8),t.text("Days Present",19,63,"center","a"),t.rect(55,57,50,8),t.text(this.fixdetails[5],80,63,"center","a"),t.rect(105,57,50,8),t.text("Earned Leaves",125,63,"center","a"),t.rect(155,57,50,8),t.text(this.fixdetails[1],175,63,"center","a"),t.rect(5,65,100,8),t.text("ESIC No :-",17,71,"center","a"),t.rect(105,65,100,8),t.text("P.F. No :-",120,71,"center","a"),t.rect(5,73,65,8),t.text("Leave Without Sanction",29,79,"center","a"),t.rect(70,73,35,8),t.text(this.fixdetails[9],83,79,"center","a"),t.rect(105,73,60,8),t.text("Payable Days",125,79,"center","a"),t.rect(165,73,40,8),t.text(this.fixdetails[10],180,79,"center","a"),t.rect(5,81,65,8),t.text("Total CTC/Month",22,87,"center","a"),t.rect(70,81,35,8),t.text(this.fixdetails[11],85,87,"center","a"),t.rect(105,81,60,8),t.text("Total CTC/Annum",129,87,"center","a"),t.rect(165,81,40,8),t.text(this.fixdetails[12],180,87,"center","a"),t.rect(5,89,100,12),t.text("Earnings",40,97,"center","a"),t.rect(105,89,100,12),t.text("Deductions",135,97,"center","a"),t.rect(5,101,65,8),t.rect(70,101,35,8),t.text("Amount",85,107,"center","a"),t.rect(105,101,60,8),t.rect(165,101,40,8),t.text("Amount",185,107,"center","a");var e,a=115;e=this.demo[0].deductions.length>this.demo[0].earnigs.length?this.demo[0].deductions.length:this.demo[0].earnigs.length;for(var r=0;r<e;r++){var n=a-6;null==this.demo[0].earnigs[r]?(t.rect(5,n,65,8),t.rect(70,n,35,8),a+=8):(t.rect(5,n,65,8),t.text(this.demo[0].earnigs[r].label,8,a,"left","a"),t.rect(70,n,35,8),t.text("xxx",95,a,"center","a")),null==this.demo[0].deductions[r]?(t.rect(105,n,60,8),t.rect(165,n,40,8),a+=8):(t.rect(105,n,60,8),t.text(this.demo[0].deductions[r].label,117,a,"left","a"),t.rect(165,n,40,8),t.text("xxx",195,a,"center","a"),a+=8)}t.rect(5,a-=6,65,8),t.text("Gross",13,a+6,"center","a"),t.rect(70,a,35,8),t.text(this.grossAmt,90,a+6,"center","a"),t.rect(105,a,60,8),t.text("Tootal Deductions",134,a+6,"center","a"),t.rect(165,a,40,8),t.text(this.totalDeductionAmt,192,a+6,"center","a"),t.rect(5,a+=8,65,8),t.text("Net Salary",17,a+6,"center","a"),t.rect(5,a,200,8),t.text(this.netSalaryAmt,90,a+6,"center","a"),t.rect(5,a+=8,200,8),t.save("my.pdf")}accountpdfPdf(){var t=new o("a","mm",[700,1e3]);t.setFontSize(10);var e=30;t.text(18,e+7,"To"),t.text(23,e+20,"Indusind bank, Jaipur"),t.text(190,e+7,"Date:10/2019"),t.text(80,e+30,"Sub: Salary Transfer for the Month of sep 2019"),t.rect(15,e+35,200,30),t.rect(15,e+65,200,5),t.rect(15,e+70,15,5),t.rect(15,e+70,70,5),t.rect(15,e+70,105,5),t.rect(15,e+70,140,5),t.rect(15,e+70,200,5),t.rect(15,e+75,15,5),t.text("Sr. No",17,e+79,"left","a"),t.rect(15,e+75,70,5),t.text("Name",31,e+79,"left","a"),t.rect(15,e+75,105,5),t.text("Account Number",86,e+79,"left","a"),t.rect(15,e+75,140,5),t.text("Amount",123,e+79,"left","a"),t.rect(15,e+75,200,5),t.text("Salary for the month",157,e+79,"left","a"),e+=80;for(var a=0;a<20;a++)t.rect(15,e,15,5),t.rect(15,e,70,5),t.rect(15,e,105,5),t.rect(15,e,140,5),t.rect(15,e,200,5),e+=5;t.save("my.pdf")}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(u),s.Tb(m.e))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-list-report"]],decls:6,vars:1,consts:[[3,"src"],["img",""],["id","btnDownload",3,"click"]],template:function(t,e){1&t&&(s.Ub(0,"img",0,1),s.Zb(2,"button",2),s.gc("click",(function(){return e.generatePdf()})),s.Ic(3," Download PDF "),s.Yb(),s.Zb(4,"button",2),s.gc("click",(function(){return e.accountpdfPdf()})),s.Ic(5," Account pdf"),s.Yb()),2&t&&s.qc("src",e.imgData,s.Cc)},styles:[""]}),t})()},{path:"add-report",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Nb({type:t,selectors:[["app-add-report"]],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t})()},{path:"update-report/:jobCategoryId",component:(()=>{class t{constructor(t,e,a,r,n){this.api=t,this.fb=e,this.route=a,this.ngZone=r,this.router=n,this.successMessage=!1,this.errorMsg=!1,this.paymentHeadTypes=["Addition","Deduction"]}ngOnInit(){this.existingDataList(),this.paymentHeadId=this.route.snapshot.paramMap.get("jobCategoryId"),this.updatePaymentHeadValidation()}updatePaymentHeadValidation(){try{this.paymentHeadUpdateForm=this.fb.group({title:new m.f(null),type:new m.f(null)})}catch(t){console.log(t)}}existingDataList(){this.api.getPaymentHeadData().subscribe(t=>{this.existingData=t.data;const e=Object.keys(this.existingData).length;for(var a=0;a<e;a++)this.paymentHeadUpdateForm=this.fb.group({title:new m.f(this.existingData[a].title),type:new m.f(this.existingData[a].type)})})}updatePaymenthead(){this.api.updatePaymentHeads(this.paymentHeadUpdateForm.value,this.paymentHeadId).subscribe(t=>{"success"===t.data||200===t.data?(this.successMessage=!0,this.ngZone.run(()=>this.router.navigateByUrl("/pages/payment-heads/list-payment-heads")),this.errorMsg=!1,this.successMsg=t.message):(this.errorMsg=!0,this.successMessage=!1,this.errMsg=t.message)})}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(u),s.Tb(m.e),s.Tb(n.a),s.Tb(s.E),s.Tb(n.b))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-update-report"]],decls:29,vars:5,consts:[[1,"card","card-u</div>ser"],[1,"card-header"],[1,"card-title","text-center"],[1,"card-body"],[1,"col-sm-offset-2"],["class","alert alert-danger",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-sm-6","control-label"],["type","text","id","title","placeholder","Enter Title","formControlName","title",1,"form-control"],["id","type","formControlName","type",1,"dropdown","dropdown-toggle","form-control",2,"width","100%","height","40px"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-offset-2","col-sm-10"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","submit","routerLink","../../list-payment-heads",1,"btn","btn-danger"],[1,"alert","alert-danger"],[1,"alert","alert-success"],[3,"value"]],template:function(t,e){1&t&&(s.Zb(0,"div",0),s.Zb(1,"div",1),s.Zb(2,"h2",2),s.Ic(3,"Update Payment Heads"),s.Yb(),s.Yb(),s.Zb(4,"div",3),s.Zb(5,"div",4),s.Gc(6,b,3,1,"p",5),s.Yb(),s.Zb(7,"div",4),s.Gc(8,f,3,1,"p",6),s.Yb(),s.Zb(9,"form",7),s.gc("ngSubmit",(function(){return e.updatePaymenthead()})),s.Zb(10,"div",8),s.Zb(11,"label",9),s.Zb(12,"b"),s.Ic(13,"title: "),s.Yb(),s.Yb(),s.Zb(14,"div",4),s.Ub(15,"input",10),s.Yb(),s.Yb(),s.Zb(16,"div",8),s.Zb(17,"label",9),s.Zb(18,"b"),s.Ic(19,"type:"),s.Yb(),s.Yb(),s.Zb(20,"div",4),s.Zb(21,"select",11),s.Gc(22,g,2,2,"option",12),s.Yb(),s.Yb(),s.Yb(),s.Zb(23,"div",8),s.Zb(24,"div",13),s.Zb(25,"button",14),s.Ic(26,"Update"),s.Yb(),s.Zb(27,"button",15),s.Ic(28,"Cancel"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()),2&t&&(s.Hb(6),s.pc("ngIf",e.errorMsg),s.Hb(2),s.pc("ngIf",e.successMessage),s.Hb(1),s.pc("formGroup",e.paymentHeadUpdateForm),s.Hb(13),s.pc("ngForOf",e.paymentHeadTypes),s.Hb(3),s.pc("disabled",e.paymentHeadUpdateForm.invalid))},directives:[r.m,m.x,m.o,m.i,m.c,m.n,m.g,m.u,r.l,n.c,m.q,m.w],encapsulation:2}),t})()},{path:"",redirectTo:"list-report",pathMatch:"full"}]}];let x=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[r.c,n.f.forChild(y)]]}),t})(),v=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[r.c,x,m.j,m.s,n.f]]}),t})()}}]);
//# sourceMappingURL=25-es2015.5ffa77ed73e50c5cc272.js.map