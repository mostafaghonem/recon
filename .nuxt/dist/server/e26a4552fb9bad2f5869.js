exports.ids=[27],exports.modules={260:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("f7e6f252",content,!0,t)}},261:function(t,e,r){var content=r(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("e6ed15ac",content,!0,t)}},263:function(t,e,r){"use strict";var n=r(0),o=r.n(n);e.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},265:function(t,e,r){"use strict";var n={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes(){return{"v-offset--full-width":this.fullWidth}},styles(){return{top:`-${this.offset}px`,marginBottom:`-${this.offset}px`}}}},o=r(10);var l={inheritAttrs:!1,components:{helperOffset:Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,function(t){var e=r(271);e.__inject__&&e.__inject__(t)},null,"2cf0020d").exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close(){this.$emit("close")}},computed:{hasOffset(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles(){return this.hasOffset?{marginBottom:`${this.offset}px`,marginTop:`${2*this.offset}px`}:null}}},c=r(12),d=r.n(c),f=r(247),h=r(291),m=r(248),v=r(72);var y=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?r("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,function(t){var e=r(273);e.__inject__&&e.__inject__(t)},null,"70552ac3");e.a=y.exports;d()(y,{VCard:f.a,VCardActions:h.a,VCardText:h.b,VDivider:m.a,VIcon:v.a})},267:function(t,e,r){"use strict";r.d(e,"a",function(){return D}),r.d(e,"i",function(){return K}),r.d(e,"c",function(){return x}),r.d(e,"b",function(){return S}),r.d(e,"f",function(){return w}),r.d(e,"g",function(){return $}),r.d(e,"e",function(){return C}),r.d(e,"d",function(){return O}),r.d(e,"h",function(){return U});var n=r(252),o=r.n(n),l=r(48),c=r.n(l),d=r(249),f=r.n(d),h=r(14);const m=[{UIKey:"RECRUITMENT_LEVELS",DataKey:"recruitmentLevel"},{UIKey:"FORCES_LIST",DataKey:"force"},{UIKey:"ARMY_LIST",DataKey:"army"},{UIKey:"EDUCATION_RANKS",DataKey:"educationRank"},{UIKey:"SITUATIONS",DataKey:"situation"},{UIKey:"TREATMENTS",DataKey:"treatment"},{UIKey:"DIRECTIONS",DataKey:"direction"},{UIKey:"MAILTYPES",DataKey:"mailType"}],v=[{UIKey:"governates",DataKey:"address.governate"},{UIKey:"recruitmentAreas",DataKey:"recruitmentArea"}],y=[{DataKey:"adminNo"},{DataKey:"seq"},{DataKey:"number"},{DataKey:"militaryId"},{DataKey:"nationalId"},{DataKey:"recordId"},{DataKey:"tripleNumber.value"},{DataKey:"division.name"},{DataKey:"joinDate"},{DataKey:"birthDate"},{DataKey:"releaseDate"},{DataKey:"unit.unitId.name"},{DataKey:"division.divisionId.name"}],_=[{UIKey:"RANKS",DataKey:"rank"},{UIKey:"BRANCHES",DataKey:"branch"}],D=o.a.mixin({toast:!0,position:"top-start"}),K=t=>{const e=[/0/g,/1/g,/2/g,/3/g,/4/g,/5/g,/6/g,/7/g,/8/g,/9/g],r=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];if("string"==typeof t)for(var i=0;i<10;i++)t=t.replace(e[i],r[i]);return t},x=(p,t)=>{const e=p.reduce((t,e)=>t&&t[e]?t[e]:null,t);return e&&"object"==typeof e&&e.length?e.map(t=>t.ar).join(","):e&&"object"==typeof e&&e.ar?e.ar:e&&"object"==typeof e&&!e.length?"":e},I=(t,e,r)=>{return c.a.set(t,e,r)},S=(t,e)=>{let r=e;return(t=>/\d/.test(t))(e)&&(r=K(e)),null!=t&&null!=r&&"string"==typeof t&&-1!==t.toString().indexOf(r)},w=(data,{locations:t,defaults:e})=>data.map(r=>((t,{locations:e,defaults:r})=>(m.map(e=>{if(t[e.DataKey]){const n=r[e.UIKey].find(r=>r.value===t[e.DataKey]);n&&(t[e.DataKey]=n.ar)}}),v.map(r=>{const n=r.DataKey.split(".");if(t[n[0]]){const o=e[r.UIKey].find(e=>e.value===x(n,t));o&&("governate"===t[n[0]][1]?t.address.governate=o.ar:(t[r.DataKey]=o.ar,I(t,n,o.ar)))}}),t.birthDate=f()(t.birthDate).locale("ar").format("YYYY/MM/DD"),t.joinDate=f()(t.joinDate).locale("ar").format("YYYY/MM/DD"),t.releaseDate=f()(t.releaseDate).locale("ar").format("YYYY/MM/DD"),y.map(e=>{const r=x(e.DataKey.split("."),t);if(r){const n=K(r.toString());I(t,`${e.DataKey}_ar`.split("."),n)}}),t))(r,{locations:t,defaults:e})),$=(data,{defaults:t})=>data.map(e=>((t,{defaults:e})=>{_.map(r=>{if(t[r.DataKey]){console.log("value",t[r.DataKey],"the object",r);const n=e[r.UIKey].find(e=>e.value===t[r.DataKey]);n&&(t[r.DataKey]=n.ar)}});const r=e.PERMISSIONS.find(e=>e.value===t.permissions[0]);return t.permissions=r?r.ar:t.permissions,t})(e,{defaults:t})),C=(data,{defaults:t})=>data.map(e=>((t,{defaults:e})=>{m.map(r=>{if(t[r.DataKey]){const data=e[r.UIKey],n=data?data.find(e=>e.value===t[r.DataKey]):void 0;n&&(t[r.DataKey]=n.ar)}}),y.map(e=>{const r=x(e.DataKey.split("."),t);if(r){const n=K(r.toString());I(t,`${e.DataKey}_ar`.split("."),n)}}),t.date=f()(t.date).locale("ar").format("YYYY/MM/DD"),t.createdAtDate=f()(t.createdAt).locale("ar").format("YYYY/MM/DD hh:mm a");const r=e.BRANCHES.filter(e=>t.branches.find(t=>e.value===t)),n=e.BRANCHES.find(e=>e.value===t.branch);return t.branches=r,t.branch=n,t.attachments=t.attachments.map(t=>(t.link=`${h.a}${t.path}`,t)),t})(e,{defaults:t})),O=(data,{locations:t,defaults:e})=>{const r=data.map(t=>((t,{defaults:e})=>{const r={};return t.soldierId&&(r.soldierId=t.soldierId.militaryId,r.fullName=t.soldierId.fullName),t.pastUnit&&(r.pastUnit=t.pastUnit.unitId.name),t.unitId&&(r.unitName=t.unitId.name),t.userId&&(r.username=t.userId.username),r.timestamp=f()(t.createdAt).format("x"),r.createdAt=f()(t.createdAt).locale("ar").format("YYYY/MM/DD hh:mm a"),r})(t,{defaults:e}));return c.a.orderBy(r,["unitName"],["asc"])},U=function(t){t&&t.length&&t.includes("all")&&console.log("the valuye",t,this.fieldsValue)}},271:function(t,e,r){"use strict";r.r(e);var n=r(260),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},272:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},273:function(t,e,r){"use strict";r.r(e);var n=r(261),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},274:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},277:function(t,e,r){var content=r(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),r(5).default("08d4b84c",content,!0)},278:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},291:function(t,e,r){"use strict";var n=r(1),o=r(247),l=r(251),c=r(8),d=l.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(263);r.d(e,"a",function(){return h}),r.d(e,"b",function(){return m});var h=Object(n.f)("v-card__actions"),m=Object(n.f)("v-card__text");o.a,f.a},309:function(t,e,r){"use strict";r(277);var n=r(16);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))}):r.valid=e(input),r},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},356:function(t,e,r){"use strict";r.r(e);var n=r(11),o=r(14),l=r(267),c={components:{materialCard:r(265).a},created(){},mounted(){console.log("login page mounted")},data:()=>({isLoading:!1,username:void 0,password:void 0,defaultUserPassword:void 0}),computed:{isDisabled(){return this.isLoading}},middleware:["auth","isLoggedIn"],methods:{...Object(n.mapActions)({setUser:"localStorage/setUser"}),async authenticate(){if(!this.isDisabled){this.isLoading=!0;const t=await this.login();this.isLoading=!1,t.error?(console.log("the error",t.error),l.a.fire({icon:"error",title:t.error,timer:3e3,showConfirmButton:!1})):(localStorage.setItem("reconToken",t.token),localStorage.setItem("user",JSON.stringify(t)),await this.setUser(t),this.$router.push({path:"/dashboard"}))}},async login(){return await Object(o.d)("/users/login",{username:this.username,password:this.password})}}},d=r(10),f=r(12),h=r.n(f),m=r(71),v=r(291),y=r(63),_=r(66),D=r(64),K=r(309),x=r(65),I=r(259),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",{attrs:{dir:"auto"}},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("material-card",{attrs:{color:"success",elevation:"12",title:t.$t("RECON_LOGIN"),dark:""}},[r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{type:"text","prepend-icon":"person",name:"username",label:t.$t("USERNAME"),placeholder:t.username},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),r("v-text-field",{attrs:{type:"password","prepend-icon":"lock",name:"password",label:t.$t("PASSWORD"),placeholder:t.defaultUserPassword},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-btn",{attrs:{color:"success",disabled:t.isDisabled},on:{click:function(e){return e.preventDefault(),t.authenticate(e)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.authenticate(e)}}},[t._v(t._s(t.$t("LOGIN")))])],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,"40abb0dc");e.default=component.exports;h()(component,{VBtn:m.a,VCardActions:v.a,VCardText:v.b,VContainer:y.a,VContent:_.a,VFlex:D.a,VForm:K.a,VLayout:x.a,VTextField:I.a})}};
//# sourceMappingURL=e26a4552fb9bad2f5869.js.map