import React, { useState } from "react";
import "./App.scss";
import useCustomFetch from "./hooks/useCustomFetch";

function App() {
  const [url, setUrl] = useState(null);
  const [data, load, err] = useCustomFetch(url);
  function getFollowers(e) {
    if (e.key === "Enter")
      setUrl("https://api.github.com/users/" + e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Git Id:
          <input onKeyPress={getFollowers}></input>
          {load && url && <div>Loading...</div>}
          {!load && data && data.resData && data.resData.public_repos && (
            <div>Repository: {data.resData.public_repos}</div>
          )}
          {err && <div>Error: {err}</div>}
        </h2>
      </header>
    </div>
  );
}

export default App;
