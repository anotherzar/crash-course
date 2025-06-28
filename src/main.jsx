import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'
import ToolsSection from './components/stackedToolsCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <Navbar />
    <div className='container mx-auto px-4 md:px-10 border-0 md:border-x md:border-white/50'>
      <div className='px-0 border-0 md:border-x md:border-white/50'>
        <App />
        <Footer />
      </div>
    </div>
    
  </StrictMode>,
)
