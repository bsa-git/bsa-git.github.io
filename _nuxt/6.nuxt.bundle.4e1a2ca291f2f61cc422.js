webpackJsonp([6],{1016:function(e,t,a){a(1422);var i=a(98)(a(1140),a(1321),"data-v-2adce35d",null);e.exports=i.exports},1055:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialog:!1}}}},1056:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialog:!1}}}},1057:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialog:!1}}}},1058:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialog:!1}}}},1059:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialogm1:"",dialog:!1}}}},1060:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialog:!1}}}},1061:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme"],data:function(){return{dialog:!1}}}},1140:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(78),s=a(1215),l=a.n(s),n=a(1216),r=a.n(n),o=a(1217),u=a.n(o),c=a(1218),d=a.n(c),m=a(1219),v=a.n(m),p=a(1220),g=a.n(p),b=a(1221),f=a.n(b);t.default={components:{DialogSimple:l.a,DialogModal:r.a,DialogFullScreen:u.a,DialogForm:d.a,DialogScrollable:v.a,DialogWithoutActivator:g.a,DialogOverflowed:f.a},data:function(){return{title:"Components - Dialogs",description:'The "v-dialog" component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.'}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(e){var t=e.store,a=e.error;try{t.commit("SET_THEME","comp")}catch(e){a(e)}},computed:a.i(i.mapGetters)({theme:"getTheme"})}},1168:function(e,t,a){t=e.exports=a(77)(void 0),t.push([e.i,".layout[data-v-2adce35d]{margin-bottom:16px}",""])},1215:function(e,t,a){var i=a(98)(a(1055),a(1407),null,null);e.exports=i.exports},1216:function(e,t,a){var i=a(98)(a(1056),a(1399),null,null);e.exports=i.exports},1217:function(e,t,a){var i=a(98)(a(1057),a(1327),null,null);e.exports=i.exports},1218:function(e,t,a){var i=a(98)(a(1058),a(1302),null,null);e.exports=i.exports},1219:function(e,t,a){var i=a(98)(a(1059),a(1374),null,null);e.exports=i.exports},1220:function(e,t,a){var i=a(98)(a(1060),a(1383),null,null);e.exports=i.exports},1221:function(e,t,a){var i=a(98)(a(1061),a(1303),null,null);e.exports=i.exports},1302:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#4 Form")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    Just a simple example of a form in a dialog.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("User Profile")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Email",required:""}}),a("v-text-field",{attrs:{label:"Password",type:"password",required:""}}),a("v-text-field",{attrs:{label:"Legal first name",required:""}}),a("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}}),a("v-text-field",{attrs:{label:"Legal last name",hint:"example of persistent helper text","persistent-hint":"",required:""}}),a("v-select",{attrs:{label:"Age",required:"",items:["0-17","18-29","30-54","54+"]}}),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Save")])],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1303:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#7 Overflowed")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    Modals that do not fit within the available window space will scroll the container.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Use Google's location service?")])]),a("v-card-text",[e._v("\n                            Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.\n                            Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.\n                            Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.\n                            Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.\n                            Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.\n                            Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.\n                            Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.\n                            Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.\n                            Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.\n                            Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.\n                        ")]),a("v-card-actions",[a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("\n                                Disagree\n                            ")]),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Agree\n                            ")])],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1321:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-title text-xs-center"},[a("div",{staticClass:"headline"},[e._v(e._s(e.title))]),a("div",{staticClass:"subheading"},[e._v(e._s(e.description))])]),a("dialog-simple",{attrs:{theme:e.theme}}),a("dialog-modal",{attrs:{theme:e.theme}}),a("dialog-full-screen",{attrs:{theme:e.theme}}),a("dialog-form",{attrs:{theme:e.theme}}),a("dialog-scrollable",{attrs:{theme:e.theme}}),a("dialog-without-activator",{attrs:{theme:e.theme}}),a("dialog-overflowed",{attrs:{theme:e.theme}})],1)},staticRenderFns:[]}},1327:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#3 Fullscreen")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    Due to limited space, full-screen dialogs may be more appropriate for mobile devices than\n                    dialogs used on devices with larger screens.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{fullscreen:"",transition:"v-dialog-bottom-transition",overlay:!1},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-toolbar",{attrs:{light:""}},[a("v-btn",{attrs:{icon:"icon",light:""},nativeOn:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v("Settings")]),a("v-btn",{attrs:{light:"",flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Save")])],1),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[e._v("User Controls")]),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("Content filtering")]),a("v-list-tile-sub-title",[e._v("\n                                        Set the content filtering level to restrict appts that can be downloaded\n                                    ")])],1)],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("Password")]),a("v-list-tile-sub-title",[e._v("\n                                        Require password for purchase or use password to restrict purchase\n                                    ")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[e._v("General")]),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-action",[a("v-checkbox")],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Notifications")]),a("v-list-tile-sub-title",[e._v("\n                                        Notify me about updates to apps or games that I downloaded\n                                    ")])],1)],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-action",[a("v-checkbox")],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Sound")]),a("v-list-tile-sub-title",[e._v("Auto-update apps at any time. Data charges may apply\n                                    ")])],1)],1),a("v-list-tile",{attrs:{avatar:""}},[a("v-list-tile-action",[a("v-checkbox")],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Auto-add widgets")]),a("v-list-tile-sub-title",[e._v("Automatically add home screen widgets\n                                    ")])],1)],1)],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1374:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#5 Scrollable")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    Example of a dialog with scrollable content.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Select Country")]),a("v-divider"),a("v-card-text",{staticStyle:{height:"300px"}},[a("v-radio",{attrs:{label:"Bahamas, The",value:"bahamas"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Bahrain",value:"bahrain"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Bangladesh",value:"bangladesh"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Barbados",value:"barbados"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Belarus",value:"belarus"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Belgium",value:"belgium"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Belize",value:"belize"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Benin",value:"benin"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Bhutan",value:"bhutan"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Bolivia",value:"bolivia"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Bosnia and Herzegovina",value:"bosnia"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Botswana",value:"botswana"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Brazil",value:"brazil"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Brunei",value:"brunei"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Bulgaria",value:"bulgaria"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Burkina Faso",value:"burkina"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Burma",value:"burma"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}}),a("v-radio",{attrs:{label:"Burundi",value:"burundi"},model:{value:e.dialogm1,callback:function(t){e.dialogm1=t},expression:"dialogm1"}})],1),a("v-divider"),a("v-card-actions",[a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Close")]),a("v-btn",{staticClass:"blue--text darken-1",attrs:{flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Save")])],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1383:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#6 Without activator")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    If for some reason you are unable to use the activator slot, be sure to add the "),a("code",[e._v(".stop")]),e._v("\n                    modifier to the event that triggers the dialog.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-btn",{attrs:{dark:""},nativeOn:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v("Open Dialog")]),a("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Use Google's location service?")]),a("v-card-text",[e._v("Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Disagree")]),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Agree")])],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1399:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#2 Modal")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    Similar to a Simple Dialog, except that it's not dismissed when touching outside.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Use Google's location service?")]),a("v-card-text",[e._v("\n                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n                        ")]),a("v-card-actions",[a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("\n                                Disagree\n                            ")]),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Agree\n                            ")])],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1407:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-card",{attrs:{hover:"",raised:""}},[a("v-toolbar",{class:e.theme.base,attrs:{dark:""}},[a("v-toolbar-title",[e._v("#1 Simple dialog")])],1),a("v-card-text",{staticClass:"body-2 secondary--text"},[a("blockquote",[e._v("\n                    Choosing an option immediately commits the option and closes the menu. Touching outside of the\n                    dialog, or pressing Back, cancels the action and closes the dialog.\n                ")])],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Use Google's location service?")]),a("v-card-text",[e._v("\n                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n                        ")]),a("v-card-actions",[a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("\n                                Disagree\n                            ")]),a("v-btn",{staticClass:"green--text darken-1",attrs:{flat:"flat"},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("\n                                Agree\n                            ")])],1)],1)],1)],1),a("br")],1)],1)],1)},staticRenderFns:[]}},1422:function(e,t,a){var i=a(1168);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(99)("6fc335a1",i,!0)}});