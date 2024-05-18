"use strict";exports.id=873,exports.ids=[873],exports.modules={4873:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>NFTCard});var s=r(997),n=r(2210),c=r(7414),o=r(1163),l=e([n,c]);function NFTCard({id:e,image:t,title:r,minted:i}){let l=(0,o.useRouter)();return(0,s.jsxs)(n.VStack,{className:"nft-card",bg:"#121212",borderRadius:"20px",cursor:"pointer",overflow:"hidden",p:"1rem",spacing:"24px",maxW:"326px",w:"100%",zIndex:"10",onClick:()=>l.push(`/NFT/${e}`),children:[s.jsx(n.Box,{w:"100%",h:"298px",overflow:"hidden",borderRadius:"20px",children:s.jsx(n.Image,{src:t,alt:"nft",objectFit:"cover",objectPosition:"center",h:"100%"})}),(0,s.jsxs)(n.VStack,{spacing:"15px",w:"100%",align:"flex-start",children:[s.jsx(n.Heading,{fontStyle:"1rem",fontSize:"normal",color:"white",children:r}),s.jsx(n.Divider,{borderColor:"#8e8e8e"}),(0,s.jsxs)(n.HStack,{w:"100%",justifyContent:"space-between",children:[s.jsx(n.Text,{color:"white",fontWeight:"semibold",children:"Price:"}),(0,s.jsxs)(n.HStack,{children:[s.jsx(n.Text,{fontSize:"1.125rem",color:"white",fontWeight:"semibold",children:19===e?"3 ETH":e>2?"0.8 ETH":"0.00192872 ETH"}),s.jsx(n.Image,{src:"/images/eth.png",alt:"eth",maxW:"20px"})]})]}),s.jsx(n.Divider,{borderColor:"#8e8e8e"}),(0,s.jsxs)(n.HStack,{w:"100%",justifyContent:"space-between",children:[19===e?s.jsx(n.Button,{display:"flex",justifyContent:"center",colorScheme:"whiteAlpha",isDisabled:!0,children:"Sold Out"}):s.jsx(c.default,{display:"flex",justifyContent:"center",isPink:!(e>2),leftIcon:s.jsx(n.Image,{src:"/images/cart.svg",maxW:"18px",alt:"cart"}),children:e>2?"BUY":"Mint"}),(0,s.jsxs)(n.HStack,{spacing:"0",children:[s.jsx(n.Text,{color:"white",w:"100%",display:"inline-block",children:i}),s.jsx(n.Text,{color:"#8e8e8e",children:"/"}),s.jsx(n.Text,{color:"#8e8e8e",children:"2000"})]})]})]})]})}[n,c]=l.then?(await l)():l,i()}catch(e){i(e)}})}};