import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect,
  Prompt,
} from "react-router-dom";
import "./App.scss";
import AboutPage from "./pages/AboutPage";
import { useState } from "react";
import messageContext from "./contexts/messageContext";
import HomePage from "./pages/HomePage";
function App() {
  const [login, setLogin] = useState(false);
  const [age, setAge] = useState(null);
  const [msg, setMsg] = useState("I AM BEING SHARED");
  function onClickHandle() {
    setLogin(!login);
  }

  function onChangeHandle(e) {
    setAge(e.target.value);
  }
  return (
    <BrowserRouter>
      <messageContext.Provider value={[msg, setMsg]}>
        <div className="App">
          <header className="App-header">
            <ul className="ul-style">
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/"
                  exact
                  activeClassName="link-active-style"
                >
                  Home
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/about"
                  exact
                  activeClassName="link-active-style"
                >
                  about page
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/user/John/Doe"
                  exact
                  activeClassName="link-active-style"
                >
                  User John Doe
                </NavLink>
              </li>
            </ul>
            <Prompt
              when={login && !age}
              message={(location) => {
                return location.pathname.startsWith("/user")
                  ? true
                  : "are you sure?";
              }}
            ></Prompt>
            {/*{login.toString()}*/}
            <button className="btn" onClick={onClickHandle}>
              {login ? "logout" : "login"}
            </button>
            <Route path="/" exact={true} component={HomePage}></Route>
            <Route path="/about" exact component={AboutPage}></Route>
            <Route
              path="/user/:fname/:lname"
              exact
              render={({ match }) => {
                return login ? (
                  <h1>
                    <h2>Age: {age}</h2>
                    <input
                      type="text"
                      value={age}
                      onChange={onChangeHandle}
                    ></input>
                    Welcome {match.params.fname} {match.params.lname}
                  </h1>
                ) : (
                  <Redirect to="/"></Redirect>
                );
              }}
            ></Route>
          </header>
        </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
