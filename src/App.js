import React, {Component} from 'react'

import Buttons from './Buttons'
import NoMatch from './NoMatch'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
    <h3>welcome</h3>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <h3>me</h3>
  </div>
)

class Info extends React.Component {
  render() {
    return (
      <div>
          <h3>Lots of Info</h3>
      </div>
    );
  }
}


const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/buttons">Buttons</Link></li>
      </ul>

      <hr/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/info" component={Info}/>
      <Route path="/buttons" component={Buttons}/>
      <Route component={NoMatch}/>
    </Switch>
    </div>
  </Router>
)
export default App