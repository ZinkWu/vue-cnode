(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],p=0,f=[];p<o.length;p++)r=o[p],s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"182e":function(t,e,a){"use strict";var n=a("ba5f"),s=a.n(n);s.a},2856:function(t,e,a){},"2d03":function(t,e,a){},"36de":function(t,e,a){"use strict";var n=a("8a9f"),s=a.n(n);s.a},"56be":function(t,e,a){"use strict";var n=a("8b92"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("top-header"),a("div",{staticClass:"main"},[a("router-view",{attrs:{name:"slidebar"}}),a("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:{name:"root"}}},[n("img",{attrs:{src:a("d686"),alt:""}})]),n("ul",[n("li",[n("router-link",{staticClass:"logo",attrs:{to:{name:"root"}}},[t._v("\n            首页\n            ")])],1),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("新手入门")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("API")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("关于")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("注册")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("登录")])])}],c={name:"top-header"},l=c,u=(a("182e"),a("2877")),p=Object(u["a"])(l,r,o,!1,null,"44ea53a6",null);p.options.__file="header.vue";var f=p.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",{staticClass:"loading"}):t._e(),a("div",{staticClass:"list"},[a("ul",[t._m(0),t._l(t.posts,function(e){return a("li",[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("span",{staticClass:"text"},[a("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count)+"/")]),a("span",{staticClass:"visit_count"},[t._v(t._s(e.visit_count))])]),a("span",{class:[{top:!0===e.top},{good:!0===e.good},{tab:!0!==e.top&&!0!==e.good}]},[t._v(t._s(t._f("tabFormatter")(e)))]),a("router-link",{staticClass:"title",attrs:{to:{name:"post_count",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n                    "+t._s(e.title)+"\n                ")]),a("span",{staticClass:"last-time"},[t._v(t._s(t._f("forTimeData")(e.last_reply_at)))])],1)}),a("li",{staticClass:"button"},[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav"},[a("span",{staticClass:"active"},[t._v("全部")]),a("span",[t._v("精华")]),a("span",[t._v("分享")]),a("span",[t._v("问答")]),a("span",[t._v("招聘")]),a("span",[t._v("客户端测试")])])}],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pageination"},[a("button",{on:{click:t.changeBtn}},[t._v("首页")]),a("button",{on:{click:t.changeBtn}},[t._v("上一页")]),t.currentPage>3?a("button",[t._v("···")]):t._e(),t._l(t.pagebtns,function(e){return a("button",{class:[{currentPage:e===t.currentPage},"pagebtn"],on:{click:function(a){t.changeBtn(e)}}},[t._v(t._s(e))])}),a("button",{on:{click:t.changeBtn}},[t._v("下一页")])],2)},m=[],g={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5,"···"],currentPage:1}},methods:{changeBtn:function(t){if("number"!==typeof t&&"string"!==typeof t)switch(this.currentPage++,t.currentTarget.innerText){case"首页":this.pagebtns=[1,2,3,4,5,"···"],this.changeBtn(1);break;case"上一页":var e=document.getElementsByClassName("currentPage")[0];e.previousElementSibling.click();break;case"下一页":var a=document.getElementsByClassName("currentPage")[0];a.nextElementSibling.click();break;default:break}else{if("string"===typeof t)return!1;this.currentPage=t,t===this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t===this.pagebtns[0]&&1!==this.pagebtns[0]&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1))}this.$emit("handleList",this.currentPage)}}},h=g,b=(a("a8a4"),Object(u["a"])(h,d,m,!1,null,"72217d28",null));b.options.__file="Pagination.vue";var C=b.exports,y={name:"PostList",data:function(){return{isLoading:!0,posts:[],postPage:1}},components:{Pagination:C},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postPage,limit:20}}).then(function(e){t.posts=e.data.data,t.isLoading=!1},function(t){console.log(t)})},renderList:function(t){this.postPage=t,this.getData()}},beforeMount:function(){this.getData()}},P=y,k=(a("56be"),Object(u["a"])(P,_,v,!1,null,"154cf4a8",null));k.options.__file="PostList.vue";var $=k.exports,w={name:"App",components:{topHeader:f,PostList:$}},x=w,L=(a("5c0b"),Object(u["a"])(x,s,i,!1,null,null,null));L.options.__file="App.vue";var j=L.exports,D=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("div",{staticClass:"loading"}):a("div",{staticClass:"post_content"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("\n                "+t._s(t.post.title)+"\n            ")]),a("ul",[a("li",[t._v("• 发布于 "+t._s(t._f("forTimeData")(t.post.create_at)))]),a("li",[t._v("• 作者 "+t._s(t.post.author.loginname))]),a("li",[t._v("• "+t._s(t.post.visit_count)+"次浏览")]),a("li",[t._v("• 来自 "+t._s(t._f("tabFormatter")(t.post)))])])]),a("div",{staticClass:"content"},[a("div",{domProps:{innerHTML:t._s(t.post.content)}})]),t.post.replies.length>0?a("div",{staticClass:"reply-wrapper"},[a("div",{staticClass:"num"},[t._v(t._s(t.post.replies.length)+" 回复")]),t._l(t.post.replies,function(e,n){return a("div",{staticClass:"reply"},[a("div",{staticClass:"user-wrapper"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(e.author.loginname))]),a("span",{staticClass:"time"},[t._v(t._s(n+1)+"楼• "+t._s(t._f("forTimeData")(e.create_at)))])],1),a("p",{domProps:{innerHTML:t._s(e.content)}})])})],2):t._e()])])},O=[],T={name:"Article",data:function(){return{isLoading:!0,post:{}}},methods:{getData:function(){var t=this;this.$axios("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then(function(e){t.post=e.data.data,t.isLoading=!1},function(t){console.log(t)})}},beforeMount:function(){this.getData()},watch:{$route:function(t,e){this.getData()}}},B=T,M=(a("720e"),Object(u["a"])(B,E,O,!1,null,null,null));M.options.__file="Article.vue";var I=M.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userinfo"},[t.isLoading?a("div",{staticClass:"loading"}):a("div",{staticClass:"userinfo-main"},[a("div",{staticClass:"user-wrapper"},[a("router-link",{attrs:{to:{name:"root"}}},[a("p",{staticClass:"to-root"},[t._v("主页 /")])]),a("div",[a("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),a("span",[t._v(t._s(t.userinfo.loginname))]),a("p",{staticClass:"num"},[t._v(t._s(t.userinfo.score)+" 积分")]),a("p",{staticClass:"time"},[t._v("注册时间 "+t._s(t._f("forTimeData")(t.userinfo.create_at)))])])],1),a("p",{staticClass:"bar"},[t._v("最近创建的话题")]),a("div",{staticClass:"topics"},[a("ul",t._l(t.userinfo.recent_topics,function(e,n){return n<=4?a("li",[a("img",{attrs:{src:e.author.avatar_url,alt:""}}),a("router-link",{attrs:{to:{name:"post_count",params:{id:e.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(e.title))])]),a("span",{staticClass:"last-time"},[t._v(t._s(t._f("forTimeData")(e.last_reply_at)))])],1):t._e()}))]),a("p",{staticClass:"bar"},[t._v("最近参与的话题")]),a("div",{staticClass:"replies"},[a("ul",t._l(t.userinfo.recent_replies,function(e){return a("li",[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"post_count",params:{id:e.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(e.title))])]),a("span",{staticClass:"last-time"},[t._v(t._s(t._f("forTimeData")(e.last_reply_at)))])],1)}))])])])},A=[],F=(a("7f7f"),{name:"UserInfo",data:function(){return{isLoading:!0,userinfo:{}}},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then(function(e){t.userinfo=e.data.data,t.isLoading=!1,console.log(t.userinfo)},function(t){console.log(t)})}},beforeMount:function(){this.getData()},watch:{$route:function(t,e){this.getData()}}}),H=F,J=(a("36de"),Object(u["a"])(H,S,A,!1,null,"2cb5f04c",null));J.options.__file="UserInfo.vue";var N=J.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userinfo"},[t.isLoading?a("div"):a("div",{staticClass:"user-wrapper"},[a("div",{staticClass:"bar"},[t._v("个人信息")]),a("div",{staticClass:"user"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[a("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})]),a("span",{staticClass:"name"},[t._v(t._s(t.userinfo.loginname))]),a("p",[t._v("积分 "+t._s(t.userinfo.score))])],1)]),a("div",{staticClass:"topics"},[a("div",{staticClass:"bar"},[t._v("作者最近主题")]),a("ul",t._l(t.userinfo.recent_topics,function(e,n){return n<=4?a("li",[a("router-link",{attrs:{to:{name:"post_count",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1):t._e()}))]),a("div",{staticClass:"replies"},[a("div",{staticClass:"bar"},[t._v("作者最近回复")]),a("ul",t._l(t.userinfo.recent_replies,function(e){return a("li",[a("router-link",{attrs:{to:{name:"post_count",params:{id:e.id,name:e.author.loginname}}}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1)}))])])},q=[],z={name:"SlideBar",data:function(){return{userinfo:{},isLoading:!0}},methods:{getData:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then(function(e){t.userinfo=e.data.data,t.isLoading=!1,console.log(t.userinfo)},function(t){console.log(t)})}},beforeMount:function(){this.getData()}},G=z,K=(a("f33e"),Object(u["a"])(G,U,q,!1,null,"9f52c9aa",null));K.options.__file="SlideBar.vue";var Q=K.exports;n["a"].use(D["a"]);var R=new D["a"]({routes:[{name:"root",path:"/",components:{main:$}},{name:"post_count",path:"/topic/:id&author=:name",components:{main:I,slidebar:Q}},{name:"user_info",path:"/userinfo/:name",components:{main:N}}]}),V=a("bc3a"),W=a.n(V);n["a"].prototype.$axios=W.a,n["a"].config.productionTip=!1,n["a"].filter("forTimeData",function(t){if(!t)return"";var e=new Date(t).getTime(),a=(new Date).getTime()-e;return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}),n["a"].filter("tabFormatter",function(t){return 1==t.top?"置顶":1==t.good?"精华":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}),new n["a"]({router:R,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("2856"),s=a.n(n);s.a},"720e":function(t,e,a){"use strict";var n=a("2d03"),s=a.n(n);s.a},"8a9f":function(t,e,a){},"8b92":function(t,e,a){},a8a4:function(t,e,a){"use strict";var n=a("bebc"),s=a.n(n);s.a},ba5f:function(t,e,a){},bebc:function(t,e,a){},d686:function(t,e,a){t.exports=a.p+"assets/img/cnodejs_light.86f6a7c2.svg"},eced:function(t,e,a){},f33e:function(t,e,a){"use strict";var n=a("eced"),s=a.n(n);s.a}});
//# sourceMappingURL=app.93788168.js.map