(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{576:function(t,e,n){var content=n(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("f7e6f252",content,!0,{sourceMap:!1})},577:function(t,e,n){var content=n(583);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("e6ed15ac",content,!0,{sourceMap:!1})},578:function(t,e,n){"use strict";n(16);var r={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},o=(n(580),n(22)),c={inheritAttrs:!1,components:{helperOffset:Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null).exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close:function(){this.$emit("close")}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},l=(n(582),n(34)),f=n.n(l),d=n(562),m=n(736),j=n(564),h=n(185),v=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?n("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):n("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?n("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?n("span",[n("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?n("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?n("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,null,null,null);e.a=v.exports;f()(v,{VCard:d.a,VCardActions:m.a,VCardText:m.b,VDivider:j.a,VIcon:h.a})},579:function(t,e,n){"use strict";n.d(e,"a",function(){return x}),n.d(e,"h",function(){return K}),n.d(e,"c",function(){return k}),n.d(e,"b",function(){return I}),n.d(e,"f",function(){return w}),n.d(e,"g",function(){return S}),n.d(e,"e",function(){return U}),n.d(e,"d",function(){return N});n(27),n(290),n(37),n(51),n(86),n(87),n(18);var r=n(9),o=(n(41),n(728)),c=n.n(o),l=n(138),f=n.n(l),d=n(575),m=n.n(d),j=n(52),h=[{UIKey:"RECRUITMENT_LEVELS",DataKey:"recruitmentLevel"},{UIKey:"FORCES_LIST",DataKey:"force"},{UIKey:"ARMY_LIST",DataKey:"army"},{UIKey:"EDUCATION_RANKS",DataKey:"educationRank"},{UIKey:"SITUATIONS",DataKey:"situation"},{UIKey:"TREATMENTS",DataKey:"treatment"},{UIKey:"DIRECTIONS",DataKey:"direction"},{UIKey:"MAILTYPES",DataKey:"mailType"}],v=[{UIKey:"governates",DataKey:"address.governate"},{UIKey:"recruitmentAreas",DataKey:"recruitmentArea"}],y=[{DataKey:"adminNo"},{DataKey:"seq"},{DataKey:"number"},{DataKey:"militaryId"},{DataKey:"nationalId"},{DataKey:"recordId"},{DataKey:"tripleNumber.value"},{DataKey:"division.name"},{DataKey:"joinDate"},{DataKey:"birthDate"},{DataKey:"releaseDate"},{DataKey:"unit.unitId.name"},{DataKey:"division.divisionId.name"}],D=[{UIKey:"RANKS",DataKey:"rank"},{UIKey:"BRANCHES",DataKey:"branch"}],x=c.a.mixin({toast:!0,position:"top-start"}),K=function(t){var e=[/0/g,/1/g,/2/g,/3/g,/4/g,/5/g,/6/g,/7/g,/8/g,/9/g],n=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];if("string"==typeof t)for(var i=0;i<10;i++)t=t.replace(e[i],n[i]);return console.log("string",t),t},k=function(p,t){var e=p.reduce(function(t,e){return t&&t[e]?t[e]:null},t);return e&&"object"===Object(r.a)(e)&&e.length?e.map(function(t){return t.ar}).join(","):e&&"object"===Object(r.a)(e)&&!e.length?"":e},_=function(t,e,n){return f.a.set(t,e,n)},I=function(t,e){var n=e;return/\d/.test(e)&&(n=K(e)),null!=t&&null!=n&&"string"==typeof t&&-1!==t.toString().indexOf(n)},w=function(data,t){var e=t.locations,n=t.defaults;return data.map(function(t){return function(t,e){var n=e.locations,r=e.defaults;return h.map(function(e){if(t[e.DataKey]){var n=r[e.UIKey].find(function(n){return n.value===t[e.DataKey]});n&&(t[e.DataKey]=n.ar)}}),v.map(function(e){var r=e.DataKey.split(".");if(t[r[0]]){var o=n[e.UIKey].find(function(e){return e.value===k(r,t)});o&&("governate"===t[r[0]][1]?t.address.governate=o.ar:(t[e.DataKey]=o.ar,_(t,r,o.ar)))}}),t.birthDate=m()(t.birthDate).locale("ar").format("YYYY/MM/DD"),t.joinDate=m()(t.joinDate).locale("ar").format("YYYY/MM/DD"),t.releaseDate=m()(t.releaseDate).locale("ar").format("YYYY/MM/DD"),y.map(function(e){var n=k(e.DataKey.split("."),t);if(n){var r=K(n.toString());_(t,"".concat(e.DataKey,"_ar").split("."),r)}}),t}(t,{locations:e,defaults:n})})},S=function(data,t){var e=t.defaults;return data.map(function(t){return function(t,e){var n=e.defaults;D.map(function(e){if(t[e.DataKey]){console.log("value",t[e.DataKey],"the object",e);var r=n[e.UIKey].find(function(n){return n.value===t[e.DataKey]});r&&(t[e.DataKey]=r.ar)}});var r=n.PERMISSIONS.find(function(e){return e.value===t.permissions[0]});return t.permissions=r?r.ar:t.permissions,t}(t,{defaults:e})})},U=function(data,t){var e=t.defaults;return data.map(function(t){return function(t,e){var n=e.defaults;h.map(function(e){if(t[e.DataKey]){var data=n[e.UIKey],r=data?data.find(function(n){return n.value===t[e.DataKey]}):void 0;r&&(t[e.DataKey]=r.ar)}}),y.map(function(e){var n=k(e.DataKey.split("."),t);if(n){var r=K(n.toString());_(t,"".concat(e.DataKey,"_ar").split("."),r)}}),t.date=m()(t.date).locale("ar").format("YYYY/MM/DD"),t.createdAtDate=m()(t.createdAt).locale("ar").format("YYYY/MM/DD hh:mm a");var r=n.BRANCHES.filter(function(e){return t.branches.find(function(t){return e.value===t})}),o=n.BRANCHES.filter(function(e){return e.value===t.branch});return t.branches=r,t.branch=o,t.attachments=t.attachments.map(function(t){return t.link="".concat(j.a).concat(t.path),t}),t}(t,{defaults:e})})},N=function(data,t){t.locations;var e=t.defaults,n=data.map(function(t){return function(t,e){e.defaults;var n={};return t.soldierId&&(n.soldierId=t.soldierId.militaryId,n.fullName=t.soldierId.fullName),t.pastUnit&&(n.pastUnit=t.pastUnit.unitId.name),t.unitId&&(n.unitName=t.unitId.name),t.userId&&(n.username=t.userId.username),n.timestamp=m()(t.createdAt).format("x"),n.createdAt=m()(t.createdAt).locale("ar").format("YYYY/MM/DD hh:mm a"),n}(t,{defaults:e})});return f.a.orderBy(n,["unitName"],["asc"])}},580:function(t,e,n){"use strict";var r=n(576);n.n(r).a},581:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},582:function(t,e,n){"use strict";var r=n(577);n.n(r).a},583:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},729:function(t,e,n){var map={"./af":584,"./af.js":584,"./ar":585,"./ar-dz":586,"./ar-dz.js":586,"./ar-kw":587,"./ar-kw.js":587,"./ar-ly":588,"./ar-ly.js":588,"./ar-ma":589,"./ar-ma.js":589,"./ar-sa":590,"./ar-sa.js":590,"./ar-tn":591,"./ar-tn.js":591,"./ar.js":585,"./az":592,"./az.js":592,"./be":593,"./be.js":593,"./bg":594,"./bg.js":594,"./bm":595,"./bm.js":595,"./bn":596,"./bn.js":596,"./bo":597,"./bo.js":597,"./br":598,"./br.js":598,"./bs":599,"./bs.js":599,"./ca":600,"./ca.js":600,"./cs":601,"./cs.js":601,"./cv":602,"./cv.js":602,"./cy":603,"./cy.js":603,"./da":604,"./da.js":604,"./de":605,"./de-at":606,"./de-at.js":606,"./de-ch":607,"./de-ch.js":607,"./de.js":605,"./dv":608,"./dv.js":608,"./el":609,"./el.js":609,"./en-au":610,"./en-au.js":610,"./en-ca":611,"./en-ca.js":611,"./en-gb":612,"./en-gb.js":612,"./en-ie":613,"./en-ie.js":613,"./en-il":614,"./en-il.js":614,"./en-in":615,"./en-in.js":615,"./en-nz":616,"./en-nz.js":616,"./en-sg":617,"./en-sg.js":617,"./eo":618,"./eo.js":618,"./es":619,"./es-do":620,"./es-do.js":620,"./es-us":621,"./es-us.js":621,"./es.js":619,"./et":622,"./et.js":622,"./eu":623,"./eu.js":623,"./fa":624,"./fa.js":624,"./fi":625,"./fi.js":625,"./fil":626,"./fil.js":626,"./fo":627,"./fo.js":627,"./fr":628,"./fr-ca":629,"./fr-ca.js":629,"./fr-ch":630,"./fr-ch.js":630,"./fr.js":628,"./fy":631,"./fy.js":631,"./ga":632,"./ga.js":632,"./gd":633,"./gd.js":633,"./gl":634,"./gl.js":634,"./gom-deva":635,"./gom-deva.js":635,"./gom-latn":636,"./gom-latn.js":636,"./gu":637,"./gu.js":637,"./he":638,"./he.js":638,"./hi":639,"./hi.js":639,"./hr":640,"./hr.js":640,"./hu":641,"./hu.js":641,"./hy-am":642,"./hy-am.js":642,"./id":643,"./id.js":643,"./is":644,"./is.js":644,"./it":645,"./it-ch":646,"./it-ch.js":646,"./it.js":645,"./ja":647,"./ja.js":647,"./jv":648,"./jv.js":648,"./ka":649,"./ka.js":649,"./kk":650,"./kk.js":650,"./km":651,"./km.js":651,"./kn":652,"./kn.js":652,"./ko":653,"./ko.js":653,"./ku":654,"./ku.js":654,"./ky":655,"./ky.js":655,"./lb":656,"./lb.js":656,"./lo":657,"./lo.js":657,"./lt":658,"./lt.js":658,"./lv":659,"./lv.js":659,"./me":660,"./me.js":660,"./mi":661,"./mi.js":661,"./mk":662,"./mk.js":662,"./ml":663,"./ml.js":663,"./mn":664,"./mn.js":664,"./mr":665,"./mr.js":665,"./ms":666,"./ms-my":667,"./ms-my.js":667,"./ms.js":666,"./mt":668,"./mt.js":668,"./my":669,"./my.js":669,"./nb":670,"./nb.js":670,"./ne":671,"./ne.js":671,"./nl":672,"./nl-be":673,"./nl-be.js":673,"./nl.js":672,"./nn":674,"./nn.js":674,"./oc-lnc":675,"./oc-lnc.js":675,"./pa-in":676,"./pa-in.js":676,"./pl":677,"./pl.js":677,"./pt":678,"./pt-br":679,"./pt-br.js":679,"./pt.js":678,"./ro":680,"./ro.js":680,"./ru":681,"./ru.js":681,"./sd":682,"./sd.js":682,"./se":683,"./se.js":683,"./si":684,"./si.js":684,"./sk":685,"./sk.js":685,"./sl":686,"./sl.js":686,"./sq":687,"./sq.js":687,"./sr":688,"./sr-cyrl":689,"./sr-cyrl.js":689,"./sr.js":688,"./ss":690,"./ss.js":690,"./sv":691,"./sv.js":691,"./sw":692,"./sw.js":692,"./ta":693,"./ta.js":693,"./te":694,"./te.js":694,"./tet":695,"./tet.js":695,"./tg":696,"./tg.js":696,"./th":697,"./th.js":697,"./tk":698,"./tk.js":698,"./tl-ph":699,"./tl-ph.js":699,"./tlh":700,"./tlh.js":700,"./tr":701,"./tr.js":701,"./tzl":702,"./tzl.js":702,"./tzm":703,"./tzm-latn":704,"./tzm-latn.js":704,"./tzm.js":703,"./ug-cn":705,"./ug-cn.js":705,"./uk":706,"./uk.js":706,"./ur":707,"./ur.js":707,"./uz":708,"./uz-latn":709,"./uz-latn.js":709,"./uz.js":708,"./vi":710,"./vi.js":710,"./x-pseudo":711,"./x-pseudo.js":711,"./yo":712,"./yo.js":712,"./zh-cn":713,"./zh-cn.js":713,"./zh-hk":714,"./zh-hk.js":714,"./zh-mo":715,"./zh-mo.js":715,"./zh-tw":716,"./zh-tw.js":716};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=729},742:function(t,e,n){"use strict";n.r(e);n(24),n(35),n(292);var r=n(13),o=(n(44),n(10)),c=n(17),l=(n(41),n(28)),f=n(579),d=n(52),m=n(578),j={layout:"dashboard",asyncData:function(t){var e=t.route,code=e.path.substr(e.path.lastIndexOf("/")+1),n=code.replace("add-","").replace(/\-/g,"_"),r=n.replace(/\-/g,"_").toUpperCase(),o=code.replace(/\-/g,"_").toUpperCase();return{code:code,type:n,codeTypesUpper:r,codeTypesTitle:o}},data:function(){var t,e=this;return t={type:"",code:""},Object(c.a)(t,"type",""),Object(c.a)(t,"constant",{ar:void 0,value:void 0,type:void 0,extra:{rank:void 0}}),Object(c.a)(t,"disabled",{branch:!1,permissions:!1}),Object(c.a)(t,"rules",{ar:[function(t){return!!t||e.$t("".concat(e.codeTypesUpper,"_FULLNAME_REQUIRED"))},function(t){return e.validateconstantName(t)}]}),t},created:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.$store.app.context,(n=e.nuxtState)&&(!n||n.constant)){t.next=4;break}return t.abrupt("return");case 4:this.setBranch(n.constant);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn"],meta:{branches:["followup"]},components:{materialCard:m.a},computed:Object(r.a)({},Object(l.c)({locations:"app/getLocations",defaults:"app/getDefaults"})),methods:{submit:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=12;break}return"/constant",this.constant.type=this.type,this.constant.value=this.constant.ar,t.next=7,Object(d.d)("/constant",this.constant);case 7:if(!(e=t.sent).error){t.next=10;break}return t.abrupt("return",f.a.fire({icon:"error",title:e.error,timer:4e3,showConfirmButton:!1}));case 10:f.a.fire({icon:"success",title:this.$i18n.t("Added_".concat(this.codeTypesUpper,"_Success")),timer:4e3,showConfirmButton:!1}),setTimeout(function(){window.location.href="/"},4e3);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),validateconstantName:function(t){return void 0===t},validatePassword:function(t){return void 0===t},setPermissions:function(t){var e=void 0;switch(this.defaults.RANKS.findIndex(function(e){return e.value===t})){case 0:e=0;break;case 1:case 2:case 3:case 4:case 5:e=1;break;case 6:case 7:case 8:case 9:case 10:e=2;break;case 11:case 12:e=3}console.log("permissions index",e),this.constant.permissions=this.defaults.PERMISSIONS[e].value},setBranch:function(t){var e=t.permissions;t.branch;!e.includes("admin")&&e.includes("branch_head")&&(this.constant.branch=t.branch,this.disabled.branch=!0,this.disabled.permissions=!0)}}},h=n(22),v=n(34),y=n.n(v),D=n(184),x=n(176),K=n(177),k=n(788),_=n(178),I=n(814),w=n(571),component=Object(h.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:t.$t(t.codeTypesTitle)}},[n("v-form",{ref:"form",attrs:{autocomplete:"new-password"}},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-layout",{attrs:{wrap:""}},["word_mules"===t.type?n("v-flex",{attrs:{xs12:"",md5:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.RANKS,"item-text":"ar","item-value":"value",label:t.$t("Rank")},model:{value:t.constant.extra.rank,callback:function(e){t.$set(t.constant.extra,"rank",e)},expression:"constant.extra.rank"}})],1):t._e(),t._v(" "),n("v-flex",{attrs:{xs12:"",md7:""}},[n("v-text-field",{staticClass:"black-input",attrs:{label:t.$t(t.codeTypesUpper+"_FULLNAME"),rules:t.rules.ar},model:{value:t.constant.ar,callback:function(e){t.$set(t.constant,"ar",e)},expression:"constant.ar"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:t.submit}},[t._v("\n                  "+t._s(t.$t("Add"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:D.a,VContainer:x.a,VFlex:K.a,VForm:k.a,VLayout:_.a,VSelect:I.a,VTextField:w.a})}}]);