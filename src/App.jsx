import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './compount/user/Index.jsx'
import Creat from './compount/user/Creat.jsx'
import Details from './compount/user/Details.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/users/index" element={<Index />}/>
      <Route path="/users/creat" element={<Creat />}/>
      <Route path="/users/:id" element={<Details />}/>
    </Routes>
  )
}
