import{q as i,j as e}from"./styled-components.browser.esm-D848Jn1s.js";import{r as y}from"./index-Cu9bd8lq.js";import{b as v}from"./hooks-BKjqg-wg.js";import{c as j}from"./index-LBzdyCsK.js";import{B as k}from"./Box-BbsOCb_C.js";import"./util-5knA4vmh.js";import"./index-7dmntjiV.js";import"./extends-CCbyfPlC.js";import"./inheritsLoose-B7h9gheN.js";import"./moment-B1M2hmvy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const w=i.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999999;
`,q=i.div`
  position: relative;
  width: fit-content;
  max-height: 100%;
  background-color: white;
  padding: 1rem;
  font-size: 16px;
`,f=t=>e.jsx(w,{children:e.jsx(q,{children:t.children})});f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _=i.button`
  margin-top: 0.5rem;
  color: #337ab7;
  border: none;
  background: none;
`,z=i.button`
  background: #b7b58f;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
`,T=i.div`
  background: #e3e2c4;
  padding: 0.25rem;
  margin-bottom: 0.25rem;
  text-align: left;
`,C=i.ul`
  padding-left: 0;
  margin-bottom: 10px;
`,S=i.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`,b=i.span`
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
`,M=i.div`
  min-width: 280px;
  overflow: auto;
  max-height: calc(100vh - 100px);
`,u=t=>{const[s,n]=y.useState(t.initialState==="open"),{data:r}=v(t.fen),p=j(t.fen),l=r==null?void 0:r.moves.filter(a=>a.category==="win"),d=r==null?void 0:r.moves.filter(a=>a.category==="loss"),o=r==null?void 0:r.moves.filter(a=>a.category==="draw");return!(l!=null&&l.length)&&!(d!=null&&d.length)&&!(o!=null&&o.length)||p>7||p<3?null:e.jsxs("div",{children:[e.jsx(_,{onClick:()=>n(!0),children:"Endgame Tablebase"}),s&&e.jsxs(f,{children:[e.jsxs(M,{children:[e.jsx(c,{title:"Winning",moves:d}),e.jsx(c,{title:"Drawn",moves:o==null?void 0:o.map(a=>({...a,dtm:null}))}),e.jsx(c,{title:"Losing",moves:l})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(z,{onClick:()=>n(!1),children:"Close"})})]})]})},c=t=>{var s;return(s=t.moves)!=null&&s.length?e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[t.title,":"]}),e.jsx(C,{children:t.moves.map((n,r)=>e.jsxs(S,{children:[e.jsx("div",{children:n.san}),e.jsxs("div",{children:[n.dtm!==void 0&&n.dtm!==null&&e.jsx(b,{children:n.dtm===0?" Mate in 1":`Mate in ${n.category==="win"?Math.abs(n.dtm)/2+.5:Math.abs(n.dtm)/2+1}`}),n.dtz!==void 0&&n.dtz!==null&&e.jsxs(b,{children:["dtz ",n.dtz]})]})]},r))})]}):null};u.__docgenInfo={description:"",methods:[],displayName:"Tablebase",props:{fen:{required:!1,tsType:{name:"string"},description:""},initialState:{required:!1,tsType:{name:"union",raw:"'open' | 'close'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'close'"}]},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"Item",props:{moves:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  uci: string
  san: string
  zeroing: boolean
  checkmate: boolean
  stalemate: boolean
  variant_win: boolean
  variant_loss: boolean
  insufficient_material: boolean
  dtz: number
  precise_dtz: number
  dtm: number | null
  category: 'win' | 'loss' | 'draw'
}`,signature:{properties:[{key:"uci",value:{name:"string",required:!0}},{key:"san",value:{name:"string",required:!0}},{key:"zeroing",value:{name:"boolean",required:!0}},{key:"checkmate",value:{name:"boolean",required:!0}},{key:"stalemate",value:{name:"boolean",required:!0}},{key:"variant_win",value:{name:"boolean",required:!0}},{key:"variant_loss",value:{name:"boolean",required:!0}},{key:"insufficient_material",value:{name:"boolean",required:!0}},{key:"dtz",value:{name:"number",required:!0}},{key:"precise_dtz",value:{name:"number",required:!0}},{key:"dtm",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"category",value:{name:"union",raw:"'win' | 'loss' | 'draw'",elements:[{name:"literal",value:"'win'"},{name:"literal",value:"'loss'"},{name:"literal",value:"'draw'"}],required:!0}}]}}],raw:"MoveTableBase[]"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};const W={title:"Components/Tablebase",component:u,tags:["autodocs"],render:t=>e.jsx(k,{sx:{minHeight:400},children:e.jsx(u,{...t})})},m={args:{fen:"8/4P3/3b4/5K2/8/8/8/3Q3k b - - 2 80",initialState:"open"}};var g,h,x;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fen: '8/4P3/3b4/5K2/8/8/8/3Q3k b - - 2 80',
    initialState: 'open'
  }
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const D=["Component"];export{m as Component,D as __namedExportsOrder,W as default};
