import React, {Component} from 'react';
import Router from 'react-router';

class App extends React.Component {
  render() {

    return (
        <div>
           <ul>
              <li> Home</li>
              <li> Stuff </li>
              <li> Contact</li>
           </ul>
           <div className="content">

           </div>
        </div>
      );
  }
}

export default App;