(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{1197:function(e,t,r){Promise.resolve().then(r.bind(r,7756))},7756:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7437),s=r(6600),l=r(703),o=r(2265),c=r(7907),i={src:"/_next/static/media/pu.e5cbf31d.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUVDBIDAAACAAAAAABWV1FVV1FFRUFCQj5CQT44NzU2NTM2NTI0MzExLy0wLy0nJCQmIyMkISEkISEkICEkICEkICEkICEjHyAjHyAjHyAjHyAjHyCeCyqJAAAAG3RSTlMAAAAAAgIDBAQGBwcICwsjKFZXbG54hqTL5fCHxOm6AAAAQklEQVR42hXKWwJAIBAF0MsQEUW35+x/n3S+D3YjzytmwzlTldMBK1W1ioWTrJrFYYEvxWPFnXprPV3460AERjIyfICaBBn95G/bAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},d=r(3445);function a(){return(0,n.jsx)("div",{className:"mx-14 my-16 text-black font-bold text-4xl",children:(0,n.jsx)("h1",{children:"Personal Information"})})}function u(){return(0,n.jsx)("div",{className:"mx-14 my-16 text-black font-bold text-4xl",children:(0,n.jsx)("h1",{children:"Liked"})})}function x(){return(0,n.jsx)("div",{className:"mx-14 my-16 text-black font-bold text-4xl",children:(0,n.jsx)("h1",{children:"Manage Orders"})})}function h(){return(0,n.jsx)("div",{className:"mx-14 my-16 text-black font-bold text-4xl",children:(0,n.jsx)("h1",{children:"Orders"})})}function m(){return(0,n.jsx)("div",{className:"mx-14 my-16 text-black font-bold text-4xl",children:(0,n.jsx)("h1",{children:"Account Settings"})})}function f(){let[e,t]=(0,o.useState)(null),[r,f]=(0,o.useState)(!1),[A,b]=(0,o.useState)(!0),[j,k]=(0,o.useState)(1),p=(0,c.useRouter)();function g(){for(let e of document.cookie.split(";")){let[t,r]=e.trim().split("=");if("token"===t)return r}return null}return((0,o.useEffect)(()=>{null==g()&&(0,c.redirect)("/pages/login"),async function(){try{let e=g();if(!e)throw(0,c.redirect)("/pages/login"),f(!0),Error("Token not found in cookie");let r=await fetch("http://project.mbn.priyam.tech/api/magic_brush/".concat(e),{headers:{Authorization:"".concat(e)}});if(!r.ok)throw Error("Failed to fetch user data");let n=await r.json();t(n)}catch(e){console.error("Error fetching user data:",e),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",p.push("/pages/login")}finally{b(!1)}}()},[p]),A||!e)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{}),(0,n.jsx)("h1",{children:"Loading..."})]}):(0,n.jsxs)("div",{className:" overflow-hidden",children:[(0,n.jsx)(s.default,{}),(0,n.jsxs)("div",{className:"flex h-auto w-screen pt-28",children:[(0,n.jsxs)("div",{className:"w-3/12 border border-r border-r-black h-full",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center pt-6",children:[(0,n.jsx)("div",{children:(0,n.jsx)(l.default,{src:i,height:120,width:120,alt:"img"})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{className:"pt-6 font-semibold text-center",children:[e.first_name," ",e.last_name]}),(0,n.jsxs)("h1",{className:"pt-2 text-center",children:["1"==e.user_role_id&&"Admin","2"==e.user_role_id&&"Partner","3"==e.user_role_id&&"User"]})]})]}),(0,n.jsx)("div",{className:"h-auto text-xl items-center justify-center flex mb-16",children:(0,n.jsxs)("div",{className:"py-12",children:[(0,n.jsx)("button",{className:"text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex \n                  ".concat(1===j?"border-2 border-rose-800 border-l-8":""),onClick:()=>{k(1)},children:"Personal information"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:"text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex \n                  ".concat(2===j?"border-2 border-rose-800 border-l-8":""),onClick:()=>{k(2)},children:"Manage Orders"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:"text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex \n                  ".concat(3===j?"border-2 border-rose-800 border-l-8":""),onClick:()=>{k(3)},children:"Orders"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:"text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex \n                  ".concat(4===j?"border-2 border-rose-800 border-l-8":""),onClick:()=>{k(4)},children:"Liked"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:"text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex \n                  ".concat(5===j?"border-2 border-rose-800 border-l-8":""),onClick:()=>{k(5)},children:"Account Settings"}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{className:" text-red-700 font-medium items-center rounded-lg pl-4 w-72 flex ",onClick:function(){for(let e of document.cookie.split(";")){let[t,r]=e.trim().split("=");"token"===t&&(document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"))}p.push("/pages/login")},children:"Log out"})]})})]}),(0,n.jsxs)("div",{children:[1===j&&(0,n.jsx)(a,{}),2===j&&(0,n.jsx)(x,{}),3===j&&(0,n.jsx)(h,{}),4===j&&(0,n.jsx)(u,{}),5===j&&(0,n.jsx)(m,{})]})]}),(0,n.jsx)(d.Z,{})]})}},7907:function(e,t,r){"use strict";var n=r(5313);r.o(n,"redirect")&&r.d(t,{redirect:function(){return n.redirect}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})}},function(e){e.O(0,[607,275,971,69,744],function(){return e(e.s=1197)}),_N_E=e.O()}]);