"use strict";(()=>{var e={};e.id=236,e.ids=[236],e.modules={5142:e=>{e.exports=require("dotenv")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},8271:(e,t,s)=>{s.r(t),s.d(t,{config:()=>l,default:()=>c,routeModule:()=>i});var r={};s.r(r),s.d(r,{default:()=>handler});var a=s(1802),o=s(7153),n=s(6249);async function handler(e,t){if("POST"===e.method)try{let{walletAddress:s,chain:r}=e.body,a=process.env.COVALENT_KEY,o=`https://api.covalenthq.com/v1/${r}/address/${s}/balances_v2/?key=${a}`;console.log("walletAddress",a),fetch(o).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{let s=e.data.items.filter(e=>!e.native_token),r=s.sort((e,t)=>t.quote-e.quote);t.status(200).json({success:!0,sortedBalances:r})}).catch(e=>{console.error("Error fetching user balances:",e)})}catch(e){console.error(e),t.status(500).json({success:!1,error:e.message})}else t.status(405).end()}s(5142).config();let c=(0,n.l)(r,"default"),l=(0,n.l)(r,"config"),i=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/get-balances",pathname:"/api/get-balances",bundlePath:"",filename:""},userland:r})}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[222],()=>__webpack_exec__(8271));module.exports=s})();