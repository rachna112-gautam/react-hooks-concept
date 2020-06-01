import React, { useState, useEffect } from "react";
import "./App.scss";

const initProfile = {
    followers:null,
    publicReps:null
}
function App() {
  const [profile, setProfile] = useState(initProfile);


  async function getProfile(){
   const response = await fetch('https://api.github.com/users/rachna112-gautam');
    const json = await response.json();

    setProfile({
        followers:json.followers,
        publicReps:json.public_repos
    })
  }
  useEffect(()=> {
      getProfile();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch Data</h2>
        <h3>{`follower: ${profile.followers}`}</h3>
        <h3>{`public-Repos: ${profile.publicReps}`}</h3>
      </header>
    </div>
  );
}

export default App;
