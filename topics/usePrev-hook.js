import React, {useState} from "react";
import './App.scss';
import usePrevious from '../src/hooks/usePrevious';

function App(){
    const [age, setAge] = useState(20);
    const prevAge = usePrevious(age);
    

    return (

        <div className="App">
        <header className="App-header">
        <h2>Use Custom Hooks</h2>
        <h3>Current age: {age}</h3>
       <h3>Previos age: {prevAge} </h3>
        <button onClick={()=>{setAge(age - 1)}}>make me younger</button>
        </header></div>
    )
}

export default App;