exports.ids=[5,26],exports.modules={260:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("f7e6f252",content,!0,t)}},261:function(t,e,r){var content=r(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("e6ed15ac",content,!0,t)}},263:function(t,e,r){"use strict";var n=r(0),o=r.n(n);e.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},265:function(t,e,r){"use strict";var n={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes(){return{"v-offset--full-width":this.fullWidth}},styles(){return{top:`-${this.offset}px`,marginBottom:`-${this.offset}px`}}}},o=r(10);var l={inheritAttrs:!1,components:{helperOffset:Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"v-offset",class:this.classes,style:this.styles},[this._t("default")],2)},[],!1,function(t){var e=r(271);e.__inject__&&e.__inject__(t)},null,"2cf0020d").exports},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0},headerAction:{type:String,default:void 0}},methods:{close(){this.$emit("close")}},computed:{hasOffset(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles(){return this.hasOffset?{marginBottom:`${this.offset}px`,marginTop:`${2*this.offset}px`}:null}}},c=r(12),d=r.n(c),f=r(247),v=r(291),h=r(248),_=r(72);var m=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?r("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):r("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.headerAction&&"close"===t.headerAction?r("v-icon",{staticClass:"mr-2 close",attrs:{small:""},on:{click:t.close}},[t._v("\n        mdi-close\n      ")]):t._e(),t._v(" "),t.title||t.text?r("span",[r("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),t._v(" "),r("v-card-text",[t._t("default")],2),t._v(" "),t.$slots.actions?r("v-divider",{staticClass:"mx-3"}):t._e(),t._v(" "),t.$slots.actions?r("v-card-actions",[t._t("actions")],2):t._e()],1)},[],!1,function(t){var e=r(273);e.__inject__&&e.__inject__(t)},null,"70552ac3");e.a=m.exports;d()(m,{VCard:f.a,VCardActions:v.a,VCardText:v.b,VDivider:h.a,VIcon:_.a})},271:function(t,e,r){"use strict";r.r(e);var n=r(260),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},272:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-offset{margin:0 auto;position:relative}.v-offset--full-width{max-width:100%}.add-button{margin-right:39%;margin-left:50%;width:130px;height:30px;border-radius:25px!important}",""])},273:function(t,e,r){"use strict";r.r(e);var n=r(261),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},274:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material__header.v-card{border-radius:4px}",""])},291:function(t,e,r){"use strict";var n=r(1),o=r(247),l=r(251),c=r(8),d=l.a.extend({name:"v-card-media",mounted:function(){Object(c.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),f=r(263);r.d(e,"a",function(){return v}),r.d(e,"b",function(){return h});var v=Object(n.f)("v-card__actions"),h=Object(n.f)("v-card__text");o.a,f.a},323:function(t,e,r){var content=r(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("338b03d8",content,!0,t)}},324:function(t,e,r){var content=r(331);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(5).default;t.exports.__inject__=function(t){n("61952510",content,!0,t)}},328:function(t,e,r){"use strict";r.r(e);var n=r(323),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},329:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material-chart .v-card--material__header .ct-label{color:inherit;opacity:.7;font-size:.975rem;font-weight:100}.v-card--material-chart .v-card--material__header .ct-grid{stroke:hsla(0,0%,100%,.2)}.v-card--material-chart .v-card--material__header .ct-series-a .ct-bar,.v-card--material-chart .v-card--material__header .ct-series-a .ct-line,.v-card--material-chart .v-card--material__header .ct-series-a .ct-point,.v-card--material-chart .v-card--material__header .ct-series-a .ct-slice-donut{stroke:hsla(0,0%,100%,.8)}.v-card--material-chart .v-card--material__header .ct-series-a .ct-area,.v-card--material-chart .v-card--material__header .ct-series-a .ct-slice-pie{fill:hsla(0,0%,100%,.4)}",""])},330:function(t,e,r){"use strict";r.r(e);var n=r(324),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},331:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-card--material-stats{display:flex;flex-wrap:wrap;position:relative}.v-card--material-stats .v-offset{display:inline-block;flex:0 1;margin-top:0;margin-left:0;margin-right:auto;margin-bottom:0!important;max-width:auto;padding:0 16px}.v-card--material-stats .v-card{border-radius:4px;flex:0 1 auto}.v-card--material-stats .v-card__text{display:inline-block;position:absolute;top:0;right:0;width:100%}.v-card--material-stats .v-card__actions{flex:1 0 100%}",""])},335:function(t,e,r){"use strict";r.r(e);var n=r(265),o={inheritAttrs:!1,components:{materialCard:n.a},props:{data:{type:Object,default:()=>({})},eventHandlers:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},ratio:{type:String,default:"none"},responsiveOptions:{type:Array,default:()=>[]},type:{type:String,required:!0,validator:t=>["Bar","Line","Pie"].includes(t)}}},l=r(10);var c=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[r("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._v(" "),t._t("default"),t._v(" "),t._t("actions",null,{slot:"actions"})],2)},[],!1,function(t){var e=r(328);e.__inject__&&e.__inject__(t)},null,"132ad12a").exports,d={inheritAttrs:!1,components:{materialCard:n.a},props:{...n.a.props,icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}}},f=r(12),v=r.n(f),h=r(247),_=r(72);var m=Object(l.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[r("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[r("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),r("small",[t._v(t._s(t.smallValue))])])]),t._v(" "),r("template",{slot:"actions"},[r("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),t._v(" "),r("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},[],!1,function(t){var e=r(330);e.__inject__&&e.__inject__(t)},null,"e18599a8"),y=m.exports;v()(m,{VCard:h.a,VIcon:_.a});var x={layout:"dashboard",middleware:["auth","isNotLoggedIn"],components:{materialCard:n.a,materialChartCard:c,materialStatsCard:y},data:()=>({dailySalesChart:{data:{labels:["M","T","W","T","F","S","S"],series:[[12,17,7,17,23,18,38]]},options:{low:0,high:50,chartPadding:{top:0,right:0,bottom:0,left:0}}},dataCompletedTasksChart:{data:{labels:["12am","3pm","6pm","9pm","12pm","3am","6am","9am"],series:[[230,750,450,300,280,240,200,190]]},options:{low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},emailsSubscriptionChart:{data:{labels:["Ja","Fe","Ma","Ap","Mai","Ju","Jul","Au","Se","Oc","No","De"],series:[[542,443,320,780,553,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!1,text:"Name",value:"name"},{sortable:!1,text:"Salary",value:"salary",align:"right"},{sortable:!1,text:"Country",value:"country",align:"right"},{sortable:!1,text:"City",value:"city",align:"right"}],items:[{name:"Dakota Rice",country:"Niger",city:"Oud-Tunrhout",salary:"$35,738"},{name:"Minerva Hooper",country:"Curaçao",city:"Sinaai-Waas",salary:"$23,738"},{name:"Sage Rodriguez",country:"Netherlands",city:"Overland Park",salary:"$56,142"},{name:"Philip Chanley",country:"Korea, South",city:"Gloucester",salary:"$38,735"},{name:"Doris Greene",country:"Malawi",city:"Feldkirchen in Kārnten",salary:"$63,542"}],tabs:0,list:{0:!1,1:!1,2:!1}}),methods:{complete(t){this.list[t]=!this.list[t]}},mounted(){this.$nextTick(()=>{})}},C=r(63),S=Object(l.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}})},[],!1,null,null,"1602847b");e.default=S.exports;v()(S,{VContainer:C.a})},368:function(t,e,r){"use strict";r.r(e);var n=r(335).default,o=r(10),component=Object(o.a)(n,void 0,void 0,!1,null,null,"5fe624bd");e.default=component.exports}};
//# sourceMappingURL=a93e74163b00e8b88239.js.map