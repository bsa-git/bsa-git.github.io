webpackJsonp([16],{1027:function(t,e,s){s(1420);var a=s(98)(s(1153),s(1311),null,null);t.exports=a.exports},1153:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(141),r=s.n(a),i=s(78);e.default={data:function(){return{title:"Главная",description:"",pages:[{to:"/portfolio/",title:"Портфолио",theme:"portfolio",content:"Я участвовал в разработке проектов в разных областях: отображение промышленных данных в реальном времени, система хранения/раедактирования документации в виде блога, оплата платежей в банковской сфере..."},{to:"/about",title:"Об Авторе",theme:"about",content:"Привет, Я Сергей Бескоровайный <kbd>FRONT-END И BACK-END РАЗРАБОТЧИК</kbd>. Занимаюсь разработкой серверных приложений на PHP, Node.js и клиентских приложений на HTML/CSS и Java Script..."},{to:"/blog/",title:"Мой Блог",theme:"blog",content:"Решил опубликовать заметки по темам, которые меня интересуют. Это разработка серверных приложений, на <strong>PHP</strong>, <strong>Node.js</strong> разработка клиенских приложений на <strong>HTML5, CSS, JavaScript</strong> и многое другое ..."}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(t){var e=t.store,s=t.error;try{e.commit("SET_THEME","home")}catch(t){s(t)}},computed:r()({},s.i(i.mapGetters)({theme:"getThemeRegister"})),methods:{getColor:function(t){return this.theme[t].base}}}},1167:function(t,e,s){e=t.exports=s(77)(void 0),e.push([t.i,".parallax__content h1{font-size:70px}.parallax{height:350px!important;border-radius:10px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}",""])},1311:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-title text-xs-center"},[s("div",{staticClass:"headline"},[t._v(t._s(t.title))]),s("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),s("v-layout",{attrs:{column:""}},[s("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[s("v-parallax",{staticClass:"text-xs-center",attrs:{src:"/img/system/vbanner.jpg"}},[s("h1",{staticClass:"exotic--dark"},[t._v("BSA Lab.")]),s("h5",{staticClass:"exotic--dark ma-3"},[t._v("\n                    Обучение программированию не может научить быть экспертом, также как и изучение кистей и красок не может превратить кого-либо в художника.")]),s("div",{staticClass:"text-xs-right"},[s("em",[s("small",[t._v("— Eric S. Raymond")])])]),s("div",[s("v-btn",{staticClass:"orange--text",attrs:{to:"/contacts",flat:""}},[t._v("Контакты...")]),s("v-btn",{staticClass:"orange--text",attrs:{href:"https://github.com/bsa-git",target:"_blank",flat:""}},[t._v("\n                        Проекты на Git-Hub\n                    ")])],1)]),s("br"),s("br"),s("v-container",{staticClass:"grey lighten-4",attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},t._l(t.pages,function(e){return s("v-flex",{key:e.title,attrs:{xs12:"",sm4:""}},[s("v-card",[s("v-toolbar",{class:[t.getColor(e.theme),"darken-4"],attrs:{dark:""}},[s("v-toolbar-title",[t._v(t._s(e.title))]),s("v-spacer"),s("v-btn",{attrs:{to:e.to,title:"Подробнее...",icon:""}},[s("v-icon",[t._v("more_horiz")])],1)],1),s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.title))]),s("div",{domProps:{innerHTML:t._s(e.content)}})])]),s("v-card-actions",[s("v-btn",{staticClass:"orange--text",attrs:{to:e.to,flat:""}},[t._v("Подробнее...")])],1)],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]}},1420:function(t,e,s){var a=s(1167);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(99)("78a743da",a,!0)}});