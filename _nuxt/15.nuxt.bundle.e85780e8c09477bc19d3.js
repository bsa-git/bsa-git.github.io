webpackJsonp([15],{718:function(t,e,n){var s=n(73)(n(764),n(951),null,null);t.exports=s.exports},725:function(t,e,n){var s=n(73)(null,n(726),null,null);t.exports=s.exports},726:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-xs-right"},[n("v-btn",{attrs:{icon:"",router:"",to:"/portfolio/list",title:"Портфолио"}},[n("v-icon",[t._v("shop")])],1)],1)},staticRenderFns:[]}},764:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(147),r=n(725),a=n.n(r),o=n(856),i=n.n(o),l=n(857),u=n.n(l);e.default={components:{LinkToPortfolio:a.a,ResumeCode1:i.a,ResumeCode2:u.a},data:function(){return{title:"Vue-Resume",description:"Сайт резюме пользователя."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","portfolio"),s.default.initBlock()}}},856:function(t,e,n){var s=n(73)(null,n(924),null,null);t.exports=s.exports},857:function(t,e,n){var s=n(73)(null,n(925),null,null);t.exports=s.exports},924:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"nohighlight"},[t._v("\n\n    |-- css/             # CSS - каскадные стили\n    |-- images/          # Изображения\n    |-- js/              # JavaScript файлы\n    |-- templates/       # Шаблоны отдельных конпонентов сайта\n    |\n    |-- .firebaserc         # FireBase конфигурация\n    |-- .gitattributes\n    |-- .gitignore\n    |-- firebase.json       # FireBase конфигурация\n    |-- index.html          # Входная точка приложения (html)\n    |-- LICENSE.md\n    |-- main.js             # Входная точка приложения (JavaScript)\n    `-- README.md\n\n")])])}]}},925:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"highlight js"},[t._v("\n    requirejs.config({\n        baseUrl: '',\n        paths: {\n            css: \"js/requirejs/css.min\", //requirejs plugin for load css\n            text: \"js/requirejs/text\", //requirejs plugin for load text\n            vue: 'https://unpkg.com/vue/dist/vue'\n        },\n        shim: {\n        }\n    });\n\n    require(['vue',\n        'text!templates/preloader.html',\n        'text!templates/phone.html',\n        'text!templates/socials.html',\n        'text!templates/sidebar.html',\n        'text!templates/about.html',\n        'text!templates/services.html',\n        'text!templates/portfolio.html',\n        'text!templates/resume.html',\n        'text!templates/blog.html',\n        'text!templates/testimonial.html',\n        'text!templates/contact.html',\n        'text!templates/footer.html',\n    ],\n        function (  Vue, preloader, phone, socials, sidebar, about, services,\n                    portfolio, resume, blog, testimonial, contact, footer) {\n\n            var app = new Vue({\n                el: '#app',\n                data: {\n                    loaded: false\n                },\n                mounted: function () {\n                    this.loaded = true;\n                    // `this` points to the vm instance\n                    console.log('App is ready!');\n                },\n                components: {\n                    'my-preloader': {\n                        template: preloader\n                    },\n                    'my-phone': {\n                        template: phone,\n                        data: function () {\n                            return { phone: '+1234567890' }\n                        }\n                    },\n\n                    ...\n\n                }\n            });\n\n            require(['js/scripts.min.js']);\n        }\n    );\n")])])}]}},951:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[n("div",{staticClass:"page-title text-xs-center"},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))]),n("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),n("p",{staticClass:"date-publication"},[t._v("2017-12-27")]),n("v-card",{staticClass:"blog-post"},[n("v-card-text",[n("link-to-portfolio"),n("section",[n("h1",[t._v("Введение.")]),n("p",[t._v("\n                        Я использовал свободный шаблон "),n("a",{attrs:{href:"https://graygrids.com/item/osahan-free-cv-resumevcard-html5-template/",target:"_blank"}},[t._v("Osahan – Free CV Resume/Vcard HTML5 Template")]),t._v(",\n                        чтобы продемонстрировать работу замечательной библиотеки\n                        "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html",target:"_blank"}},[t._v("Vue.js")]),t._v(".\n                    ")]),n("p",{staticClass:"subheading"},[n("strong",[t._v("\n                            Этот проект на "),n("strong",[t._v("GitHub")]),t._v(" можно посмотреть "),n("a",{attrs:{href:"https://github.com/bsa-git/vue-resume",target:"_blank"}},[t._v("здесь")])])]),n("p",{staticClass:"subheading"},[n("strong",[t._v("\n                            Демонстрацию этого проекта можно посмотреть "),n("a",{attrs:{href:"https://vue-resume.firebaseapp.com/",target:"_blank"}},[t._v("здесь")])])])]),n("section",[n("h2",[t._v("Обзор Vue.js фреймворка")]),n("p",[t._v("\n                        Vue (произносится /vjuː/, примерно как "),n("strong",[t._v("view")]),t._v(") — это "),n("strong",[t._v("прогрессивный фреймворк")]),t._v("\n                        для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов,\n                        Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня\n                        представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами.\n                        С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений\n                        (SPA, Single-Page Applications), если использовать его совместно с\n                        "),n("a",{attrs:{href:"single-file-components.html",target:"_blank"}},[t._v("современными инструментами")]),t._v(" и\n                        "),n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank"}},[t._v("дополнительными библиотеками")]),t._v(".\n                    ")]),n("p",[t._v("\n                        Если вы — опытный фронтенд-разработчик, и хотите узнать, чем Vue отличается от остальных\n                        библиотек или фреймворков, обратите внимание на "),n("a",{attrs:{href:"comparison.html",target:"_blank"}},[t._v("сравнение с другими фреймворками")]),t._v(".\n                    ")])]),n("section",[n("h2",[t._v("Ресурсы")]),n("dl",[n("dt",[n("strong",[t._v("Vue.js (JavaScript framework)")])]),n("dd",[n("a",{attrs:{href:"http://vuejs.org/guide/",target:"_blank"}},[t._v("Документация")])]),n("dd",[n("a",{attrs:{href:"http://vuejs.org/api/",target:"_blank"}},[t._v("API")])]),n("dd",[n("a",{attrs:{href:"https://vuejs.org/v2/guide/comparison.html",target:"_blank"}},[t._v("Сравнение с другими фреймворками")])]),n("dd",[n("a",{attrs:{href:"http://vuejs.org/examples/",target:"_blank"}},[t._v("Примеры")])]),n("dd",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank"}},[t._v("Components & Libraries")])]),n("dt",[n("strong",[t._v("jQuery")])]),n("dd",[n("a",{attrs:{href:"http://learn.jquery.com/",target:"_blank"}},[t._v("Документация")])]),n("dt",[n("strong",[t._v("Bootstrap 3")])]),n("dd",[n("a",{attrs:{href:"https://getbootstrap.com/docs/3.3/",target:"_blank"}},[t._v("Документация")])]),n("dt",[n("strong",[t._v("jQuery plugin Owl Carousel 2")])]),n("dd",[n("a",{attrs:{href:"https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html",target:"_blank"}},[t._v("Документация")])]),n("dd",[n("a",{attrs:{href:"https://github.com/OwlCarousel2/OwlCarousel2",target:"_blank"}},[t._v("GitHub")])]),n("dt",[n("strong",[t._v("jQuery plugin Magnific Popup")])]),n("dd",[n("a",{attrs:{href:"http://dimsemenov.com/plugins/magnific-popup/documentation.html",target:"_blank"}},[t._v("Документация")])]),n("dd",[n("a",{attrs:{href:"https://github.com/dimsemenov/Magnific-Popup",target:"_blank"}},[t._v("GitHub")])]),n("dd",[n("a",{attrs:{href:"http://dimsemenov.com/plugins/magnific-popup/",target:"_blank"}},[t._v("Примеры")])]),n("dt",[n("strong",[t._v("Font Awesome - the iconic font and CSS toolkit")])]),n("dd",[n("a",{attrs:{href:"http://fontawesome.io/",target:"_blank"}},[t._v("Документация")])])])]),n("section",[n("h2",[t._v("Работа приложения")]),n("ul",[n("li",[t._v("Используются реактивные возможности построения пользовательского интерфейса.")]),n("li",[t._v("\n                            Используются HTML-шаблоны для создания представлений веб-приложений, которые состоят из различных частей.\n                        ")]),n("li",[t._v("Сборка модулей осуществляется по технологии Asynchronous module definition (AMD).\n                            Для обеспечения этой технологии используется библиотека "),n("a",{attrs:{href:"http://requirejs.org/"}},[t._v("RequireJS")]),t._v("\n                            которая является загрузчиком JavaScript файлов и модулей.\n                        ")]),n("li",[t._v("Для построения пользовательского интерфейса используется "),n("a",{attrs:{href:"https://getbootstrap.com/docs/3.3/",target:"_blank"}},[t._v("Bootstrap 3")]),t._v(", это один из популярных HTML, CSS,\n                            и JS фреймворков для разработки интерактивных мобильных проектов в Интернете.\n                        ")])])]),n("section",[n("h2",[t._v("Установка приложения")]),n("h3",[t._v("Предварительные требования")]),n("a",{attrs:{href:"https://httpd.apache.org/download.cgi",target:"_blank"}},[t._v("Apache2")]),t._v(", "),n("a",{attrs:{href:"http://nginx.org/en/",target:"_blank"}},[t._v("Nginx")]),t._v(" веб сервер или похожие.\n                    "),n("h3",[t._v("Развертывание")]),n("ol",[n("li",[t._v("Клонировать или загрузить "),n("a",{attrs:{href:"https://github.com/bsa-git/vue-resume",target:"_blank"}},[t._v("vue-resume")]),t._v("\n                            проект с GitHub.\n                        ")]),n("li",[t._v("Сконфигурировать веб сервер так чтобы входная точка была "),n("code",[t._v("/index.html")]),t._v(".")]),n("li",[t._v("Доступ к URL вашего проекта с помощью веб-браузера (пр. "),n("a",{attrs:{href:"http://vue-resume/index.html"}},[t._v("http://vue-resume/index.html")]),t._v(").\n                        ")])])]),n("section",[n("h2",[t._v("Структура приложения")]),n("p",[n("strong",[t._v("Vue-Resume")]),t._v(" проект имеет файловую структуру, показанную ниже см. пр.1.\n                    ")]),n("kbd",[t._v("пр.1")]),n("resume-code1"),n("h3",[t._v("Точка входа "),n("strong",[t._v("main.js")])]),n("p",[t._v("\n                        Точкой входа в приложение является файл "),n("code",[t._v("main.js")]),t._v(". В нем происходит конфигурация\n                        "),n("code",[t._v("requirejs")]),t._v(", компоновка приложения из отдельных компонентов,\n                        создание самого приложения "),n("code",[t._v("App")]),t._v(" см. пр.2.\n                    ")]),n("kbd",[t._v("пр.2")]),n("resume-code2")],1)],1)],1)],1)],1)},staticRenderFns:[]}}});