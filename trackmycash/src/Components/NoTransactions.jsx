import React from 'react'
import '../Styles/NoTransactions.css'
import { FaFileInvoiceDollar } from "react-icons/fa";

const NoTransactions = () => {
  return (
    <div className='no-transactions'>
      <FaFileInvoiceDollar className='no-transactions-icon'/>
      <h3>No Transactions Found</h3>
      <p>Add some transitions to see reports and analysis.</p>
      
    </div>
  )
}

export default NoTransactions