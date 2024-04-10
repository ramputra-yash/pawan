import React from "react";
import "./Team.css";
import yashImage from '../../assets/yash.jpg';
import ownerImage from '../../assets/owner.png';

function Team() {
  return (
    <>
    <div className="container">
    <h1 className="t-h1">Our Team</h1>
      <div className="cards">
      <div className="card" style={{ width: "18rem" }}>
        <img style={{width:'100%',height:'250px',objectFit:'cover'}} src={ownerImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Owner :<span style={{color:'#0897CF'}}> Pawan Kumar</span></h5>
          <p>
          Pawan Kumar, the driving force behind A+ Study Point, is a passionate educator dedicated to transforming the way students learn and excel.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img style={{width:'100%',height:'250px',objectFit:'cover'}} src={yashImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Developer :<span style={{color:'#0897CF'}}> Yogesh Sharma</span></h5>
          <p>
          Yogesh Sharma is a 17-year-old web developer currently studying in the 10th standard. Yogesh has already gained 3 years of experience in web development.
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Team;
