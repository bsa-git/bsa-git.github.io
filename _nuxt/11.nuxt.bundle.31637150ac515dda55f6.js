webpackJsonp([11],{1025:function(e,t,i){i(1442);var s=i(98)(i(1151),i(1402),null,null);e.exports=s.exports},1033:function(e,t){e.exports={apiKey:"AIzaSyAks3ZH_qSivh8UhA0V94Cy_60Q_-W524Y",clientId:"311979767912-l8upval51s4evdt43gonavi99ucjbpkg.apps.googleusercontent.com",discoveryDocs:["https://people.googleapis.com/$discovery/rest?version=v1"],scope:["profile"]}},1034:function(e,t,i){"use strict";var s=i(48),a=i.n(s),n=i(142),o=i.n(n),r=i(143),l=i.n(r),c=function(){function e(t){o()(this,e),this._callbackName="__googleApiOnLoadCallback",this._clientURL="https://apis.google.com/js/client.js?onload="+this._callbackName,this._apiKey=t.apiKey,this._clientId=t.clientId,this._discoveryDocs=t.discoveryDocs,this._scope=t.scope.join(" "),this.name="load-google-api",this.error=null}return l()(e,[{key:"loadGoogleAPI",value:function(){var e=this;return new a.a(function(t,i){var s=document.createElement("script");s.src=e._clientURL,window[e._callbackName]=function(){t()},document.body.appendChild(s)})}},{key:"init",value:function(){var e=this,t=new a.a(function(e,t){gapi.load("client:auth2",e)}),i=new a.a(function(t,i){gapi.client.init({apiKey:e._apiKey,clientId:e._clientId,discoveryDocs:e._discoveryDocs,scope:e._scope}).then(t,function(t){e.error=t,alert(t.details)})});return a.a.all([t,i])}},{key:"isSignedIn",value:function(){return!!gapi&&gapi.auth2.getAuthInstance().isSignedIn.get()}},{key:"listenSignedIn",value:function(e){gapi.auth2.getAuthInstance().isSignedIn.listen(e)}},{key:"handleAuthClick",value:function(e){gapi.auth2.getAuthInstance().signIn()}},{key:"handleSignoutClick",value:function(e){gapi.auth2.getAuthInstance().signOut()}},{key:"checkSigninStatus",value:function(){this.listenSignedIn(this.updateSigninStatus),this.updateSigninStatus(this.isSignedIn()),this.authorizeButton.onclick=this.handleAuthClick,this.signoutButton.onclick=this.handleSignoutClick}},{key:"updateSigninStatus",value:function(e){e?(this.authorizeButton.style.display="none",this.signoutButton.style.display="block",this.makeApiCall()):(this.authorizeButton.style.display="block",this.signoutButton.style.display="none")}},{key:"makeApiCall",value:function(){gapi.client.people.people.get({resourceName:"people/me","requestMask.includeField":"person.names"}).then(function(e){var t=document.createElement("p"),i=e.result.names[0].givenName;t.appendChild(document.createTextNode("Hello, "+i+"!")),document.getElementById("content").appendChild(t)})}}]),e}();t.a=c},1048:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(141),a=i.n(s),n=i(78),o=i(225),r=(i.n(o),i(226)),l=(i.n(r),i(144)),c=(i.n(l),i(228)),u=(i.n(c),i(1033)),d=(i.n(u),i(1034));t.default={validator:null,props:["theme","params"],data:function(){return{apiGoogle:null,myName:"",password:"",email:"",senderName:"",message:"",errors:null}},created:function(){this.iniValidator(),this.isError&&this.$emit("onErrLogin",{errors:[this.storeError.message]}),this.isAuthenticated&&this.$emit("onAuthenticated",this.auth);var e={apiKey:this.configGapi.apiKey,clientId:this.configGapi.clientId,discoveryDocs:this.configGapi.services.people.discoveryDocs,scope:this.configGapi.services.people.scope};this.apiGoogle=new d.a(e)},mounted:function(){this.$nextTick(function(){var e=this;this.apiGoogle.loadGoogleAPI().then(function(){return e.apiGoogle.init()}).then(function(){e.apiGoogle.listenSignedIn(e.updateSigninStatus),e.updateSigninStatus(e.apiGoogle.isSignedIn())})})},computed:a()({},i.i(n.mapGetters)({isError:"isError",storeError:"getError",isAuthenticated:"isAuthenticated",auth:"getAuth",configGapi:"getConfigGapi"})),watch:{senderName:function(e){this.validator.validate("senderName",e)},email:function(e){this.validator.validate("email",e)},message:function(e){this.validator.validate("message",e)}},methods:{updateSigninStatus:function(e){e&&this.makeApiCall()},makeApiCall:function(){gapi.client.people.people.get({resourceName:"people/me","requestMask.includeField":"person.names"}).then(function(e){var t=e.result.names[0].givenName;this.myName="Hello, "+t+"!"})},iniValidator:function(){this.validator=new o.Validator({senderName:"required|alpha_spaces",email:"required|email",message:"required|max:120"}),this.$set(this,"errors",this.validator.errors)},validateForm:function(){return this.validator.validateAll({senderName:this.senderName,email:this.email,message:this.message})},clearErrors:function(){this.errors.clear(),this.email="",this.senderName="",this.message=""},submit:function(e){var t=this;this.validateForm().then(function(e){e||t.$emit("onErrLogin",{errors:t.errors.all()})}).catch(function(){alert("Correct them errors!")})},vSenderName:function(){return!this.errors.has("senderName")||this.errors.first("senderName")},vEmail:function(){return!this.errors.has("email")||this.errors.first("email")},vMessage:function(){return!this.errors.has("message")||this.errors.first("message")}}}},1049:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["theme","info"]}},1151:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(141),a=i.n(s),n=i(78),o=i(1207),r=i.n(o),l=i(1208),c=i.n(l);t.default={components:{ContactsEmail:r.a,ContactsInfo:c.a},data:function(){return{title:"Контакты",description:"Связаться со мной",emailParams:{url:"/api/login",ajax:!0,reqData:"json",resData:"html"}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(e){var t=e.store,i=e.error;try{t.commit("SET_THEME","about")}catch(e){i(e)}},computed:a()({},i.i(n.mapGetters)({theme:"getTheme",info:"getPersonalData"}))}},1163:function(e,t,i){t=e.exports=i(77)(void 0),t.push([e.i,"input[data-v-079c9529]:error{background-color:#fdd}",""])},1189:function(e,t,i){t=e.exports=i(77)(void 0),t.push([e.i,"",""])},1207:function(e,t,i){i(1416);var s=i(98)(i(1048),i(1294),"data-v-079c9529",null);e.exports=s.exports},1208:function(e,t,i){var s=i(98)(i(1049),i(1350),null,null);e.exports=s.exports},1294:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{hover:"",raised:""}},[i("v-toolbar",{class:e.theme.base+" darken-3",attrs:{dark:""}},[i("v-icon",{attrs:{dark:""}},[e._v("mail")]),i("v-toolbar-title",[e._v("Передать сообщение")])],1),i("v-card-text",{staticClass:"body-2 secondary--text"},[i("blockquote",[e._v("\n            Передайте сообщение (не более 120 символов) на мой электронный адрес. Электронный адрес можно посмотреть на панели справа.\n        ")])],1),i("form",{attrs:{id:"form-1",name:"form-1",action:e.params.url,method:"post"},on:{submit:function(t){t.preventDefault(),e.submit("form-1")}}},[i("v-card-text",[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-subheader",[e._v("Имя*")])],1),i("v-flex",{attrs:{xs8:""}},[i("v-text-field",{attrs:{name:"senderName",label:"Введите ваше имя",type:"text","append-icon":e.errors.has("senderName")?"error":"done",rules:[e.vSenderName],required:""},model:{value:e.senderName,callback:function(t){e.senderName=t},expression:"senderName"}})],1)],1),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-subheader",[e._v("Email*")])],1),i("v-flex",{attrs:{xs8:""}},[i("v-text-field",{attrs:{name:"email",label:"Введите мой Email",type:"text","append-icon":e.errors.has("email")?"error":"done",rules:[e.vEmail],required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs4:""}},[i("v-subheader",[e._v("Сообщение*")])],1),i("v-flex",{attrs:{xs8:""}},[i("v-text-field",{attrs:{name:"message",label:"Введите сообщение","append-icon":e.errors.has("message")?"error":"done",rules:[e.vMessage],counter:"",max:"120","multi-line":"",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs4:""}}),i("v-flex",{attrs:{xs8:""}},[i("small",[e._v("* Указывает обязательное поле")])])],1)],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{type:"submit",dark:""}},[e._v("Передать")]),i("v-btn",{attrs:{type:"reset",flat:"",light:""},nativeOn:{click:function(t){e.clearErrors(t)}}},[e._v("Очистить")])],1)],1),i("div",{staticClass:"ma-3"},[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.apiGoogle.isSignedIn,expression:"!apiGoogle.isSignedIn"}],attrs:{dark:""},nativeOn:{click:function(t){e.apiGoogle.handleAuthClick(t)}}},[e._v("Authorize")]),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.apiGoogle.isSignedIn,expression:"apiGoogle.isSignedIn"}],attrs:{dark:""},nativeOn:{click:function(t){e.apiGoogle.handleSignoutClick(t)}}},[e._v("Sign Out")]),i("div",[e._v(e._s(e.myName))])],1)],1)},staticRenderFns:[]}},1350:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("v-card-media",{attrs:{src:e.info.myImg,height:"300px"}},[i("v-layout",{staticClass:"media",attrs:{column:""}},[i("v-card-title",[i("v-btn",{attrs:{to:"/about",title:"Подробнее...",dark:"",icon:""}},[i("v-icon",[e._v("more_horiz")])],1)],1)],1)],1),i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{class:e.theme.base+"--text"},[e._v("phone")])],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v(e._s(e.info.phonePersonal))]),i("v-list-tile-sub-title",[e._v("Мобильный")])],1),i("v-list-tile-action",[i("v-icon",[e._v("chat")])],1)],1),e.info.phoneWork?i("v-list-tile",[i("v-list-tile-action"),i("v-list-tile-content",[i("v-list-tile-title",[e._v(e._s(e.info.phoneWork))]),i("v-list-tile-sub-title",[e._v("Рабочий")])],1),i("v-list-tile-action",[i("v-icon",{attrs:{dark:""}},[e._v("chat")])],1)],1):e._e(),i("v-divider",{attrs:{inset:""}}),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{class:e.theme.base+"--text"},[e._v("mail")])],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v(e._s(e.info.emailPersonal))]),i("v-list-tile-sub-title",[e._v("Персональный")])],1)],1),i("v-list-tile",[i("v-list-tile-action"),i("v-list-tile-content",[i("v-list-tile-title",[e._v(e._s(e.info.emailWork))]),i("v-list-tile-sub-title",[e._v("Рабочий")])],1)],1),i("v-divider",{attrs:{inset:""}}),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{class:e.theme.base+"--text"},[e._v("location_on")])],1),i("v-list-tile-content",[i("v-list-tile-title",[e._v(e._s(e.info.address))]),i("v-list-tile-sub-title",[e._v("Адрес")])],1)],1)],1)],1)},staticRenderFns:[]}},1402:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"page-title text-xs-center"},[i("div",{staticClass:"headline"},[e._v(e._s(e.title))]),i("div",{staticClass:"subheading"},[e._v(e._s(e.description))])]),i("v-layout",{attrs:{column:""}},[i("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:""}},[i("contacts-email",{attrs:{theme:e.theme,params:e.emailParams}})],1),i("v-flex",{attrs:{xs12:"",sm5:"","offset-sm1":""}},[i("contacts-info",{attrs:{theme:e.theme,info:e.info.contact}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},1416:function(e,t,i){var s=i(1163);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(99)("8f8cefb2",s,!0)},1442:function(e,t,i){var s=i(1189);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(99)("4133f7d6",s,!0)}});