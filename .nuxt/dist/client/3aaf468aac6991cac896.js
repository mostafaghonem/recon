(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{358:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJpY19rZXlib2FyZF9hcnJvd19sZWZ0XzQ4cHgiIHdpZHRoPSI4LjczMyIgaGVpZ2h0PSIxNC4xMzMiIHZpZXdCb3g9IjAgMCA4LjczMyAxNC4xMzMiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICAuY2xzLTF7ZmlsbDojMjliYmMxfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8cGF0aCBpZD0iUGF0aF8xNSIgZD0iTTI0LjczMyAyMy45NjZsLTUuNC01LjQgNS40LTUuNC0xLjY2Ny0xLjY2NkwxNiAxOC41NjZsNy4wNjYgNy4wNjZ6IiBjbGFzcz0iY2xzLTEiIGRhdGEtbmFtZT0iUGF0aCAxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2IC0xMS41KSIvPgo8L3N2Zz4K"},672:function(t,e,o){"use strict";o.r(e);o(197),o(127);var r=o(506),n=o.n(r),l=(o(198),o(349)),m=o.n(l),c=(o(353),o(9)),d={layout:"loginLayout",components:{VuePhoneNumberInput:n.a},data:function(){return{Toast:m.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}),numberValidateForm:{phoneNumber:""},phoneNumber:"",translations:{phoneNumberLabel:"رقم الموبايل"},formattedNumber:"",formatNational:""}},mounted:function(){var t=this,e=localStorage.getItem("sknToken");e&&c.a.get("users/profile",{headers:{"access-token":e}}).then((function(e){t.$router.push("/profile")})).catch((function(t){return t}))},methods:{updatePhone:function(t){t.formatNational&&(this.formatNational=t.formatNational.split(" ").join("")),this.formattedNumber=t.formattedNumber||""},submitForm:function(){var t=this,e=this.formattedNumber;if(e&&13===e.length&&String(e).startsWith("+201")){var data={phone:this.formatNational,formattedNumber:e};c.a.post("users/password/forget",data).then((function(e){localStorage.setItem("phone",t.formatNational),t.$router.push({path:"/passwordCode"})})).catch((function(e){var o="حدث خطأ ما";e.response&&e.response.data&&e.response.data.message&&(o=e.response.data.message),t.Toast.fire({icon:"error",title:o})}))}else this.Toast.fire({icon:"error",title:"يجب إدخال رقم هاتف صالح"})},resetForm:function(t){this.$refs[t].resetFields()}}},f=o(2),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-row",{staticClass:"row-bg forgetPassword"},[r("el-col",{staticClass:"hidden-xs-only",attrs:{xs:24,sm:10,md:14,lg:14,xl:14}},[r("div",{staticClass:"imageContainer"})]),t._v(" "),r("el-col",{attrs:{xs:24,sm:14,md:10,lg:10,xl:10}},[r("div",{staticClass:"pageContainer"},[r("div",{staticClass:"headerWrapper"},[r("div",{staticClass:"grid-content forgetPassword-form"},[r("div",{staticClass:"forgetPassword-form_logo"},[r("img",{attrs:{src:o(129),alt:"SKN Logo"}})]),t._v(" "),r("div",{staticClass:"forgetPassword-form_header"},[r("h3",[t._v("!نسيت كلمة السر")])]),t._v(" "),r("div",{staticClass:"forgetPassword-form_small-header"},[r("span",[t._v("من فضلك ادخل رقم التليفون الخاص بك")]),t._v(" "),r("span",{staticClass:"forgetPassword-form_number"})]),t._v(" "),r("el-form",{ref:"numberValidateForm",staticClass:"demo-ruleForm forgetPassword-field",attrs:{model:t.numberValidateForm,"label-width":"100px"}},[r("el-form-item",{staticClass:"PhoneNumberInput PhoneNumberInputForgetPass"},[r("VuePhoneNumberInput",{attrs:{id:"PhoneNumberInput",translations:t.translations,"default-country-code":"EG","valid-color":"#DCDFE6",color:"#DCDFE6","error-color":"#DCDFE6"},on:{update:t.updatePhone},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm("numberValidateForm")}},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1),t._v(" "),r("el-form-item",{staticClass:"forgetPassword-buttons"},[r("nuxt-link",{attrs:{to:""}},[r("el-button",{staticClass:"forgetPassword-buttons_login",on:{click:function(e){return t.submitForm("numberValidateForm")}}},[t._v("تاكيد")])],1)],1)],1),t._v(" "),r("div",{staticClass:"login-back"},[r("nuxt-link",{attrs:{to:"/login"}},[r("span",{staticClass:"login-back_dev"},[r("span",[r("img",{attrs:{src:o(358),alt:""}})]),t._v("العوده الي تسجيل الدخول")])])],1)],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);