import React, { Component } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import logo from '../../img/logo.png';
import home from '../../img/home-button.svg';
import { Container, Row, Col, Grid, Hidden, Visible } from 'react-grid-system';


import "./Menu.css";

class Menu extends Component {
  render() {



    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>

        <header>
          <div className="containerlogo"><img className="logo" src={logo} />
          </div>
          <nav className="navi">
            <Container fluid style={{ lineHeight: '50px' }}>

              <Row className="nav navhome underlineone">
                <Col className="homebutton" xs={3}> </Col>
                <Col xs={9} className="Link" ><Link to='/'><button className="button">Home </button></Link></Col>
              </Row >
              <Row className="nav">
                <Col className="gamesbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/teams'><button className="button">Teams </button> </Link></Col>
              </Row>
              <Row className="nav underlineone">
                <Col className="teamsbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/Games'><button className="button">Games </button> </Link></Col>
              </Row>
              <Row className="nav underlinetwo">
                <Col className="standingbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/Standing'> <button className="button">Standing </button></Link></Col>
              </Row>
              <Row className="nav">
                <Col className="rulesbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/Rules'> <button className="button">Rules </button></Link></Col>
              </Row>
              <Row className="nav underlineone">
                <Col className="aboutbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/About'> <button className="button">About </button></Link></Col>
              </Row>
              <Row className="nav underlinetwo">
                <Col className="contactbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/Contact'> <button className="button">Contact </button></Link></Col>
              </Row>
              <Row className="nav ">
                <Col className="loginbutton" xs={3}> </Col>
                <Col xs={9} className="Link"><Link to='/Login'> <button className="button">Login </button></Link></Col>
              </Row>
            </Container>
           
          </nav>
        </header>
      </div>

    );
  }
}

export default Menu;


