import React, { useRef, useEffect } from "react";
import "./App.scss";
import Input from "../src/components/input";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontsize: "30px",
  marginBottom: "10px",
};
function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  
  function firstOnKeyDown(e){
    if(e.key === 'Enter')
    {
      lastNameRef.current.focus();
    }
}
function lastOnKeyDown(e){
    if(e.key === 'Enter')
    {
      firstNameRef.current.focus();
    }
}
  return (
    <div className="App">
      <header className="App-header">
        <Input
          ref={firstNameRef}
          placeholder="First Name"
          style={inputStyle}
          onKeyDown={firstOnKeyDown}
        ></Input>
        
        <Input
          ref={lastNameRef}
          placeholder="Last Name"
          style={inputStyle}
          onKeyDown={lastOnKeyDown}
        ></Input>
      </header>
    </div>
  );
}

export default App;
