import{q as a,j as i}from"./styled-components.browser.esm-5Qx59-zR.js";import{u as r}from"./index-CEBOkn5M.js";import{S as s}from"./Sliced-BzSLPkye.js";import{B as t}from"./Box-DUAgHc2v.js";const o=e=>{const{isMobile:n}=r();return i.jsx(t,{display:"flex",flex:3,alignItems:"center",justifyContent:e.side==="black"?"flex-end":"flex-start",sx:{background:e.side==="black"?"#b7b58f":"#e3e2c4"},children:i.jsxs(t,{padding:"0 10px",children:[i.jsx(s,{text:e.player,maxLength:n?12:18}),i.jsxs(l,{children:[e.raiting&&i.jsx("div",{children:e.raiting}),e.country&&i.jsx("div",{className:"country f24",children:i.jsx("div",{className:`flag ${e.country}`})}),e.age&&i.jsxs(t,{whiteSpace:"nowrap",fontSize:"80%",children:["Age ",e.age]})]})]})})},l=a.div`
  justify-content: start;
  font-size: 11px;
  display: flex;
  gap: 5px;
  align-items: center;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;o.__docgenInfo={description:"Represents a playing side component.",methods:[],displayName:"PlayingSide",props:{side:{required:!0,tsType:{name:"Color"},description:"The side of the player ('black' or 'white')."},player:{required:!0,tsType:{name:"string"},description:"The name of the player."},raiting:{required:!1,tsType:{name:"number"},description:"The rating of the player (optional)."},country:{required:!1,tsType:{name:"string"},description:"The country of the player (optional)."},age:{required:!1,tsType:{name:"number"},description:"The age of the player (optional)."}}};export{o as P};
