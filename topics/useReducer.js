import React, { useReducer } from "react";
import "./App.css";


const initState = {
    count: 0
}

function reducerFunction(state, action){
    switch(action.type){
    case "INC":
    return {count: state.count + 1}
    case "DEC":
    return {count: state.count - 1}
    default: 
    return state;
    }
}
 function App() {
    const [state, dispatch] = useReducer(reducerFunction, initState);
    

    function incHandle(){
        dispatch({type: "INC"})
    }
    function decHandle(){
        dispatch({type: "DEC"})
    }
  return (
    <div className="App">
      <header className="App-header">
      <h2>useReducer Examples</h2>
      <h3>Count: {state.count}</h3>
      <button className="btn-style" onClick={incHandle}>Increment</button>
      <button className="btn-style" onClick={decHandle}>Decrement</button>
      </header>
    </div>
  );
}

export default App;