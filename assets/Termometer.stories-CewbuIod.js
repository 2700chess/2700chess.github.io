import{q as l,j as e}from"./styled-components.browser.esm-D848Jn1s.js";import{t as s,B as p}from"./index-7dmntjiV.js";import{B as i}from"./Box-I8wZGDRa.js";import"./index-Cu9bd8lq.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-B7h9gheN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const a=({blackScaleHeight:r,coreHeight:m,isWhiteOrientation:o})=>e.jsx(h,{children:e.jsx(b,{children:e.jsxs("div",{className:"scale",style:{height:m+4,borderTop:`2px solid ${o?"#d3d2a6":"#fff"}`,borderBottom:`2px solid ${o?"#fff":"#d3d2a6"}`},children:[e.jsx("div",{className:"white",style:{height:`${r}%`,top:o?0:"auto",bottom:o?"auto":0}}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border filled"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"})]})})}),h=l.div`
  position: absolute;
  top: 0;
  right: -1.4rem;
  height: 100%;
  width: 1.3rem;
`,b=l.div`
  height: 100%;
  position: relative;
  .white {
    background: #d3d2a6;
    position: absolute;
    width: 100%;
    top: 0;
    transition: 0.3s;
  }
  .scale {
    display: flex;
    flex-direction: column;
    width: 1.3rem;
    border: none;
    position: absolute;
    background: #fff;
    top: 0;
  }

  .bar {
    flex-grow: 1;
  }
  .border {
    height: 2px;
    background-color: gray;
    opacity: 0.3;
    &.filled {
      background: ${s};
      height: 0;
      z-index: 1;
      opacity: 0.5;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${s};
        opacity: 0.6;
        top: -4px;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${s};
        opacity: 0.6;
        bottom: -4px;
      }
    }
  }
`;a.__docgenInfo={description:"Renders a thermometer component.",methods:[],displayName:"Termometer",props:{coreHeight:{required:!0,tsType:{name:"number"},description:"The height of the black scale in percentage."},blackScaleHeight:{required:!0,tsType:{name:"number"},description:"The height of the core."},isWhiteOrientation:{required:!0,tsType:{name:"boolean"},description:"Determines if the orientation is white."}}};const y={title:"Components/Termometer",component:a,tags:["autodocs"],render:r=>e.jsx(i,{sx:{bgcolor:p,p:1},children:e.jsx(i,{position:"relative",height:310,width:"45%",children:e.jsx(a,{...r})})})},t={args:{blackScaleHeight:50,coreHeight:300,isWhiteOrientation:!0}};var d,n,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    blackScaleHeight: 50,
    coreHeight: 300,
    isWhiteOrientation: true
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const k=["Component"];export{t as Component,k as __namedExportsOrder,y as default};
