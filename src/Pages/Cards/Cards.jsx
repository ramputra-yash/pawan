import React from "react";
import Card from "../../Components/Card/Card";
import "./Cards.css";
import visualizeImage from '../../assets/visualize.jpg';
import createImage from '../../assets/create.jpg';
import growImage from '../../assets/grow.jpg';

function Cards() {
  return (
    <div className="container cards">
      <Card image={visualizeImage} text={'Visualize it'} />
      <Card image={createImage} text={'Create it'} />
      <Card image={growImage} text={'Grow it'} />
    </div>
  );
}

export default Cards;
