import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate= useNavigate();

    function handleclick(){

        navigate('/examsection')
    }
  return (
    <>
        <div className="loginform">
        <label htmlFor="">Email</label>
        <input type="email" required/><br />
        <label htmlFor="">Password</label>
        <input type="password" required/>
        <br />
        <button onClick={handleclick}>Login</button>
        </div>
    </>
  )
}
