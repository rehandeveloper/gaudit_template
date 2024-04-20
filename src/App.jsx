import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './component/common/Blog'
import Description from './component/common/Description'
import Navbar from './component/common/Navbar'

function App() {


  return (
    <>
    <Description/>
    <Navbar/>
   <Blog/>
    </>
  )
}

export default App
