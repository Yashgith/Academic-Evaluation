import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './Components/Login'
import Student_Section from './Components/Student_Section'
import Teacher_Section from './Components/Teacher_Section'
import Exam_Section from './Components/Exam_Section'
import Contact from './Components/Contact'

 class App extends Component{ 
  constructor(props) {
    super(props)
  
    this.state = {
       auth:0,
    }
  }
  loginhandler=()=>{
    this.setState({auth: !this.state.auth})
  }
  render(){

    return (
      <>
       <BrowserRouter>
       <Navbar login={this.loginhandler} status={this.state.auth}/>
       <Routes>
           
            <Route path='/students' element={<Student_Section/>}></Route>
            <Route path='/teachers' element={<Teacher_Section/>}></Route>
            <Route path='/examsection' element={this.state.auth ? <Navigate to="/students"/>:<Exam_Section/>}>
            </Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
  
    </Routes>
       </BrowserRouter>
      </>
    )
  }
}

export default App;
