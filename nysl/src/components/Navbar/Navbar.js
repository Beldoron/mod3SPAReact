import React, { Component } from 'react';
import './Navbar.css';
import { Container, Row, Col } from 'react-grid-system';
import Navbutton from '..//Navbutton/Navbutton';
import Logo from '../../img/logo.png';
import { Route, Link, Switch } from 'react-router-dom';

const Navbar = (props) => {
    return (
      





      <div >
<Container className="holenav" fluid style={{ lineHeight: '28px' }}>


  <Row>
    <Col className="navbar"><Navbutton handleMouseDown={props.handleMouseDown}/></Col>
    <Col className="navbar"><h1> N<span className="highlight">YS</span>L</h1> </Col>
    <Col className="navbartwo"> <Link to='/'><button onClick={props.handleHomeButton}> <img src={Logo}  width="30" height="30" />
    </button> </Link> </Col>
  </Row>

</Container>

      </div>
    
    );
  }


export default Navbar;
