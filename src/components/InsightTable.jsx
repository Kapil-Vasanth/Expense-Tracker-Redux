import React from 'react'
import { useSelector } from 'react-redux'
import insightSlice from '../slices/insightSlice'

function InsightTable() {
    
    const budget = useSelector(state => state.insightSlice.budget)
    const expenses = useSelector(state => state.insightSlice.expenses)
    const balances = useSelector(state => state.insightSlice.balances)
    
    function Chip({budget,expense}){
        if(expense > budget){
            return <span className='chip red'>exceeds</span>
        } else {
            return <span className='chip green'>within</span>
        }
    }

  return (
    <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Limit Status</th>
                    <th>Budget</th>
                    <th>Expense</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>All</td>
                    <td><Chip expense={expenses.all} budget={budget.all}/></td>
                    <td>{budget.all}</td>
                    <td>{expenses.all}</td>
                    <td>{balances.all}</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td><Chip expense={expenses.food} budget={budget.food}/></td>
                    <td>{budget.food}</td>
                    <td>{expenses.food}</td>
                    <td>{balances.food}</td>
                </tr>
                <tr>
                    <td>Travel</td>
                    <td><Chip expense={expenses.travel} budget={budget.travel}/></td>
                    <td>{budget.travel}</td>
                    <td>{expenses.travel}</td>
                    <td>{balances.travel}</td>
                </tr>
                <tr>
                    <td>Entertainment</td>
                    <td><Chip expense={expenses.entertainment} budget={budget.entertainment}/></td>
                    <td>{budget.entertainment}</td>
                    <td>{expenses.entertainment}</td>
                    <td>{balances.entertainment}</td>
                </tr>
                <tr>
                    <td>Others</td>
                    <td><Chip expense={expenses.others} budget={budget.others}/></td>
                    <td>{budget.others}</td>
                    <td>{expenses.others}</td>
                    <td>{balances.others}</td>
                </tr>
            </tbody>
        </table>
  )
}

export default InsightTable