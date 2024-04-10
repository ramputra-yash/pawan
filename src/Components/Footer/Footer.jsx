import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className='footer_main py-5'>
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <ul className="nav flex-column">
          <li style={{background:'none'}} className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li style={{background:'none'}} className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li style={{background:'none'}} className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
          <li style={{background:'none'}} className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 A+ Study Point, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex gap-5">
        <li style={{background:'none',fontSize:'30px'}} className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com/people/A-Study-Point/61553077545735/?mibextid=qi2Omg&rdid=J7bkSvl1oqvSFIoY"><FaFacebook color='blue'/></a></li>
        <li style={{background:'none',fontSize:'30px'}} className="ms-3"><a className="link-body-emphasis" href="https://www.youtube.com/@thescientifi"><FaYoutube color='red'/></a></li>
        <li style={{background:'none',fontSize:'30px'}} className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com/a_studypoint_2024/?utm_source=qr&igsh=MTB5dDZqbHNyMWIwZw%3D%3D"><FiInstagram color='red'/></a></li>
      </ul>
    </div>
  </footer>
    </>
  )
}

export default Footer
