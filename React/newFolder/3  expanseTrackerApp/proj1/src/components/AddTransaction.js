import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

   const [description, setDescription] = useState();
   const [transactionAmount, setTransactionAmount] = useState();

   const {addTransaction} = useContext(GlobalContext);
    console.log(addTransaction);
   const onSubmit = (e) => {
     e.preventDefault();
        const newTransaction = {
          id: new Date().getTime(),
          description,
          transactionAmount: + transactionAmount
        }

        addTransaction(newTransaction);
   }

  return (
    <div className='add-transaction'>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
             <div className='form-control'>
                 <label htmlFor='description'>Description</label>
                 <input 
                       type="text" 
                       id='description' 
                       placeholder='Detail of transaction' 
                       value={description}
                       onChange={(e)=> setDescription(e.target.value)}
                  />
             </div>
      
             <div className='form-control'>
                 <label htmlFor='transactionamount'>Transaction Amount</label>
                 <input 
                      type="number"
                      id='transactionamount'
                      placeholder='Enter transaction amount' 
                      value={transactionAmount}
                      onChange={(e)=> setTransactionAmount(e.target.value)}
                  />
             </div>
             <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
