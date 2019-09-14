import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router, Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
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

export default App;
