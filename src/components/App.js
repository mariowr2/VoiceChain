import React from 'react';

import { getStatementInstance, getStatementFactory, getStatementInstancesAddresses } from '../api'
import { getFactoryOwner, getStatementAddressByIndex, getStatementFromInstance } from '../api'
import { getStatementAuthor, createStatement } from '../api'


import { Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Main from './pages/MainPage';
import Info from './pages/InfoPage';
import Mission from './pages/MissionPage';
import Post from './pages/PostPage';
import Search from './pages/SearchPage';
import history from '../history';
import './App.css';

function App() {
  let bgColor = 'transparent';

  let styles = {position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: bgColor
  }

  return (
    <div style={styles} >
      <Router history={history}>
        <Navbar />
        <Button variant="contained" color="primary" onClick={getFactoryItems}>
        TTTTEEEEEESSSSSSTTTTT
      </Button>
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

  const factory = getStatementFactory();
  //console.log(factory);

  const factoryOwner = getFactoryOwner();
  //console.log(factoryOwner);

  let addresses;
  getStatementInstancesAddresses().then(
    function(returnVal) {
      addresses = returnVal;
    }
  );;
  

  let addressByIndex;
  await getStatementAddressByIndex(0).then(
    function(returnVal) {
      addressByIndex = returnVal;
      console.log("returned address is ", addressByIndex)
    }
  );


  let statementInstance;
  getStatementInstance(addressByIndex).then(
    function(returnVal) {
      statementInstance = returnVal;
    }
  );

  let statement;
  getStatementFromInstance(addressByIndex).then(
    function(returnVal) {
      statement = returnVal;
      console.log("statement by m is , ", statement);
    }
  );


  let author;
  getStatementAuthor(addressByIndex).then(
    function(returnVal) {
      author = returnVal;
      console.log("author is ",author);

    }
  );

  

  await createStatement("ya estoy que ya", "Mario")

}

export default App;
