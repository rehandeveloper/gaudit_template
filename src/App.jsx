import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './component/Blog'
import Description from './component/common/Description'
import Navbar from './component/common/Navbar'
import Hero from './component/common/Hero'
import AboutCompany from './component/AboutCompany'
import CompanyStatus from './component/CompanyStatus'
import Faq from './component/Faq'

function App() {


  return (
    <>
    <Description/>
    <Navbar/>
    <Hero/>
    <AboutCompany/>
    <CompanyStatus/>
    <Faq/>
   <Blog/>
    </>
  )
}

export default App
