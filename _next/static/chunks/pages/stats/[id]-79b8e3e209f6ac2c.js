(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{1187:function(s,e,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats/[id]",function(){return c(9830)}])},9830:function(s,e,c){"use strict";c.r(e);var a=c(5893),l=c(7294),d=c(1163),n=c(1664),i=c.n(n);let t=()=>{let[s,e]=(0,l.useState)(null),[c,n]=(0,l.useState)(!1),t=(0,d.useRouter)(),r=t.query.id,x=()=>{fetch("//encryptsl.cekuj.net/api/minecraft/player/".concat(r),{method:"GET",headers:{accept:"application/json"}}).then(s=>s.json()).then(s=>{e(s),n(!1)})};return((0,l.useEffect)(()=>{x()}),c)?(0,a.jsx)("p",{children:"Loading..."}):s?(0,a.jsxs)("div",{className:"container col-md-9 col-lg-10 px-md-4 my-3",children:[(0,a.jsx)("section",{className:"p-1 mb-4 bg-light rounded-3",children:(0,a.jsxs)("div",{className:"container-fluid py-5",children:[(0,a.jsxs)("h5",{className:"display-5 fw-bold",children:[s.username," #",s.id]}),(0,a.jsx)("p",{className:"col-md-8 fs-4",children:(0,a.jsx)(i(),{href:"/",className:"text-link",children:"ZPĚT"})})]})}),(0,a.jsxs)("section",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-4",children:(0,a.jsxs)("div",{className:"card mb-3 text-center",children:[(0,a.jsx)("div",{className:"card-header text-bg-dark",children:"AKTU\xc1LN\xcd SKIN"}),(0,a.jsx)("div",{className:"card-body",children:(0,a.jsx)("img",{src:"https://visage.surgeplay.com/full/200/"+s.uuid,className:"rounded"})})]})}),(0,a.jsx)("div",{className:"col-xl-8",children:(0,a.jsxs)("div",{className:"card mb-3 text-center",children:[(0,a.jsx)("div",{className:"card-header text-bg-dark",children:"Z\xc1KLADN\xcd STATISTIKY"}),(0,a.jsx)("div",{className:"card-body",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-4",children:[(0,a.jsx)("div",{className:"font-size-h3 font-w500",children:(0,a.jsx)("span",{children:s.blocks})}),(0,a.jsx)("p",{className:"text-muted mt-2 mb-0",children:"Položen\xe9 bloky"})]}),(0,a.jsxs)("div",{className:"col-4",children:[(0,a.jsx)("div",{className:"font-size-h3 font-w500",children:(0,a.jsx)("span",{children:s.kills})}),(0,a.jsx)("p",{className:"text-muted mt-2 mb-0",children:"Zabit\xed"})]}),(0,a.jsxs)("div",{className:"col-4",children:[(0,a.jsx)("div",{className:"font-size-h3 font-w500",children:(0,a.jsx)("span",{children:s.deaths})}),(0,a.jsx)("p",{className:"text-muted mt-2 mb-0",children:"\xdamrt\xed"})]})]})})]})})]})]}):(0,a.jsx)("p",{children:"No profile data"})};e.default=t},1163:function(s,e,c){s.exports=c(880)}},function(s){s.O(0,[664,774,888,179],function(){return s(s.s=1187)}),_N_E=s.O()}]);