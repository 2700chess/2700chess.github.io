import{q as e}from"./styled-components.browser.esm-BXlt7KuZ.js";import{B as d}from"./Box-CuN7tJpi.js";e.div`
  display: flex;
  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;e.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({$desktopHeight:t})=>t}px;

  @media screen and (max-width: 1199px) {
    height: auto;
  }
`;e.div`
  background-color: rgb(211, 210, 166);
  padding: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 30px;
`;e.div`
  overflow: auto;
  height: ${({$height:t})=>t}px;
  min-height: ${({$height:t})=>t}px;
  transition: all 0.3s ease;
  background-color: rgb(233, 233, 208);
`;e.div`
  overflow: auto;
  flex-grow: 1;
`;e.div`
  display: table;
  width: 100%;
`;e.div`
  display: table-row;
`;e.div`
  display: table-cell;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  border-bottom: 1px solid rgb(201, 201, 174);
`;e.span`
  display: flex;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`;e.div`
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
    background-color: ${({$current:t})=>t?"rgb(211, 210, 166)":"inherit"};
    &:hover {
      text-decoration: underline;
    }
  }
`;e.div`
  min-width: ${t=>t.$minWidth}%;
  position: relative;
  margin-right: 30px;
  @media screen and (max-width: 1199px) {
    margin-right: 0;
  }
`;e.div`
  background-color: rgb(233, 233, 208);
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-weight: 600;
`;const p=e.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`,r=e.div`
  display: inline-flex;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;e(r)`
  width: 100%;
`;const n=e.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 13px;
  font-size: 19px;
  cursor: pointer;
  @media (min-width: 1199px) {
    padding: ${t=>{const i="10px 25px",o=`${Math.round(t.$boardWidth/6)}px ${Math.round(t.$boardWidth/2.5)}px`;return t.$boardWidth>53?i:o}};
    font-size: ${t=>t.$boardWidth>52?"20px":t.$boardWidth/2.9+"px"};
  }
  font-weight: 500;
  color: #000;
  background-color: #939374;
  border: 1px solid #797960;

  ${t=>t.$leftRounded&&"border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;"}
  ${t=>t.$rightRounded&&"border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;"}

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
`;e(n)`
  flex-grow: 1;
  padding: 0;
  justify-content: center;
  padding: 8px 0;
  font-size: 21px;
`;e.div`
  margin-bottom: 12px;
  text-align: center;
`;e.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;

  a {
    text-decoration: underline;
  }
`;const x=e.button`
  background: ${t=>t.$active?"#b7b58f":"#e3e2c4"};
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0 20px;
  margin-top: 0.5rem;
  &:disabled {
    opacity: 0.6;
  }
`,s=e(d)`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  gap: 8px;
`;export{r as B,p as C,s as D,x as M,n as S};
