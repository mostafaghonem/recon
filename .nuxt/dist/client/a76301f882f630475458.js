(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{577:function(t,e,n){var content=n(582);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("f7e6f252",content,!0,{sourceMap:!1})},578:function(t,e,n){var content=n(584);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("e6ed15ac",content,!0,{sourceMap:!1})},579:function(t,e,n){"use strict";n(16);var r={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},o=(n(581),n(22)),l={inheritAttrs:!1,components:{helperOffset:Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null).exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close:function(){this.$emit("close")}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},c=(n(583),n(34)),d=n.n(c),m=n(563),f=n(739),v=n(565),h=n(185),j=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?n("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):n("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?n("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?n("span",[n("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?n("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?n("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,null,null,null);e.a=j.exports;d()(j,{VCard:m.a,VCardActions:f.a,VCardText:f.b,VDivider:v.a,VIcon:h.a})},580:function(t,e,n){"use strict";n.d(e,"a",function(){return D}),n.d(e,"i",function(){return _}),n.d(e,"c",function(){return k}),n.d(e,"b",function(){return K}),n.d(e,"f",function(){return I}),n.d(e,"g",function(){return N}),n.d(e,"e",function(){return $}),n.d(e,"d",function(){return M}),n.d(e,"h",function(){return O});n(26),n(40),n(27),n(290),n(36),n(51),n(86),n(87),n(18);var r=n(9),o=(n(41),n(724)),l=n.n(o),c=n(138),d=n.n(c),m=n(576),f=n.n(m),v=n(52),h=[{UIKey:"RECRUITMENT_LEVELS",DataKey:"recruitmentLevel"},{UIKey:"FORCES_LIST",DataKey:"force"},{UIKey:"ARMY_LIST",DataKey:"army"},{UIKey:"EDUCATION_RANKS",DataKey:"educationRank"},{UIKey:"SITUATIONS",DataKey:"situation"},{UIKey:"TREATMENTS",DataKey:"treatment"},{UIKey:"DIRECTIONS",DataKey:"direction"},{UIKey:"MAILTYPES",DataKey:"mailType"}],j=[{UIKey:"governates",DataKey:"address.governate"},{UIKey:"recruitmentAreas",DataKey:"recruitmentArea"}],y=[{DataKey:"adminNo"},{DataKey:"seq"},{DataKey:"number"},{DataKey:"militaryId"},{DataKey:"nationalId"},{DataKey:"recordId"},{DataKey:"tripleNumber.value"},{DataKey:"division.name"},{DataKey:"joinDate"},{DataKey:"birthDate"},{DataKey:"releaseDate"},{DataKey:"unit.unitId.name"},{DataKey:"division.divisionId.name"}],x=[{UIKey:"RANKS",DataKey:"rank"},{UIKey:"BRANCHES",DataKey:"branch"}],D=l.a.mixin({toast:!0,position:"top-start"}),_=function(t){var e=[/0/g,/1/g,/2/g,/3/g,/4/g,/5/g,/6/g,/7/g,/8/g,/9/g],n=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];if("string"==typeof t)for(var i=0;i<10;i++)t=t.replace(e[i],n[i]);return t},k=function(p,t){var e=p.reduce(function(t,e){return t&&t[e]?t[e]:null},t);return e&&"object"===Object(r.a)(e)&&e.length?e.map(function(t){return t.ar}).join(","):e&&"object"===Object(r.a)(e)&&e.ar?e.ar:e&&"object"===Object(r.a)(e)&&!e.length?"":e},w=function(t,e,n){return d.a.set(t,e,n)},K=function(t,e){var n=e;return/\d/.test(e)&&(n=_(e)),null!=t&&null!=n&&"string"==typeof t&&-1!==t.toString().indexOf(n)},I=function(data,t){var e=t.locations,n=t.defaults;return data.map(function(t){return function(t,e){var n=e.locations,r=e.defaults;return h.map(function(e){if(t[e.DataKey]){var n=r[e.UIKey].find(function(n){return n.value===t[e.DataKey]});n&&(t[e.DataKey]=n.ar)}}),j.map(function(e){var r=e.DataKey.split(".");if(t[r[0]]){var o=n[e.UIKey].find(function(e){return e.value===k(r,t)});o&&("governate"===t[r[0]][1]?t.address.governate=o.ar:(t[e.DataKey]=o.ar,w(t,r,o.ar)))}}),t.birthDate=f()(t.birthDate).locale("ar").format("YYYY/MM/DD"),t.joinDate=f()(t.joinDate).locale("ar").format("YYYY/MM/DD"),t.releaseDate=f()(t.releaseDate).locale("ar").format("YYYY/MM/DD"),y.map(function(e){var n=k(e.DataKey.split("."),t);if(n){var r=_(n.toString());w(t,"".concat(e.DataKey,"_ar").split("."),r)}}),t}(t,{locations:e,defaults:n})})},N=function(data,t){var e=t.defaults;return data.map(function(t){return function(t,e){var n=e.defaults;x.map(function(e){if(t[e.DataKey]){console.log("value",t[e.DataKey],"the object",e);var r=n[e.UIKey].find(function(n){return n.value===t[e.DataKey]});r&&(t[e.DataKey]=r.ar)}});var r=n.PERMISSIONS.find(function(e){return e.value===t.permissions[0]});return t.permissions=r?r.ar:t.permissions,t}(t,{defaults:e})})},$=function(data,t){var e=t.defaults;return data.map(function(t){return function(t,e){var n=e.defaults;h.map(function(e){if(t[e.DataKey]){var data=n[e.UIKey],r=data?data.find(function(n){return n.value===t[e.DataKey]}):void 0;r&&(t[e.DataKey]=r.ar)}}),y.map(function(e){var n=k(e.DataKey.split("."),t);if(n){var r=_(n.toString());w(t,"".concat(e.DataKey,"_ar").split("."),r)}}),t.date=f()(t.date).locale("ar").format("YYYY/MM/DD"),t.createdAtDate=f()(t.createdAt).locale("ar").format("YYYY/MM/DD hh:mm a");var r=n.BRANCHES.filter(function(e){return t.branches.find(function(t){return e.value===t})}),o=n.BRANCHES.find(function(e){return e.value===t.branch});return t.branches=r,t.branch=o,t.attachments=t.attachments.map(function(t){return t.link="".concat(v.a).concat(t.path),t}),t}(t,{defaults:e})})},M=function(data,t){t.locations;var e=t.defaults,n=data.map(function(t){return function(t,e){e.defaults;var n={};return t.soldierId&&(n.soldierId=t.soldierId.militaryId,n.fullName=t.soldierId.fullName),t.pastUnit&&(n.pastUnit=t.pastUnit.unitId.name),t.unitId&&(n.unitName=t.unitId.name),t.userId&&(n.username=t.userId.username),n.timestamp=f()(t.createdAt).format("x"),n.createdAt=f()(t.createdAt).locale("ar").format("YYYY/MM/DD hh:mm a"),n}(t,{defaults:e})});return d.a.orderBy(n,["unitName"],["asc"])},O=function(t){t&&t.length&&t.includes("all")&&console.log("the valuye",t,this.fieldsValue)}},581:function(t,e,n){"use strict";var r=n(577);n.n(r).a},582:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},583:function(t,e,n){"use strict";var r=n(578);n.n(r).a},584:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},725:function(t,e,n){var map={"./af":585,"./af.js":585,"./ar":586,"./ar-dz":587,"./ar-dz.js":587,"./ar-kw":588,"./ar-kw.js":588,"./ar-ly":589,"./ar-ly.js":589,"./ar-ma":590,"./ar-ma.js":590,"./ar-sa":591,"./ar-sa.js":591,"./ar-tn":592,"./ar-tn.js":592,"./ar.js":586,"./az":593,"./az.js":593,"./be":594,"./be.js":594,"./bg":595,"./bg.js":595,"./bm":596,"./bm.js":596,"./bn":597,"./bn.js":597,"./bo":598,"./bo.js":598,"./br":599,"./br.js":599,"./bs":600,"./bs.js":600,"./ca":601,"./ca.js":601,"./cs":602,"./cs.js":602,"./cv":603,"./cv.js":603,"./cy":604,"./cy.js":604,"./da":605,"./da.js":605,"./de":606,"./de-at":607,"./de-at.js":607,"./de-ch":608,"./de-ch.js":608,"./de.js":606,"./dv":609,"./dv.js":609,"./el":610,"./el.js":610,"./en-au":611,"./en-au.js":611,"./en-ca":612,"./en-ca.js":612,"./en-gb":613,"./en-gb.js":613,"./en-ie":614,"./en-ie.js":614,"./en-il":615,"./en-il.js":615,"./en-in":616,"./en-in.js":616,"./en-nz":617,"./en-nz.js":617,"./en-sg":618,"./en-sg.js":618,"./eo":619,"./eo.js":619,"./es":620,"./es-do":621,"./es-do.js":621,"./es-us":622,"./es-us.js":622,"./es.js":620,"./et":623,"./et.js":623,"./eu":624,"./eu.js":624,"./fa":625,"./fa.js":625,"./fi":626,"./fi.js":626,"./fil":627,"./fil.js":627,"./fo":628,"./fo.js":628,"./fr":629,"./fr-ca":630,"./fr-ca.js":630,"./fr-ch":631,"./fr-ch.js":631,"./fr.js":629,"./fy":632,"./fy.js":632,"./ga":633,"./ga.js":633,"./gd":634,"./gd.js":634,"./gl":635,"./gl.js":635,"./gom-deva":636,"./gom-deva.js":636,"./gom-latn":637,"./gom-latn.js":637,"./gu":638,"./gu.js":638,"./he":639,"./he.js":639,"./hi":640,"./hi.js":640,"./hr":641,"./hr.js":641,"./hu":642,"./hu.js":642,"./hy-am":643,"./hy-am.js":643,"./id":644,"./id.js":644,"./is":645,"./is.js":645,"./it":646,"./it-ch":647,"./it-ch.js":647,"./it.js":646,"./ja":648,"./ja.js":648,"./jv":649,"./jv.js":649,"./ka":650,"./ka.js":650,"./kk":651,"./kk.js":651,"./km":652,"./km.js":652,"./kn":653,"./kn.js":653,"./ko":654,"./ko.js":654,"./ku":655,"./ku.js":655,"./ky":656,"./ky.js":656,"./lb":657,"./lb.js":657,"./lo":658,"./lo.js":658,"./lt":659,"./lt.js":659,"./lv":660,"./lv.js":660,"./me":661,"./me.js":661,"./mi":662,"./mi.js":662,"./mk":663,"./mk.js":663,"./ml":664,"./ml.js":664,"./mn":665,"./mn.js":665,"./mr":666,"./mr.js":666,"./ms":667,"./ms-my":668,"./ms-my.js":668,"./ms.js":667,"./mt":669,"./mt.js":669,"./my":670,"./my.js":670,"./nb":671,"./nb.js":671,"./ne":672,"./ne.js":672,"./nl":673,"./nl-be":674,"./nl-be.js":674,"./nl.js":673,"./nn":675,"./nn.js":675,"./oc-lnc":676,"./oc-lnc.js":676,"./pa-in":677,"./pa-in.js":677,"./pl":678,"./pl.js":678,"./pt":679,"./pt-br":680,"./pt-br.js":680,"./pt.js":679,"./ro":681,"./ro.js":681,"./ru":682,"./ru.js":682,"./sd":683,"./sd.js":683,"./se":684,"./se.js":684,"./si":685,"./si.js":685,"./sk":686,"./sk.js":686,"./sl":687,"./sl.js":687,"./sq":688,"./sq.js":688,"./sr":689,"./sr-cyrl":690,"./sr-cyrl.js":690,"./sr.js":689,"./ss":691,"./ss.js":691,"./sv":692,"./sv.js":692,"./sw":693,"./sw.js":693,"./ta":694,"./ta.js":694,"./te":695,"./te.js":695,"./tet":696,"./tet.js":696,"./tg":697,"./tg.js":697,"./th":698,"./th.js":698,"./tk":699,"./tk.js":699,"./tl-ph":700,"./tl-ph.js":700,"./tlh":701,"./tlh.js":701,"./tr":702,"./tr.js":702,"./tzl":703,"./tzl.js":703,"./tzm":704,"./tzm-latn":705,"./tzm-latn.js":705,"./tzm.js":704,"./ug-cn":706,"./ug-cn.js":706,"./uk":707,"./uk.js":707,"./ur":708,"./ur.js":708,"./uz":709,"./uz-latn":710,"./uz-latn.js":710,"./uz.js":709,"./vi":711,"./vi.js":711,"./x-pseudo":712,"./x-pseudo.js":712,"./yo":713,"./yo.js":713,"./zh-cn":714,"./zh-cn.js":714,"./zh-hk":715,"./zh-hk.js":715,"./zh-mo":716,"./zh-mo.js":716,"./zh-tw":717,"./zh-tw.js":717};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=725},758:function(t,e,n){"use strict";n.d(e,"e",function(){return c}),n.d(e,"d",function(){return d}),n.d(e,"f",function(){return m}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return v}),n.d(e,"a",function(){return h});n(26),n(40),n(51),n(41);var r=n(17),o=(n(27),n(44),n(10)),l=n(52),c=function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,o,c,progress,d){var m,f,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/upload/sign",m={},Object(r.a)(m,"file-name",e.name),Object(r.a)(m,"default-ext","pdf"),f=m,console.log("getting signed",f),t.next=5,Object(l.c)("/upload/sign",f);case 5:return v=t.sent,t.abrupt("return",v);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,l,c){return t.apply(this,arguments)}}(),d=function(t,e){var n=this;c(t).then(function(r){t.dynamicUploadUrl=r.postURL,t.presignedURL=r.presignedURL,t.data=r.formData;var o=r.imageLink.replace("http://","").replace("https://",""),l={link:r.imageLink,name:t.name.slice(0,t.name.indexOf(".")),size:t.size,originalName:t.name,path:o.slice(o.indexOf("/"),o.length)};n.mail.attachments.push(l),e()})},m=function(t,e,n){var r=this.mail.attachments.find(function(e){return e.originalName===t.name||t.name.includes(e.name)});r&&this.mail.attachments.splice(this.mail.attachments.indexOf(r),1)},f=function(t){return"".concat(t[0].presignedURL)},v=function(t,e,n){e.setRequestHeader("Content-Type","application/pdf"),console.log("form data",n)},h=function(t){return{thumbnailWidth:120,maxFilesize:10,method:"put",accept:t.signFiles,url:t.getMeUploadUrl,sending:t.sendFiles,acceptedFiles:".pdf",dictDefaultMessage:"اضغط هنا لرفع ملف المكاتبة بصيغة pdf 📎",dictRemoveFile:"❌",addRemoveLinks:!0}}},813:function(t,e,n){"use strict";n.r(e);n(51),n(27);var r=n(13),o=(n(26),n(40),n(44),n(10)),l=(n(290),n(28)),c=n(580),d=n(52),m=n(758),f=n(576),v=n.n(f),h=n(579),j={layout:"dashboard",data:function(){var t=this;return{defaultPermissions:[],defaultRanks:[],attachments:[],files:[],dateModal:!1,answerDateModal:!1,mailTypes:[{value:"mail",ar:"بريد"},{value:"email",ar:"تراسل"},{value:"fax",ar:"فاكس"}],YES_NO:[{value:"yes",ar:"نعم"},{value:"no",ar:"لا"}],edit:!1,mail:{type:"inbox",category:void 0,mailType:void 0,number:void 0,date:void 0,adminNo:void 0,direction:void 0,subject:void 0,summary:void 0,wordMule:void 0,folder:void 0,attachments:[]},disabled:{branch:!1,permissions:!1},dropzoneOptions:Object(m.a)(this),rules:{number:[function(e){return!!e||t.$t("Writing_Number_Required")},function(e){return t.validateNumber(e)}],date:[function(e){return!!e||t.$t("Writing_Number_Required")}]},permissions:[]}},mounted:function(){var t=this;this.edit&&this.mail.attachments&&this.mail.attachments.map(function(e){e.type="application/pdf",e.size=123,t.$refs.myVueDropzone.manuallyAddFile(e,e.link||"http://localhost:3000/")})},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,path,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.route,r=n.path.substr(n.path.lastIndexOf("/")+1),n.path.includes("edit")){t.next=4;break}return t.abrupt("return",{});case 4:return path="/mail/data/".concat(r),t.next=7,Object(d.c)(path);case 7:if(!(o=t.sent).error){t.next=11;break}return c.a.fire({icon:"error",title:o.error,timer:4e3,showConfirmButton:!1}),t.abrupt("return",{});case 11:return o.answerResponse=o.answer?"yes":"no",console.log("mail data ============>",o.date),o.date=v()(o.date).format("YYYY-MM-DD"),o.answerDate=o.answerDate?v()(o.answerDate).format("YYYY-MM-DD"):void 0,t.abrupt("return",{mailId:r,mail:o,edit:!0});case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),created:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.$store.app.context,(n=e.nuxtState)&&(!n||n.mail)){t.next=4;break}return t.abrupt("return");case 4:this.setBranch(n.mail);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn","isAuthorized"],meta:{branches:["followup"]},components:{materialCard:h.a},computed:Object(r.a)({},Object(l.c)({defaults:"app/getDefaults"})),methods:{moment:v.a,uploadHandler:m.e,signFiles:m.d,getMeUploadUrl:m.b,sendFiles:m.c,vremoved:function(t,e,n){console.log("file name removeed",t.name);var r=this.mail.attachments.find(function(e){return e.originalName===t.name||t.name.includes(e.name)});r&&(console.log("file still in array",r),this.mail.attachments.splice(this.mail.attachments.indexOf(r),1))},handleFilePondInit:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("FilePond has initialized");case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),handleFileProcess:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("a file is being processed");case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),submit:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,path,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.edit?"Edited":"Added",!this.$refs.form.validate()){t.next=12;break}return path=this.edit?"/mail/edit/".concat(this.mailId):"/mail",this.mail.answer="yes"===this.mail.answerResponse,t.next=7,Object(d.d)(path,this.mail);case 7:if(!(n=t.sent).error){t.next=10;break}return t.abrupt("return",c.a.fire({icon:"error",title:n.error,timer:4e3,showConfirmButton:!1}));case 10:c.a.fire({icon:"success",title:this.$i18n.t("".concat(e,"_Mail_Success")),timer:4e3,showConfirmButton:!1}),setTimeout(function(){location.href="/followup/inbox/pending-mails"},4e3);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),validateMailName:function(t){return void 0===t},validateNumber:function(t){return NaN===parseInt(t)&&this.$i18n.t("MailNumber_Invalid")}}},y=n(22),x=n(34),D=n.n(x),_=n(747),k=n(184),w=n(176),K=n(816),I=n(177),N=n(740),$=n(178),M=n(566),O=n(815),S=n(572),R=n(285),component=Object(y.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:t.$t("Add_Inbox")}},[n("v-form",{ref:"form"},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-text-field",{staticClass:"black-input",attrs:{label:t.$t("Writing_Number"),rules:t.rules.number,type:"number"},model:{value:t.mail.number,callback:function(e){t.$set(t.mail,"number",e)},expression:"mail.number"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Writing_Date"),"prepend-icon":"event",readonly:""},model:{value:t.mail.date,callback:function(e){t.$set(t.mail,"date",e)},expression:"mail.date"}},"v-text-field",o,!1),r))]}}]),model:{value:t.dateModal,callback:function(e){t.dateModal=e},expression:"dateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment(time)<=t.moment()},locale:"ar",dark:""},on:{input:function(e){t.dateModal=!1}},model:{value:t.mail.date,callback:function(e){t.$set(t.mail,"date",e)},expression:"mail.date"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"black-input",attrs:{label:t.$t("Writing_AdminNo"),type:"number"},model:{value:t.mail.adminNo,callback:function(e){t.$set(t.mail,"adminNo",e)},expression:"mail.adminNo"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.mailTypes,"item-text":"ar","item-value":"value",label:t.$t("Writing_Type")},model:{value:t.mail.mailType,callback:function(e){t.$set(t.mail,"mailType",e)},expression:"mail.mailType"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.DIRECTIONS,"item-text":"ar","item-value":"value",label:t.$t("Wrtiting_Sender_From")},model:{value:t.mail.direction,callback:function(e){t.$set(t.mail,"direction",e)},expression:"mail.direction"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-select",{staticClass:"form-select black-input",attrs:{"no-data-text":t.$t("No_Selections"),items:t.YES_NO,"item-text":"ar","item-value":"value",label:t.$t("Writing_Should_Reply")},model:{value:t.mail.answerResponse,callback:function(e){t.$set(t.mail,"answerResponse",e)},expression:"mail.answerResponse"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":200,"nudge-bottom":30,transition:"scale-transition","offset-x":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Writing_Answer_Date"),disabled:"no"===t.mail.answerResponse,"prepend-icon":"event",readonly:""},model:{value:t.mail.answerDate,callback:function(e){t.$set(t.mail,"answerDate",e)},expression:"mail.answerDate"}},"v-text-field",o,!1),r))]}}]),model:{value:t.answerDateModal,callback:function(e){t.answerDateModal=e},expression:"answerDateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment(time)>=t.moment()},locale:"ar",dark:""},on:{input:function(e){t.answerDateModal=!1}},model:{value:t.mail.answerDate,callback:function(e){t.$set(t.mail,"answerDate",e)},expression:"mail.answerDate"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md5:""}},[n("v-autocomplete",{staticClass:"form-select black-input",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.CATEGORIES,"item-text":"ar","item-value":"value",clearable:"",label:t.$t("Writing_Category")},model:{value:t.mail.category,callback:function(e){t.$set(t.mail,"category",e)},expression:"mail.category"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select black-input",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.WORD_MULES,"item-text":"ar","item-value":"value",label:t.$t("Writing_Word_Mule")},model:{value:t.mail.wordMule,callback:function(e){t.$set(t.mail,"wordMule",e)},expression:"mail.wordMule"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md7:""}},[n("v-textarea",{staticClass:"black-input",attrs:{label:t.$t("Writing_Subject")},model:{value:t.mail.subject,callback:function(e){t.$set(t.mail,"subject",e)},expression:"mail.subject"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md5:""}},[n("dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions},on:{"vdropzone-removed-file":t.vremoved,"vdropzone-error":t.vremoved}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:t.submit}},[t.edit?[t._v(t._s(t.$t("Edit")))]:[t._v(t._s(t.$t("Add"))+"\n                  ")]],2)],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;D()(component,{VAutocomplete:_.a,VBtn:k.a,VContainer:w.a,VDatePicker:K.a,VFlex:I.a,VForm:N.a,VLayout:$.a,VMenu:M.a,VSelect:O.a,VTextField:S.a,VTextarea:R.a})}}]);