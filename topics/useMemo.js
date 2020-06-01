import React, {useState, useMemo} from "react";
import './App.scss';
import Child from "../src/components/child";
function App(){
    const [i, setI] = useState(0);
    function onClickHandle(){
        setI(i+1);
    }

    const memoChild = useMemo(()=>{
       return <Child></Child>
    },[]);
    return (

        <div className="App">
        <header className="App-header">
        <h3>Use MEMO</h3>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment i</button>
        <h3>Normal Render</h3>
        <Child></Child>
        <h3>Memo Render</h3>
        Increment: {memoChild}
        </header></div>
    )
}

export default App;