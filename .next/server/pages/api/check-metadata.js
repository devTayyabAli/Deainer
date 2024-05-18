"use strict";(()=>{var e={};e.id=482,e.ids=[482],e.modules={5142:e=>{e.exports=require("dotenv")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6139:(e,t,a)=>{a.r(t),a.d(t,{config:()=>n,default:()=>i,routeModule:()=>l});var r={};a.r(r),a.d(r,{default:()=>handler});var o=a(1802),s=a(7153),c=a(6249);async function handler(e,t){if("POST"===e.method)try{let a;let{tokenAddress:r,chain:o}=e.body;1===o&&(a=await getEthereumMetadata(r)),t.status(200).json({success:!0,abi:a})}catch(e){console.error(e),t.status(500).json({success:!1,error:e.message})}else t.status(405).end()}a(3447),a(5142).config();let getEthereumMetadata=async e=>{let t=e,a=process.env.ES_KEY;try{let r=await verifyProxyContract(t,a);if("1"===r.status){let o=r.result,s=await checkStatus(o,a);t=s,console.log(`Proxy of ${e} is ${t}`)}else console.error("Error verifying proxy contract:",r)}catch(e){console.error("Error fetching contract metadata:",t,e)}let r=`https://api.etherscan.io/api?module=contract&action=getabi&address=${t}&apikey=${a}`,o=await fetch(r);if(!o.ok)throw Error("Network response was not ok");let s=await o.json(),c=JSON.parse(s.result).filter(e=>"view"!==e.stateMutability);return c};async function verifyProxyContract(e,t){try{let a=await fetch(`https://api.etherscan.io/api?module=contract&action=verifyproxycontract&address=${e}&apikey=${t}`,{method:"POST"});if(!a.ok)throw Error("Network response was not ok");let r=await a.json();return r}catch(e){throw console.error("Error:",e),e}}let checkStatus=(e,t)=>new Promise((a,r)=>{fetch(`https://api.etherscan.io/api?module=contract&action=checkproxyverification&guid=${e}&apikey=${t}`).then(e=>e.json()).then(o=>{if("1"===o.status){let e=o.result.split(" is found at ")[1].split(" and is successfully updated")[0];a(e)}else"0"===o.status&&"NOTOK"===o.message&&"Pending in queue"===o.result?setTimeout(()=>{checkStatus(e,t).then(a).catch(r)},1e3):r("This contract does not contain any delegatecall opcode sequence.")}).catch(e=>r(e))}),i=(0,c.l)(r,"default"),n=(0,c.l)(r,"config"),l=new o.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/check-metadata",pathname:"/api/check-metadata",bundlePath:"",filename:""},userland:r})}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[222,447],()=>__webpack_exec__(6139));module.exports=a})();