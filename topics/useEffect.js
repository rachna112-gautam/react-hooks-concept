import React, {useState, useEffect} from "react";
import './App.scss';


const initXY = {
    x: null,
    y: null,
  };
let born = false;
function App(){
    const [growth, setGrowth] = useState(0);
    const [nirvana, setNirvana] = useState(false);
    const [time, setTime] = useState(Date);
  const [xy, setXY] = useState(initXY);
  useEffect(() => {
    let handle = setInterval(() => {
      setTime(Date);
    }, 1000);

    return () => {
      clearInterval(handle);
    };
  });
  function mouseHandle(e) {
    setXY({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    window.addEventListener("mousemove", mouseHandle);
    return () => {
      window.removeEventListener("mousemove", mouseHandle);
    };
  });
    useEffect(()=>{
        console.log('i am born');
    },[]);

    useEffect(()=>{
        if(born)
        document.title = 'Nirvana attained';

    }, [nirvana]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        if(born)
        {
            console.log('make changes');
        }
        else{
        born = true;
        }
        if(growth > 70)
        { 
            setNirvana(true);
        }
    });
    function growthHandle(){
    setGrowth(growth + 10);
    }
    return (
        <div className="App">
        <header className="App-header">
        <h3>Use Effect</h3>
        <h3> growth: {growth}</h3>
        <button onClick={growthHandle}> Learn and grow</button>
        <h2>Use Effect Examples</h2>
        <h3>Date & time : {time}</h3>
        <h3>
          {`x:${xy.x}, y:${xy.y}`}
        </h3>
        </header>
        </div>

    )
}

export default App;