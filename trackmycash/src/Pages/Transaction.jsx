import React, { useEffect, useState } from 'react'
import '../Styles/Transaction.css'
import { useNavigate } from 'react-router-dom';
import NoTransactions from '../Components/NoTransactions';

const Transaction = () => {
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState([])

  const categoryEmojis = {
    "Salary": "💰",
    "Groceries": "🛒",
    "Dining": "🍽️",
    "Transport": "🚗",
    "Entertainment": "🎭",
    "Others": "📜"
  }

  useEffect(() => {
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransaction(existingTransactions);
  }, []);

  const handleEdit = (index) => {
    const editTransaction = transaction[index]
    navigate("/add-transaction", 
      {
        state : {transaction: {...editTransaction, index}
      },
    });
  }

  const handleDelete = (index) => {
    const updatedTrasaction = transaction.filter((data, i) => i!==index);
    setTransaction(updatedTrasaction);
    localStorage.setItem("transactions", JSON.stringify(updatedTrasaction));
  }

  return (
    <div className="transactions-container">
      {transaction.length === 0 ? (
        <NoTransactions />
      ) : (
        <div>
          <h2>All Transactions</h2>
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
              {transaction.map((tx, index) => (
                <tr key={index}>
                  <td>{categoryEmojis[tx.category] || "📜"} {tx.category}</td>
                  <td>{tx.description || 'No Description'}</td>
                  <td className={tx.type === 'Income' ? 'income' : 'expense'}>
                    {tx.amount
                      ? tx.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
                      : '₹0.00'}
                  </td>
                  <td>{tx.date}</td>
                  <td>{tx.type}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-btn" onClick={() => handleEdit(index)}>✏️ Edit</button>
                      <button className="delete-btn" onClick={() => handleDelete(index)}>🗑️ Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transaction