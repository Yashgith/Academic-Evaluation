import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Subjects.css'

export default function Subjects() {
    
    const navigate= useNavigate();

    function submithandler(){
        navigate('/submitted')
    }

  return (
    <>
      
      <div class="row">
  <div class="col">
  <div class="text-center">
  <img src="https://educloud.app/lms/src/performance-analytics/hero.png" class="rounded" width="900px"/>
</div>
  </div>
  <div class="w-100"></div>
  <div class="col">
  <div className="subjectform">
    <form>
    <h2 id='header'>Subjects Score</h2><br />
           <label htmlFor="" id='first'>Subject Name</label><br />
           <input type="text" name='name'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Subject Incharge</label><br />
           <input type="text" name='lastname'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Student Name</label><br />
           <input type="text" name='lastname'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Total Marks</label><br />
           <input type="number" name='email' id='second' required/>
         <br /><br /> 
         <label htmlFor="" id='first'>Suggestion</label><br />
          <textarea name="comment" id='second' cols="20" rows="2" required></textarea>

         <button class="d-grid gap-2 col-6 mx-auto" type='submit'  id='submit' onClick={submithandler}>Submit</button>
    </form>
       </div>
   </div>
</div>
    </>
  )
}
