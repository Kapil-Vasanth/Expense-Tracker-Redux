import React, { useState } from 'react'
import '../index.css'
import { useDispatch, useSelector } from "react-redux"
import { updateState } from '../slices/homeSlice'
import { Link, useNavigate } from 'react-router-dom'
import { setBudget } from '../slices/insightSlice'


function Home() {
    const homeSliceData = useSelector(state => state.homeSlice.data)
    const name = useSelector(state => state.homeSlice.data.name)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data,setData] = useState(homeSliceData)

    // Handling input elements 
    const handleData = (e) => {        
        setData(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    // Handling Form Submission
    const handleSubmit =  (e) => {
        e.preventDefault()
        dispatch(updateState(data))
        dispatch(setBudget(data))
        // redirect to tracker 
        navigate('/tracker');
    }

    const goBack = () => {
        navigate('/tracker')
    }

    const clearStore = () => {
        window.location.reload()
    }

  return (
    <>
        <h1 className='center'>xTracker</h1>
        
        <div className='border'>
            <h2 className='center'>Welcome to your own Expense Tracker</h2>
            <p>Please fill in the below form to start tracking</p>
            
            <form onSubmit={handleSubmit} name="landing-page-form">
            <div className='form'>
                <div className='flex gap'>
                    
                    <label htmlFor="">Enter your name : </label>
                    <input type="text" id='name' name='name' value={data.name} onChange={handleData} />
                </div>
                <div className='flex gap'>
                    <label htmlFor="">Enter your monthly budget : </label>
                    <input type="text" id='budget' name='budget' value={data.budget} onChange={handleData}/>
                </div>
                <div>
                    <p>Fill your montly categorical budget:</p>
                    <table className='xTrackerTable'>
                        <thead>
                            <tr>
                                <td>Food</td>
                                <td>Travel</td>
                                <td>Entertainment</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" name='food' id='food' value={data.food} onChange={handleData}/></td>
                                <td><input type="text" name='travel' id='travel' value={data.travel} onChange={handleData}/></td>
                                <td><input type="text" name='entertainment' id='entertainment' value={data.entertainment} onChange={handleData}/></td>
                            </tr>
                        </tbody>
                    </table>
                    {name === "" ? 
                        <p className="center"><button>Submit</button></p> 
                        :
                        <div className='flex justify-around mt-10'>
                            <button type='button' onClick={handleSubmit}>Update Budget</button>
                            <button type='button' id='clear' onClick={clearStore}>Start New Tracker</button>
                            <button type='button' onClick={goBack}>Go Back </button>
                        </div>
                    }
                    
                </div>
                </div>
            </form>

        </div>
    </>
  )
}

export default Home