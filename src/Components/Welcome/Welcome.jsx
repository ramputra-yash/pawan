import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome_main container'>
      <div className="bg-body-tertiary p-5 rounded">
      <div className="col-sm-8 py-5 mx-auto">
        <h1 className="display-5 fw-bold" style={{color:'#0897CF'}}>Welcome in A+ Study Point</h1>
        <br />
        <p className='fs-5' style={{fontStyle:'italic'}}>Welcome to A+ Study Point Tuitions Classes, where every student is valued and every achievement celebrated.</p>
        <p>At A+ Study Point, we believe in nurturing young minds and guiding them towards academic excellence. Our dedicated team of experienced educators is committed to providing personalized attention and a supportive learning environment to help students achieve their full potential.</p>
        <p>Whether you're preparing for board exams, competitive exams, or simply looking to enhance your knowledge, A+ Study Point is here to support you every step of the way. Join us and embark on a journey of learning, growth, and success.</p>
    </div>
    </div>
    </div>
  )
}

export default Welcome
