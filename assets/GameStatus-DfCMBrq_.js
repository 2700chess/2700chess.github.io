import{q as i,j as e}from"./styled-components.browser.esm-D848Jn1s.js";import{T as t}from"./Time-CqW5wdwK.js";const l=({isGameOver:r,lastIsBlack:s,lastIsWhite:n,result:o="*",timerBlack:a,timerWhite:d})=>r?e.jsx(p,{children:e.jsx("div",{children:o})}):e.jsxs(m,{children:[e.jsx(t,{isPlaying:s,timerValue:d}),e.jsx(t,{isPlaying:n,timerValue:a})]}),p=i.div`
  justify-content: center;
  width: 100%;
  font-weight: bold;
  border-right: 2px solid #b7b58f;
  border-left: 2px solid #b7b58f;
  flex: 3;
  display: flex;
  font-size: 15px;
  div {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1024px) {
    font-size: 18px !important;
  }
`,m=i.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #000;
  font-size: 11px;

  & > div:nth-child(2) {
    background: #b7b58f;
    width: 100%;
  }

  @media (min-width: 1024px) {
    font-size: 12px !important;
    font-weight: bold;
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"GameStatus",props:{timerWhite:{required:!0,tsType:{name:"string"},description:""},timerBlack:{required:!0,tsType:{name:"string"},description:""},lastIsWhite:{required:!0,tsType:{name:"boolean"},description:""},lastIsBlack:{required:!0,tsType:{name:"boolean"},description:""},isGameOver:{required:!1,tsType:{name:"boolean"},description:""},result:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'*'",computed:!1}}}};export{l as G};
