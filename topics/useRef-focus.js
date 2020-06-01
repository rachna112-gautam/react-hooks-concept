import React, { useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(()=>{
    nameRef.current.focus();
  }, [])
  function keyPress(e){
     if(e.keyCode === 13)
     {
       if(e.target.id === 'nameInput')
       ageRef.current.focus();
       if(e.target.id === 'ageInput')
       marriedRef.current.focus();
       if(e.target.id === 'check')
       submitRef.current.focus();
     }
  }
  function onclickHandle()
  {
    alert('submitted');
  }
  return (
    <div className="App">
      <header className="App-header">
      <h3>UseRefs Hook</h3>
        <div className="form-field">
          <span>Name: </span>
          <input id="nameInput" ref={nameRef} type="text" onKeyDown={keyPress}></input>
        </div>
        <div className="form-field">
          <span>Age: </span>
          <input id="ageInput" ref={ageRef} type="text" onKeyDown={keyPress}></input>
        </div>
        <div className="form-field">
          <span>Married? </span>
          <input id="check" ref={marriedRef} type="checkbox" onKeyDown={keyPress}></input>
        </div>
        <button onClick={onclickHandle} ref={submitRef} onKeyDown={keyPress}>Submit</button>
      </header>
    </div>
  );
}

export default App;
