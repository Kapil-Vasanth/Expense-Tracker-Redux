import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import Transaction from './components/Transaction.jsx'
import { Provider } from 'react-redux'
import store from "./expenseTrackerStore.js"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route path="" exact element={<Home />} />
      <Route path="tracker" exact element={<Transaction />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
)