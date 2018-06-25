webpackJsonp([22],{702:function(t,e,a){var r=a(73)(a(747),a(877),null,null);t.exports=r.exports},726:function(t,e,a){var r=a(73)(null,a(727),null,null);t.exports=r.exports},727:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{icon:"",router:"",to:"/blog/list",title:"Блог"}},[a("v-icon",[t._v("library_books")])],1)],1)},staticRenderFns:[]}},747:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(726),n=a.n(r);e.default={components:{LinkToBlog:n.a},data:function(){return{title:"Рекомендуемые ресурсы",description:"Ссылки на полезные инструменты и ресурсы для разработчика"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},mounted:function(){this.$store.commit("SET_THEME","blog")}}},877:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm9:"","offset-sm1":""}},[a("div",{staticClass:"page-title text-xs-center"},[a("div",{staticClass:"headline"},[t._v(t._s(t.title))]),a("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),a("p",{staticClass:"date-publication"},[t._v("2018-06-25")]),a("v-card",{staticClass:"blog-post"},[a("v-card-text",[a("link-to-blog"),a("section",[a("h2",[t._v("Полезные инструменты и ресурсы")]),a("ul",[a("li",[a("a",{attrs:{href:"http://www.javascripting.com/",target:"_blank"}},[t._v("JavaScripting")]),t._v("\n                            - The Database of JavaScript Libraries\n                        ")]),a("li",[a("a",{attrs:{href:"http://sahatyalkabov.com/jsrecipes/",target:"_blank"}},[t._v("JS Recipes")]),t._v("\n                            - JavaScript tutorials for backend and frontend development.\n                        ")]),a("li",[a("a",{attrs:{href:"https://html-to-pug.com/",target:"_blank"}},[t._v("HTML to Pug converter")]),t._v("\n                            - HTML to PUG is a free online converter helping you to convert html files to pug syntax in realtime.\n                        ")]),a("li",[a("a",{attrs:{href:"http://www.javascriptoo.com/",target:"_blank"}},[t._v("JavascriptOO")]),t._v("\n                            - A directory of JavaScript libraries with examples, CDN links, statistics, and videos.\n                        ")]),a("li",[a("a",{attrs:{href:"http://realfavicongenerator.net/",target:"_blank"}},[t._v("Favicon Generator")]),t._v("\n                            - Generate favicons for PC, Android, iOS, Windows 8.\n                        ")])])]),a("section",[a("h2",[t._v("Рекомендуемые ресурсы для разработки дизайна")]),a("ul",[a("li",[a("a",{attrs:{href:"http://codeguide.co/",target:"_blank"}},[t._v("Code Guide")]),t._v("\n                            - Standards for developing flexible, durable, and sustainable HTML and CSS.\n                        ")]),a("li",[a("a",{attrs:{href:"http://bootsnipp.com/",target:"_blank"}},[t._v("Bootsnipp")]),t._v("\n                            - Code snippets for Bootstrap.\n                        ")]),a("li",[a("a",{attrs:{href:"http://www.uibox.in",target:"_blank"}},[t._v("UIBox")]),t._v("\n                            - Curated HTML, CSS, JS, UI components.\n                        ")]),a("li",[a("a",{attrs:{href:"https://www.bootstrapzero.com",target:"_blank"}},[t._v("Bootstrap Zero")]),t._v("\n                            - Free Bootstrap templates themes.\n                        ")]),a("li",[a("a",{attrs:{href:"http://todc.github.io/todc-bootstrap/",target:"_blank"}},[t._v("Google Bootstrap")]),t._v("\n                            - Google-styled theme for Bootstrap.\n                        ")]),a("li",[a("a",{attrs:{href:"http://fortawesome.github.io/Font-Awesome/icons/",target:"_blank"}},[t._v("Font Awesome Icons")]),t._v("\n                            - It's already part of the Hackathon Starter, so use this page as a reference.\n                        ")]),a("li",[a("a",{attrs:{href:"http://clrs.cc",target:"_blank"}},[t._v("Colors")]),t._v(" - A nicer color palette for the web.\n                        ")]),a("li",[a("a",{attrs:{href:"http://tympanus.net/Development/CreativeButtons/",target:"_blank"}},[t._v("Creative Button Styles")]),t._v("\n                            - awesome button styles.\n                        ")]),a("li",[a("a",{attrs:{href:"http://tympanus.net/Development/CreativeLinkEffects/",target:"_blank"}},[t._v("Creative Link Effects")]),t._v("\n                            - Beautiful link effects in CSS.\n                        ")]),a("li",[a("a",{attrs:{href:"http://codepen.io/andreasstorm/pen/pyjEh",target:"_blank"}},[t._v("Medium Scroll Effect")]),t._v("\n                            - Fade in/out header background image as you scroll.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/btmills/geopattern",target:"_blank"}},[t._v("GeoPattern")]),t._v("\n                            - SVG background pattern generator.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/qrohlf/trianglify",target:"_blank"}},[t._v("Trianglify")]),t._v("\n                            - SVG low-poly background pattern generator.\n                        ")])])]),a("section",[a("h2",[t._v("Рекомендуемые библиотеки Node.js")]),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/remy/nodemon",target:"_blank"}},[t._v("Nodemon")]),t._v("\n                            - Automatically restart Node.js server on code changes.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/bluesmoon/node-geoip",target:"_blank"}},[t._v("geoip-lite")]),t._v("\n                            - Geolocation coordinates from IP address.\n                        ")]),a("li",[a("a",{attrs:{href:"http://filesizejs.com/",target:"_blank"}},[t._v("Filesize.js")]),t._v("\n                            - Pretty file sizes, e.g. "),a("code",[t._v('filesize(265318); // "265.32 kB"')]),t._v(".\n                        ")]),a("li",[a("a",{attrs:{href:"http://numeraljs.com",target:"_blank"}},[t._v("Numeral.js")]),t._v("\n                            - Library for formatting and manipulating numbers.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/node-inspector/node-inspector",target:"_blank"}},[t._v("Node Inspector")]),t._v("\n                            - Node.js debugger based on Chrome Developer Tools.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/nikhilm/node-taglib",target:"_blank"}},[t._v("node-taglib")]),t._v("\n                            - Library for reading the meta-data of several popular audio formats.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/lovell/sharp",target:"_blank"}},[t._v("sharp")]),t._v("\n                            - Node.js module for resizing JPEG, PNG, WebP and TIFF images.\n                        ")])])]),a("section",[a("h2",[t._v("Рекомендуемые библиотеки на стороне клиента")]),a("ul",[a("li",[a("a",{attrs:{href:"http://www.idangero.us/framework7/",target:"_blank"}},[t._v("Framework7")]),t._v("\n                            - Full Featured HTML Framework For Building iOS7 Apps.\n                        ")]),a("li",[a("a",{attrs:{href:"http://instantclick.io",target:"_blank"}},[t._v("InstantClick")]),t._v("\n                            - Makes your pages load instantly by pre-loading them on mouse hover.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/rstacruz/nprogress",target:"_blank"}},[t._v("NProgress.js")]),t._v("\n                            - Slim progress bars like on YouTube and Medium.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/IanLunn/Hover",target:"_blank"}},[t._v("Hover")]),t._v("\n                            - Awesome CSS3 animations on mouse hover.\n                        ")]),a("li",[a("a",{attrs:{href:"http://dimsemenov.com/plugins/magnific-popup/",target:"_blank"}},[t._v("Magnific Popup")]),t._v(" - Responsive jQuery Lightbox Plugin.\n                        ")]),a("li",[a("a",{attrs:{href:"http://wbotelhos.com/raty/",target:"_blank"}},[t._v("jQuery Raty")]),t._v("\n                            - Star Rating Plugin.\n                        ")]),a("li",[a("a",{attrs:{href:"http://wicky.nillia.ms/headroom.js/",target:"_blank"}},[t._v("Headroom.js")]),t._v("\n                            - Hide your header until you need it.\n                        ")]),a("li",[a("a",{attrs:{href:"http://vitalets.github.io/x-editable/",target:"_blank"}},[t._v("X-editable")]),t._v("\n                            - Edit form elements inline.\n                        ")]),a("li",[a("a",{attrs:{href:"http://github.hubspot.com/offline/docs/welcome/",target:"_blank"}},[t._v("Offline.js")]),t._v("\n                            - Detect when user's internet connection goes offline.\n                        ")]),a("li",[a("a",{attrs:{href:"http://fabien-d.github.io/alertify.js/",target:"_blank"}},[t._v("Alertify.js")]),t._v("\n                            - Sweet looking alerts and browser dialogs.\n                        ")]),a("li",[a("a",{attrs:{href:"http://brianreavis.github.io/selectize.js/",target:"_blank"}},[t._v("selectize.js")]),t._v("\n                            - Styleable select elements and input tags.\n                        ")]),a("li",[a("a",{attrs:{href:"http://github.hubspot.com/drop/docs/welcome/",target:"_blank"}},[t._v("drop.js")]),t._v("\n                            -  Powerful Javascript and CSS library for creating dropdowns and other floating displays.\n                        ")]),a("li",[a("a",{attrs:{href:"https://github.com/jlmakes/scrollReveal.js",target:"_blank"}},[t._v("scrollReveal.js")]),t._v("\n                            - Declarative on-scroll reveal animations.\n                        ")])])])],1)],1)],1)],1)},staticRenderFns:[]}}});