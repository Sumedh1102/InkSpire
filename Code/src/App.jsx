import React from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Footer from '../src/components/Footer'



const App = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
