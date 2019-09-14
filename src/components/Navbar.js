import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../img/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: '132px',
    height: '35px',
  }  

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none'}}>
        <Toolbar style={{backgroundColor: 'white'}}>
        <img src={Logo} className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
          
          </Typography>
          <Button color="inherit" style={{color: 'black'}}>Our Mission</Button>
          <Button color="inherit" style={{color: 'black'}}>How Does It Work</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}