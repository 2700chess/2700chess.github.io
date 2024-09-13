import{j as o}from"./index-BlPo4WBo.js";import{q as u}from"./styled-components.browser.esm-BXlt7KuZ.js";import{D as m}from"./index-mZ8wGMve.js";import{u as c}from"./index-P_l5D55z.js";import"./index-CDs2tPxN.js";import"./extends-CF3RwP-h.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DdleKAuV.js";const p=u.input`
  background-color: rgb(248, 250, 252);
  border: 1px solid rgb(209, 213, 219);
  color: rgb(45, 55, 72);
  font-size: 14px;
  border-radius: 6px;
  width: 100%;
  padding: 8px 10px;
  margin-top: 5px;
  outline: none;
  &:focus {
    border: 1px solid ${m};
  }
`,r=({fen:e="",mobile:l,enabled:d=!0})=>{const{isMobile:t}=c();if(!d)return null;if(l){if(t)return o.jsx(p,{value:e,onChange:()=>null,style:{marginTop:10}})}else if(!t)return o.jsx(p,{value:e,onChange:()=>null})};r.__docgenInfo={description:"Renders a FenInput component.",methods:[],displayName:"FenInput",props:{fen:{required:!1,tsType:{name:"string"},description:"The FEN string value.",defaultValue:{value:"''",computed:!1}},mobile:{required:!1,tsType:{name:"boolean"},description:`Indicates if the component is being rendered on a mobile only device.
If false, it will be rendered on desktop only`},enabled:{required:!1,tsType:{name:"boolean"},description:"Indicates if the component is enabled.",defaultValue:{value:"true",computed:!1}}}};const q={title:"Components/FenInput",component:r,tags:["autodocs"],render:e=>o.jsx(r,{...e})},n={args:{enabled:!0,fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",mobile:!0}};var s,a,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    enabled: true,
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    mobile: true
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const y=["Component"];export{n as Component,y as __namedExportsOrder,q as default};
