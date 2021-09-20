(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{745:function(e,t,r){var content=r(746);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(7).default)("08d4b84c",content,!0,{sourceMap:!1})},746:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},789:function(e,t,r){"use strict";r(51),r(35),r(18),r(203),r(26),r(40),r(745);var n=r(56);t.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var e=Object.values(this.errorBag).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",function(t){e.$set(e.errorBag,input._uid,t)},{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))}):r.valid=t(input),r},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var e=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){e.errorBag={}},0)},resetValidation:function(){for(var e=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){e.errorBag={}},0)},register:function(input){var e=this.watchInput(input);this.inputs.push(input),this.watchers.push(e)},unregister:function(input){var e=this.inputs.find(function(i){return i._uid===input._uid});if(e){var t=this.watchers.find(function(i){return i._uid===e._uid});t.valid&&t.valid(),t.shouldValidate&&t.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==e._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}}},913:function(e,t,r){"use strict";r.r(t);r(36),r(26),r(40),r(51),r(35),r(18),r(71);var n=r(14),o=(r(44),r(11)),c=r(63),l=r.n(c),d=r(27),m=r(582),h=r(52),f=r(578),v=r.n(f),x=r(579),y={isDuplicate:!1,tripleNumber:void 0,address:{},militaryId:void 0,recordId:void 0,fullName:void 0,name:void 0,force:void 0,situation:"without",recruitmentLevel:"first",treatment:"without_extra_year",notes:"",influences:[]},_={layout:"dashboard",data:function(){var e=this;return{tripleNumber:{first:void 0,second:void 0,third:void 0},militaryIdLength:13,recordIdLength:10,militaryIdErrorMessages:[],recordIdErrorMessages:[],tripleNumberErrorMessages:[],recommendation:l.a.cloneDeep(y),address:{governate:void 0,centre:void 0,village:void 0},governates:[],rules:{militaryId:[function(t){return!!t||e.$t("MilitaryId_Required")},function(t){return e.validateMilitaryId(t)}],recordId:[function(t){return!!t||e.$t("RecordId_Required")}],tripleNumber:[function(t){return!!t||e.$t("TripleNumber_Required")}],name:[function(t){return!!t||e.$t("Name_Required")}],governate:[function(t){return!!t||e.$t("Governate_Required")}],centre:[function(t){return!!t||e.$t("Centre_Required")}],village:[function(t){return!!t||e.$t("Village_Required")}],education:[function(t){return!!t||e.$t("Education_Rank_Required")}],unit:[function(t){return!!t||e.$t("Unit_Name_Required")}]},type:void 0,divisions:[],unitId:void 0,divisionId:void 0,edit:!1,recruitmentLevel:"first",treatment:"without_extra_year",situation:"without"}},created:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDivisions();case 2:e.sent,console.log("the edit",this.edit),this.edit?(this.processMilitaryId(this.recommendation.militaryId),this.education=this.recommendation.education,this.recruitmentLevel=this.recommendation.recruitmentLevel):(this.recommendation=l.a.cloneDeep(y),console.log("triple",this.recommendation.tripleNumber));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn","isAuthorized"],meta:{branches:["recon_force_people"],permissions:["recon_recommendations_manager"]},components:{materialCard:x.a},computed:Object(n.a)({},Object(d.c)({user:"app/getUser",locations:"app/getLocations",defaults:"app/getDefaults",fullname:"user/getFullname"})),methods:{moment:v.a,reset:function(){this.recommendation=l.a.cloneDeep(y),this.treatment=this.recommendation.treatment,this.education=this.recommendation.education,this.recruitmentLevel=this.recommendation.recruitmentLevel,this.militaryIdErrorMessages=[],this.tripleNumber={first:void 0,second:void 0,third:void 0}},command:function(e){if(13===e.keyCode)return this.submit()},getDivisions:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/divisions",e.next=3,Object(h.d)("/divisions");case 3:if(!(t=e.sent).error){e.next=7;break}return console.log("error getting divisions",t.error),e.abrupt("return");case 7:this.divisions=t.divisions;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,r,data,path,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.edit?"Edited":"Added",r=this.$refs.form.validate(),(data=l.a.cloneDeep(this.recommendation)).type=this.type,!r){e.next=15;break}return path=this.edit?"/recommendations/edit/".concat(this.recommendationId):"/recommendations",this.tripleNumber&&this.tripleNumber.first?(n=l.a.cloneDeep(this.tripleNumber),this.recommendation.tripleNumber=Object.keys(n).map(function(e){return n[e]}).join("/"),data.tripleNumber=this.recommendation.tripleNumber):delete data.tripleNumber,data.recommenderRank&&data.recommender&&(data.recommender=[data.recommenderRank,data.recommender].join(" / ")),data.recommender||(data.recommender=""),e.next=11,Object(h.e)(path,data);case 11:if(!(o=e.sent).error){e.next=14;break}return e.abrupt("return",m.b.fire({icon:"error",title:o.error,timer:4e3,showConfirmButton:!1}));case 14:m.b.fire({icon:"success",title:this.$i18n.t("".concat(t,"_Recommendation_Success")),timer:4e3,showConfirmButton:!1});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),isDuplicate:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,n,o,c,path,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.key,n=t.value,o=["type",r],c=[this.type,n],console.log("keys",r,"values",c),path="/recommendations/is-duplicate?keys=".concat(o,"&values=").concat(c),console.log("path",path),e.next=8,Object(h.d)(path);case 8:if(l=e.sent,console.log("response",l),!l.error){e.next=12;break}return e.abrupt("return",!1);case 12:return e.abrupt("return",l.isDuplicate);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),processMilitaryId:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var code,r,n,o,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(t.length>=5?(code=parseInt(t[4]),(r=this.locations.recruitmentAreas[code-1])&&(this.recommendation.recruitmentArea=r.value,this.governates=this.locations.governates.filter(function(e){return e.recruitment_area&&e.recruitment_area.length?e.recruitment_area.find(function(p){return p.value===r.value}):e.recruitment_area&&e.recruitment_area.value===r.value}))):this.recommendation.recruitmentArea=void 0,t.length>=8?(n="".concat(t[6]).concat(t[7]),(o=this.defaults.FORCES_LIST.find(function(e){return e.code==n}))&&(this.recommendation.force=o.value,console.log("force",o.value,n))):this.recommendation.force=void 0,13!==t.length||this.edit||!this.type){e.next=17;break}return e.prev=5,e.next=8,this.isDuplicate({key:"militaryId",value:t});case 8:c=e.sent,this.recommendation.isDuplicate=c,this.recommendation.isDuplicate?this.militaryIdErrorMessages=[this.$i18n.t("MillitaryId_Duplicate")]:this.militaryIdErrorMessages=[],e.next=15;break;case 13:e.prev=13,e.t0=e.catch(5);case 15:e.next=18;break;case 17:this.militaryIdErrorMessages=[];case 18:case"end":return e.stop()}},e,this,[[5,13]])}));return function(t){return e.apply(this,arguments)}}(),processRecordId:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>=1&&!this.edit&&this.type)){e.next=13;break}return e.prev=1,e.next=4,this.isDuplicate({key:"recordId",value:t});case 4:r=e.sent,this.recommendation.isDuplicate=r,this.recommendation.isDuplicate?this.recordIdErrorMessages=[this.$i18n.t("RecordId_Duplicate")]:this.recordIdErrorMessages=[],e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:e.next=14;break;case 13:this.recordIdErrorMessages=[];case 14:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),processTripleNumber:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.tripleNumber.first&&this.tripleNumber.second&&this.tripleNumber.third&&!this.edit&&this.type)){e.next=15;break}return e.prev=1,r=l.a.cloneDeep(this.tripleNumber),n=Object.keys(r).map(function(e){return r[e]}).join("/"),e.next=6,this.isDuplicate({key:"tripleNumber",value:n});case 6:o=e.sent,this.recommendation.isDuplicate=o,this.recommendation.isDuplicate?this.tripleNumberErrorMessages=[this.$i18n.t("TripleNumber_Duplicate")]:this.tripleNumberErrorMessages=[],e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:e.next=16;break;case 15:this.tripleNumberErrorMessages=[];case 16:case"end":return e.stop()}},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}(),onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46!==t&&e.preventDefault()},validateMilitaryId:function(e){if(void 0===e)return!0;if(e.length<4)return this.$i18n.t("MillitaryId_Invalid");if(e.length>=5&&0===parseInt(e[4]))return this.$i18n.t("MillitaryId_Invalid");var t=e.substr(0,4);return t.length>=4&&parseInt(t)<=(new Date).getFullYear()?e.length<13&&this.$i18n.t("MillitaryId_Incomplete"):this.$i18n.t("MillitaryId_Invalid")}},mounted:function(){window.addEventListener("keypress",this.command),this.recommendationId&&this.processMilitaryId(this.recommendation.militaryId)},destroyed:function(){window.removeEventListener("keypress",this.command)},asyncData:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,n,o,path,c,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.route,o=r.path.substr(r.path.lastIndexOf("/")+1),r.path.includes("edit")){e.next=4;break}return e.abrupt("return",{});case 4:return path="/recommendations/data/".concat(o),e.next=7,Object(h.d)(path);case 7:if(!(c=e.sent).error){e.next=11;break}return m.b.fire({icon:"error",title:c.error,timer:4e3,showConfirmButton:!1}),e.abrupt("return",{});case 11:return c.tripleNumber?(l=c.tripleNumber.split("/"),n={first:l[2],second:l[1],third:l[0]}):n={},e.abrupt("return",{recommendationId:o,recommendation:c,type:c.type,tripleNumber:n,edit:!0});case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=r(22),k=r(34),I=r.n(k),w=r(738),$=r(185),R=r(177),E=r(178),M=r(789),C=r(179),D=r(574),component=Object(N.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md12:""}},[r("material-card",{attrs:{dark:"",color:"deep",title:e.$t("Add_Recommendation")}},[r("v-form",{ref:"form"},[r("v-container",{attrs:{"py-0":""}},[r("v-layout",[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.RECOMMENDATION_TYPES,"item-text":"ar","item-value":"value",label:e.$t("Recommendation_Type"),clearable:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),e._v(" "),e.type?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{label:e.$t("Name"),rules:e.rules.name},model:{value:e.recommendation.fullName,callback:function(t){e.$set(e.recommendation,"fullName",t)},expression:"recommendation.fullName"}})],1):e._e(),e._v(" "),["unit","distributed"].includes(e.type)?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{maxlength:e.recordIdLength,label:e.$t("Record_ID"),rules:e.rules.recordId,"error-messages":e.recordIdErrorMessages},on:{keypress:e.onlyNumber,input:e.processRecordId},model:{value:e.recommendation.recordId,callback:function(t){e.$set(e.recommendation,"recordId",t)},expression:"recommendation.recordId"}})],1):e._e(),e._v(" "),["unit","distributed"].includes(e.type)?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{maxlength:e.militaryIdLength,minlength:e.militaryIdLength,label:e.$t("Military_ID"),rules:e.rules.militaryId,"error-messages":e.militaryIdErrorMessages},on:{keypress:e.onlyNumber,input:e.processMilitaryId},model:{value:e.recommendation.militaryId,callback:function(t){e.$set(e.recommendation,"militaryId",t)},expression:"recommendation.militaryId"}})],1):e._e(),e._v(" "),["officers","weapons"].includes(e.type)?r("v-flex",{attrs:{xs12:"",md1:""}},[r("v-text-field",{staticClass:"white-input tripleNumber",attrs:{label:e.$t("Triple_Number_Third"),rules:e.rules.tripleNumber,"error-messages":e.tripleNumberErrorMessages},on:{keypress:e.onlyNumber,change:e.processTripleNumber},model:{value:e.tripleNumber.third,callback:function(t){e.$set(e.tripleNumber,"third",t)},expression:"tripleNumber.third"}})],1):e._e(),e._v(" "),["officers","weapons"].includes(e.type)?r("v-flex",{attrs:{xs12:"",md1:""}},[r("v-text-field",{staticClass:"white-input tripleNumber",attrs:{label:e.$t("Triple_Number_Second"),rules:e.rules.tripleNumber,"error-messages":e.tripleNumberErrorMessages},on:{keypress:e.onlyNumber,change:e.processTripleNumber},model:{value:e.tripleNumber.second,callback:function(t){e.$set(e.tripleNumber,"second",t)},expression:"tripleNumber.second"}})],1):e._e(),e._v(" "),["officers","weapons"].includes(e.type)?r("v-flex",{attrs:{xs12:"",md1:""}},[r("v-text-field",{staticClass:"white-input tripleNumber",attrs:{label:e.$t("Triple_Number_First"),rules:e.rules.tripleNumber,"error-messages":e.tripleNumberErrorMessages},on:{keypress:e.onlyNumber,change:e.processTripleNumber},model:{value:e.tripleNumber.first,callback:function(t){e.$set(e.tripleNumber,"first",t)},expression:"tripleNumber.first"}})],1):e._e(),e._v(" "),e.type?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{label:e.$t("Eductional_Rank"),rules:e.rules.education},model:{value:e.recommendation.education,callback:function(t){e.$set(e.recommendation,"education",t)},expression:"recommendation.education"}})],1):e._e()],1),e._v(" "),e.type?r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.locations.recruitmentAreas,"item-text":"ar","item-value":"value",label:e.$t("Recruitment_Area")},model:{value:e.recommendation.recruitmentArea,callback:function(t){e.$set(e.recommendation,"recruitmentArea",t)},expression:"recommendation.recruitmentArea"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),label:e.$t("Force")},model:{value:e.recommendation.force,callback:function(t){e.$set(e.recommendation,"force",t)},expression:"recommendation.force"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.RECRUITMENT_LEVELS,"item-text":"ar","item-value":"value",label:e.$t("RECRUITMENT_LEVEL")},model:{value:e.recommendation.recruitmentLevel,callback:function(t){e.$set(e.recommendation,"recruitmentLevel",t)},expression:"recommendation.recruitmentLevel"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{"no-data-text":e.$t("No_Selections"),label:e.$t("Recommender_Rank")},model:{value:e.recommendation.recommenderRank,callback:function(t){e.$set(e.recommendation,"recommenderRank",t)},expression:"recommendation.recommenderRank"}})],1)],1):e._e(),e._v(" "),e.type?r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{"no-data-text":e.$t("No_Selections"),label:e.$t("Recommender_Name")},model:{value:e.recommendation.recommender,callback:function(t){e.$set(e.recommendation,"recommender",t)},expression:"recommendation.recommender"}})],1),e._v(" "),["unit","distributed"].includes(e.type)?r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{label:e.$t("Unit_Only"),rules:e.rules.unit},model:{value:e.recommendation.unit,callback:function(t){e.$set(e.recommendation,"unit",t)},expression:"recommendation.unit"}})],1):e._e(),e._v(" "),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{staticClass:"white-input",attrs:{label:e.$t("Notes")},model:{value:e.recommendation.notes,callback:function(t){e.$set(e.recommendation,"notes",t)},expression:"recommendation.notes"}})],1)],1):e._e(),e._v(" "),r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{md6:"","text-xs-right":""}},[r("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:e.submit}},[e._v("\n                  "+e._s(e.edit?e.$t("Edit"):e.$t("Add"))+"\n                ")])],1),e._v(" "),e.edit?e._e():r("v-flex",{attrs:{md6:"","text-xs-right":""}},[r("v-btn",{staticClass:"font-weight-light add-button v-btn-youtube",attrs:{color:"yellow"},on:{click:e.reset}},[e._v("\n                  "+e._s(e.$t("RESET"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;I()(component,{VAutocomplete:w.a,VBtn:$.a,VContainer:R.a,VFlex:E.a,VForm:M.a,VLayout:C.a,VTextField:D.a})}}]);