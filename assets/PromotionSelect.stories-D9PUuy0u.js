import{q as u,j as a}from"./styled-components.browser.esm-5Qx59-zR.js";import{u as y}from"./hooks-DZkHdcrw.js";import"./index-Cu9bd8lq.js";import"./index-DfY16sSh.js";import"./effector-BsGkc9tN.js";import"./index-CAsoT04J.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-B7h9gheN.js";import"./moment-B1M2hmvy.js";const r=({onResult:e,pieceType:d="alpha",turnColor:h="white",colorScheme:g="default"})=>{const{queen:f,rook:b,bishop:v,knight:x}=y(d,h);return a.jsxs(k,{className:g,children:[a.jsx(o,{onClick:()=>e("queen"),className:"promotion-btn",children:a.jsx("img",{src:f,alt:"queen"})}),a.jsx(o,{onClick:()=>e("rook"),className:"promotion-btn",children:a.jsx("img",{src:b,alt:"rook"})}),a.jsx(o,{onClick:()=>e("bishop"),className:"promotion-btn",children:a.jsx("img",{src:v,alt:"bishop"})}),a.jsx(o,{onClick:()=>e("knight"),className:"promotion-btn",children:a.jsx("img",{src:x,alt:"knight"})})]})},o=u.button`
  width: 64px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: #939374;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`,k=u.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;r.__docgenInfo={description:"Renders a promotion selection component.",methods:[],displayName:"PromotionSelect",props:{onResult:{required:!0,tsType:{name:"signature",type:"function",raw:"(role: Role) => void",signature:{arguments:[{type:{name:"Role"},name:"role"}],return:{name:"void"}}},description:"The callback function to be called when a promotion is selected."},pieceType:{required:!1,tsType:{name:"union",raw:`| 'alpha'
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
| ''`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'brown'"},{name:"literal",value:"'green2'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green1'"},{name:"literal",value:"'old'"},{name:"literal",value:"'stone'"},{name:"literal",value:"'wood'"},{name:"literal",value:"''"}]},description:"The color scheme to use.",defaultValue:{value:"'default'",computed:!1}}}};const P={title:"Components/PromotionSelect",component:r,tags:["autodocs"],render:e=>a.jsx(r,{...e})},n={args:{onResult:e=>console.log(e),pieceType:"alpha",turnColor:"white"}},l={args:{onResult:e=>console.log(e),pieceType:"alpha",turnColor:"black"}};var t,i,s;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'white'
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,m,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'black'
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const _=["White","Black"];export{l as Black,n as White,_ as __namedExportsOrder,P as default};
