import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../components/LandingPage'
import Templates from '../components/Templates'
import About from '../components/About'
import Editor from '../components/Editor'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/templates' element={<Templates/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/editor' element={<Editor/>}/>
    </Routes>
  )
}

export default AppRouter