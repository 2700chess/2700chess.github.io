import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{d as l}from"./styled-components.browser.esm-BgG2SUk4.js";import{t as i,B as h}from"./index-B_CgAQ6L.js";import{B as s}from"./Box-CSL1DSQ9.js";import"./index-uubelm5h.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-DR8r8Ogv.js";const a=({blackScaleHeight:r,coreHeight:m,isWhiteOrientation:t,orientation:p})=>e.jsx(b,{children:e.jsx(u,{children:e.jsxs("div",{className:`scale orientation-${p}`,style:{height:m+4,borderTop:`2px solid ${t?"#d3d2a6":"#fff"}`,borderBottom:`2px solid ${t?"#fff":"#d3d2a6"}`},children:[e.jsx("div",{className:"white",style:{height:`${r}%`,top:t?0:"auto",bottom:t?"auto":0}}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border filled"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"border"}),e.jsx("div",{className:"bar"})]})})}),b=l.div`
  position: absolute;
  top: 0;
  right: -1.4rem;
  height: 100%;
  width: 1.3rem;
`,u=l.div`
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
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2%;
      background: #d3d2a6;
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2%;
      background: #fff;
      z-index: 1;
    }
    &.orientation-black {
      &::after {
        bottom: 0;
      }
      &::before {
        top: 0;
      }
    }
    &.orientation-white {
      &::after {
        top: 0;
      }
      &::before {
        bottom: 0;
      }
    }
  }

  .bar {
    flex-grow: 1;
  }
  .border {
    height: 2px;
    background-color: gray;
    opacity: 0.3;
    &.filled {
      background: ${i};
      height: 0;
      z-index: 1;
      opacity: 0.5;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${i};
        opacity: 0.6;
        top: -4px;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${i};
        opacity: 0.6;
        bottom: -4px;
      }
    }
  }
`;a.__docgenInfo={description:"Renders a thermometer component.",methods:[],displayName:"Termometer",props:{coreHeight:{required:!0,tsType:{name:"number"},description:"The height of the black scale in percentage."},blackScaleHeight:{required:!0,tsType:{name:"number"},description:"The height of the core."},isWhiteOrientation:{required:!0,tsType:{name:"boolean"},description:"Determines if the orientation is white."},orientation:{required:!0,tsType:{name:"union",raw:"'white' | 'black'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'black'"}]},description:"The orientation of the thermometer."}}};const k={title:"Components/Termometer",component:a,tags:["autodocs"],render:r=>e.jsx(s,{sx:{bgcolor:h,p:1},children:e.jsx(s,{position:"relative",height:310,width:"45%",children:e.jsx(a,{...r})})})},o={args:{blackScaleHeight:50,coreHeight:300,isWhiteOrientation:!0}};var n,d,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    blackScaleHeight: 50,
    coreHeight: 300,
    isWhiteOrientation: true
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const y=["Component"];export{o as Component,y as __namedExportsOrder,k as default};
