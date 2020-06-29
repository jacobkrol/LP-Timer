(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/lp-logo.4d69f09c.png"},,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/30-seconds-verbal.387bfa74.wav"},function(e,t,a){e.exports=a.p+"static/media/60-seconds-verbal.3ce36467.wav"},function(e,t,a){e.exports=a.p+"static/media/90-seconds-verbal.d15918e6.wav"},,,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(23),s=a.n(l),i=(a(35),a(4)),o=a(2),c=(a(36),a(11)),u=a.n(c);var m=function(){return r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{id:"home-img",src:u.a,alt:"Home"}))};a(42);var p=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Limited Preparation Timer Web Application 2020 - ",r.a.createElement("a",{href:"https://jacobkrol.github.io",target:"_blank",rel:"noopener noreferrer"},"JSK")," - ",r.a.createElement(i.b,{to:"/about"},"Learn More")))};a(43);var d=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/ext"},"Extemporaneous")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/imp"},"Impromptu")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/timer"},"Plain Timer")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/guide"},"How To Use")))};var h=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"LimitedPrep Timer")),r.a.createElement(d,null))},E=a(12),b=a(13),f=a(16),g=a(15),v=a(8),y=(a(44),a(25)),k=a.n(y),T=a(26),w=a.n(T),S=a(27),x=a.n(S),C=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).startTimer=function(){"off"===n.state.status?n.setState({startT:(new Date).getTime(),updateInterval:setInterval(n.updateTimer,10)}):n.setState({pauseSum:n.state.pauseSum+(new Date).getTime()-n.state.pauseT}),n.setState({status:"running"},(function(){document.getElementById("timer-status").innerText=n.state.status[0].toUpperCase()+n.state.status.substr(1)}))},n.pauseTimer=function(){n.setState({pauseT:(new Date).getTime(),status:"paused"},(function(){document.getElementById("timer-status").innerText=n.state.status[0].toUpperCase()+n.state.status.substr(1)}))},n.updateTimer=function(){var e,t,a,r=(new Date).getTime();"running"===n.state.status&&(e=Math.floor((60*n.props.min*1e3-(r-n.state.startT-n.state.pauseSum))/60/1e3),60===(t=61-Math.ceil((r-n.state.startT-n.state.pauseSum)/1e3%60))&&(e++,t=0),t=t<10?"0"+t:t,a=(a=1e3-Math.ceil((r-n.state.startT-n.state.pauseSum)%1e3))<100?a<10?"00"+a:"0"+a:a,e<0&&(e="+"+Math.abs(e+1),t=(t=60-t)<10?"0"+t:t,a=(a=1e3-a)<100?a<10?"00"+a:"0"+a:a),"none"===n.props.mode?(document.getElementById("timer-display-min").innerText=e,document.getElementById("timer-display-sec").innerText=t,n.props.showMS&&(document.getElementById("timer-display-ms").innerText=a)):n.state.isOvertime||(Number(e)===n.props.min-1&&30===Number(t)?n.setState({playVerbal:30}):Number(e)===n.props.min-1&&0===Number(t)?n.setState({playVerbal:60}):Number(e)===n.props.min-2&&30===Number(t)&&n.setState({playVerbal:90,isMuted:!0}),Number(e)<6&&Number(e)>0&&0===Number(t)&&null===n.state.signalText?n.setState({signalText:Number(e)+" min"}):Number(e)<5&&55===Number(t)&&null!==n.state.signalText?n.setState({signalText:null}):0===Number(e)&&[30,15,5,4,3,2,1].includes(Number(t))?n.setState({signalText:Number(t)+" sec"}):0===Number(e)&&[25,10].includes(Number(t))&&null!==n.state.signalText?n.setState({signalText:null}):0===Number(e)&&0===Number(t)&&n.setState({signalText:"TIME UP",isOvertime:!0})))},n.stopTimer=function(){clearInterval(n.state.updateInterval),"none"===n.props.mode?(document.getElementById("timer-display-min").innerText=n.props.min,document.getElementById("timer-display-sec").innerText="00",n.props.showMS&&(document.getElementById("timer-display-ms").innerText="000")):document.getElementById("timer-display-signal").innerText=null,"imp"===n.props.mode&&n.setState({isMuted:!1}),n.setState({startT:0,pauseT:0,pauseSum:0,updateInterval:null,status:"off"},(function(){document.getElementById("timer-status").innerText=n.state.status[0].toUpperCase()+n.state.status.substr(1)}))},n.handleKeyPush=function(e){switch(e.keyCode){case 32:"running"===n.state.status?n.pauseTimer():n.startTimer();break;case 13:!1===n.state.isMuted&&n.setState({isMuted:!0})}},n.state={startT:0,pauseT:0,pauseSum:0,updateInterval:null,status:"off",signalText:null,isOvertime:!1,isMuted:!0,playVerbal:0},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPush),"imp"===this.props.mode&&this.setState({isMuted:!1}),"test"===this.props.mode&&this.setState({signalText:"30 sec"})}},{key:"componentWillUnmount",value:function(){this.state.updateInterval&&clearInterval(this.state.updateInterval)}},{key:"componentDidUpdate",value:function(e,t){if(this.state.playVerbal!==t.playVerbal&&!this.state.isMuted){var a;switch(this.state.playVerbal){case 0:break;case 30:a=k.a;break;case 60:a=w.a;break;case 90:a=x.a}a&&(this.player.src=a,this.player.play().catch((function(e){})))}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"timer-container"},r.a.createElement("audio",{ref:function(t){return e.player=t}}),r.a.createElement("div",{id:"timer-control-panel"},r.a.createElement("p",{id:"timer-status-container"},"Status: ",r.a.createElement("span",{id:"timer-status"},"Off")),r.a.createElement("div",null,"running"===this.state.status?r.a.createElement(v.a,{id:"pause-button",className:"timer-button",onClick:this.pauseTimer,title:"pause",size:30}):r.a.createElement(v.b,{id:"play-button",className:"timer-button",onClick:this.startTimer,title:"play",size:30}),r.a.createElement(v.c,{id:"stop-button",className:"timer-button",onClick:this.stopTimer,title:"stop",size:30}),this.state.isMuted?null:r.a.createElement(v.d,{id:"mute-button",className:"timer-button",onClick:function(){return e.setState({isMuted:!0})},title:"mute",size:30}))),r.a.createElement("div",{id:"timer-display"},"none"===this.props.mode?this.props.showMS?r.a.createElement("p",null,r.a.createElement("span",{id:"timer-display-min"},this.props.min),r.a.createElement("span",{id:"timer-display-sec"},"00"),r.a.createElement("span",{id:"timer-display-ms"},"000")):r.a.createElement("p",null,r.a.createElement("span",{id:"timer-display-min"},this.props.min),r.a.createElement("span",{id:"timer-display-sec"},"00")):r.a.createElement("p",null,r.a.createElement("span",{id:"timer-display-signal"},this.state.signalText))))}}]),a}(r.a.PureComponent);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{mode:"ext",min:7}))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{mode:"imp",min:7}))};var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{mode:"none",min:7}))},M=(a(45),a(14)),j=a(28),O=a(20);var A=function(){return r.a.createElement("div",{id:"how-page"},r.a.createElement("h1",null,"User Guide"),r.a.createElement("h3",null,"General Controls"),r.a.createElement("p",null,"Navigate to the ",r.a.createElement(i.b,{to:"/"},"home page")," at any time using the ",r.a.createElement("img",{id:"logo-tiny",src:u.a,alt:"logo"})," in the top left corner of every page."),r.a.createElement("p",null,"Click ",r.a.createElement(v.b,{className:"button",size:12,title:"play"})," or press SPACE to begin or resume the timer. Click ",r.a.createElement(v.a,{className:"button",size:12,title:"pause"})," or press SPACE to pause the timer. Click ",r.a.createElement(v.c,{className:"button",size:12,title:"stop"})," to stop and reset the timer. Refreshing the page also resets the timer."),r.a.createElement("p",null,r.a.createElement("strong",null,"Status: Off")," represents a new timer."),r.a.createElement("p",null,r.a.createElement("strong",null,"Status: Running")," means the timer is running (even if you can't see it!)"),r.a.createElement("p",null,r.a.createElement("strong",null,"Status: Paused")," represents a timer that has started, but has been paused by the user. When it is resumed, it will continue where it was when paused."),r.a.createElement("h3",null,"Extemporaneous Timer"),r.a.createElement("p",null,r.a.createElement("strong",null,"Duration:")," 7 minutes"),r.a.createElement("p",null,r.a.createElement("strong",null,"Visual Signals:")," 5 min, 4 min, 3 min, 2 min, 1 min, 30 sec, 15 sec, 5 sec, 4 sec, 3 sec, 2 sec, 1 sec, TIME UP"),r.a.createElement("h3",null,"Impromptu Timer"),r.a.createElement("p",null,r.a.createElement("strong",null,"Duration:")," 7 minutes"),r.a.createElement("p",null,r.a.createElement("strong",null,"Verbal Signals:")," 30 sec, 1 min, 1 min 30 sec"),r.a.createElement("p",null,r.a.createElement("strong",null,"Visual Signals:")," 5 min, 4 min, 3 min, 2 min, 1 min, 30 sec, 15 sec, 5 sec, 4 sec, 3 sec, 2 sec, 1 sec, TIME UP"),r.a.createElement("p",null,"Click ",r.a.createElement(v.d,{className:"button",size:12,title:"mute"})," or press ENTER to mute remaining verbal signals."),r.a.createElement("h3",null,"Plain Timer"),r.a.createElement("p",null,r.a.createElement("strong",null,"Duration:")," 7 minutes"),r.a.createElement("p",null,"This mode acts as a regular timer, allowing the user to see every second (and millisecond, if desired) as it counts down."),r.a.createElement("h3",null,"Save This App"),r.a.createElement("p",null,"You can also locally save this app on your device! It appears like a regular app, so it can be easily launched from the home screen, requires no internet connection",r.a.createElement("sup",null,"1"),", and takes up very little storage space",r.a.createElement("sup",null,"2"),". To save the app..."),r.a.createElement("p",null,r.a.createElement("strong",null,"iOS:")," Click ",r.a.createElement(M.b,{size:15,title:"share"}),', and then select "Add to Home Screen ',r.a.createElement("span",{className:"no-break"},r.a.createElement(j.a,{size:15,title:"add icon"}),'"')),r.a.createElement("p",null,r.a.createElement("strong",null,"Android:")," Click ",r.a.createElement(O.a,{size:15,title:"three dots for more"}),', and then select "Add to Home screen"'),r.a.createElement("p",null,r.a.createElement("strong",null,"Chrome (Windows):")," Click ",r.a.createElement(O.a,{size:15,title:"three dots for more"}),', and then select "Install LimitedPrep Timer..."'),r.a.createElement("span",{className:"fine-print"},r.a.createElement("p",null,r.a.createElement("sup",null,"1"),"\xa0\xa0Excludes updates, feedback submission, and third-party links"),r.a.createElement("p",null,r.a.createElement("sup",null,"2"),"\xa0\xa0<1.0Mb. Check the ",r.a.createElement("a",{href:"https://github.com/jacobkrol/LP-Timer/releases",target:"_blank",rel:"noopener noreferrer"},"latest release")," for a more accurate estimate.")),r.a.createElement("h3",null,"More Info"),r.a.createElement("p",null,"To read more about how this website works (for the other nerds), or to submit a bug / feature request for review, visit the ",r.a.createElement(i.b,{to:"/about"},"about page"),"."))},B=a(29),L=(a(46),function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",title:"",type:"",details:"",disabled:!1},e.handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(!e.state.disabled){e.setState({disabled:!0});var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state)},n=null,r="An error has occurred submitting your feedback. Please verify your internet connection and try again later.\n\nError Code: ";fetch("https://lp-timer.herokuapp.com/add",a).then((function(e){return n=e.status,e.text()})).then((function(t){"success"===t?alert("Your feedback has been successfully sent. Thank you for your contribution!"):"error"===t?alert(r+"E1-"+(n?String(n):"0")):alert(r+n),e.setState({disabled:!1})})).catch((function(t){console.log(t),alert(r+"E2-"+(n?String(n):"0")),e.setState({disabled:!1})})),t.preventDefault()}},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Your Name:"),r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name,disabled:this.state.disabled,required:!0}),r.a.createElement("label",null,"Your Email:"),r.a.createElement("input",{type:"email",name:"email",placeholder:"name@example.com",onChange:this.handleChange,value:this.state.email,disabled:this.state.disabled,required:!0}),r.a.createElement("label",null,"Title of Feedback:"),r.a.createElement("input",{type:"text",name:"title",className:"extend",placeholder:"Ex: Verbals not working",onChange:this.handleChange,value:this.state.title,disabled:this.state.disabled,required:!0}),r.a.createElement("label",null,"Type of Feedback:"),r.a.createElement("select",{name:"type",onChange:this.handleChange,value:this.state.type,disabled:this.state.disabled,required:!0},r.a.createElement("option",{value:""},"Choose one..."),r.a.createElement("option",{value:"bug"},"Bug (something isn't working)"),r.a.createElement("option",{value:"enhancement"},"Enhancement (new feature or request)"),r.a.createElement("option",{value:"question"},"Question (further information is requested)\xa0\xa0")),r.a.createElement("label",null,"Feedback Details:"),r.a.createElement("textarea",{name:"details",className:"extend",placeholder:"(optional, but encouraged)",onChange:this.handleChange,value:this.state.details,disabled:this.state.disabled}),r.a.createElement("input",{type:"submit",disabled:this.state.disabled}))}}]),a}(r.a.Component));a(47);var W=function(){return r.a.createElement("div",{id:"about-page"},r.a.createElement("h1",null,"About this App"),r.a.createElement("h3",null,"Submit Feedback"),r.a.createElement("p",null,"Found a bug? Encountered an accessibility concern? Want to see a new feature added? Let me know!"),r.a.createElement(L,null),r.a.createElement("p",null,r.a.createElement(M.a,{size:15,title:"attention"})," Before submitting feedback, please check ",r.a.createElement("a",{href:"https://github.com/jacobkrol/LP-Timer/issues",target:"_blank",rel:"noopener noreferrer"},"if I am already working on it"),"."),r.a.createElement("h3",null,"App Infrastructure"),r.a.createElement("p",null,"The front-end for this progressive web application is built using the JavaScript framework, ",r.a.createElement("a",{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"ReactJS v16.13.1"),". It is hosted on GitHub Pages, and the code is entirely open-source for you to read, nitpick, and expand upon. The pre-build files may be found on ",r.a.createElement("a",{href:"https://github.com/jacobkrol/LP-Timer",target:"_blank",rel:"noopener noreferrer"},"GitHub"),"."),r.a.createElement("p",null,"To handle feedback submission, the back-end is built using ",r.a.createElement("a",{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},"Node.js v13.8.0"),", with the ",r.a.createElement("a",{href:"https://expressjs.com",target:"_blank",rel:"noopener noreferrer"},"Express v4.17.1")," framework. It is hosted using ",r.a.createElement("a",{href:"https://heroku.com",target:"_blank",rel:"noopener noreferrer"},"Heroku")," and implements a CORS-protected REST API endpoint for feedback submission. Feedback is submitted to the database through the endpoint, and via email through an SMTP client. Feedback review is strictly available through the ",r.a.createElement("a",{href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},"Heroku CLI v7.42.1")," or through a locally-accessible endpoint."))};var z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry\xa0\xa0>_<"),r.a.createElement("h2",null,"We couldn't find the page you were looking for."))};var U=function(){return r.a.createElement(i.a,{basename:"/"},r.a.createElement("div",{className:"page-container"},r.a.createElement(m,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:h}),r.a.createElement(o.a,{path:"/ext",component:N}),r.a.createElement(o.a,{path:"/imp",component:I}),r.a.createElement(o.a,{path:"/timer",component:P}),r.a.createElement(o.a,{path:"/guide",component:A}),r.a.createElement(o.a,{path:"/about",component:W}),r.a.createElement(o.a,{component:z})),r.a.createElement(p,null)))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/LP-Timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/LP-Timer","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()}],[[30,1,2]]]);
//# sourceMappingURL=main.4c3c7b36.chunk.js.map