import{j as u}from"./jsx-runtime-QvZ8i92b.js";import{r as i}from"./index-uubelm5h.js";import{B as h}from"./Box-CSL1DSQ9.js";import"./extends-CF3RwP-h.js";const a=t=>{const[d,p]=i.useState(0);return i.useEffect(()=>{const R=Math.max(...t.allRaitings),n=Math.min(...t.allRaitings)-50,x=(t.currentRaiting-n)/(R-n)*100;p(x)},[t.currentRaiting,t.allRaitings]),u.jsx(h,{sx:{width:`${d}%`,transition:"width 1.5s",height:"100%",textAlign:"left",pl:.7,background:"linear-gradient(to right,  #d3d2a6 0%,#b7b58f 100%)"},children:t.currentRaiting.toFixed(1)})};a.__docgenInfo={description:"",methods:[],displayName:"LiveChart",props:{allRaitings:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},currentRaiting:{required:!0,tsType:{name:"number"},description:""}}};const y={title:"Components/LiveChart",component:a,tags:["autodocs"],render:t=>u.jsx(a,{...t})},e={args:{allRaitings:[2700,2808,2732,2714,2790,2800],currentRaiting:2714}},r={args:{allRaitings:[2700,2808,2732,2714,2790,2800],currentRaiting:2800}};var s,o,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    allRaitings: [2700, 2808, 2732, 2714, 2790, 2800],
    currentRaiting: 2714
  }
}`,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var g,m,l;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    allRaitings: [2700, 2808, 2732, 2714, 2790, 2800],
    currentRaiting: 2800
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const B=["Small","Big"];export{r as Big,e as Small,B as __namedExportsOrder,y as default};
