import React from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/sections/hero/Hero'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div>
        <h1 className="text-black">App</h1>
      </div>
    </>
    
  )
}
