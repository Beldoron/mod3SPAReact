import React, { Component } from 'react';
import './Home.css';
import homeone from '../../img/image1.jpg';
import vsone from '../../img/vs.jpg';

const Home = (props) => {
    return (  
      <div > 
        <div className="welcome">
          <img className="homeone" src={homeone} />
           
        </div> 
        <div className="introtext">
        Upcoming Matches
        </div>
        <div className="welcome">
        <img className="hometwo" src={vsone} />
        </div>
        <div className="splitter"></div>
        <div className="welcome">
        <img className="hometwo" src={vsone} />
        </div>
        <div className="splitter"></div>
        <div className="welcome">
        <img className="hometwo" src={vsone} />
        </div>
        <div className="splitter"></div>
        <div className="welcome">
        <img className="hometwo" src={vsone} />
        </div>
      </div>  
    );
  }
export default Home;

