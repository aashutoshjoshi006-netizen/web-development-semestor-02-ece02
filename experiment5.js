

import React, { useState } from "react";
import "./App.css";

function App() {

  // State Variable

  const [count, setCount] = useState(0);


  // Increment Function

  const increment = () => {
    setCount(count + 1);
  };


  // Decrement Function

  const decrement = () => {
    setCount(count - 1);
  };


  // Reset Function

  const reset = () => {
    setCount(0);
  };


  return (

    <div className="container">

      <div className="counter-box">

        <h1>
          React Counter <br />
          Application
        </h1>

        <h2>{count}</h2>

        <div className="button-group">

          <button onClick={increment}>
            Increment (+)
          </button>

          <button onClick={decrement}>
            Decrement (-)
          </button>

        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;