(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(25),r=n.n(i),c=(n(67),n(13)),o=n(14),s=n(17),u=n(15),m=n(18),d=n(58),h=n.n(d),p=n(60),E=n.n(p),v=n(61),f=n.n(v),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,{style:{background:"#2b2727"}},l.a.createElement(E.a,null,l.a.createElement(f.a,{variant:"h6",color:"inherit"},"IT Clicker"))))}}]),t}(a.Component),k=n(38),j=n.n(k),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleCode=function(){localStorage.setItem("lines",n.state.lines),n.setState({lines:n.state.lines+n.state.linesPerClick})},n.reset=function(){localStorage.setItem("lines",0),n.setState({lines:0})},n.state={lines:parseInt(localStorage.getItem("lines"))||0,linesPerSec:2,linesPerClick:1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){localStorage.setItem("lines",e.state.lines),e.setState({lines:e.state.lines+e.state.linesPerSec})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Lines: ",this.state.lines),l.a.createElement("p",null,"Lines/Click: ",this.state.linesPerClick),l.a.createElement("p",null,"Lines/Second: ",this.state.linesPerSec),l.a.createElement("p",null,l.a.createElement(j.a,{onClick:this.handleCode},"Code")),l.a.createElement("p",null,l.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:this.reset},"RESET")))}}]),t}(a.Component),g=n(26),y=n.n(g),C=(n(157),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(b,null)),l.a.createElement(y.a,{container:!0,spacing:0,justify:"center",alignItems:"stretch",style:{paddingTop:"62px"}},l.a.createElement(y.a,{item:!0,md:3}),l.a.createElement(y.a,{item:!0,md:7},l.a.createElement(O,null)),l.a.createElement(y.a,{item:!0,md:2})))}}]),t}(a.Component)),w=n(163);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,n){e.exports=n(161)},67:function(e,t,n){}},[[62,2,1]]]);
//# sourceMappingURL=main.b125f338.chunk.js.map