var n;function t(t){let e=[{unit:n.month,num:"11",placeholder:"mm"},{unit:n.day,num:"22",placeholder:"dd"},{unit:n.year,num:"3333",placeholder:"yyyy"}],r=new Date(3333,10,22).toLocaleDateString(t);const o=r.indexOf("3876")>-1;r=a(r).replace("3876","3333");const u=e.reduce((n,t)=>n.replace(t.num,t.placeholder),r);return{order:e.sort((n,t)=>r.indexOf(n.num)<r.indexOf(t.num)?-1:1).map(n=>n.unit),separator:[". ",".","-","/","/"].find(n=>r.indexOf(n)>-1),buddhist:o,placeholder:u}}function e(e,r){const{separator:o,order:u,buddhist:s}=t(r),c=a(e).split(o).filter(n=>n!==o).map(n=>n.replace(".",""));return{day:parseInt(c[u.indexOf(n.day)]),month:parseInt(c[u.indexOf(n.month)])-1,year:parseInt(c[u.indexOf(n.year)])-(s?543:0)}}function a(n=""){return n.replace(/[\u0660-\u0669]/g,n=>n.charCodeAt(0)-1632).replace(/[\u06f0-\u06f9]/g,n=>n.charCodeAt(0)-1776).replace(/[^\x00-\x7F]/g,"")}function r(n){const t=new Date(0,0,1);return[0,1,2,3,4,5,6,7,8,9,10,11].map(e=>(t.setMonth(e),new Intl.DateTimeFormat(n,{month:"long"}).format(t)))}function o(n,t){return new Intl.DateTimeFormat(t,{year:"numeric"}).format(n)}function u(n,t="short"){const e=[],a=[],r=new Date;for(let o=1;o<8;o++){r.setDate(o);let u=new Intl.DateTimeFormat(n,{weekday:t}).format(r);r.getDay()===s(n)||e.length>0?e.push(u):a.push(u)}return[...e,...a]}function s(n){return c[n.slice(0,2).toUpperCase()]||0}!function(n){n.day="day",n.month="month",n.year="year"}(n||(n={}));const c={AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function i(n,t,e){const a=n.getTime(),r=!(t instanceof Date)||a>=t.getTime(),o=!(e instanceof Date)||a<=e.getTime();return r&&o}function f(n,t,e){if(!(n instanceof Date))return null;const a=n.getTime(),r=t instanceof Date&&a<t.getTime(),o=e instanceof Date&&a>e.getTime();return r?t:o?e:n}function l(n){if(!n||"string"!=typeof n)return null;const t=n.split(/[: T-]/).map(parseFloat),e=new Date(t[0],(t[1]||1)-1,t[2]||1);return isNaN(e.getTime())?(console.error(`Invalid ISO 8601 date: "${n}"`),null):e}function D(n){return n instanceof Date?n.toISOString().split("T")[0]:""}function d(n,t){return n instanceof Date&&t instanceof Date&&n.getDate()===t.getDate()&&n.getMonth()===t.getMonth()&&n.getFullYear()===t.getFullYear()}function I(n){const t=n.getMonth(),e=new Date(n);return e.setMonth(t-1),t===e.getMonth()?new Date(n.getFullYear(),t,0):e}function A(n){const t=n.getMonth(),e=new Date(n);return e.setMonth(t+1),(t+2)%7==e.getMonth()%7?new Date(n.getFullYear(),t+2,0):e}export{f as a,D as b,s as c,l as d,u as e,r as f,t as g,o as h,i,I as j,A as n,e as p,a as r,d as s}