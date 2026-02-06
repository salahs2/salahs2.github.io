import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/sections/hero/Hero'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Navbar/>
      <Home/>

      <div>
        <h1 className="text-white">App</h1>
      </div>
    </>
    
  )
}
