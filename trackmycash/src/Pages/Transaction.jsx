import React from 'react'
import './Transaction.css'
import { useNavigate } from 'react-router-dom';

const Transaction = () => {
  const navigate = useNavigate();
  const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const categoryEmojis = {
    "Salary": "💰",
    "Groceries": "🛒",
    "Dining": "🍽️",
    "Transport": "🚗",
    "Entertainment": "🎭",
    "Others": "📜"
  }

  const handleEdit = (index) => {
    const editTransaction = existingTransactions[index]
    navigate("/add-transaction", 
      {
        state : {transaction: {...editTransaction, index}
      },
    });
  }

  const handleDelete = () => {

  }

  return (
    <div>
      <h2>All Transaction</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>   
          </tr>
        </thead>
        <tbody>
          {
            existingTransactions.map((tx, index) => (
              <tr key={index}>
                <td>{categoryEmojis[tx.category]}{tx.category}</td>
                <td>{tx.description || 'No Description'}</td>
                <td className={tx.type==='Income'?'income': 'expense'}>{tx.amount.toLocaleString('en-IN', {style: 'currency', currency:'INR'})
                }</td>
                <td>{tx.date}</td>
                <td>{tx.type}</td>
                <td>
                  <div className='action-buttons'>
                    <button className='edit-btn' onClick={() => handleEdit(index)}>
                    ✏️ Edit</button>
                    <button className='delete-btn' onClick={() => handleDelete(index)}> 🗑️ Delete</button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Transaction