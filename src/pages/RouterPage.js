import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import AllRoom from './AllRoom'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/all-room' element={<AllRoom/>} />
        </Routes>
     </Router>
  )
}