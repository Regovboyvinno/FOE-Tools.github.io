(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{311:function(t,n,e){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.value)}})};o._withStripped=!0;var r=e(371),s=e.n(r),a=e(374),u=e.n(a),i=e(377),c=e.n(i),d={name:"Remark",props:{markdown:{type:String,required:!0}},data:function(){return{value:""}},watch:{markdown:function(){this.updateMarkdown()}},methods:{updateMarkdown:function(){var t=this,n=this;s()().use(c.a).use(u.a).process(this.$props.markdown,function(e,o){e?console.error(e):(n.$data.value=o.contents,t.$emit("md-update",o.contents))})}},mounted:function(){this.updateMarkdown()}},l=e(12),p=Object(l.a)(d,o,[],!1,null,null,null);p.options.__file="Remark.vue";n.a=p.exports},805:function(t,n,e){"use strict";e.r(n);var o=e(311);n.default={head:function(){return{title:this.$t("routes.changelog.title")}},data:function(){return this.$store.commit("SET_CURRENT_LOCATION","changelog"),this.$store.commit("RESTORE_HERO"),{url:"https://raw.githubusercontent.com/FOE-Tools/FOE-Tools.github.io/production/CHANGELOG.md",markdown:""}},mounted:function(){var t=new XMLHttpRequest,n=this;t.open("GET",this.$data.url,!0),t.onload=function(){4===t.readyState&&(200===t.status?n.$data.markdown=t.responseText:console.error(t.statusText))},t.onerror=function(){console.error(t.statusText)},t.send(null)},components:{Remark:o.a}}}}]);