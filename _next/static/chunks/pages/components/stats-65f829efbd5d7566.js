(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{9099:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/stats",function(){return t(6803)}])},5438:function(e,s,t){"use strict";t.r(s);var l=t(5893),c=t(7294);t(1664);var r=t(8433);let n=()=>{let[e,s]=(0,c.useState)(null),[t,n]=(0,c.useState)(!1);return((0,c.useEffect)(()=>{n(!0),r.Z.get("//encryptsl.cekuj.net/api/minecraft/stats/blocks").then(e=>e.data).then(e=>{s(e),n(!1)})},[]),t)?(0,l.jsx)("p",{children:"Loading..."}):e?(0,l.jsxs)("div",{className:"col-md-3",children:[(0,l.jsx)("h2",{children:"Největš\xed horn\xedci"}),(0,l.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"#"}),(0,l.jsx)("th",{scope:"col",children:"Jm\xe9no"}),(0,l.jsx)("th",{scope:"col",children:"Vytěžil"})]})}),(0,l.jsx)("tbody",{children:e&&e.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:e.id}),(0,l.jsxs)("td",{children:[(0,l.jsx)("img",{src:"https://visage.surgeplay.com/bust/36/"+e.uuid}),e.username]}),(0,l.jsx)("td",{children:e.blocks})]},e.username))})]})]}):(0,l.jsx)("p",{children:"No profile data"})};s.default=n},6979:function(e,s,t){"use strict";t.r(s);var l=t(5893),c=t(8433),r=t(7294);let n=()=>{let[e,s]=(0,r.useState)(null),[t,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{n(!0),c.Z.get("//encryptsl.cekuj.net/api/minecraft/stats/deaths").then(e=>e.data).then(e=>{s(e),n(!1)})},[]),t)?(0,l.jsx)("p",{children:"Loading..."}):e?(0,l.jsxs)("div",{className:"col-md-3",children:[(0,l.jsx)("h2",{children:"Největš\xed smolaři"}),(0,l.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"#"}),(0,l.jsx)("th",{scope:"col",children:"Jm\xe9no"}),(0,l.jsx)("th",{scope:"col",children:"Zemřel"})]})}),(0,l.jsx)("tbody",{children:e&&e.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:e.id}),(0,l.jsxs)("td",{children:[(0,l.jsx)("img",{src:"https://visage.surgeplay.com/bust/36/"+e.uuid})," ",e.username]}),(0,l.jsx)("td",{children:e.deaths})]},e.username))})]})]}):(0,l.jsx)("p",{children:"No profile data"})};s.default=n},1661:function(e,s,t){"use strict";t.r(s);var l=t(5893),c=t(8433),r=t(7294);let n=()=>{let[e,s]=(0,r.useState)(null),[t,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{n(!0),c.Z.get("//encryptsl.cekuj.net/api/minecraft/stats/kills").then(e=>e.data).then(e=>{s(e),n(!1)})},[]),t)?(0,l.jsx)("p",{children:"Loading..."}):e?(0,l.jsxs)("div",{className:"col-md-3",children:[(0,l.jsx)("h2",{children:"Největš\xed lovci"}),(0,l.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"col",children:"#"}),(0,l.jsx)("th",{scope:"col",children:"Jm\xe9no"}),(0,l.jsx)("th",{scope:"col",children:"Zabil"})]})}),(0,l.jsx)("tbody",{children:e&&e.map(e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:e.id}),(0,l.jsxs)("td",{children:[(0,l.jsx)("img",{src:"https://visage.surgeplay.com/bust/36/"+e.uuid})," ",e.username]}),(0,l.jsx)("td",{children:e.kills})]},e.username))})]})]}):(0,l.jsx)("p",{children:"No profile data"})};s.default=n},6803:function(e,s,t){"use strict";t.r(s);var l=t(5893);t(7294);var c=t(5438),r=t(6979),n=t(1661);let i=()=>(0,l.jsxs)("section",{className:"row justify-content-center p-5 bg-dark text-light",id:"stats",children:[(0,l.jsx)("h1",{className:"text-center",children:"Statistiky"}),(0,l.jsx)(n.default,{}),(0,l.jsx)(c.default,{}),(0,l.jsx)(r.default,{})]});s.default=i}},function(e){e.O(0,[433,664,774,888,179],function(){return e(e.s=9099)}),_N_E=e.O()}]);