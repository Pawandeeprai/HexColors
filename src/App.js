import React, { Component } from 'react';
import './App.css';
import BigBox from './BigBox'
import Buttons from './Buttons'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      addColor: null
    }
  }

  buttonClickHandler = e => {
    if(e.target.attributes.value) {
      debugger
      this.setState({ addColor: e.target.attributes.value.value })
    }
  }

  render() {
    return (
      <div className="container">
        <BigBox addColor={ this.state.addColor } />
        <Buttons clickHandler={ this.buttonClickHandler } colors={ ['ff,0,0', '0,ff,0', '0,0,ff'] }/>
      </div>
    );
  }
}

export default App;
