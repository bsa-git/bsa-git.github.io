webpackJsonp([12],{1177:function(t,e,r){var a=r(97)(r(849),r(1385),null,null);t.exports=a.exports},1203:function(t,e,r){r(1407);var a=r(97)(r(875),r(1363),"data-v-86a37ce0",null);t.exports=a.exports},1316:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-title text-xs-center"},[r("div",{staticClass:"headline"},[t._v(t._s(t.title))]),r("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),r("forms-snackbar",{attrs:{snackbar:t.snackbar,text:t.textSnackbar,context:t.contextSnackbar},on:{onSnackbar:t.modelSnackbar}}),r("forms-login",{attrs:{theme:t.theme,params:t.authParams},on:{onErrLogin:t.onErrLogin,onAuthenticated:t.onAuthenticated}})],1)},staticRenderFns:[]}},1363:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[r("v-card",{attrs:{hover:"",raised:""}},[r("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[r("v-toolbar-title",[t._v("#1 Login")])],1),r("v-card-text",{staticClass:"body-2 secondary--text"},[r("blockquote",[t._v("\n                    An example of a logging form to enter the system.\n                    "),r("p",[t._v("To login, use "),r("kbd",[t._v("my@test.com")]),t._v(" as email and "),r("kbd",[t._v("123456")]),t._v(" as password.")])])],1),r("form",{attrs:{id:"form-1",name:"form-1",action:t.params.url,method:"post"},on:{submit:function(e){e.preventDefault(),t.submit("form-1")}}},[r("v-card-text",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Email*")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{name:"email",label:"Enter your email",type:"text","append-icon":t.errors.has("email")?"error":"done",rules:[t.vEmail],required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-subheader",[t._v("Password*")])],1),r("v-flex",{attrs:{xs8:""}},[r("v-text-field",{attrs:{name:"password",label:"Enter your password",hint:"At least 6 characters",type:"password","append-icon":t.errors.has("password")?"error":"done",rules:[t.vPass],counter:"",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}}),r("v-flex",{attrs:{xs8:""}},[r("small",[t._v("*indicates required field")])])],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{type:"submit",dark:""}},[t._v("Login")]),r("v-btn",{attrs:{type:"reset",flat:"",light:""},nativeOn:{click:function(e){t.clearErrors(e)}}},[t._v("Clear")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},1385:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-snackbar",{attrs:{top:t.getPosition,timeout:t.getTimeout,success:"success"===t.theme,info:"info"===t.theme,warning:"warning"===t.theme,error:"error"===t.theme,primary:"primary"===t.theme,secondary:"secondary"===t.theme,"multi-line":"multi-line"===t.getMode,vertical:"vertical"===t.getMode},model:{value:t.compSnackbar,callback:function(e){t.compSnackbar=e},expression:"compSnackbar"}},[r("span",{domProps:{textContent:t._s(t.getText)}}),r("v-btn",{attrs:{light:"",flat:""},nativeOn:{click:function(e){t.closeSnackbar(e)}}},[t._v("Close")])],1)},staticRenderFns:[]}},1398:function(t,e,r){var a=r(978);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(140)("623815bd",a,!0)},1407:function(t,e,r){var a=r(987);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(140)("b406c7b2",a,!0)},833:function(t,e,r){r(1398);var a=r(97)(r(952),r(1316),"data-v-42ba403e",null);t.exports=a.exports},845:function(t,e,r){"use strict";(function(t){var a=r(345),s=r.n(a),o=r(346),n=r.n(o),i=r(223),c=(r.n(i),function(){function e(){s()(this,e),this.validator=new i.Validator({email:"required|email|in:my@test.com",password:"required|min:6|in:123456"})}return n()(e,[{key:"validateAll",value:function(t){return this.validator.validateAll(t)}},{key:"resultToStore",value:function(e,r){if(e)console.log("User successfully authorized."),r.commit("SET_AUTH",{email:this.query.email});else{var a=this.validator.getErrors().errors;if(console.log("Errors: ",a),t.find(a,["rule","in"])){console.log("Error authorized! Email or password not registration.");var s=new Error("Error authorized! Email or password not registration.");s.statusCode=401,r.commit("SET_ERROR",s)}else{var o=new Error("Error validation! "+a[0].msg);o.statusCode=401,r.commit("SET_ERROR",o)}}}}]),e}());e.a=c}).call(e,r(77))},849:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["snackbar","context","text","timeout","mode","bottom"],computed:{theme:function(){return this.context||"error"},getTimeout:function(){return this.timeout||1e4},getMode:function(){return this.mode||"multi-line"},getText:function(){return this.text||"Hello, I'm a snackbar"},getPosition:function(){return!this.bottom},compSnackbar:{get:function(){return this.snackbar},set:function(t){this.$emit("onSnackbar",t)}}},methods:{closeSnackbar:function(){this.compSnackbar=!1}}}},875:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(141),s=r.n(a),o=r(76),n=r(223),i=(r.n(n),r(226)),c=r.n(i),l=r(146),u=r.n(l),d=r(241),m=r.n(d);e.default={validator:null,props:["theme","params"],data:function(){return{password:"",email:"",errors:null}},created:function(){this.iniValidator(),this.isError&&this.$emit("onErrLogin",{errors:[this.storeError.message]}),this.isAuthenticated&&this.$emit("onAuthenticated",this.auth)},computed:s()({},r.i(o.mapGetters)({isError:"isError",storeError:"getError",isAuthenticated:"isAuthenticated",auth:"getAuth"})),watch:{email:function(t){this.validator.validate("email",t)},password:function(t){this.validator.validate("password",t)}},methods:{iniValidator:function(){this.validator=new n.Validator({email:"required|email",password:"required|min:6"}),this.$set(this,"errors",this.validator.errors)},validateForm:function(){return this.validator.validateAll({email:this.email,password:this.password})},clearErrors:function(){this.errors.clear(),this.password="",this.email=""},submit:function(t){var e=this,r=this,a=void 0;this.validateForm().then(function(s){s?r.params.ajax?(a="json"===r.params.reqData?{password:r.password,email:r.email}:u.a.stringify({password:r.password,email:r.email}),c.a.post(r.params.url,a).then(function(t){var e=m.a.load(t.data);if(e(".result","#ajax-data").data().validation){var a=e(".auth","#ajax-data").data().auth,s=u.a.parse(a);r.$store.commit("SET_AUTH",s),r.$emit("onAuthenticated",s)}else{var o=e(".error","#ajax-data").data().error,n=u.a.parse(o);r.$emit("onErrLogin",{errors:[n.message]})}}).catch(function(t){console.log("Axios catch: ",t),r.$store.commit("SET_ERROR",t),r.$router.replace("/error")})):document.forms[t].submit():e.$emit("onErrLogin",{errors:e.errors.all()})}).catch(function(){alert("Correct them errors!")})},vEmail:function(){return!this.errors.has("email")||this.errors.first("email")},vPass:function(){return!this.errors.has("password")||this.errors.first("password")}}}},952:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(347),s=r.n(a),o=r(344),n=r.n(o),i=r(76),c=r(1177),l=r.n(c),u=r(1203),d=r.n(u),m=r(845);e.default={components:{FormsSnackbar:l.a,FormsLogin:d.a},data:function(){return{title:"Components - Forms",description:"Working with forms.",snackbar:!1,textSnackbar:"",contextSnackbar:"",authParams:{url:"/api/login",ajax:!0,reqData:"json",resData:"html"}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(){function t(t){return e.apply(this,arguments)}var e=n()(s.a.mark(function t(e){var r,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.store.commit("SET_THEME","comp"),!e.isServer||!e.req){t.next=15;break}if("POST"!==e.req.method){t.next=12;break}return console.log("forms-fetch-server-post"),r=new m.a,t.next=8,r.validateAll(e.requestData);case 8:a=t.sent,r.resultToStore(a,e.store),t.next=13;break;case 12:console.log("forms-fetch-server-get");case 13:t.next=16;break;case 15:console.log("forms-fetch-client");case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0.message),e.error(t.t0);case 22:case"end":return t.stop()}},t,this,[[0,18]])}));return t}(),computed:r.i(i.mapGetters)({theme:"getTheme"}),methods:{onErrLogin:function(t){var e=t.errors[0];this.textSnackbar=e,this.snackbar=!0,this.contextSnackbar="error"},onAuthenticated:function(t){this.textSnackbar="User successfully authorized.",this.snackbar=!0,this.contextSnackbar="success"},modelSnackbar:function(t){this.snackbar=t}}}},978:function(t,e,r){e=t.exports=r(98)(void 0),e.push([t.i,".layout[data-v-42ba403e]{margin-bottom:16px}",""])},987:function(t,e,r){e=t.exports=r(98)(void 0),e.push([t.i,"input[data-v-86a37ce0]:error{background-color:#fdd}",""])}});