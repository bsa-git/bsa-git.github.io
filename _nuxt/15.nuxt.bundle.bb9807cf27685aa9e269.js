webpackJsonp([15],{1116:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},840:function(e,t,r){var n=r(97)(r(955),r(1116),null,null);e.exports=n.exports},955:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){try{var e=new Error("We generate an error to show how it works on the client.");throw e.statusCode=404,e}catch(e){this.$store.commit("SET_ERROR",e),this.$router.replace("/error")}}}}});