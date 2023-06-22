import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";

function App() {

  const [transactions, setTransactions]  = useState([]);

useEffect(fetchTransactions, [])

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
function fetchTransactions(){
  fetch("http://localhost:8001/transactions")
  .then(res => res.json())
  .then(setTransactions)
}

}

export default App;
