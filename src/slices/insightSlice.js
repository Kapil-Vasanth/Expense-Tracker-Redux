import { createSlice } from "@reduxjs/toolkit";

const insightSlice = createSlice({
    name: "insightReducer",
    initialState: {
            budget : {
                all:0,
                food:0,
                travel:0,
                entertainment:0,
                others:0,
            },
            expenses : {
                all:0,
                food:0,
                travel:0,
                entertainment:0,
                others:0,
            },
            balances : {
                all:0,
                food:0,
                travel:0,
                entertainment:0,
                others:0,
            }
    },
    reducers: {
        setBudget: (state,action) => {
            const {budget:total, food, travel, entertainment} = action.payload
            let budget = state.budget
            let expenses = state.expenses
            let balances = state.balances
            budget.all = Number(total)
            budget.food = Number(food)
            budget.travel = Number(travel)
            budget.entertainment = Number(entertainment)
            budget.others = Number(total) - (Number(food) + Number(travel) + Number(entertainment))
            balances.all =  budget.all - expenses.all
            balances.food =  budget.food - expenses.food
            balances.travel =  budget.travel - expenses.travel
            balances.entertainment =  budget.entertainment - expenses.entertainment
            balances.others =  budget.others - expenses.others
        },
        updateInsightExpense: (state,action) => {
            const { expenseCategory, expenseAmount } = action.payload
            //update the expense and all
            state.expenses[expenseCategory] += Number(expenseAmount)
            state.expenses.all += Number(expenseAmount)
            //update the balance
            state.balances[expenseCategory] = state.budget[expenseCategory] - state.expenses[expenseCategory]
            state.balances.all = state.budget.all - state.expenses.all
        }
    }

})

export const { setBudget,updateInsightExpense } = insightSlice.actions
export default insightSlice.reducer;