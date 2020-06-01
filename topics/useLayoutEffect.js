import  React, { useState, useRef, useLayoutEffect } from 'react';
import './App.scss';

function useDim(el, val){
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    useLayoutEffect(()=>{
        let Bb = el.current.getBoundingClientRect();
        setHeight(Bb.height);
        setWidth(Bb.width);
    }, [el, val])
    return {height, width};
}

function App(){
    const [val, setVal] = useState(2);
    const valEl = useRef(null);
    const {height, width} = useDim(valEl, val);
    return (
       <div className="App">
       <header className="App-header">
       <h1>height: {height} , width: {width}</h1>
       <div ref={valEl}>{val}</div>
       <button onClick={()=> setVal(val + 100)}>10+</button>
       </header>
       </div>
    )
}

export default App;