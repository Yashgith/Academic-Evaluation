import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Student_Section.css'

export default function Student_Section() {

    const navigate= useNavigate();

    function submithandler(){
        navigate('/submitted')
    }
   
  return (
    <>
       <div class="row">
  <div class="col">
  <div class="text-center">
  <img src='/Sample.png' class="rounded" width="900px"/>
</div>
  </div>
  <div class="w-100"></div>
  <div class="col">
  <div className="learnerform">
    <form>
    <h2 id='header'>Learners Form</h2><br />
           <label htmlFor="" id='first'>Full Name</label><br />
           <input type="text" name='name'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Subject Incharge</label><br />
           <input type="text" name='lastname'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Date</label><br />
           <input type="date" name='email' id='second' required/>
         <br /> <br />     
         <label htmlFor="" id='first'>Description</label><br />
          <textarea name="comment" id='second' cols="20" rows="2" required></textarea>

         <button type='submit' class="d-grid gap-2 col-6 mx-auto"  id='submit' onClick={submithandler}>Submit</button>
    </form>
       </div>
 
  
  </div>
</div>

    </>
  )
}