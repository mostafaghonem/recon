(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{720:function(t,e,n){var content=n(721);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("1dd68dec",content,!0,{sourceMap:!1})},721:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-tooltip__content{background:#616161;border-radius:2px;color:#fff;font-size:12px;display:inline-block;padding:5px 8px;position:absolute;text-transform:none;width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-tooltip__content[class*=-active]{transition:.15s cubic-bezier(.25,.8,.5,1);pointer-events:none}.v-tooltip__content--fixed{position:fixed}@media only screen and (max-width:959px){.v-tooltip .v-tooltip__content{padding:10px 16px}}",""])},724:function(t,e,n){"use strict";n(729),n(51),n(86),n(87),n(18),n(743);var o=n(722),r=n(723),l=n(1);e.a={name:"v-combobox",extends:r.a,props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{counterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return o.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onFilteredItemsChanged:function(){},onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find(function(e){return t.endsWith(e)});null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genChipSelection:function(t,e){var n=this,r=o.a.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(r.componentOptions.listeners.dblclick=function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}),r},onChipInput:function(t){o.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),o.a.options.methods.onEnterDown.call(this),this.getMenuIndex()>-1||this.updateSelf()},onKeyDown:function(t){var e=t.keyCode;o.a.options.methods.onKeyDown.call(this,t),this.multiple&&e===l.q.left&&0===this.$refs.input.selectionStart&&this.updateSelf(),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();r.a.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():o.a.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.internalSearch;o.a.options.methods.setValue.call(this,t)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}}}}},729:function(t,e,n){"use strict";var o=n(19),r=n(54),l=n(200),c="".endsWith;o(o.P+o.F*n(201)("endsWith"),"String",{endsWith:function(t){var e=l(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(e.length),d=void 0===n?o:Math.min(r(n),o),m=String(t);return c?c.call(e,m,d):e.slice(d-m.length,d)===m}})},730:function(t,e,n){var content=n(731);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("0404d2be",content,!0,{sourceMap:!1})},731:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""])},738:function(t,e,n){"use strict";n(17),n(720);var o=n(16),r=n(193),l=n(105),c=n(192),d=n(194),m=n(53),v=n(1),h=n(15);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={name:"v-tooltip",mixins:[o.a,r.a,l.a,c.a,d.a,m.a],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=this.isAttached?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),this.calcXOverflow(r,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=this.isAttached?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),this.calcYOverflow(o+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(v.c)(this.maxWidth),minWidth:Object(v.c)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===Object(v.m)(this,"activator",!0)&&Object(h.a)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}};if("scoped"===Object(v.m)(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,n=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},f(e,this.contentClass,!0),f(e,"menuable__content__active",this.isActive),f(e,"v-tooltip__content--fixed",this.activatorFixed),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[n]),this.genActivator()])}}},746:function(t,e,n){"use strict";var o=n(722),r=(n(51),n(730),n(723).a),l=n(50),c=n(199),d=n(15),m=r.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:o.a.options.props.transition},computed:{classes:function(){return Object.assign(r.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||r.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=r.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?r.options.methods.genSelections.call(this):o.a.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,n){return this.segmented?this.genSegmentedBtn(t):o.a.options.methods.genCommaSelection.call(this,t,e,n)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(t){var e=this,n=this.getValue(t),o=this.computedItems.find(function(i){return e.getValue(i)===n})||t;return o.text&&o.callback?this.$createElement(c.a,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),o.callback(t)}}},[o.text]):(Object(d.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),v=n(724).a,h=n(204),f=n(203);n.d(e,"a",function(){return x});var x={functional:!0,$_wrapperFor:o.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var n=e.props,data=e.data,l=e.slots,c=e.parent;Object(f.a)(data);var _=Object(h.a)(l(),t);return n.autocomplete&&Object(d.d)("<v-select autocomplete>","<v-autocomplete>",x,c),n.combobox&&Object(d.d)("<v-select combobox>","<v-combobox>",x,c),n.tags&&Object(d.d)("<v-select tags>","<v-combobox multiple>",x,c),n.overflow&&Object(d.d)("<v-select overflow>","<v-overflow-btn>",x,c),n.segmented&&Object(d.d)("<v-select segmented>","<v-overflow-btn segmented>",x,c),n.editable&&Object(d.d)("<v-select editable>","<v-overflow-btn editable>",x,c),data.attrs=data.attrs||{},n.combobox||n.tags?(data.attrs.multiple=n.tags,t(v,data,_)):n.autocomplete?(data.attrs.multiple=n.multiple,t(r,data,_)):n.overflow||n.segmented||n.editable?(data.attrs.segmented=n.segmented,data.attrs.editable=n.editable,t(m,data,_)):(data.attrs.multiple=n.multiple,t(o.a,data,_))}};e.b=x},749:function(t,e,n){"use strict";n.d(e,"e",function(){return c}),n.d(e,"d",function(){return d}),n.d(e,"f",function(){return m}),n.d(e,"b",function(){return v}),n.d(e,"c",function(){return h}),n.d(e,"a",function(){return f});n(26),n(40),n(51),n(41);var o=n(13),r=(n(28),n(44),n(10)),l=n(52),c=function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,c,progress,d){var m,v,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"/upload/sign",m={},Object(o.a)(m,"file-name",e.name),Object(o.a)(m,"default-ext","pdf"),v=m,console.log("getting signed",v),t.next=5,Object(l.c)("/upload/sign",v);case 5:return h=t.sent,t.abrupt("return",h);case 7:case"end":return t.stop()}},t)}));return function(e,n,o,r,l,c){return t.apply(this,arguments)}}(),d=function(t,e){var n=this;c(t).then(function(o){t.dynamicUploadUrl=o.postURL,t.presignedURL=o.presignedURL,t.data=o.formData;var r=o.imageLink.replace("http://","").replace("https://",""),l={link:o.imageLink,name:t.name.slice(0,t.name.indexOf(".")),size:t.size,originalName:t.name,path:r.slice(r.indexOf("/"),r.length)};n.mail.attachments.push(l),e()})},m=function(t,e,n){var o=this.mail.attachments.find(function(e){return e.originalName===t.name||t.name.includes(e.name)});o&&this.mail.attachments.splice(this.mail.attachments.indexOf(o),1)},v=function(t){return"".concat(t[0].presignedURL)},h=function(t,e,n){e.setRequestHeader("Content-Type","application/pdf"),console.log("form data",n)},f=function(t){return{thumbnailWidth:120,maxFilesize:10,method:"put",accept:t.signFiles,url:t.getMeUploadUrl,sending:t.sendFiles,acceptedFiles:".pdf",dictDefaultMessage:"اضغط هنا لرفع ملف المكاتبة بصيغة pdf 📎",dictRemoveFile:"❌",addRemoveLinks:!0}}},771:function(t,e,n){"use strict";n.r(e);n(51);var o=n(14),r=(n(26),n(40),n(44),n(10)),l=(n(291),n(27)),c=n(581),d=n(52),m=n(749),v=n(577),h=n.n(v),f=n(580),x={type:"outbox",number:void 0,date:void 0,adminNo:void 0,direction:void 0,subject:void 0,summary:void 0,wordMule:void 0,folder:void 0,answerForId:void 0,attachments:[]},_={layout:"dashboard",data:function(){var t=this;return{defaultPermissions:[],defaultRanks:[],dateModal:!1,answerDateModal:!1,edit:!1,answerForId:void 0,disableForIdEdit:!1,mailTypes:[{value:"mail",ar:"بريد"},{value:"email",ar:"تراسل"},{value:"fax",ar:"فاكس"}],dropzoneOptions:Object(m.a)(this),YES_NO:[{value:"yes",ar:"نعم"},{value:"no",ar:"لا"}],mail:x,disabled:{branch:!1,permissions:!1},rules:{number:[function(e){return!!e||t.$t("Writing_Number_Required")},function(e){return t.validateNumber(e)}],date:[function(e){return!!e||t.$t("Writing_Number_Required")}]},permissions:[]}},mounted:function(){var t=this;this.edit&&this.mail.attachments&&this.mail.attachments.map(function(e){e.size=e.size||2540,console.log("the file",e),t.$refs.myVueDropzone.manuallyAddFile(e,e.link||"http://localhost:3000/")})},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,o,path,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.route,o=n.path.substr(n.path.lastIndexOf("/")+1),!n.query.answerForId){t.next=5;break}return x.answerForId=n.query.answerForId,t.abrupt("return",{mail:x,disableForIdEdit:!0});case 5:if(n.path.includes("edit")){t.next=7;break}return t.abrupt("return",{});case 7:return path="/mail/data/".concat(o),t.next=10,Object(d.c)(path);case 10:if(!(r=t.sent).error){t.next=14;break}return c.a.fire({icon:"error",title:r.error,timer:4e3,showConfirmButton:!1}),t.abrupt("return",{});case 14:return r.answerResponse=r.answer?"yes":"no",console.log("mail data ============>",r.date),r.date=h()(r.date).format("YYYY-MM-DD"),r.answerDate=r.answerDate?h()(r.answerDate).format("YYYY-MM-DD"):void 0,t.abrupt("return",{mailId:o,mail:r,edit:!0});case 19:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),created:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.$store.app.context,(n=e.nuxtState)&&(!n||n.mail)){t.next=4;break}return t.abrupt("return");case 4:this.setBranch(n.mail);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn","isAuthorized"],meta:{branches:["followup"]},components:{materialCard:f.a},computed:Object(o.a)({},Object(l.c)({defaults:"app/getDefaults",unanswered:"app/getUnAnswered"}),{answerFor:function(){var t=this;if(this.mail.answerForId){var e=this.unanswered.MAILS.find(function(e){return e._id==t.mail.answerForId}),n=JSON.parse(JSON.stringify(e));return n.date=h()(n.date).format("YYYY-MM-DD"),n.subject=["رداً على موضوع:",n.subject].join(" "),console.log("the maile",e),n}return{}}}),methods:{moment:h.a,uploadHandler:m.e,signFiles:m.d,getMeUploadUrl:m.b,sendFiles:m.c,vremoved:m.f,goToAttachment:function(t){if(t&&t.attachments){t.attachments=t.attachments.map(function(t){return t.link="".concat(d.a).concat(t.path),t});var link=t.attachments&&t.attachments.length?t.attachments[0].link:void 0;window.open(link,"_blank")}},submit:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,path,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.edit?"Edited":"Added",!this.$refs.form.validate()){t.next=13;break}return path=this.edit?"/mail/edit/".concat(this.mailId):"/mail",this.mail.answer="yes"===this.mail.answerResponse,this.mail.subject=this.answerFor.subject,t.next=8,Object(d.d)(path,this.mail);case 8:if(!(n=t.sent).error){t.next=11;break}return t.abrupt("return",c.a.fire({icon:"error",title:n.error,timer:4e3,showConfirmButton:!1}));case 11:c.a.fire({icon:"success",title:this.$i18n.t("".concat(e,"_Mail_Success")),timer:4e3,showConfirmButton:!1}),setTimeout(function(){window.location.href="/followup/outbox/mails"},4e3);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),validateMailName:function(t){return void 0===t},validateNumber:function(t){return NaN===parseInt(t)&&this.$i18n.t("MailNumber_Invalid")},setBranch:function(t){var e=t.permissions;t.branch;!e.includes("admin")&&e.includes("branch_head")&&(this.mail.branch=t.branch,this.disabled.branch=!0,this.disabled.permissions=!0)}}},w=n(22),y=n(34),k=n.n(y),S=n(723),I=n(184),$=n(176),D=n(828),F=n(177),O=n(748),C=n(178),M=n(567),j=n(746),N=n(573),A=n(286),W=n(738),component=Object(w.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:t.$t("Add_Outbox")}},[n("v-form",{ref:"form"},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-text-field",{staticClass:"black-input",attrs:{label:t.$t("Writing_Number"),rules:t.rules.number,type:"number"},model:{value:t.mail.number,callback:function(e){t.$set(t.mail,"number",e)},expression:"mail.number"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Writing_Date"),"prepend-icon":"event",readonly:""},model:{value:t.mail.date,callback:function(e){t.$set(t.mail,"date",e)},expression:"mail.date"}},"v-text-field",r,!1),o))]}}]),model:{value:t.dateModal,callback:function(e){t.dateModal=e},expression:"dateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment(time)<=t.moment()},locale:"ar",dark:""},on:{input:function(e){t.dateModal=!1}},model:{value:t.mail.date,callback:function(e){t.$set(t.mail,"date",e)},expression:"mail.date"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-text-field",{staticClass:"black-input",attrs:{label:t.$t("Writing_AdminNo"),type:"number"},model:{value:t.mail.adminNo,callback:function(e){t.$set(t.mail,"adminNo",e)},expression:"mail.adminNo"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.mailTypes,"item-text":"ar","item-value":"value",label:t.$t("Writing_Type")},model:{value:t.mail.mailType,callback:function(e){t.$set(t.mail,"mailType",e)},expression:"mail.mailType"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-autocomplete",{staticClass:"form-select black-input",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.CATEGORIES,"item-text":"ar","item-value":"value",clearable:"",label:t.$t("Writing_Category")},model:{value:t.mail.category,callback:function(e){t.$set(t.mail,"category",e)},expression:"mail.category"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.unanswered.MAILS,"item-text":"number","item-value":"_id",clearable:!t.disableForIdEdit,label:t.$t("Writing_Answer_To"),disabled:t.disableForIdEdit},model:{value:t.mail.answerForId,callback:function(e){t.$set(t.mail,"answerForId",e)},expression:"mail.answerForId"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-text-field",{attrs:{label:t.$t("Writing_For_Date"),"prepend-icon":"event",readonly:""},model:{value:t.answerFor.date,callback:function(e){t.$set(t.answerFor,"date",e)},expression:"answerFor.date"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.DIRECTIONS,"item-text":"ar","item-value":"value",label:t.$t("Wrtiting_Sender_From"),disabled:!0},model:{value:t.answerFor.direction,callback:function(e){t.$set(t.answerFor,"direction",e)},expression:"answerFor.direction"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.BRANCHES,"item-text":"ar","item-value":"value",label:t.$t("Writing_Branch_From"),disabled:!0},model:{value:t.answerFor.branch,callback:function(e){t.$set(t.answerFor,"branch",e)},expression:"answerFor.branch"}})],1),t._v(" "),n("v-flex",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{xs12:"",md1:""}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({on:{click:function(e){return t.goToAttachment(t.answerFor)}}},o),[t._v("\n                      📎\n                    ")])]}}])},[t._v(" "),n("span",{staticStyle:{color:"white"}},[t._v("عرض المكاتبة الواردة")])])],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.DIRECTIONS,"item-text":"ar","item-value":"value",label:t.$t("Writing_Receiver_To")},model:{value:t.mail.direction,callback:function(e){t.$set(t.mail,"direction",e)},expression:"mail.direction"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-select",{staticClass:"form-select black-input",attrs:{"no-data-text":t.$t("No_Selections"),items:t.YES_NO,"item-text":"ar","item-value":"value",label:t.$t("Writing_Should_Reply")},model:{value:t.mail.answerResponse,callback:function(e){t.$set(t.mail,"answerResponse",e)},expression:"mail.answerResponse"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":200,"nudge-bottom":30,transition:"scale-transition","offset-x":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:t.$t("Writing_Answer_Date"),disabled:"no"===t.mail.answerResponse,"prepend-icon":"event",readonly:""},model:{value:t.mail.answerDate,callback:function(e){t.$set(t.mail,"answerDate",e)},expression:"mail.answerDate"}},"v-text-field",r,!1),o))]}}]),model:{value:t.answerDateModal,callback:function(e){t.answerDateModal=e},expression:"answerDateModal"}},[t._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return t.moment(time)>=t.moment()},locale:"ar",dark:""},on:{input:function(e){t.answerDateModal=!1}},model:{value:t.mail.answerDate,callback:function(e){t.$set(t.mail,"answerDate",e)},expression:"mail.answerDate"}})],1)],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.BRANCHES,"item-text":"ar","item-value":"value",label:t.$t("Writing_Sender_Branch")},model:{value:t.mail.branch,callback:function(e){t.$set(t.mail,"branch",e)},expression:"mail.branch"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-select",{staticClass:"form-select black-input",attrs:{"no-data-text":t.$t("No_Selections"),items:t.defaults.WORD_MULES,"item-text":"ar","item-value":"value",label:t.$t("Writing_Word_Mule_Sender")},model:{value:t.mail.wordMule,callback:function(e){t.$set(t.mail,"wordMule",e)},expression:"mail.wordMule"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("v-text-field",{staticClass:"black-input",attrs:{label:t.$t("Writing_Word_Mule_Receiver")},model:{value:t.mail.directionWordMule,callback:function(e){t.$set(t.mail,"directionWordMule",e)},expression:"mail.directionWordMule"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md8:""}},[n("v-textarea",{staticClass:"black-input",attrs:{label:t.$t("Writing_Subject")},model:{value:t.answerFor.subject,callback:function(e){t.$set(t.answerFor,"subject",e)},expression:"answerFor.subject"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:""}},[n("dropzone",{ref:"myVueDropzone",attrs:{id:"dropzone",options:t.dropzoneOptions},on:{"vdropzone-removed-file":t.vremoved,"vdropzone-error":t.vremoved}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:t.submit}},[t.edit?[t._v(t._s(t.$t("Edit")))]:[t._v(t._s(t.$t("Add"))+"\n                  ")]],2)],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;k()(component,{VAutocomplete:S.a,VBtn:I.a,VContainer:$.a,VDatePicker:D.a,VFlex:F.a,VForm:O.a,VLayout:C.a,VMenu:M.a,VSelect:j.a,VTextField:N.a,VTextarea:A.a,VTooltip:W.a})}}]);