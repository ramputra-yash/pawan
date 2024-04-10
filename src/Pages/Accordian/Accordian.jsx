import React from "react";
import './Accordian.css'

function Accordian() {
  return (
    <div className="container">
      <a className="click_feature" href="#feature"></a>
      <a id="feature"></a>
      <h1 className="a-h1">Our Features...</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Personalized Attention
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            At A+ Study Point, we understand that every student is unique. That's why we provide personalized attention to each student, ensuring that their individual learning needs are met. Our small class sizes and dedicated teachers allow us to focus on the strengths and weaknesses of each student, helping them achieve academic excellence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Holistic Development
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We believe in nurturing not just the academic skills but also the overall development of our students. Through a balanced curriculum that includes academics, extracurricular activities, and life skills development, we aim to prepare our students to face the challenges of the future with confidence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Innovative Teaching Methods
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            We believe in nurturing not just the academic skills but also the overall development of our students. Through a balanced curriculum that includes academics, extracurricular activities, and life skills development, we aim to prepare our students to face the challenges of the future with confidence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
