(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-240890ba"],{"0bba":function(t,s,a){},"1eff":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goods"},[a("headerNav",{attrs:{title:"商品详情"}}),a("van-swipe",{staticClass:"goods-swipe",attrs:{autoplay:3e3}},t._l(t.goods.thumb,(function(t){return a("van-swipe-item",{key:t},[a("img",{attrs:{src:t}})])})),1),a("van-cell-group",[a("van-cell",[a("span",{staticClass:"goods-price"},[t._v(t._s(t.formatPrice(t.goods.price)))]),a("span",{staticClass:"goods-market-price"},[t._v(t._s(t.formatPrice(t.goods.market_price)))]),a("div",{staticClass:"goods-title"},[t._v(t._s(t.goods.title))]),a("div",{staticClass:"goods-subtit"},[t._v(t._s(t.goods.subtitle))])]),a("van-cell",{staticClass:"goods-tag",on:{click:t.onClickShowTag}},[a("template",{staticStyle:{"font-size":"10px"},slot:"title"},[a("img",{attrs:{src:"https://haitao.nos.netease.com/ba8a4c2fdaa54f82a45261293c116af61419663676663i46n3jlh10028.png"}}),a("span",[t._v("挪威品牌")]),a("img",{attrs:{src:"https://haitao.nosdn2.127.net/13bd59e6e29a4f06b278c586629e690d.png"}}),a("span",[t._v("跨境商品")]),a("van-icon",{attrs:{name:"passed",color:"red"}}),a("span",[t._v("次日达")]),a("van-icon",{attrs:{name:"passed",color:"red"}}),a("span",[t._v("自提")]),a("van-icon",{attrs:{name:"passed",color:"red"}}),a("span",[t._v("闪电退款")]),a("van-icon",{attrs:{name:"passed",color:"red"}}),a("span",[t._v("前海保税仓")]),a("van-icon",{attrs:{name:"passed",color:"red"}}),a("span",[t._v("七天无理由退货（拆封后不支持）")])],1)],2)],1),a("van-cell-group",{staticClass:"goods-cell-group"},[a("van-cell",{attrs:{"is-link":""},on:{click:t.showPromotion}},[a("template",{slot:"title"},[a("span",{staticStyle:{"margin-right":"10px"}},[t._v("领券")]),a("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{type:"danger",mark:""}},[t._v("满180减30")]),a("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{type:"danger",mark:""}},[t._v("满300减100")])],1)],2),a("van-cell",{attrs:{"is-link":""},on:{click:t.showPromotion}},[a("template",{slot:"title"},[a("span",{staticStyle:{"margin-right":"10px"}},[t._v("促销")]),a("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{type:"danger"}},[t._v("多买优惠")]),a("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{type:"danger"}},[t._v("满减")]),a("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{type:"danger"}},[t._v("限购")])],1)],2)],1),a("van-cell-group",{staticClass:"goods-cell-group"},[a("van-cell",{attrs:{"is-link":""},on:{click:t.showSku}},[a("template",{slot:"title"},[a("span",{staticStyle:{"margin-right":"10px"}},[t._v("已选")]),a("span",[t._v("10件装")])])],2)],1),a("div",{staticClass:"goods-info"},[a("p",{staticClass:"goods-info-title"},[t._v("图文详情")]),a("div",{domProps:{innerHTML:t._s(t.goods.info)}})]),a("van-goods-action",[a("van-goods-action-mini-btn",{attrs:{icon:"like-o"},on:{click:t.sorry}},[t._v("\n      收藏\n    ")]),a("van-goods-action-mini-btn",{attrs:{icon:"cart"},on:{click:t.onClickCart}},[t._v("\n      购物车\n    ")]),a("van-goods-action-big-btn",{on:{click:t.showSku}},[t._v("\n      加入购物车\n    ")]),a("van-goods-action-big-btn",{attrs:{primary:""},on:{click:t.showSku}},[t._v("\n      立即购买\n    ")])],1),a("van-actionsheet",{staticStyle:{"font-size":"14px"},attrs:{title:"促销"},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[a("van-cell",{attrs:{"is-link":""},on:{click:t.sorry}},[a("template",{slot:"title"},[a("van-tag",{attrs:{type:"danger"}},[t._v("多买优惠")]),a("span",[t._v(" 满2件，总价打9折")])],1)],2),a("van-cell",{attrs:{"is-link":""},on:{click:t.sorry}},[a("template",{slot:"title"},[a("van-tag",{attrs:{type:"danger"}},[t._v("满减")]),a("span",[t._v(" 满100元减50元")])],1)],2),a("van-cell",{attrs:{"is-link":""},on:{click:t.sorry}},[a("template",{slot:"title"},[a("van-tag",{attrs:{type:"danger"}},[t._v("限购")]),a("span",[t._v(" 购买不超过5件时享受单件价￥8.00，超出数量以结算价为准")])],1)],2)],1),a("van-actionsheet",{staticStyle:{"font-size":"14px"},attrs:{title:"服务说明"},model:{value:t.showTag,callback:function(s){t.showTag=s},expression:"showTag"}},[a("van-cell",[a("template",{slot:"title"},[a("van-icon",{staticStyle:{"margin-right":"10px"},attrs:{name:"passed",color:"red"}}),a("span",[t._v("次日达")]),a("div",{staticStyle:{"margin-left":"24px","font-size":"10px",color:"#7d7d7d"}},[t._v("指定时间前下单，次日送达")])],1)],2),a("van-cell",[a("template",{slot:"title"},[a("van-icon",{staticStyle:{"margin-right":"10px"},attrs:{name:"passed",color:"red"}}),a("span",[t._v("自提")]),a("div",{staticStyle:{"margin-left":"24px","font-size":"10px",color:"#7d7d7d"}},[t._v("我们提供多种自提服务，包括自提点、自助提货柜、移动自提车等服务")])],1)],2),a("van-cell",[a("template",{slot:"title"},[a("van-icon",{staticStyle:{"margin-right":"10px"},attrs:{name:"passed",color:"red"}}),a("span",[t._v("闪电退款")]),a("div",{staticStyle:{"margin-left":"24px","font-size":"10px",color:"#7d7d7d"}},[t._v("签收7天内退货的，提供先退款后退货服务。")])],1)],2),a("van-cell",[a("template",{slot:"title"},[a("van-icon",{staticStyle:{"margin-right":"10px"},attrs:{name:"passed",color:"red"}}),a("span",[t._v("七天无理由退货（拆封后不支持）")]),a("div",{staticStyle:{"margin-left":"24px","font-size":"10px",color:"#7d7d7d"}},[t._v("七天无理由退货（拆封后不支持）")])],1)],2),a("van-cell",[a("template",{slot:"title"},[a("van-icon",{staticStyle:{"margin-right":"10px"},attrs:{name:"passed",color:"red"}}),a("span",[t._v("前海保税仓")]),a("div",{staticStyle:{"margin-left":"24px","font-size":"10px",color:"#7d7d7d"}},[t._v("本商品由前海保税仓发货")])],1)],2)],1),a("van-sku",{attrs:{sku:t.skuData.sku,goods:t.skuData.goods_info,"goods-id":t.skuData.goods_id,"hide-stock":t.skuData.sku.hide_stock,quota:t.skuData.quota,"quota-used":t.skuData.quota_used,"reset-stepper-on-hide":"","reset-selected-sku-on-hide":"","disable-stepper-input":"","close-on-click-overlay":t.closeOnClickOverlay,"message-config":t.messageConfig,"custom-sku-validator":t.customSkuValidator},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},model:{value:t.showBase,callback:function(s){t.showBase=s},expression:"showBase"}})],1)},i=[],o={kdt_id:55,user_id:4674509,offline_id:0,activity_alias:"",sku:{tree:[{k:"颜色",k_id:"1",v:[{id:"30349",name:"天蓝色",imgUrl:"https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"}],k_s:"s1",count:2},{k:"尺寸",k_id:"2",v:[{id:"1193",name:"1"},{id:"1194",name:"2"}],k_s:"s2",count:2}],list:[{id:2259,price:100,discount:100,code:"",s1:"1215",s2:"1193",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:110,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755},{id:2260,price:100,discount:100,code:"",s1:"1215",s2:"1194",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:0,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755},{id:2257,price:100,discount:100,code:"",s1:"30349",s2:"1193",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:111,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755},{id:2258,price:100,discount:100,code:"",s1:"30349",s2:"1194",s3:"0",s4:"0",s5:"0",extend:null,kdt_id:55,discount_price:0,stock_num:6,stock_mode:0,is_sell:null,combin_sku:!1,goods_id:946755}],price:"1.00",market_price:"10.00",stock_num:227,collection_id:2261,collection_price:0,none_sku:!1,sold_num:0,min_price:"1.00",max_price:"1.00",messages:[],hide_stock:!1},goods_id:"946755",alias:"2oml0r0n5vytj",quota:15,is_virtual:"0",quota_used:0,goods_info:{title:"测试商品",picture:"https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg",price:1,origin:""}},n={components:{},data:function(){var t=this;return this.skuData=o,{show:!1,showTag:!1,goods:{title:"【每日一粒益智又长高】 Lifeline Care 儿童果冻鱼油DHA维生素D3聪明长高 软糖 30粒 2件装",subtitle:"【品牌直采】Q弹美味，无腥味果冻鱼油，每粒含足量鱼油DHA，帮助视网膜和大脑健康发育，让你的宝宝明眼又聪明，同时补充400国际单位维生素D3，强壮骨骼和牙齿。特含DPA，让宝宝免疫力更强，没病来扰。",price:2680,market_price:9999,express:"免运费",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"],info:'<p style="text-align:center;"><img src="https://haitao.nosdn2.127.net/ac19460151ee4d95a6657202bcfc653c1531470912089jjjq8ml410763.jpg" ></p><p style="text-align:center;"><img src="https://haitao.nos.netease.com/2a91cfad22404e5498d347672b1440301531470912182jjjq8mnq10764.jpg" ></p><p style="text-align:center;"><img src="https://haitao.nos.netease.com/caddd5a213de4c1cb1347c267e8275731531470912412jjjq8mu410765.jpg" ></p>'},showBase:!1,showCustom:!1,showStepper:!1,closeOnClickOverlay:!0,initialSku:{s1:"30349",s2:"1193"},customSkuValidator:function(t){return"请选择xxx"},customStepperConfig:{quotaText:"单次限购100件",stockFormatter:function(t){return"剩余".concat(t,"间")},handleOverLimit:function(s){var a=s.action,e=s.limitType,i=s.quota;"minus"===a?t.$toast("至少选择一件商品"):"plus"===a&&(e===LIMIT_TYPE.QUOTA_LIMIT?t.$toast("限购".concat(i,"件")):t.$toast("库存不够了~~"))}},messageConfig:{uploadImg:function(t,s){return new Promise((function(t){setTimeout((function(){return t(s)}),1e3)}))},uploadMaxSize:3}}},methods:{formatPrice:function(t){return"¥"+(t/100).toFixed(2)},onClickCart:function(){this.$router.push("/cart")},sorry:function(){Toast("暂无后续逻辑~")},showPromotion:function(){this.show=!0},showSku:function(){this.showBase=!0},onClickShowTag:function(){this.showTag=!0},onBuyClicked:function(t){this.$toast(JSON.stringify(t))},onAddCartClicked:function(t){this.$toast(JSON.stringify(t))}}},c=n,l=(a("6074"),a("5511")),r=Object(l["a"])(c,e,i,!1,null,null,null);s["default"]=r.exports},6074:function(t,s,a){"use strict";var e=a("0bba"),i=a.n(e);i.a}}]);