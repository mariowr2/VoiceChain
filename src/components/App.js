import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../img/logo.png';
import web3 from '../eth/web3';
import factory from '../eth/factory';
import { getStatement } from '../eth/statement';

function App() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  const classes = useStyles();

  return (
    <div className="App">
      <Typography>
        This is text
      </Typography>
      <Button variant="contained" color="primary" className={classes.button} onClick={getFactoryItems}>
        This is a button
      </Button>
      <img src={Logo} />
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

  let miguelStatement = await statementContract.metthods.getMiguelStatement!

}

export default App;
