webpackJsonp([24],{701:function(t,i,e){e(972);var a=e(73)(e(747),e(872),null,null);t.exports=a.exports},747:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(98),n=e.n(a),s=e(64),o=e(148),r=e(217);i.default={data:function(){return{title:"Блог",description:"Заметки о самом важном.",page:1,pagination:null,items:r.default.items}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}],link:[]}},created:function(){this.$store.commit("SET_THEME","blog"),this.pagination||(this.pagination=new o.default({items:this.items,total:this.config.pagination.total}))},computed:n()({getItems:function(){return this.pagination||(this.pagination=new o.default({items:this.items,total:this.config.pagination.total})),this.pagination.getItems(this.page)}},e.i(s.mapGetters)({theme:"getTheme",config:"getConfig"}))}},772:function(t,i,e){i=t.exports=e(65)(!1),i.push([t.i,"#blog-pagination .pagination__item--active{background:#5d4037}",""])},872:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"page-title text-xs-center"},[e("div",{staticClass:"headline"},[t._v(t._s(t.title))]),e("div",{staticClass:"subheading"},[t._v(t._s(t.description))])]),e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[e("v-card",{class:[t.theme.base,"darken-2"],attrs:{dark:""}},[e("v-toolbar",{class:[t.theme.base,"darken-4"],attrs:{dark:""}},[e("v-btn",{attrs:{to:"/",title:"Главная",icon:""}},[e("v-icon",[t._v("home")])],1),e("v-toolbar-title",[t._v("Заметки")]),e("v-spacer"),e("v-btn",{attrs:{href:"https://github.com/bsa-git",target:"_blank",title:"GitHub",icon:""}},[e("v-icon",[t._v("public")])],1)],1),e("v-list",{attrs:{"two-line":"",dark:""}},[t._l(t.getItems,function(i,a){return[i.header?e("v-subheader",{domProps:{textContent:t._s(i.header)}}):i.divider?e("v-divider",{attrs:{inset:i.inset}}):e("v-list-tile",{key:a,attrs:{avatar:"",to:i.to}},[e("v-list-tile-avatar",[e("v-icon",{attrs:{dark:""}},[t._v(t._s(i.icon))])],1),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{innerHTML:t._s(i.title)}}),e("v-list-tile-sub-title",{domProps:{innerHTML:t._s(i.subtitle)}})],1)],1)]})],2)],1)],1)],1),e("div",{staticClass:"text-xs-center ma-5",attrs:{id:"blog-pagination"}},[e("v-pagination",{attrs:{length:t.pagination.totalPages(),"total-visible":t.pagination.itemsPerPage},model:{value:t.page,callback:function(i){t.page=i},expression:"page"}})],1)],1)},staticRenderFns:[]}},972:function(t,i,e){var a=e(772);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(74)("81268a62",a,!0)}});