import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AccountSummary = () => {

  const {transactions} = useContext(GlobalContext);

  const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

  const income = transactionAmounts
                .filter( transaction => transaction > 0)
                .reduce((acc, transaction) => (acc += transaction), 0)
                .toFixed(2);              
  

  const expense = transactionAmounts
                .filter( transaction => transaction < 0)
                .reduce((acc, transaction) => (acc += transaction), 0)
                .toFixed(2);              
  

  return (
    <div className='account-summary'>
       <div className='income'>
           <h4>Income</h4>
           <p>${income}</p>
       </div>
       <div className='expense'>
           <h4>Expense</h4>
           <p>${expense}</p>
       </div>
    </div>
  )
}

export default AccountSummary
