import{q as i,j as e}from"./styled-components.browser.esm-5Qx59-zR.js";import{F as r,a}from"./index-BKGJ5RSV.js";import{t as n}from"./index-CAsoT04J.js";const o=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`,p=i.div`
  color: ${({$isPlaying:t})=>t?"#006600":n};
  font-size: 10px;
  height: 13px;
  margin-right: 10px;
`,m=({isPlaying:t,timerValue:s})=>e.jsxs(o,{children:[e.jsx(p,{$isPlaying:t,children:t?e.jsx(r,{}):e.jsx(a,{})}),e.jsx("div",{children:s})]});m.__docgenInfo={description:"Represents a component that displays the time and timer status.",methods:[],displayName:"Time",props:{isPlaying:{required:!0,tsType:{name:"boolean"},description:"Indicates whether the timer is currently playing."},timerValue:{required:!0,tsType:{name:"string"},description:"The value of the timer to be displayed."}}};export{m as T};
