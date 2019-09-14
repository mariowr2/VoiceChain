import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../img/logo.png';

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
      <Button variant="contained" color="primary" className={classes.button}>
        This is a button
      </Button>
      <img src={Logo} />
    </div>
  );
}

export default App;
