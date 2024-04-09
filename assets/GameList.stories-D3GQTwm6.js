import{q as l,j as t}from"./styled-components.browser.esm-D848Jn1s.js";import{r as b}from"./index-Cu9bd8lq.js";import{a as f}from"./index-7dmntjiV.js";import{B as x}from"./Box-I8wZGDRa.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-B7h9gheN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const d=({currentIndex:e,radioRefs:i,breakPoint:s=f,...n})=>{var m,u;return t.jsxs(b.Fragment,{children:[t.jsx(v,{$breakPoint:s,value:e,onChange:r=>{n.setCurrentIndex&&n.setCurrentIndex(Number(r.target.value))},children:(m=n.games)==null?void 0:m.map((r,a)=>t.jsx("option",{value:a,children:r.title},a))}),t.jsx("div",{children:(u=n.games)==null?void 0:u.map((r,a)=>t.jsxs(y,{$breakPoint:s,ref:h=>i&&(i.current[a]=h),className:e===a?"active":"",children:[t.jsx(j,{name:"gameTitle",value:r.title,checked:e===a,onChange:()=>{n.setCurrentIndex&&n.setCurrentIndex(a)}}),t.jsx("span",{children:r.title})]},a))})]})},v=l.select`
  width: 100%;
  padding: 0.3rem;
  outline: none;
  color: rgb(95, 94, 83);
  background-color: rgb(237, 236, 213);
  margin-bottom: 2px;
  @media (min-width: ${e=>e.$breakPoint}px) {
    display: none;
  }
`,y=l.label`
  display: block;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: normal;
  display: none;
  background-color: rgba(235, 235, 213, 0.9137254902);

  &.active {
    background-color: #d3d2a6;
  }

  @media (min-width: ${e=>e.$breakPoint}px) {
    display: block;
  }
`,j=l.input.attrs({type:"radio"})`
  display: none;
`;d.__docgenInfo={description:"Renders a list of games with a select dropdown and radio buttons depending on the screen size.",methods:[],displayName:"GameList",props:{games:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ title: string }",signature:{properties:[{key:"title",value:{name:"string",required:!0}}]}}],raw:"{ title: string }[]"},description:"The array of game objects."},currentIndex:{required:!1,tsType:{name:"number"},description:"The index of the currently selected game."},setCurrentIndex:{required:!1,tsType:{name:"signature",type:"function",raw:"(i: number) => void",signature:{arguments:[{type:{name:"number"},name:"i"}],return:{name:"void"}}},description:"A function to set the currently selected game."},radioRefs:{required:!1,tsType:{name:"ReactMutableRefObject",raw:"React.MutableRefObject<(HTMLLabelElement | null)[]>",elements:[{name:"Array",elements:[{name:"unknown"}],raw:"(HTMLLabelElement | null)[]"}]},description:"The array of radio button refs (for scroll to active)"},breakPoint:{required:!1,tsType:{name:"number"},description:"The breakpoint for responsive design.",defaultValue:{value:"1199",computed:!1}}}};const A={title:"Components/GameList",component:d,tags:["autodocs"],render:e=>{const[i,s]=b.useState(0);return t.jsx(x,{maxWidth:250,children:t.jsx(d,{...e,currentIndex:i,setCurrentIndex:s})})}},o={args:{breakPoint:500,games:[{title:"Nakamura, Hikaru vs. Praggnanandhaa R 1/2-1/2"},{title:"Nepomniachtchi, Ian vs. Vidit, Santosh Gujrathi 1-0"},{title:"Caruana, Fabiano vs. Gukesh D 1/2-1/2"},{title:"Abasov, Nijat vs. Firouzja, Alireza 1/2-1/2"}]}};var c,p,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    breakPoint: 500,
    games: [{
      title: 'Nakamura, Hikaru vs. Praggnanandhaa R 1/2-1/2'
    }, {
      title: 'Nepomniachtchi, Ian vs. Vidit, Santosh Gujrathi 1-0'
    }, {
      title: 'Caruana, Fabiano vs. Gukesh D 1/2-1/2'
    }, {
      title: 'Abasov, Nijat vs. Firouzja, Alireza 1/2-1/2'
    }]
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const L=["Component"];export{o as Component,L as __namedExportsOrder,A as default};
