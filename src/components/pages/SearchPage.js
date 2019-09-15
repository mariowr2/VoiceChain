import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Color from '../Color';

const SearchPage = (props) => {
  const persona = 'Kevin Navarro';
  const date = '2019/09/14';
  const [page, setPage] = useState('search');
  const [hashcode, setHashcode] = useState('search');
  const [success, setSuccess] = useState('false');
  const searchColor = new Color().Search;
  const subheaderColor = new Color().Subheader;
  const base = <FormControl
  style={{ width: '98%', textAlign: 'center', paddingBlockEnd: '20%', backgroundColor: 'white' }}
  > 
  <InputLabel htmlFor="my-input">Enter the code to find the truth.</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"  />
  </FormControl>

const handleClick = () => {
  setPage('confirm');
  setHashcode(document.getElementById('my-input').value);
  setSuccess('true');
}
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      alignItems: 'center',
      padding: '5%',
    },
    header: {
      fontSize: '2.5rem',
      fontWeight: 300,
      color: searchColor
    },
    subheader: {
      fontSize: '1rem',
      color: subheaderColor
    },
    button: {
      padding: theme.spacing(1),
      fontWeight: 300,
      color: 'white',
      textAlign: 'center',
      alignContent: 'center',
      paddingLeft: '5rem',
      paddingRight: '5rem',
      marginTop: '2rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      textTransform: 'none'
    },

    inputRoot: {
      color: 'inherit',
      borderColor: 'black'
    },
    wrapper: {
      marginTop: '1em',
      borderRadius: '3.5px',
      borderWidth: '0.6px',
      backgroundColor: 'white',
      borderColor: subheaderColor,
      borderStyle: 'solid',
      alignSelf: 'center',
      alignContent: 'center',
      width: '100%'
    }

  }));

  const classes = useStyles();
  if (page === 'search') {
    return (
      <div className={classes.root}>
        <Typography className={classes.header}>Find the message</Typography>
        <div className={classes.wrapper}>
          {base}
        </div>
        <Button className={classes.button} style={{ backgroundColor: searchColor }} onClick={handleClick}>Search</Button>
      </div>
    )
  } else {
    if (success === 'false') {
      return (
      <div className={classes.root}>
      <Typography className={classes.header}>Your code did not relate to a message</Typography>
    </div>
    )
    } else {
    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
            <Typography className={classes.header} style={{ fontWeight: '500', backgroundColor: 'black', color: 'white' }}>From {persona}</Typography>
            <Typography className={classes.header} style={{ fontWeight: '300', fontSize: '100%', fontStyle: 'italic', backgroundColor: 'black', color: 'white' }}>{date}</Typography>
          <Typography style={{ textAlign: 'center', fontSize: '200%', paddingTop: '5%', paddingBottom: '20%', backgroundColor: 'black', color: 'white', font: 'Roboto' }}>
            INSERT MESSAGE HERE
            </Typography>
        </div>
      </div>
    )
  }
  }
};


export default SearchPage;