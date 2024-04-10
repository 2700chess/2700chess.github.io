import{q as m,j as o}from"./styled-components.browser.esm-D848Jn1s.js";import{u as f}from"./hooks-BKjqg-wg.js";import"./index-Cu9bd8lq.js";import"./util-5knA4vmh.js";import"./index-7dmntjiV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-B7h9gheN.js";import"./moment-B1M2hmvy.js";const n=({onResult:e,pieceType:d="alpha",turnColor:h="white"})=>{const{queen:g,rook:x,bishop:k,knight:b}=f(d,h);return o.jsxs(y,{children:[o.jsx(a,{onClick:()=>e("queen"),children:o.jsx("img",{src:g,alt:"queen"})}),o.jsx(a,{onClick:()=>e("rook"),children:o.jsx("img",{src:x,alt:"rook"})}),o.jsx(a,{onClick:()=>e("bishop"),children:o.jsx("img",{src:k,alt:"bishop"})}),o.jsx(a,{onClick:()=>e("knight"),children:o.jsx("img",{src:b,alt:"knight"})})]})},a=m.button`
  width: 64px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #939374;
  background: #939374;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`,y=m.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;n.__docgenInfo={description:"Renders a promotion selection component.",methods:[],displayName:"PromotionSelect",props:{onResult:{required:!0,tsType:{name:"signature",type:"function",raw:"(role: Role) => void",signature:{arguments:[{type:{name:"Role"},name:"role"}],return:{name:"void"}}},description:"The callback function to be called when a promotion is selected."},pieceType:{required:!1,tsType:{name:"union",raw:`| 'alpha'
| 'berlin'
| 'hastings'
| 'linares'
| 'cheq'
| 'zurich'
| 'wikipedia'
| ''`,elements:[{name:"literal",value:"'alpha'"},{name:"literal",value:"'berlin'"},{name:"literal",value:"'hastings'"},{name:"literal",value:"'linares'"},{name:"literal",value:"'cheq'"},{name:"literal",value:"'zurich'"},{name:"literal",value:"'wikipedia'"},{name:"literal",value:"''"}]},description:"The type of the piece being promoted.",defaultValue:{value:"'alpha'",computed:!1}},turnColor:{required:!1,tsType:{name:"union",raw:"'white' | 'black'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'black'"}]},description:"The color of the player's turn.",defaultValue:{value:"'white'",computed:!1}}}};const B={title:"Components/PromotionSelect",component:n,tags:["autodocs"],render:e=>o.jsx(n,{...e})},r={args:{onResult:e=>console.log(e),pieceType:"alpha",turnColor:"white"}},t={args:{onResult:e=>console.log(e),pieceType:"alpha",turnColor:"black"}};var l,i,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'white'
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'black'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["White","Black"];export{t as Black,r as White,P as __namedExportsOrder,B as default};
