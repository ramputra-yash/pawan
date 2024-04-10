import React from 'react'
import './Owner.css'
import ownerImage from '../../assets/owner.png'

function Owner() {
  return (
    <div className='container'>
      <a className="click_about" href="#about"></a>
      <a id="about"></a>
      <div className="row flex-lg-row-reverse align-items-center g-4 py-5">
      <div className="col-10 text-center col-sm-8 col-lg-6">
        <img style={{width:'250px',margin:'auto'}} src={ownerImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
      </div>
      <div className="col-lg-6 px-5">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"> <span style={{color:'#0897CF'}}> Meet Pawan Kumar: </span><br/> The Visionary Behind A+ Study Point</h1>
        <p className="lead">Pawan Kumar, the driving force behind A+ Study Point, is a passionate educator dedicated to transforming the way students learn and excel. With a profound belief in the power of education to shape futures, Pawan brings a wealth of experience and innovative teaching methodologies to the table.</p>
      </div>
    </div>
    </div>
  )
}

export default Owner
