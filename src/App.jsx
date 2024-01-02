import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import CourseCatalogue from './pages/CourseCataloguePage'
import Register from './pages/Register'

function App() {

  return (

    <>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/course-catalogue' element={<CourseCatalogue />} />
      <Route path='/register' element={<Register />} />
     </Routes>
    </>
  )
}

export default App
