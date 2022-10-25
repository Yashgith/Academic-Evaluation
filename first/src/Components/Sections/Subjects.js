import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Subjects.css'
import { set } from 'mongoose';
import {v4 as uuidv4} from "uuid"

export default function Subjects() {
    
    const navigate= useNavigate();

    function submithandler(){
        navigate('/submitted')
    }

    const QuestionList=[
      {
         question:"Which of the following is used to read an HTML page and render it?",
         answerList:[
          {id:0,answer:"Web Browser",isCorrect:true},
          {id:1,answer:"Web Server",isCorrect:false},
          {id:2,answer:"Web Matrix",isCorrect:false},
          {id:3,answer:"Web Network",isCorrect:false},
  
         ],
      },
      {
        question:"What is DOM in HTML?",
        answerList:[
         {id:0,answer:" Language dependent application programming",isCorrect:false},
         {id:1,answer:"Application programming interface",isCorrect:false},
         {id:2,answer:"Hierarchy of objects in ASP.NET",isCorrect:false},
         {id:3,answer:"Convention for representing and interacting with objects in html documents",isCorrect:true},
  
        ],
     },
  
     {
      question:"Which is the latest version of CSS",
      answerList:[
       {id:0,answer:"30",isCorrect:false},
       {id:1,answer:"15",isCorrect:false},
       {id:2,answer:"26",isCorrect:true},
       {id:3,answer:"20",isCorrect:false},
  
      ],
   },
  
   {
    question:" The Default Value Of position Attribute Is",
    answerList:[
     {id:0,answer:"Static",isCorrect:true},
     {id:1,answer:"Inherit",isCorrect:false},
     {id:2,answer:"Absolute",isCorrect:false},
     {id:3,answer:"Fixed",isCorrect:true},
  
    ],
  },
  {
    question:"Number of primitive data types in Java are?",
    answerList:[
     {id:0,answer:"9",isCorrect:false},
     {id:1,answer:"8",isCorrect:true},
     {id:2,answer:"7",isCorrect:false},
     {id:3,answer:"6",isCorrect:false},
  
    ],
  },
  
  {
    question:"public class Solution { public static void main(String args){  byte x = 127; x++; x++;  System.out.print(x); } } ",
    answerList:[
     {id:0,answer:"2",isCorrect:false},
     {id:1,answer:"127",isCorrect:false},
     {id:2,answer:"-127",isCorrect:true},
     {id:3,answer:"129",isCorrect:false},
  
    ],
  },
  
  {
    question:"What type of language is PHP?",
    answerList:[
     {id:0,answer:"User-side scripting",isCorrect:false},
     {id:1,answer:"Client-side scripting",isCorrect:false},
     {id:2,answer:"Server-side scripting",isCorrect:true},
     {id:3,answer:"None",isCorrect:false},
  
    ],
  },
  
  {
    question:"Choose the incorrect data type of php among the following",
    answerList:[
     {id:0,answer:"Resources",isCorrect:false},
     {id:1,answer:"Objects",isCorrect:false},
     {id:2,answer:"Null",isCorrect:false},
     {id:3,answer:"Void",isCorrect:true},
  
    ],
  },
  
  
  ];

  const[currrentQuestion,setCurrentQuestion]=useState(0);
const[score,setScore]=useState(0);
const[clicked,setClicked]=useState(false);
const[showScore,setShowScore]=useState(false);



 const handleCorrectAnswer=(isCorrect)=> {

    if(isCorrect)
    {
      setScore(score+1)
    }

    setClicked(true)
 }

 const nextQuestion=()=>{
   setClicked(false);

   if(currrentQuestion < QuestionList.length-1)
   {
     setCurrentQuestion(currrentQuestion + 1 )
   }
   else{
    setShowScore(true);
   }
 }

 const playagain=()=>{
   
   setCurrentQuestion(0)
   setScore(0)
   setShowScore(false)
 }

  return (
    <>
      

    <div className='subjectpage border-bottom-0'>


  <div class="text-center">
  <img src="https://educloud.app/lms/src/performance-analytics/hero.png" class="rounded" width="900px"/>
   </div>

     <h1 className='text-center'>Subjects Analysis</h1>
   <div class="row">
    <div class="col">
  
    <div className="subjectform">
    <form>
    <h2 id='header'>Subjects Score</h2><br />
           <label htmlFor="" id='first'>Subject Name</label>
           <input type="text" name='name'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Subject Incharge</label>
           <input type="text" name='lastname'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Student Name</label>
           <input type="text" name='lastname'  id='second' required/>
           <br /><br />
           <label htmlFor="" id='first'>Total Marks</label>
           <input type="number" name='email' id='second' required/>
         <br />
         <label htmlFor="" id='first'>Suggestion</label><br />
          <textarea name="comment" id='second' cols="20" rows="2" required></textarea>

         <button class="d-grid gap-2 col-6 mx-auto" type='submit'  id='submit' onClick={submithandler}>Submit</button>
    </form>
       </div>

    </div>
    <div class="col">

    <div className='Quizform'>
        {showScore ? (
           <div>
            <div className='completed'><h2>Completed</h2></div>
            <div className='score'>
              Your Score: {score} / {QuestionList.length}
            </div>
            <div className='playagain'>
              <button onClick={playagain}>TRY AGAIN</button>
            </div>
           </div>
        ):( 
    
      <div className='form'>
         <h2 id='textheader'>Quiz Form</h2>
        <div className='questinosection'>
          <div className='questioncnt'>
            Question {currrentQuestion+1} of {QuestionList.length}
          </div>
          <div className='questiontxt'>
            {QuestionList[currrentQuestion].question}
          </div>
         </div>
         <div className="answersection">
          {QuestionList[currrentQuestion].answerList.map((answerOption) =>{
            return( 
            <li className='answerlist' key={uuidv4()} >
              <button className='answer-button' onClick={()=>handleCorrectAnswer(answerOption.isCorrect)}>{answerOption.answer}</button>
            </li>
            )
          })}
         </div>
      <div>
        <button className='nextbtn' onClick={nextQuestion}>
        Next
        </button>
      </div>
      </div>
      )}
      </div>
    </div>
  </div>


</div>
  


    </>
  )
}
