//import React from 'react';

import React, { Component } from "react";
//import exerciseImg from "../images/exercise.png";
import circlesImg from "../images/circles.png";
import "./styles/Card.css";
import "bootstrap/dist/css/bootstrap.css";

class Card extends Component {
  //background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);


  constructor(props){
    super(props)
    this.state={
      image : "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc"
    }
  }

  //Funcion que se ejecutará inmediatamente de que un compomente se monte
  componentDidMount(){
      setTimeout(() =>{
        this.setState({
          image : "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
        })
      }, 5000);
  }

  render() {

    const {leftColor,
          rightColor,
          img,
          title,
          description
      } = this.props;


    // return <h1>Hola mundo</h1>
    return (
    // <div className="card mx-auto Fitness-Card">

    <div className="card mx-auto Fitness-Card"
    //Estilos en línea
      style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
       }}
    >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={this.state.image} alt="" className="float-rigth" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
