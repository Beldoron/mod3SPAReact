import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './Main.css';
import Home from '../Home/Home';
import Teams from '../Teams/Teams';
import Games from '../Games/Games';
import Standing from '../Standing/Standing';
import Rules from '../Rules/Rules';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';

const Main = (props) => {


    return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/teams' component={Teams}/>
        <Route path='/games' component={Games}/>
        <Route path='/standing' component={Standing}/>
        <Route path='/rules' component={Rules}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </main>
  )
}

export default Main;





