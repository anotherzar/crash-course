import { useState } from 'react'
import {listTools} from "./data"
import {listProject} from "./data"
import {listSocial} from "./data"
import AboutCodeBlock from './components/AboutCodeBlock'
import { motion } from 'framer-motion';
import ToolsSection from './components/stackedToolsCard';
import Hero3d from './components/spline3D_obj.jsx'
import TiltAboutCard from './components/TiltAboutCard.jsx'
import { lazy, Suspense } from 'react';
import { profileBadge } from './data'
import { div, h1 } from 'framer-motion/client'

const HeroSpline = lazy(() => import('./components/spline3D_obj.jsx'));

function App() {
  const [count, setCount] = useState(0)
  const heroImg = ".public/assets/test-1-01.png"

  return (
    <>
    {/* Landing */}
    <div className="hero grid grid-cols-1 lg:grid-cols-2 items-start pt-0 gap-0 xl:gap-0">
      <div className="pt-8 md:pt-16 ">
        <h1 className='text-5xl/tight font-medium mb-6 border-y border-white/30 px-4'>
          Crafting motion that moves people.
        </h1>
        <p className='text-config-1 px-4 text-base/loose text-gray-400 text-justify border-y border-white/30'>
          Currently studying Informatics while crafting visuals that move and inspire. Specializing in motion graphics, VFX, and creative coding.
        </p>

        <div className='mt-10  px-4 border-y border-white/30'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {profileBadge.map (badge => (
              <div className='' key={badge.id}>
                {
                  <h1 className='bg-zinc-800 flex justify-left p-2 px-4 rounded-3xl font-mono '>{badge.nama_badge}</h1>
                }
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10 border-y border-white/30 px-4'>
          <button className='bg-zinc-800 p-5 rounded-2xl border border-white/30 shadow-2xl/30 shadow-blue-300'>
            <a href="" className='text-config-'>📄 Get My CV</a>
          </button>
        </div>
      </div>
      <div className='relative flex justify-center md:justify-end w-full aspect-square h-max overflow-hidden border-white/30 border-y-0 border-l-0 border-t-1 md:border-l-1 md:border-b-0 md:border-t-0'>
        <Suspense fallback={<div className="h-[400px] bg-black/20">Loading...</div>}>
          <Hero3d />
        </Suspense>
      </div>
    </div>

    {/* About */}
    <div className="about grid grid-cols-1 lg:grid-cols-2 items-start border-y border-white/30 bg-dots">
      <div className="mx-auto px-4 py-2 md:px-2 bg-blueprint grid-bg border-r-0 md:border-r border-white/30 w-full grid grid-cols-1 ">
        <TiltAboutCard />
      </div>

      {/* Tools */}
      <div className="tools flex flex-col border-white/30 border-t md:border-t-0">
        <h1 className='font-bold text-4xl text-center text-glow pt-7'>Tools</h1>
        {/* tools-cards */}
        <ToolsSection />
      </div>
    </div>

    {/* Portfolio */}
    <div className="portfolio mt-8 py-10 text-justify">
      <h1 className='font-bold text-2xl'>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate nulla vitae dolore dicta, ipsum atque temporibus quod modi architecto!</p>
    {/* Projects-Cards */}
      <div className='Portfolio-box mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {listProject.map(project => (
          <div key={project.id} className='p-3 bg-zinc-800 gap-2 items-center rounded-xl'>
            {/* <img src={project.img} alt="" className='p-1 rounded-xl h-50 w-full object-cover'/> */}
            <div>
              <h4 className='font-bold p-1'>{project.Project_name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Contacs */}
    <div className="Contacs mt-8 py-10">
      <h1 className='font-bold text-2xl'>Hit me up!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate nulla vitae dolore dicta, ipsum atque temporibus quod modi architecto!</p>
    {/* Contacs Buttons */}
      <div className='Contacs-buttons mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {listSocial.map(social => (
          <div key={social.id} className=' bg-zinc-800 flex items-center gap-2 p-3 border border-zinc-600 rounded-md'>
            <img src={social.social_logo} alt="" className='w-16 p-1'/>
            <div>
              <h4 className='font-bold text-center'>{social.Socmed_name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
