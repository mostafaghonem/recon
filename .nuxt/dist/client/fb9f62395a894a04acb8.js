(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{347:function(t,e,l){"use strict";var n=l(4),r=l(24),o=l(34),c=l(193),v=l(85),h=l(13),_=l(57).f,m=l(86).f,d=l(11).f,f=l(351).trim,C=n.Number,x=C,y=C.prototype,I="Number"==o(l(126)(y)),T="trim"in String.prototype,w=function(t){var e=v(t,!1);if("string"==typeof e&&e.length>2){var l,n,r,o=(e=T?e.trim():f(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(l=e.charCodeAt(2))||120===l)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,l=this;return l instanceof C&&(I?h((function(){y.valueOf.call(l)})):"Number"!=o(l))?c(new x(w(e)),l,C):w(e)};for(var A,M=l(9)?_(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;M.length>N;N++)r(x,A=M[N])&&!r(C,A)&&d(C,A,m(x,A));C.prototype=y,y.constructor=C,l(14)(n,"Number",C)}},348:function(t,e){t.exports=[{value:"Alexandria",label:"الإسكندرية"},{value:"Ismailia",label:"الإسماعيلية"},{value:"Aswan",label:"أسوان"},{value:"Asyut",label:"أسيوط"},{value:"Luxor",label:"الأقصر"},{value:"Red Sea",label:"البحر الأحمر"},{value:"El Beheira",label:"البحيرة"},{value:"Beni Suef",label:"بني سويف"},{value:"Port Said",label:"بورسعيد"},{value:"South Sinai",label:"جنوب سيناء"},{value:"Giza",label:"الجيزة"},{value:"Dakahlia",label:"الدقهلية"},{value:"Damietta",label:"دمياط"},{value:"Sohag",label:"سوهاج"},{value:"Suez",label:"السويس"},{value:"Ash Sharqia",label:"الشرقية"},{value:"North Sinai",label:"شمال سيناء"},{value:"Gharbia",label:"الغربية"},{value:"Faiyum",label:"الفيوم"},{value:"Cairo",label:"القاهرة"},{value:"Al Qalyubia",label:"القليوبية"},{value:"Qena",label:"قنا"},{value:"Kafr El Sheikh",label:"كفر الشيخ"},{value:"Marsa Matruh",label:"مرسى مطروح"},{value:"Menofia",label:"المنوفية"},{value:"Minya",label:"المنيا"},{value:"New Valley",label:"الوادي الجديد"}]},351:function(t,e,l){var n=l(7),r=l(33),o=l(13),c=l(352),v="["+c+"]",h=RegExp("^"+v+v+"*"),_=RegExp(v+v+"*$"),m=function(t,e,l){var r={},v=o((function(){return!!c[t]()||"​"!="​"[t]()})),h=r[t]=v?e(d):c[t];l&&(r[l]=h),n(n.P+n.F*v,"String",r)},d=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(_,"")),t};t.exports=m},352:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},353:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS4xMjEiIGhlaWdodD0iMzAuMTczIiB2aWV3Qm94PSIwIDAgMjEuMTIxIDMwLjE3MyI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiM2ZTZlNmV9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJpY19sb2NhdGlvbl9vbl80OHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAgLTQpIj4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTMiIGQ9Ik0yMC41NjEgNEExMC41NjIgMTAuNTYyIDAgMCAwIDEwIDE0LjU2MWMwIDcuOTIgMTAuNTYxIDE5LjYxMiAxMC41NjEgMTkuNjEyczEwLjU2LTExLjY5MiAxMC41Ni0xOS42MTJBMTAuNTYyIDEwLjU2MiAwIDAgMCAyMC41NjEgNHptMCAxNC4zMzJhMy43NzIgMy43NzIgMCAxIDEgMy43NzItMy43NzIgMy43NzMgMy43NzMgMCAwIDEtMy43NzIgMy43NzJ6IiBjbGFzcz0iY2xzLTEiIGRhdGEtbmFtZT0iUGF0aCAyMTMiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},354:function(t,e,l){t.exports=l.p+"img/5c2f807.svg"},355:function(t,e,l){t.exports=l.p+"img/a1d6266.svg"},500:function(t,e,l){"use strict";var n={props:{hostel:{type:Object,default:function(){return{}}},state:{type:String,default:"available"}},data:function(){return{addFavs:!1}},methods:{goToRoute:function(){this.$router.push("/hotelDetails?id="+this.hostel._id)},addFav:function(t){t.preventdefault(),this.addFavs=!this.addFavs},cancelledReasonsDialog:function(){this.$store.commit("cancelledReasonsDialog",!0)}}},r=l(3),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"unit-card",attrs:{href:"/hotelDetails?id="+t.hostel._id},on:{click:function(e){return e.preventDefault(),t.goToRoute(e)}}},[n("div",{staticClass:"unit-card__veiw",style:{backgroundImage:"url("+(t.hostel.image?t.hostel.image:"https://picsum.photos/1124")+")"}},[n("div",{staticClass:"unit-card__nav"},[t.hostel.available?n("div",{staticClass:"unit-card__availability"},[t._v("\n        متاحة للحجز\n        "),t._m(0)]):t._e()])]),t._v(" "),n("div",{staticClass:"unit-card__data"},[n("div",{staticClass:"unit-card__row-data"},[n("div",{staticClass:"unit-card__title"},[n("h3",[t._v(t._s(t.hostel.name))])])]),t._v(" "),n("div",{staticClass:"unit-card__row-data"},[n("div",{staticClass:"unit-card__name"},[t._v("\n        "+t._s(t.hostel.address?t.hostel.address.government:"")+"\n      ")])]),t._v(" "),n("div",{staticClass:"unit-card__row-data unit-card__rate-user"},[n("div",{staticClass:"unit-card__users"},[n("span",[t._v(t._s(t.hostel.totalUsersRated))]),t._v(" مستخدم\n      ")]),t._v(" "),n("div",{staticClass:"unit-card__rate"},[n("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:t.hostel.rate,callback:function(e){t.$set(t.hostel,"rate",e)},expression:"hostel.rate"}})],1)]),t._v(" "),n("div",{staticClass:"unit-card__row-data unit-card__features"},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:l(354),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.hostel.totalAvailableRooms))]),t._v(" متاح\n            ")])])]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:8}},[n("div",{staticClass:"unit-card__feature"},[n("img",{staticClass:"unit-card__feature-img",attrs:{src:l(355),alt:""}}),t._v(" "),n("div",{staticClass:"unit-card__feature-name"},[n("span",[t._v(t._s(t.hostel.totalRooms))]),t._v(" غرفة\n            ")])])])],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("div",{staticClass:"la-ball-scale-multiple la-sm"},[e("div"),this._v(" "),e("div"),this._v(" "),e("div")])])}],!1,null,null,null);e.a=component.exports},507:function(t,e,l){"use strict";l(347);var n=l(348),r=l.n(n),o={props:{from:{type:String,default:""},selectedAvailableFrom:{type:Number,default:0},selectedAvailableTo:{type:Number,default:0},selectedGovernment:{type:String,default:""},selectedType2:{type:String,default:""},slectedNumberOfPersons:{type:Number,default:0}},data:function(){return{government:"",Type:"",Types:[{label:"فردى",value:"single"},{label:"زوجى",value:"double"},{label:"ثلاثى",value:"triple"}],selectedType:"",numberOfPersons:null,cities:[],pickerOptions:{shortcuts:[{text:"Last week",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-6048e5),t.$emit("pick",[l,e])}},{text:"Last month",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-2592e6),t.$emit("pick",[l,e])}},{text:"Last 3 months",onClick:function(t){var e=new Date,l=new Date;l.setTime(l.getTime()-7776e6),t.$emit("pick",[l,e])}}]},typeChanged:!1,numberOfPersonsChanged:!1,availableFrom:"",availableTo:"",value1:[],value2:""}},created:function(){var t=this;if(r.a&&0!==r.a.length&&(this.cities=r.a),this.selectedGovernment){var e=this.cities.filter((function(e){return String(e.value).toLowerCase()===String(t.selectedGovernment).toLowerCase()}));this.government=e[0].value||"Cairo"}this.selectedAvailableFrom&&(this.value1[0]=this.selectedAvailableFrom),this.selectedAvailableTo&&(this.value1[1]=this.selectedAvailableTo),this.selectedType2&&(this.Type=this.selectedType2),this.slectedNumberOfPersons&&(this.numberOfPersons=this.slectedNumberOfPersons,this.numberOfPersonsChanged=!0)},methods:{onSubmit:function(){},selectCity:function(){"home"!==this.from&&this.$parent.selectCity(this.government)},selectDates:function(){"home"!==this.from&&(this.$parent.availableFrom=new Date(this.value1[0]).getTime()),this.availableFrom=new Date(this.value1[0]).getTime(),"home"!==this.from&&(this.$parent.availableTo=new Date(this.value1[1]).getTime()),this.availableTo=new Date(this.value1[1]).getTime()},handleChange:function(t){this.numberOfPersonsChanged=!0,"home"!==this.from&&(this.$parent.numberOfPersons=this.numberOfPersons)},selectType:function(){var t=this;this.typeChanged=!0;var e=this.Types.filter((function(e){return String(e.value).toLowerCase()===String(t.Type).toLowerCase()}));this.selectedType=e[0].label||"فردى","home"!==this.from&&(this.$parent.Type=this.Type)},searchHostels:function(){if(this.government||this.value1||this.numberOfPersonsChanged||this.Type)if("home"!==this.from&&(this.$parent.numberOfPersons=this.numberOfPersons),this.from&&"home"===this.from){var t,e="government=".concat(this.government),l="availableFrom=".concat(this.availableFrom,"&availableTo=").concat(this.availableTo),n="numberOfPersons=".concat(this.numberOfPersons),r="Type=".concat(this.Type);this.government&&(t=e),t&&this.availableFrom?t+="&"+l:!t&&this.availableFrom&&(t=l),t&&this.numberOfPersonsChanged?t+="&"+n:!t&&this.numberOfPersonsChanged&&(t=n),t&&this.Type?t+="&"+r:!t&&this.Type&&(t=r),t&&this.$router.push({path:"/hotels?".concat(t)})}else this.$parent.searchHostels(this.numberOfPersons)}}},c=l(3),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search"},[n("el-row",{staticClass:"search__tab-form",attrs:{gutter:20}},[n("el-col",{staticClass:"u-col-rtl top-input mob-input where-input",attrs:{xs:24,sm:12,md:5,lg:6,xl:6}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:2}},[n("i",{staticClass:"el-icon-location"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:22}},[n("el-select",{staticClass:"search__el",attrs:{filterable:"",placeholder:"اين ستقيم؟","popper-class":"search__popper"},on:{change:t.selectCity},model:{value:t.government,callback:function(e){t.government=e},expression:"government"}},t._l(t.cities,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}},[n("div",[n("span",{staticClass:"search__el-option-city-name"},[t._v(t._s(e.label))])]),t._v(" "),n("img",{attrs:{src:l(353),alt:""}})])})),1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl top-input mob-input",attrs:{xs:24,sm:12,md:6,lg:6,xl:6}},[n("el-date-picker",{staticClass:"search__el",attrs:{type:"daterange","range-separator":"-","start-placeholder":"تاريخ البدء","end-placeholder":"تاريخ الانتهاء"},on:{change:t.selectDates},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl hidden-sm-and-down",attrs:{md:1,lg:1,xl:1}},[n("div",{staticClass:"search__separator"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl mob-input",attrs:{xs:24,sm:12,md:7,lg:6,xl:6}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-user"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:20}},[n("el-select",{attrs:{"popper-class":"search__type-pop",placeholder:"عدد الاشخاص"},on:{change:t.handleChange},model:{value:t.numberOfPersons,callback:function(e){t.numberOfPersons=e},expression:"numberOfPersons"}},t._l(10,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-row",[n("el-col",{staticClass:"u-col-rtl",attrs:{span:3}},[n("i",{staticClass:"el-icon-table-lamp"})]),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{span:21}},[n("el-select",{attrs:{"popper-class":"search__type-pop",placeholder:"نوع الغرفه"},on:{change:t.selectType},model:{value:t.Type,callback:function(e){t.Type=e},expression:"Type"}},t._l(t.Types,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)],1)],1),t._v(" "),n("el-col",{staticClass:"u-col-rtl",attrs:{xs:24,sm:12,md:4,lg:4,xl:4}},[n("el-button",{staticClass:"btn search__el search__btn",attrs:{size:"medium"},on:{click:t.searchHostels}},[t._v("\n          ابحث الان\n        ")])],1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},508:function(t,e,l){t.exports=l.p+"img/aae6c1c.svg"},509:function(t,e,l){t.exports=l.p+"img/4d0b72f.svg"},510:function(t,e,l){t.exports=l.p+"img/be44fce.svg"},511:function(t,e,l){t.exports=l.p+"img/713efec.svg"},512:function(t,e,l){t.exports=l.p+"img/bdd430a.svg"},513:function(t,e,l){t.exports=l.p+"img/1526e36.svg"},514:function(t,e,l){t.exports=l.p+"img/0b91b48.svg"},648:function(t,e,l){t.exports=l.p+"img/70ee42a.png"},649:function(t,e,l){t.exports=l.p+"img/aea7a3c.png"},650:function(t,e,l){t.exports=l.p+"img/1dde674.png"},679:function(t,e,l){"use strict";l.r(e);var n=l(349),r=l.n(n),o=l(16),c=(l(350),l(507)),v=l(500),h={components:{search:c.a,hostelCard:v.a},data:function(){return{Toast:r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),recentAddedHostels:null,specialHostels:null,isLoading:!0}},created:function(){Object(o.b)()},mounted:function(){var t=this;localStorage.getItem("sknToken")&&o.a.get("hostels/recommended").then((function(e){t.isLoading=!1,0!==e.data.hostels.length&&(t.recentAddedHostels=e.data.hostels,t.specialHostels=e.data.hostels.slice(0,4))})).catch((function(e){return t.isLoading=!1,t.recentAddedHostels=[],t.specialHostels=[],e}))},methods:{goSearchCity:function(t){window.location.href=t}}},_=l(3),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",[n("search",{attrs:{from:"home"}})],1),t._v(" "),n("section",{staticClass:"home-features"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("h1",{staticClass:"home__tittle"},[t._v("خدماتنا")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n          الخدمات التى نقدمها لعملائنا لمساعدتهم فى الاعلان عن مسكنهم.\n        ")])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(648),alt:""}}),t._v(" "),n("h3",[t._v("تصوير المسكن")]),t._v(" "),n("p",[t._v("\n            يمكن لمصورينا مساعدة إعلانك على التميز، بغض النظر عن الحجم أو\n            النمط. إنهم خبراء في التصوير الفوتوغرافي للإعلانات ويعرفون بالضبط\n            ما يبحث عنه الضيوف.\n          ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(649),alt:""}}),t._v(" "),n("h3",[t._v("تحصيل الايجار")]),t._v(" "),n("p",[t._v("\n            نقدم لك خدمة تحصيل الايجار لتسهيل تحصيل الإيجار والدفع، إذ تسمح لك\n            بمتابعة وضع كلّ دفعة وإرسال إشعارات تلقائية للتذكير بالسداد.\n          ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-features__feature"},[n("img",{attrs:{src:l(650),alt:""}}),t._v(" "),n("h3",[t._v("اداره الممتلكات")]),t._v(" "),n("p",[t._v("\n            لأنك تستحق أن تدير ممتلكاتك بطريقة بسيطة وميسرة، ولأن مستأجريك\n            يستحقون سداد الأجار بإجراءات بسيطة وميسرة.\n          ")])])])],1)],1),t._v(" "),n("section",{staticClass:"home-city"},[n("div",{staticClass:"u-container"},[t._m(1),t._v(" "),n("el-button",{staticClass:"btn",on:{click:function(e){return t.goSearchCity("/hotels?government=Cairo")}}},[t._v("احجز الان")])],1)]),t._v(" "),n("section",{staticClass:"home-steps"},[n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("كل ما انت بحاجته للقيام بحجز اقامة")]),t._v(" "),n("p",{staticClass:"home__paragraph"}),t._v(" "),n("el-row",{staticClass:"hidden-md-and-down",attrs:{gutter:60}},[n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(511),alt:""}}),t._v(" "),n("h3",[t._v("استلام المسكن")]),t._v(" "),n("p",[t._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(513),alt:""}}),t._v(" "),n("h3",[t._v("الدفع")]),t._v(" "),n("p",[t._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(512),alt:""}}),t._v(" "),n("h3",[t._v("الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(514),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل")]),t._v(" "),n("p",[t._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه.\n            ")])])])],1),t._v(" "),n("el-row",{staticClass:"hidden-lg-and-up"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(514),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل")]),t._v(" "),n("p",[t._v("\n              قم بانشاء حساب جديد وانضم اللي مجتمع سكن واستكشف افضل اماكن\n              الاقامه.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(512),alt:""}}),t._v(" "),n("h3",[t._v("الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك حجز اماكن للاقامه والسياحه والاستاجار.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(513),alt:""}}),t._v(" "),n("h3",[t._v("الدفع")]),t._v(" "),n("p",[t._v("\n              نوفر لك كافه الطرق الامنه لاتمام عمليه الدفع وندعم سياسه استرداد\n              الاموال.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:4,xl:4}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(511),alt:""}}),t._v(" "),n("h3",[t._v("استلام المسكن")]),t._v(" "),n("p",[t._v("\n              الان يمكنك الوصول لاستلام مكان اقامتك.\n            ")])])])],1)],1)]),t._v(" "),n("section",{staticClass:"home-new-unit"},[t.recentAddedHostels?n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("احدث الفنادق المضافة")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n        تصفح أماكن إقامة جميلة تضم كل وسائل راحة البيت، وغيرها الكثير.\n      ")]),t._v(" "),n("el-row",{attrs:{gutter:30}},t._l(t.recentAddedHostels,(function(t,e){return n("el-col",{key:e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("hostelCard",{attrs:{hostel:t,status:t.available}})],1)})),1)],1):t.isLoading?t._e():n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("انتظر احدث الفنادق")])])]),t._v(" "),n("section",{staticClass:"home-steps steps home-steps-upload"},[n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("ازاى ترفع مسكنك")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n        هل أنت مستعد لربح الأموال؟\n      ")]),t._v(" "),n("el-row",{staticClass:"hidden-md-and-down",attrs:{gutter:50}},[n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(509),alt:""}}),t._v(" "),n("h3",[t._v("استعد لاستقبال الضيوف")]),t._v(" "),n("p",[t._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(510),alt:""}}),t._v(" "),n("h3",[t._v("راجع طلبات الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(508),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل مسكنك مجانًا")]),t._v(" "),n("p",[t._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])])],1),t._v(" "),n("el-row",{staticClass:"hidden-lg-and-up"},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(508),alt:""}}),t._v(" "),n("h3",[t._v("تسجيل مسكنك مجانًا")]),t._v(" "),n("p",[t._v("\n              يمكنك مشاركة أي مسكن دون رسوم الاشتراك، من غرفة المعيشة المشتركة\n              إلى بيتك الثاني وكل ما يمكن مشاركته.\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(510),alt:""}}),t._v(" "),n("h3",[t._v("راجع طلبات الحجز")]),t._v(" "),n("p",[t._v("\n              يمكنك الان مراجعه طلبات الضيوف وفحص ملفاتهم الشخصيه واختيار\n              المناسب\n            ")])])]),t._v(" "),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[n("div",{staticClass:"home-step"},[n("img",{attrs:{src:l(509),alt:""}}),t._v(" "),n("h3",[t._v("استعد لاستقبال الضيوف")]),t._v(" "),n("p",[t._v("\n              بمجرد أن يكون إعلانك مباشرًا، يمكن للضيوف المؤهلين الوصول إليه.\n            ")])])])],1)],1)]),t._v(" "),n("section",{staticClass:"home-city home-city-2"},[n("div",{staticClass:"u-container"},[t._m(2),t._v(" "),n("el-button",{staticClass:"btn",on:{click:function(e){return t.goSearchCity("/hotels?government=Alexandria")}}},[t._v("احجز الان")])],1)]),t._v(" "),n("section",{staticClass:"home-new-unit"},[t.specialHostels?n("div",{staticClass:"u-container"},[n("h1",{staticClass:"home__tittle"},[t._v("فنادق مميزة")]),t._v(" "),n("p",{staticClass:"home__paragraph"},[t._v("\n        مجموعة مختارة من أماكن الإقامة التي تم التحقق من جودتها وتصميمها.\n      ")]),t._v(" "),n("el-row",{attrs:{gutter:30}},t._l(t.specialHostels,(function(t,e){return n("el-col",{key:e,staticClass:"u-col-rtl",attrs:{xs:24,sm:24,md:8,lg:6,xl:6}},[n("hostelCard",{attrs:{hostel:t,status:t.available}})],1)})),1)],1):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",[this._v("\n      استكشف عروض "),e("br"),this._v("\n      الفندق والبيوت وغيرها الكثير ...\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n        سكن الان ف القاهرة "),e("br"),this._v("\n        اكتشف افضل العروض الحصرية\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n        سكن الان ف الاسكندرية "),e("br"),this._v("\n        اكتشف افضل العروض الحصرية\n      ")])}],!1,null,null,null);e.default=component.exports}}]);