(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6693)}])},8051:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(5893),a=r(7294),l=r(1664),s=r.n(l),i=function(){return(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)("ul",{className:"flex flex-row",children:[{id:1,name:"About",to:"/about"}].map((function(e){return(0,n.jsx)("li",{className:"block ml-4 text-black dark:text-gray-50 nav",children:(0,n.jsx)(s(),{href:e.to,children:(0,n.jsx)("a",{children:e.name})})},e.id)}))})})},c=r(9313),o=r.n(c),d=function(){return(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("a",{"aria-label":o().blog.title,children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("div",{className:"ml-2 text-black dark:text-white header-name",children:o().blog.title})})})})},u=r(185),m=function(){var e=(0,a.useState)(),t=e[0],r=e[1];(0,a.useEffect)((function(){r((0,u.g)())}),[]);return"auto"!==o().blog.theme?null:(0,n.jsx)("div",{className:"cursor-pointer dark:text-gray-50",onClick:function(){var e="dark"!==(0,u.g)()?"dark":"light";localStorage.setItem("theme",e),r(e),"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},children:"light"===t?"\u2600\ufe0f":"\ud83c\udf19"})},x=function(e){var t=e.fullWidth,r=(0,a.useRef)(null);return(0,n.jsxs)("div",{className:"sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-6 py-8 bg-opacity-60 max-w-6xl px-4 ".concat(t&&"px-4 md:px-24"),id:"sticky-nav",ref:r,children:[(0,n.jsx)(d,{}),(0,n.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,n.jsx)(m,{}),(0,n.jsx)(i,{})]})]})},f=r(5697),h=r.n(f),g=r(9008),p=r.n(g);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}var v=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({},j({},e));return(0,n.jsxs)(p(),{children:[(0,n.jsx)("title",{children:t.title}),(0,n.jsx)("meta",{name:"robots",content:"follow, index"}),(0,n.jsx)("meta",{charSet:"UTF-8"}),o().seo.keywords&&(0,n.jsx)("meta",{name:"keywords",content:o().seo.keywords.join(", ")}),(0,n.jsx)("meta",{name:"description",content:t.description}),(0,n.jsx)("meta",{property:"og:type",content:t.type}),(0,n.jsx)("meta",{property:"og:title",content:t.title}),(0,n.jsx)("meta",{property:"og:description",content:t.description}),(0,n.jsx)("meta",{property:"og:url",content:t.url}),o().lang&&(0,n.jsx)("meta",{property:"og:locale",content:o().lang}),t.image&&(0,n.jsx)("meta",{property:"og:image",content:t.image}),(0,n.jsx)("meta",{name:"twitter:title",content:t.title}),(0,n.jsx)("meta",{name:"twitter:description",content:t.description}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),t.image&&(0,n.jsx)("meta",{name:"twitter:image",content:t.image}),"Post"===t.type&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{property:"article:published_time",content:t.date}),(0,n.jsx)("meta",{property:"article:author",content:o().profile.name})]})]})};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}var k=function(e){var t=e.children,r=e.metaConfig,a=e.fullWidth,l=void 0!==a&&a;return(0,n.jsxs)("div",{children:[(0,n.jsx)(v,w({},r)),(0,n.jsxs)("div",{className:"wrapper",children:["Paper"!==r.type&&(0,n.jsx)(x,{fullWidth:l}),(0,n.jsx)("main",{className:"m-auto flex-grow w-full transition-all max-w-6xl px-4 ".concat(l&&"px-4 md:px-24"," ").concat("Paper"===r.type&&"py-10"," "),children:t})]})]})};k.propTypes={children:h().node};var N=k},4:function(e,t,r){"use strict";var n=r(5893),a=r(1163);r(7294);t.Z=function(e){var t=e.children,r=(0,a.useRouter)();return(0,n.jsx)("div",{onClick:function(){return e=t,void r.push("/?tag=".concat(e));var e},className:"text-xs text-gray-500 font-normal rounded-full bg-gray-200 px-2 py-1 cursor-pointer",children:t})}},9069:function(e,t,r){"use strict";function n(e,t){return new Date(e).toLocaleDateString(t,{year:"numeric",month:"short",day:"numeric"})}r.d(t,{p:function(){return n}})},6693:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return F},default:function(){return R}});var n=r(5893),a=r(8051),l=r(7294),s=r(9313),i=r.n(s),c=r(5675),o=r.n(c),d=function(e){var t=e.className;return(0,n.jsxs)("div",{className:t,children:[(0,n.jsx)("div",{className:"p-1 mb-3 dark:text-white",children:"\ud83d\udcbb Profile"}),(0,n.jsxs)("div",{className:"w-full md:p-4 lg:p-4 rounded-2xl bg-white dark:bg-zinc-700 mb-9",children:[(0,n.jsx)("div",{className:"relative w-full after:content-[''] after:block after:pb-[100%]",children:(0,n.jsx)(o(),{src:i().profile.image,layout:"fill",alt:""})}),(0,n.jsxs)("div",{className:"bg-white p-2 flex flex-col items-center dark:bg-zinc-700 dark:text-white",children:[(0,n.jsx)("div",{className:" text-xl italic font-bold",children:i().profile.name}),(0,n.jsx)("div",{className:"text-sm mb-4 text-gray-500 dark:text-gray-400",children:i().profile.role}),(0,n.jsx)("div",{className:"text-sm mb-2",children:i().profile.bio})]})]})]})},u=r(8193),m=r(9352),x=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"p-1 mb-3 dark:text-white",children:"\ud83d\udcac Contact"}),(0,n.jsxs)("ul",{className:"rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col",children:[i().profile.github&&(0,n.jsxs)("a",{href:"https://github.com/".concat(i().profile.github),rel:"noreferrer",target:"_blank",className:"p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white ",children:[(0,n.jsx)(u.idJ,{className:"text-2xl"}),(0,n.jsx)("div",{className:"text-sm",children:"github"})]}),i().profile.instagram&&(0,n.jsxs)("a",{href:"https://www.instagram.com/".concat(i().profile.instagram),rel:"noreferrer",target:"_blank",className:"p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white",children:[(0,n.jsx)(u.Bpw,{className:"text-2xl"}),(0,n.jsx)("div",{className:"text-sm",children:"instagram"})]}),i().profile.email&&(0,n.jsxs)("a",{href:"mailto:".concat(i().profile.email),rel:"noreferrer",target:"_blank",className:"overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white",children:[(0,n.jsx)(u.Dme,{className:"text-2xl flex-shrink-0"}),(0,n.jsx)("div",{className:"text-sm",children:"email"})]}),i().profile.linkedin&&(0,n.jsxs)("a",{href:"https://www.linkedin.com/in/".concat(i().profile.linkedin),rel:"noreferrer",target:"_blank",className:" overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white",children:[(0,n.jsx)(u._iD,{className:"text-2xl flex-shrink-0"}),(0,n.jsx)("div",{className:"text-sm",children:"linkedin"})]}),i().profile.douban&&(0,n.jsxs)("a",{href:"https://www.douban.com/people/".concat(i().profile.douban),rel:"noreferrer",target:"_blank",className:" overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white",children:[(0,n.jsx)(m.rtf,{className:"text-2xl flex-shrink-0"}),(0,n.jsx)("div",{className:"text-sm",children:"douban"})]})]})]})},f=function(){return(0,n.jsxs)("div",{className:"block lg:hidden",children:[(0,n.jsx)("div",{className:"p-1 mb-3 dark:text-white",children:"\ud83d\udcbb Profile"}),(0,n.jsx)("div",{className:"p-2 rounded-2xl bg-white dark:bg-zinc-700 mb-4",children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(o(),{src:i().profile.image,width:90,height:90,alt:"profile_image",className:"relative"}),(0,n.jsxs)("div",{className:"h-fit dark:text-white",children:[(0,n.jsx)("div",{className:" text-xl italic font-bold",children:i().profile.name}),(0,n.jsx)("div",{className:"text-sm text-gray-500 mb-2 dark:text-gray-400",children:i().profile.role}),(0,n.jsx)("div",{className:"text-sm",children:i().profile.bio})]})]})})]})},h=r(1664),g=r.n(h),p=r(9069),b=r(4),j=function(e){var t,r=e.post;return r.thumbnail,(0,n.jsx)(g(),{href:"/".concat(r.slug),children:(0,n.jsx)("a",{children:(0,n.jsxs)("article",{className:"overflow-hidden mb-6 md:mb-8 rounded-2xl bg-white dark:bg-zinc-700 hover:shadow-lg transition-shadow ",children:[r.thumbnail&&(0,n.jsx)("div",{className:"relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-zinc-700 ",children:(0,n.jsx)(o(),{src:r.thumbnail,className:"object-cover",layout:"fill",alt:r.title})}),(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("header",{className:"flex flex-col justify-between md:flex-row md:items-baseline",children:(0,n.jsx)("h2",{className:"text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100",children:r.title})}),(0,n.jsx)("div",{className:"flex items-center gap-2 mb-4",children:(0,n.jsx)("div",{className:"text-sm text-gray-500 dark:text-gray-400 md:ml-0",children:(0,p.p)((null===r||void 0===r||null===(t=r.date)||void 0===t?void 0:t.start_date)||r.createdTime,i().lang)})}),(0,n.jsx)("main",{className:"mb-4",children:(0,n.jsx)("p",{className:"hidden md:block leading-8 text-gray-700 dark:text-gray-300",children:r.summary})}),(0,n.jsx)("div",{className:"flex gap-2",children:r.tags&&r.tags.map((function(e,t){return(0,n.jsx)(b.Z,{children:e},t)}))})]})]},r.id)})})},v=r(1163),y=function(e){var t=e.q,r=e.posts,a=(e.tags,(0,v.useRouter)()),s=(0,l.useState)(r),i=s[0],c=s[1],o="".concat(a.query.tag||"")||"All",d="".concat(a.query.order||"")||"desc";return(0,l.useEffect)((function(){c((function(){var e=r;return e=e.filter((function(e){var r=e.tags?e.tags.join(" "):"";return(e.title+e.summary+r).toLowerCase().includes(t.toLowerCase())})),"All"!==o&&(e=e.filter((function(e){return e&&e.tags&&e.tags.includes(o)}))),"desc"!==d&&(e=e.reverse()),e}))}),[t,o,d]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"my-2",children:[!i.length&&(0,n.jsx)("p",{className:"text-gray-500 dark:text-gray-300",children:"Nothing! \ud83d\ude3a"}),i.slice(0,20).map((function(e){return(0,n.jsx)(j,{post:e},e.id)}))]})})};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}var N=function(e){var t=e.className,r=e.data,a=(0,v.useRouter)(),l=a.query.tag||"All";return(0,n.jsxs)("div",{className:t,children:[(0,n.jsx)("div",{className:"hidden lg:block p-1 mb-3 dark:text-white",children:"\ud83c\udff7\ufe0f Tags"}),(0,n.jsx)("ul",{className:"cursor-pointer gap-1 flex mobile-x-scroll lg:block mb-6",children:Object.keys(r).map((function(e){return(0,n.jsx)("li",{className:"text-sm p-1 px-4 my-1 flex-shrink-0 rounded-xl text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-800 ".concat(e===l&&"text-black bg-white dark:bg-zinc-700 hover:bg-white dark:hover:bg-zinc-700"),onClick:function(){return t=e,void a.push({query:k({},a.query,{tag:t})});var t},children:(0,n.jsx)("a",{children:e})},e)}))})]})};function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){O(e,t,r[t])}))}return e}var S=function(e){var t=P({},e);return(0,n.jsxs)("div",{className:"mb-4 md:mb-8",children:[(0,n.jsx)("div",{className:"p-1 mb-3 dark:text-white",children:"\ud83d\udd0e Search"}),(0,n.jsx)("input",_({className:"rounded-2xl px-5 py-2 w-full bg-gray-200 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md outline-none transition",type:"text",placeholder:"Search Keyword..."},t))]})};function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){E(e,t,r[t])}))}return e}var C=function(e){var t=e.tags,r=(0,v.useRouter)(),a="".concat(r.query.tag||"")||"All",l="".concat(r.query.order||"")||"desc",s=function(e){r.push({query:z({},r.query,{order:e})})};return(0,n.jsxs)("div",{className:"flex border-b border-gray-300 mb-4 justify-between items-center ",children:[(0,n.jsxs)("div",{className:"text-xl font-bold my-2 dark:text-white",children:[a," Posts"," ",(0,n.jsxs)("span",{className:"text-sm align-text-top",children:["(",t[a],")"]})]}),(0,n.jsxs)("div",{className:"flex text-sm gap-2  ",children:[(0,n.jsx)("a",{className:"cursor-pointer ".concat("desc"===l?"text-black font-bold dark:text-white":"text-gray-500 dark:text-gray-400"),onClick:function(){return s("desc")},children:"Desc"}),(0,n.jsx)("a",{className:"cursor-pointer ".concat("asc"===l?"text-black font-bold dark:text-white":"text-gray-500 dark:text-gray-400"),onClick:function(){return s("asc")},children:"Asc"})]})]})},q=(new Date).getFullYear(),D=+i().since,A=function(e){var t=e.className;return(0,n.jsx)("div",{className:t,children:(0,n.jsxs)("a",{href:"https://github.com/".concat(i().profile.github),target:"_blank",className:"text-gray-500 text-sm mt-3",rel:"noreferrer",children:["\xa9 ",i().profile.name," ",D!==q&&D?"".concat(D," - ").concat(q):q]})})},L=function(e){var t=e.tags,r=e.posts,a=(0,l.useState)(""),s=a[0],i=a[1];return(0,n.jsxs)("div",{className:"block md:grid grid-cols-12 gap-6",children:[(0,n.jsx)(N,{className:"hidden lg:block col-span-2",data:t}),(0,n.jsxs)("div",{className:"col-span-12 lg:col-span-7",children:[(0,n.jsx)(f,{}),(0,n.jsx)(S,{value:s,onChange:function(e){return i(e.target.value)}}),(0,n.jsx)(N,{className:"block lg:hidden",data:t}),(0,n.jsx)(C,{tags:t}),(0,n.jsx)(y,{q:s,posts:r,tags:t}),(0,n.jsx)(A,{className:"block lg:hidden flex justify-center pb-8"})]}),(0,n.jsxs)("div",{className:"hidden lg:block lg:col-span-3",children:[(0,n.jsx)(d,{}),(0,n.jsx)(x,{}),(0,n.jsx)(A,{className:"pt-4"})]})]})},T=function(e){var t=e.tags,r=e.posts;return(0,n.jsx)(L,{tags:t,posts:r})};T.getLayout=function(e){return(0,n.jsx)(a.Z,{metaConfig:{title:i().blog.title,description:i().blog.description,type:"website",url:i().link},children:e})};var F=!0,R=T},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,s({key:t},e.attr),c(e.child))}))}function o(e){return function(t){return n.createElement(d,s({attr:s({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var r,a=e.attr,l=e.size,c=e.title,o=i(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[937,617,167,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);