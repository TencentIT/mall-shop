(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cc702d6"],{"027c":function(t,e,n){},a8c3:function(t,e,n){"use strict";var r=n("027c"),o=n.n(r);o.a},c24f:function(t,e,n){"use strict";n.d(e,"h",(function(){return o})),n.d(e,"g",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"i",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"f",(function(){return l})),n.d(e,"c",(function(){return f}));var r=n("e20a");function o(){return Object(r["a"])({url:"/User/GetUserIndex",method:"get"})}function a(t){return Object(r["a"])({url:"/User/GetFavorite",method:"post",params:{data:t}})}function c(t){return Object(r["a"])({url:"/User/DelFavorite",method:"get",params:{id:t}})}function i(){return Object(r["a"])({url:"/User/GetAddressList",method:"get"})}function s(t){return Object(r["a"])({url:"/User/GetAddressById",method:"get",params:{id:t}})}function u(t){return Object(r["a"])({url:"/User/SaveAddress",method:"post",params:{data:t}})}function d(t){return Object(r["a"])({url:"/User/DelAddress",method:"post",params:{data:t}})}function l(t){return Object(r["a"])({url:"/User/GetCoupon",method:"Post",params:{data:t}})}function f(t){return Object(r["a"])({url:"/User/ExchangeCoupon",method:"Post",params:{code:t}})}},eb75:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("headerNav",{attrs:{title:"我的收藏"}}),n("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,r){return n("div",{key:r},[n("van-swipe-cell",{attrs:{"right-width":65,"on-close":t.onClose(e)}},[n("product-card",{attrs:{product:e}}),n("span",{attrs:{slot:"right"},slot:"right"},[t._v("删除")])],1)],1)})),0)],1)},o=[],a=(n("6d57"),n("c24f")),c={data:function(){return{loading:!1,finished:!1,list:[],page:0}},methods:{onClose:function(t){return function(e,n){var r=this;switch(e){case"left":case"cell":case"outside":n.close();break;case"right":this.$dialog.confirm({message:"确定删除吗？"}).then((function(){Object(a["b"])(t.id).then((function(t){r.$toast("删除成功"),r.$router.go(0)})),n.close()})).catch((function(){}));break}}},onLoad:function(){var t=this;this.page++,Object(a["g"])().then((function(e){e.list.forEach((function(e){t.list.push(e)})),t.loading=!1,e.TotalPage<=t.page&&(t.finished=!0)}))}}},i=c,s=(n("a8c3"),n("5511")),u=Object(s["a"])(i,r,o,!1,null,null,null);e["default"]=u.exports}}]);