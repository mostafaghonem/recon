(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{739:function(e,t,n){"use strict";n(747),n(51),n(87),n(88),n(18),n(769);var r=n(737),o=n(738),l=n(1);t.a={name:"v-combobox",extends:o.a,props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{counterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return r.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onFilteredItemsChanged:function(){},onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find(function(t){return e.endsWith(t)});null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genChipSelection:function(e,t){var n=this,o=r.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(o.componentOptions.listeners.dblclick=function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}),o},onChipInput:function(e){r.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),r.a.options.methods.onEnterDown.call(this),this.getMenuIndex()>-1||this.updateSelf()},onKeyDown:function(e){var t=e.keyCode;r.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===l.q.left&&0===this.$refs.input.selectionStart&&this.updateSelf(),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();o.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():r.a.options.methods.selectItem.call(this,e)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.internalSearch;r.a.options.methods.setValue.call(this,e)},updateEditing:function(){var e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox:function(){var e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),e&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this.getMenuIndex();if(!(e<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var t=this.selectedItems.indexOf(this.internalSearch);if(t>-1){var n=this.internalValue.slice();n.splice(t,1),this.setValue(n)}if(e>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}}}}},747:function(e,t,n){"use strict";var r=n(19),o=n(54),l=n(201),d="".endsWith;r(r.P+r.F*n(202)("endsWith"),"String",{endsWith:function(e){var t=l(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=o(t.length),c=void 0===n?r:Math.min(o(n),r),v=String(e);return d?d.call(t,v,c):t.slice(c-v.length,c)===v}})},752:function(e,t,n){var content=n(753);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("0404d2be",content,!0,{sourceMap:!1})},753:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""])},793:function(e,t,n){"use strict";var r=n(737),o=(n(51),n(752),n(738).a),l=n(50),d=n(204),c=n(15),v=o.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:r.a.options.props.transition},computed:{classes:function(){return Object.assign(o.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||o.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var e=o.options.computed.$_menuProps.call(this);return e.transition=e.transition||"v-menu-transition",e}},methods:{genSelections:function(){return this.editable?o.options.methods.genSelections.call(this):r.a.options.methods.genSelections.call(this)},genCommaSelection:function(e,t,n){return this.segmented?this.genSegmentedBtn(e):r.a.options.methods.genCommaSelection.call(this,e,t,n)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(e){var t=this,n=this.getValue(e),r=this.computedItems.find(function(i){return t.getValue(i)===n})||e;return r.text&&r.callback?this.$createElement(d.a,{props:{flat:!0},on:{click:function(e){e.stopPropagation(),r.callback(e)}}},[r.text]):(Object(c.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),h=n(739).a,m=n(206),f=n(205);n.d(t,"a",function(){return x});var x={functional:!0,$_wrapperFor:r.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(e,t){var n=t.props,data=t.data,l=t.slots,d=t.parent;Object(f.a)(data);var _=Object(m.a)(l(),e);return n.autocomplete&&Object(c.d)("<v-select autocomplete>","<v-autocomplete>",x,d),n.combobox&&Object(c.d)("<v-select combobox>","<v-combobox>",x,d),n.tags&&Object(c.d)("<v-select tags>","<v-combobox multiple>",x,d),n.overflow&&Object(c.d)("<v-select overflow>","<v-overflow-btn>",x,d),n.segmented&&Object(c.d)("<v-select segmented>","<v-overflow-btn segmented>",x,d),n.editable&&Object(c.d)("<v-select editable>","<v-overflow-btn editable>",x,d),data.attrs=data.attrs||{},n.combobox||n.tags?(data.attrs.multiple=n.tags,e(h,data,_)):n.autocomplete?(data.attrs.multiple=n.multiple,e(o,data,_)):n.overflow||n.segmented||n.editable?(data.attrs.segmented=n.segmented,data.attrs.editable=n.editable,e(v,data,_)):(data.attrs.multiple=n.multiple,e(r.a,data,_))}};t.b=x},858:function(e,t,n){"use strict";n.r(t);n(292),n(36),n(51),n(26),n(40);var r=n(14),o=(n(44),n(11)),l=n(63),d=n.n(l),c=n(27),v=n(582),h=n(52),m=n(578),f=n.n(m),x=n(579),_={isDuplicate:!1,tripleNumber:{first:void 0,second:void 0,third:void 0},address:{},militaryId:void 0,recordId:void 0,fullName:void 0,name:void 0,force:void 0,army:void 0,situation:"without",joinDate:f()().month(2).startOf("month").toISOString().substr(0,10),birthDate:f()().subtract(20,"year").toDate().toISOString().substr(0,10),recruitmentLevel:"first",educationRank:void 0,treatment:"without_extra_year",notes:"",influences:[]},I={layout:"dashboard",data:function(){var e=this;return{militaryIdLength:13,nationalIdLength:14,recordIdLength:10,militaryIdErrorMessages:[],recordIdErrorMessages:[],canSelectForce:!1,forces:[],soldier:d.a.cloneDeep(_),address:{governate:void 0,centre:void 0,village:void 0},governates:[],rules:{militaryId:[function(t){return!!t||e.$t("MilitaryId_Required")},function(t){return e.validateMilitaryId(t)}],nationalId:[function(t){return e.validateNationalId(t)}],recordId:[function(t){return!!t||e.$t("RecordId_Required")}],tripleNumber:[function(t){return!!t||e.$t("TripleNumber_Required")}],name:[function(t){return!!t||e.$t("Name_Required")}],governate:[function(t){return!!t||e.$t("Governate_Required")}],centre:[function(t){return!!t||e.$t("Centre_Required")}],village:[function(t){return!!t||e.$t("Village_Required")}],educationRank:[function(t){return!!t||e.$t("Education_Rank_Required")}]},divisions:[],unitId:void 0,divisionId:void 0,edit:!1,birthDateModal:!1,joinDateModal:!1,releaseDateModal:!1,recruitmentLevel:"first",educationRank:void 0,treatment:"without_extra_year",situation:"without",joinDate:f()().month(2).startOf("month").toISOString().substr(0,10)}},created:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDivisions();case 2:e.sent,this.edit?(this.processMilitaryId(this.soldier.militaryId),this.setDivision(this.soldier.unitId,this.edit),this.joinDate=this.soldier.joinDate,this.treatment=this.soldier.treatment,this.educationRank=this.soldier.educationRank,this.recruitmentLevel=this.soldier.recruitmentLevel):(this.soldier=d.a.cloneDeep(_),console.log("triple",this.soldier.tripleNumber));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn","isAuthorized"],meta:{branches:["recon_force_people"],permissions:["recon_people_creator"]},components:{materialCard:x.a},computed:Object(r.a)({},Object(c.c)({user:"app/getUser",locations:"app/getLocations",defaults:"app/getDefaults",fullname:"user/getFullname"}),{divisionsComputed:function(){var e=this;return this.soldier.army?this.divisions.filter(function(t){return t.army===e.soldier.army&&["division"].includes(t.type)}):this.divisions.filter(function(e){return["division"].includes(e.type)})},unitsComputed:function(){var e=this;console.log("computing units");var t=this.divisionId?this.divisions.filter(function(e){return["battalion","company"].includes(e.type)}).filter(function(t){return t.divisionId===e.divisionId||t.divisionId&&t.divisionId._id===e.divisionId}):this.divisions.filter(function(e){return["battalion","company"].includes(e.type)});return!this.divisionId&&this.soldier.army&&(t=t.filter(function(t){return t.army===e.soldier.army})),t},releaseDate:v.o}),methods:{moment:f.a,getRightMonths:function(time){return[0,3,6,9].includes(f()(time).month())},reset:function(){this.joinDateBack=this.joinDate,this.soldier=d.a.cloneDeep(_),this.treatment=this.soldier.treatment,this.educationRank=this.soldier.educationRank,this.recruitmentLevel=this.soldier.recruitmentLevel,this.joinDate=this.joinDateBack,this.militaryIdErrorMessages=[]},command:function(e){if(13===e.keyCode)return this.submit()},getDivisions:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/divisions",e.next=3,Object(h.d)("/divisions");case 3:if(!(t=e.sent).error){e.next=7;break}return console.log("error getting divisions",t.error),e.abrupt("return");case 7:this.divisions=t.divisions;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),submit:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,path,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.edit?"Edited":"Added",!this.$refs.form.validate()){e.next=16;break}return path=this.edit?"/soldiers/edit/".concat(this.soldierId):"/soldiers",this.soldier.joinDate=this.joinDate,this.soldier.treatment=this.treatment,this.soldier.educationRank=this.educationRank,this.soldier.recruitmentLevel=this.recruitmentLevel,this.soldier.releaseDate=this.releaseDate,this.soldier.nationalId=this.soldier.nationalId?this.soldier.nationalId:void 0,e.next=12,Object(h.e)(path,this.soldier);case 12:if(!(n=e.sent).error){e.next=15;break}return e.abrupt("return",v.b.fire({icon:"error",title:n.error,timer:4e3,showConfirmButton:!1}));case 15:v.b.fire({icon:"success",title:this.$i18n.t("".concat(t,"_Soldier_Success")),timer:4e3,showConfirmButton:!1});case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),isDuplicate:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var n,r,o,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.key,r=t.value,"/soldiers/is-duplicate",o={key:n,value:r},e.next=5,Object(h.d)("/soldiers/is-duplicate",o);case 5:if(!(l=e.sent).error){e.next=8;break}return e.abrupt("return",!1);case 8:return e.abrupt("return",l.isDuplicate);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setAll:function(e){this.soldier.unitId=void 0,this.soldier.divisionId=void 0},setUnits:function(e){var t=this.divisions.find(function(t){return t._id===e});this.divisionId=e,t&&(console.log("clearing unit",t),this.soldier.army=t.army,this.soldier.unitId=void 0)},setDivision:function(e,t){var n=this.unitsComputed.find(function(t){return t._id===e});t&&(n=this.divisions.find(function(t){return t._id===e})),n&&(this.soldier.unitId=n._id,this.soldier.divisionId=n.divisionId?n.divisionId._id:n.divisionId,this.soldier.army=n.army)},setRecruitmentLevel:function(e){var t=this,n=f()(e).month(),r=this.defaults.RECRUITMENT_LEVELS,o={},l=0;r.map(function(e,i){o[i]=[l,l+1,l+2],o[i].find(function(p){return p===n})&&(t.recruitmentLevel=e.value),l+=3})},processMilitaryId:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var n,r,code,o,l,d,c,v,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.substr(0,4)).length>=4&&parseInt(n,10)<=(new Date).getFullYear()&&((r=new Date(this.joinDate)).setFullYear(parseInt(n,10)),this.joinDate=r.toISOString().substr(0,10),this.joinDate=r.toISOString().substr(0,10)),t.length>=5?(code=parseInt(t[4]),(o=this.locations.recruitmentAreas[code-1])&&(this.soldier.recruitmentArea=o.value,this.governates=this.locations.governates.filter(function(e){return e.recruitment_area&&e.recruitment_area.length?e.recruitment_area.find(function(p){return p.value===o.value}):e.recruitment_area&&e.recruitment_area.value===o.value}))):this.soldier.recruitmentArea=void 0,t.length>=6?(l=parseInt(t[5]),(d=this.defaults.EDUCATION_RANKS.find(function(e){return e.code==l}))&&(this.educationRank=d.value)):this.educationRank=void 0,t.length>=8?(c="".concat(t[6]).concat(t[7]),v=this.defaults.FORCES_LIST.find(function(e){return e.code==c}),"47"==c&&(this.canSelectForce=!0,this.forces=this.defaults.FORCES_LIST.filter(function(e){return e.code&&e.code.length>2})),v&&(this.soldier.force=v.value)):this.soldier.force=void 0,13!==t.length||this.edit){e.next=18;break}return e.prev=6,e.next=9,this.isDuplicate({key:"militaryId",value:t});case 9:h=e.sent,this.soldier.isDuplicate=h,this.soldier.isDuplicate?this.militaryIdErrorMessages=[this.$i18n.t("MillitaryId_Duplicate")]:this.militaryIdErrorMessages=[],e.next=16;break;case 14:e.prev=14,e.t0=e.catch(6);case 16:e.next=19;break;case 18:this.militaryIdErrorMessages=[];case 19:case"end":return e.stop()}},e,this,[[6,14]])}));return function(t){return e.apply(this,arguments)}}(),processRecordId:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>=1)||this.edit){e.next=13;break}return e.prev=1,e.next=4,this.isDuplicate({key:"recordId",value:t});case 4:n=e.sent,this.soldier.isDuplicate=n,this.soldier.isDuplicate?this.recordIdErrorMessages=[this.$i18n.t("RecordId_Duplicate")]:this.recordIdErrorMessages=[],e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:e.next=14;break;case 13:this.recordIdErrorMessages=[];case 14:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),processNationalId:function(e){var t,n,r,o=e.substr(0,3);if(o.length>=3){var code=e[0],l="2"===code?1900:"3"===code?2e3:void 0;l&&(t=l+parseInt(o.split("").splice(1,3).join(""),10))}if(e.length>=5&&(n=parseInt("".concat(e[3]).concat(e[4]),10)-1),e.length>=7&&(r=parseInt("".concat(e[5]).concat(e[6]),10)),e.length>=9&&"".concat(e[7]).concat(e[8]),t){var d=new Date(this.soldier.birthDate);d.setFullYear(parseInt(t,10)),this.soldier.birthDate=d.toISOString().substr(0,10)}if(n&&n<=11){var c=new Date(this.soldier.birthDate);c.setMonth(n),this.soldier.birthDate=c.toISOString().substr(0,10)}if(r&&r<=31){var v=new Date(this.soldier.birthDate);v.setDate(r),this.soldier.birthDate=v.toISOString().substr(0,10)}},onlyNumber:function(e){var t=e.keyCode?e.keyCode:e.which;(t<48||t>57)&&46!==t&&e.preventDefault()},validateMilitaryId:function(e){if(void 0===e)return!0;if(e.length<4)return this.$i18n.t("MillitaryId_Invalid");if(e.length>=5&&0===parseInt(e[4]))return this.$i18n.t("MillitaryId_Invalid");if(e.length>=6){var code=parseInt(e[5]);if(!this.defaults.EDUCATION_RANKS.find(function(e){return e.code==code}))return this.$i18n.t("MillitaryId_Invalid")}var t=e.substr(0,4);return t.length>=4&&parseInt(t)<=(new Date).getFullYear()?e.length<13&&this.$i18n.t("MillitaryId_Incomplete"):this.$i18n.t("MillitaryId_Invalid")},validateNationalId:function(e){if(void 0===e)return!1;if(e.length>=1){var t=e[0];if(!["2","3"].includes(t))return this.$i18n.t("NationalId_Invalid")}if(e.length>=5){var n=parseInt("".concat(e[3]).concat(e[4]),10);if(n>12||n<1)return this.$i18n.t("NationalId_Invalid")}if(e.length>=7){var r=parseInt("".concat(e[5]).concat(e[6]),10);if(r>31||r<1)return this.$i18n.t("NationalId_Invalid")}if(e.length>=9){var o="".concat(e[7]).concat(e[8]);if(!this.locations.governates.find(function(e){return e.code===o}))return this.$i18n.t("NationalId_Invalid")}return!!(e.length&&e.length<14)&&this.$i18n.t("NationalId_Incomplete")},updateJoinDate:function(e){this.defaults.RECRUITMENT_LEVELS.findIndex(function(t){return t.value===e})}},mounted:function(){window.addEventListener("keypress",this.command),this.soldierId&&this.processMilitaryId(this.soldier.militaryId)},destroyed:function(){window.removeEventListener("keypress",this.command)},asyncData:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(t){var n,r,path,o,l,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.route,r=n.path.substr(n.path.lastIndexOf("/")+1),n.path.includes("edit")){e.next=4;break}return e.abrupt("return",{});case 4:return path="/soldiers/data/".concat(r),e.next=7,Object(h.d)(path);case 7:if(!(o=e.sent).error){e.next=11;break}return v.b.fire({icon:"error",title:o.error,timer:4e3,showConfirmButton:!1}),e.abrupt("return",{});case 11:return o.birthDate=f()(o.birthDate).toISOString().substr(0,10),o.joinDate=f()(o.joinDate).toISOString().substr(0,10),o.releaseDate=o.releaseDate?f()(o.answerDate).toISOString().substr(0,10):void 0,console.log("soldier ",o),o.tripleNumber.value?(l=o.tripleNumber.value.split("/"),d={first:l[2],second:l[1],third:l[0]},o.tripleNumber=d):o.tripleNumber={},o.unit&&o.unit.unitId&&(o.unitId=o.unit.unitId),e.abrupt("return",{soldierId:r,soldier:o,edit:!0});case 18:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=n(22),y=n(34),k=n.n(y),D=n(738),S=n(185),$=n(739),N=n(177),R=n(917),C=n(178),M=n(789),j=n(179),E=n(568),O=n(793),L=n(574),component=Object(w.a)(I,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:e.$t("Add_Soldier")}},[n("v-form",{ref:"form"},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{maxlength:e.recordIdLength,label:e.$t("Record_ID"),rules:e.rules.recordId,"error-messages":e.recordIdErrorMessages},on:{keypress:e.onlyNumber,input:e.processRecordId},model:{value:e.soldier.recordId,callback:function(t){e.$set(e.soldier,"recordId",t)},expression:"soldier.recordId"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{maxlength:e.militaryIdLength,minlength:e.militaryIdLength,label:e.$t("Military_ID"),rules:e.rules.militaryId,"error-messages":e.militaryIdErrorMessages},on:{keypress:e.onlyNumber,input:e.processMilitaryId},model:{value:e.soldier.militaryId,callback:function(t){e.$set(e.soldier,"militaryId",t)},expression:"soldier.militaryId"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{label:e.$t("Name"),rules:e.rules.name},model:{value:e.soldier.fullName,callback:function(t){e.$set(e.soldier,"fullName",t)},expression:"soldier.fullName"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{staticClass:"white-input",attrs:{maxlength:e.nationalIdLength,minLength:e.nationalIdLength,label:e.$t("National_ID"),rules:e.rules.nationalId},on:{input:e.processNationalId},model:{value:e.soldier.nationalId,callback:function(t){e.$set(e.soldier,"nationalId",t)},expression:"soldier.nationalId"}})],1)],1),e._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md1:""}},[n("v-text-field",{staticClass:"white-input tripleNumber",attrs:{label:e.$t("Triple_Number_Third"),rules:e.rules.tripleNumber},on:{keypress:e.onlyNumber},model:{value:e.soldier.tripleNumber.third,callback:function(t){e.$set(e.soldier.tripleNumber,"third",t)},expression:"soldier.tripleNumber.third"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md1:""}},[n("v-text-field",{staticClass:"white-input tripleNumber",attrs:{label:e.$t("Triple_Number_Second"),rules:e.rules.tripleNumber},on:{keypress:e.onlyNumber},model:{value:e.soldier.tripleNumber.second,callback:function(t){e.$set(e.soldier.tripleNumber,"second",t)},expression:"soldier.tripleNumber.second"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md1:""}},[n("v-text-field",{staticClass:"white-input tripleNumber",attrs:{label:e.$t("Triple_Number_First"),rules:e.rules.tripleNumber},on:{keypress:e.onlyNumber},model:{value:e.soldier.tripleNumber.first,callback:function(t){e.$set(e.soldier.tripleNumber,"first",t)},expression:"soldier.tripleNumber.first"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.locations.recruitmentAreas,"item-text":"ar","item-value":"value",label:e.$t("Recruitment_Area"),disabled:""},model:{value:e.soldier.recruitmentArea,callback:function(t){e.$set(e.soldier,"recruitmentArea",t)},expression:"soldier.recruitmentArea"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.soldier.recruitmentArea?e.governates:e.locations?e.locations.governates:[],label:e.$t("Governate"),"item-text":"ar","item-value":"value",rules:e.rules.governate},model:{value:e.soldier.address.governate,callback:function(t){e.$set(e.soldier.address,"governate",t)},expression:"soldier.address.governate"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-combobox",{staticClass:"form-select",attrs:{items:e.soldier.address.centre&&e.defaults.villages?e.defaults.villages[e.soldier.address.centre]:[],label:e.$t("Centre"),rules:e.rules.centre},model:{value:e.soldier.address.centre,callback:function(t){e.$set(e.soldier.address,"centre",t)},expression:"soldier.address.centre"}})],1)],1),e._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-combobox",{attrs:{items:e.soldier.address.centre&&e.defaults.villages?e.defaults.villages[e.soldier.address.centre]:[],label:e.$t("Village"),rules:e.rules.village},model:{value:e.soldier.address.village,callback:function(t){e.$set(e.soldier.address,"village",t)},expression:"soldier.address.village"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.EDUCATION_RANKS,"item-text":"ar","item-value":"value",label:e.$t("Eductional_Rank"),disabled:""},model:{value:e.educationRank,callback:function(t){e.educationRank=t},expression:"educationRank"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.canSelectForce?e.forces:e.defaults.FORCES_LIST?e.defaults.FORCES_LIST:[],"item-text":"ar","item-value":"value",label:e.$t("Force"),disabled:!e.canSelectForce},model:{value:e.soldier.force,callback:function(t){e.$set(e.soldier,"force",t)},expression:"soldier.force"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.SITUATIONS,"item-text":"ar","item-value":"value",label:e.$t("Situation")},model:{value:e.soldier.situation,callback:function(t){e.$set(e.soldier,"situation",t)},expression:"soldier.situation"}})],1)],1),e._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.TREATMENTS,"item-text":"ar","item-value":"value",label:e.$t("Treatment")},model:{value:e.treatment,callback:function(t){e.treatment=t},expression:"treatment"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:e.$t("Birth_Date"),"prepend-icon":"event",readonly:""},model:{value:e.soldier.birthDate,callback:function(t){e.$set(e.soldier,"birthDate",t)},expression:"soldier.birthDate"}},"v-text-field",o,!1),r))]}}]),model:{value:e.birthDateModal,callback:function(t){e.birthDateModal=t},expression:"birthDateModal"}},[e._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return e.moment().diff(e.moment(time),"year")>=19},locale:"ar",dark:""},on:{input:function(t){e.birthDateModal=!1}},model:{value:e.soldier.birthDate,callback:function(t){e.$set(e.soldier,"birthDate",t)},expression:"soldier.birthDate"}})],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:e.$t("Join_Date"),"allowed-dates":function(time){return e.getRightMonths(time)},"prepend-icon":"event",readonly:""},model:{value:e.joinDate,callback:function(t){e.joinDate=t},expression:"joinDate"}},"v-text-field",o,!1),r))]}}]),model:{value:e.joinDateModal,callback:function(t){e.joinDateModal=t},expression:"joinDateModal"}},[e._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return e.moment(time).diff(e.moment())<0},locale:"ar",dark:""},on:{input:function(t){e.joinDateModal=!1},change:e.setRecruitmentLevel},model:{value:e.joinDate,callback:function(t){e.joinDate=t},expression:"joinDate"}})],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":50,"nudge-bottom":5,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:e.$t("Release_Date"),value:e.releaseDate,"prepend-icon":"event",readonly:""},model:{value:e.releaseDate,callback:function(t){e.releaseDate=t},expression:"releaseDate"}},"v-text-field",o,!1),r))]}}]),model:{value:e.releaseDateModal,callback:function(t){e.releaseDateModal=t},expression:"releaseDateModal"}},[e._v(" "),n("v-date-picker",{attrs:{"allowed-dates":function(time){return e.moment(time).diff(e.moment())>0},locale:"ar",dark:"",disabled:""},on:{change:e.setRecruitmentLevel},model:{value:e.releaseDate,callback:function(t){e.releaseDate=t},expression:"releaseDate"}})],1)],1)],1),e._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.RECRUITMENT_LEVELS,"item-text":"ar","item-value":"value",label:e.$t("RECRUITMENT_LEVEL"),disabled:""},model:{value:e.recruitmentLevel,callback:function(t){e.recruitmentLevel=t},expression:"recruitmentLevel"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.ARMY_LIST,"item-text":"ar","item-value":"value",label:e.$t("Army"),rules:e.rules.army},on:{change:e.setAll},model:{value:e.soldier.army,callback:function(t){e.$set(e.soldier,"army",t)},expression:"soldier.army"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),"item-text":"name","item-value":"_id",items:e.divisionsComputed,label:e.$t("Division"),disabled:0===e.divisionsComputed.length,clearable:!0},on:{change:e.setUnits},model:{value:e.soldier.divisionId,callback:function(t){e.$set(e.soldier,"divisionId",t)},expression:"soldier.divisionId"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),"item-text":"name","item-value":"_id",items:e.unitsComputed,label:e.$t("Unit"),rules:e.rules.unitId,clearable:!0},on:{change:e.setDivision},model:{value:e.soldier.unitId,callback:function(t){e.$set(e.soldier,"unitId",t)},expression:"soldier.unitId"}})],1)],1),e._v(" "),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md6:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:e.submit}},[e._v("\n                  "+e._s(e.edit?e.$t("Edit"):e.$t("Add"))+"\n                ")])],1),e._v(" "),e.edit?e._e():n("v-flex",{attrs:{md6:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-youtube",attrs:{color:"yellow"},on:{click:e.reset}},[e._v("\n                  "+e._s(e.$t("RESET"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;k()(component,{VAutocomplete:D.a,VBtn:S.a,VCombobox:$.a,VContainer:N.a,VDatePicker:R.a,VFlex:C.a,VForm:M.a,VLayout:j.a,VMenu:E.a,VSelect:O.a,VTextField:L.a})}}]);