import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{B as c}from"./Box-CSL1DSQ9.js";import{T as a}from"./Typography-7cpRyl7D.js";import"./index-uubelm5h.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-BEytIC9r.js";const r=({result:n})=>e.jsxs(c,{mt:1,mb:1,p:2,borderRadius:2,bgcolor:"rgb(211,210,166)",display:"flex",justifyContent:"space-between",padding:"10px 20px",children:[e.jsxs(c,{children:[e.jsx(a,{variant:"h6",fontWeight:"bold",children:"White"}),e.jsxs(a,{fontSize:14,children:["Inaccuracies: ",n.white.inaccuracies]}),e.jsxs(a,{fontSize:14,children:["Mistakes: ",n.white.mistakes]}),e.jsxs(a,{fontSize:14,children:["Blunders: ",n.white.blunders]}),e.jsxs(a,{fontSize:14,children:["Centipawn losses on average: ",Math.round(n.white.averageCentipawnLoss)]}),e.jsxs(a,{fontSize:14,children:["Accuracy: ",Math.round(n.white.accuracy),"%"]})]}),e.jsxs(c,{children:[e.jsx(a,{variant:"h6",fontWeight:"bold",children:"Black"}),e.jsxs(a,{fontSize:14,children:["Inaccuracies: ",n.black.inaccuracies]}),e.jsxs(a,{fontSize:14,children:["Mistakes: ",n.black.mistakes]}),e.jsxs(a,{fontSize:14,children:["Blunders: ",n.black.blunders]}),e.jsxs(a,{fontSize:14,children:["Centipawn losses on average: ",Math.round(n.black.averageCentipawnLoss)]}),e.jsxs(a,{fontSize:14,children:["Accuracy: ",Math.round(n.black.accuracy),"%"]})]})]});r.__docgenInfo={description:"",methods:[],displayName:"AnalyzeResult",props:{result:{required:!0,tsType:{name:"AnalysisResult"},description:""}}};const x={title:"Components/AnalyzeResult",component:r,tags:["autodocs"],render:n=>e.jsx(r,{...n})},s={args:{result:{black:{accuracy:90,averageCentipawnLoss:2,blunders:0,inaccuracies:0,mistakes:0},white:{accuracy:76,averageCentipawnLoss:34,blunders:3,inaccuracies:2,mistakes:1},cpData:[]}}};var i,t,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    result: {
      black: {
        accuracy: 90,
        averageCentipawnLoss: 2,
        blunders: 0,
        inaccuracies: 0,
        mistakes: 0
      },
      white: {
        accuracy: 76,
        averageCentipawnLoss: 34,
        blunders: 3,
        inaccuracies: 2,
        mistakes: 1
      },
      cpData: []
    }
  }
}`,...(o=(t=s.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const b=["Component"];export{s as Component,b as __namedExportsOrder,x as default};
