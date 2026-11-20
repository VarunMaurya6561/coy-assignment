import React from 'react'
import Header from './component/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Discover from './pages/Discover'
import Home from './pages/Home'
import Matches from './pages/Matches'
import Notice from './component/Notice'

const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/discover' element={<Discover/>} />
         <Route path='/matches' element={<Matches/>} />
         <Route path='/notice' element={<Notice/>} />
         <Route path='*' element= {<p className='h-full flex items-center justify-center text-3xl'>404 Error</p>} />
      </Routes>
      
    </div>
  )
}

export default App