import React from 'react';

import web3 from '../eth/web3';
import factory from '../eth/factory';
import { getStatement } from '../eth/statement';
import { Router, Route, Switch } from 'react-router-dom';

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

const getFactoryItems = async() => {
  console.log("get factory called!");
  console.log(web3);
  console.log("web3 version is ",web3.version);
  console.log("this are the methods:");
  console.log(factory);
  
  let statementAddress = await factory.methods.getStatements().call();
  console.log("the response is",statementAddress);


  let statementContract = getStatement(statementAddress[0]);
  console.log(statementContract)

  //let miguelStatement = await statementContract.metthods.getMiguelStatement!

}

export default App;
