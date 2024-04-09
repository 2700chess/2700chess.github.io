import{q as a,j as i}from"./styled-components.browser.esm-D848Jn1s.js";import{u as s}from"./index-LBzdyCsK.js";import{S as r}from"./Sliced-Dmd9fdao.js";import{B as t}from"./Box-BbsOCb_C.js";const l=e=>{const{isMobile:n}=s();return i.jsx(t,{display:"flex",flex:3,alignItems:"center",justifyContent:e.side==="black"?"flex-end":"flex-start",sx:{background:e.side==="black"?"#b7b58f":"#e3e2c4"},children:i.jsxs(t,{padding:"0 10px",children:[i.jsx(r,{text:e.player,maxLength:n?12:18}),i.jsxs(d,{children:[e.raiting&&i.jsx("div",{children:e.raiting}),e.country&&i.jsx("div",{className:"country f24",children:i.jsx("div",{className:`flag ${e.country}`})}),e.age&&i.jsxs(t,{whiteSpace:"nowrap",fontSize:"80%",children:["Age ",e.age]})]})]})})},d=a.div`
  justify-content: start;
  font-size: 11px;
  display: flex;
  gap: 5px;
  align-items: center;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"PlayingSide",props:{side:{required:!0,tsType:{name:"union",raw:"'black' | 'white'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"}]},description:""},player:{required:!0,tsType:{name:"string"},description:""},raiting:{required:!1,tsType:{name:"number"},description:""},country:{required:!1,tsType:{name:"string"},description:""},age:{required:!1,tsType:{name:"number"},description:""}}};export{l as P};
