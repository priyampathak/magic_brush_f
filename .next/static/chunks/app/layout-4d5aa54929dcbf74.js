(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2244:function(e,t,a){Promise.resolve().then(a.bind(a,6600)),Promise.resolve().then(a.t.bind(a,4089,23)),Promise.resolve().then(a.t.bind(a,2445,23))},6600:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var r=a(7437),l=a(2265),s=a(703),x=a(2732),i={src:"/_next/static/media/cart.c2a2c0cd.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVcDRhcDBdbDBdbCxdbCxZaCxZZCRRVAhNbCxdWBxVaCxZaCxZbCxdbCxdaCxZbCxdaCxZbCxdaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZbDBdaCxZaCxZbDBdbDBdaCxZaCxZaCxZaCxZaCxZbDBdaCxZuuga9AAAAKHRSTlMAAAAAAAAAAAEBAgcWGiQsLC85PEVGS1FeYWt1f5OWnp/S1dfb4eLuYTdMxAAAAEZJREFUeNoNxkUSgDAQBMAhyyDB3d3//0FSfWl0FbUom4ingA6VC/bPdux3C6bfaxSAdZpcPjTrZV4bmuQjh5LwJMwkieQHp58Eoipp808AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/menu.62b78576.png",height:250,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEWGICCFICCGHx+FHx+GICCFICCGHx+FHx+FHx+FHx+FHx+GICCGHx+FHx+FHx+GICCGHx+FHx+FHx9LfUJQAAAAE3RSTlMAAAAAAgICAi0uS1xdXWGWmJigsYlc7AAAAD5JREFUeNo1ykEOgCAQBMHZGdwVUED+/1iVhKQPfShQkGhCmX2MPgsUKb6E3Op115b3nLAU7odz4efHBoECX0uRAhIbjo0DAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/menu-cross.0afc5af2.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAALVBMVEWFICCFHx+FHx+FHx+FHx+FHx+FHx+FICCFICCFHx+FICCFHx+FICCFHx+FHx9r90vyAAAADnRSTlMAAAIDBCkqPD09REX3+JQUVqIAAAAvSURBVHjaY1AUNhBiEJ0oGcjA/nrdRAbDNbeFGRzX3BZh4ABxxSZKBDIoijgIAQDciQsodjbj5wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},c={src:"/_next/static/media/user.ed589fcb.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEWGJSWIICCFHx+PGhp2AQGEHx+FICCEICCGHh6FHx+GHx+FHx+GHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx9oIdfTAAAAIXRSTlMAAAAAAAQFBQUMDg4PDxkjJyhVVlpbYGFiY2VnaGlrbHFQm7xUAAAARklEQVR42g3GxwGAIBAEwPWMGIAjg6L0X6XMa0DcrG1M4Dpe51QZbVClKDQEylJmCj2790fPu2rn9PJhvqMQ8dlAnIxJTD+VbgQZpO3qfAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},A=a(8792);function h(){let[e,t]=(0,l.useState)(0),[a,h]=(0,l.useState)(!1),[n,g]=(0,l.useState)(!0),[f,m]=(0,l.useState)(null);function u(){for(let e of document.cookie.split(";")){let[t,a]=e.trim().split("=");if("token"===t)return a}return null}return(0,l.useEffect)(()=>{null==u()&&h(!0),async function(){try{let e=u();if(!e)throw h(!0),Error("Token not found in cookie");let t=await fetch("http://localhost:4000/api/magic_brush/".concat(e),{headers:{Authorization:"".concat(e)}});if(!t.ok)throw Error("Failed to fetch user data");let a=await t.json();m(a)}catch(e){}finally{g(!1)}}()},[]),(0,r.jsxs)("nav",{className:" bg-fuchsia-100 shadow-lg shadow-fuchsia-200 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 mb-20",children:[(0,r.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,r.jsx)(A.default,{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,r.jsx)(s.default,{className:" h-22 w-32",src:x.Z,alt:"Logo",width:100,height:100})}),(0,r.jsxs)("div",{className:"lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-6",children:[(0,r.jsx)(A.default,{href:"/pages/login",className:"flex items-center space-x-3 rtl:space-x-reverse",children:a||n?(0,r.jsx)(s.default,{className:"h-8 w-8 hidden lg:block",src:c,alt:"Logo",width:100,height:100}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:f.first_name}),(0,r.jsx)(s.default,{className:"h-8 w-8 hidden lg:block",src:c,alt:"Logo",width:100,height:100})]})}),(0,r.jsx)(A.default,{href:"/pages/cart",children:(0,r.jsx)(s.default,{className:"h-8 w-16 pl-8 hidden lg:block",src:i,alt:"cart",width:100,height:100})}),0===e?(0,r.jsx)(s.default,{className:"h-6 w-14 mb-6 pl-8 lg:hidden",src:d,alt:"menu",width:100,height:100,onClick:()=>t(1)}):(0,r.jsx)(s.default,{className:"h-6 w-14 mb-6 pl-8 lg:hidden",src:o,alt:"menu",width:100,height:100,onClick:()=>t(0)})]}),(0,r.jsx)("div",{className:"hidden lt-lg:flex w-full lg:flex md:w-auto md:order-1",id:"navbar-sticky",children:(0,r.jsxs)("ul",{className:"flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0",children:[(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold ",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/categories",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Categories"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/about",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/services",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/contact",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Contact"})})]})})]}),0===e?(0,r.jsx)("div",{className:" h-80 hidden justify-center items-center text-center",children:(0,r.jsxs)("ul",{className:"p-4 font-medium border md:border-0",children:[(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/categories",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Categories"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/about",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/services",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/contact",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/login",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Login"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/cart",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Cart"})})]})}):(0,r.jsx)("div",{className:" h-80 flex justify-center items-center text-center",children:(0,r.jsxs)("ul",{className:"p-4 font-medium border md:border-0",children:[(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/categories",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Categories"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/about",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/services",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/contact",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/login",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Login"})}),(0,r.jsx)("li",{children:(0,r.jsx)(A.default,{href:"/pages/cart",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Cart"})})]})})]})}},2445:function(){},2732:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.51c27e9b.png",height:272,width:510,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAYElEQVR42mNAB5snTGaEsTsd3IQZmrWN9ZrUDJSa1PQ1mzQMJZt1TMybtU0MmjSNdJu1jK0ZgJKqjar6nkAFvk1aRiIthpamjUq6Bo0qevZNqvoKYKNa9M2VgBJcDFgAAMraFagpnITfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},4089:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=2244)}),_N_E=e.O()}]);