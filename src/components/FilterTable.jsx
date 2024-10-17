import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import expenseSlice, { deleteExpense, updateFilterStatus } from '../slices/expenseSlice'
import { updateInsightExpense } from '../slices/insightSlice'

function FilterTable() {
    const dispatch = useDispatch()
    const expenses = useSelector(state => state.expenseSlice.expenses)
    const filterStatus = useSelector(state => state.expenseSlice.filterStatus)
    let filteredExpenses = expenses
    
    if(filterStatus != 'all'){
        filteredExpenses = expenses.filter(exp => exp.expenseCategory === filterStatus)
    } else {
        filteredExpenses = expenses
    }

    function handleDelete(id,category,amt){
        dispatch(deleteExpense(id))
        //update insight
        const expense = { expenseCategory:category, expenseAmount:-amt }
        dispatch(updateInsightExpense(expense))
    }

    function FilterButton({name,filterStatus}){
        return <>
            <button 
                className={name.toLowerCase() === filterStatus ? 'active':''} 
                onClick={e => dispatch(updateFilterStatus(name.toLowerCase()))}
            >
                {name}
            </button>
        </>
    }
    
    
    return (
        <div className='filterSection'>
                <div className="filters flex justify-center items-center gap">
                    <h3>Filters:</h3>
                    <FilterButton name={'All'} filterStatus={filterStatus}/>
                    <FilterButton name={'Food'} filterStatus={filterStatus}/>
                    <FilterButton name={'Travel'} filterStatus={filterStatus}/>
                    <FilterButton name={'Entertainment'} filterStatus={filterStatus}/>
                    <FilterButton name={'Others'} filterStatus={filterStatus}/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Transaction</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredExpenses.map((ele,index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ele.expenseName}</td>
                                <td>{ele.expenseCategory}</td>
                                <td>{ele.expenseAmount}</td>
                                <td><button onClick={e => handleDelete(ele.id,ele.expenseCategory,ele.expenseAmount)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default FilterTable