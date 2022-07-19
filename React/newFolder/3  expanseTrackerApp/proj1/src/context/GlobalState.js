import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// create the initial state

const initialState = {
  transactions: [
    {
        id: 1,
        description: "Income 1",
        transactionAmount: 1000,
      },
      {
        id: 2,
        description: "Expense 1",
        transactionAmount: -100,
      },
      {
        id: 3,
        description: "Income 2",
        transactionAmount: 2000,
      },
      {
        id: 4,
        description: "Expense 2",
        transactionAmount: -500,
      },
  ]
};

// Global Context.. to provide initail state in different components of app

export const GlobalContext = createContext(initialState);

// provider of context

export const GlobalProvider = ({children})=>{

    const [state, dispatch] = useReducer(AppReducer, initialState);


    // action for transaction
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    // add new transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
              
              {children}

        </GlobalContext.Provider>
    )
}
