exports.ids=[54],exports.modules={266:function(t,e,r){var content=r(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("f7e6f252",content,!0,t)}},267:function(t,e,r){var content=r(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("e6ed15ac",content,!0,t)}},269:function(t,e,r){"use strict";var n={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes(){return{"v-offset--full-width":this.fullWidth}},styles(){return{top:`-${this.offset}px`,marginBottom:`-${this.offset}px`}}}},o=r(10);var l={inheritAttrs:!1,components:{helperOffset:Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,function(t){var e=r(279);e.__inject__&&e.__inject__(t)},null,"5e890aa3").exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close(){this.$emit("close")}},computed:{hasOffset(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles(){return this.hasOffset?{marginBottom:`${this.offset}px`,marginTop:`${2*this.offset}px`}:null}}},c=r(12),d=r.n(c),f=r(250),v=r(314),_=r(251),h=r(73);var m=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?r("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,function(t){var e=r(281);e.__inject__&&e.__inject__(t)},null,"bc23994e");e.a=m.exports;d()(m,{VCard:f.a,VCardActions:v.a,VCardText:v.b,VDivider:_.a,VIcon:h.a})},271:function(t,e,r){"use strict";var n=r(0),o=r.n(n);e.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},279:function(t,e,r){"use strict";r.r(e);var n=r(266),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},280:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},281:function(t,e,r){"use strict";r.r(e);var n=r(267),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},282:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},314:function(t,e,r){"use strict";var n=r(1),o=r(250),l=r(253),c=r(8),d=l.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(271);r.d(e,"a",function(){return v}),r.d(e,"b",function(){return _});var v=Object(n.f)("v-card__actions"),_=Object(n.f)("v-card__text");o.a,f.a},392:function(t,e,r){"use strict";r.r(e);var n={components:{materialCard:r(269).a},created(){},mounted(){console.log("unauthenticated page mounted")},data:()=>({}),computed:{}},o=r(10),l=r(12),c=r.n(l),d=r(72),f=r(314),v=r(64),_=r(67),h=r(65),m=r(66),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-content",{attrs:{dir:"auto"}},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("material-card",{attrs:{color:"success",elevation:"12",title:t.$t("RECON_LOGIN"),dark:""}},[r("v-card-text",{staticClass:"card-message"},[t._v(t._s(t.$t("Unauthorized_Message")))]),t._v(" "),r("v-card-actions",[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-btn",{attrs:{to:"/dashboard",color:"success"}},[t._v(t._s(t.$t("BACK")))])],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,"33b6bdf6");e.default=component.exports;c()(component,{VBtn:d.a,VCardActions:f.a,VCardText:f.b,VContainer:v.a,VContent:_.a,VFlex:h.a,VLayout:m.a})}};
//# sourceMappingURL=addebdf6f6f39f6106ac.js.map