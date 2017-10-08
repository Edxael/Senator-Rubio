import React from 'react';
import ReactDOM from 'react-dom';
import Congress from './comps/Congres.jsx';


const GatherComp = () => {
  const mainSty = { backgroundColor: "black", textAlign: "center", color: "white"}

  return (
    <div style={ mainSty }>
      <h1>Senator Trivia...</h1>
      <Congress />
    </div>
  )
}


ReactDOM.render(<GatherComp />, document.getElementById("root"));
