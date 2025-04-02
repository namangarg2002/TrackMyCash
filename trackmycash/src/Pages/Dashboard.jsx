import React, { useEffect, useState } from 'react'
import '../Styles/Dashboard.css'
import TransactionCards from '../Components/TransactionCards'
import RecentTransactions from '../Components/RecentTransactions';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale,
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from "chart.js";
import NoTransactions from '../Components/NoTransactions';
import { useNavigate } from 'react-router-dom';

// Register required chart components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);
const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const [categoryData, setCategoryData] = useState({});
  const [maxExpense, setMaxExpense] = useState(0);

  const nevigate = useNavigate();

  const categories = [
    "Salary",
    "Groceries",
    "Dining",
    "Transport",
    "Entertainment",
    "Others",
  ]

  useEffect(() => {
    const existingTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(existingTransactions);
    let income = 0;
    let expense = 0;

    let categoryBreakDown = {};
    categories.forEach(cat => categoryBreakDown[cat] = 0)

    let highestExpense = 0;
    existingTransactions.forEach(element => {
      if(element.type === "Income"){
        income += element.amount;
      }else{
        expense += element.amount;
        categoryBreakDown[element.category] = (categoryBreakDown[element.category] || 0) + element.amount;
        if(categoryBreakDown[element.category] > highestExpense){
          highestExpense = categoryBreakDown[element.category];
        }
      }
    })
    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income-expense);
    setCategoryData(categoryBreakDown);
    setMaxExpense(highestExpense);
  },[])


  // Chart data
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses per Category",
        data: categories.map((cat) => categoryData[cat] || 0),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9966FF",
          "#FFA07A",
        ],
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: maxExpense > 0 ? maxExpense * 1.2 : 10,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='dashboard'>
      <div className="dashboard-inner">
        <h2>Dashboard</h2>
        <button className='add-transaction' onClick={() => nevigate("/add-transaction")}>
            + Add Transaction
        </button>
      </div>
      <TransactionCards balance={balance} income={totalIncome} expense={totalExpense}/>
      <div className='transactions-chart-row'>
        <div className='transactions half-width'>
          <h3>Recent Transactions</h3>
          {
            transactions.length===0 ? <NoTransactions/> : <RecentTransactions transactions={transactions}/>
          }
        </div>
        <div className='expense-chart half-width'>
          <h3>Expense by Category</h3>
          {
            chartData.datasets[0].data.every((value) => value === 0) ? (<NoTransactions/>) : 
          <div className='chart-container'>
            <Bar data={chartData} options={chartOptions}/>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard