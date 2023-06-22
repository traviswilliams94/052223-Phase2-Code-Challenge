import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, setTransactions}) {

const [searchState, setSearchState] = useState("");
const searchedTransactions = transactions.filter(transaction => transaction.description.toLocaleLowerCase().includes(searchState.toLocaleLowerCase()))

function handleSearch(e) {
  setSearchState(e.target.value)
}

function addTransaction(newTransaction){
  const updatedTransactions = [newTransaction,  ...transactions]
  setTransactions(updatedTransactions)
}

function deleteTransaction(id) {
  const updatedTransactions = transactions.filter(transaction => transaction.id !== id)
  setTransactions(updatedTransactions)
}

  return (
    <div>
      <Search searchState={searchState} handleSearch={handleSearch}/>
      <AddTransactionForm addTransaction={addTransaction}/>
      <TransactionsList transactions={transactions} searchedTransactions={searchedTransactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
}

export default AccountContainer;
