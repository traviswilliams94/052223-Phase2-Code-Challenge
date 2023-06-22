import React from "react";

function Transaction({transaction, deleteTransaction}) {

  function handleDeleteClick(){
    fetch(`http://localhost:8001/transactions/${transaction.id}`, {
      method: "DELETE"
    })
    deleteTransaction(transaction.id)
  }

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={handleDeleteClick}>X</button>
      </td>
    </tr>
  );
}

export default Transaction;
