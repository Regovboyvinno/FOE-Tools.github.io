(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{313:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v(e._s(e.label))]),s("div",{staticClass:"control"},[s("div",{staticClass:"buttons has-addons"},[s("span",{ref:"button-yes",staticClass:"button button-yes",class:{"is-success is-selected":e.newValue,"is-dark-light is-outlined":!e.newValue&&this.$store.state.isDarkTheme},on:{click:function(t){e.newValue=!0}}},[e._m(0),s("span",[e._v(e._s(e.$t("utils.Yes")))])]),s("span",{ref:"button-no",staticClass:"button button-no",class:{"is-danger is-selected":!e.newValue,"is-dark-light is-outlined":e.newValue&&this.$store.state.isDarkTheme},on:{click:function(t){e.newValue=!1}}},[e._m(1),s("span",[e._v(e._s(e.$t("utils.No")))])])])])])};a._withStripped=!0;var o={name:"YesNo",props:{value:{type:Boolean,required:!0},label:String},data:function(){return{newValue:this.value}},watch:{value:function(e){this.newValue=e},newValue:function(e){this.$emit("input",e)}}},i=s(12),r=Object(i.a)(o,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-check"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-times"})])}],!1,null,null,null);r.options.__file="YesNo.vue";t.a=r.exports},314:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("div",{staticClass:"field"},[s("h3",{staticClass:"title is-3"},[e._v(e._s(e.$t(e.$data.i18nPrefix+"block_cfc.title")))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.canPermalink,expression:"canPermalink"}],staticClass:"column is-half"},[s("div",{staticClass:"field"},[s("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:e.permaLink,exact:""}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-link"})]),e._v(" "+e._s(e.$t("utils.permalink")))])],1)])]),s("p",[e._v(e._s(e.$t("utils.description.p1")))]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("b-field",{attrs:{id:"your-age-container",label:e.$t(e.i18nPrefix+"block_cfc.your_age"),"label-for":"your-age",type:e.haveError("yourAge")}},[s("b-select",{attrs:{id:"your-age",name:"your-age",expanded:""},model:{value:e.yourAge,callback:function(t){e.yourAge=t},expression:"yourAge"}},e._l(e.questData.ages,function(t){return s("option",{key:t.key,attrs:{id:"option_"+t.key,autocomplete:"off"},domProps:{value:t.key,selected:e.yourAge==t.key}},[e._v(e._s(e.$t("foe_data.age."+t.key)))])}))],1),s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.coins_to_use"),"label-for":"coins",type:e.haveError("coins")}},[s("b-input",{attrs:{id:"coins",type:"number",min:"0",name:"coins",autocomplete:"off"},model:{value:e.coins,callback:function(t){e.coins=e._n(t)},expression:"coins"}})],1),s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.gb_plunder_goods"),"label-for":"goods",type:e.haveError("goods")}},[s("b-input",{attrs:{id:"goods",type:"number",min:"0",name:"goods",autocomplete:"off"},model:{value:e.goods,callback:function(t){e.goods=e._n(t)},expression:"goods"}})],1),s("yes-no",{directives:[{name:"show",rawName:"v-show",value:e.checkSecondQuest,expression:"checkSecondQuest"}],attrs:{label:e.$t(e.i18nPrefix+"block_cfc.second_rq")},model:{value:e.secondRq,callback:function(t){e.secondRq=t},expression:"secondRq"}}),s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.other_rq"),"label-for":"other-rq",type:e.haveError("otherRq")}},[s("b-input",{attrs:{id:"other-rq",type:"number",min:"0",name:"other-rq",autocomplete:"off"},model:{value:e.otherRq,callback:function(t){e.otherRq=e._n(t)},expression:"otherRq"}})],1)],1),s("div",{staticClass:"column is-half"},[s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.your_cf_boost"),"label-for":"your-cf-boost",type:e.haveError("yourCfBoost")}},[s("b-input",{attrs:{id:"your-cf-boost",type:"number",min:"0",name:"your-cf-boost",autocomplete:"off"},model:{value:e.yourCfBoost,callback:function(t){e.yourCfBoost=e._n(t)},expression:"yourCfBoost"}})],1),s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.supplies_to_use"),"label-for":"supplies",type:e.haveError("supplies")}},[s("b-input",{attrs:{id:"supplies",type:"number",min:"0",name:"supplies",autocomplete:"off"},model:{value:e.supplies,callback:function(t){e.supplies=e._n(t)},expression:"supplies"}})],1),s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.fp_by_24h"),"label-for":"fp-by-24h",type:e.haveError("fpBy24h")}},[s("b-input",{attrs:{id:"fp-by-24h",type:"number",min:"0",name:"fp-by-24h",autocomplete:"off"},model:{value:e.fpBy24h,callback:function(t){e.fpBy24h=e._n(t)},expression:"fpBy24h"}})],1),s("b-field",{directives:[{name:"show",rawName:"v-show",value:e.checkSecondQuest&&e.secondRq,expression:"checkSecondQuest && secondRq"}],attrs:{label:e.$t(e.i18nPrefix+"block_cfc.supplies_gathered"),"label-for":"supplies-gathered",type:e.haveError("suppliesGathered")}},[s("b-input",{attrs:{id:"supplies-gathered",type:"number",min:"0",name:"supplies-gathered",autocomplete:"off"},model:{value:e.suppliesGathered,callback:function(t){e.suppliesGathered=e._n(t)},expression:"suppliesGathered"}})],1)],1)]),s("b-message",{directives:[{name:"show",rawName:"v-show",value:e.infinityGenerator,expression:"infinityGenerator"}],attrs:{title:e.$t("utils.Information"),type:"is-info","has-icon":"",closable:!1}},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.infinity_generator.message")))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.infinityGenerator,expression:"infinityGenerator"}],staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("b-field",{attrs:{label:e.$t(e.i18nPrefix+"block_cfc.infinity_generator.label"),"label-for":"cumulativeQuest",type:e.haveError("cumulativeQuest")}},[s("b-input",{attrs:{id:"cumulativeQuest",type:"number",min:"1",name:"cumulativeQuest",autocomplete:"off"},model:{value:e.cumulativeQuest,callback:function(t){e.cumulativeQuest=e._n(t)},expression:"cumulativeQuest"}})],1)],1)]),s("div",{staticClass:"table-wrapper"},[s("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[s("thead",[s("tr",[s("th",{staticClass:"has-text-centered",attrs:{colspan:"4"}},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.title")))])]),s("tr",[s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th1")))]),s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th2")))]),s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th3")))]),s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_reward.thead.th4")))])])]),s("tbody",[s("tr",[s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.bp)))]),s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.medals)))]),s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.goods)))]),s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(e.result.fp)))])])])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[s("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.total_goods",{count:e.result.totalGoods})))]),s("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.daily_ubq",{count:e.result.dailyUbq})))])])]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[s("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.total_fp",{count:e.result.totalFp})))]),s("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.bonus_ubq",{count:e.result.bonusUbq})))])])]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[s("p",[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.total_rq_completed",{count:e.infinityGenerator?e.cumulativeQuest:e.result.totalRqCompleted})))]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.secondRq,expression:"secondRq"}]},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.reward_message.second_rq_completed",{count:e.result.secondRqCompleted})))])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.result.coinSupplyReturn.length<=0,expression:"!result.coinSupplyReturn.length <= 0"}],staticClass:"table-wrapper"},[s("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[s("thead",[s("tr",[s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_return.thead.th_level")))]),s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_return.thead.th_coin")))]),s("th",{staticClass:"has-text-centered"},[e._v(e._s(e.$t(e.i18nPrefix+"block_cfc.table_return.thead.th_supply")))])])]),s("tbody",e._l(e.result.coinSupplyReturn,function(t,a){return s("tr",[s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(a+1)))]),s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(t.coin)))]),s("td",{staticClass:"has-text-right"},[e._v(e._s(e.$formatNumber(t.supply)))])])}))])])],1)};a._withStripped=!0;var o=s(2),i=s.n(o),r=(s(40),s(557)),l=s.n(r),n=function(e,t,s,a,o,i,r,l,n){var c,u,p,d,h,m,f,_=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,g=t/100,y=Math.floor(s/e.cost.coins),b=Math.floor(a/e.cost.supplies),v={bp:0,medals:0,goods:0,fp:0,dailyUbq:y<b?y:b,bonusUbq:0,secondRqCompleted:0,totalGoods:0,totalFp:0,totalRqCompleted:0,coinSupplyReturn:[],infinityGenerator:!1,defaultCumulativeQuest:0},k=Math.floor((Math.floor((v.dailyUbq+n)*(2/14))*e.reward.small_coins*(1+g)+Math.floor((v.dailyUbq+n)*(1/14))*e.reward.large_coins*(1+g))/e.cost.gather)+Math.floor(l/e.cost.gather),R=r?k:0,$=!0,C=k,q=0;do{$?($=!1,c=Math.floor((v.dailyUbq+n+R)*(2/14))*e.reward.small_coins*(1+g)+Math.floor((v.dailyUbq+n+R)*(1/14))*e.reward.large_coins*(1+g),u=Math.floor((v.dailyUbq+n+R)*(2/14))*e.reward.small_supplies*(1+g)+Math.floor((v.dailyUbq+n+R)*(1/14))*e.reward.large_supplies*(1+g)):(c=Math.floor(q*(1/14))*e.reward.large_coins*(1+g)+Math.floor(q*(2/14))*e.reward.small_coins*(1+g)+Math.max(0,(v.coinSupplyReturn.length?v.coinSupplyReturn[v.coinSupplyReturn.length-1].coin:0)-q*e.cost.coins),u=Math.floor(q*(1/14))*e.reward.large_supplies*(1+g)+Math.floor(q*(2/14))*e.reward.small_supplies*(1+g)+Math.max(0,(v.coinSupplyReturn.length?v.coinSupplyReturn[v.coinSupplyReturn.length-1].supply:0)-q*e.cost.supplies)),p=Math.floor(c/e.cost.coins),d=Math.floor(u/e.cost.supplies),h=Math.floor(u/e.cost.gather),q=m=p<d?p:d,f=r?h+m:m,v.bonusUbq+=f,(c>0||u>0)&&(!v.infinityGenerator&&v.coinSupplyReturn.length>0&&v.coinSupplyReturn[v.coinSupplyReturn.length-1].coin<=c&&(v.infinityGenerator=!0),v.coinSupplyReturn.push({coin:c,supply:u})),C+=h}while(!v.infinityGenerator&&(c>e.cost.coins||u>e.cost.supply)||v.infinityGenerator&&_>v.coinSupplyReturn.length);return v.infinityGenerator&&0===_?v.defaultCumulativeQuest=v.coinSupplyReturn.length+1:v.infinityGenerator||(v.defaultCumulativeQuest=0),v.secondRqCompleted=r?C:0,v.totalRqCompleted=v.dailyUbq+v.bonusUbq+n+v.secondRqCompleted,v.bp=Math.floor(v.totalRqCompleted*(1/14)*e.reward.blueprint),v.medals=Math.floor(v.totalRqCompleted*(1/14))*Math.round(e.reward.medals*(1+g)),v.goods=Math.floor(v.totalRqCompleted*(5/14))*Math.round(e.reward.goods*(1+g)),v.fp=Math.floor(v.totalRqCompleted*(1/14))*e.reward.fp,v.totalGoods=v.goods+o,v.totalFp=v.fp+i,v},c=s(3),u=s(313),p={yourAge:"cfc_ya",yourCfBoost:"cfc_ycfb",coins:"cfc_c",supplies:"cfc_s",goods:"cfc_g",fpBy24h:"cfc_fp",otherRq:"cfc_orq",suppliesGathered:"cfc_sp",secondRq:"cfc_srq",cumulativeQuest:"cfc_cq"},d={yourCfBoost:{comparator:[">=",0]},coins:{comparator:[">=",0]},supplies:{comparator:[">=",0]},goods:{comparator:[">=",0]},fpBy24h:{comparator:[">=",0]},otherRq:{comparator:[">=",0]},suppliesGathered:{comparator:[">=",0]},cumulativeQuest:{comparator:[">=",1]}},h={name:"CfCalculator",head:function(){return this.$store.commit("SET_HERO",{title:"routes.cf_calculator.hero.title",subtitle:"routes.cf_calculator.hero.subtitle"}),{title:this.$t("routes.cf_calculator.title")}},props:{canPermalink:{type:Boolean,default:!1}},data:function(){this.$store.commit("SET_CURRENT_LOCATION","cf_calculator");var e={yourCfBoost:0,coins:0,supplies:0,goods:0,fpBy24h:0,otherRq:0,suppliesGathered:0,cumulativeQuest:0};for(var t in e)if(void 0!==this.$cookies.get(t)){var s=c.a.checkFormNumeric(this.$cookies.get(t),-1,d[t].comparator);s.state===c.a.FormCheck.VALID&&(e[t]=s.value)}return e.yourAge=void 0!==this.$cookies.get("yourAge")&&this.$cookies.get("yourAge")in l.a.ages?this.$cookies.get("yourAge"):l.a.ages.BronzeAge.key,e.secondRq=void 0!==this.$cookies.get("secondRq")&&!0===this.$cookies.get("secondRq"),Object.assign(e,this.checkQuery()),this.$store.commit("ADD_URL_QUERY",{key:p.yourAge,value:e.yourAge}),this.$store.commit("ADD_URL_QUERY",{key:p.yourCfBoost,value:e.yourCfBoost}),this.$store.commit("ADD_URL_QUERY",{key:p.coins,value:e.coins}),this.$store.commit("ADD_URL_QUERY",{key:p.supplies,value:e.supplies}),this.$store.commit("ADD_URL_QUERY",{key:p.goods,value:e.goods}),this.$store.commit("ADD_URL_QUERY",{key:p.fpBy24h,value:e.fpBy24h}),this.$store.commit("ADD_URL_QUERY",{key:p.otherRq,value:e.otherRq}),this.$store.commit("ADD_URL_QUERY",{key:p.suppliesGathered,value:e.suppliesGathered}),this.$store.commit("ADD_URL_QUERY",{key:p.secondRq,value:e.secondRq?1:0}),this.$store.commit("ADD_URL_QUERY",{key:p.cumulativeQuest,value:e.cumulativeQuest}),i()({},e,{i18nPrefix:"components.cf_calculator.",questData:l.a,oneQuest:[l.a.ages.BronzeAge.key,l.a.ages.IronAge.key,l.a.ages.EarlyMiddleAges.key,l.a.ages.HighMiddleAges.key],checkSecondQuest:!1,infinityGenerator:!1,result:{bp:0,medals:0,goods:0,fp:0,dailyUbq:0,bonusUbq:0,secondRqCompleted:0,totalGoods:0,totalFp:0,totalRqCompleted:0,coinSupplyReturn:[]},errors:{yourAge:!1,yourCfBoost:!1,coins:!1,supplies:!1,goods:!1,fpBy24h:!1,otherRq:!1,suppliesGathered:!1,cumulativeQuest:!1}})},computed:{isPermalink:function(){return this.$store.state.isPermalink},permaLink:function(){return{path:this.$i18nPath("cf-calculator/"),query:this.$store.state.urlQuery}}},watch:{yourAge:function(e){this.yourAge in l.a.ages?(this.errors.yourAge=!1,this.isPermalink||this.$cookies.set("yourAge",e,{path:"/",expires:c.a.getDefaultCookieExpireTime()}),this.$store.commit("UPDATE_URL_QUERY",{key:p.yourAge,value:e}),this.oneQuest.indexOf(this.yourAge)>-1&&(this.secondRq=!1,this.$store.commit("UPDATE_URL_QUERY",{key:p.secondRq,value:0}),this.isPermalink||this.$cookies.set("secondRq",!1,{path:"/",expires:c.a.getDefaultCookieExpireTime()})),this.checkSecondQuest=-1===this.oneQuest.indexOf(e),this.calculate()):this.errors.yourAge=!0},secondRq:function(e){var t=!!e;this.isPermalink||this.$cookies.set("secondRq",t,{path:"/",expires:c.a.getDefaultCookieExpireTime()}),this.$data.suppliesGathered=t?c.a.normalizeNumberValue(this.$data.suppliesGathered):0,this.$store.commit("UPDATE_URL_QUERY",{key:p.secondRq,value:t?1:0}),this.$store.commit("UPDATE_URL_QUERY",{key:p.suppliesGathered,value:t?c.a.normalizeNumberValue(this.$data.suppliesGathered):0}),this.calculate()},yourCfBoost:function(e,t){c.a.handlerForm(this,"yourCfBoost",e&&0!==e.length?e:0,t,d.yourCfBoost.comparator,!this.isPermalink,"yourCfBoost")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.yourCfBoost,value:e}),this.$data.infinityGenerator=!1,this.$data.cumulativeQuest=0,this.calculate())},coins:function(e,t){c.a.handlerForm(this,"coins",e&&0!==e.length?e:0,t,d.coins.comparator,!this.isPermalink,"coins")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.coins,value:e}),this.calculate())},supplies:function(e,t){c.a.handlerForm(this,"supplies",e&&0!==e.length?e:0,t,d.supplies.comparator,!this.isPermalink,"supplies")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.supplies,value:e}),this.calculate())},goods:function(e,t){c.a.handlerForm(this,"goods",e&&0!==e.length?e:0,t,d.goods.comparator,!this.isPermalink,"goods")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.goods,value:e}),this.calculate())},fpBy24h:function(e,t){c.a.handlerForm(this,"fpBy24h",e&&0!==e.length?e:0,t,d.fpBy24h.comparator,!this.isPermalink,"fpBy24h")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.fpBy24h,value:e}),this.calculate())},otherRq:function(e,t){c.a.handlerForm(this,"otherRq",e&&0!==e.length?e:0,t,d.otherRq.comparator,!this.isPermalink,"otherRq")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.otherRq,value:e}),this.calculate())},suppliesGathered:function(e,t){c.a.handlerForm(this,"suppliesGathered",e&&0!==e.length?e:0,t,d.suppliesGathered.comparator,!this.isPermalink,"suppliesGathered")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.suppliesGathered,value:e}),this.calculate())},cumulativeQuest:function(e,t){c.a.handlerForm(this,"cumulativeQuest",e&&0!==e.length?e:0,t,d.cumulativeQuest.comparator,!this.isPermalink,"cumulativeQuest")===c.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:p.cumulativeQuest,value:e}),this.calculate())}},mounted:function(){this.checkSecondQuest=-1===this.oneQuest.indexOf(this.$data.yourAge),this.calculate()},methods:{calculate:function(){this.$data.result=n(this.$data.questData.ages[this.$data.yourAge],c.a.normalizeNumberValue(this.$data.yourCfBoost),c.a.normalizeNumberValue(this.$data.coins),c.a.normalizeNumberValue(this.$data.supplies),c.a.normalizeNumberValue(this.$data.goods),c.a.normalizeNumberValue(this.$data.fpBy24h),!!this.$data.secondRq,c.a.normalizeNumberValue(this.$data.suppliesGathered),c.a.normalizeNumberValue(this.$data.otherRq),c.a.normalizeNumberValue(this.$data.cumulativeQuest)),this.$data.infinityGenerator=this.$data.result.infinityGenerator,this.$data.infinityGenerator&&0===this.$data.cumulativeQuest&&(this.$data.cumulativeQuest=this.$data.result.defaultCumulativeQuest)},checkQuery:function(){var e,t={},s=c.a.FormCheck.NO_CHANGE;for(var a in d)(e=c.a.checkFormNumeric(this.$route.query[p[a]],-1,d[a].comparator)).state===c.a.FormCheck.VALID&&(s=c.a.FormCheck.VALID,t[a]=e.value);return this.$route.query[p.yourAge]&&this.$route.query[p.yourAge]in l.a.ages&&(s=c.a.FormCheck.VALID,t.yourAge=this.$route.query[p.yourAge]),this.$route.query[p.secondRq]&&!isNaN(this.$route.query[p.secondRq])&&parseInt(this.$route.query[p.secondRq])>=0&&(s=c.a.FormCheck.VALID,t.secondRq=1===parseInt(this.$route.query[p.secondRq])),s===c.a.FormCheck.VALID&&this.$store.commit("IS_PERMALINK",!0),t},haveError:function(e){return this.$data.errors[e]?"is-danger":""}},components:{YesNo:u.a}},m=s(12),f=Object(m.a)(h,a,[],!1,null,null,null);f.options.__file="CfCalculator.vue";t.a=f.exports},557:function(e,t){e.exports={ages:{BronzeAge:{key:"BronzeAge",cost:{coins:600,supplies:500,gather:1500},reward:{blueprint:1,fp:5,goods:5,medals:5,small_coins:100,large_coins:300,small_supplies:100,large_supplies:300,diamond:20}},IronAge:{key:"IronAge",cost:{coins:2e3,supplies:2e3,gather:6e3},reward:{blueprint:1,fp:5,goods:5,medals:10,small_coins:1e3,large_coins:3e3,small_supplies:1e3,large_supplies:3e3,diamond:20}},EarlyMiddleAges:{key:"EarlyMiddleAges",cost:{coins:5e3,supplies:5e3,gather:15e3},reward:{blueprint:1,fp:5,goods:5,medals:15,small_coins:2e3,large_coins:5e3,small_supplies:2e3,large_supplies:5e3,diamond:20}},HighMiddleAges:{key:"HighMiddleAges",cost:{coins:8e3,supplies:8e3,gather:25e3},reward:{blueprint:1,fp:5,goods:5,medals:30,small_coins:3e3,large_coins:6e3,small_supplies:3e3,large_supplies:6e3,diamond:20}},LateMiddleAges:{key:"LateMiddleAges",cost:{coins:1e4,supplies:12e3,gather:4e4},reward:{blueprint:1,fp:5,goods:5,medals:50,small_coins:5e3,large_coins:1e4,small_supplies:5e3,large_supplies:1e4,diamond:20}},ColonialAge:{key:"ColonialAge",cost:{coins:25e3,supplies:3e4,gather:11e4},reward:{blueprint:1,fp:5,goods:5,medals:75,small_coins:7e3,large_coins:14e3,small_supplies:8e3,large_supplies:17e3,diamond:20}},IndustrialAge:{key:"IndustrialAge",cost:{coins:4e4,supplies:35e3,gather:15e4},reward:{blueprint:1,fp:5,goods:5,medals:125,small_coins:1e4,large_coins:18e3,small_supplies:11e3,large_supplies:2e4,diamond:20}},ProgressiveEra:{key:"ProgressiveEra",cost:{coins:6e4,supplies:5e4,gather:25e4},reward:{blueprint:1,fp:5,goods:5,medals:180,small_coins:15e3,large_coins:3e4,small_supplies:16e3,large_supplies:32e3,diamond:20}},ModernEra:{key:"ModernEra",cost:{coins:9e4,supplies:75e3,gather:4e5},reward:{blueprint:1,fp:5,goods:5,medals:275,small_coins:2e4,large_coins:45e3,small_supplies:21e3,large_supplies:5e4,diamond:20}},PostmodernEra:{key:"PostmodernEra",cost:{coins:11e4,supplies:9e4,gather:45e4},reward:{blueprint:1,fp:5,goods:5,medals:400,small_coins:25e3,large_coins:6e4,small_supplies:26e3,large_supplies:7e4,diamond:20}},ContemporaryEra:{key:"ContemporaryEra",cost:{coins:14e4,supplies:11e4,gather:5e5},reward:{blueprint:1,fp:5,goods:5,medals:550,small_coins:34e3,large_coins:9e4,small_supplies:32e3,large_supplies:8e4,diamond:20}},Tomorrow:{key:"Tomorrow",cost:{coins:17e4,supplies:14e4,gather:7e5},reward:{blueprint:1,fp:5,goods:5,medals:700,small_coins:45e3,large_coins:13e4,small_supplies:4e4,large_supplies:11e4,diamond:20}},TheFuture:{key:"TheFuture",cost:{coins:25e4,supplies:25e4,gather:8e5},reward:{blueprint:1,fp:5,goods:5,medals:900,small_coins:57e3,large_coins:171e3,small_supplies:5e4,large_supplies:15e4,diamond:20}},ArcticFuture:{key:"ArcticFuture",cost:{coins:28e4,supplies:28e4,gather:9e5},reward:{blueprint:1,fp:5,goods:5,medals:1100,small_coins:65e3,large_coins:2e5,small_supplies:6e4,large_supplies:19e4,diamond:20}},OceanicFuture:{key:"OceanicFuture",cost:{coins:5e5,supplies:5e5,gather:15e5},reward:{blueprint:1,fp:5,goods:5,medals:1300,small_coins:7e4,large_coins:22e4,small_supplies:65e3,large_supplies:2e5,diamond:20}},VirtualFuture:{key:"VirtualFuture",cost:{coins:8e5,supplies:8e5,gather:2e6},reward:{blueprint:1,fp:5,goods:5,medals:1500,small_coins:75e3,large_coins:24e4,small_supplies:7e4,large_supplies:22e4,diamond:20}}}}}}]);