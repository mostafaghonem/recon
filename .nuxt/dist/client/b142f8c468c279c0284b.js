(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{739:function(e,t,n){"use strict";n(747),n(51),n(87),n(88),n(18),n(769);var o=n(737),r=n(738),l=n(1);t.a={name:"v-combobox",extends:r.a,props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{counterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return o.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onFilteredItemsChanged:function(){},onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find(function(t){return e.endsWith(t)});null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genChipSelection:function(e,t){var n=this,r=o.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(r.componentOptions.listeners.dblclick=function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}),r},onChipInput:function(e){o.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),o.a.options.methods.onEnterDown.call(this),this.getMenuIndex()>-1||this.updateSelf()},onKeyDown:function(e){var t=e.keyCode;o.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===l.q.left&&0===this.$refs.input.selectionStart&&this.updateSelf(),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();r.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():o.a.options.methods.selectItem.call(this,e)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.internalSearch;o.a.options.methods.setValue.call(this,e)},updateEditing:function(){var e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox:function(){var e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),e&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this.getMenuIndex();if(!(e<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var t=this.selectedItems.indexOf(this.internalSearch);if(t>-1){var n=this.internalValue.slice();n.splice(t,1),this.setValue(n)}if(e>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}}}}},747:function(e,t,n){"use strict";var o=n(19),r=n(54),l=n(201),c="".endsWith;o(o.P+o.F*n(202)("endsWith"),"String",{endsWith:function(e){var t=l(this,e,"endsWith"),n=arguments.length>1?arguments[1]:void 0,o=r(t.length),d=void 0===n?o:Math.min(r(n),o),v=String(e);return c?c.call(t,v,d):t.slice(d-v.length,d)===v}})},752:function(e,t,n){var content=n(753);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("0404d2be",content,!0,{sourceMap:!1})},753:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""])},793:function(e,t,n){"use strict";var o=n(737),r=(n(51),n(752),n(738).a),l=n(50),c=n(204),d=n(15),v=r.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:o.a.options.props.transition},computed:{classes:function(){return Object.assign(r.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||r.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var e=r.options.computed.$_menuProps.call(this);return e.transition=e.transition||"v-menu-transition",e}},methods:{genSelections:function(){return this.editable?r.options.methods.genSelections.call(this):o.a.options.methods.genSelections.call(this)},genCommaSelection:function(e,t,n){return this.segmented?this.genSegmentedBtn(e):o.a.options.methods.genCommaSelection.call(this,e,t,n)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(e){var t=this,n=this.getValue(e),o=this.computedItems.find(function(i){return t.getValue(i)===n})||e;return o.text&&o.callback?this.$createElement(c.a,{props:{flat:!0},on:{click:function(e){e.stopPropagation(),o.callback(e)}}},[o.text]):(Object(d.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),f=n(739).a,m=n(206),h=n(205);n.d(t,"a",function(){return _});var _={functional:!0,$_wrapperFor:o.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(e,t){var n=t.props,data=t.data,l=t.slots,c=t.parent;Object(h.a)(data);var x=Object(m.a)(l(),e);return n.autocomplete&&Object(d.d)("<v-select autocomplete>","<v-autocomplete>",_,c),n.combobox&&Object(d.d)("<v-select combobox>","<v-combobox>",_,c),n.tags&&Object(d.d)("<v-select tags>","<v-combobox multiple>",_,c),n.overflow&&Object(d.d)("<v-select overflow>","<v-overflow-btn>",_,c),n.segmented&&Object(d.d)("<v-select segmented>","<v-overflow-btn segmented>",_,c),n.editable&&Object(d.d)("<v-select editable>","<v-overflow-btn editable>",_,c),data.attrs=data.attrs||{},n.combobox||n.tags?(data.attrs.multiple=n.tags,e(f,data,x)):n.autocomplete?(data.attrs.multiple=n.multiple,e(r,data,x)):n.overflow||n.segmented||n.editable?(data.attrs.segmented=n.segmented,data.attrs.editable=n.editable,e(v,data,x)):(data.attrs.multiple=n.multiple,e(o.a,data,x))}};t.b=_},921:function(e,t,n){"use strict";n.r(t);n(51),n(28),n(26),n(40);var o,r=n(14),l=(n(44),n(11)),c=n(63),d=n.n(c),v=n(578),f=n.n(v),m=n(27),h=n(582),_=n(52),x=n(579),w=n(4),I=(o={data:function(){return{}},props:{value:{type:Object,default:function(){return{}}},external:{type:Object,default:function(){return{}}},divisions:{type:Array,default:function(){return[]}}}},Object(w.a)(o,"data",function(){var e=this;return{joinDateModal:!1,departureDateModal:!1,Force_Statuses:[{value:"outside_of_force",ar:"خارج السلاح"},{value:"inside_of_force",ar:"داخل السلاح"}],rules:{joinPlace:[function(t){return!!t||e.$t("Clearance_Join_Place_Required")}],joinDate:[function(t){return!!t||e.$t("Clearance_Join_Date_Required")}],clearanceStatus:[function(t){return!!t||e.$t("Clearance_Status_Required")}],soldierStatus:[function(t){return!!t||e.$t("Clearance_Soldier_Status_Required")}],newUnitType:[function(t){return!!t&&"rejected"===e.value.clearanceStatus||e.$t("Clearance_New_Unit_Type_Required")}],newUnitId:[function(t){return"inside_of_force"!==e.value.newUnitType||!!t&&"rejected"===e.value.clearanceStatus||e.$t("Clearance_New_Unit")}],departureDate:[function(t){return!!t&&"departed"===e.value.soldierStatus||e.$t("Clearance_Departure_Date")}]}}}),Object(w.a)(o,"components",{}),Object(w.a)(o,"computed",Object(r.a)({},Object(m.c)({defaults:"app/getDefaults"}),{divisionsComputed:function(){var e=this;return this.value.army?this.divisions.filter(function(t){return t.army===e.value.army&&["division"].includes(t.type)}):this.divisions.filter(function(e){return["division"].includes(e.type)})},unitsComputed:function(){var e=this,t=this.divisionId?this.divisions.filter(function(e){return["battalion","company"].includes(e.type)}).filter(function(t){return t.divisionId===e.divisionId||t.divisionId&&t.divisionId._id===e.divisionId}):this.divisions.filter(function(e){return["battalion","company"].includes(e.type)});return!this.divisionId&&this.value.army&&(t=t.filter(function(t){return t.army===e.value.army})),t}})),Object(w.a)(o,"methods",{moment:f.a,joinDateAllowed:function(time,e){var t=[f()(time)<=f()()];if(this.value.departureDate){var n=f()(time)<=f()(this.value.departureDate);t.push(n),!n&&e&&(this.value.departureDate=void 0)}return!t.includes(!1)},departureDateAllowed:function(time,e){var t=[f()(time)<=f()()];if(this.value.joinDate){var n=f()(time)>=f()(this.value.joinDate);t.push(n),!n&&e&&(this.value.joinDate=void 0)}return!t.includes(!1)},setAll:function(e){this.value.newUnitId=void 0,this.value.divisionId=void 0},setUnits:function(e){var t=this.divisions.find(function(t){return t._id===e});this.divisionId=e,t&&(console.log("clearing unit",t),this.value.army=t.army,this.value.newUnitId=void 0)},setDivision:function(e){var t=this.unitsComputed.find(function(t){return t._id===e});t&&(this.value.newUnitId=t._id,this.value.divisionId=t.divisionId?t.divisionId._id:t.divisionId,this.value.army=t.army)},submit:function(){var e=this.$refs.form.validate();this.$emit("submit",e)}}),o),S=n(22),y=n(34),D=n.n(y),k=n(738),$=n(185),j=n(177),C=n(917),O=n(178),V=n(789),A=n(179),T=n(568),N=n(793),U=n(574),component=Object(S.a)(I,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form"},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":200,"nudge-bottom":30,transition:"scale-transition","offset-x":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{rules:e.rules.joinDate,label:e.$t("Clearance_Join_Date"),"prepend-icon":"event",readonly:""},model:{value:e.value.joinDate,callback:function(t){e.$set(e.value,"joinDate",t)},expression:"value.joinDate"}},"v-text-field",r,!1),o))]}}]),model:{value:e.joinDateModal,callback:function(t){e.joinDateModal=t},expression:"joinDateModal"}},[e._v(" "),n("v-date-picker",{attrs:{"allowed-dates":e.joinDateAllowed,locale:"ar",dark:""},on:{change:function(t){return e.joinDateAllowed(t,!0)},input:function(t){e.joinDateModal=!1}},model:{value:e.value.joinDate,callback:function(t){e.$set(e.value,"joinDate",t)},expression:"value.joinDate"}})],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.JOINPLACES,"item-text":"ar","item-value":"_id",rules:e.rules.joinPlace,label:e.$t("Clearance_Join_Place")},model:{value:e.value.joinPlace,callback:function(t){e.$set(e.value,"joinPlace",t)},expression:"value.joinPlace"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.CLEARANCE_STATUSES,"item-text":"ar","item-value":"value",rules:e.rules.clearanceStatus,label:e.$t("Clearance_Status")},model:{value:e.value.clearanceStatus,callback:function(t){e.$set(e.value,"clearanceStatus",t)},expression:"value.clearanceStatus"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.SOLDIER_STATUSES,"item-text":"ar","item-value":"value",rules:e.rules.soldierStatus,label:e.$t("Clearance_Soldier_Status")},model:{value:e.value.soldierStatus,callback:function(t){e.$set(e.value,"soldierStatus",t)},expression:"value.soldierStatus"}})],1)],1),e._v(" "),"rejected"===e.value.clearanceStatus||"departed"===e.value.soldierStatus?n("v-layout",{attrs:{wrap:""}},["rejected"===e.value.clearanceStatus?n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.Force_Statuses,"item-text":"ar","item-value":"value",rules:e.rules.newUnitType,label:e.$t("Clearance_New_Unit_Type")},model:{value:e.value.newUnitType,callback:function(t){e.$set(e.value,"newUnitType",t)},expression:"value.newUnitType"}})],1):e._e(),e._v(" "),"departed"===e.value.soldierStatus?n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-left":200,"nudge-bottom":30,transition:"scale-transition","offset-x":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{rules:e.rules.departureDate,label:e.$t("Clearance_Departure_Date"),"prepend-icon":"event",readonly:""},model:{value:e.value.departureDate,callback:function(t){e.$set(e.value,"departureDate",t)},expression:"value.departureDate"}},"v-text-field",r,!1),o))]}}],null,!1,3080656525),model:{value:e.departureDateModal,callback:function(t){e.departureDateModal=t},expression:"departureDateModal"}},[e._v(" "),n("v-date-picker",{attrs:{"allowed-dates":e.departureDateAllowed,locale:"ar",dark:""},on:{change:function(t){return e.departureDateAllowed(t,!0)},input:function(t){e.departureDateModal=!1}},model:{value:e.value.departureDate,callback:function(t){e.$set(e.value,"departureDate",t)},expression:"value.departureDate"}})],1)],1):e._e()],1):e._e(),e._v(" "),"rejected"===e.value.clearanceStatus?n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.ARMY_LIST,"item-text":"ar","item-value":"value",label:e.$t("Army"),rules:e.rules.army},on:{change:e.setAll},model:{value:e.value.army,callback:function(t){e.$set(e.value,"army",t)},expression:"value.army"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),"item-text":"name","item-value":"_id",items:e.divisionsComputed,label:e.$t("Division"),disabled:0===e.divisionsComputed.length,clearable:!0},on:{change:e.setUnits},model:{value:e.value.divisionId,callback:function(t){e.$set(e.value,"divisionId",t)},expression:"value.divisionId"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),"item-text":"name","item-value":"_id",items:e.unitsComputed,label:e.$t("Unit"),rules:e.rules.newUnitId,clearable:!0,disabled:"outside_of_force"===e.value.newUnitType},on:{change:e.setDivision},model:{value:e.value.newUnitId,callback:function(t){e.$set(e.value,"newUnitId",t)},expression:"value.newUnitId"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-text-field",{attrs:{label:e.$t("Notes")},model:{value:e.value.notes,callback:function(t){e.$set(e.value,"notes",t)},expression:"value.notes"}})],1)],1):e._e(),e._v(" "),n("v-flex",{attrs:{xs12:"","text-xs-right":""}},[n("v-btn",{staticClass:"font-weight-light add-button v-btn-add",on:{click:e.submit}},[e._v("\n        "+e._s(e.$t("Add"))+"\n      ")])],1)],1)],1)},[],!1,null,null,null),R=component.exports;D()(component,{VAutocomplete:k.a,VBtn:$.a,VContainer:j.a,VDatePicker:C.a,VFlex:O.a,VForm:V.a,VLayout:A.a,VMenu:T.a,VSelect:N.a,VTextField:U.a});var M={layout:"dashboard",data:function(){var e=this;return{componentName:"clearance",unitId:void 0,clearance:{army:"general_headquarter"},divisions:[],indiviuals:[],cache:{},type:"soldiers",influence:{indiviual:{},soldierId:void 0,staffId:void 0,indiviualType:void 0,indiviualId:void 0},indiviualData:{},clearanceData:{},flee:{},promotionData:{},demotionData:{},executionData:{},external:{},disabled:{branch:!1,permissions:!1},rules:{unitId:[function(t){return!!t||e.$t("Division_Required")}],soldiersIds:[function(t){return!!t&&t.length||e.$t("Clearance_Soldiers_Required")}]}}},created:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDivisions();case 2:e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),middleware:["auth","isNotLoggedIn"],meta:{branches:["recon_force_people"],permissions:["recon_clearance_creator","recon_clearance_editor"]},components:{materialCard:x.a,clearance:R},computed:Object(r.a)({unitsComputed:function(){var e=this;return this.divisions.filter(function(t){return t.army===e.clearance.army&&["battalion","company"].includes(t.type)&&(t.name.includes("قطاع")||t.name.includes("قيادة قوات"))})},title:function(){return this.$t("Soldiers_Data")}},Object(m.c)({locations:"app/getLocations",defaults:"app/getDefaults"}),{influencesTypes:function(){return this.defaults.INFLUENCES_TYPES}}),methods:{setIndiviual:function(e){var t="soldiers"===this.influence.indiviualType?"soldierId":"staffId",n=this.indiviuals.find(function(t){return t._id===e});this.influence[t]=e,this.indiviualData=n},setExternal:function(e){return{}},submit:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(t){var data,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()||!t){e.next=11;break}return"/clearance",data=Object(r.a)({soldiersIds:this.clearance.soldiersIds,unitId:this.clearance.unitId},this.clearanceData),e.next=6,Object(_.e)("/clearance",data);case 6:if(!(n=e.sent).error){e.next=9;break}return e.abrupt("return",h.b.fire({icon:"error",title:n.error,timer:4e3,showConfirmButton:!1}));case 9:h.b.fire({icon:"success",title:this.$i18n.t("Added_Clearance_Success"),timer:4e3,showConfirmButton:!1}),setTimeout(function(){window.location.href="/"},4e3);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getDivisions:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/divisions",e.next=3,Object(_.d)("/divisions");case 3:if(!(t=e.sent).error){e.next=7;break}return console.log("error getting divisions",t.error),e.abrupt("return");case 7:this.divisions=t.divisions;case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getIndiviuals:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=this.clearance.unitId)&&this.cache[t]&&this.cache[t].length)){e.next=6;break}return this.indiviuals=this.cache[t],e.abrupt("return",!0);case 6:return e.next=8,this.loadIndiviualsData({unitId:t,influenceType:this.influenceType});case 8:n=e.sent,this.indiviuals=n,this.cache[t]=d.a.cloneDeep(this.indiviuals);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),loadIndiviualsData:function(){var e=Object(l.a)(regeneratorRuntime.mark(function e(t){var n,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.unitId,"/soldiers",o={noClearance:!0},n&&(o.unitId=n),o.queryObj={releaseDate:{$gte:f()().toISOString()}},e.next=7,Object(_.d)("/soldiers",o);case 7:if(!(r=e.sent).error){e.next=11;break}return console.log("error fetching soldiers",r.error),e.abrupt("return",[]);case 11:return e.abrupt("return",r.soldiers);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},E=n(567),B=Object(S.a)(M,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticStyle:{direction:"rtl"},attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:e.$t("Sector_Data")}},[n("v-form",{ref:"form"},[n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-select",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.defaults.ARMY_LIST,"item-text":"ar","item-value":"value",label:e.$t("Army"),disabled:!0},model:{value:e.clearance.army,callback:function(t){e.$set(e.clearance,"army",t)},expression:"clearance.army"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"item-text":"name","item-value":"_id","no-data-text":e.$t("No_Selections"),items:e.unitsComputed,label:e.$t("Sector"),clearable:!0,rules:e.rules.unitId},on:{change:e.getIndiviuals},model:{value:e.clearance.unitId,callback:function(t){e.$set(e.clearance,"unitId",t)},expression:"clearance.unitId"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.indiviuals,"item-text":"militaryId","item-value":"_id",label:e.$t("Clearance_Soldiers_IDs"),rules:e.rules.soldiersIds,clearable:"",multiple:""},on:{change:e.setIndiviual},model:{value:e.clearance.soldiersIds,callback:function(t){e.$set(e.clearance,"soldiersIds",t)},expression:"clearance.soldiersIds"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",md3:""}},[n("v-autocomplete",{staticClass:"form-select",attrs:{"no-data-text":e.$t("No_Selections"),items:e.indiviuals,"item-text":"fullName","item-value":"_id",label:e.$t("Clearance_Soldiers_Names"),rules:e.rules.soldiersIds,clearable:"",multiple:""},on:{change:e.setIndiviual},model:{value:e.clearance.soldiersIds,callback:function(t){e.$set(e.clearance,"soldiersIds",t)},expression:"clearance.soldiersIds"}})],1)],1)],1)],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-flex",{attrs:{xs12:"",md12:""}},[n("material-card",{attrs:{dark:"",color:"deep",title:e.title}},[n("keep-alive",[e.componentName?n(e.componentName,{tag:"component",attrs:{value:e.clearanceData,indiviualData:e.indiviualData,external:e.external,divisions:e.divisions},on:{"update:value":function(t){e.clearanceData=t},submit:e.submit}}):e._e()],1)],1)],1)],1)],1)},[],!1,null,null,null);t.default=B.exports;D()(B,{VAutocomplete:k.a,VContainer:j.a,VDivider:E.a,VFlex:O.a,VForm:V.a,VLayout:A.a,VSelect:N.a})}}]);