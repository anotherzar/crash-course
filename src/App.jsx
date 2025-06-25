import { useState } from 'react'
import {listTools} from "./data"
import {listProject} from "./data"
import {listSocial} from "./data"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Landing */}
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div>
        <div className='flex items-center-safe gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl'>
          <img src="src/Assets/fotoOrang.webp" alt="Hero Image" className="w-10 rounded-md bg-amber-50" />
          <q>Lorem ipsum dolor sit amet.</q>
        </div>
        <h1 className='text-5xl/tight font-bold mb-6'>Fazar Ripai Hanapih</h1>
        <p className='text-base/loose mb-6 opacity-50 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus minus! Nam provident tempore suscipit
        </p>
        <div className='items-center flex gap-4'>
          <a href="#" className='bg-zinc-800 text-white w-fit p-4 rounded-2xl'>
            <i className="ri-file-download-line ri-lg"></i> Download CV
          </a>
        </div>
      </div>
      <img src="src/Assets/fotoOrang.webp" alt="Hero Image" className="w-[500px] ml-auto" />
    </div>

    {/* About */}
    <div className="about mt-16 py-10">
      <div className="mx-auto p-7 bg-zinc-800 rounded-2xl ">
        <h1 className='font-bold text-2xl'>About Me</h1>
        <p className='text-base/loose opacity-50 mt-4 text-justify'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quaerat recusandae? Iure dignissimos, incidunt maiores exercitationem consequuntur, pariatur quod nemo vero nesciunt ullam cum. Ipsa, a quam! Tenetur obcaecati quasi a maiores ipsam accusantium dolore eum maxime distinctio quae autem sunt sed animi incidunt voluptate, eligendi rerum fugit ex quibusdam optio expedita ea? Officiis modi suscipit nesciunt, eos quidem fugiat?
        </p>
      </div>

      {/* Tools */}
      <div className="tools mt-16 py-10 ">
        <h1 className='font-bold text-2xl'>Tools</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        {/* tools-cards */}
        <div className="tools-box mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {listTools.map(tool => (
            <div className='bg-zinc-800 flex items-center gap-2 p-3 border border-zinc-600 rounded-md' key={tool.id}>
              <img src={tool.logo} alt="" className='w-16 p-1'/>
              <div className=''>
                <h4 className='font-bold'>{tool.app_name}</h4>
                <p className='opacity-50'>{tool.detail}</p>
              </div>
            </div>
          ))}
        </div>
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
            <img src={project.img} alt="" className='p-1 rounded-xl h-50 w-full object-cover'/>
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

    {/* Footer */}
    <div className="footer | items-center bg-zinc-600">
      <h1>
        Made with luv
      </h1>
    </div>
    </>
  )
}

export default App
