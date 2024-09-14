import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{F as s,a}from"./index-wqBLM7L5.js";import{d as i}from"./styled-components.browser.esm-BgG2SUk4.js";import{t as n}from"./index-B_CgAQ6L.js";const o=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`,p=i.div`
  color: ${({$isPlaying:t})=>t?"#006600":n};
  font-size: 10px;
  height: 13px;
  margin-right: 10px;
`,m=({isPlaying:t,timerValue:r})=>e.jsxs(o,{children:[e.jsx(p,{$isPlaying:t,children:t?e.jsx(s,{}):e.jsx(a,{})}),e.jsx("div",{children:r})]});m.__docgenInfo={description:"Represents a component that displays the time and timer status.",methods:[],displayName:"Time",props:{isPlaying:{required:!0,tsType:{name:"boolean"},description:"Indicates whether the timer is currently playing."},timerValue:{required:!0,tsType:{name:"string"},description:"The value of the timer to be displayed."}}};export{m as T};
