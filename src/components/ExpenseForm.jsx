import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense } from '../slices/expenseSlice'
import { updateInsightExpense } from '../slices/insightSlice'


function ExpenseForm() {
    const [data,setData] = useState({
        expenseName: "",
        expenseCategory: "",
        expenseAmount: ""
    })
    const formRef = useRef()

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addExpense(data))
        dispatch(updateInsightExpense(data))
        setData({
            expenseName: "",
            expenseCategory: "",
            expenseAmount: ""
        })
        formRef.current.reset()
    }

  return (
      <div className="expenseForm">
        <h3><u className='title'>New Expense Form</u></h3>
        <form onSubmit={handleSubmit} ref={formRef} id='expense-form1'>
            <div>
                <label htmlFor='expense-name'>Expense Name</label>
                <input type="text" name="expenseName" id="expense-name" value={data.expenseName} onChange={handleChange}/>

                <label>Select Category:</label>
                <select name="expenseCategory" id="category-select" onChange={handleChange}>
                    <option value="">--select--</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <label>Expense Amount</label>
                <input type="text" name="expenseAmount" id='expense-amount'  value={data.expenseAmount} onChange={handleChange}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>

  )
}

export default ExpenseForm