(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],n[r]&&f.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"3b36":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r=(s("5c0b"),s("2877")),o={},c=Object(r["a"])(o,n,i,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=(s("7f7f"),s("96cf"),s("1da1")),d=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("authenticated",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"card shadow-sm"},[s("div",{staticClass:"card-body"},[s("line-chart",{staticStyle:{height:"400px"},attrs:{data:t.lineData,options:t.lineOptions}})],1)])])]),s("div",{staticClass:"row"},[s("entry"),s("entry"),s("entry")],1)])},h=[],b=s("d4ec"),m=s("99de"),p=s("7e84"),v=s("262e"),j=s("9ab4"),g=s("60a3"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"authenticated",staticStyle:{"min-height":"100vh"}},[s("Header"),s("div",{staticClass:"container-fluid p-3"},[t._t("default")],2),s("footer",{staticClass:"footer"},[s("div",{staticClass:"contianer-fluid p-3"},[s("chatbot",{attrs:{type:"primary"}})],1)])],1)},w=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"chatbot-slide",mode:"out-in"}},[t.show?t._e():s("button",{staticClass:"btn shadow",class:t.btnClass,on:{click:t.toggle}},[t._v("chat")]),t.show?s("div",{staticClass:"card chat shadow"},[s("h5",{staticClass:"card-header text-right",class:t.headerClass},[s("i",{staticClass:"fas fa-times-circle pointer",on:{click:t.toggle}})]),s("div",{staticClass:"card-body pt-0"},[s("div",{ref:"messageList",staticClass:"messages"},t._l(t.messages,function(e,a){return s("div",{key:a,staticClass:"message my-4",class:{me:e.isMe,bot:!e.isMe}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isMe,expression:"message.isMe"}],staticClass:"row"},[s("div",{staticClass:"text col-10"},[s("div",{staticClass:"alert alert-primary text-left"},[t._v("\n                                "+t._s(e.text)+"\n                            ")])]),s("div",{staticClass:"author col-2"},[t._v("\n                            "+t._s(e.author)+"\n                        ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isMe,expression:"!message.isMe"}],staticClass:"row"},[s("div",{staticClass:"author col-2"},[t._v("\n                            "+t._s(e.author)+"\n                        ")]),s("div",{staticClass:"text col-10"},[s("div",{staticClass:"alert alert-secondary  text-left"},[t._v("\n                                "+t._s(e.text)+"\n                            ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"author col-2",class:{"col-2":!e.isMe,"col-10":e.isMe}}),s("div",{staticClass:"text col-10",class:{"col-10":!e.isMe,"col-2":e.isMe}},[s("p",{staticClass:"mb-0",class:{"text-left":!e.isMe,"text-right":e.isMe}},[t._v(t._s(t._f("DateTime")(e.isoString)))])])])])}))]),s("div",{staticClass:"card-footer bg-white"},[s("div",{staticClass:"row h-100 justify-content-center align-items-center"},[s("div",{staticClass:"col-10"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentMessage,expression:"currentMessage"}],staticClass:"form-control",attrs:{type:"text",placeholder:"type a message..."},domProps:{value:t.currentMessage},on:{input:function(e){e.target.composing||(t.currentMessage=e.target.value)}}})]),s("div",{staticClass:"col-2"},[s("i",{staticClass:"fas fa-paper-plane fa-lg text-primary pointer",on:{click:t.submitMessage}})])])])]):t._e()])},C=[],_=s("bee2"),k=s("bc3a"),x=s.n(k),S=function t(e,s,a){Object(b["a"])(this,t),this.author=e,this.text=s,this.isoString=(new Date).toISOString(),this.isMe=a},M=function(t){function e(){var t;Object(b["a"])(this,e),t=Object(m["a"])(this,Object(p["a"])(e).call(this)),t.messages=[],t.currentMessage="",t.show=!1,t.triggerShowTimeOut=!1,t.apiUrl="",t.apiUrl="https://ce601-chatbot.azurewebsites.net/chat";var s=localStorage.getItem("messages");null!=s&&(t.messages=JSON.parse(s));var a=localStorage.getItem("showMessages");return null!=a&&(t.show=JSON.parse(a)),t}return Object(v["a"])(e,t),Object(_["a"])(e,[{key:"toggle",value:function(){this.show||(this.triggerShowTimeOut=!0),this.show=!this.show}},{key:"scrollMessages",value:function(){var t=this.$refs.messageList;t.scrollTop=t.scrollHeight}},{key:"updated",value:function(){this.show&&(this.triggerShowTimeOut?(setTimeout(function(){this.scrollMessages()}.bind(this),400),this.triggerShowTimeOut=!1):this.scrollMessages())}},{key:"mounted",value:function(){this.show&&this.scrollMessages()}},{key:"submitMessage",value:function(){var t=this;this.messages.push(new S("me",this.currentMessage,!0)),x.a.post(this.apiUrl,{message:this.currentMessage}).then(function(e){t.messages.push(new S("bot",e.data,!1))}),this.currentMessage=""}},{key:"showChanged",value:function(){var t=JSON.stringify(this.show);localStorage.setItem("showMessages",t)}},{key:"messagesChanged",value:function(){var t=JSON.stringify(this.messages);localStorage.setItem("messages",t)}},{key:"btnClass",get:function(){return{"btn-primary":"primary"===this.type,"btn-light":"light"===this.type,"text-primary":"light"===this.type}}},{key:"headerClass",get:function(){return{"bg-primary":"primary"===this.type,"bg-white":"light"===this.type,"text-primary":"light"===this.type,"text-white":"primary"===this.type}}}]),e}(g["c"]);j["a"]([Object(g["b"])(String)],M.prototype,"type",void 0),j["a"]([Object(g["d"])("show")],M.prototype,"showChanged",null),j["a"]([Object(g["d"])("messages")],M.prototype,"messagesChanged",null),M=j["a"]([g["a"]],M);var E=M,L=E,P=Object(r["a"])(L,O,C,!1,null,null,null);P.options.__file="Chatbot.vue";var A=P.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-primary shadow-sm"},[s("span",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Pocket Sets")]),t._m(0),s("div",{staticClass:"navbar-collapse collapse",attrs:{id:"top-nav"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link pointer",attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")])],1),s("li",{staticClass:"nav-item active d-block d-sm-block d-md-none"},[s("router-link",{staticClass:"nav-link pointer",attrs:{to:{name:"account"}}},[t._v("Account")])],1),s("li",{staticClass:"nav-item active d-block d-sm-block d-md-none"},[s("router-link",{staticClass:"nav-link pointer",attrs:{to:{name:"settings"}}},[t._v("Settings")])],1),s("li",{staticClass:"nav-item active d-block d-sm-block d-md-none"},[s("a",{staticClass:"nav-link pointer",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.Logout(e)}}},[t._v("Logout")])])]),s("ul",{staticClass:"navbar-nav my-2 my-md-0"},[s("li",{staticClass:"nav-item dropdown d-none d-md-block"},[t._m(1),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"user-dropdown"}},[s("router-link",{staticClass:"dropdown-item pointer",attrs:{to:{name:"account"}}},[t._v("Account")]),s("router-link",{staticClass:"dropdown-item pointer",attrs:{to:{name:"settings"}}},[t._v("Settings")]),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.Logout(e)}}},[t._v("Logout")])],1)])])])])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#top-nav","aria-controls":"top-nav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"nav-link pointer",attrs:{id:"user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-user-circle fa-2x"})])}],z=function t(){Object(b["a"])(this,t)};z.LOGOUT="user/Logout",z.LOGIN="user/Login";var T=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),Object(_["a"])(e,[{key:"Logout",value:function(t){this.$store.dispatch(z.LOGOUT),this.$router.push({name:"login"})}}]),e}(g["c"]);T=j["a"]([Object(g["a"])({})],T);var $=T,N=$,R=Object(r["a"])(N,I,D,!1,null,null,null);R.options.__file="Header.vue";var U=R.exports,H=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(g["c"]);H=j["a"]([Object(g["a"])({components:{Chatbot:A,Header:U}})],H);var J=H,G=J,F=Object(r["a"])(G,y,w,!1,null,null,null);F.options.__file="Authenticated.vue";var q=F.exports,B=s("65d9"),W=s("1fca"),K=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),Object(_["a"])(e,[{key:"mounted",value:function(){this.renderChart(this.Data,this.Options)}}]),e}(Object(B["mixins"])(W["a"]));j["a"]([Object(g["b"])({default:null})],K.prototype,"Data",void 0),j["a"]([Object(g["b"])({default:null})],K.prototype,"Options",void 0),K=j["a"]([g["a"]],K);var Q,V,X=K,Y=X,Z=Object(r["a"])(Y,Q,V,!1,null,null,null);Z.options.__file="LineChart.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col mt-3"},[s("div",{staticClass:"card bg-primary"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title text-white"},[t._v("04/12/2018")]),s("div",{staticClass:"card-text"},[s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item list-group-item-primary active border-white"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("\n                                Bench\n                            ")]),s("div",{staticClass:"col"},[t._v("\n                                10kg\n                            ")])])]),s("li",{staticClass:"list-group-item list-group-item-primary  active border-white"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v("\n                                Bicep curl\n                            ")]),s("div",{staticClass:"col"},[t._v("\n                                10kg\n                            ")])])])])])])])])}],at=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(g["c"]);at=j["a"]([g["a"]],at);var nt=at,it=nt,rt=Object(r["a"])(it,et,st,!1,null,null,null);rt.options.__file="Entry.vue";var ot=rt.exports,ct=function(t){function e(){var t;return Object(b["a"])(this,e),t=Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Benchpress",backgroundColor:"#6435c9",borderColor:"#6435c9",data:[10,20,22,30,35,50,60],fill:!1},{label:"Bicep curls",fill:!1,backgroundColor:"#007bff",borderColor:"#007bff",data:[5,10,11,12,14,15,18]}]},t.lineOptions={responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Progression in kg"},scales:{yAxes:[{ticks:{suggestedMin:10,suggestedMax:50}}]}},t}return Object(v["a"])(e,t),e}(g["c"]);ct=j["a"]([Object(g["a"])({components:{Authenticated:q,LineChart:tt,Entry:ot}})],ct);var lt=ct,ut=lt,dt=Object(r["a"])(ut,f,h,!1,null,null,null);dt.options.__file="Dashboard.vue";var ft=dt.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("authenticated",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h1",[t._v("Account")])])])])},bt=[],mt=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(g["c"]);mt=j["a"]([Object(g["a"])({components:{Authenticated:q}})],mt);var pt=mt,vt=pt,jt=Object(r["a"])(vt,ht,bt,!1,null,null,null);jt.options.__file="Account.vue";var gt=jt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("authenticated",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h1",[t._v("Settings")])])])])},wt=[],Ot=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(g["c"]);Ot=j["a"]([Object(g["a"])({components:{Authenticated:q}})],Ot);var Ct=Ot,_t=Ct,kt=Object(r["a"])(_t,yt,wt,!1,null,null,null);kt.options.__file="Settings.vue";var xt=kt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("un-authenticated",[s("div",{staticClass:"row justify-content-center align-items-center",staticStyle:{"min-height":"100vh"}},[s("div",{staticClass:"col-lg-4 col-md-6"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-body"},[s("h3",{staticClass:"text-primary text-center mb-3"},[t._v("\n                        Login\n                    ")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.Login(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email *"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password *"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Login"}})]),s("div",{staticClass:"form-group mb-0"},[s("a",{staticClass:"ForgetPwd",attrs:{href:"#"}},[t._v("Forget Password?")])])])])])])])])},Mt=[],Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"bg-primary",staticStyle:{"min-height":"100vh"}},[s("div",{staticClass:"container-fluid"},[t._t("default")],2),s("footer",{staticClass:"footer"},[s("div",{staticClass:"contianer-fluid p-3"},[s("chatbot",{attrs:{type:"light"}})],1)])])},Lt=[],Pt=function(t){function e(){return Object(b["a"])(this,e),Object(m["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(v["a"])(e,t),e}(g["c"]);Pt=j["a"]([Object(g["a"])({components:{Chatbot:A,Header:U}})],Pt);var At=Pt,It=At,Dt=Object(r["a"])(It,Et,Lt,!1,null,null,null);Dt.options.__file="UnAuthenticated.vue";var zt=Dt.exports,Tt=function t(e,s){Object(b["a"])(this,t),this.Email=e,this.Password=s},$t=function(t){function e(){var t;return Object(b["a"])(this,e),t=Object(m["a"])(this,Object(p["a"])(e).call(this)),t.email="",t.password="",t}return Object(v["a"])(e,t),Object(_["a"])(e,[{key:"Login",value:function(t){this.$store.dispatch(z.LOGIN,new Tt(this.email,this.password)),this.$router.push({name:"dashboard"})}}]),e}(g["c"]);$t=j["a"]([Object(g["a"])({components:{UnAuthenticated:zt}})],$t);var Nt=$t,Rt=Nt,Ut=Object(r["a"])(Rt,St,Mt,!1,null,null,null);Ut.options.__file="Login.vue";var Ht=Ut.exports,Jt=s("2f62"),Gt=function t(){Object(b["a"])(this,t),this.Email=localStorage.getItem("email"),this.Password=localStorage.getItem("password")},Ft=function t(){Object(b["a"])(this,t)};Ft.SET_EMAIL="user/SetEmail",Ft.SET_PASSWORD="user/SetPassword",Ft.CLEAR_USER="user/ClearUser";var qt=function t(){Object(b["a"])(this,t),this.Login=function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.commit(Ft.SET_EMAIL,s.Email,{root:!0}),e.commit(Ft.SET_PASSWORD,s.Password,{root:!0});case 2:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}(),this.Logout=function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e.commit(Ft.CLEAR_USER,null,{root:!0});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},Bt=function t(){Object(b["a"])(this,t),this.SetEmail=function(t,e){t.Email=e,localStorage.setItem("email",e)},this.SetPassword=function(t,e){t.Password=e,localStorage.setItem("password",e)},this.ClearUser=function(t){t.Email=null,t.Password=null,localStorage.removeItem("password"),localStorage.removeItem("email")}},Wt=function t(){Object(b["a"])(this,t),this.Email=function(t){return t.Email},this.Password=function(t){return t.Password},this.IsLoggedIn=function(t){return null!=t.Email&&null!=t.Password}};a["default"].use(Jt["a"]);var Kt=function t(){Object(b["a"])(this,t),this.namespaced=!0,this.state=new Gt,this.actions=new qt,this.getters=new Wt,this.mutations=new Bt};a["default"].use(Jt["a"]);var Qt=new Jt["a"].Store({modules:{user:new Kt},state:{},mutations:{},actions:{}}),Vt=function t(){Object(b["a"])(this,t)};Vt.EMAIL="user/Email",Vt.PASSWORD="user/Password",Vt.IS_LOGGED_IN="user/IsLoggedIn",a["default"].use(d["a"]);var Xt=new d["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",component:Ht,meta:{title:"Login"}},{path:"/",name:"dashboard",component:ft,meta:{title:"Dashboard",requiresAuthentication:!0}},{path:"/account",name:"account",component:gt,meta:{title:"Account",requiresAuthentication:!0}},{path:"/settings",name:"settings",component:xt,meta:{title:"settings",requiresAuthentication:!0}}]});Xt.beforeEach(function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,s,a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=Qt.getters[Vt.IS_LOGGED_IN],n||!e.meta.requiresAuthentication){t.next=4;break}return a({name:"login"}),t.abrupt("return");case 4:if("login"!==e.name||!n){t.next=7;break}return a({name:"dashboard"}),t.abrupt("return");case 7:a();case 8:case"end":return t.stop()}},t,this)}));return function(e,s,a){return t.apply(this,arguments)}}());var Yt=Xt,Zt=s("1315");function te(t){return null==t?null:Zt["DateTime"].fromISO(t).toFormat("dd/MM/yyyy")}function ee(t){return null==t?null:Zt["DateTime"].fromISO(t).toFormat("dd/MM/yyyy HH:mm")}function se(t){return null==t?null:Zt["DateTime"].fromISO(t).toFormat("HH:mm")}s("15f5"),s("3b36"),s("4989");a["default"].config.productionTip=!1,a["default"].filter("Date",te),a["default"].filter("DateTime",ee),a["default"].filter("Time",se),new a["default"]({router:Yt,store:Qt,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.72d35a03.js.map