webpackJsonp([2],{1036:function(t,e,a){var r=a(97)(a(890),a(1121),null,null);t.exports=r.exports},1037:function(t,e,a){var r=a(97)(a(891),a(1138),null,null);t.exports=r.exports},1038:function(t,e,a){var r=a(97)(a(892),a(1117),null,null);t.exports=r.exports},1039:function(t,e,a){var r=a(97)(a(893),a(1192),null,null);t.exports=r.exports},1040:function(t,e,a){var r=a(97)(a(894),a(1101),null,null);t.exports=r.exports},1041:function(t,e,a){var r=a(97)(a(895),a(1144),null,null);t.exports=r.exports},1042:function(t,e,a){var r=a(97)(a(896),a(1185),null,null);t.exports=r.exports},1043:function(t,e,a){var r=a(97)(a(897),a(1088),null,null);t.exports=r.exports},1044:function(t,e,a){var r=a(97)(a(898),a(1183),null,null);t.exports=r.exports},1045:function(t,e,a){var r=a(97)(a(899),a(1157),null,null);t.exports=r.exports},1088:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#7 Time pickers - Dark")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    An alternate dark theme can be used for dark theme applications.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-time-picker",{attrs:{dark:""},model:{value:t.e5,callback:function(e){t.e5=e},expression:"e5"}})],1),a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-time-picker",{attrs:{landscape:"",dark:""},model:{value:t.e5,callback:function(e){t.e5=e},expression:"e5"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#4 Date pickers - Allowed dates")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    You can specify allowed dates using arrays, objects, and functions.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{class:{"white--text":t.allowedDates===t.everyOtherDay},attrs:{primary:t.allowedDates===t.everyOtherDay},nativeOn:{click:function(e){t.allowedDates=t.everyOtherDay}}},[t._v("Function\n                        ")]),a("v-btn",{class:{"white--text":t.allowedDates===t.randomDays},attrs:{primary:t.allowedDates===t.randomDays},nativeOn:{click:function(e){t.allowedDates=t.randomDays}}},[t._v("Array\n                        ")]),a("v-btn",{class:{"white--text":t.allowedDates===t.lastFiveDays},attrs:{primary:t.allowedDates===t.lastFiveDays},nativeOn:{click:function(e){t.allowedDates=t.lastFiveDays}}},[t._v("Object\n                        ")]),a("v-date-picker",{staticClass:"mt-3",attrs:{"allowed-dates":t.allowedDates},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-title text-xs-center"},[a("div",{staticClass:"headline"},[t._v(t._s(t.title))]),a("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),a("pickers-date-light",{attrs:{theme:t.theme}}),a("pickers-date-dark",{attrs:{theme:t.theme}}),a("pickers-date-in-dialog-menu",{attrs:{theme:t.theme}}),a("pickers-allowed-dates",{attrs:{theme:t.theme}}),a("pickers-custom-format",{attrs:{theme:t.theme}}),a("pickers-time-light",{attrs:{theme:t.theme}}),a("pickers-time-dark",{attrs:{theme:t.theme}}),a("pickers-time-in-dialog-menu",{attrs:{theme:t.theme}}),a("pickers-time24h-format",{attrs:{theme:t.theme}}),a("pickers-date-localization",{attrs:{theme:t.theme}})],1)},staticRenderFns:[]}},1117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#2 Date pickers - Dark")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    Date pickers come in a dark variant which utilizes the applications primary accent color.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-date-picker",{attrs:{actions:"",dark:""},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1),a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-date-picker",{attrs:{actions:"",landscape:"",dark:""},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#1 Date pickers - Light")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    Date pickers come in two orientation variations, portrait "),a("b",[t._v("(default)")]),t._v(" and landscape.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1),a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-date-picker",{attrs:{landscape:""},model:{value:t.picker2,callback:function(e){t.picker2=e},expression:"picker2"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1138:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#10 Date pickers - Localization")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    The date picker supports internationalization through the JavaScript Date object.\n                    Specify a BCP 47 language tag using the locale prop, and then set the first day of the week\n                    with the "),a("code",[t._v("first-day-of-week prop")]),t._v(".\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-space-between":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-date-picker",{attrs:{"first-day-of-week":0,locale:"zh-cn"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-date-picker",{attrs:{"first-day-of-week":1,locale:"sv-se"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-date-picker",{attrs:{"first-day-of-week":1,locale:"ru"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1144:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#5 Custom format")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    You can specify a custom date format. This will be returned through the "),a("code",[t._v("formatted-value")]),t._v("\n                    prop.\n                    Using the "),a("code",[t._v("sync")]),t._v(" property "),a("b",[t._v("(new in Vue 2.3)")]),t._v(", you can link up a formatted version of the date.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"ma-3",attrs:{md12:"",lg4:""}},[a("table",{staticClass:"table text-xs-left",staticStyle:{width:"300px"}},[a("tbody",[a("tr",[a("th",[t._v("Original")]),a("td",[a("strong",[t._v(t._s(t.picker||"No date"))])])]),a("tr",[a("th",[t._v("Formatted")]),a("td",[a("strong",[t._v(t._s(t.formatted||"No date"))])])])])])]),a("v-flex",{staticClass:"ma-3",attrs:{md12:"",lg4:""}},[a("v-date-picker",{attrs:{"date-format":function(t){return new Date(t).toDateString()},"formatted-value":t.formatted},on:{"update:formattedValue":function(e){return t.formatted=e}},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1157:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#9 Time pickers - 24h format")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    A time picker can be switched to 24hr format.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md12:"",lg4:"","lg-offset8":""}},[a("v-time-picker",{attrs:{format:"24hr"},model:{value:t.e7,callback:function(e){t.e7=e},expression:"e7"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#8 Time pickers - In dialog and menu")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"v-scale-transition","offset-y":"","nudge-left":40},model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-text-field",{attrs:{label:"Picker in menu","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}}),a("v-time-picker",{model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}})],1)],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-dialog",{attrs:{persistent:"",lazy:""},model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[a("v-text-field",{attrs:{label:"Picker in dialog","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}}),a("v-time-picker",{attrs:{actions:""},scopedSlots:t._u([["default",function(e){var r=e.save,s=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){s()}}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){r()}}},[t._v("Save")])],1)]}]]),model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}})],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1185:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#6 Time pickers - Light")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    Time pickers have the light theme enabled by default.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-time-picker",{model:{value:t.e4,callback:function(e){t.e4=e},expression:"e4"}})],1),a("v-flex",{staticClass:"ma-3",attrs:{xs12:"",lg4:""}},[a("v-time-picker",{attrs:{landscape:""},model:{value:t.e4,callback:function(e){t.e4=e},expression:"e4"}})],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[t._v("#3 Date pickers - In dialog and menu")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[t._v("\n                    When integrating a picker into a "),a("code",[t._v("v-text-field")]),t._v(", it is recommended to use the "),a("code",[t._v("readonly")]),t._v("\n                    prop.\n                    This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.\n                    "),a("br"),t._v("\n                    Pickers expose a scoped slot that allow you to hook into save and cancel functionality.\n                    This will maintain an old value which can be replaced if the user cancels.\n                ")])],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-menu",{attrs:{lazy:"","close-on-content-click":!1,transition:"v-scale-transition","offset-y":"","nudge-left":40},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.e3,callback:function(e){t.e3=e},expression:"e3"}}),a("v-date-picker",{attrs:{"no-title":"",scrollable:"",actions:""},scopedSlots:t._u([["default",function(e){var r=e.save,s=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){s()}}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){r()}}},[t._v("Save")])],1)]}]]),model:{value:t.e3,callback:function(e){t.e3=e},expression:"e3"}})],1)],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-dialog",{attrs:{persistent:"",lazy:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.e3,callback:function(e){t.e3=e},expression:"e3"}}),a("v-date-picker",{attrs:{scrollable:""},scopedSlots:t._u([["default",function(e){var r=e.save,s=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){s()}}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){r()}}},[t._v("Save")])],1)]}]]),model:{value:t.e3,callback:function(e){t.e3=e},expression:"e3"}})],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1208:function(t,e,a){var r=a(970);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(140)("731896b0",r,!0)},833:function(t,e,a){a(1208);var r=a(97)(a(949),a(1116),"data-v-2ff81852",null);t.exports=r.exports},890:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{picker:null,picker2:null}}}},891:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{picker:null,picker2:null,days:["вск","пнд","втр","срд","чтв","птн","сбт"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]}}}},892:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{e2:null}}}},893:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{e3:null,menu:!1,modal:!1}}}},894:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(959),s=a.n(r);e.default={props:["theme"],data:function(){return{date:null,allowedDates:null,everyOtherDay:function(t){return t.getDay()%2==0},randomDays:[],lastFiveDays:{min:null,max:null}}},mounted:function(){var t=new Date;this.randomDays=[].concat(s()(Array(10))).map(function(){var t=Math.floor(30*Math.random()),e=new Date;return e.setDate(t),e});var e=new Date;e.setDate(t.getDate()-5),this.lastFiveDays.min=e,this.lastFiveDays.max=t,this.allowedDates=this.everyOtherDay}}},895:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{picker:null,formatted:null}}}},896:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{e4:null}}}},897:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{e5:null}}}},898:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{e6:null,menu2:!1,modal2:!1}}}},899:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{e7:null}}}},949:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(76),s=a(1036),n=a.n(s),o=a(1038),l=a.n(o),i=a(1039),c=a.n(i),u=a(1040),d=a.n(u),v=a(1041),f=a.n(v),p=a(1042),m=a.n(p),k=a(1043),x=a.n(k),h=a(1044),b=a.n(h),y=a(1045),_=a.n(y),w=a(1037),g=a.n(w);e.default={components:{PickersDateLight:n.a,PickersDateDark:l.a,PickersDateInDialogMenu:c.a,PickersAllowedDates:d.a,PickersCustomFormat:f.a,PickersTimeLight:m.a,PickersTimeDark:x.a,PickersTimeInDialogMenu:b.a,PickersTime24hFormat:_.a,PickersDateLocalization:g.a},data:function(){return{title:"Components - Pickers",description:'The "v-date-picker" and "v-time-picker" offer the user a visual representation for selecting date and time.'}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(t){var e=t.store,a=t.error;try{e.commit("SET_THEME","comp")}catch(t){a(t)}},computed:a.i(r.mapGetters)({theme:"getTheme"})}},958:function(t,e,a){t.exports={default:a(960),__esModule:!0}},959:function(t,e,a){"use strict";e.__esModule=!0;var r=a(958),s=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return(0,s.default)(t)}},960:function(t,e,a){a(145),a(962),t.exports=a(13).Array.from},961:function(t,e,a){"use strict";var r=a(39),s=a(100);t.exports=function(t,e,a){e in t?r.f(t,e,s(0,a)):t[e]=a}},962:function(t,e,a){"use strict";var r=a(99),s=a(63),n=a(144),o=a(349),l=a(348),i=a(224),c=a(961),u=a(225);s(s.S+s.F*!a(350)(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,s,d,v=n(t),f="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,k=void 0!==m,x=0,h=u(v);if(k&&(m=r(m,p>2?arguments[2]:void 0,2)),void 0==h||f==Array&&l(h))for(e=i(v.length),a=new f(e);e>x;x++)c(a,x,k?m(v[x],x):v[x]);else for(d=h.call(v),a=new f;!(s=d.next()).done;x++)c(a,x,k?o(d,m,[s.value,x],!0):s.value);return a.length=x,a}})},970:function(t,e,a){e=t.exports=a(98)(void 0),e.push([t.i,".layout[data-v-2ff81852]{margin-bottom:16px}",""])}});