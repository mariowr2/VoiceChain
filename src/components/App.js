import React from 'react';
import Particles from 'react-particles-js';
import { getStatementInstance, getStatementFactory, getStatementInstancesAddresses } from '../api'

import { getStatement } from '../eth/statement';
import { Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Main from './pages/MainPage';
import Info from './pages/InfoPage';
import Mission from './pages/MissionPage';
import Post from './pages/PostPage';
import PostConfirmation from './pages/PostConfirmation';
import Search from './pages/SearchPage';
import ParticleComponent from './ParticlesContainer';
import history from '../history';
import './App.css';

function App() {
  let bgColor = 'transparent';

  let styles = {position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }

  return (
    <div style={styles} >
      <ParticleComponent />
      <Router history={history}>
        <Navbar />
        {/* <Button variant="contained" color="primary" onClick={getFactoryItems}>
        This is a button
      </Button> */}
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/how-does-it-work" exact component={() => <Info />} />
          <Route path="/our-mission" exact component={Mission} />
          <Route path="/post" exact component={Post} />
          <Route path="/post-confirmation" exact component={PostConfirmation} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
      </div>
  );
}

const getFactoryItems = async() => {

  const factory = getStatementFactory('0x9628B80CfC747725Fa0f6a9b21D1931dDFbbe4c8');
  console.log(factory);

  const addresses = getStatementInstancesAddresses();
  console.log(addresses);

  console.log(addresses);
  const statementInstance = getStatementInstance(addresses[0]);
  console.log(statementInstance);

}

export default App;
