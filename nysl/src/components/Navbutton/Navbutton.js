import React, { Component } from "react";
import navigation from '../../img/navigation.svg';


const Navbutton = (props) =>  {
 
    return (
        <button> <img src={navigation} alt="my image" width="30" height="30" onMouseDown={props.handleMouseDown} />
        </button>
    );
  }

  

export default Navbutton;



