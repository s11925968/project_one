import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './compount/user/Index.jsx'
import Creat from './compount/user/Creat.jsx'
import Details from './compount/user/Details.jsx'
import Navbar from './compount/navbar/Navbar.jsx'

export default function App() {
  return (
    <div className='container-fluid'>
    <Navbar />
    <Routes>
      <Route path="/users/index" element={<Index />}/>
      <Route path="/users/creat" element={<Creat />}/>
      <Route path="/users/:id" element={<Details />}/>
    </Routes>
    </div>
    
  )
}
