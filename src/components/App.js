import React from 'react';
import Particles from 'react-particles-js';
import { getStatementInstance, getStatementFactory, getStatementInstancesAddresses } from '../api'
import { getFactoryOwner, getStatementAddressByIndex, getStatementFromInstance } from '../api'
import { getStatementAuthor, createStatement, getLatestStatementAddress } from '../api'


import { Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Main from './pages/MainPage';
import Info from './pages/InfoPage';
import Mission from './pages/MissionPage';
import Post from './pages/PostPage';
import Search from './pages/SearchPage';
import ParticleComponent from './ParticlesContainer';
import history from '../history';
import './App.css';

function App() {

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
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/how-does-it-work" exact component={() => <Info />} />
          <Route path="/our-mission" exact component={Mission} />
          <Route path="/post" exact component={Post} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
      </div>
  );
}

const getFactoryItems = async() => {




  // let author;
  // getStatementAuthor(addressByIndex).then(  //GET THE STATEMENT AUTHOR FROM AN EXISTING STATEMENT CONTRACT
  //   function(returnVal) {
  //     author = returnVal;
  //     console.log("author is ",author);

  //   }
  // );

  


}

export default App;
