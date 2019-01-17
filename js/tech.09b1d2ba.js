(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tech"],{"2b87":function(t,e,i){},"47d0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{class:["tech-list"]},[t._l(t.techList,function(e){return[i("li",{key:e,class:["tech-item"]},[i("router-link",{class:["external","tech-link"],attrs:{name:e,"aria-label":e,title:e,to:"/tech/"+t.getProjectLink(e)}},[t._v(t._s(e))])],1)]})],2)},o=[],s={props:{techList:{required:!0,type:Array,default:function(){return[]}}},methods:{getProjectLink:function(t){return window.encodeURI(t.toLocaleLowerCase())}}},c=s,r=(i("b3ce"),i("2877")),a=Object(r["a"])(c,n,o,!1,null,"9f348b18",null);a.options.__file="techList.vue";e["a"]=a.exports},"6b1f":function(t,e,i){},"8d29":function(t,e,i){"use strict";var n=i("2b87"),o=i.n(n);o.a},b3ce:function(t,e,i){"use strict";var n=i("6b1f"),o=i.n(n);o.a},c844:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["max-width"],staticStyle:{overflow:"hidden","min-height":"520px"}},[i("h1",[t._v("\n    Featured Web Technologies\n  ")]),i("techList",{attrs:{"tech-list":t.localList}})],1)},o=[],s=(i("6762"),i("2fdb"),i("ac6a"),i("456d"),i("cadf"),i("551c"),i("097d"),i("f7ad")),c=i("47d0"),r={mixins:[s["a"]],components:{techList:c["a"]},data:function(){return{localList:[]}},head:{title:function(){return{inner:"Tech"}},meta:function(){var t="https://devnola.com/img/meta/code.jpg",e="Tech",i="A full list of all technoligies displayed in Shawn's portfolio. Shawn's skill include JavaScript, HTML, and CSS but some other specialties include: Greensock, SVG, Webpack, VueJS, UX, performance testing, and accessibility.";return[{id:"item-name",itemprop:"name",content:e},{id:"twitter-title",name:"twitter:title",content:e},{id:"og-title",property:"og:title",content:e},{id:"meta-description",name:"description",content:i},{id:"item-description",itemprop:"description",content:i},{id:"twitter-description",name:"twitter:description",content:i},{id:"og-description",property:"og:description",content:i},{id:"item-image",itemprop:"image",content:t},{id:"twitter-image",name:"twitter:image",content:t},{id:"og-image",property:"og:image",content:t}]},link:function(){return[{rel:"canonical",href:"https://devnola.com/tech",id:"canonical"}]}},mounted:function(){this.setCompileList(this.$store.state.projects),this.$scrollTo(":root")},watch:{"$store.state.projects":function(t){this.setCompileList(t)}},methods:{setCompileList:function(t){Object.keys(t).length==this.$store.state.types.length&&this.compileList(t)},compileList:function(t){for(var e in t)for(var i in t[e]){var n=t[e][i].content["techList"];for(var o in n)this.addTechItem(n[o])}},addTechItem:function(t){this.localList.includes(t)||this.localList.push(t)}}},a=r,p=(i("8d29"),i("2877")),h=Object(p["a"])(a,n,o,!1,null,"017ca5fe",null);h.options.__file="Tech.vue";e["default"]=h.exports},f7ad:function(t,e,i){"use strict";i("7f7f"),i("6762"),i("2fdb");var n=i("be94"),o=i("2f62");e["a"]={data:function(){return{type:!1,projectError:!1,techList:[]}},computed:Object(n["a"])({},Object(o["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var i in this.$store.state.projects[e]){var n=this.$store.state.projects[e][i].content["techList"],o=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(o.toLocaleLowerCase()))for(var s in n)this.techList.includes(n[s])||this.techList.push(n[s]),n[s].toLocaleLowerCase()==o.toLocaleLowerCase()&&(t[i]=this.$store.state.projects[e][i],t[i].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,i){return i.path.includes("mobile")?e.mobile.push(i):i.path.includes("horiz")?e.horiz.push(i):e.regular.push(i),i.path.includes("one.".concat(t.$route.params.project))&&(e.video=i.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),watch:{projects:function(t){t&&this.$emit("updateHead")},project:function(t){t&&this.$emit("updateHead")}},mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}}}]);
//# sourceMappingURL=tech.09b1d2ba.js.map