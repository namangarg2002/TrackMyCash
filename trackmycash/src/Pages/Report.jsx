import React, { useState, useEffect } from 'react'
import "../Styles/Report.css"
import { Pie, Bar} from "react-chartjs-2"
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  ArcElement,
  Title, 
  Tooltip, 
  Legend 
} from "chart.js";
import NoTransactions from '../Components/NoTransactions';


// Register required chart components
ChartJS.register(
  CategoryScale, 
  LinearScale,
  BarElement,
  ArcElement, 
  Title, 
  Tooltip, 
  Legend
);

const Report = () => {

  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));
  const [filteredTransactions, setFilterTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    const filtered = transactions.filter((tx) => tx.date.startsWith(selectedMonth));
    setFilterTransactions(filtered);

    let income = 0;
    let expense = 0;

    let categoryBreakDown = {};

    filtered.forEach((tx) => {
      if(tx.type === "Income"){
        income += tx.amount;
      }else{
        expense += tx.amount;
        categoryBreakDown[tx.category] = (categoryBreakDown[tx.category] || 0) + tx.amount;
      }
    });

    setTotalIncome(income);
    setTotalExpense(expense);
    setCategoryData(categoryBreakDown);
  }, [transactions, selectedMonth]);


  const pieChartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "4CAF50",
          "#9966FF"
        ],
      },
    ],
  };

  const barChartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount",
        data: [totalIncome, totalExpense],
        backgroundColor: [
          "#36A2EB",
          "#ff6384",
        ],   
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        grid: { 
          display: false
        },
      },
      x: {
        grid: {
          display: false
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='reports-container'>
      <h2>Expense Reports</h2>
      <div className='date-filter'>
        <label>Select Month:</label>
        <input type="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} />
      </div>
      <div className="summary-cards">
        <div className="income-card">
          <p>Total Income</p>
          <h3 className='income'>₹{totalIncome.toLocaleString()}</h3>
        </div>
        <div className="expense-card">
          <p>Total Expense</p>
          <h3 className='expense'>₹{totalExpense.toLocaleString()}</h3>
        </div>
      </div>
      <div className="charts-container">
        {/* Category-wise Expense Pie Chart */}
        <div className="chart-item pie-chart">
          <h3>Category-wise Expense Breakdown</h3>
          {
            Object.keys(categoryData).length === 0 ? (<NoTransactions/>) : 
            (
              <Pie data={pieChartData}/>
            )
          }
        </div>
        {/* Income vs Expense Bar Chart */}
        <div className='chart-item bar-chart'>
          <h3>Income Vs Expense</h3>
          {
            totalIncome === 0 && totalExpense === 0 ? 
            (
              <NoTransactions/>
            ) : 
            (
              <div className='chart-wrapper'>
                <Bar data={barChartData} options={chartOptions}/>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Report