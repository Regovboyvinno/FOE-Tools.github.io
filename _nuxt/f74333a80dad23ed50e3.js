(window.webpackJsonp=window.webpackJsonp||[]).push([[20,49,51],{323:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-tabs",{attrs:{type:"is-toggle",expanded:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.trade_2_1.title")}},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"tab.trade_2_1.title")))]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"tab.trade_2_1.message")))]),a("trade",{attrs:{"trade-input":{age:!0,value:t.simpleTradeArray,type:t.TradeArrayType.SIMPLE}}}),a("simple-trade",{attrs:{"trade-array":t.simpleTradeArray}})],1),a("b-tab-item",{attrs:{label:t.$t(t.i18nPrefix+"tab.fair_trade.title")}},[a("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"tab.fair_trade.title")))]),a("p",[t._v(t._s(t.$t(t.i18nPrefix+"tab.fair_trade.message")))]),a("trade",{attrs:{"trade-input":{age:!0,value:t.fairTradeArray,type:t.TradeArrayType.FAIR}}}),a("simple-trade",{attrs:{"trade-array":t.fairTradeArray}})],1)],1)};r._withStripped=!0;var i=a(328),s=a(329),l=a(364),d={head:function(){return this.$store.commit("SET_HERO",{title:"routes.trade.hero.title",subtitle:"routes.trade.hero.subtitle"}),{title:this.$t("routes.trade.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","trade"),this.$store.commit("RESTORE_HERO"),{i18nPrefix:"routes.trade.",TradeArrayType:l.a,tab:1,fairTradeArray:l.b,simpleTradeArray:l.d}},components:{SimpleTrade:i.a,Trade:s.a}},n=a(12),u=Object(n.a)(d,r,[],!1,null,null,null);u.options.__file="Trade.vue";e.default=u.exports},343:function(t,e,a){"use strict";a.r(e);var r=a(323).default,i=a(12),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="trade.vue";e.default=s.exports},823:function(t,e,a){"use strict";a.r(e);var r=a(343).default,i=a(12),s=Object(i.a)(r,void 0,void 0,!1,null,null,null);s.options.__file="trade.vue";e.default=s.exports}}]);