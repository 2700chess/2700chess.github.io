import{q as t,j as o}from"./styled-components.browser.esm-5Qx59-zR.js";import{b as g,c as u,a as x,F as m,d as f,e as h}from"./index-BKGJ5RSV.js";import{G as b}from"./iconBase-B_dZRIzU.js";import{B as v}from"./Box-DUAgHc2v.js";import"./index-Cu9bd8lq.js";import"./extends-CCbyfPlC.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";function y(e){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"},child:[]}]})(e)}t.div`
  display: flex;
  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;t.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: ${({$desktopHeight:e})=>e}px;

  @media screen and (max-width: 1199px) {
    height: auto;
  }
`;t.div`
  background-color: rgb(211, 210, 166);
  padding: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 30px;
`;t.div`
  overflow: auto;
  height: ${({$height:e})=>e}px;
  min-height: ${({$height:e})=>e}px;
  transition: all 0.3s ease;
  background-color: rgb(233, 233, 208);
`;t.div`
  overflow: auto;
  flex-grow: 1;
`;t.div`
  display: table;
  width: 100%;
`;t.div`
  display: table-row;
`;t.div`
  display: table-cell;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  border-bottom: 1px solid rgb(201, 201, 174);
`;t.span`
  display: flex;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`;t.div`
  display: table-cell;
  padding: 3px 0;
  width: 50%;
  text-align: center;
  font-size: 15px;
  border-bottom: 1px solid rgb(201, 201, 174);

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
    padding: 5px 20px;
    font-size: inherit;
    background-color: ${({$current:e})=>e?"rgb(211, 210, 166)":"inherit"};
    &:hover {
      text-decoration: underline;
    }
  }
`;t.div`
  min-width: 65%;
  position: relative;
  margin-right: 30px;
  @media screen and (max-width: 1199px) {
    margin-right: 0;
  }
`;t.div`
  background-color: rgb(233, 233, 208);
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-weight: 600;
`;const w=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`,l=t.div`
  display: inline-flex;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;t(l)`
  width: 100%;
`;const n=t.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 13px;
  font-size: 19px;
  cursor: pointer;
  @media (min-width: 769px) {
    padding: 10px 25px;
    font-size: 20px;
  }
  font-weight: 500;
  color: #000;
  background-color: #939374;
  border: 1px solid #797960;

  ${e=>e.$leftRounded&&"border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"}
  ${e=>e.$rightRounded&&"border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;"}

  &:hover:enabled {
    background-color: #535342;
    color: #fff;
  }

  &:focus:enabled {
    z-index: 10;
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;t(n)`
  flex-grow: 1;
  padding: 0;
  justify-content: center;
  padding: 8px 0;
  font-size: 21px;
`;t.div`
  margin-bottom: 12px;
  text-align: center;
`;t.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;

  a {
    text-decoration: underline;
  }
`;t.button`
  background: ${e=>e.$active?"#b7b58f":"#e3e2c4"};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0 20px;
  margin-top: 0.5rem;
`;t(v)`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  gap: 8px;
`;const i=e=>o.jsxs(w,{children:[o.jsxs(l,{children:[o.jsx(n,{$leftRounded:!0,onClick:()=>e.navigateTo("first"),disabled:e.canGoTo?!e.canGoTo("first"):!1,children:o.jsx(g,{})}),o.jsx(n,{onClick:()=>e.navigateTo("prev"),disabled:e.canGoTo?!e.canGoTo("prev"):!1,children:o.jsx(u,{})}),o.jsx(n,{onClick:e.toggleAutoplay,children:e.autoplay?o.jsx(x,{}):o.jsx(m,{})}),o.jsx(n,{onClick:()=>e.navigateTo("next"),disabled:e.canGoTo?!e.canGoTo("next"):!1,children:o.jsx(f,{})}),o.jsx(n,{$rightRounded:!0,onClick:()=>e.navigateTo("last"),disabled:e.canGoTo?!e.canGoTo("last"):!1,children:o.jsx(h,{})})]}),o.jsx(n,{onClick:e.toggleOrientation,children:o.jsx(y,{})})]});i.__docgenInfo={description:"Controls component for the chess widget.",methods:[],displayName:"Controls",props:{autoplay:{required:!0,tsType:{name:"boolean"},description:"Whether the autoplay feature is enabled."},toggleOrientation:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Toggles the orientation of the board."},toggleAutoplay:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Toggles the autoplay."},navigateTo:{required:!0,tsType:{name:"signature",type:"function",raw:"(to: GoTo) => void",signature:{arguments:[{type:{name:"GoTo"},name:"to"}],return:{name:"void"}}},description:"Navigates to a specific position in the game."},canGoTo:{required:!1,tsType:{name:"signature",type:"function",raw:"(to: GoTo) => boolean",signature:{arguments:[{type:{name:"GoTo"},name:"to"}],return:{name:"boolean"}}},description:"Checks if it is possible to navigate to a specific position in the game."}}};const z={title:"Components/Controls",component:i,tags:["autodocs"],render:e=>{const c=p=>{switch(p){case"first":return!1;case"prev":return!1;case"next":return!0;case"last":return!0;default:return!1}};return o.jsx(i,{...e,canGoTo:c})}},a={args:{autoplay:!1,toggleOrientation:()=>{},toggleAutoplay:()=>{},navigateTo:()=>{}}};var r,d,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    autoplay: false,
    toggleOrientation: () => {},
    toggleAutoplay: () => {},
    navigateTo: () => {}
  }
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const q=["Component"];export{a as Component,q as __namedExportsOrder,z as default};
