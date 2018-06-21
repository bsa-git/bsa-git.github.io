webpackJsonp([23],{714:function(t,e,a){var r=a(73)(a(753),a(864),null,null);t.exports=r.exports},753:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(147);e.default={components:{},data:function(){return{title:"Vue-Examples",description:"Демонстрация работы Vue.js фреймворка."}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","portfolio"),r.default.initBlock()}}},864:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[a("div",{staticClass:"page-title text-xs-center"},[a("div",{staticClass:"headline"},[t._v(t._s(t.title))]),a("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),a("p",{staticClass:"date-publication"},[t._v("2017-12-20")]),a("v-card",{staticClass:"blog-post"},[a("v-card-text",[a("section",[a("h1",[t._v("Введение.")]),a("p",[t._v("\n                        Я использовал примеры с "),a("a",{attrs:{href:"http://vuejs.org/examples/",target:"_blank"}},[t._v("официального сайта")]),t._v(",\n                        чтобы продемонстрировать работу замечательной библиотеки\n                        "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html",target:"_blank"}},[t._v("Vue.js")]),t._v(".\n                    ")]),a("p",{staticClass:"subheading"},[a("strong",[t._v("\n                            Этот проект на "),a("strong",[t._v("GitHub")]),t._v(" можно посмотреть "),a("a",{attrs:{href:"https://github.com/bsa-git/vue-examples/",target:"_blank"}},[t._v("здесь")])])]),a("p",{staticClass:"subheading"},[a("strong",[t._v("\n                            Демонстрацию этого проекта можно посмотреть "),a("a",{attrs:{href:"https://vue-examples-4878a.firebaseapp.com/#!/",target:"_blank"}},[t._v("здесь")])])])]),a("section",[a("h2",[t._v("Обзор Vue.js фреймворка")]),a("p",[t._v("\n                        Vue (произносится /vjuː/, примерно как "),a("strong",[t._v("view")]),t._v(") — это "),a("strong",[t._v("прогрессивный фреймворк")]),t._v("\n                        для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов,\n                        Vue создан пригодным для постепенного внедрения. Его ядро в первую очередь решает задачи уровня\n                        представления (view), что упрощает интеграцию с другими библиотеками и существующими проектами.\n                        С другой стороны, Vue полностью подходит и для создания сложных одностраничных приложений\n                        (SPA, Single-Page Applications), если использовать его совместно с\n                        "),a("a",{attrs:{href:"single-file-components.html",target:"_blank"}},[t._v("современными инструментами")]),t._v(" и\n                        "),a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank"}},[t._v("дополнительными библиотеками")]),t._v(".\n                    ")]),a("p",[t._v("\n                        Если вы — опытный фронтенд-разработчик, и хотите узнать, чем Vue отличается от остальных\n                        библиотек или фреймворков, обратите внимание на "),a("a",{attrs:{href:"comparison.html",target:"_blank"}},[t._v("сравнение с другими фреймворками")]),t._v(".\n                    ")])]),a("section",[a("h2",[t._v("Ресурсы")]),a("dl",[a("dt",[a("strong",[t._v("Vue.js (JavaScript framework)")])]),a("dd",[a("a",{attrs:{href:"http://vuejs.org/guide/",target:"_blank"}},[t._v("Документация")])]),a("dd",[a("a",{attrs:{href:"http://vuejs.org/api/",target:"_blank"}},[t._v("API")])]),a("dd",[a("a",{attrs:{href:"https://vuejs.org/v2/guide/comparison.html",target:"_blank"}},[t._v("Сравнение с другими фреймворками")])]),a("dd",[a("a",{attrs:{href:"http://vuejs.org/examples/",target:"_blank"}},[t._v("Примеры")])]),a("dd",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank"}},[t._v("Components & Libraries")])]),a("dt",[a("strong",[t._v("jQuery")])]),a("dd",[a("a",{attrs:{href:"http://learn.jquery.com/",target:"_blank"}},[t._v("Документация")])]),a("dt",[a("strong",[t._v("Bootstrap 3")])]),a("dd",[a("a",{attrs:{href:"https://getbootstrap.com/docs/3.3/",target:"_blank"}},[t._v("Документация")])]),a("dt",[a("strong",[t._v("Firebase (Realtime Database)")])]),a("dd",[a("a",{attrs:{href:"https://firebase.google.com/docs/web/setup",target:"_blank"}},[t._v("Документация")])]),a("dd",[a("a",{attrs:{href:"https://firebase.google.com/docs/samples/",target:"_blank"}},[t._v("Примеры")])]),a("dd",[a("a",{attrs:{href:"https://console.firebase.google.com/?pli=1",target:"_blank"}},[t._v("Консоль")])]),a("dt",[a("strong",[t._v("HackerNews")])]),a("dd",[a("a",{attrs:{href:"https://github.com/HackerNews/API",target:"_blank"}},[t._v("API")])]),a("dt",[a("strong",[t._v("A Markdown parser and compiler")])]),a("dd",[a("a",{attrs:{href:"https://github.com/chjj/marked",target:"_blank"}},[t._v("GitHub")])])])]),a("section",[a("h2",[t._v("Работа приложения")]),a("ul",[a("li",[t._v("Используются реактивные возможности построения пользовательского интерфейса.")]),a("li",[t._v("\n                            Используются HTML-шаблоны для создания представлений веб-приложений, которые состоят из различных частей.\n                        ")]),a("li",[t._v("Сборка модулей осуществляется по технологии Asynchronous module definition (AMD).\n                            Для обеспечения этой технологии используется библиотека "),a("a",{attrs:{href:"http://requirejs.org/",target:"_blank"}},[t._v("RequireJS")]),t._v("\n                            которая является загрузчиком JavaScript файлов и модулей.\n                        ")]),a("li",[t._v("\n                            Используется маршрутизация для создания одностраничного приложения (SPA, Single-Page Applications).\n                        ")]),a("li",[t._v("Реализована локализация двух языков: английского и русского.")]),a("li",[t._v("Для работы с локальными данными в броузере используется библиотека "),a("a",{attrs:{href:"https://github.com/andris9/jStorage",target:"_blank"}},[t._v("jStorage")]),t._v("\n                            это кросс-броузерная база данных для хранения значений в виде (key-value).\n                        ")]),a("li",[t._v("Для хранения данных на серверной стороне используется база данных "),a("a",{attrs:{href:"https://www.firebase.com/",target:"_blank"}},[t._v("Firebase")]),t._v(".\n                        ")]),a("li",[t._v("Для построения пользовательского интерфейса используется "),a("a",{attrs:{href:"https://getbootstrap.com/docs/3.3/",target:"_blank"}},[t._v("Bootstrap 3")]),t._v(", это один из популярных HTML, CSS,\n                            и JS фреймворков для разработки интерактивных мобильных проектов в Интернете.\n                        ")])])]),a("section",[a("h2",[t._v("Установка приложения")]),a("h3",[t._v("Предварительные требования")]),a("a",{attrs:{href:"https://httpd.apache.org/download.cgi",target:"_blank"}},[t._v("Apache2")]),t._v(", "),a("a",{attrs:{href:"http://nginx.org/en/",target:"_blank"}},[t._v("Nginx")]),t._v(" веб сервер или похожие.\n                    "),a("h3",[t._v("Развертывание")]),a("ol",[a("li",[t._v("Клонировать или загрузить "),a("a",{attrs:{href:"https://github.com/bsa-git/vue-examples/",target:"_blank"}},[t._v("vue-examples")]),t._v("\n                            проект с GitHub.\n                        ")]),a("li",[t._v("Сконфигурировать веб сервер так чтобы входная точка была "),a("code",[t._v("/index.html")]),t._v(".")]),a("li",[t._v("Доступ к URL вашего проекта с помощью веб-браузера (пр. "),a("a",{attrs:{href:"http://vue-examples/index.html",target:"_blank"}},[t._v("http://vue-examples/index.html")]),t._v(").\n                        ")])])]),a("section",[a("h2",[t._v("Это приложение демонстрирует работу следующих Vue.js примеров:")]),a("h3",[t._v("TodoMVC")]),a("p",[t._v("\n                        Пример использует "),a("a",{attrs:{href:"https://www.firebase.com/",target:"_blank"}},[t._v("Firebase")]),t._v("\n                        как базу данных на серверной стороне. Это полнофункциональная реализация TodoMVC шаблона,\n                        выполненная с максимальной эффективностью и минимальным кодом.\n                    ")]),a("h3",[t._v("Markdown Editor")]),a("p",[t._v("\n                        Пример реализует простой "),a("strong",[t._v("Markdown")]),t._v(" редактор. "),a("a",{attrs:{href:"http://daringfireball.net/projects/markdown/",target:"_blank"}},[t._v("Markdown")]),t._v("\n                        это язык разметки текста в Интернете. Вы контролируете отображение документа,\n                        форматирование слов жирным шрифтом или курсивом, добавление изображений и создание списков - это просто\n                        немногие из вещей, которые мы можем сделать с помощью "),a("strong",[t._v("Markdown")]),t._v(".\n                    ")]),a("h3",[t._v("GitHub Commits")]),a("p",[t._v("\n                        Пример получает последние "),a("a",{attrs:{href:"https://github.com/bsa-git/silex-mvc/",target:"_blank"}},[t._v("Silex-MVC")]),t._v("\n                        зафиксируемые данные из "),a("strong",[t._v("API GitHub")]),t._v("\n                        и отображает их как список. Вы можете переключаться между\n                        ведущим и другими ветвями. "),a("strong",[t._v("GitHub")]),t._v("\n                        - это платформа для хостинга кода, для контроля версий и\n                        совместной работы. Это позволяет вам и другим разработчикам совместно работать над проектами из любого места.\n                    ")]),a("h3",[t._v("Firebase + Validation")]),a("p",[t._v("\n                        Пример использует "),a("a",{attrs:{href:"https://www.firebase.com/",target:"_blank"}},[t._v("Firebase")]),t._v("\n                        как базу для хранения данных\n                        на серверной стороне и обеспечивает синхронизацию данных между клиентами в реальном времени\n                        (вы можете попробовать открыть его на нескольких вкладках браузера). В добавок, он выполняет валидацию\n                        вводимых значений с помощью вычисляемых свойств и тригеров, а так же CSS переходы при добавлении / удалении элементов.\n                    ")]),a("h3",[t._v("Sort Grid Component")]),a("p",[t._v("\n                        Это пример создания компонента таблицы с возможностью сортировки и фильтрации внешних данных.\n                    ")]),a("h3",[t._v("Hacker News")]),a("p",[t._v("\n                        Это клон "),a("strong",[t._v("HackerNews")]),t._v(", построенный на базе официального "),a("a",{attrs:{href:"https://github.com/HackerNews/API",target:"_blank"}},[t._v("Firebase API")]),t._v(".\n                        С помощью "),a("strong",[t._v("Firebase")]),t._v("\n                        мы публикуем общедоступные данные "),a("strong",[t._v("HackerNews")]),t._v("\n                        в реальном времени.\n                    ")])])])],1)],1)],1)},staticRenderFns:[]}}});