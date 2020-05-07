(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{868:function(e,t,n){var o;o=function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,t,n){"use strict";(function(e){var o=n(0),r=n.n(o),c=n(5);t.a={install:function(t,o){var l=o.name,d=void 0===l?"viewer":l,f=o.debug,v=void 0!==f&&f;function h(e,n){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.nextTick((function(){o||!e["$"+d]?(w(e),e["$"+d]=new r.a(e,n),y("viewer created")):(e["$"+d].update(),y("viewer updated"))}))}function w(e){e["$"+d]&&(e["$"+d].destroy(),delete e["$"+d],y("viewer destroyed"))}function m(e){e.$viewerMutationObserver&&(e.$viewerMutationObserver.disconnect(),delete e.$viewerMutationObserver,y("observer destroyed"))}function y(){var e;v&&(e=console).log.apply(e,arguments)}t.directive("viewer",{bind:function(t,o,r){y("viewer bind");var l=n.i(c.a)(50,h);l(t,o.value),function(e,t,n,o){var r=t.expression;r&&/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/.test(r)?(e.$viewerUnwatch=n.context.$watch(r,(function(t,n){y("change detected by watcher: ",r),o(e,t,!0)}),{deep:!0}),y("watcher created, expression: ",r)):y("only simple dot-delimited paths can create watcher")}(t,o,r,l),o.modifiers.static||function(t,n,o,r){m(t);var c=e.MutationObserver||e.WebKitMutationObserver||e.MozMutationObserver;if(c){var l=new c((function(e){e.forEach((function(e){y("viewer mutation:"+e.type),o(t,n,r)}))}));l.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),t.$viewerMutationObserver=l,y("observer created")}else y("observer not supported")}(t,o.value,l,o.modifiers.rebuild)},unbind:function(e,t){y("viewer unbind"),m(e),function(e){e.$viewerUnwatch&&(e.$viewerUnwatch(),delete e.$viewerUnwatch,y("watcher destroyed"))}(e),w(e)}})}}}).call(t,n(7))},function(e,t,n){"use strict";t.a=function e(){var t={},n=!1,i=0,o=arguments.length;function r(o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n&&"[object Object]"===Object.prototype.toString.call(o[r])?t[r]=e(!0,t[r],o[r]):t[r]=o[r])}for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);i<o;i++){var c=arguments[i];r(c)}return t}},function(e,t,n){var o=n(8)(n(6),n(9),null,null);o.options.__file="C:\\Workspaces\\Web\\Git\\v-viewer\\src\\component.vue",o.esModule&&Object.keys(o.esModule).some((function(e){return"default"!==e&&"__esModule"!==e}))&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] component.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=n(3),c=n.n(r),l=n(1),d=n(0),f=n.n(d);t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.name,d=void 0===r?"viewer":r,v=t.debug,h=void 0!==v&&v,w=t.defaultOptions;f.a.setDefaults(w),e.component(d,n.i(o.a)(c.a,{name:d})),e.use(l.a,{name:d,debug:h})},setDefaults:function(e){f.a.setDefaults(e)}}},function(e,t,n){"use strict";function o(e,t,n,o){var r,c=!1,l=0;function d(){r&&clearTimeout(r)}function f(){var f=this,v=Date.now()-l,h=arguments;function w(){l=Date.now(),n.apply(f,h)}function m(){r=void 0}c||(o&&!r&&w(),d(),void 0===o&&v>e?w():!0!==t&&(r=setTimeout(o?m:w,void 0===o?e-v:e)))}return"boolean"!=typeof t&&(o=n,n=t,t=void 0),f.cancel=function(){d(),c=!0},f}function r(e,t,n){return void 0===n?o(e,t,!1):o(e,n,!1!==t)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o);t.default={props:{images:{type:Array},rebuild:{type:Boolean,default:!1},trigger:{},options:{type:Object}},data:function(){return{}},computed:{},methods:{onChange:function(){this.rebuild?this.rebuildViewer():this.updateViewer()},rebuildViewer:function(){this.destroyViewer(),this.createViewer()},updateViewer:function(){this.$viewer?(this.$viewer.update(),this.$emit("inited",this.$viewer)):this.createViewer()},destroyViewer:function(){this.$viewer&&this.$viewer.destroy()},createViewer:function(){this.$viewer=new r.a(this.$el,this.options),this.$emit("inited",this.$viewer)}},watch:{images:function(){var e=this;this.$nextTick((function(){e.onChange()}))},trigger:{handler:function(){var e=this;this.$nextTick((function(){e.onChange()}))},deep:!0},options:{handler:function(){var e=this;this.$nextTick((function(){e.rebuildViewer()}))},deep:!0}},mounted:function(){this.createViewer()},destroyed:function(){this.destroyViewer()}}},function(e,t){var g,n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(g=window)}e.exports=g},function(e,t){e.exports=function(e,t,n,o){var r,c=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(r=e,c=e.default);var d="function"==typeof c?c.options:c;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),n&&(d._scopeId=n),o){var f=Object.create(d.computed||null);Object.keys(o).forEach((function(e){var t=o[e];f[e]=function(){return t}})),d.computed=f}return{esModule:r,exports:c,options:d}}},function(e,t,n){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default",null,{images:this.images,options:this.options})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0}])},e.exports=o(n(703))},899:function(e,t,n){"use strict";n.r(t);n(702);var o=n(868),r=n.n(o);n(1).default.use(r.a);var c={data:function(){return{fileType:[],images:["https://picsum.photos/1000/1000?image=25","https://picsum.photos/1000/1000?image=27","https://picsum.photos/1000/1000?image=28","https://picsum.photos/1000/1000?image=29","https://picsum.photos/1000/1000?image=24"]}},methods:{successUpload:function(){console.log("vs upload done")},show:function(){this.$el.querySelector(".images").$viewer.show()}}},l=n(4),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"upload-component-main"},[n("vsUpload",{attrs:{limit:1,text:"اسحب الصور و القها هنا او تصفح لاختيار الصور من جهازك",multiple:"",automatic:"",accept:"image/png",action:"https://jsonplaceholder.typicode.com/posts/"},on:{"on-success":e.successUpload}})],1),e._v(" "),n("div",{staticClass:"upload-component-sub"},[n("vsUpload",{attrs:{text:"اسحب الصور و القها هنا او تصفح لاختيار الصور من جهازك",multiple:"",automatic:"",accept:"image/png",action:"https://jsonplaceholder.typicode.com/posts/"},on:{"on-success":e.successUpload}})],1)]),e._v(" "),n("el-col",{attrs:{span:12}},[n("h1",[e._v("Hello 3")])]),e._v(" "),n("el-col",{attrs:{span:12}}),e._v(" "),n("el-col",{attrs:{span:12}},[n("h1",[e._v("hello guys")])])],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}})],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{movable:!1},expression:"{ movable: false }"}],staticClass:"images"},e._l(e.images,(function(e){return n("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],key:e,attrs:{src:e}})})),0),e._v(" "),n("button",{attrs:{type:"button"},on:{click:e.show}},[e._v("Show")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);