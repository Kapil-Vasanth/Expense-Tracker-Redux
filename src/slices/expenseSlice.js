import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: "expenseReducer",
    initialState:{
        filterStatus: "all",
        expenses:[]
    },
    reducers : {
        addExpense: (state,action) => {
            let expense = action.payload
            expense.id = String(new Date().getTime())
            state.expenses.push(expense)
        },
        deleteExpense: (state,action) => {
            let indexFound = state.expenses.find(exp => exp.id === action.payload)
            if(indexFound){
                state.expenses.splice(indexFound,1)
            }
        },
        updateFilterStatus: (state,action) => {
            state.filterStatus = action.payload
        }
    }
})

export const { addExpense, deleteExpense, updateFilterStatus }  = expenseSlice.actions
export default expenseSlice.reducer