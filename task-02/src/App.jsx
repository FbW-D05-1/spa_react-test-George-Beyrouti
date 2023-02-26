import React from "react";
import {useState} from "react";

import "./style.css";

function App() {
  const [boxHeight, setBoxHeight] = useState(300)

  const boxHanlder  = () => {setBoxHeight(boxHeight -50)
}
  return(
    <div className="App">
      <div>
        <h1>move the box up!</h1>
        <button onClick= { ()=> boxHanlder()}>Move Up</button>

        <div className="box" style={{transform:`translateY(${boxHeight}px)`}}></div>
      </div>
    </div>
    );
}

export default App;
