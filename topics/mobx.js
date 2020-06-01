import React from "react";
import "./App.css";
import { observer, useLocalStore } from "mobx-react-lite";

const App = observer(() => {
  const store = useLocalStore(() => ({
    count: 1,
    addOne() {
      store.count++;
    },
    subtractOne() {
      store.count--;
    },
  }));
  function incHandle() {
    store.addOne();
  }
  function decHandle() {
    store.subtractOne();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mobx</h2>
        <h3>Count: {store.count} </h3>
        <button className="btn-style" onClick={incHandle}>
          Increment
        </button>
        <button className="btn-style" onClick={decHandle}>
          Decrement
        </button>
      </header>
    </div>
  );
});

export default App;
