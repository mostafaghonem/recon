(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{349:function(e,t,l){"use strict";t.a=[{value:"alexandria",label:"الإسكندرية"},{value:"ismailia",label:"الإسماعيلية"},{value:"aswan",label:"أسوان"},{value:"asyut",label:"أسيوط"},{value:"luxor",label:"الأقصر"},{value:"red sea",label:"البحر الأحمر"},{value:"el beheira",label:"البحيرة"},{value:"beni suef",label:"بني سويف"},{value:"port said",label:"بورسعيد"},{value:"south sinai",label:"جنوب سيناء"},{value:"giza",label:"الجيزة"},{value:"dakahlia",label:"الدقهلية"},{value:"damietta",label:"دمياط"},{value:"sohag",label:"سوهاج"},{value:"suez",label:"السويس"},{value:"ash sharqia",label:"الشرقية"},{value:"north sinai",label:"شمال سيناء"},{value:"gharbia",label:"الغربية"},{value:"faiyum",label:"الفيوم"},{value:"cairo",label:"القاهرة"},{value:"al qalyubia",label:"القليوبية"},{value:"qena",label:"قنا"},{value:"kafr el sheikh",label:"كفر الشيخ"},{value:"marsa matruh",label:"مرسى مطروح"},{value:"menofia",label:"المنوفية"},{value:"minya",label:"المنيا"},{value:"new valley",label:"الوادي الجديد"}]},511:function(e,t,l){"use strict";l(351);var n=l(349),r={props:{from:{type:String,default:""},selectedAvailableFrom:{type:Number,default:0},selectedAvailableTo:{type:Number,default:0},selectedGovernment:{type:String,default:""},selectedType2:{type:String,default:""},slectedNumberOfPersons:{type:Number,default:0}},data:function(){return{government:"",Type:"",Types:[{label:"فردى",value:"single"},{label:"زوجى",value:"double"},{label:"ثلاثى",value:"triple"}],selectedType:"",numberOfPersons:null,cities:[],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-6048e5),e.$emit("pick",[l,t])}},{text:"Last month",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-2592e6),e.$emit("pick",[l,t])}},{text:"Last 3 months",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-7776e6),e.$emit("pick",[l,t])}}]},typeChanged:!1,numberOfPersonsChanged:!1,availableFrom:"",availableTo:"",value1:[],value2:""}},created:function(){var e=this;if(n.a&&0!==n.a.length&&(this.cities=n.a),this.selectedGovernment){var t=this.cities.filter((function(t){return String(t.value).toLowerCase()===String(e.selectedGovernment).toLowerCase()}));this.government=t[0].value||"Cairo"}this.selectedAvailableFrom&&(this.value1[0]=this.selectedAvailableFrom),this.selectedAvailableTo&&(this.value1[1]=this.selectedAvailableTo),this.selectedType2&&(this.Type=this.selectedType2),this.slectedNumberOfPersons&&(this.numberOfPersons=this.slectedNumberOfPersons,this.numberOfPersonsChanged=!0)},methods:{onSubmit:function(){},selectCity:function(){"home"!==this.from&&this.$parent.selectCity(this.government)},selectDates:function(){"home"!==this.from&&(this.$parent.availableFrom=new Date(this.value1[0]).getTime()),this.availableFrom=new Date(this.value1[0]).getTime(),"home"!==this.from&&(this.$parent.availableTo=new Date(this.value1[1]).getTime()),this.availableTo=new Date(this.value1[1]).getTime()},handleChange:function(e){this.numberOfPersonsChanged=!0,"home"!==this.from&&(this.$parent.numberOfPersons=this.numberOfPersons)},selectType:function(){var e=this;this.typeChanged=!0;var t=this.Types.filter((function(t){return String(t.value).toLowerCase()===String(e.Type).toLowerCase()}));this.selectedType=t[0].label||"فردى","home"!==this.from&&(this.$parent.Type=this.Type)},searchHostels:function(){if(this.government||this.value1||this.numberOfPersonsChanged||this.Type)if("home"!==this.from&&(this.$parent.numberOfPersons=this.numberOfPersons),this.from&&"home"===this.from){var e,t="government=".concat(this.government),l="availableFrom=".concat(this.availableFrom,"&availableTo=").concat(this.availableTo),n="numberOfPersons=".concat(this.numberOfPersons),r="Type=".concat(this.Type);this.government&&(e=t),e&&this.availableFrom?e+="&"+l:!e&&this.availableFrom&&(e=l),e&&this.numberOfPersonsChanged?e+="&"+n:!e&&this.numberOfPersonsChanged&&(e=n),e&&this.Type?e+="&"+r:!e&&this.Type&&(e=r),e&&this.$router.push({path:"/hotels?".concat(e)})}else this.$parent.searchHostels(this.numberOfPersons)}}},o=l(2),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search"},[n("el-row",{staticClass:"search__tab-form",attrs:{gutter:20}},[n("el-col",{staticClass:"u-col-rtl top-input mob-input where-input",attrs:{xs:24,sm:12,md:5,lg:6,xl:6}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:2}},[n("i",{staticClass:"el-icon-location"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:22}},[n("el-select",{staticClass:"search__el",attrs:{filterable:"",placeholder:"اين ستقيم؟","popper-class":"search__popper"},on:{change:e.selectCity},model:{value:e.government,callback:function(t){e.government=t},expression:"government"}},e._l(e.cities,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[n("div",[n("span",{staticClass:"search__el-option-city-name"},[e._v(e._s(t.label))])]),e._v(" "),n("img",{attrs:{src:l(358),alt:""}})])})),1)],1)],1)],1),e._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl top-input mob-input",attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[n("el-date-picker",{staticClass:"search__el",attrs:{type:"daterange","range-separator":"-","start-placeholder":"تاريخ البدء","end-placeholder":"تاريخ الانتهاء"},on:{change:e.selectDates},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl mob-input",attrs:{xs:24,sm:12,md:7,lg:6,xl:6}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-user"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:20}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__rtl",placeholder:"عدد الاشخاص"},on:{change:e.handleChange},model:{value:e.numberOfPersons,callback:function(t){e.numberOfPersons=t},expression:"numberOfPersons"}},e._l(10,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-table-lamp"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:21}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__rtl",placeholder:"نوع الغرفه"},on:{change:e.selectType},model:{value:e.Type,callback:function(t){e.Type=t},expression:"Type"}},e._l(e.Types,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)],1),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:4,lg:4,xl:4}},[n("el-button",{staticClass:"btn search__el search__btn",attrs:{size:"medium"},on:{click:e.searchHostels}},[e._v("\n          ابحث الان\n        ")])],1)],1)],1)])}),[],!1,null,null,null);t.a=component.exports},512:function(e,t,l){"use strict";l(351);var n=l(349),r=l(360),o={props:{from:{type:String,default:""},selectedAvailableFrom:{type:Number,default:0},selectedAvailableTo:{type:Number,default:0},selectedGovernment:{type:String,default:""},types:{type:Object,default:function(){return{}}},slectedNumberOfPersons:{type:Number,default:0}},data:function(){return{government:"",unitTypes:r.i,rentersTypes:r.f,selectedType:"",numberOfPeople:null,cities:[],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-6048e5),e.$emit("pick",[l,t])}},{text:"Last month",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-2592e6),e.$emit("pick",[l,t])}},{text:"Last 3 months",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-7776e6),e.$emit("pick",[l,t])}}]},typeChanged:!1,numberOfPeopleChanged:!1,availableFrom:"",availableTo:"",value1:[],value2:""}},created:function(){var e=this;if(n.a&&0!==n.a.length&&(this.cities=n.a),this.selectedGovernment){var t=this.cities.filter((function(t){return String(t.value).toLowerCase()===String(e.selectedGovernment).toLowerCase()}));this.government=t[0].value||"Cairo"}this.selectedAvailableFrom&&(this.value1[0]=this.selectedAvailableFrom),this.selectedAvailableTo&&(this.value1[1]=this.selectedAvailableTo),this.slectedNumberOfPersons&&(this.numberOfPeople=this.slectedNumberOfPersons,this.numberOfPeopleChanged=!0)},methods:{onSubmit:function(){},selectCity:function(){"home"!==this.from&&this.$parent.selectCity(this.government)},selectDates:function(){"home"!==this.from&&(this.$parent.availableFrom=new Date(this.value1[0]).getTime()),this.availableFrom=new Date(this.value1[0]).getTime(),"home"!==this.from&&(this.$parent.availableTo=new Date(this.value1[1]).getTime()),this.availableTo=new Date(this.value1[1]).getTime()},handleChange:function(e){this.numberOfPeopleChanged=!0,"home"!==this.from&&(this.$parent.numberOfPeople=this.numberOfPeople)},searchUnits:function(){if(this.government||this.value1||this.numberOfPeopleChanged||this.types.type||this.types.rentersType)if("home"!==this.from&&(this.$parent.numberOfPeople=this.numberOfPeople),this.from&&"home"===this.from){var e,t="government=".concat(this.government),l="availableFrom=".concat(this.availableFrom,"&availableTo=").concat(this.availableTo),n="numberOfPeople=".concat(this.numberOfPeople),r="type=".concat(this.types.type),o="rentersType=".concat(this.types.rentersType);this.government&&(e=t),e&&this.availableFrom?e+="&"+l:!e&&this.availableFrom&&(e=l),e&&this.numberOfPeopleChanged?e+="&"+n:!e&&this.numberOfPeopleChanged&&(e=n),e&&this.types.type?e+="&"+r:!e&&this.types.type&&(e=r),e&&this.types.rentersType?e+="&"+o:!e&&this.types.rentersType&&(e=o),e&&!location?this.$router.push({path:"/units/".concat(this.government||"","?").concat(e)}):e&&location?location.href="/units/".concat(this.government||"","?").concat(e):location&&(location.href="/units")}else this.$parent.searchUnits(this.numberOfPeople)}}},c=l(2),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search"},[n("el-row",{staticClass:"search__tab-form",attrs:{gutter:2}},[n("el-col",{staticClass:"u-col-rtl top-input mob-input where-input",attrs:{xs:24,sm:12,md:4,lg:6,xl:6}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:2}},[n("i",{staticClass:"el-icon-location"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:22}},[n("el-select",{staticClass:"search__el",attrs:{filterable:"",placeholder:"اين ستقيم؟","popper-class":"search__popper"},on:{change:e.selectCity},model:{value:e.government,callback:function(t){e.government=t},expression:"government"}},e._l(e.cities,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}},[n("div",[n("span",{staticClass:"search__el-option-city-name"},[e._v(e._s(t.label))])]),e._v(" "),n("img",{attrs:{src:l(358),alt:""}})])})),1)],1)],1)],1),e._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl top-input mob-input",attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[n("el-date-picker",{staticClass:"search__el",attrs:{type:"daterange","range-separator":"-","start-placeholder":"تاريخ البدء","end-placeholder":"تاريخ الانتهاء"},on:{change:e.selectDates},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl mob-input",attrs:{xs:24,sm:12,md:8,lg:6,xl:6}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:10}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-user"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:20}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__rtl",placeholder:"مفروش او لا"},on:{change:e.handleChange},model:{value:e.numberOfPeople,callback:function(t){e.numberOfPeople=t},expression:"numberOfPeople"}},[n("el-option",{attrs:{label:"مفروش",value:"مفروش"}}),e._v(" "),n("el-option",{attrs:{label:"غير مفروش",value:"غير مفروش"}})],1)],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:5}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:24}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__rtl",placeholder:"النوع"},model:{value:e.types.rentersType,callback:function(t){e.$set(e.types,"rentersType",t)},expression:"types.rentersType"}},e._l(e.rentersTypes,(function(e){return n("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:9}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-table-lamp"})]),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:21}},[n("el-select",{attrs:{"popper-class":"search__type-pop select__rtl",placeholder:"نوع الوحدة"},model:{value:e.types.type,callback:function(t){e.$set(e.types,"type",t)},expression:"types.type"}},e._l(e.unitTypes,(function(e){return n("el-option",{key:e.enValue,attrs:{label:e.arValue,value:e.enValue}})})),1)],1)],1)],1)],1)],1),e._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:4,lg:4,xl:4}},[n("el-button",{staticClass:"btn search__el search__btn",attrs:{size:"medium"},on:{click:e.searchUnits}},[e._v("\n          ابحث الان\n        ")])],1)],1)],1)])}),[],!1,null,null,null);t.a=component.exports},659:function(e,t,l){e.exports=l.p+"img/70ee42a.png"},660:function(e,t,l){e.exports=l.p+"img/aea7a3c.png"},661:function(e,t,l){e.exports=l.p+"img/1dde674.png"},691:function(e,t,l){"use strict";l.r(t);var n=l(662),r=l.n(n),o=l(350),c=l.n(o),v=l(9),h=l(360),m=l(349),_=(l(357),l(511)),d=l(512),f=l(501),C={components:{search:_.a,unitCard:f.a,unitsSearch:d.a},data:function(){return{Toast:c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),recentAddedUnits:null,specialUnits:null,isLoading:!0}},created:function(){Object(v.b)()},mounted:function(){var e=this;localStorage.getItem("sknToken")&&v.a.get("units/recommended").then((function(t){e.isLoading=!1,0!==t.data.units.length&&(e.recentAddedUnits=Object(h.e)(t.data.units,m.a),e.specialUnits=r.a.shuffle(e.recentAddedUnits).slice(0,4))})).catch((function(t){return e.isLoading=!1,e.recentAddedUnits=[],e.specialUnits=[],t}))},methods:{goSearchCity:function(e){window.location.href=e}}},y=l(2),component=Object(y.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("section",[n("unitsSearch",{attrs:{from:"home"}})],1),e._v(" "),n("section",{staticClass:"home-features"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("h1",{staticClass:"home__tittle"},[e._v("خدماتنا")]),e._v(" "),n("p",{staticClass:"home__paragraph"},[e._v("\n          الخدمات التى نقدمها لعملائنا لمساعدتهم فى الاعلان عن مسكنهم.\n        ")])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(659),alt:""}}),e._v(" "),n("h3",[e._v("تصوير المسكن")]),e._v(" "),n("p",[e._v("\n            يمكن لمصورينا مساعدة إعلانك على التميز، بغض النظر عن الحجم أو\n            النمط. إنهم خبراء في التصوير الفوتوغرافي للإعلانات ويعرفون بالضبط\n            ما يبحث عنه الضيوف.\n          ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(660),alt:""}}),e._v(" "),n("h3",[e._v("تحصيل الايجار")]),e._v(" "),n("p",[e._v("\n            نقدم لك خدمة تحصيل الايجار لتسهيل تحصيل الإيجار والدفع، إذ تسمح لك\n            بمتابعة وضع كلّ دفعة وإرسال إشعارات تلقائية للتذكير بالسداد.\n          ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(661),alt:""}}),e._v(" "),n("h3",[e._v("اداره الممتلكات")]),e._v(" "),n("p",[e._v("\n            لأنك تستحق أن تدير ممتلكاتك بطريقة بسيطة وميسرة، ولأن مستأجريك\n            يستحقون سداد الأجار بإجراءات بسيطة وميسرة.\n          ")])])])],1)],1),e._v(" "),n("section",{staticClass:"home-city"},[n("div",{staticClass:"u-container"},[e._m(1),e._v(" "),n("el-button",{staticClass:"btn",on:{click:function(t){return e.goSearchCity("/hotels?government=Cairo")}}},[e._v("احجز الان")])],1)]),e._v(" "),n("section",{staticClass:"home-steps"},[n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[e._v("كل ما انت بحاجته للقيام بحجز اقامة")]),e._v(" "),n("p",{staticClass:"home__paragraph"}),e._v(" "),n("el-row",{staticClass:"hidden-md-and-down",attrs:{gutter:60}},[n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(538),alt:""}}),e._v(" "),n("h3",[e._v("استلام المسكن")]),e._v(" "),n("p",[e._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(540),alt:""}}),e._v(" "),n("h3",[e._v("الدفع")]),e._v(" "),n("p",[e._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(539),alt:""}}),e._v(" "),n("h3",[e._v("الحجز")]),e._v(" "),n("p",[e._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(541),alt:""}}),e._v(" "),n("h3",[e._v("تسجيل")]),e._v(" "),n("p",[e._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه.\n            ")])])])],1),e._v(" "),n("el-row",{staticClass:"hidden-lg-and-up"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(541),alt:""}}),e._v(" "),n("h3",[e._v("تسجيل")]),e._v(" "),n("p",[e._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(539),alt:""}}),e._v(" "),n("h3",[e._v("الحجز")]),e._v(" "),n("p",[e._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(540),alt:""}}),e._v(" "),n("h3",[e._v("الدفع")]),e._v(" "),n("p",[e._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(538),alt:""}}),e._v(" "),n("h3",[e._v("استلام المسكن")]),e._v(" "),n("p",[e._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك.\n            ")])])])],1)],1)]),e._v(" "),n("section",{staticClass:"home-new-unit"},[e.recentAddedUnits?n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[e._v("احدث الوحدات المضافة")]),e._v(" "),n("p",{staticClass:"home__paragraph"},[e._v("\n        تصفح أماكن إقامة جميلة تضم كل وسائل راحة البيت، وغيرها الكثير.\n      ")]),e._v(" "),n("el-row",{attrs:{gutter:30}},e._l(e.recentAddedUnits,(function(e,t){return n("el-col",{key:t,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("unitCard",{attrs:{available:e.available,unit:e,status:e.status,backgroundurl:e.image,"go-to":"/unitDetails/"+e._id}})],1)})),1)],1):e.isLoading?e._e():n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[e._v("انتظر احدث الفنادق")])])]),e._v(" "),n("section",{staticClass:"home-steps steps home-steps-upload"},[n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[e._v("ازاى ترفع مسكنك")]),e._v(" "),n("p",{staticClass:"home__paragraph"},[e._v("\n        هل أنت مستعد لربح الأموال؟\n      ")]),e._v(" "),n("el-row",{staticClass:"hidden-md-and-down",attrs:{gutter:50}},[n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(536),alt:""}}),e._v(" "),n("h3",[e._v("استعد لاستقبال الضيوف")]),e._v(" "),n("p",[e._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(537),alt:""}}),e._v(" "),n("h3",[e._v("راجع طلبات الحجز")]),e._v(" "),n("p",[e._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(535),alt:""}}),e._v(" "),n("h3",[e._v("تسجيل مسكنك مجانًا")]),e._v(" "),n("p",[e._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])])],1),e._v(" "),n("el-row",{staticClass:"hidden-lg-and-up"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(535),alt:""}}),e._v(" "),n("h3",[e._v("تسجيل مسكنك مجانًا")]),e._v(" "),n("p",[e._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(537),alt:""}}),e._v(" "),n("h3",[e._v("راجع طلبات الحجز")]),e._v(" "),n("p",[e._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),e._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(536),alt:""}}),e._v(" "),n("h3",[e._v("استعد لاستقبال الضيوف")]),e._v(" "),n("p",[e._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])])],1)],1)]),e._v(" "),n("section",{staticClass:"home-city home-city-2"},[n("div",{staticClass:"u-container"},[e._m(2),e._v(" "),n("el-button",{staticClass:"btn",on:{click:function(t){return e.goSearchCity("/hotels?government=Alexandria")}}},[e._v("احجز الان")])],1)]),e._v(" "),n("section",{staticClass:"home-new-unit"},[e.specialUnits?n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[e._v("وحدات مميزة")]),e._v(" "),n("p",{staticClass:"home__paragraph"},[e._v("\n        مجموعة مختارة من أماكن الإقامة التي تم التحقق من جودتها وتصميمها.\n      ")]),e._v(" "),n("el-row",{attrs:{gutter:30}},e._l(e.specialUnits,(function(e,t){return n("el-col",{key:t,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("unitCard",{attrs:{available:e.available,unit:e,status:e.status,backgroundurl:e.image,"go-to":"/unitDetails/"+e._id}})],1)})),1)],1):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("h1",[this._v("\n      استكشف عروض "),t("br"),this._v("\n      الفندق والبيوت وغيرها الكثير ...\n    ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("\n        سكن الان ف القاهرة "),t("br"),this._v("\n        اكتشف افضل العروض الحصرية\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("\n        سكن الان ف الاسكندرية "),t("br"),this._v("\n        اكتشف افضل العروض الحصرية\n      ")])}],!1,null,null,null);t.default=component.exports}}]);