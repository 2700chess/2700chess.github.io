import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{c as n}from"./effector-react-AY_ml0bS.js";import{d as s}from"./styled-components.browser.esm-BgG2SUk4.js";import{D as o,L as d}from"./index-B_CgAQ6L.js";import{$ as l}from"./store-CBV45M4y.js";import{u as c}from"./index-Bb02P9SZ.js";import{S as m}from"./Sliced-a-kDHTkl.js";import{B as t}from"./Box-CSL1DSQ9.js";const p=e=>{const{isMobile:r}=c(),a=n(l);return i.jsx(t,{display:"flex",flex:3,alignItems:"center",justifyContent:e.side==="black"?"flex-end":"flex-start",sx:{background:e.side==="black"?o:d},children:i.jsxs(t,{padding:"0 10px",children:[i.jsx(m,{text:e.player,maxLength:r?12:Math.round(a/3.3)}),i.jsxs(f,{children:[e.raiting&&i.jsx("div",{children:e.raiting}),e.country&&i.jsx("div",{className:"country f24",children:i.jsx("div",{className:`flag ${e.country}`})}),e.age&&i.jsxs(t,{whiteSpace:"nowrap",fontSize:"80%",children:["Age ",e.age]})]})]})})},f=s.div`
  justify-content: start;
  font-size: 11px;
  display: flex;
  gap: 5px;
  align-items: center;
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;p.__docgenInfo={description:"Represents a playing side component.",methods:[],displayName:"PlayingSide",props:{side:{required:!0,tsType:{name:"Color"},description:"The side of the player ('black' or 'white')."},player:{required:!0,tsType:{name:"string"},description:"The name of the player."},raiting:{required:!1,tsType:{name:"number"},description:"The rating of the player (optional)."},country:{required:!1,tsType:{name:"string"},description:"The country of the player (optional)."},age:{required:!1,tsType:{name:"number"},description:"The age of the player (optional)."}}};export{p as P};
