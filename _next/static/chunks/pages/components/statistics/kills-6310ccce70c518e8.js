(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{2333:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/statistics/kills",function(){return t(1661)}])},1661:function(e,s,t){"use strict";t.r(s);var l=t(5893),n=t(8433),c=t(7294);let i=()=>{let[e,s]=(0,c.useState)(null),[t,i]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{i(!0),n.Z.get("//encryptsl.cekuj.net/api/minecraft/stats/kills").then(e=>e.data).then(e=>{s(e),i(!1)})},[]),t)?(0,l.jsx)("p",{children:"Loading..."}):e?(0,l.jsxs)("div",{className:"col-md-3",children:[(0,l.jsx)("h2",{children:"Největš\xed lovci"}),(0,l.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"#"}),(0,l.jsx)("th",{scope:"col",children:"Jm\xe9no"}),(0,l.jsx)("th",{scope:"col",children:"Zabil"})]})}),(0,l.jsx)("tbody",{children:e&&e.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:e.id}),(0,l.jsxs)("td",{children:[(0,l.jsx)("img",{src:"https://visage.surgeplay.com/bust/36/"+e.uuid})," ",e.username]}),(0,l.jsx)("td",{children:e.kills})]},e.username))})]})]}):(0,l.jsx)("p",{children:"No profile data"})};s.default=i}},function(e){e.O(0,[433,774,888,179],function(){return e(e.s=2333)}),_N_E=e.O()}]);