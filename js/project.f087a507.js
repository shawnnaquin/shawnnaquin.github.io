(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"07bd":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["project","max-width"],staticStyle:{overflow:"hidden"}},[r("transition",{attrs:{name:t.mainTrans.trans,mode:t.mainTrans.mode,appear:""},on:{afterLeave:t.pageAfterLeave,enter:t.pageEnter}},[t.show?r("article",{},[r("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[t.project?r("div",{class:["article-header"]},[r("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[r("div",[r("h1",[t._v(" "+t._s(t.project.title))]),r("p",[t._v(t._s(t.project.projectDescription))])])]),t.project.content.video.length?r("youtube-video",{attrs:{videoId:t.project.content.video,videoImg:""+t.getBase+t.type+"/"+t.images.video}}):t._e(),t.project&&(t.project.content.code||t.project.content.externalSite)?r("div",{staticClass:"buttons"},[t.project.content.externalSite?r("a",{class:["external"],attrs:{href:t.project.content.externalSite,target:"_blank"}},[t._v(" Live Site "),r("span",{class:["external-span"]},[r("external")],1)]):t._e(),t._v("\n\t\t\t \n\n\t\t\t"),t.project.content.code?r("a",{class:["external"],attrs:{href:t.project.content.code,target:"_blank"}},[t._v("\n\t\t\t\t//code\n\t\t\t")]):t._e()]):t._e(),r("div",{class:["built-with"]},[r("h2",[t._v("\n\t\t\tBuilt With:\n\t\t")]),r("techList",{attrs:{techList:t.project.content.techList}})],1)],1):r("div",{class:["article-header"],style:{minHeight:"500px"}},[r("div",[r("h1",[t._v("\n\t\tProject Loading\n\t\t"),r("transition",{attrs:{name:"fade"}},[t.project?t._e():r("span",[t._v("\n\t\t\t\t…\n\t\t\t")])])],1)]),r("p",{class:["loading"]},[t._v("\n\t\tLOADING\n\t\t"),r("Loader",{attrs:{go:!t.project}})],1)])]),t.images.mobile&&t.images.mobile.length?r("div",{class:["image-container"]},[r("transition-group",{class:["mobile","grid"],attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.images.mobile,function(e,a){return t.phoneVertLoaded?r("div",{key:e.path,staticStyle:{position:"relative"},attrs:{"data-index":a}},[r("router-link",{class:["link"],attrs:{to:"/"+t.type+"/"+t.project.link+"/"+e.path}},[r("picture-query",{attrs:{type:t.type,path:e.path,alt:e.alt}},[t._v("\n\t\t\t\t\t"+t._s(e.caption)+"\n\t\t\t\t")])],1)],1):t._e()}))],1):t._e(),t.images.horiz&&t.images.horiz.length?r("div",{class:["image-container"]},[r("transition-group",{class:["horiz","grid"],attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.images.horiz,function(e,a){return t.phoneVertLoaded?r("div",{key:e.path,staticStyle:{position:"relative"},attrs:{"data-index":a}},[r("router-link",{class:["link"],attrs:{to:"/"+t.type+"/"+t.project.link+"/"+e.path}},[r("picture-query",{attrs:{type:t.type,path:e.path,alt:e.alt}},[t._v("\n\t\t\t\t\t"+t._s(e.caption)+"\n\t\t\t\t")])],1)],1):t._e()}))],1):t._e(),t.images.regular&&t.images.regular.length?r("div",{class:["image-container"]},[r("transition-group",{class:["grid"],attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.images.regular,function(e,a){return t.phoneVertLoaded?r("div",{key:e.path,staticStyle:{position:"relative"},style:{paddingBottom:t.project.content.imageRatio},attrs:{"data-index":a}},[r("router-link",{class:["link"],attrs:{to:"/"+t.type+"/"+t.project.link+"/"+e.path}},[r("picture-query",{attrs:{type:t.type,path:e.path,alt:e.alt}},[t._v("\n\t\t\t\t\t"+t._s(e.caption)+"\n\t\t\t\t")])],1)],1):t._e()}))],1):t._e(),r("transition",{attrs:{name:"fade",appear:""}},[t.showBlurb&&t.project?r("div",{class:["article-header"],staticStyle:{"transition-delay":"1000ms"}},[t.project.content.article?r("p",{class:["description"]},[t._v("\n\t\t\t"+t._s(t.project.content.article)+"\n\t\t")]):t._e(),r("div",{staticClass:"buttons"},[r("router-link",{class:["external"],attrs:{to:"/"+t.type+"/"+t.prevProject.link}},[t._v("\n\t\t\t\t<\n\t\t\t")]),r("router-link",{class:["external"],attrs:{to:"/"+t.type+"/"+t.nextProject.link}},[t._v("\n\t\t\t\t >\n\t\t\t")])],1)]):t._e()])],1):t._e()])],1)},n=[],o=(r("a481"),r("6762"),r("2fdb"),r("b54a"),r("ac6a"),r("456d"),r("be94")),i=(r("cadf"),r("551c"),r("097d"),r("dcd8")),s=r("57f4"),c=r("555f"),p=r("3000"),u=r("47d0"),h=r("6166"),l=r.n(h),d=r("b6a1"),f=r.n(d),m=r("e886"),g=r("f7ad"),j=r("2f62");String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var v={components:{Loader:c["a"],"picture-query":s["a"],"youtube-video":i["a"],external:p["a"],techList:u["a"]},mixins:[m["a"],g["a"]],computed:Object(o["a"])({},Object(j["b"])({getLoading:"getLoading",mainTrans:"getTrans",getSticky:"getSticky"}),{getBase:function(){return"".concat("/","img/portfolio/")},getStartProjectKey:function(){return Object.keys(this.projects).indexOf(this.startProject)},projectNames:function(){if(this.projects)return Object.keys(this.projects)},projectKey:function(){if(this.project){var t=this.projectNames.indexOf(this.project.link);return t}},nextProjectKey:function(){if(void 0!==this.projectKey&&null!==this.projectKey&&!1!==this.projectKey){var t=(1+this.projectKey)%this.projectNames.length;return t}},nextProject:function(){if(this.projects)return this.projects[this.projectNames[this.nextProjectKey]]},prevProjectKey:function(){if(this.projects){var t=this.projectKey-1;return t<0&&(t=this.projectNames.length-1),t}},prevProject:function(){if(this.projects)return this.projects[this.projectNames[this.prevProjectKey]]}}),beforeRouteUpdate:function(t,e,r){var a=this;this.nextProject||r(),t.params.project==this.nextProject.link?this.$store.commit("setTrans",{trans:"fade-right",mode:""}):this.$store.commit("setTrans",{trans:"fade-left",mode:""}),this.$nextTick(function(){a.show=!1,r()})},data:function(){return{phoneHorizLoaded:!1,phoneVertLoaded:!1,show:!1,showBlurb:!1,direction:""}},head:{title:function(){return{inner:(this.project.title||"").capitalize()}},link:function(){return[{rel:"canonical",href:"https://shawnnaquin.github.io/".concat(this.$route.params.type,"/").concat(this.$route.params.project),id:"canonical"}]}},mounted:function(){this.checkPhone(),this.startProject=this.$route.params.project,this.show=!0},watch:{$route:function(t,e){},project:function(t){t&&this.$emit("updateHead")},"$store.state.projects":function(t){this.projectNames.includes(this.$route.params.project)||this.$router.replace("/".concat(this.$route.params.type))}},methods:{pageEnter:function(t,e){var r=this;this.$store.state.resetScroll?(document.body.style.height=this.$store.state.lastScroll+window.innerHeight+"px",this.$scrollTo(":root",100,{offset:this.$store.state.lastScroll})):this.$scrollTo(":root",100),setTimeout(function(){r.showBlurb=!0,document.body.style.height="",e()},100)},pageAfterLeave:function(t){this.show=!0},checkPhone:function(){var t=this,e=new Image;e.src=l.a,e.onload=function(){t.phoneVertLoaded=!0};var r=new Image;r.src=f.a,r.onload=function(){t.phoneHorizLoaded=!0}}}},y=v,b=(r("59ed"),r("2877")),_=Object(b["a"])(y,a,n,!1,null,"2a5edadb",null);_.options.__file="Project.vue";e["default"]=_.exports},"17aa":function(t,e,r){},"1f21":function(t,e,r){"use strict";var a=r("fffa"),n=r.n(a);n.a},"386b":function(t,e,r){var a=r("5ca1"),n=r("79e5"),o=r("be13"),i=/"/g,s=function(t,e,r,a){var n=String(o(t)),s="<"+e;return""!==r&&(s+=" "+r+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+n+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(s),a(a.P+a.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},"47d0":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:["tech-list"]},[t._l(t.techList,function(e){return[r("li",{class:["tech-item"]},[r("router-link",{class:["external","tech-link"],attrs:{to:"/"+t.getProjectLink(e)}},[t._v(t._s(e))])],1)]})],2)},n=[],o={props:{techList:{required:!0,type:Array,default:[]}},methods:{getProjectLink:function(t){return window.encodeURI(t)}}},i=o,s=(r("1f21"),r("2877")),c=Object(s["a"])(i,a,n,!1,null,"d9db15b2",null);c.options.__file="techList.vue";e["a"]=c.exports},"57f4":function(t,e,r){"use strict";var a=function(){var t,e=this,r=e.$createElement,a=e._self._c||r;return a("figure",[a("transition",{attrs:{name:"fade",appear:""}},[e.showLoader?a("p",{class:"loader",style:{color:e.$route.params.image?"white":""}},[e._v("Loading "),a("span",[a("Loader",{attrs:{go:e.showLoader}})],1)]):e._e()]),a("picture",[a("source",{attrs:{media:"(min-width: 900px)",srcset:""+e.getBase+e.type+"/"+e.path+"-lg_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-lg_2x.webp 2x",type:"image/webp"}}),a("source",{attrs:{media:"(min-width: 601px)",srcset:""+e.getBase+e.type+"/"+e.path+"-md_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-md_2x.webp 2x",type:"image/webp"}}),a("source",{attrs:{srcset:""+e.getBase+e.type+"/"+e.path+"-sm_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-sm_2x.webp 2x",type:"image/webp"}}),a("v-lazy-image",{attrs:{src:e.imgSrc,srcset:""+e.getBase+e.type+"/"+e.path+"-sm_1x.jpg 600w, "+e.getBase+e.type+"/"+e.path+"-md_1x.jpg 900w, "+e.getBase+e.type+"/"+e.path+"-lg_1x.jpg 1440w",type:"image/jpeg",alt:e.alt},on:{load:e.setShowLoader}})],1),a("figcaption",{class:["figcaption",(t={},t["blur"]=e.showLoader,t)]},[e._t("default")],2)],1)},n=[],o=r("555f"),i={components:{Loader:o["a"]},data:function(){return{showLoader:!0}},computed:{getBase:function(){return"".concat("/","img/portfolio/")},imgSrc:function(){return"".concat(this.getBase).concat(this.type,"/").concat(this.path,"-lg_1x.jpg")}},methods:{setShowLoader:function(){this.showLoader=!1}},props:{path:{required:!0,type:String},type:{required:!0,type:String},alt:{required:!0,type:String}}},s=i,c=(r("c6f1"),r("2877")),p=Object(c["a"])(s,a,n,!1,null,"e30fd3e2",null);p.options.__file="Picture.vue";e["a"]=p.exports},"59ed":function(t,e,r){"use strict";var a=r("17aa"),n=r.n(a);n.a},6166:function(t,e,r){t.exports=r.p+"img/mobile.vert.65f28bb7.png"},"81cc":function(t,e,r){},b54a:function(t,e,r){"use strict";r("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},b6a1:function(t,e,r){t.exports=r.p+"img/mobile.horiz.a26c0113.png"},c6f1:function(t,e,r){"use strict";var a=r("81cc"),n=r.n(a);n.a},e886:function(t,e,r){"use strict";r("c0d6");e["a"]={data:function(){return{frame:!1}},beforeDestroy:function(){cancelAnimationFrame(this.frame)},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){var r=this,a=200*t.dataset.index;setTimeout(function(){var e=0,a=r.frame=requestAnimationFrame(n);function n(){if(!(t.style.opacity<1))return cancelAnimationFrame(a),void(t.style.opacity=1);requestAnimationFrame(n),t.style.opacity=e+=.08}},a)},leave:function(t,e){}}}},f7ad:function(t,e,r){"use strict";r("a481"),r("7f7f"),r("ac6a"),r("456d"),r("6762"),r("2fdb");var a=r("be94"),n=r("2f62");e["a"]={data:function(){return{type:!1}},computed:Object(a["a"])({},Object(n["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var r in this.$store.state.projects[e]){var a=this.$store.state.projects[e][r].content["techList"],n=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(n.toLocaleLowerCase()))for(var o in a)a[o].toLocaleLowerCase()==n.toLocaleLowerCase()&&(t[r]=this.$store.state.projects[e][r],t[r].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,r){return r.path.includes("mobile")?e.mobile.push(r):r.path.includes("horiz")?e.horiz.push(r):e.regular.push(r),r.path.includes("one.".concat(t.$route.params.project))&&(e.video=r.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),watch:{$route:function(t,e){},"$store.state.projects":function(t){var e=this;Object.keys(t).length>=this.$store.state.types.length&&!Object.keys(this.projects).length&&"tech"!==this.$route.name&&this.$nextTick(function(){e.$router.replace("/"+e.$store.state.types[0])})}},mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}},fffa:function(t,e,r){}}]);
//# sourceMappingURL=project.f087a507.js.map