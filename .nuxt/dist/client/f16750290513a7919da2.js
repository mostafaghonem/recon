(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{577:function(t,e,r){var content=r(582);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("f7e6f252",content,!0,{sourceMap:!1})},578:function(t,e,r){var content=r(584);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("e6ed15ac",content,!0,{sourceMap:!1})},579:function(t,e,r){"use strict";r(16);var n={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},l=(r(581),r(22)),o={inheritAttrs:!1,components:{helperOffset:Object(l.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,null,null,null).exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close:function(){this.$emit("close")}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},c=(r(583),r(34)),d=r.n(c),f=r(563),h=r(739),v=r(565),m=r(185),_=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?r("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,null,null,null);e.a=_.exports;d()(_,{VCard:f.a,VCardActions:h.a,VCardText:h.b,VDivider:v.a,VIcon:m.a})},581:function(t,e,r){"use strict";var n=r(577);r.n(n).a},582:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},583:function(t,e,r){"use strict";var n=r(578);r.n(n).a},584:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},723:function(t,e,r){"use strict";var n=r(0);e.a=n.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},739:function(t,e,r){"use strict";var n=r(1),l=r(563),o=r(564),c=r(14),d=o.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(723);r.d(e,"a",function(){return h}),r.d(e,"b",function(){return v});var h=Object(n.f)("v-card__actions"),v=Object(n.f)("v-card__text");l.a,f.a},827:function(t,e,r){"use strict";r.r(e);var n={layout:"dashboard",components:{materialCard:r(579).a},data:function(){return{headers:[{sortable:!1,text:"Name",value:"name"},{sortable:!1,text:"Country",value:"country"},{sortable:!1,text:"City",value:"city"},{sortable:!1,text:"Salary",value:"salary",align:"right"}],items:[{name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"},{name:"Mason Porter",country:"Chile",city:"Gloucester",salary:"$78,615"}]}}},l=r(22),o=r(34),c=r.n(o),d=r(176),f=r(820),h=r(177),v=r(178),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{md12:""}},[r("material-card",{attrs:{color:"green",title:"Simple Table",text:"Here is a subtitle for this table"}},[r("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var header=e.header;return[r("span",{staticClass:"subheading font-weight-light text-label text--darken-3",domProps:{textContent:t._s(header.text)}})]}},{key:"items",fn:function(e){var n=e.item;return[r("td",[t._v(t._s(n.name))]),t._v(" "),r("td",[t._v(t._s(n.country))]),t._v(" "),r("td",[t._v(t._s(n.city))]),t._v(" "),r("td",{staticClass:"text-xs-right"},[t._v(t._s(n.salary))])]}}])})],1)],1),t._v(" "),r("v-flex",{attrs:{md12:""}},[r("material-card",{attrs:{color:"green",flat:"","full-width":"",title:"Table on Plain Background",text:"Here is a subtitle for this table"}},[r("v-data-table",{attrs:{headers:t.headers,items:t.items.slice(0,7),"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var header=e.header;return[r("span",{staticClass:"subheading font-weight-light text--darken-3",domProps:{textContent:t._s(header.text)}})]}},{key:"items",fn:function(e){var n=e.item;return[r("td",[t._v(t._s(n.name))]),t._v(" "),r("td",[t._v(t._s(n.country))]),t._v(" "),r("td",[t._v(t._s(n.city))]),t._v(" "),r("td",{staticClass:"text-xs-right"},[t._v(t._s(n.salary))])]}}])})],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a,VDataTable:f.a,VFlex:h.a,VLayout:v.a})}}]);