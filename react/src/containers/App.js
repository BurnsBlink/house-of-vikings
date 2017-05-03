import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';
import RaidContainer from '../containers/RaidContainer';
import VikingNameContainer from '../containers/VikingNameContainer';
import MediaContainer from '../containers/MediaContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(

      <Router history={browserHistory}>
        <Route>
          <Route path='/' component={Home} />
        </Route>

        <Route component={Layout}>
          <Route path="/raids" component={RaidContainer} />
          <Route path="/vikingname" component={VikingNameContainer} />
          <Route path="/media" component={MediaContainer} />
        </Route>

      </Router>
    )
  }
}

export default App;
