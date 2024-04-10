import React from "react";
import createImage from '../../assets/create.jpg'
import './Card.css'

function Card({image, text}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={image} style={{width:'18rem', height:'16rem',objectFit:'cover',backgroundPosition:'center'}} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
