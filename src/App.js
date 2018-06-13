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
      width: 500,
      height: 500,
      opacity: 0.5,
      textAlign: "center",
      paddingTop: 20
     
    }
    return (
      <div style={appStyle}> 
        <h5>Colorizer</h5>
        <Colorizer />
      </div>
    );
  }
}

export default App;
