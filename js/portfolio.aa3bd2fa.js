(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["portfolio"],{1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=o(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),o=n("2d00"),a=n("37c8"),s=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"4c21":function(t,e,n){},"57f4":function(t,e,n){"use strict";var r=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("figure",[r("transition",{attrs:{name:"fade",appear:""}},[e.showLoader?r("p",{class:"loader",style:{color:e.$route.params.image?"white":""}},[e._v("Loading "),r("span",[r("Loader",{attrs:{go:e.showLoader}})],1)]):e._e()]),r("picture",[r("source",{attrs:{media:"(min-width: 900px)",srcset:""+e.getBase+e.type+"/"+e.path+"-lg_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-lg_2x.webp 2x",type:"image/webp"}}),r("source",{attrs:{media:"(min-width: 601px)",srcset:""+e.getBase+e.type+"/"+e.path+"-md_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-md_2x.webp 2x",type:"image/webp"}}),r("source",{attrs:{srcset:""+e.getBase+e.type+"/"+e.path+"-sm_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-sm_2x.webp 2x",type:"image/webp"}}),r("v-lazy-image",{attrs:{src:e.imgSrc,srcset:""+e.getBase+e.type+"/"+e.path+"-sm_1x.jpg 600w, "+e.getBase+e.type+"/"+e.path+"-md_1x.jpg 900w, "+e.getBase+e.type+"/"+e.path+"-lg_1x.jpg 1440w",type:"image/jpeg",alt:e.alt},on:{load:e.setShowLoader}})],1),r("figcaption",{class:["figcaption",(t={},t["blur"]=e.showLoader,t)]},[e._t("default")],2)],1)},i=[],o=n("555f"),a={components:{Loader:o["a"]},data:function(){return{showLoader:!0}},computed:{getBase:function(){return"".concat("/","img/portfolio/")},imgSrc:function(){return"".concat(this.getBase).concat(this.type,"/").concat(this.path,"-lg_1x.jpg")}},methods:{setShowLoader:function(){this.showLoader=!1}},props:{path:{required:!0,type:String},type:{required:!0,type:String},alt:{required:!0,type:String}}},s=a,c=(n("5b1b"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,"ccf52416",null);u.options.__file="Picture.vue";e["a"]=u.exports},5974:function(t,e,n){"use strict";var r=n("4c21"),i=n.n(r);i.a},"5b1b":function(t,e,n){"use strict";var r=n("b06c"),i=n.n(r);i.a},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),a=n("86cc").f,s=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return c(Object.preventExtensions({}))}),p=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";p(t)}return t[r].i},l=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;p(t)}return t[r].w},h=function(t){return u&&y.NEED&&c(t)&&!o(t,r)&&p(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:l,onFreeze:h}},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(r(t))}},8026:function(t,e,n){},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("9e1e"),a=n("5ca1"),s=n("2aba"),c=n("67ab").KEY,u=n("79e5"),p=n("5537"),f=n("7f20"),l=n("ca5a"),h=n("2b4c"),y=n("37c8"),d=n("3a72"),m=n("d4c0"),g=n("1169"),b=n("cb7c"),v=n("d3f4"),w=n("6821"),j=n("6a99"),_=n("4630"),x=n("2aeb"),O=n("7bbc"),S=n("11e9"),k=n("86cc"),L=n("0d58"),$=S.f,T=k.f,P=O.f,E=r.Symbol,B=r.JSON,A=B&&B.stringify,D="prototype",I=h("_hidden"),F=h("toPrimitive"),K={}.propertyIsEnumerable,N=p("symbol-registry"),C=p("symbols"),q=p("op-symbols"),J=Object[D],z="function"==typeof E,R=r.QObject,W=!R||!R[D]||!R[D].findChild,G=o&&u(function(){return 7!=x(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=$(J,e);r&&delete J[e],T(t,e,n),r&&t!==J&&T(J,e,r)}:T,M=function(t){var e=C[t]=x(E[D]);return e._k=t,e},U=z&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},Y=function(t,e,n){return t===J&&Y(q,e,n),b(t),e=j(e,!0),b(n),i(C,e)?(n.enumerable?(i(t,I)&&t[I][e]&&(t[I][e]=!1),n=x(n,{enumerable:_(0,!1)})):(i(t,I)||T(t,I,_(1,{})),t[I][e]=!0),G(t,e,n)):T(t,e,n)},Q=function(t,e){b(t);var n,r=m(e=w(e)),i=0,o=r.length;while(o>i)Y(t,n=r[i++],e[n]);return t},H=function(t,e){return void 0===e?x(t):Q(x(t),e)},V=function(t){var e=K.call(this,t=j(t,!0));return!(this===J&&i(C,t)&&!i(q,t))&&(!(e||!i(this,t)||!i(C,t)||i(this,I)&&this[I][t])||e)},X=function(t,e){if(t=w(t),e=j(e,!0),t!==J||!i(C,e)||i(q,e)){var n=$(t,e);return!n||!i(C,e)||i(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=P(w(t)),r=[],o=0;while(n.length>o)i(C,e=n[o++])||e==I||e==c||r.push(e);return r},tt=function(t){var e,n=t===J,r=P(n?q:w(t)),o=[],a=0;while(r.length>a)!i(C,e=r[a++])||n&&!i(J,e)||o.push(C[e]);return o};z||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(q,n),i(this,I)&&i(this[I],t)&&(this[I][t]=!1),G(this,t,_(1,n))};return o&&W&&G(J,t,{configurable:!0,set:e}),M(t)},s(E[D],"toString",function(){return this._k}),S.f=X,k.f=Y,n("9093").f=O.f=Z,n("52a7").f=V,n("2621").f=tt,o&&!n("2d00")&&s(J,"propertyIsEnumerable",V,!0),y.f=function(t){return M(h(t))}),a(a.G+a.W+a.F*!z,{Symbol:E});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=L(h.store),it=0;rt.length>it;)d(rt[it++]);a(a.S+a.F*!z,"Symbol",{for:function(t){return i(N,t+="")?N[t]:N[t]=E(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in N)if(N[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!z,"Object",{create:H,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),B&&a(a.S+a.F*(!z||u(function(){var t=E();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(v(e)||void 0!==t)&&!U(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,A.apply(B,r)}}),E[D][F]||n("32e9")(E[D],F,E[D].valueOf),f(E,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},b06c:function(t,e,n){},c9e5:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["max-width"],staticStyle:{overflow:"hidden"}},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[t.type?n("h1",{key:t.type,staticClass:"push"},[t._v("\n\t\t\t"+t._s(t.getTrueCaps(t.type))+" Projects\n\t\t\t"),n("transition",{attrs:{name:"fade"}},[t.projects?t._e():n("span",[t._v("\n\t\t\t\t\t…\n\t\t\t\t")])])],1):t._e()]),n("div",{staticStyle:{position:"relative"}},[n("transition",{attrs:{name:"fade",appear:""}},[t.projects?t._e():n("p",{key:t.type,class:["loading"]},[t._v("LOADING "),n("Loader",{attrs:{go:!t.projects}})],1)]),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""},on:{afterEnter:t.pageAfterEnter}},[t.projects?n("div",{key:t.type,ref:"portfolio",class:["portfolio",t.direction]},t._l(t.projects,function(e,r){return n("router-link",{class:["link",e.link],style:{transitionDelay:String(50*t.getIndex(e.link))+"ms"},attrs:{to:"/"+t.getType(e.link)+"/"+e.link,"data-name":e.link}},[n("div",{class:["main-description"]},[n("h3",[t._v(t._s(e.title))]),n("small",[t._v(t._s(e.projectDescription))])]),n("div",{class:"image"},[n("picture-query",{attrs:{type:t.getType(e.link),path:e.mainImage.path,alt:e.mainImage.alt}},[n("h3",[t._v(t._s(e.mainImage.alt))]),n("p",[t._v(t._s(e.mainImage.caption))])])],1)])})):t._e()])],1),n("transition",{attrs:{name:"fade",appear:""}},[t.showButtons?n("div",{key:t.showButtons,class:["buttons"]},[n("router-link",{class:["external"],attrs:{to:"/"+t.prevType},nativeOn:{click:function(e){t.setDirection("left")}}},[t._v("\n\t\t\t\t<\n\t\t\t")]),n("router-link",{class:["external"],attrs:{to:"/"+t.nextType},nativeOn:{click:function(e){t.setDirection("right")}}},[t._v("\n\t\t\t\t>\n\t\t\t")])],1):t._e()])],1)},i=[],o=(n("456d"),n("ac4d"),n("8a81"),n("ac6a"),n("be94")),a=n("2f62"),s=n("555f"),c=n("57f4"),u=n("e886"),p=n("f7ad"),f={components:{Loader:s["a"],"picture-query":c["a"]},data:function(){return{direction:"",showButtons:!1}},computed:Object(o["a"])({},Object(a["b"])({getLoading:"getLoading",types:"getTypes",getTrans:"getTrans"}),{typeKey:function(){var t=this.types.indexOf(this.$route.params.type);return-1===t&&(t=0),t},nextTypeKey:function(){return(1+this.typeKey)%this.types.length},prevTypeKey:function(){var t=this.typeKey-1;return t<0&&(t=this.types.length-1),t},prevType:function(){return this.types[this.prevTypeKey]},nextType:function(){return this.types[this.nextTypeKey]}}),beforeRouteUpdate:function(t,e,n){this.showButtons=!1,n()},beforeRouteLeave:function(t,e,n){this.direction="",this.showButtons=!1;var r=0,i=!0,o=!1,a=void 0;try{for(var s,c=this.$refs.portfolio.children[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;u.style.transition="opacity 200ms ease-out",u.style.transitionDelay=50*r+"ms",u.getAttribute("data-name")!=t.params.project&&(u.style.opacity=0),r++}}catch(p){o=!0,a=p}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}setTimeout(function(){n()},50*r+100)},mixins:[u["a"],p["a"]],mounted:function(){this.showButtons=!0},watch:{$route:function(t,e){this.setProjects(t.params.type)},projects:function(t){var e=this.typeKey-1;e<0&&(e=this.types.length-1)}},methods:{pageAfterEnter:function(t){this.direction="",this.showButtons=!0,this.$scrollTo(":root")},getTrueCaps:function(t){if(Object.keys(this.projects).length){for(var e=this.projects[Object.keys(this.projects)[0]].content["techList"],n=null,r=0;r<e.length;r++)if(t.toLocaleLowerCase()==e[r].toLocaleLowerCase())return e[r];return null===n?t:void 0}},setDirection:function(t){this.direction=t},getIndex:function(t){return Object.keys(this.projects).indexOf(t)}}},l=f,h=(n("5974"),n("cb8d"),n("2877")),y=Object(h["a"])(l,r,i,!1,null,"64e68363",null);y.options.__file="Portfolio.vue";e["default"]=y.exports},cb8d:function(t,e,n){"use strict";var r=n("8026"),i=n.n(r);i.a},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),o=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,s=n(t),c=o.f,u=0;while(s.length>u)c.call(t,a=s[u++])&&e.push(a)}return e}},e886:function(t,e,n){"use strict";n("c0d6");e["a"]={data:function(){return{frame:!1}},beforeDestroy:function(){cancelAnimationFrame(this.frame)},methods:{beforeEnter:function(t){t.style.opacity=0},enter:function(t,e){var n=this,r=200*t.dataset.index;setTimeout(function(){var e=0,r=n.frame=requestAnimationFrame(i);function i(){if(!(t.style.opacity<1))return cancelAnimationFrame(r),void(t.style.opacity=1);requestAnimationFrame(i),t.style.opacity=e+=.08}},r)},leave:function(t,e){}}}},f7ad:function(t,e,n){"use strict";n("a481"),n("7f7f"),n("ac6a"),n("456d"),n("6762"),n("2fdb");var r=n("be94"),i=n("2f62");e["a"]={data:function(){return{type:!1}},computed:Object(r["a"])({},Object(i["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var n in this.$store.state.projects[e]){var r=this.$store.state.projects[e][n].content["techList"],i=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(i.toLocaleLowerCase()))for(var o in r)r[o].toLocaleLowerCase()==i.toLocaleLowerCase()&&(t[n]=this.$store.state.projects[e][n],t[n].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,n){return n.path.includes("mobile")?e.mobile.push(n):n.path.includes("horiz")?e.horiz.push(n):e.regular.push(n),n.path.includes("one.".concat(t.$route.params.project))&&(e.video=n.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),watch:{$route:function(t,e){},"$store.state.projects":function(t){var e=this;Object.keys(t).length>=this.$store.state.types.length&&!Object.keys(this.projects).length&&"tech"!==this.$route.name&&this.$nextTick(function(){e.$router.replace("/"+e.$store.state.types[0])})}},mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}}}]);
//# sourceMappingURL=portfolio.aa3bd2fa.js.map