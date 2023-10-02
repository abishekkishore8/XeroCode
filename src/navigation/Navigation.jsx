import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Home  from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Page5 from '../pages/Page5'
import Dashboard from '../pages/Dashboard'

const Navigation = () => {
  return (
    <Router>
    
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Login/>} />
            <Route path='/login' element={<SignUp/>} />
            <Route path='/page5' element={<Page5/>} />
            <Route path='/dashboard' element={<Dashboard/>} />

            {/* <Route path='/error' element={<NotFound/>} />
            <Route path='*' element={<Navigate to="/error" />}  />
            <Route path='/bmi' element={<BMICalculator />}  /> */}
        </Routes>
        
    </Router>
  )
}

export default Navigation;
