import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DownloadIcon from '@mui/icons-material/Download';
import greenLine from './assets/greenLine.svg'
import first from './assets/firstIcon.svg'
import second from './assets/secondIcon.svg'
import third from './assets/thirdIcon.svg'
import './App.css'


function App() {
  return (
    <>
      <div className='container px-32 py-4 bg-slate-950 max-w-screen-2xl w-100 mx-auto'>
        <header className='text-white flex items-center justify-between'>
          <h1 className='text-2xl'><a href="#">Alifreza</a><span className='text-lime-500 text-3xl'>.</span></h1>
          <ul className='w-2/4 flex items-center justify-between'>
            <li className='hover:text-gray-500'><a href="#">Home</a></li>
            <li className='hover:text-gray-500'><a href="#">Services</a></li>
            <li className='hover:text-gray-500'><a href="#">Work</a></li>
            <li className='hover:text-gray-500'><a href="#">About us</a></li>
            <li className='hover:text-gray-500'><a href="#">Blog</a></li>
            <button className='hover:border-white hover:text-lime-500 border px-3 py-1 border-lime-500'>Contact</button>
          </ul>
        </header>
        <main className='mt-24 mb-24'>
          <h3 className='text-3xl text-lime-500'>Hello, I’m Alif Reza</h3>
          <h1 className='text-7xl text-white mb-7 mt-3 border-r-8 inline-block pr-2'>Product Designer</h1>
          <p className='text-xs text-slate-600 w-2/6 mb-8 '>I’m from Singapore and I have been working as a Product Designer for more than 7 years. I’ve worked for a Hanziree company Pabloo as a Product Designer and Front-end Developer for 3 years.</p>
          <div className='flex items-center gap-6'>
            <button className='px-4 py-2 bg-lime-600 text-white hover:bg-lime-500'>Email Me</button>
            <button className='transition duration-150 ease-in-out hover:text-slate-400 text-white px-4 py-2 border border-neutral-950 hover:border-white '><DownloadIcon></DownloadIcon>Download CV</button>
          </div>
        </main>
        <section className='mb-24'>
          <div className='flex items-center justify-between mb-20'>
            <h1 className='text-5xl text-white w-2/5'>7+ years experience working</h1>
            <div>
              <h5 className='text-lime-500 flex items-center gap-3 text-base'><img src={greenLine} alt="" />Services</h5>
              <p className='text-xs text-slate-600 w-72'>Discover the best services I offer, designed to ensure the success of your project.</p>
            </div>
          </div>

          <div className='flex items-center gap-11 justify-between'>
            <div className='py-16 px-7 border-b-8 bg-zinc-700 border-green-700 inline-block w-1/3.5 transition duration-150 cursor-pointer hover:scale-105'>
              <img src={first} alt="Product design logo" className='mb-7' />
              <h2 className='text-white text-2xl mb-3'>Product design</h2>
              <p className='text-zinc-400 text-base w-80'>I offer innovative and attention-grabbing product design services. From initial ideation to implementation.</p>
            </div>

            <div className='py-16 px-7 border-b-8 bg-zinc-700 border-green-700 inline-block w-1/3.5 transition duration-150 cursor-pointer hover:scale-105'>
              <img src={second} alt="Frontend develop logo" className='mb-7' />
              <h2 className='text-white text-2xl mb-3'>Frontend develop</h2>
              <p className='text-zinc-400 text-base w-80'>Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.</p>
            </div>

            <div className='py-16 px-7 border-b-8 bg-zinc-700 border-green-700 inline-block w-1/3.5 transition duration-150 cursor-pointer hover:scale-105'>
              <img src={third} alt="Brand strategy logo" className='mb-7' />
              <h2 className='text-white text-2xl mb-3'>Brand strategy</h2>
              <p className='text-zinc-400 text-base w-80'>I help design strong and captivating brand strategies. Through thorough research and market analysis.</p>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default App