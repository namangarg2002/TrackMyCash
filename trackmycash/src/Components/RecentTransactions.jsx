import React from 'react'

const RecentTransactions = ({transactions}) => {
  const categoryEmojis = {
    "Salary": "💰",
    "Groceries": "🛒",
    "Dining": "🍽️",
    "Transport": "🚗",
    "Entertainment": "🎭",
    "Others": "📜"
  }
  return (
    <>
      <ul>
        {transactions.slice(-10).reverse().map((tx, index) => (
          <li key={index}>
            <span>{categoryEmojis[tx.category]} {tx.category}</span>
            <span>
              {tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RecentTransactions