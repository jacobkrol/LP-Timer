(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/30-seconds-verbal.387bfa74.wav"},20:function(e,t,a){e.exports=a.p+"static/media/60-seconds-verbal.3ce36467.wav"},21:function(e,t,a){e.exports=a.p+"static/media/90-seconds-verbal.d15918e6.wav"},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),l=(a(29),a(6)),o=a(1);var c=function(){return r.a.createElement(l.b,{to:"/LP-Timer"},"Home")};a(35);var u=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Limited Preparation Timer Web Application - ",r.a.createElement("a",{href:"https://jacobkrol.github.io",target:"_blank",rel:"noopener noreferrer"},"Jacob Krol")," 2020"))};a(36);var m=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/ext"},"Extemporaneous")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/imp"},"Impromptu")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/timer"},"Plain Timer")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/save"},"Save App")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/contact"},"Contact")))};var p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"LimitedPrep Timer")),r.a.createElement(m,null))},d=a(17),f=a(18),h=a(23),E=a(22),b=a(9),v=(a(37),a(19)),g=a.n(v),y=a(20),T=a.n(y),w=a(21),S=a.n(w),k=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).startTimer=function(){"off"===n.state.status?n.setState({startT:(new Date).getTime(),updateInterval:setInterval(n.updateTimer,10)}):n.setState({pauseSum:n.state.pauseSum+(new Date).getTime()-n.state.pauseT}),n.setState({status:"running"},(function(){document.getElementById("timer-status").innerText=n.state.status[0].toUpperCase()+n.state.status.substr(1)}))},n.pauseTimer=function(){n.setState({pauseT:(new Date).getTime(),status:"paused"},(function(){document.getElementById("timer-status").innerText=n.state.status[0].toUpperCase()+n.state.status.substr(1)}))},n.updateTimer=function(){var e,t,a,r=(new Date).getTime();"running"===n.state.status&&(e=Math.floor((60*n.props.min*1e3-(r-n.state.startT-n.state.pauseSum))/60/1e3),60===(t=61-Math.ceil((r-n.state.startT-n.state.pauseSum)/1e3%60))&&(e++,t=0),t=t<10?"0"+t:t,a=(a=1e3-Math.ceil((r-n.state.startT-n.state.pauseSum)%1e3))<100?a<10?"00"+a:"0"+a:a,e<0&&(e="+"+Math.abs(e+1),t=(t=60-t)<10?"0"+t:t,a=(a=1e3-a)<100?a<10?"00"+a:"0"+a:a),"none"===n.props.mode?(document.getElementById("timer-display-min").innerText=e,document.getElementById("timer-display-sec").innerText=t,n.props.showMS&&(document.getElementById("timer-display-ms").innerText=a)):n.state.isOvertime||(Number(e)===n.props.min-1&&30===Number(t)?n.setState({playVerbal:30}):Number(e)===n.props.min-1&&0===Number(t)?n.setState({playVerbal:60}):Number(e)===n.props.min-2&&30===Number(t)&&n.setState({playVerbal:90}),Number(e)<6&&Number(e)>0&&0===Number(t)&&null===n.state.signalText?n.setState({signalText:Number(e)+" min"}):Number(e)<5&&55===Number(t)&&null!==n.state.signalText?n.setState({signalText:null}):0===Number(e)&&[30,15,5,4,3,2,1].includes(Number(t))?n.setState({signalText:Number(t)+" sec"}):0===Number(e)&&[25,10].includes(Number(t))&&null!==n.state.signalText?n.setState({signalText:null}):0===Number(e)&&0===Number(t)&&n.setState({signalText:"TIME UP",isOvertime:!0})))},n.stopTimer=function(){clearInterval(n.state.updateInterval),"none"===n.props.mode?(document.getElementById("timer-display-min").innerText=n.props.min,document.getElementById("timer-display-sec").innerText="00",n.props.showMS&&(document.getElementById("timer-display-ms").innerText="000")):document.getElementById("timer-display-signal").innerText=null,n.setState({startT:0,pauseT:0,pauseSum:0,updateInterval:null,status:"off"},(function(){document.getElementById("timer-status").innerText=n.state.status[0].toUpperCase()+n.state.status.substr(1)}))},n.handleKeyPush=function(e){switch(console.log("key push event with "+e.keyCode),e.keyCode){case 32:"running"===n.state.status?n.pauseTimer():n.startTimer();break;case 13:!1===n.state.isMuted&&n.setState({isMuted:!0});break;default:console.log("unrecognized key pressed: "+e.keyCode)}},n.state={startT:0,pauseT:0,pauseSum:0,updateInterval:null,status:"off",signalText:null,isOvertime:!1,isMuted:!0,playVerbal:0},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPush),"imp"===this.props.mode&&this.setState({isMuted:!1}),"test"===this.props.mode&&this.setState({signalText:"30 sec"})}},{key:"componentWillUnmount",value:function(){this.state.updateInterval&&clearInterval(this.state.updateInterval)}},{key:"componentDidUpdate",value:function(e,t){if(this.state.playVerbal!==t.playVerbal&&!this.state.isMuted){var a;switch(this.state.playVerbal){case 0:break;case 30:a=g.a;break;case 60:a=T.a;break;case 90:a=S.a}a&&(this.player.src=a,this.player.play())}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("audio",{ref:function(t){return e.player=t}}),r.a.createElement("div",{id:"timer-control-panel"},r.a.createElement("p",{id:"timer-status-container"},"Status: ",r.a.createElement("span",{id:"timer-status"},"Off")),r.a.createElement("div",null,"running"===this.state.status?r.a.createElement(b.a,{id:"pause-button",className:"timer-button",onClick:this.pauseTimer,alt:"pause",size:30}):r.a.createElement(b.b,{id:"play-button",className:"timer-button",onClick:this.startTimer,alt:"play",size:30}),r.a.createElement(b.c,{id:"stop-button",className:"timer-button",onClick:this.stopTimer,alt:"stop",size:30}))),r.a.createElement("div",{id:"timer-display"},"none"===this.props.mode?this.props.showMS?r.a.createElement("p",null,r.a.createElement("span",{id:"timer-display-min"},this.props.min),r.a.createElement("span",{id:"timer-display-sec"},"00"),r.a.createElement("span",{id:"timer-display-ms"},"000")):r.a.createElement("p",null,r.a.createElement("span",{id:"timer-display-min"},this.props.min),r.a.createElement("span",{id:"timer-display-sec"},"00")):r.a.createElement("p",null,r.a.createElement("span",{id:"timer-display-signal"},this.state.signalText))))}}]),a}(r.a.PureComponent);var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mode:"ext",min:7}))};var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mode:"imp",min:7}))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{mode:"none",min:7}))};var M=function(){return r.a.createElement(r.a.Fragment,null)};var C=function(){return r.a.createElement(r.a.Fragment,null)};var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sorry\xa0\xa0>_<"),r.a.createElement("h2",null,"We couldn't find the page you were looking for."))};var B=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"page-container"},r.a.createElement(c,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/LP-Timer",component:p}),r.a.createElement(o.a,{path:"/ext",component:x}),r.a.createElement(o.a,{path:"/imp",component:N}),r.a.createElement(o.a,{path:"/timer",component:I}),r.a.createElement(o.a,{path:"/save",component:M}),r.a.createElement(o.a,{path:"/contact",component:C}),r.a.createElement(o.a,{component:P})),r.a.createElement(u,null)))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/LP-Timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/LP-Timer","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.7239d1f4.chunk.js.map