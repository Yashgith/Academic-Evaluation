import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className="contactform">
          <h2 id='header'>Contact-Us</h2>
          <label htmlFor="" id='first'>First Name</label><br />
          <input type="text" id='second' required/>
          <br />
          <label htmlFor="" id='first'>Last Name</label><br />
          <input type="text" id='second' required/>
          <br />
          <label htmlFor="" id='first'>Email</label><br />
          <input type="email" id='second' required/>
          <br />
          <label htmlFor="" id='first'>Questions or Queries</label><br />
          <textarea name="" id='second' cols="20" rows="2" required></textarea>

          <button type='submit' id='submit'>Submit</button>
      </div>
    </>
  )
}
