webpackJsonp([12],{716:function(t,e,n){var a=n(73)(n(755),n(872),null,null);t.exports=a.exports},755:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(147),s=n(823),r=n.n(s),o=n(824),p=n.n(o);e.default={components:{VuexExamplesCode1:r.a,VuexExamplesCode2:p.a},data:function(){return{title:"Vuex-Examples",description:"Примеры для Vuex(управления состоянием) Vue.js фраймворка."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","portfolio"),a.default.initBlock()}}},823:function(t,e,n){var a=n(73)(null,n(897),null,null);t.exports=a.exports},824:function(t,e,n){var a=n(73)(null,n(896),null,null);t.exports=a.exports},872:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[n("div",{staticClass:"page-title text-xs-center"},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))]),n("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),n("p",{staticClass:"date-publication"},[t._v("2017-12-27")]),n("v-card",{staticClass:"blog-post"},[n("v-card-text",[n("section",[n("h1",[t._v("Введение.")]),n("p",[t._v("\n                        Этот проект представляет примеры работы\n                        "),n("a",{attrs:{href:"https://vuex.vuejs.org/en/intro.html",target:"_blank"}},[t._v("Vuex")]),t._v("\n                        (паттерн управления состоянием и библиотека) для приложений на\n                        "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html",target:"_blank"}},[t._v("Vue.js")]),t._v(".\n                    ")]),n("p",{staticClass:"subheading"},[n("strong",[t._v("\n                            Этот проект на "),n("strong",[t._v("GitHub")]),t._v(" можно посмотреть "),n("a",{attrs:{href:"https://github.com/bsa-git/vuex-examples",target:"_blank"}},[t._v("здесь")])])]),n("p",{staticClass:"subheading"},[n("strong",[t._v("\n                            Демонстрацию этого проекта можно посмотреть "),n("a",{attrs:{href:"https://vuex-examples.firebaseapp.com/#/",target:"_blank"}},[t._v("здесь")])])])]),n("section",[n("h2",[t._v("Обзор")]),n("h3",[t._v("Vue.js фреймворк")]),n("p",[t._v("\n                        Vue (произносится /vjuː/, примерно как "),n("strong",[t._v("view")]),t._v(") — это "),n("strong",[t._v("прогрессивный фреймворк")]),t._v("\n                        для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов,\n                        Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня\n                        представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами.\n                        С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений\n                        (SPA, Single-Page Applications), если использовать его совместно с\n                        "),n("a",{attrs:{href:"single-file-components.html",target:"_blank"}},[t._v("современными инструментами")]),t._v(" и\n                        "),n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank"}},[t._v("дополнительными библиотеками")]),t._v(".\n                    ")]),n("p",[t._v("\n                        Если вы — опытный фронтенд-разработчик, и хотите узнать, чем Vue отличается от остальных\n                        библиотек или фреймворков, обратите внимание на "),n("a",{attrs:{href:"comparison.html",target:"_blank"}},[t._v("сравнение с другими фреймворками")]),t._v(".\n                    ")]),n("h3",[t._v("Vuex (паттерн управления состоянием)")]),n("p",[t._v("\n                        Vuex - это "),n("strong",[t._v("паттерн управления состоянием и библиотека")]),t._v(" для приложений на Vue.js.\n                        Он служит центральным хранилищем данных для всех компонентов приложения и обеспечивает\n                        предсказуемость изменения данных при помощи определённых правил. Кроме того,\n                        Vuex интегрируется с официальным\n                        "),n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank"}},[t._v("расширением инструментов разработчика")]),t._v('\n                        Vue, предоставляя "из коробки" такие продвинутые возможности как "машину времени" при отладке\n                        и экспорт/импорт слепков состояния данных.')])]),n("section",[n("h2",[t._v("Ресурсы")]),n("dl",[n("dt",[n("strong",[t._v("Vue.js (JavaScript framework)")])]),n("dd",[n("a",{attrs:{href:"http://vuejs.org/guide/",target:"_blank"}},[t._v("Документация")])]),n("dd",[n("a",{attrs:{href:"http://vuejs.org/api/",target:"_blank"}},[t._v("API")])]),n("dd",[n("a",{attrs:{href:"https://vuejs.org/v2/guide/comparison.html",target:"_blank"}},[t._v("Сравнение с другими фреймворками")])]),n("dd",[n("a",{attrs:{href:"http://vuejs.org/examples/",target:"_blank"}},[t._v("Примеры")])]),n("dd",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank"}},[t._v("Components & Libraries")])]),n("dt",[n("strong",[t._v("Vuex (паттерн управления состоянием)")])]),n("dd",[n("a",{attrs:{href:"https://vuex.vuejs.org/en/intro.html",target:"_blank"}},[t._v("Документация")])]),n("dd",[n("a",{attrs:{href:"https://github.com/vuejs/vuex/",target:"_blank"}},[t._v("GitHub")])]),n("dt",[n("strong",[t._v("Vue-Router")])]),n("dd",[n("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank"}},[t._v("Документация")])]),n("dd",[n("a",{attrs:{href:"https://github.com/vuejs/vue-router/",target:"_blank"}},[t._v("GitHub")])])])]),n("section",[n("h2",[t._v("Работа приложения")]),n("ul",[n("li",[t._v("Используются реактивные возможности построения пользовательского интерфейса.")]),n("li",[t._v("\n                            Используются HTML-шаблоны для создания представлений веб-приложений, которые состоят из различных частей.\n                        ")]),n("li",[t._v("Сборка модулей осуществляется по технологии Asynchronous module definition (AMD).\n                            Для обеспечения этой технологии используется библиотека "),n("a",{attrs:{href:"http://requirejs.org/"}},[t._v("RequireJS")]),t._v("\n                            которая является загрузчиком JavaScript файлов и модулей.\n                        ")])])]),n("section",[n("h2",[t._v("Установка приложения")]),n("h3",[t._v("Предварительные требования")]),n("a",{attrs:{href:"https://httpd.apache.org/download.cgi",target:"_blank"}},[t._v("Apache2")]),t._v(", "),n("a",{attrs:{href:"http://nginx.org/en/",target:"_blank"}},[t._v("Nginx")]),t._v(" веб сервер или похожие.\n                    "),n("h3",[t._v("Развертывание")]),n("ol",[n("li",[t._v("Клонировать или загрузить "),n("a",{attrs:{href:"https://github.com/bsa-git/vuex-examples",target:"_blank"}},[t._v("vue-resume")]),t._v("\n                            проект с GitHub.\n                        ")]),n("li",[t._v("Сконфигурировать веб сервер так чтобы входная точка была "),n("code",[t._v("/index.html")]),t._v(".")]),n("li",[t._v("Доступ к URL вашего проекта с помощью веб-браузера (пр. "),n("a",{attrs:{href:"http://vuex-examples/index.html"}},[t._v("http://vuex-examples/index.html")]),t._v(").\n                        ")])])]),n("section",[n("h2",[t._v("Структура приложения")]),n("p",[n("strong",[t._v("Vuex-Examples")]),t._v(" проект имеет файловую структуру, показанную ниже см. пр.1.\n                    ")]),n("kbd",[t._v("пр.1")]),n("vuex-examples-code1"),n("h3",[t._v("Точка входа "),n("strong",[t._v("main.js")])]),n("p",[t._v("\n                        Точкой входа в приложение является файл "),n("code",[t._v("main.js")]),t._v(". В нем происходит конфигурация\n                        "),n("code",[t._v("requirejs")]),t._v(", компоновка приложения из отдельных компонентов,\n                        создание самого приложения "),n("code",[t._v("App")]),t._v(" см. пр.2.\n                    ")]),n("kbd",[t._v("пр.2")]),n("vuex-examples-code2")],1)])],1)],1)],1)},staticRenderFns:[]}},896:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"highlight js"},[t._v("\n    requirejs.config({\n        baseUrl: '',\n        paths: {\n            css: \"app/js/requirejs/css.min\", //requirejs plugin for load css\n            text: \"app/js/requirejs/text\", //requirejs plugin for load text\n            es6_promise: 'app/js/es6-promise/es6-promise.min',\n            vue: 'https://unpkg.com/vue/dist/vue', // 'app/js/vue',\n            vuex: 'https://unpkg.com/vuex/dist/vuex', // 'app/js/vuex',\n            vue_router: 'https://unpkg.com/vue-router/dist/vue-router', // 'app/js/vue-router',\n        },\n        shim: {\n        }\n    });\n\n    require([\n        'vue',\n        // Vue-Router\n        'vue_router',\n        // Components\n        'app/components/app/app',\n        'app/components/app-home/home',\n        'app/components/app-examples/examples',\n        'app/components/app-contact/contact',\n        'app/components/test-counter/counter',\n        'app/components/test-counter-hot/counter',\n        'app/components/test-shopping-cart/components/app/app',\n        'app/components/test-todomvc/components/app/app',\n        'app/components/test-chat/components/app/app'\n    ],\n        function ( Vue, VueRouter, App, Home, Examples, Contact, Counter, CounterHot, ShoppingCart, TodoMvc, Chat) {\n\n            // Use plugin - VueRouter\n            Vue.use(VueRouter);\n            // Create the router instance and pass the `routes` option\n            var routes = [\n                {\n                    path: '/',\n                    meta: { home: true },\n                    component: Home\n                },\n                {\n                    path: '/home',\n                    meta: { home: true },\n                    component: Home\n                },\n                {\n                    path: '/examples',\n                    meta: { examples: true },\n                    component: Examples\n                },\n                {\n                    path: '/contact',\n                    meta: { contact: true },\n                    component: Contact\n                },\n                {\n                    path: '/counter',\n                    meta: { examples: true },\n                    component: Counter\n                },\n                {\n                    path: '/counter-hot',\n                    meta: { examples: true },\n                    component: CounterHot\n                },\n                {\n                    path: '/shopping-cart',\n                    meta: { examples: true },\n                    component: ShoppingCart\n                },\n                {\n                    path: '/todomvc',\n                    meta: { examples: true },\n                    component: TodoMvc\n                },\n                {\n                    path: '/chat',\n                    meta: { examples: true },\n                    component: Chat\n                },\n            ];\n\n            // Create the router instance and pass the `routes` option\n            var router = new VueRouter({\n                routes: routes\n            });\n\n            // Create and mount the root instance.\n            var app = new App({\n                router: router\n            }).$mount('#main');\n        }\n    );\n")])])}]}},897:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"nohighlight"},[t._v("\n\n    |-- app/\n    |  |-- components/      # Отдельные компоненты проекта\n    |  |-- css/             # CSS - каскадные стили\n    |  |-- img/             # Изображения\n    |  `-- js/              # JavaScript файлы\n    |\n    |-- .firebaserc         # FireBase конфигурация\n    |-- .gitattributes\n    |-- .gitignore\n    |-- firebase.json       # FireBase конфигурация\n    |-- index.html          # Входная точка приложения (html)\n    |-- LICENSE.md\n    |-- main.js             # Входная точка приложения (JavaScript)\n    `-- README.md\n\n")])])}]}}});