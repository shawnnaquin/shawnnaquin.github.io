(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["image"],{"386b":function(t,e,a){var i=a("5ca1"),s=a("79e5"),r=a("be13"),n=/"/g,o=function(t,e,a,i){var s=String(r(t)),o="<"+e;return""!==a&&(o+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",a)}},"57f4":function(t,e,a){"use strict";var i=function(){var t,e=this,a=e.$createElement,i=e._self._c||a;return i("figure",[i("transition",{attrs:{name:"fade",appear:""}},[e.showLoader?i("p",{class:"loader",style:{color:e.$route.params.image?"white":""}},[e._v("Loading "),i("span",[i("Loader",{attrs:{go:e.showLoader}})],1)]):e._e()]),i("picture",[i("source",{attrs:{media:"(min-width: 900px)",srcset:""+e.getBase+e.type+"/"+e.path+"-lg_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-lg_2x.webp 2x",type:"image/webp"}}),i("source",{attrs:{media:"(min-width: 601px)",srcset:""+e.getBase+e.type+"/"+e.path+"-md_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-md_2x.webp 2x",type:"image/webp"}}),i("source",{attrs:{srcset:""+e.getBase+e.type+"/"+e.path+"-sm_1x.webp 1x, "+e.getBase+e.type+"/"+e.path+"-sm_2x.webp 2x",type:"image/webp"}}),i("v-lazy-image",{attrs:{src:e.imgSrc,srcset:""+e.getBase+e.type+"/"+e.path+"-sm_1x.jpg 600w, "+e.getBase+e.type+"/"+e.path+"-md_1x.jpg 900w, "+e.getBase+e.type+"/"+e.path+"-lg_1x.jpg 1440w",type:"image/jpeg",alt:e.alt},on:{load:e.setShowLoader}})],1),i("figcaption",{class:["figcaption",(t={},t["blur"]=e.showLoader,t)]},[e._t("default")],2)],1)},s=[],r=a("555f"),n={components:{Loader:r["a"]},data:function(){return{showLoader:!0}},computed:{getBase:function(){return"".concat("/","img/portfolio/")},imgSrc:function(){return"".concat(this.getBase).concat(this.type,"/").concat(this.path,"-lg_1x.jpg")}},methods:{setShowLoader:function(){this.showLoader=!1}},props:{path:{required:!0,type:String},type:{required:!0,type:String},alt:{required:!0,type:String}}},o=n,c=(a("c32c"),a("2877")),h=Object(c["a"])(o,i,s,!1,null,"92db294a",null);h.options.__file="Picture.vue";e["a"]=h.exports},"6c9f":function(t,e,a){"use strict";var i=a("9ffd"),s=a.n(i);s.a},"9ffd":function(t,e,a){},afc0:function(t,e,a){"use strict";var i=a("fab8"),s=a.n(i);s.a},b54a:function(t,e,a){"use strict";a("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c32c:function(t,e,a){"use strict";var i=a("e092"),s=a.n(i);s.a},e092:function(t,e,a){},f7ad:function(t,e,a){"use strict";a("a481"),a("7f7f"),a("ac6a"),a("456d"),a("6762"),a("2fdb");var i=a("be94"),s=a("2f62");e["a"]={data:function(){return{type:!1}},computed:Object(i["a"])({},Object(s["b"])(["getProject"]),{projects:function(){if(!this.type)return!1;var t=this.getProject({name:this.type});if(!t)for(var e in t={},this.$store.state.projects)for(var a in this.$store.state.projects[e]){var i=this.$store.state.projects[e][a].content["techList"],s=decodeURI(this.$route.params.type);if(!this.$store.state.types.includes(s.toLocaleLowerCase()))for(var r in i)i[r].toLocaleLowerCase()==s.toLocaleLowerCase()&&(t[a]=this.$store.state.projects[e][a],t[a].type=e)}return t},project:function(){return!!this.$route.params.project&&this.projects[this.$route.params.project]},images:function(){var t=this;return!!this.project&&this.project.content.images.reduce(function(e,a){return a.path.includes("mobile")?e.mobile.push(a):a.path.includes("horiz")?e.horiz.push(a):e.regular.push(a),a.path.includes("one.".concat(t.$route.params.project))&&(e.video=a.path),e},{mobile:[],regular:[],horiz:[],video:!1})}}),watch:{"$store.state.projects":function(t){var e=this;Object.keys(t).length>=this.$store.state.types.length&&!Object.keys(this.projects).length&&"tech"!==this.$route.name&&this.$nextTick(function(){e.$router.replace("/"+e.$store.state.types[0])})}},mounted:function(){this.setProjects(this.$route.params.type)},methods:{getType:function(t){return this.$store.state.types.includes(this.type)?this.type:this.projects[t].type},setProjects:function(t){var e=this;this.type=t,this.$nextTick(function(){e.$store.dispatch("setProjects",t)})}}}},fab8:function(t,e,a){},feec:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"background",class:["background"],style:{height:t.height}},[a("div",{directives:[{name:"hammer",rawName:"v-hammer:swipe",value:t.swipe,expression:"swipe",arg:"swipe"}],ref:"swipe",class:["swipe"]}),a("router-link",{class:["close"],attrs:{to:t.routeBack}},[a("close")],1),a("button",{class:["external"],on:{click:function(e){t.goToImage()}}},[t._v(" > ")]),a("button",{class:["external"],on:{click:function(e){t.goToPrevImage()}}},[t._v(" < ")]),a("div",{class:[t.orientation,"grid"]},[a("div",[a("transition",{attrs:{name:t.trans,mode:"out-in",appear:""}},[t.image?a("picture-query",{key:t.image.path,ref:"image",attrs:{type:t.type,path:t.image.path,alt:t.image.alt?t.image.alt:""}},[a("p",[t._v(t._s(t.image.caption))])]):t._e()],1)],1)])],1)},s=[],r=(a("a481"),a("b54a"),a("ac6a"),a("6762"),a("2fdb"),a("cadf"),a("551c"),a("097d"),a("57f4")),n=a("417c"),o=a("f7ad"),c=a("5d6e"),h={mixins:[o["a"],c["a"]],components:{"picture-query":r["a"],close:n["a"]},data:function(){return{index:0,imageTypes:["mobile","horiz","regular"],trans:"fade-left"}},head:{title:function(){return{inner:this.$route.params.image}},link:function(){return[{rel:"canonical",href:"https://shawnnaquin.github.io/".concat(this.$route.params.type,"/").concat(this.$route.params.project,"/").concat(this.$route.params.image),id:"canonical"}]}},computed:{orientation:function(){if(this.$route.params.image){for(var t=["mobile","horiz"],e=null,a=0;a<t.length;a++){var i=t[a];if(this.$route.params.image.includes(i)){e=i;break}}return null===e&&(e="regular"),e}},getImageIndex:function(){var t=this;if(!this.images||!this.images[this.orientation])return!1;var e=null;return this.images[this.orientation].forEach(function(a,i){a.path==t.$route.params.image&&(e=i)}),e},nextImage:function(){return!(!this.images||!this.images[this.orientation])&&(this.getImageIndex+1)%(this.images[this.orientation].length+1)},prevImage:function(){return this.getImageIndex-1},imageBase:function(){return"/".concat(this.type,"/").concat(this.project.link,"/")},prevImagePath:function(){return this.prevImage<0?"".concat(this.images[this.changeImageType(!0)][this.images[this.changeImageType(!0)].length-1].path):"".concat(this.images[this.orientation][this.prevImage].path)},nextImagePath:function(){return!(!this.images||!this.images[this.orientation])&&(this.nextImage>this.images[this.orientation].length-1?"".concat(this.images[this.changeImageType()][0].path):"".concat(this.images[this.orientation][this.nextImage].path))},image:function(){return!!this.images&&this.images[this.orientation][this.getImageIndex]},routeBack:function(){return this.project?"/".concat(this.type,"/").concat(this.project.link):""}},watch:{$route:function(t,e){this.images&&(e.params.image==this.prevImagePath?this.trans="fade-left":e.params.image==this.nextImagePath&&(this.trans="fade-right"))}},methods:{keyPress:function(){var t=this;window.onkeydown=function(e){switch(e.keyCode){case 27:t.$router.push(t.routeBack);break;case 37:t.goToPrevImage();break;case 38:t.goToPrevImage();break;case 39:t.goToImage();break;case 40:t.goToImage();break;default:return}}},changeImageType:function(t){var e=this,a=function(a){var i=a+1;return t&&(i=a-1<0?e.imageTypes.length-1:a-1),i%e.imageTypes.length},i=!1,s=a(this.imageTypes.indexOf(this.orientation)),r=function t(){e.images[e.imageTypes[s]].length?i=e.imageTypes[s]:(s=a(s),t())};return r(),i},goToImage:function(){this.$router.replace(this.imageBase+this.nextImagePath)},goToPrevImage:function(){this.$router.replace(this.imageBase+this.prevImagePath)},swipe:function(t){switch(t.direction){case 4:this.goToPrevImage();break;case 2:this.goToImage();break;case 8:this.goToPrevImage();break;case 16:this.goToImage();break;default:break}}},beforeDestroy:function(){window.onkeydown=!1,this.$store.commit("toggleNoScroll"),this.forceNoTouchMove=!1,this.heightTrigger=!1},mounted:function(){var t=this;this.keyPress(),this.$store.commit("toggleNoScroll"),this.forceNoTouchMove=!0,this.$nextTick(function(){t.heightTrigger=!0})}},u=h,p=(a("6c9f"),a("afc0"),a("2877")),g=Object(p["a"])(u,i,s,!1,null,"617f6032",null);g.options.__file="Image.vue";e["default"]=g.exports}}]);
//# sourceMappingURL=image.ceb85661.js.map