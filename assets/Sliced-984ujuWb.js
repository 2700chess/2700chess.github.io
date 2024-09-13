import{j as n}from"./index-BlPo4WBo.js";import{q as s}from"./styled-components.browser.esm-BXlt7KuZ.js";const r=s.span`
  white-space: nowrap;
  font-weight: normal;
  font-size: 12px;
  @media (min-width: 1024px) {
    font-size: 14px !important;
  }
`,o=({text:e,maxLength:t})=>{if(!e)return null;const i=e.length<=t?e:`${e.slice(0,t)}...`;return n.jsx(r,{children:i})};o.__docgenInfo={description:"Renders a component that slices the given text if it exceeds the maximum length.",methods:[],displayName:"Sliced",props:{text:{required:!0,tsType:{name:"string"},description:"The text to be sliced."},maxLength:{required:!0,tsType:{name:"number"},description:"The maximum length of the text."}}};export{o as S};
