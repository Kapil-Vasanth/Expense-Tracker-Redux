import React from 'react'
import ExpenseForm from './ExpenseForm'
import FilterTable from './FilterTable'
import InsightTable from './InsightTable'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import homeSlice from '../slices/homeSlice'

function Transaction() {
    const navigate  = useNavigate()
    const name = useSelector(state => state.homeSlice.data.name)
    
  return (
    <div>
        <h1 className='center'>xTracker</h1>

        <div className='flex justify-between items-center'>
            <h2>{name}'s Monthly Budget</h2>
            <button type='button' id='new-update' onClick={e => navigate('/')}>New/Update Tracker</button>
        </div>
        
        <InsightTable />

        <ExpenseForm />

        <FilterTable/>


    </div>
  )
}

export default Transaction