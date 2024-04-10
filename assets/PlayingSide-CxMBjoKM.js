import{q as n,j as i}from"./styled-components.browser.esm-D848Jn1s.js";import{u as r}from"./index-LBzdyCsK.js";import{S as s}from"./Sliced-CBmddyFN.js";import{B as t}from"./Box-I8wZGDRa.js";const l=e=>{const{isMobile:a}=r();return i.jsx(t,{display:"flex",flex:3,alignItems:"center",justifyContent:e.side==="black"?"flex-end":"flex-start",sx:{background:e.side==="black"?"#b7b58f":"#e3e2c4"},children:i.jsxs(t,{padding:"0 10px",children:[i.jsx(s,{text:e.player,maxLength:a?12:18}),i.jsxs(o,{children:[e.raiting&&i.jsx("div",{children:e.raiting}),e.country&&i.jsx("div",{className:"country f24",children:i.jsx("div",{className:`flag ${e.country}`})}),e.age&&i.jsxs(t,{whiteSpace:"nowrap",fontSize:"80%",children:["Age ",e.age]})]})]})})},o=n.div`
  justify-content: start;
  font-size: 11px;
  display: flex;
  gap: 5px;
  align-items: center;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;l.__docgenInfo={description:"Represents a playing side component.",methods:[],displayName:"PlayingSide",props:{side:{required:!0,tsType:{name:"union",raw:"'black' | 'white'",elements:[{name:"literal",value:"'black'"},{name:"literal",value:"'white'"}]},description:"The side of the player ('black' or 'white')."},player:{required:!0,tsType:{name:"string"},description:"The name of the player."},raiting:{required:!1,tsType:{name:"number"},description:"The rating of the player (optional)."},country:{required:!1,tsType:{name:"string"},description:"The country of the player (optional)."},age:{required:!1,tsType:{name:"number"},description:"The age of the player (optional)."}}};export{l as P};
