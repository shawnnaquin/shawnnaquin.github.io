(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["project"],{"07bd":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{class:["project","max-width"],staticStyle:{overflow:"hidden"}},[r("transition",{attrs:{name:t.mainTrans.trans,mode:t.mainTrans.mode,appear:""},on:{afterLeave:t.pageAfterLeave,enter:t.pageEnter}},[t.show?r("article",{},[r("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[t.project?r("div",{class:["article-header"]},[r("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[r("div",[r("h1",[t._v(" "+t._s(t.project.title))]),r("p",[t._v(t._s(t.project.projectDescription))])])]),t.project.content.video.length?r("youtube-video",{class:["video"],attrs:{"video-id":t.project.content.video,"video-img":""+t.getBase+t.type+"/"+t.images.video}}):t._e(),t.project&&(t.project.content.code||t.project.content.externalSite)?r("div",{staticClass:"buttons"},[t.project.content.externalSite?r("a",{ref:"noopener",class:["external"],attrs:{href:t.project.content.externalSite,target:"_blank"}},[t._v(" Live Site "),r("span",{class:["external-span"]},[r("external")],1)]):t._e(),t._v("\n             \n\n            "),t.project.content.code?r("a",{ref:"noopener",class:["external"],attrs:{href:t.project.content.code,target:"_blank"}},[t._v("\n              //code\n            ")]):t._e()]):t._e(),r("div",{class:["built-with"]},[r("h2",[t._v("\n              Built With:\n            ")]),r("techList",{attrs:{"tech-list":t.project.content.techList}})],1)],1):r("div",{class:["article-header"],style:{minHeight:"500px"}},[r("div",[r("h1",[t._v("\n              Project Loading\n              "),r("transition",{attrs:{name:"fade"}},[t.project?t._e():r("span",[t._v("\n                  …\n                ")])])],1)]),r("p",{class:["loading"]},[t._v("\n            LOADING\n            "),r("Loader",{attrs:{go:!t.project}})],1)])]),t.images.mobile&&t.images.mobile.length?r("div",{class:["image-container"]},[r("transition-group",{class:["mobile","grid"],attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.images.mobile,function(e,n){return t.phoneVertLoaded?r("div",{key:e.path,staticStyle:{position:"relative"},attrs:{"data-index":n}},[r("router-link",{class:["link"],attrs:{name:e.path,"arial-label":e.path,title:e.path,to:"/"+t.type+"/"+t.project.link+"/"+e.path}},[r("picture-query",{attrs:{type:t.type,path:e.path,alt:e.alt}},[t._v("\n                "+t._s(e.caption)+"\n              ")])],1)],1):t._e()}))],1):t._e(),t.images.horiz&&t.images.horiz.length?r("div",{class:["image-container"]},[r("transition-group",{class:["horiz","grid"],attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.images.horiz,function(e,n){return t.phoneVertLoaded?r("div",{key:e.path,staticStyle:{position:"relative"},attrs:{"data-index":n}},[r("router-link",{class:["link"],attrs:{to:"/"+t.type+"/"+t.project.link+"/"+e.path,name:e.path,"arial-label":e.path,title:e.path}},[r("picture-query",{attrs:{type:t.type,path:e.path,alt:e.alt}},[t._v("\n                "+t._s(e.caption)+"\n              ")])],1)],1):t._e()}))],1):t._e(),t.images.regular&&t.images.regular.length?r("div",{class:["image-container"]},[r("transition-group",{class:["grid"],attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},t._l(t.images.regular,function(e,n){return t.phoneVertLoaded?r("div",{key:e.path,staticStyle:{position:"relative"},style:{paddingBottom:t.project.content.imageRatio},attrs:{"data-index":n}},[r("router-link",{class:["link"],attrs:{to:"/"+t.type+"/"+t.project.link+"/"+e.path,name:e.path,"arial-label":e.path,title:e.path}},[r("picture-query",{attrs:{type:t.type,path:e.path,alt:e.alt}},[t._v("\n                "+t._s(e.caption)+"\n              ")])],1)],1):t._e()}))],1):t._e(),r("transition",{attrs:{name:"fade",appear:""}},[t.showBlurb&&t.project?r("div",{class:["article-header"],staticStyle:{"transition-delay":"1000ms"}},[t.project.content.article?r("p",{class:["description"],domProps:{innerHTML:t._s(t.project.content.article)}}):t._e(),r("div",{staticClass:"buttons"},[r("router-link",{class:["external"],attrs:{name:t.prevProject.title,"aria-label":t.prevProject.title,title:t.prevProject.title,to:"/"+t.type+"/"+t.prevProject.link}},[t._v("\n              <\n            ")]),r("router-link",{class:["external"],attrs:{name:t.nextProject.title,"aria-label":t.nextProject.title,title:t.nextProject.title,to:"/"+t.type+"/"+t.nextProject.link}},[t._v("\n              >\n            ")])],1)]):t._e()])],1):t._e()])],1)},i=[],a=(r("a481"),r("6762"),r("2fdb"),r("b54a"),r("ac6a"),r("456d"),r("be94")),o=(r("cadf"),r("551c"),r("097d"),r("dcd8")),s=r("57f4"),c=r("555f"),p=r("3000"),l=r("47d0"),h=r("6166"),u=r.n(h),d=r("b6a1"),f=r.n(d),m=r("e886"),j=r("f7ad"),v=r("2f62");String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var g={components:{Loader:c["a"],"picture-query":s["a"],"youtube-video":o["a"],external:p["a"],techList:l["a"]},mixins:[m["a"],j["a"]],computed:Object(a["a"])({},Object(v["b"])({getLoading:"getLoading",mainTrans:"getTrans",getSticky:"getSticky"}),{getBase:function(){return"".concat("/","img/portfolio/")},getStartProjectKey:function(){return Object.keys(this.projects).indexOf(this.startProject)},projectNames:function(){if(this.projects)return Object.keys(this.projects)},projectKey:function(){if(this.project){var t=this.projectNames.indexOf(this.project.link);return t}},nextProjectKey:function(){if(void 0!==this.projectKey&&null!==this.projectKey&&!1!==this.projectKey){var t=(1+this.projectKey)%this.projectNames.length;return t}},nextProject:function(){if(this.projects)return this.projects[this.projectNames[this.nextProjectKey]]},prevProjectKey:function(){if(this.projects){var t=this.projectKey-1;return t<0&&(t=this.projectNames.length-1),t}},prevProject:function(){if(this.projects)return this.projects[this.projectNames[this.prevProjectKey]]}}),beforeRouteUpdate:function(t,e,r){var n=this;this.nextProject||r(),t.params.project==this.nextProject.link?this.$store.commit("setTrans",{trans:"fade-right",mode:""}):this.$store.commit("setTrans",{trans:"fade-left",mode:""}),this.$nextTick(function(){n.show=!1,r()})},data:function(){return{phoneHorizLoaded:!1,phoneVertLoaded:!1,show:!1,showBlurb:!1,direction:"",title:this.$route.params.project}},head:{title:function(){return{inner:this.title}},link:function(){return[{rel:"canonical",href:"https://shawnnaquin.github.io/".concat(this.title,"/").concat(this.$route.params.project),id:"canonical"}]}},mounted:function(){this.checkPhone(),this.startProject=this.$route.params.project,this.show=!0},watch:{$route:function(t){var e=this;this.title=t.params.project,this.$nextTick(function(){e.$emit("updateHead")})},"$store.state.projects":function(){this.projectNames.includes(this.$route.params.project)||this.$router.replace("/".concat(this.$route.params.type))}},methods:{pageEnter:function(t,e){var r=this;this.$store.state.resetScroll?(document.body.style.height=this.$store.state.lastScroll+window.innerHeight+"px",this.$scrollTo(":root",100,{offset:this.$store.state.lastScroll})):this.$scrollTo(":root",100),setTimeout(function(){r.showBlurb=!0,document.body.style.height="",e()},100)},pageAfterLeave:function(){this.show=!0},checkPhone:function(){var t=this,e=new Image;e.src=u.a,e.onload=function(){t.phoneVertLoaded=!0};var r=new Image;r.src=f.a,r.onload=function(){t.phoneHorizLoaded=!0}}}},y=g,b=(r("afa2"),r("2877")),_=Object(b["a"])(y,n,i,!1,null,"c03157f0",null);_.options.__file="Project.vue";e["default"]=_.exports},"386b":function(t,e,r){var n=r("5ca1"),i=r("79e5"),a=r("be13"),o=/"/g,s=function(t,e,r,n){var i=String(a(t)),s="<"+e;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(s),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",r)}},"47d0":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{class:["tech-list"]},[t._l(t.techList,function(e){return[r("li",{key:e,class:["tech-item"]},[r("router-link",{class:["external","tech-link"],attrs:{name:e,"aria-label":e,title:e,to:"/tech/"+t.getProjectLink(e)}},[t._v(t._s(e))])],1)]})],2)},i=[],a={props:{techList:{required:!0,type:Array,default:function(){return[]}}},methods:{getProjectLink:function(t){return window.encodeURI(t.toLocaleLowerCase())}}},o=a,s=(r("ac03"),r("2877")),c=Object(s["a"])(o,n,i,!1,null,"0604fa5a",null);c.options.__file="techList.vue";e["a"]=c.exports},6166:function(t,e,r){t.exports=r.p+"img/mobile.vert.65f28bb7.png"},"90c3":function(t,e,r){},ac03:function(t,e,r){"use strict";var n=r("90c3"),i=r.n(n);i.a},afa2:function(t,e,r){"use strict";var n=r("e8eb"),i=r.n(n);i.a},b54a:function(t,e,r){"use strict";r("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},b6a1:function(t,e,r){t.exports=r.p+"img/mobile.horiz.a26c0113.png"},e886:function(t,e,r){"use strict";e["a"]={data:function(){return{frame:!1}},beforeDestroy:function(){cancelAnimationFrame(this.frame)},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){var r=this,n=200*t.dataset.index;setTimeout(function(){var e=0,n=r.frame=requestAnimationFrame(i);function i(){if(!(t.style.opacity<1))return cancelAnimationFrame(n),void(t.style.opacity=1);requestAnimationFrame(i),t.style.opacity=e+=.08}},n)},leave:function(t,e){}}}},e8eb:function(t,e,r){},f7ad:function(t,e,r){"use strict";r("7f7f"),r("6762"),r("2fdb");var n=r("be94"),i=r("2f62");e["a"]={data:function(){return{type:!1,projectError:!1,techList:[]}},computed:Object(n["a"])({},Object(i["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var r in this.$store.state.projects[e]){var n=this.$store.state.projects[e][r].content["techList"],i=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(i.toLocaleLowerCase()))for(var a in n)this.techList.includes(n[a])||this.techList.push(n[a]),n[a].toLocaleLowerCase()==i.toLocaleLowerCase()&&(t[r]=this.$store.state.projects[e][r],t[r].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,r){return r.path.includes("mobile")?e.mobile.push(r):r.path.includes("horiz")?e.horiz.push(r):e.regular.push(r),r.path.includes("one.".concat(t.$route.params.project))&&(e.video=r.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}}}]);
//# sourceMappingURL=project.15537dc1.js.map