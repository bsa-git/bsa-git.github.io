webpackJsonp([10],{1014:function(t,e,s){s(1428);var r=s(98)(s(1140),s(1358),"data-v-58412fc5",null);t.exports=r.exports},1045:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{items:[{src:"/img/doc/carousel/squirrel.jpg"},{src:"/img/doc/carousel/sky.jpg"},{src:"/img/doc/carousel/bird.jpg"},{src:"/img/doc/carousel/planet.jpg"}]}}}},1046:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{items:[{src:"/img/doc/carousel/squirrel.jpg"},{src:"/img/doc/carousel/sky.jpg"},{src:"/img/doc/carousel/bird.jpg"},{src:"/img/doc/carousel/planet.jpg"}]}}}},1047:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["theme"],data:function(){return{items:[{src:"/img/doc/carousel/squirrel.jpg"},{src:"/img/doc/carousel/sky.jpg"},{src:"/img/doc/carousel/bird.jpg"},{src:"/img/doc/carousel/planet.jpg"}]}}}},1140:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(78),a=s(1204),o=s.n(a),i=s(1205),n=s.n(i),c=s(1206),l=s.n(c);e.default={components:{CarouselDefault:o.a,CarouselCustomTransition:n.a,CarouselCustomDelimiter:l.a},data:function(){return{title:"Components - Carousels",description:'The "v-carousel" component is used to display large numbers of visual content on a rotating timer.'}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},fetch:function(t){var e=t.store,s=t.error;try{e.commit("SET_THEME","comp")}catch(t){s(t)}},computed:s.i(r.mapGetters)({theme:"getTheme"})}},1175:function(t,e,s){e=t.exports=s(77)(void 0),e.push([t.i,".layout[data-v-58412fc5]{margin-bottom:16px}",""])},1187:function(t,e,s){e=t.exports=s(77)(void 0),e.push([t.i,"#carousel-view-2 .fade-transition-enter-active[data-v-b44b1cd0],#carousel-view-2 .fade-transition-leave-active[data-v-b44b1cd0],#carousel-view-2 .fade-transition-leave-to[data-v-b44b1cd0]{transition:2s ease-out;position:absolute;top:0;left:0}#carousel-view-2 .fade-transition-enter[data-v-b44b1cd0],#carousel-view-2 .fade-transition-leave-to[data-v-b44b1cd0],#carousel-view-2 .fade-transition-leave[data-v-b44b1cd0]{opacity:0}",""])},1204:function(t,e,s){var r=s(98)(s(1045),s(1297),null,null);t.exports=r.exports},1205:function(t,e,s){s(1440);var r=s(98)(s(1046),s(1398),"data-v-b44b1cd0",null);t.exports=r.exports},1206:function(t,e,s){var r=s(98)(s(1047),s(1309),null,null);t.exports=r.exports},1297:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",{attrs:{id:"carousel-view-1",hover:"",raised:""}},[s("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[s("v-toolbar-title",[t._v("#1 Default")])],1),s("v-card-text",{staticClass:"body-2 secondary--text"},[s("blockquote",[t._v("\n                    A carousel by default has a slide transition.\n                ")])],1),s("div",{staticClass:"ma-3"},[s("v-carousel",t._l(t.items,function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src}})}))],1),s("br")],1)],1)],1)},staticRenderFns:[]}},1309:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",{attrs:{id:"carousel-view-3",hover:"",raised:""}},[s("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[s("v-toolbar-title",[t._v("#3 Custom delimiter")])],1),s("v-card-text",{staticClass:"body-2 secondary--text"},[s("blockquote",[t._v("\n                    You can also change the icon for the carousel delimiter.\n                ")])],1),s("div",{staticClass:"ma-3"},[s("v-carousel",{attrs:{icon:"stop"}},t._l(t.items,function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src}})}))],1),s("br")],1)],1)],1)},staticRenderFns:[]}},1358:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-title text-xs-center"},[s("div",{staticClass:"headline"},[t._v(t._s(t.title))]),s("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),s("carousel-default",{attrs:{theme:t.theme}}),s("carousel-custom-transition",{attrs:{theme:t.theme}}),s("carousel-custom-delimiter",{attrs:{theme:t.theme}})],1)},staticRenderFns:[]}},1398:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[s("v-card",{attrs:{id:"carousel-view-2",hover:"",raised:""}},[s("v-toolbar",{class:t.theme.base,attrs:{dark:""}},[s("v-toolbar-title",[t._v("#2 Custom transition")])],1),s("v-card-text",{staticClass:"body-2 secondary--text"},[s("blockquote",[t._v("\n                    You can also apply your own custom transition.\n                ")])],1),s("div",{staticClass:"ma-3"},[s("v-carousel",t._l(t.items,function(t,e){return s("v-carousel-item",{key:e,attrs:{src:t.src,transition:"v-fade-transition",reverseTransition:"v-fade-transition"}})}))],1),s("br")],1)],1)],1)},staticRenderFns:[]}},1428:function(t,e,s){var r=s(1175);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(99)("2573a084",r,!0)},1440:function(t,e,s){var r=s(1187);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s(99)("45f436b0",r,!0)}});