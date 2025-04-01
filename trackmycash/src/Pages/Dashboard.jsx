import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import TransactionCards from '../Components/TransactionCards'
import RecentTransactions from '../Components/RecentTransactions';
const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(existingTransactions);
    let income = 0;
    let expense = 0;
    existingTransactions.forEach(element => {
      if(element.type === "Income"){
        income += element.amount;
      }else{
        expense += element.amount;
      }
    })
    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income-expense);
  }, [])

  return (
    <div className='dashboard'>
      <div className="dashboard-inner">
        <h2>Dashboard</h2>
        <button className='add-transaction'>
            + Add Transaction
        </button>
      </div>
      <TransactionCards balance={balance} income={totalIncome} expense={totalExpense}/>
      <div className='transactions-chart-row'>
        <div className='transactions half-width'>
          <h3>Recent Transactions</h3>
          <RecentTransactions transactions={transactions}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard