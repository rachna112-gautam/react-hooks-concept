import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import HomePage from "./pages/HomePg";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink className="App-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/deposit">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink className="App-link" to="/withdraw">
                Withdraw
              </NavLink>
            </li>
          </ul>

          <Route path="/" exact component={HomePage}></Route>
          <Route path="/deposit" exact component={DepositPage}></Route>
          <Route path="/withdraw" exact component={WithdrawPage}></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
