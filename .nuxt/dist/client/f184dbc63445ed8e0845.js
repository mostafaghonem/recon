(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{747:function(t,e,l){"use strict";l(539);var n=l(538),r=l(540),o={props:{from:{type:String,default:""},selectedAvailableFrom:{type:Number,default:0},selectedAvailableTo:{type:Number,default:0},selectedGovernment:{type:String,default:""},types:{type:Object,default:function(){return{}}},slectedNumberOfPersons:{type:Number,default:0},selectedFurniture:{type:Number,default:0}},data:function(){return{government:"",unitTypes:r.j,rentersTypes:r.f,selectedType:"",numberOfPeople:null,cities:[],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-6048e5),t.$emit("pick",[l,e])}},{text:"Last month",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-2592e6),t.$emit("pick",[l,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-7776e6),t.$emit("pick",[l,e])}}]},typeChanged:!1,numberOfPeopleChanged:!1,furnitureChaned:!1,furniture:void 0,availableFrom:"",availableTo:"",value1:[],value2:""}},created:function(){var t=this;if(n.a&&0!==n.a.length&&(this.cities=n.a),this.selectedGovernment){var e=this.cities.filter((function(e){return String(e.value).toLowerCase()===String(t.selectedGovernment).toLowerCase()}));this.government=e[0].value||"Cairo"}if(this.selectedAvailableFrom&&(this.value1[0]=this.selectedAvailableFrom),this.selectedAvailableTo&&(this.value1[1]=this.selectedAvailableTo),this.slectedNumberOfPersons&&(this.numberOfPeople=this.slectedNumberOfPersons,this.numberOfPeopleChanged=!0),this.selectedFurniture)switch(parseInt(this.selectedFurniture,10)){case 1:this.furniture="مفروش",this.furnitureChaned=!0;break;case 2:this.furniture="غير مفروش",this.furnitureChaned=!0}},methods:{onSubmit:function(){},selectCity:function(){"home"!==this.from&&this.$parent.selectCity(this.government)},selectDates:function(){"home"!==this.from&&(this.$parent.availableFrom=new Date(this.value1[0]).getTime()),this.availableFrom=new Date(this.value1[0]).getTime(),"home"!==this.from&&(this.$parent.availableTo=new Date(this.value1[1]).getTime()),this.availableTo=new Date(this.value1[1]).getTime()},handleChange:function(t,e){this.furnitureChaned=!0,"home"!==this.from&&(this.$parent.furniture="مفروش"===this.furniture?1:2)},searchUnits:function(){if(this.government||this.value1||this.numberOfPeopleChanged||this.types.type||this.types.rentersType)if("home"!==this.from&&(this.$parent.numberOfPeople=this.numberOfPeople),this.from&&"home"===this.from){var t,e="government=".concat(this.government),l="availableFrom=".concat(this.availableFrom,"&availableTo=").concat(this.availableTo),n="numberOfPeople=".concat(this.numberOfPeople),r="furniture=".concat("مفروش"===this.furniture?1:2),o="type=".concat(this.types.type),c="rentersType=".concat(this.types.rentersType);this.government&&(t=e),t&&this.availableFrom?t+="&"+l:!t&&this.availableFrom&&(t=l),t&&this.numberOfPeopleChanged?t+="&"+n:!t&&this.numberOfPeopleChanged&&(t=n),t&&this.furnitureChaned?t+="&"+r:!t&&this.furnitureChaned&&(t=r),t&&this.types.type?t+="&"+o:!t&&this.types.type&&(t=o),t&&this.types.rentersType?t+="&"+c:!t&&this.types.rentersType&&(t=c),t&&!location?this.$router.push({path:"/units/".concat(this.government||"","?").concat(t)}):t&&location?location.href="/units/".concat(this.government||"","?").concat(t):location&&this.$router.push("/units")}else this.$parent.searchUnits(this.numberOfPeople)}}},c=l(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search"},[n("el-row",{staticClass:"search__tab-form",attrs:{gutter:2}},[n("el-col",{staticClass:"u-col-rtl top-input mob-input where-input tab-inputs ",attrs:{xs:24,sm:12,md:4,lg:4,xl:6}},[n("el-row",{attrs:{type:"flex",justify:"space-around"}},[n("el-col",{staticClass:"u-col-rtl",attrs:{span:2}},[n("i",{staticClass:"el-icon-location"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:20}},[n("el-select",{staticClass:"search__el",attrs:{filterable:"",placeholder:"اين ستقيم؟","popper-class":"search__popper"},on:{change:t.selectCity},model:{value:t.government,callback:function(e){t.government=e},expression:"government"}},t._l(t.cities,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[n("div",[n("span",{staticClass:"search__el-option-city-name"},[t._v(t._s(e.label))])]),t._v(" "),n("img",{attrs:{src:l(547),alt:""}})])})),1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl top-input mob-input tab-inputs",attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[n("el-date-picker",{staticClass:"search__el",attrs:{type:"daterange","range-separator":"-","start-placeholder":"تاريخ البدء","end-placeholder":"تاريخ الانتهاء"},on:{change:t.selectDates},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl mob-input tab-inputs",attrs:{xs:24,sm:12,md:8,lg:8,xl:6}},[n("el-row",{attrs:{type:"flex",justify:"space-around"}},[n("el-col",{attrs:{span:5,xs:4,sm:4}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{staticClass:"u-col-rtl",attrs:{span:24}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__center-item",placeholder:"النوع"},model:{value:t.types.rentersType,callback:function(e){t.$set(t.types,"rentersType",e)},expression:"types.rentersType"}},t._l(t.rentersTypes,(function(t){return n("el-option",{key:t.enValue,attrs:{label:t.arValue,value:t.enValue}})})),1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:10,xs:7,sm:7}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:24}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__center-item",placeholder:"حالة السكن"},on:{change:t.handleChange},model:{value:t.furniture,callback:function(e){t.furniture=e},expression:"furniture"}},[n("el-option",{attrs:{label:"مفروش",value:"مفروش"}}),t._v(" "),n("el-option",{attrs:{label:"غير مفروش",value:"غير مفروش"}})],1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:9,xs:7,sm:7}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:24}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__center-item",placeholder:"نوع الوحدة"},model:{value:t.types.type,callback:function(e){t.$set(t.types,"type",e)},expression:"types.type"}},t._l(t.unitTypes,(function(t){return n("el-option",{key:t.enValue,attrs:{label:t.arValue,value:t.enValue}})})),1)],1)],1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:4,lg:4,xl:4}},[n("el-button",{staticClass:"btn search__el search__btn",attrs:{size:"medium"},on:{click:t.searchUnits}},[t._v("\n          ابحث الان\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},748:function(t,e,l){"use strict";l(539);var n=l(538),r={props:{from:{type:String,default:""},selectedAvailableFrom:{type:Number,default:0},selectedAvailableTo:{type:Number,default:0},selectedGovernment:{type:String,default:""},selectedType2:{type:String,default:""},slectedNumberOfPersons:{type:Number,default:0}},data:function(){return{government:"",Type:"",Types:[{label:"فردى",value:"single"},{label:"زوجى",value:"double"},{label:"ثلاثى",value:"triple"}],selectedType:"",numberOfPersons:null,cities:[],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-6048e5),t.$emit("pick",[l,e])}},{text:"Last month",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-2592e6),t.$emit("pick",[l,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-7776e6),t.$emit("pick",[l,e])}}]},typeChanged:!1,numberOfPersonsChanged:!1,availableFrom:"",availableTo:"",value1:[],value2:""}},created:function(){var t=this;if(n.a&&0!==n.a.length&&(this.cities=n.a),this.selectedGovernment){var e=this.cities.filter((function(e){return String(e.value).toLowerCase()===String(t.selectedGovernment).toLowerCase()}));this.government=e[0].value||"Cairo"}this.selectedAvailableFrom&&(this.value1[0]=this.selectedAvailableFrom),this.selectedAvailableTo&&(this.value1[1]=this.selectedAvailableTo),this.selectedType2&&(this.Type=this.selectedType2),this.slectedNumberOfPersons&&(this.numberOfPersons=this.slectedNumberOfPersons,this.numberOfPersonsChanged=!0)},methods:{onSubmit:function(){},selectCity:function(){"home"!==this.from&&this.$parent.selectCity(this.government)},selectDates:function(){"home"!==this.from&&(this.$parent.availableFrom=new Date(this.value1[0]).getTime()),this.availableFrom=new Date(this.value1[0]).getTime(),"home"!==this.from&&(this.$parent.availableTo=new Date(this.value1[1]).getTime()),this.availableTo=new Date(this.value1[1]).getTime()},handleChange:function(t){this.numberOfPersonsChanged=!0,"home"!==this.from&&(this.$parent.numberOfPersons=this.numberOfPersons)},selectType:function(){var t=this;this.typeChanged=!0;var e=this.Types.filter((function(e){return String(e.value).toLowerCase()===String(t.Type).toLowerCase()}));this.selectedType=e[0].label||"فردى","home"!==this.from&&(this.$parent.Type=this.Type)},searchHostels:function(){if(this.government||this.value1||this.numberOfPersonsChanged||this.Type)if("home"!==this.from&&(this.$parent.numberOfPersons=this.numberOfPersons),this.from&&"home"===this.from){var t,e="government=".concat(this.government),l="availableFrom=".concat(this.availableFrom,"&availableTo=").concat(this.availableTo),n="numberOfPersons=".concat(this.numberOfPersons),r="Type=".concat(this.Type);this.government&&(t=e),t&&this.availableFrom?t+="&"+l:!t&&this.availableFrom&&(t=l),t&&this.numberOfPersonsChanged?t+="&"+n:!t&&this.numberOfPersonsChanged&&(t=n),t&&this.Type?t+="&"+r:!t&&this.Type&&(t=r),t&&this.$router.push({path:"/hotels?".concat(t)})}else this.$parent.searchHostels(this.numberOfPersons)}}},o=l(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search"},[n("el-row",{staticClass:"search__tab-form",attrs:{gutter:20}},[n("el-col",{staticClass:"u-col-rtl top-input mob-input where-input",attrs:{xs:24,sm:12,md:5,lg:6,xl:6}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:2}},[n("i",{staticClass:"el-icon-location"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:22}},[n("el-select",{staticClass:"search__el",attrs:{filterable:"",placeholder:"اين ستقيم؟","popper-class":"search__popper"},on:{change:t.selectCity},model:{value:t.government,callback:function(e){t.government=e},expression:"government"}},t._l(t.cities,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[n("div",[n("span",{staticClass:"search__el-option-city-name"},[t._v(t._s(e.label))])]),t._v(" "),n("img",{attrs:{src:l(547),alt:""}})])})),1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl top-input mob-input",attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[n("el-date-picker",{staticClass:"search__el",attrs:{type:"daterange","range-separator":"-","start-placeholder":"تاريخ البدء","end-placeholder":"تاريخ الانتهاء"},on:{change:t.selectDates},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl mob-input",attrs:{xs:24,sm:12,md:7,lg:6,xl:6}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-user"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:20}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__center-item",placeholder:"عدد الاشخاص"},on:{change:t.handleChange},model:{value:t.numberOfPersons,callback:function(e){t.numberOfPersons=e},expression:"numberOfPersons"}},t._l(10,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-table-lamp"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:21}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__center-item",placeholder:"نوع الغرفه"},on:{change:t.selectType},model:{value:t.Type,callback:function(e){t.Type=e},expression:"Type"}},t._l(t.Types,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:4,lg:4,xl:4}},[n("el-button",{staticClass:"btn search__el search__btn",attrs:{size:"medium"},on:{click:t.searchHostels}},[t._v("\n          ابحث الان\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},875:function(t,e,l){t.exports=l.p+"img/70ee42a.png"},876:function(t,e,l){t.exports=l.p+"img/aea7a3c.png"},877:function(t,e,l){t.exports=l.p+"img/1dde674.png"},905:function(t,e,l){"use strict";l.r(e);var n=l(878),r=l.n(n),o=l(541),c=l.n(o),h=l(12),m=l(540),v=(l(548),l(748)),_=l(747),d=l(699),f={components:{search:v.a,unitCard:d.a,unitsSearch:_.a},data:function(){return{Toast:c.a.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}),recentAddedUnits:null,specialUnits:null,isLoading:!0}},created:function(){},mounted:function(){var t=this,e=this.$route.query.token||null;if(e){if(localStorage.setItem("sknToken",e),this.$store.state.sessionStorage.cart.type)return this.$router.push("/checkouts"),!0;this.$router.push("/")}h.a.get("units/recommended").then((function(e){t.isLoading=!1,0!==e.data.units.length&&(t.recentAddedUnits=Object(m.e)(e.data.units),t.specialUnits=r.a.shuffle(t.recentAddedUnits).slice(0,4))})).catch((function(e){return t.isLoading=!1,t.recentAddedUnits=[],t.specialUnits=[],e}))},methods:{goSearchCity:function(t){this.$router.push(t)}}},C=l(4),component=Object(C.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",[n("unitsSearch",{attrs:{from:"home"}})],1),t._v(" "),n("section",{staticClass:"home-features"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("h1",{staticClass:"home__tittle"},[t._v("خدماتنا")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n          الخدمات التى نقدمها لعملائنا لمساعدتهم فى الاعلان عن مسكنهم.\n        ")])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(875),alt:""}}),t._v(" "),n("h3",[t._v("تصوير المسكن")]),t._v(" "),n("p",[t._v("\n            يمكن لمصورينا مساعدة إعلانك على التميز، بغض النظر عن الحجم أو\n            النمط. إنهم خبراء في التصوير الفوتوغرافي للإعلانات ويعرفون بالضبط\n            ما يبحث عنه الضيوف.\n          ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(876),alt:""}}),t._v(" "),n("h3",[t._v("تحصيل الايجار")]),t._v(" "),n("p",[t._v("\n            نقدم لك خدمة تحصيل الايجار لتسهيل تحصيل الإيجار والدفع، إذ تسمح لك\n            بمتابعة وضع كلّ دفعة وإرسال إشعارات تلقائية للتذكير بالسداد.\n          ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(877),alt:""}}),t._v(" "),n("h3",[t._v("اداره الممتلكات")]),t._v(" "),n("p",[t._v("\n            لأنك تستحق أن تدير ممتلكاتك بطريقة بسيطة وميسرة، ولأن مستأجريك\n            يستحقون سداد الأجار بإجراءات بسيطة وميسرة.\n          ")])])])],1)],1),t._v(" "),n("section",{staticClass:"home-city"},[n("div",{staticClass:"u-container"},[t._m(1),t._v(" "),n("el-button",{staticClass:"btn",on:{click:function(e){return t.goSearchCity("/hotels?government=Cairo")}}},[t._v("احجز الان")])],1)]),t._v(" "),n("section",{staticClass:"home-steps"},[n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("كل ما انت بحاجته للقيام بحجز اقامة")]),t._v(" "),n("p",{staticClass:"home__paragraph"}),t._v(" "),n("el-row",{staticClass:"hidden-md-and-down",attrs:{gutter:60}},[n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(729),alt:""}}),t._v(" "),n("h3",[t._v("استلام المسكن")]),t._v(" "),n("p",[t._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(731),alt:""}}),t._v(" "),n("h3",[t._v("الدفع")]),t._v(" "),n("p",[t._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(730),alt:""}}),t._v(" "),n("h3",[t._v("الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(732),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل")]),t._v(" "),n("p",[t._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه.\n            ")])])])],1),t._v(" "),n("el-row",{staticClass:"hidden-lg-and-up"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(732),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل")]),t._v(" "),n("p",[t._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(730),alt:""}}),t._v(" "),n("h3",[t._v("الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(731),alt:""}}),t._v(" "),n("h3",[t._v("الدفع")]),t._v(" "),n("p",[t._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(729),alt:""}}),t._v(" "),n("h3",[t._v("استلام المسكن")]),t._v(" "),n("p",[t._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك.\n            ")])])])],1)],1)]),t._v(" "),n("section",{staticClass:"home-new-unit"},[t.recentAddedUnits?n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("احدث الوحدات المضافة")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n        تصفح أماكن إقامة جميلة تضم كل وسائل راحة البيت، وغيرها الكثير.\n      ")]),t._v(" "),n("el-row",{attrs:{gutter:20}},t._l(t.recentAddedUnits,(function(t,e){return n("el-col",{key:e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("unitCard",{attrs:{available:t.available,unit:t,status:t.status,backgroundurl:t.image,"go-to":"/unitDetails/"+t._id}})],1)})),1)],1):t.isLoading?t._e():n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("انتظر احدث الفنادق")])])]),t._v(" "),n("section",{staticClass:"home-steps steps home-steps-upload"},[n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("ازاى ترفع مسكنك")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n        هل أنت مستعد لربح الأموال؟\n      ")]),t._v(" "),n("el-row",{staticClass:"hidden-md-and-down",attrs:{gutter:50}},[n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(727),alt:""}}),t._v(" "),n("h3",[t._v("استعد لاستقبال الضيوف")]),t._v(" "),n("p",[t._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(728),alt:""}}),t._v(" "),n("h3",[t._v("راجع طلبات الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(726),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل مسكنك مجانًا")]),t._v(" "),n("p",[t._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])])],1),t._v(" "),n("el-row",{staticClass:"hidden-lg-and-up"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(726),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل مسكنك مجانًا")]),t._v(" "),n("p",[t._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(728),alt:""}}),t._v(" "),n("h3",[t._v("راجع طلبات الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(727),alt:""}}),t._v(" "),n("h3",[t._v("استعد لاستقبال الضيوف")]),t._v(" "),n("p",[t._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])])],1)],1)]),t._v(" "),n("section",{staticClass:"home-city home-city-2"},[n("div",{staticClass:"u-container"},[t._m(2),t._v(" "),n("el-button",{staticClass:"btn",on:{click:function(e){return t.goSearchCity("/hotels?government=Alexandria")}}},[t._v("احجز الان")])],1)]),t._v(" "),n("section",{staticClass:"home-new-unit"},[t.specialUnits?n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("وحدات مميزة")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n        مجموعة مختارة من أماكن الإقامة التي تم التحقق من جودتها وتصميمها.\n      ")]),t._v(" "),n("el-row",{attrs:{gutter:20}},t._l(t.specialUnits,(function(t,e){return n("el-col",{key:e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("unitCard",{attrs:{available:t.available,unit:t,status:t.status,backgroundurl:t.image,"go-to":"/unitDetails/"+t._id}})],1)})),1)],1):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",[this._v("\n      استكشف عروض "),e("br"),this._v("\n      الفندق والبيوت وغيرها الكثير ...\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n        سكن الان ف القاهرة "),e("br"),this._v("\n        اكتشف افضل العروض الحصرية\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n        سكن الان ف الاسكندرية "),e("br"),this._v("\n        اكتشف افضل العروض الحصرية\n      ")])}],!1,null,null,null);e.default=component.exports}}]);