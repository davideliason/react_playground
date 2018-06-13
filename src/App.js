import React, { Component } from 'react';
import Colorizer from './Colorizer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       colorToPass: "orange"
    }
  }

  render() {
    var appStyle = {
      backgroundColor : "blue",
      width: 300,
      height: 300,
      opacity: 0.5,
      textAlign: "center",
      padding: 0,
     
    }
    return (
      <div style={appStyle}> 
        <Colorizer />
      </div>
    );
  }
}

export default App;
