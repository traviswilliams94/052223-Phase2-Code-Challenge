import React, {useState} from "react";

function AddTransactionForm({addTransaction}) {

const [newDate, setNewDate] = useState("");
const [newDescription, setNewDescription] = useState("");
const [newCategory, setNewCategory] = useState("");
const [newAmount, setNewAmount] = useState(0);

function handleSubmit(e) {
  e.preventDefault();
  const newTransaction = {
    date: newDate,
    description: newDescription,
    category: newCategory,
    amount: newAmount,
  }

fetch("http://localhost:8001/transactions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newTransaction)
})
  .then(res => res.json())
  .then(addTransaction)

}

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
          type="date"
          name="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          />
          <input
          type="text"
          name="description"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
          type="text"
          name="category"
          placeholder="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          />
          <input
          type="number"
          name="amount"
          placeholder="Amount"
          step="0.01"
          value={newAmount}
          onChange={(e) => setNewAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
