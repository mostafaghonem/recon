(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{357:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"f",(function(){return C})),n.d(t,"e",(function(){return y}));n(359),n(24),n(17),n(85),n(86),n(84),n(127);var o=n(349),r=n.n(o),c={AR:{ROOMS:"غرف",UNITS:"وحدات",PEOPLE:"افراد"},EN:{ROOMS:"rooms",UNITS:"units",PEOPLE:"people"},TWICE:{ROOMS:"غرفتين",UNITS:"وحدات",PEOPLE:"فردين"},LESS_THAN_TEN:{ROOMS:"غرف",UNITS:"وحدات",PEOPLE:"افراد"},MORE_THAN_TEN:{ROOMS:"غرفة",UNITS:"وحدة",PEOPLE:"فرد"},REQUEST_STATUS:{PENDING:"pending",ACCEPTED:"accepted",REJECTED:"rejected"},IMAGE_MIMETYPES:{PNG:"image/png",JPE:"image/jpeg",JPEG:"image/jpeg",JPG:"image/jpeg",SVG:"image/svg+xml"}},d=r.a.mixin({position:"center"}),l=r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3}),f=function(path){console.log("changing url",path),this.$router.push(path)},m=function(e){var t=String(e.type).split("/")[1]||String(e.name).split(".")[1];return console.log("file tpye",t,e,e.type),Object.keys(c.IMAGE_MIMETYPES).find((function(e){return e.toLowerCase()===t.toLowerCase()}))},h=function(e,t,n){return new Promise((function(o){var image=new Image,r=0,c=0;image.src=window.URL.createObjectURL(e),image.onload=function(){r=this.width,c=this.height,r>=n&&c>=t&&o(!0),o(!1)}}))},v=function(e,t){return t?e.join(" "):e[1]},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=parseInt(t,10);return 2===o?v([o,c.TWICE[e.toUpperCase()]],n):o>2&&o<10?v([o,c.LESS_THAN_TEN[e.toUpperCase()]],n):o>10||1===o?v([o,c.MORE_THAN_TEN[e.toUpperCase()]],n):void 0},C=function(e){Object.keys(e.response.data.error).map((function(t){var n=e.response.data.error[t];if("string"==typeof n)return l.fire({icon:"error",title:n});n.map((function(p){return l.fire({icon:"error",title:t+" "+p})}))})),Object.keys(e.response.data.error).map((function(t){var n=e.response.data.error[t];if("string"==typeof n)return l.fire({icon:"error",title:n});n.map((function(p){return l.fire({icon:"error",title:t+" "+p})}))}))},y=function(e){window.onscroll=function(){Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight&&e&&e()}};Object.freeze(c.REQUEST_STATUS)},358:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY19rZXlib2FyZF9hcnJvd19sZWZ0XzQ4cHgiIHdpZHRoPSI4LjczMyIgaGVpZ2h0PSIxNC4xMzMiIHZpZXdCb3g9IjAgMCA4LjczMyAxNC4xMzMiPg0KICAgIDxkZWZzPg0KICAgICAgICA8c3R5bGU+DQogICAgICAgICAgICAuY2xzLTF7ZmlsbDojMjliYmMxfQ0KICAgICAgICA8L3N0eWxlPg0KICAgIDwvZGVmcz4NCiAgICA8cGF0aCBpZD0iUGF0aF8xNSIgZD0iTTI0LjczMyAyMy45NjZsLTUuNC01LjQgNS40LTUuNC0xLjY2Ny0xLjY2NkwxNiAxOC41NjZsNy4wNjYgNy4wNjZ6IiBjbGFzcz0iY2xzLTEiIGRhdGEtbmFtZT0iUGF0aCAxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2IC0xMS41KSIvPg0KPC9zdmc+DQo="},359:function(e,t,n){var o=n(12),meta=n(195).onFreeze;n(196)("freeze",(function(e){return function(t){return e&&o(t)?e(meta(t)):t}}))},507:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"vue-verification-code",components:{},props:{type:{type:String,required:!1,default:"number"},maxlength:{type:Number,required:!1,default:6},styles:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{inputdata:"",codeData:[]}},watch:{inputdata:function(e,t){var n=this;/[^\d]/g.test(e)?this.inputdata=this.inputdata.replace(/[^\d]/g,""):e.length<t.length?""===e?this.$data.codeData=["","","","","",""]:this.$data.codeData[t.length-1]="":e.length-1===t.length?this.$data.codeData[e.length-1]=e[e.length-1]:e.split("").map((function(e,t){n.$data.codeData[t]=e}))}},computed:{},mounted:function(){this.$refs.codeinput.focus();for(var e=0,t=this.maxlength;e<t;e++)this.codeData.push("")},methods:{focus:function(){this.$refs.codeinput.focus()},inputBlur:function(){this.$emit("output",{data:this.$data.inputdata,isfinished:!this.$data.codeData.includes("")})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=[o.a],a=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1],r.map((function(t){e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&a(window.Vue),t.default={install:a,verificationcode:o.a}},function(e,t,n){"use strict";var o=n(3);o.a.install=function(e){return e.component(o.a.name,o.a)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(o.a),t.a=o.a},function(e,t,n){"use strict";var o=n(0),a=n(10),s=function(e){n(4)},r=n(9)(o.a,a.a,!1,s,"data-v-658622e7",null);t.a=r.exports},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),n(7)("2f854b78",o,!0,{})},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'.code-active[data-v-658622e7]{border:1px solid #343646!important}.code-box[data-v-658622e7]{width:100%;position:relative;overflow-x:hidden}.code-box>.code-input[data-v-658622e7]{position:absolute;width:300%;left:-200%;z-index:-1;opacity:0}.code-box>.code-all[data-v-658622e7]{padding:60px 30px 0;display:flex;align-content:space-between}.code-box>.code-all>.code-item[data-v-658622e7]{flex:1;width:20px;font-size:24px;line-height:60px;text-align:center;margin:0 15px;background:transparent;border:1px solid #8a8a8a;outline:none}.code-box>.code-all .code-item.code-password[data-v-658622e7]{position:relative}.code-box>.code-all .code-item.code-password[data-v-658622e7]:after{position:absolute;content:"";top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:6px;background:#000;border-radius:50%}',""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o);return[n].concat(o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}))).concat([a]).join("\n")}return[n].join("\n")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=d[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(a(n.parts[r]));d[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function a(e){var t,n,o=document.querySelector("style["+g+'~="'+e.id+'"]');if(o){if(m)return h;o.parentNode.removeChild(o)}if(x){var a=f++;o=p||(p=r()),t=i.bind(null,o,a,!1),n=i.bind(null,o,a,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function i(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=C(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),v.ssrId&&e.setAttribute(g,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(8),d={},l=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,m=!1,h=function(){},v=null,g="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){m=n,v=r||{};var a=u(e,t);return o(a),function(t){for(var n=[],r=0;r<a.length;r++){var i=a[r];(s=d[i.id]).refs--,n.push(s)}for(t?o(a=u(e,t)):a=[],r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=a[0],c={id:e+":"+r,css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,o,r,a){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var d,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=d):o&&(d=o),d){var l=u.functional,p=l?u.render:u.beforeCreate;l?(u._injectStyles=d,u.render=function(e,t){return d.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,d):[d]}return{esModule:i,exports:s,options:u}}},function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputdata,expression:"inputdata"}],ref:"codeinput",staticClass:"code-input",attrs:{type:"tel",pattern:"[0-9]*",maxlength:e.maxlength},domProps:{value:e.inputdata},on:{blur:function(t){return e.inputBlur()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.inputBlur()},input:function(t){t.target.composing||(e.inputdata=t.target.value)}}}),e._v(" "),"password"===e.type?n("div",{staticClass:"code-all",on:{click:e.focus}},e._l(e.codeData,(function(t,o){return n("div",{key:o,staticClass:"code-item",class:{"code-active":0===o||e.inputdata.length-1>=o,"code-password":e.inputdata.length-1>=o},style:[e.styles],attrs:{contenteditable:"true"}})})),0):n("div",{staticClass:"code-all",on:{click:e.focus}},e._l(e.codeData,(function(t,o){return n("div",{key:o,staticClass:"code-item",class:{"code-active":0===o||e.inputdata.length-1>=o},style:[e.styles],attrs:{contenteditable:"true"}},[e._v(e._s(t))])})),0)])},staticRenderFns:[]};t.a=a}])},554:function(e,t,n){var content=n(624);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("c7918516",content,!0,{sourceMap:!1})},555:function(e,t,n){var content=n(626);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("1955a358",content,!0,{sourceMap:!1})},623:function(e,t,n){"use strict";var o=n(554);n.n(o).a},624:function(e,t,n){(t=n(33)(!1)).push([e.i,".react-code-input-container{width:100%!important;margin-bottom:3rem}.react-code-input>input{border:1px solid #a8adb7;border-right:1px solid #a8adb7!important;width:45px!important;height:45px!important;border-radius:5px!important;margin-right:10px}",""]),e.exports=t},625:function(e,t,n){"use strict";var o=n(555);n.n(o).a},626:function(e,t,n){(t=n(33)(!1)).push([e.i,".react-code-input-container{width:100%!important;margin-bottom:3rem}.react-code-input>input{border:1px solid #a8adb7;border-right:1px solid #a8adb7!important;width:45px!important;height:45px!important;border-radius:5px!important;margin-right:10px}.verificationCode{margin-top:10px;margin-bottom:16px;margin-left:12px;height:45px;border-radius:5px;-webkit-box-flex:1;flex:1;width:35px;font-size:24px;line-height:60px;text-align:center;background:transparent;border:1px solid #000;outline:none}.wrongCode{color:#f56c6c;font-size:12px;line-height:1;margin-bottom:12px;position:inherit}",""]),e.exports=t},676:function(e,t,n){"use strict";n.r(t);var o=n(507),r=n.n(o),c=n(1),d=n(349),l=n.n(d),f=n(357),m=(n(353),n(9));c.default.use(r.a);var h={layout:"loginLayout",data:function(){return{Toast:l.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),numberValidateForm:{code:[]},phone:"",code:"",firstNumber:"",secondNumber:"",thirdNumber:"",fourthNumber:"",canCallVerification:!0,wrongCode:!1}},mounted:function(){localStorage.getItem("phone")&&(this.phone=localStorage.getItem("phone"))},methods:{outputCode:function(code){this.code=code.data},changeCode:function(code){var e=String(code),t=String(code+1);if(code<4&&document.getElementById(e).value)if(document.getElementById(t).value){for(var i=1;i<5;i++){var n=String(i);if(!document.getElementById(n).value){document.getElementById(n).focus();break}}document.getElementById("1").value&&document.getElementById("2").value&&document.getElementById("3").value&&document.getElementById("4").value&&document.getElementById("4").focus()}else document.getElementById(t).focus()},submitForm:function(){var e=this;if(this.code=this.firstNumber+this.secondNumber+this.thirdNumber+this.fourthNumber,this.code&&4===this.code.length){if(this.canCallVerification){this.canCallVerification=!1,this.wrongCode=!1;var data={phone:this.phone,code:this.code};m.a.post("users/password/confirmForget",data).then((function(t){localStorage.setItem("tempVerificationCode",e.code),e.$router.push({path:"/enterNewPassword"})})).catch((function(t){e.canCallVerification=!0;var n="حدث خطأ ما";return t.response&&t.response.data&&t.response.data.message&&(n=t.response.data.message),f.a.fire({icon:"error",title:n}),t}))}}else this.wrongCode=!0},resetForm:function(e){this.$refs[e].resetFields()}}},v=(n(623),n(625),n(2)),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"registrationCode"},[o("el-row",{staticClass:"row-bg registrationCode-container "},[o("el-col",{staticClass:"hidden-xs-only",attrs:{xs:24,sm:10,md:14,lg:14,xl:14}},[o("div",{staticClass:"imageContainer"})]),e._v(" "),o("el-col",{attrs:{xs:24,sm:14,md:10,lg:10,xl:10}},[o("div",{staticClass:"pageContainer"},[o("div",{staticClass:"headerWrapper"},[o("div",{staticClass:"login-form"},[o("div",{staticClass:"login-form_logo"},[o("img",{attrs:{src:n(129),alt:"SKN Logo"}})]),e._v(" "),o("div",{staticClass:"registrationCode-form_header"},[o("h3",[e._v("!من فضلك ادخل الكود")])]),e._v(" "),e.phone?o("div",{staticClass:"registrationCode-form_small-header"},[o("span",[e._v("ستصلك رسالة تأكيد على رقم "+e._s(e.phone)+" من فضلك ادخل الكود\n                  المكون من 4 ارقام")]),e._v(" "),o("span",{staticClass:"registrationCode-form_number"})]):e._e(),e._v(" "),o("el-form",{staticClass:"demo-ruleForm registrationCode-field",attrs:{"label-width":"100px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.firstNumber,expression:"firstNumber"}],staticClass:"verificationCode",attrs:{id:"1",maxlength:"1",minlength:"1"},domProps:{value:e.firstNumber},on:{input:[function(t){t.target.composing||(e.firstNumber=t.target.value)},function(t){return e.changeCode(1)}]}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.secondNumber,expression:"secondNumber"}],staticClass:"verificationCode",attrs:{id:"2",maxlength:"1",minlength:"1"},domProps:{value:e.secondNumber},on:{input:[function(t){t.target.composing||(e.secondNumber=t.target.value)},function(t){return e.changeCode(2)}]}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdNumber,expression:"thirdNumber"}],staticClass:"verificationCode",attrs:{id:"3",maxlength:"1",minlength:"1"},domProps:{value:e.thirdNumber},on:{input:[function(t){t.target.composing||(e.thirdNumber=t.target.value)},function(t){return e.changeCode(3)}]}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.fourthNumber,expression:"fourthNumber"}],staticClass:"verificationCode",attrs:{id:"4",maxlength:"1",minlength:"1"},domProps:{value:e.fourthNumber},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm("numberValidateForm")},input:function(t){t.target.composing||(e.fourthNumber=t.target.value)}}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.wrongCode,expression:"wrongCode"}],staticClass:"wrongCode"},[e._v("\n                  يجب إدخال رمز تحقق صالح\n                ")]),e._v(" "),o("el-form-item",{staticClass:"forgetPassword-buttons"},[o("nuxt-link",{attrs:{to:""}},[o("el-button",{staticClass:"forgetPassword-buttons_login",on:{click:function(t){return e.submitForm("numberValidateForm")}}},[e._v("تغير كلمة السر")])],1)],1)],1),e._v(" "),o("div",{staticClass:"login-back"},[o("nuxt-link",{attrs:{to:"/login"}},[o("span",{staticClass:"login-back_dev"},[o("span",[o("img",{attrs:{src:n(358),alt:""}})]),e._v("العودة الى تسجيل الدخول")])])],1)],1)])])])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);