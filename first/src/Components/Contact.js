import React, { Component, useState } from 'react'
import './Contact.css'
import axios from 'axios'
import { response } from 'express'

// export default function Contact() {

//   const submit=()=>{
//     alert("Thank You")
//   }

//   const[state,setState]=useState({name:" ",lastname:" ",email:" ",comment:" "});

  
//   let name, value;
//   const inputhandler=(e)=>{

//     console.log(e);
//     name=e.target.name;
//     value=e.target.value;

//     setState({...state,[name]:value})
//   }

//   return (
//     <>
//       <div className="contactform">
//       <form>
//           <h2 id='header'>Contact-Us</h2>
//           <label htmlFor="" id='first'>First Name</label><br />
//           <input type="text" name='name' value={state.name}  onChange={inputhandler} id='second' required/>
//           <br />
//           <label htmlFor="" id='first'>Last Name</label><br />
//           <input type="text" name='lastname' value={state.lastname} onChange={inputhandler} id='second' required/>
//           <br />
//           <label htmlFor="" id='first'>Email</label><br />
//           <input type="email" name='email' value={state.email} onChange={inputhandler} id='second' required/>
//           <br />
//           <label htmlFor="" id='first'>Questions or Queries</label><br />
//           <textarea name="comment" id='second' value={state.comment} onChange={inputhandler} cols="20" rows="2" required></textarea>

//           <button type='submit' id='submit' onClick={submit}>Submit</button>
//       </form>
//       </div>
//     </>
//   )
// }



class Contact extends Component{

   constructor() {
     super()
   
     this.state = {
         Name:"",
         lastName:"",
         email:"",
         comment:"",
     }
     this.changeName= this.changeName.bind(this)
     this.changeLastName= this.changeLastName.bind(this)
     this.changeEmail= this.changeEmail.bind(this)
     this.changeComment= this.changeComment.bind(this)

   }

   changeName(event){
    this.setState({
      Name:event.target.value
    })
   }

   changeLastName(event){
    this.setState({
      lastName:event.target.value
    })
   }

   changeEmail(event){
    this.setState({
      email:event.target.value
    })
   }

   changeComment(event){
    this.setState({
      comment:event.target.value
    })
   }
     
   onSubmit(event){
    event.preventDefault()

      const registered={
        Name:this.state.Name,
        lastName:this.state.lastName,
        email:this.state.email,
        comment:this.state.comment
      }

      axios.post("http://localhost:4000/app/signup",registered)
      .then(response=> console.log(response.data))

      this.setState({
        Name:"",
        lastName:"",
        email:"",
        comment:""
      })
   }

   render(){
    return(
      <>
         <div className="contactform">
      <form onSubmit={this.onSubmit}>
           <h2 id='header'>Contact-Us</h2>
           <label htmlFor="" id='first'>First Name</label><br />
           <input type="text" name='name' value={this.state.Name} onChange={this.changeName} id='second' required/>
           <br />
           <label htmlFor="" id='first'>Last Name</label><br />
           <input type="text" name='lastname' value={this.state.lastName} onChange={this.changeLastName} id='second' required/>
           <br />
           <label htmlFor="" id='first'>Email</label><br />
           <input type="email" name='email' value={this.state.email} onChange={this.changeEmail} id='second' required/>
         <br />      
          <label htmlFor="" id='first'>Questions or Queries</label><br />
          <textarea name="comment" id='second' value={this.state.comment} onChange={this.changeComment} cols="20" rows="2" required></textarea>

         <button type='submit' id='submit'>Submit</button>
       </form>
      </div>
      </>
    )
   }
}

export default Contact;