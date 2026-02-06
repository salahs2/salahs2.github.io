import React from 'react'
import AboutMe from '../components/AboutMe'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  return (
    <>
      {/* About Me */}
      <AboutMe />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Experience */}
      <section>
        <div className='border-2 border-red-400 w-full h-96 flex items-center justify-center mt-20'>

        </div>
      </section>
      {/* Extras */}
      <section>
        <div className='border-2 border-red-400 w-full h-96 flex items-center justify-center mt-20'>

        </div>
      </section>
      {/* Footer */}
      
    </>
  )
}