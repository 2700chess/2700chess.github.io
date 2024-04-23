import{q as i,j as e}from"./styled-components.browser.esm-5Qx59-zR.js";import{u as w}from"./hooks-DZkHdcrw.js";import{B as l}from"./Box-DUAgHc2v.js";import"./index-Cu9bd8lq.js";import"./index-DfY16sSh.js";import"./effector-BsGkc9tN.js";import"./index-CAsoT04J.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-B7h9gheN.js";import"./moment-B1M2hmvy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-si8mwtqF.js";const t=({onResult:a,pieceType:g="alpha",turnColor:x="white",colorScheme:s="default"})=>{const{queen:f,rook:b,bishop:v,knight:y}=w(g,x);return e.jsx(l,{className:s,children:e.jsx(j,{className:"promotion-wrapper",children:e.jsxs(k,{className:s,children:[e.jsx(o,{onClick:()=>a("queen"),className:"promotion-btn",children:e.jsx("img",{src:f,alt:"queen"})}),e.jsx(o,{onClick:()=>a("rook"),className:"promotion-btn",children:e.jsx("img",{src:b,alt:"rook"})}),e.jsx(o,{onClick:()=>a("bishop"),className:"promotion-btn",children:e.jsx("img",{src:v,alt:"bishop"})}),e.jsx(o,{onClick:()=>a("knight"),className:"promotion-btn",children:e.jsx("img",{src:y,alt:"knight"})})]})})})},j=i.div`
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
`,o=i.button`
  width: 64px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`,k=i.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;t.__docgenInfo={description:"Renders a promotion selection component.",methods:[],displayName:"PromotionSelect",props:{onResult:{required:!0,tsType:{name:"signature",type:"function",raw:"(role: Role) => void",signature:{arguments:[{type:{name:"Role"},name:"role"}],return:{name:"void"}}},description:"The callback function to be called when a promotion is selected."},pieceType:{required:!1,tsType:{name:"union",raw:`| 'alpha'
| 'berlin'
| 'hastings'
| 'linares'
| 'cheq'
| 'zurich'
| 'wikipedia'
| ''`,elements:[{name:"literal",value:"'alpha'"},{name:"literal",value:"'berlin'"},{name:"literal",value:"'hastings'"},{name:"literal",value:"'linares'"},{name:"literal",value:"'cheq'"},{name:"literal",value:"'zurich'"},{name:"literal",value:"'wikipedia'"},{name:"literal",value:"''"}]},description:"The type of the piece being promoted.",defaultValue:{value:"'alpha'",computed:!1}},turnColor:{required:!1,tsType:{name:"Color"},description:"The color of the player's turn.",defaultValue:{value:"'white'",computed:!1}},colorScheme:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'blue'
| 'brown'
| 'green2'
| 'gray'
| 'green1'
| 'old'
| 'stone'
| 'wood'
| ''`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'brown'"},{name:"literal",value:"'green2'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green1'"},{name:"literal",value:"'old'"},{name:"literal",value:"'stone'"},{name:"literal",value:"'wood'"},{name:"literal",value:"''"}]},description:"The color scheme to use.",defaultValue:{value:"'default'",computed:!1}}}};const z={title:"Components/PromotionSelect",component:t,tags:["autodocs"],render:a=>e.jsx(l,{width:"100%",children:e.jsx(l,{margin:"auto",maxWidth:380,children:e.jsx(t,{...a})})})},n={args:{onResult:a=>console.log(a),pieceType:"alpha",turnColor:"white"}},r={args:{onResult:a=>console.log(a),pieceType:"alpha",turnColor:"black",colorScheme:"default"}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'white'
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'black',
    colorScheme: 'default'
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const E=["White","Black"];export{r as Black,n as White,E as __namedExportsOrder,z as default};
