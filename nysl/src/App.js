import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';


class App extends Component {


  
  state = {
    visible: false
  };
   

  toggleMenu = () => {
    this.setState({
        visible: !this.state.visible
    });
  }

  handleMouseDown = (e) => {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }

  handleHomeButton = () => {
    this.setState ({
      visible: false
    });
  }



  render() {

    var visibility = "Appvis";
    var blur = "Appvisblur";

    if (this.state.visible) {
      visibility = "Apphide";
    }

    if (this.state.visible) {
      blur = "Apphideblur";
    }

    

    return (
      <div className={visibility}  >
      <div  className={blur}> 
      <div >
        <Navbar  handleMouseDown={this.handleMouseDown}
        handleHomeButton={this.handleHomeButton} />
        
      </div>
      <div className="Content">
      <Main />
      </div>
      
      </div >
      <Menu className={visibility} handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
      </div>
    );
  }
 }

export default App;








