import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WithdrawPage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();
  function onWithdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }
  return (
    <div>
      <h2>Balance: {balance}</h2>
      <button className="btn-style" onClick={onWithdrawHandle}>Withdraw</button>
      <h1>{loan ? "Loan Applied" : "Loan needed"}</h1>

    </div>
  );
}

export default WithdrawPage;
