(()=>{var e={};e.id=480,e.ids=[480],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3166:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>l});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);r.d(t,u);let l=["",{children:["pages",{children:["signup",{children:["userSignup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6417)),"/home/priyam-bot/code/Next/magic_brush_f/app/pages/signup/userSignup/page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3384)),"/home/priyam-bot/code/Next/magic_brush_f/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/home/priyam-bot/code/Next/magic_brush_f/app/pages/signup/userSignup/page.js"],d="/pages/signup/userSignup/page",c={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/pages/signup/userSignup/page",pathname:"/pages/signup/userSignup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3955:(e,t,r)=>{Promise.resolve().then(r.bind(r,2867))},2867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5344),a=r(3190),n=r(3729),i=r(6506),o=r(8428);function u(){let[e,t]=(0,n.useState)(""),[r,u]=(0,n.useState)(""),[l,p]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[m,g]=(0,n.useState)(null),h=(0,o.useRouter)();(0,n.useEffect)(()=>{null!=function(){for(let e of document.cookie.split(";")){let[t,r]=e.trim().split("=");if("token"===t)return r}return null}()&&(0,o.redirect)("/pages/profile")});let x=async t=>{t.preventDefault();try{let t=await fetch("http://project.mbn.priyam.tech/api/magic_brush/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r,first_name:l,last_name:d}),credentials:"include"}),s=await t.json();if(t.ok)h.push("/");else throw Error(s.message||"Signup failed")}catch(e){g(e.message||"Signup failed. Please check your credentials.")}};return(0,s.jsxs)("div",{children:[s.jsx(a.default,{}),s.jsx("div",{className:"flex justify-center items-center h-screen mt-28",children:(0,s.jsxs)("div",{className:"bg-rose-100 w-2/5 h-auto pl-20 pt-16 pb-16",children:[s.jsx("h1",{className:"text-4xl font-semibold pb-8",children:"Sigup as User"}),m&&s.jsx("p",{className:"text-red-600",children:m}),(0,s.jsxs)("form",{onSubmit:x,children:[s.jsx("input",{type:"text",placeholder:"First Name",value:l,onChange:e=>p(e.target.value),className:"mt-2 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),s.jsx("input",{type:"text",placeholder:"Last Name",value:d,onChange:e=>c(e.target.value),className:"mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),s.jsx("input",{type:"text",placeholder:"Email",value:e,onChange:e=>t(e.target.value),className:"mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),s.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:e=>u(e.target.value),className:"mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"}),s.jsx("br",{}),s.jsx("button",{type:"submit",className:"w-4/5 bg-rose-950 text-white mt-10 h-12 rounded-md font-medium",children:"SIGNUP"})]}),(0,s.jsxs)("h1",{className:"text-md pt-4 text-centerm",children:["Already a user? ",s.jsx(i.default,{href:"/pages/login",className:"text-blue-700",children:"Login here"})]})]})})]})}},8428:(e,t,r)=>{"use strict";var s=r(4767);r.o(s,"redirect")&&r.d(t,{redirect:function(){return s.redirect}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},6417:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`/home/priyam-bot/code/Next/magic_brush_f/app/pages/signup/userSignup/page.js`),{__esModule:a,$$typeof:n}=s,i=s.default},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,876,337,565],()=>r(3166));module.exports=s})();