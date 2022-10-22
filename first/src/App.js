import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


export default function App() {

  
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
    </>
  )
}
