import{q as i,j as e}from"./styled-components.browser.esm-D848Jn1s.js";import{T as t}from"./Time-dLlJDQP3.js";const d=({isGameOver:s,lastIsBlack:r,lastIsWhite:a,result:n="*",timerBlack:o,timerWhite:l})=>s?e.jsx(m,{children:e.jsx("div",{children:n})}):e.jsxs(h,{children:[e.jsx(t,{isPlaying:r,timerValue:l}),e.jsx(t,{isPlaying:a,timerValue:o})]}),m=i.div`
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
`,h=i.div`
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
`;d.__docgenInfo={description:`GameStatus component displays the current status of the game.
If the game is over, it shows the result.
If the game is still in progress, it shows the timers for each player.`,methods:[],displayName:"GameStatus",props:{timerWhite:{required:!0,tsType:{name:"string"},description:"The remaining time for the white player."},timerBlack:{required:!0,tsType:{name:"string"},description:"The remaining time for the black player."},lastIsWhite:{required:!0,tsType:{name:"boolean"},description:"Indicates whether the last move was made by the white player."},lastIsBlack:{required:!0,tsType:{name:"boolean"},description:"Indicates whether the last move was made by the black player."},isGameOver:{required:!1,tsType:{name:"boolean"},description:"Indicates whether the game is over or not."},result:{required:!1,tsType:{name:"string"},description:"The result of the game. Defaults to '*'.",defaultValue:{value:"'*'",computed:!1}}}};export{d as G};
