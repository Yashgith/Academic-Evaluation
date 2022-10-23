import React, { Component } from 'react'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import Exam_Section from './Exam_Section'
import Login from './Login'
import Student_Section from './Student_Section'
import Teacher_Section from './Teacher_Section'


export default function Navbar(props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink  className="nav-link"  to='/examsection'>Exam_Section</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link"  to="/students">Student_Section</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/teachers">Teachers_Section</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" onClick={props.login}>
           {props.status ? "Logout":"Login"}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


 
    </>
  )
}
