(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/spinner.235b9b3e.gif"},16:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=n(4),s=n(1),l={search:""},u={isPending:!1,robots:[],error:""},d=n(2),h=n(10),f=Object(d.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(s.a)(Object(s.a)({},e),{},{search:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(s.a)(Object(s.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{isPending:!1,robots:t.payload});case"REQUEST_ROBOTS_FAILED":return Object(s.a)(Object(s.a)({},e),{},{isPending:!1,error:t.payload});default:return e}}}),m=Object(d.d)(f,Object(d.a)(h.a)),b=function(e){return a.a.createElement("div",{className:"tc bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.name,"?size=200x200"),alt:"avatar_of_".concat(e.name)}),a.a.createElement("div",null,a.a.createElement("h2",null,e.name),a.a.createElement("p",null,e.email)))},g=function(e){var t=e.robots.filter((function(t){return t.username.toLowerCase().includes(e.value.toLowerCase())}));return a.a.createElement("div",{className:"pa4 cardList"},""===e.value?e.robots.map((function(e,t){return a.a.createElement(b,{name:e.username,email:e.email,key:e.id})})):t.map((function(e,t){return a.a.createElement(b,{name:e.username,email:e.email,key:e.id})})))},v=n(11),E=n.n(v),p=function(e){return a.a.createElement("div",{className:"tc ma3"},a.a.createElement("input",{"aria-label":"Search Box",className:"search-box",type:"search",placeholder:"Search Robots",onChange:function(t){return e.changeHandler(t)},value:e.value,autoFocus:!0}))},w=function(e){return a.a.createElement("div",{style:{overflow:"scroll",overflowX:"hidden",border:"0.8px solid #007546",height:"68.5vh"}},e.children)},O=n(12),S=n(13),y=n(15),R=n(14),j=function(e){Object(y.a)(n,e);var t=Object(R.a)(n);function n(e){var r;return Object(O.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(S.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",{className:"error-text"},"Sorry, Something went wrong !"):this.props.children}}]),n}(r.Component),_=Object(i.b)((function(e){return{search:e.searchRobots.search,robots:e.getRobots.robots,isPending:e.getRobots.isPending,error:e.getRobots.error}}),(function(e){return{searchHandler:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},request:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))((function(e){var t=e.searchHandler,n=e.search,o=e.robots,c=e.request,i=e.isPending;return Object(r.useEffect)((function(){c()}),[c]),a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"tc title-font"},"Robofriends"),a.a.createElement(p,{value:n,changeHandler:t}),i?a.a.createElement("div",{className:"loading-div"},a.a.createElement("img",{src:E.a,alt:"loading",className:"loading"})):a.a.createElement(w,null,a.a.createElement(j,null,a.a.createElement(g,{value:n,robots:o}))))})),N=(n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);c.a.render(a.a.createElement(i.a,{store:m},a.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.f972695d.chunk.js.map