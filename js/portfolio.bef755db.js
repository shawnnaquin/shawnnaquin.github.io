(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio"],{1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),p=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?p:function(t,e){if(t=a(t),e=o(e,!0),c)try{return p(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},"1aa7":function(t,e,n){},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),a=n("2d00"),o=n("37c8"),s=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},"4c21":function(t,e,n){},5974:function(t,e,n){"use strict";var r=n("4c21"),i=n.n(r);i.a},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),a=n("69a8"),o=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},p=!n("79e5")(function(){return c(Object.preventExtensions({}))}),u=function(t){o(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},h=function(t,e){if(!a(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},l=function(t){return p&&y.NEED&&c(t)&&!a(t,r)&&u(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:h,onFreeze:l}},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("9e1e"),o=n("5ca1"),s=n("2aba"),c=n("67ab").KEY,p=n("79e5"),u=n("5537"),f=n("7f20"),h=n("ca5a"),l=n("2b4c"),y=n("37c8"),m=n("3a72"),d=n("d4c0"),g=n("1169"),v=n("cb7c"),b=n("d3f4"),j=n("6821"),w=n("6a99"),k=n("4630"),O=n("2aeb"),$=n("7bbc"),T=n("11e9"),_=n("86cc"),S=n("0d58"),x=T.f,L=_.f,P=$.f,E=r.Symbol,A=r.JSON,C=A&&A.stringify,D="prototype",I=l("_hidden"),F=l("toPrimitive"),K={}.propertyIsEnumerable,N=u("symbol-registry"),B=u("symbols"),q=u("op-symbols"),z=Object[D],J="function"==typeof E,H=r.QObject,R=!H||!H[D]||!H[D].findChild,U=a&&p(function(){return 7!=O(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=x(z,e);r&&delete z[e],L(t,e,n),r&&t!==z&&L(z,e,r)}:L,W=function(t){var e=B[t]=O(E[D]);return e._k=t,e},G=J&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},M=function(t,e,n){return t===z&&M(q,e,n),v(t),e=w(e,!0),v(n),i(B,e)?(n.enumerable?(i(t,I)&&t[I][e]&&(t[I][e]=!1),n=O(n,{enumerable:k(0,!1)})):(i(t,I)||L(t,I,k(1,{})),t[I][e]=!0),U(t,e,n)):L(t,e,n)},Y=function(t,e){v(t);var n,r=d(e=j(e)),i=0,a=r.length;while(a>i)M(t,n=r[i++],e[n]);return t},Q=function(t,e){return void 0===e?O(t):Y(O(t),e)},V=function(t){var e=K.call(this,t=w(t,!0));return!(this===z&&i(B,t)&&!i(q,t))&&(!(e||!i(this,t)||!i(B,t)||i(this,I)&&this[I][t])||e)},X=function(t,e){if(t=j(t),e=w(e,!0),t!==z||!i(B,e)||i(q,e)){var n=x(t,e);return!n||!i(B,e)||i(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=P(j(t)),r=[],a=0;while(n.length>a)i(B,e=n[a++])||e==I||e==c||r.push(e);return r},tt=function(t){var e,n=t===z,r=P(n?q:j(t)),a=[],o=0;while(r.length>o)!i(B,e=r[o++])||n&&!i(z,e)||a.push(B[e]);return a};J||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(q,n),i(this,I)&&i(this[I],t)&&(this[I][t]=!1),U(this,t,k(1,n))};return a&&R&&U(z,t,{configurable:!0,set:e}),W(t)},s(E[D],"toString",function(){return this._k}),T.f=X,_.f=M,n("9093").f=$.f=Z,n("52a7").f=V,n("2621").f=tt,a&&!n("2d00")&&s(z,"propertyIsEnumerable",V,!0),y.f=function(t){return W(l(t))}),o(o.G+o.W+o.F*!J,{Symbol:E});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)l(et[nt++]);for(var rt=S(l.store),it=0;rt.length>it;)m(rt[it++]);o(o.S+o.F*!J,"Symbol",{for:function(t){return i(N,t+="")?N[t]:N[t]=E(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in N)if(N[e]===t)return e},useSetter:function(){R=!0},useSimple:function(){R=!1}}),o(o.S+o.F*!J,"Object",{create:Q,defineProperty:M,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),A&&o(o.S+o.F*(!J||p(function(){var t=E();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(b(e)||void 0!==t)&&!G(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),r[1]=e,C.apply(A,r)}}),E[D][F]||n("32e9")(E[D],F,E[D].valueOf),f(E,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},c9e5:function(t,e,n){"use strict";n.r(e);var r=function(){var t,e,n,r=this,i=r.$createElement,a=r._self._c||i;return a("div",{class:["max-width"],staticStyle:{overflow:"hidden"}},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r.type?a("h1",{key:r.type,staticClass:"push"},[Object.keys(r.projects).length?a("b",[r._v("\n        "+r._s(r.getTrueCaps(r.type))+"\n        "),Object.keys(r.projects).length>1?a("b",[r._v("Projects")]):a("b",[r._v("Project")])]):a("b",{},[r._v("\n        Loading Projects\n      ")]),a("transition",{attrs:{name:"fade"}},[Object.keys(r.projects).length?r._e():a("span",[r._v("\n          …\n        ")])])],1):r._e()]),a("main",{style:{position:"relative",minHeight:"500px"}},[a("transition",{attrs:{name:"fade",appear:""}},[Object.keys(r.projects).length?r._e():a("p",{key:r.type,class:["loading"]},[r._v("LOADING "),a("Loader",{attrs:{go:!Object.keys(r.projects).length}})],1)]),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{afterEnter:r.pageAfterEnter}},[r.projects?a("div",{key:r.type,ref:"portfolio",class:["portfolio",r.direction,(t={},t["one"]=1===Object.keys(r.projects).length,t),(e={},e["two"]=2===Object.keys(r.projects).length,e),(n={},n["three"]=3===Object.keys(r.projects).length,n)]},r._l(r.projects,function(t){return a("router-link",{key:t.link,class:["link",t.link],style:{transitionDelay:String(50*r.getIndex(t.link))+"ms"},attrs:{to:"/"+r.getType(t.link)+"/"+t.link,"data-name":t.link,name:t.title,"aria-label":t.title,title:t.title}},[a("div",{class:["main-description"]},[a("h2",[r._v(r._s(t.title))]),a("small",[r._v(r._s(t.projectDescription))])]),a("div",{class:"image"},[a("picture-query",{attrs:{type:r.getType(t.link),path:t.mainImage.path,alt:t.mainImage.alt}},[a("h3",[r._v(r._s(t.mainImage.alt))]),a("p",[r._v(r._s(t.mainImage.caption))])])],1)])})):r._e()])],1),a("transition",{attrs:{name:"fade",appear:""}},[r.showButtons?a("div",{key:r.showButtons,class:["buttons"]},[a("router-link",{class:["external"],attrs:{name:r.prevType,"aria-label":r.prevType,title:r.prevType,to:"/"+r.prevType},nativeOn:{click:function(t){r.setDirection("left")}}},[r._v("\n        <\n      ")]),a("router-link",{class:["external"],attrs:{name:r.nextType,"aria-label":r.nextType,title:r.nextType,to:"/"+r.nextType},nativeOn:{click:function(t){r.setDirection("right")}}},[r._v("\n        >\n      ")])],1):r._e()])],1)},i=[],a=(n("456d"),n("ac4d"),n("8a81"),n("ac6a"),n("a481"),n("7f7f"),n("be94")),o=(n("cadf"),n("551c"),n("097d"),n("2f62")),s=n("555f"),c=n("57f4"),p=n("e886"),u=n("f7ad"),f=n("c0d6");String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var h={components:{Loader:s["a"],"picture-query":c["a"]},data:function(){return{direction:"",showButtons:!1}},head:{title:function(){return{inner:this.pageTitle}},meta:function(){var t="https://shawnnaquin.github.io/img/meta/code.jpg",e=this.pageTitle,n="".concat(e).concat(window.metaTitle),r="View Shawn's freelance ".concat(e," portfolio projects. These ").concat(e," projects demonstrate how various front-end technologies can be combined to display ").concat(e," projects on your device. Please contact Shawn for more details.");return[{id:"item-name",itemprop:"name",content:n},{id:"twitter-title",name:"twitter:title",content:n},{id:"og-title",property:"og:title",content:n},{id:"meta-description",name:"description",content:r},{id:"item-description",itemprop:"description",content:r},{id:"twitter-description",name:"twitter:description",content:r},{id:"og-description",property:"og:description",content:r},{id:"item-image",itemprop:"image",content:t},{id:"twitter-image",name:"twitter:image",content:t},{id:"og-image",property:"og:image",content:t}]},link:function(){return[{rel:"canonical",href:"https://shawnnaquin.github.io/?p=".concat(this.$route.path),id:"canonical"}]}},computed:Object(a["a"])({},Object(o["b"])({getLoading:"getLoading",types:"getTypes",getTrans:"getTrans"}),{typeKey:function(){var t=this.types.indexOf(this.$route.params.type);return-1===t&&(t=0),t},nextTypeKey:function(){return(1+this.typeKey)%this.types.length},prevTypeKey:function(){var t=this.typeKey-1;return t<0&&(t=this.types.length-1),t},prevType:function(){return this.types[this.prevTypeKey]},nextType:function(){return this.types[this.nextTypeKey]},pageTitle:function(){var t=this.getTrueCaps(this.type);return t&&t.length&&(t=t.capitalize()),this.type?t:this.$route.params.type}}),beforeRouteEnter:function(t,e,n){"techtype"!=t.name||"marketing"!=t.params.type&&"website"!=t.params.type&&"interactive"!=t.params.type||n("/tech"),"website"!==t.params.type&&"marketing"!==t.params.type&&"interactive"!==t.params.type&&"tech"!==t.name&&"techtype"!==t.name?n("/"+f["a"].state.types[0]):n()},beforeRouteUpdate:function(t,e,n){this.showButtons=!1,n(),"techtype"!=t.name||"marketing"!=t.params.type&&"website"!=t.params.type&&"interactive"!=t.params.type||this.$router.replace("/tech"),"website"!==t.params.type&&"marketing"!==t.params.type&&"interactive"!==t.params.type&&"tech"!==t.name&&"techtype"!==t.name?this.$router.replace("/"+f["a"].state.types[0]):n()},beforeRouteLeave:function(t,e,n){if("techtype"!=t.name||"marketing"!=t.params.type&&"website"!=t.params.type&&"interactive"!=t.params.type||this.$router.replace("/tech"),t.params.type||n(),t.params.type&&"website"!==t.params.type&&"marketing"!==t.params.type&&"interactive"!==t.params.type&&"tech"!==t.name&&"techtype"!==t.name)this.$router.replace("/"+f["a"].state.types[0]);else{this.direction="",this.showButtons=!1;var r=0;if(this.$refs.portfolio&&this.$refs.portfolio.children&&t.params.project){var i=!0,a=!1,o=void 0;try{for(var s,c=this.$refs.portfolio.children[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var p=s.value;p.style.transition="opacity 200ms ease-out",p.style.transitionDelay=50*r+"ms",p.getAttribute("data-name")!=t.params.project&&(p.style.opacity=0),r++}}catch(u){a=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}}setTimeout(function(){n()},50*r+100)}},mixins:[p["a"],u["a"]],created:function(){"techtype"!=this.$route.name||"marketing"!=this.$route.params.type&&"website"!=this.$route.params.type&&"interactive"!=this.$route.params.type||this.$router.replace("/tech"),"website"!==this.$route.params.type&&"marketing"!==this.$route.params.type&&"interactive"!==this.$route.params.type&&"tech"!==this.$route.name&&"techtype"!==this.$route.name&&this.$router.replace("/"+f["a"].state.types[0])},mounted:function(){this.showButtons=!0},watch:{$route:function(t){this.setProjects(t.params.type),this.$emit("updateHead")},projects:function(t){var e=this.typeKey-1;e<0&&(e=this.types.length-1),"techtype"==this.$route.name&&!Object.keys(t).length&&this.techList.length&&this.$router.replace("/tech")}},methods:{pageAfterEnter:function(){this.direction="",this.showButtons=!0,this.$scrollTo(":root")},getTrueCaps:function(t){if(Object.keys(this.projects).length){for(var e=this.projects[Object.keys(this.projects)[0]].content["techList"],n=null,r=0;r<e.length;r++)if(t.toLocaleLowerCase()==e[r].toLocaleLowerCase())return e[r];return null===n?t:void 0}},setDirection:function(t){this.direction=t},getIndex:function(t){return Object.keys(this.projects).indexOf(t)}}},l=h,y=(n("5974"),n("f1a2"),n("2877")),m=Object(y["a"])(l,r,i,!1,null,"49398316",null);m.options.__file="Portfolio.vue";e["default"]=m.exports},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),a=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var o,s=n(t),c=a.f,p=0;while(s.length>p)c.call(t,o=s[p++])&&e.push(o)}return e}},e886:function(t,e,n){"use strict";e["a"]={data:function(){return{frame:!1}},beforeDestroy:function(){cancelAnimationFrame(this.frame)},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){var n=this,r=200*t.dataset.index;setTimeout(function(){var e=0,r=n.frame=requestAnimationFrame(i);function i(){if(!(t.style.opacity<1))return cancelAnimationFrame(r),void(t.style.opacity=1);requestAnimationFrame(i),t.style.opacity=e+=.08}},r)},leave:function(t,e){}}}},f1a2:function(t,e,n){"use strict";var r=n("1aa7"),i=n.n(r);i.a},f7ad:function(t,e,n){"use strict";n("7f7f"),n("6762"),n("2fdb");var r=n("be94"),i=n("2f62");e["a"]={data:function(){return{type:!1,projectError:!1,techList:[]}},computed:Object(r["a"])({},Object(i["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var n in this.$store.state.projects[e]){var r=this.$store.state.projects[e][n].content["techList"],i=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(i.toLocaleLowerCase()))for(var a in r)this.techList.includes(r[a])||this.techList.push(r[a]),r[a].toLocaleLowerCase()==i.toLocaleLowerCase()&&(t[n]=this.$store.state.projects[e][n],t[n].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,n){return n.path.includes("mobile")?e.mobile.push(n):n.path.includes("horiz")?e.horiz.push(n):e.regular.push(n),n.path.includes("one.".concat(t.$route.params.project))&&(e.video=n.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),watch:{projects:function(t){t&&this.$emit("updateHead")},project:function(t){t&&this.$emit("updateHead")}},mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}}}]);
//# sourceMappingURL=portfolio.bef755db.js.map