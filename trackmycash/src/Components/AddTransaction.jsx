import React, { useState } from 'react'
import './AddTransaction.css'

const AddTransaction = () => {

  const [type, setType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleAddTransaction(e){
    console.log(type, amount, category, description, date);
    if(!amount || !category || !date){
      return alert("Please fill all the fields!!")
    }
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    const currentTransaction = {
      type: type,
      amount: parseFloat(amount),
      category,
      description,
      date
    }
    const newTransactions = [...existingTransactions, currentTransaction];
    console.log(existingTransactions);
    console.log(newTransactions);
    localStorage.setItem("transactions", JSON.stringify(newTransactions));
    alert("Transaction added Succesfully!!");
    setType("Expense");
    setAmount("");
    setCategory("");
    setDescription("");
    setDate("");
  }

  return (
    <div className='add-transaction-container'>
      <h2>Add Transaction</h2>
      <div className='transaction-box'>
        <div className='transaction-type'>
          <label htmlFor="">
            <input type="radio" checked={type==="Expense"} value="Expense" onChange={() => setType("Expense")}/>Expense
          </label>
          <label htmlFor="">
            <input type="radio" checked={type==="Income"} value="Income" onChange={() => setType("Income")}/>Income
          </label>
        </div>
        <input type="number" value={amount} placeholder='Amount (&#8377;)' onChange={(e) => setAmount(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Salary">Salary</option>
          <option value="Groceries">Groceries</option>
          <option value="Dining">Dining</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Others">Others</option>
        </select>
        <textarea value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)}></textarea>
        <input value={date} type="date" onChange={(e) => setDate(e.target.value)}/>
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
    </div>
  )
}

export default AddTransaction