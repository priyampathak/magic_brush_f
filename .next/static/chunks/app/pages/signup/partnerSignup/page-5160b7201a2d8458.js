(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{6802:function(e,t,r){Promise.resolve().then(r.bind(r,3138))},6600:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(7437),s=r(2265),l=r(703),i=r(2732),d={src:"/_next/static/media/cart.c2a2c0cd.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVcDRhcDBdbDBdbCxdbCxZaCxZZCRRVAhNbCxdWBxVaCxZaCxZbCxdbCxdaCxZbCxdaCxZbCxdaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZaCxZbDBdaCxZaCxZbDBdbDBdaCxZaCxZaCxZaCxZaCxZbDBdaCxZuuga9AAAAKHRSTlMAAAAAAAAAAAEBAgcWGiQsLC85PEVGS1FeYWt1f5OWnp/S1dfb4eLuYTdMxAAAAEZJREFUeNoNxkUSgDAQBMAhyyDB3d3//0FSfWl0FbUom4ingA6VC/bPdux3C6bfaxSAdZpcPjTrZV4bmuQjh5LwJMwkieQHp58Eoipp808AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/menu.62b78576.png",height:250,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEWGICCFICCGHx+FHx+GICCFICCGHx+FHx+FHx+FHx+FHx+GICCGHx+FHx+FHx+GICCGHx+FHx+FHx9LfUJQAAAAE3RSTlMAAAAAAgICAi0uS1xdXWGWmJigsYlc7AAAAD5JREFUeNo1ykEOgCAQBMHZGdwVUED+/1iVhKQPfShQkGhCmX2MPgsUKb6E3Op115b3nLAU7odz4efHBoECX0uRAhIbjo0DAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},c={src:"/_next/static/media/menu-cross.0afc5af2.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAALVBMVEWFICCFHx+FHx+FHx+FHx+FHx+FHx+FICCFICCFHx+FICCFHx+FICCFHx+FHx9r90vyAAAADnRSTlMAAAIDBCkqPD09REX3+JQUVqIAAAAvSURBVHjaY1AUNhBiEJ0oGcjA/nrdRAbDNbeFGRzX3BZh4ABxxSZKBDIoijgIAQDciQsodjbj5wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},x={src:"/_next/static/media/user.ed589fcb.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEWGJSWIICCFHx+PGhp2AQGEHx+FICCEICCGHh6FHx+GHx+FHx+GHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx+FHx9oIdfTAAAAIXRSTlMAAAAAAAQFBQUMDg4PDxkjJyhVVlpbYGFiY2VnaGlrbHFQm7xUAAAARklEQVR42g3GxwGAIBAEwPWMGIAjg6L0X6XMa0DcrG1M4Dpe51QZbVClKDQEylJmCj2790fPu2rn9PJhvqMQ8dlAnIxJTD+VbgQZpO3qfAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},n=r(8792);function h(){let[e,t]=(0,s.useState)(0),[r,h]=(0,s.useState)(!1),[A,u]=(0,s.useState)(!0),[g,m]=(0,s.useState)(null);function f(){for(let e of document.cookie.split(";")){let[t,r]=e.trim().split("=");if("token"===t)return r}return null}return(0,s.useEffect)(()=>{null==f()&&h(!0),async function(){try{let e=f();if(!e)throw h(!0),Error("Token not found in cookie");let t=await fetch("http://localhost:4000/api/magic_brush/".concat(e),{headers:{Authorization:"".concat(e)}});if(!t.ok)throw Error("Failed to fetch user data");let r=await t.json();m(r)}catch(e){}finally{u(!1)}}()},[]),(0,a.jsxs)("nav",{className:" bg-fuchsia-100 shadow-lg shadow-fuchsia-200 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 mb-20",children:[(0,a.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,a.jsx)(n.default,{href:"/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:(0,a.jsx)(l.default,{className:" h-22 w-32",src:i.Z,alt:"Logo",width:100,height:100})}),(0,a.jsxs)("div",{className:"lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-6",children:[(0,a.jsx)(n.default,{href:"/pages/login",className:"flex items-center space-x-3 rtl:space-x-reverse",children:r||A?(0,a.jsx)(l.default,{className:"h-8 w-8 hidden lg:block",src:x,alt:"Logo",width:100,height:100}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:g.first_name}),(0,a.jsx)(l.default,{className:"h-8 w-8 hidden lg:block",src:x,alt:"Logo",width:100,height:100})]})}),(0,a.jsx)(n.default,{href:"/pages/cart",children:(0,a.jsx)(l.default,{className:"h-8 w-16 pl-8 hidden lg:block",src:d,alt:"cart",width:100,height:100})}),0===e?(0,a.jsx)(l.default,{className:"h-6 w-14 mb-6 pl-8 lg:hidden",src:o,alt:"menu",width:100,height:100,onClick:()=>t(1)}):(0,a.jsx)(l.default,{className:"h-6 w-14 mb-6 pl-8 lg:hidden",src:c,alt:"menu",width:100,height:100,onClick:()=>t(0)})]}),(0,a.jsx)("div",{className:"hidden lt-lg:flex w-full lg:flex md:w-auto md:order-1",id:"navbar-sticky",children:(0,a.jsxs)("ul",{className:"flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold ",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/categories",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Categories"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/about",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/services",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/contact",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Contact"})})]})})]}),0===e?(0,a.jsx)("div",{className:" h-80 hidden justify-center items-center text-center",children:(0,a.jsxs)("ul",{className:"p-4 font-medium border md:border-0",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/categories",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Categories"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/about",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/services",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/contact",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/login",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Login"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/cart",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Cart"})})]})}):(0,a.jsx)("div",{className:" h-80 flex justify-center items-center text-center",children:(0,a.jsxs)("ul",{className:"p-4 font-medium border md:border-0",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/categories",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Categories"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/about",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/services",className:"block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/contact",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/login",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Login"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/pages/cart",className:"block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold",children:"Cart"})})]})})]})}},3138:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(7437),s=r(6600),l=r(2265),i=r(8792),d=r(7907);function o(){let[e,t]=(0,l.useState)(""),[r,o]=(0,l.useState)(""),[c,x]=(0,l.useState)(""),[n,h]=(0,l.useState)(""),[A,u]=(0,l.useState)(null),g=(0,d.useRouter)();(0,l.useEffect)(()=>{null!=function(){for(let e of document.cookie.split(";")){let[t,r]=e.trim().split("=");if("token"===t)return r}return null}()&&(0,d.redirect)("/pages/profile")});let m=async t=>{t.preventDefault();try{let t=await fetch("http://localhost:4000/api/magic_brush/partners/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r,first_name:c,last_name:n}),credentials:"include"}),a=await t.json();if(t.ok)g.push("/");else throw Error(a.message||"Signup failed")}catch(e){u(e.message||"Signup failed. Please check your credentials.")}};return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.default,{}),(0,a.jsx)("div",{className:"flex justify-center items-center h-screen mt-28",children:(0,a.jsxs)("div",{className:"bg-rose-100 w-2/5 h-auto pl-20 pt-16 pb-16",children:[(0,a.jsx)("h1",{className:"text-4xl font-semibold pb-8",children:"Sigup as Partner"}),A&&(0,a.jsx)("p",{className:"text-red-600",children:A}),(0,a.jsxs)("form",{onSubmit:m,children:[(0,a.jsx)("input",{type:"text",placeholder:"First Name",value:c,onChange:e=>x(e.target.value),className:"mt-2 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),(0,a.jsx)("input",{type:"text",placeholder:"Last Name",value:n,onChange:e=>h(e.target.value),className:"mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),(0,a.jsx)("input",{type:"text",placeholder:"Email",value:e,onChange:e=>t(e.target.value),className:"mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),(0,a.jsx)("input",{type:"password",placeholder:"Password",value:r,onChange:e=>o(e.target.value),className:"mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"submit",className:"w-4/5 bg-rose-950 text-white mt-10 h-12 rounded-md font-medium",children:"SIGNUP"})]}),(0,a.jsxs)("h1",{className:"text-md pt-4 text-centerm",children:["Already a user? ",(0,a.jsx)(i.default,{href:"/pages/login",className:"text-blue-700",children:"Login here"})]})]})})]})}},7907:function(e,t,r){"use strict";var a=r(5313);r.o(a,"redirect")&&r.d(t,{redirect:function(){return a.redirect}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},2732:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.51c27e9b.png",height:272,width:510,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAYElEQVR42mNAB5snTGaEsTsd3IQZmrWN9ZrUDJSa1PQ1mzQMJZt1TMybtU0MmjSNdJu1jK0ZgJKqjar6nkAFvk1aRiIthpamjUq6Bo0qevZNqvoKYKNa9M2VgBJcDFgAAMraFagpnITfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=6802)}),_N_E=e.O()}]);