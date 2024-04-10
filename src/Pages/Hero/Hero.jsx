import React from 'react'
import './Hero.css'
import logo from '../../assets/hero_image.jpg'

function Hero() {
  return (
    <div className="hero_main container">
    <div className="hero px-4 pb-5 my-5 text-center">
    <img src={logo} alt="logo"/>
    <h1 className="display-5 fw-bold text-body-emphasis">Empower Minds, Transform Future.</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">A+ Study Point is not just a tuition class; it's a beacon of academic excellence, guiding students towards their full potential. With a focus on holistic learning, we believe in nurturing not just the mind but also the character, preparing students not just for exams but for life.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="button btn btn-lg">Welcome!</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Hero
