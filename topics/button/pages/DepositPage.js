import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as BalanceActions from "./../actions/balanceActions"
function DepositPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const loading = useSelector(state => state.balanceReducer.loading);
  const dispatch = useDispatch();
  function onDepositHandle() {
    dispatch(BalanceActions.depositAsync());
  }
  return (
    <div>
    {loading ? <h2>loading...</h2> : <h2>Balance: {balance}</h2>}
      
      <button className="btn-style" onClick={onDepositHandle}>Deposit</button>
      <h1>{loan ? "Loan Applied" : "Loan needed"}</h1>

    </div>
  );
}

export default DepositPage;
