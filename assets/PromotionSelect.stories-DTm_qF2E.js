import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{d as i}from"./styled-components.browser.esm-BgG2SUk4.js";import{u as w}from"./hooks-cqfeTF9_.js";import{B as l}from"./Box-CSL1DSQ9.js";import"./index-uubelm5h.js";import"./index-DdleKAuV.js";import"./index-B_CgAQ6L.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-DR8r8Ogv.js";import"./store-CBV45M4y.js";import"./index-Bb02P9SZ.js";const t=({onResult:a,pieceType:g="alpha",turnColor:x="white",colorScheme:s="default"})=>{const{queen:f,rook:b,bishop:v,knight:y}=w(g,x);return e.jsx(l,{className:s,children:e.jsx(j,{className:"promotion-wrapper",children:e.jsxs(k,{className:s,children:[e.jsx(o,{onClick:()=>a("queen"),className:"promotion-btn",children:e.jsx("img",{src:f,alt:"queen"})}),e.jsx(o,{onClick:()=>a("rook"),className:"promotion-btn",children:e.jsx("img",{src:b,alt:"rook"})}),e.jsx(o,{onClick:()=>a("bishop"),className:"promotion-btn",children:e.jsx("img",{src:v,alt:"bishop"})}),e.jsx(o,{onClick:()=>a("knight"),className:"promotion-btn",children:e.jsx("img",{src:y,alt:"knight"})})]})})})},j=i.div`
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
| ''`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'brown'"},{name:"literal",value:"'green2'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green1'"},{name:"literal",value:"'old'"},{name:"literal",value:"'stone'"},{name:"literal",value:"'wood'"},{name:"literal",value:"''"}]},description:"The color scheme to use.",defaultValue:{value:"'default'",computed:!1}}}};const z={title:"Components/PromotionSelect",component:t,tags:["autodocs"],render:a=>e.jsx(l,{width:"100%",children:e.jsx(l,{margin:"auto",maxWidth:380,children:e.jsx(t,{...a})})})},r={args:{onResult:a=>console.log(a),pieceType:"alpha",turnColor:"white"}},n={args:{onResult:a=>console.log(a),pieceType:"alpha",turnColor:"black",colorScheme:"default"}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'white'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    onResult: (role: Role) => console.log(role),
    pieceType: 'alpha',
    turnColor: 'black',
    colorScheme: 'default'
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const E=["White","Black"];export{n as Black,r as White,E as __namedExportsOrder,z as default};
