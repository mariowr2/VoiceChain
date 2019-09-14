import React from 'react';

import { getStatementInstance, getStatementFactory, getStatementInstancesAddresses } from '../api'

import { getStatement } from '../eth/statement';
import { Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Main from './pages/MainPage';
import Info from './pages/InfoPage';
import Mission from './pages/MissionPage';
import Post from './pages/PostPage';
import Search from './pages/SearchPage';
import history from '../history';

function App() {
  return (
    <div>
      <Router history={history}>
        <Navbar />
        <Button variant="contained" color="primary" onClick={getFactoryItems}>
        This is a button
      </Button>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/how-does-it-work" exact component={Info} />
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
  console.log(factory);

  const addresses = getStatementInstancesAddresses();
  console.log(addresses);

  const statementInstance = getStatementInstance(addresses[0]);
  console.log(statementInstance);

}

export default App;
