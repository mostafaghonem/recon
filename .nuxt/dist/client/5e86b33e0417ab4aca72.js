(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{647:function(t,e,l){t.exports=l.p+"img/d9777ab.jpg"},675:function(t,e,l){"use strict";l.r(e);var c=l(359),o=l(567),r=l(568),n={components:{profileCard:c.a,addHotelGroupUnit:o.a,addHotelGroupRequests:r.a},data:function(){return{rateValue:4,office:!1,hotel:!0,selectedComponent:"addHotelGroupUnit",profileVisible:!1}},methods:{changeCategory:function(t){switch(t){case"unit":this.office=!1,this.hotel=!1,this.unit=!0;break;case"hotel":this.office=!1,this.unit=!1,this.hotel=!0;break;case"office":this.hotel=!1,this.unit=!1,this.office=!0}},goBack:function(){this.$router.push({path:"/dashboard"})},showProfile:function(){this.profileVisible=!0},closeProfile:function(){this.profileVisible=!1}}},d=l(3),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"add-hotel-group-container"},[c("div",{staticClass:"add-hotel-group u-container",staticStyle:{background:"#f2f2f2","padding-top":"5rem"}},[c("el-row",{attrs:{gutter:20}},[c("el-col",{attrs:{xs:24,sm:16,md:16,lg:16,xl:16}},[c("el-row",{staticClass:"header-title-back-btn"},[c("i",{staticClass:"el-icon-back dialogBackBtn",on:{click:t.goBack}}),t._v(" "),c("h2",{staticClass:"dialogMainTitle",staticStyle:{"margin-right":"10px"}},[t._v("\n            الفندق الخاصة بك\n          ")])]),t._v(" "),c("el-card",{staticClass:"add-hotel-group-container__hotel-card"},[c("el-row",{attrs:{gutter:30}},[c("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:8,md:8,lg:8,xl:8}},[c("img",{staticClass:"unitCardImg",attrs:{src:l(647)}})]),t._v(" "),c("el-col",{staticClass:"rightText u-col-rtl",staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:16,md:16,lg:16,xl:16}},[c("p",{staticClass:"unitCardTitle"},[t._v("\n                عين شمس أول احمد عصمت , "),c("span",[t._v("القاهرة")])]),t._v(" "),c("p",{staticClass:"unitCardSubtitle"},[t._v("\n                عين شمس أول احمد عصمت\n              ")]),t._v(" "),c("p",{staticClass:"unitCardSubtitle"},[c("el-rate",{attrs:{disabled:""},model:{value:t.rateValue,callback:function(e){t.rateValue=e},expression:"rateValue"}}),t._v("\n                450 مستخدم\n              ")],1),t._v(" "),c("img",{staticClass:"unitCardActionIcon",attrs:{src:l(496)}}),t._v(" "),c("img",{staticClass:"unitCardActionIcon",attrs:{src:l(494)}}),t._v(" "),c("el-button",{staticClass:"btn unitsFormMargin"},[t._v("\n                تعديل البيانات\n                "),c("i",{staticClass:"el-icon-edit-outline"})])],1)],1)],1),t._v(" "),c("el-row",{staticStyle:{margin:"3rem 0"},attrs:{gutter:0}},[c("el-col",{staticClass:"u-col-rtl",attrs:{xs:12,sm:8,md:8,lg:8,xl:8}},[c("div",{staticClass:"rents__category-card",class:t.hotel?"active-card":"",on:{click:function(e){t.changeCategory("hotel"),t.selectedComponent="addHotelGroupUnit"}}},[c("div",{staticClass:"rents__category-icon"},[t.hotel?t._e():c("img",{attrs:{src:l(357),alt:""}}),t._v(" "),t.hotel?c("img",{attrs:{src:l(356),alt:""}}):t._e()]),t._v(" "),c("div",{staticClass:"rents__category-numbers"},[c("h3",[t._v("وحدة"),c("span")]),t._v(" "),c("h6",[t._v("عدد الفندق الخاصة بك")])])])]),t._v(" "),c("el-col",{staticClass:"u-col-rtl",attrs:{xs:12,sm:8,md:8,lg:8,xl:8}},[c("div",{staticClass:"rents__category-card",class:t.office?"active-card":"",staticStyle:{"margin-right":"1rem"},on:{click:function(e){t.changeCategory("office"),t.selectedComponent="addHotelGroupRequests"}}},[c("div",{staticClass:"rents__category-icon"},[t.office?t._e():c("img",{attrs:{src:l(357),alt:""}}),t._v(" "),t.office?c("img",{attrs:{src:l(356),alt:""}}):t._e()]),t._v(" "),c("div",{staticClass:"rents__category-numbers"},[c("h3",[t._v("الطلبات"),c("span")]),t._v(" "),c("h6",[t._v("عدد الطلبات الخاصة بك")])])])])],1),t._v(" "),c(t.selectedComponent,{tag:"div",staticClass:"changeView"})],1),t._v(" "),c("el-col",{attrs:{xs:24,sm:8,md:8,lg:8,xl:8}},[c("el-card",{staticClass:"rents__user-profile",attrs:{"body-style":{padding:"0px"}}},[c("profileCard")],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);