import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Color from '../Color';
import { createStatement, getLatestStatementAddress } from '../../api';

const PostPage = (props) => {
  const [page, setPage] = useState('post');
  const [message, setMessage] = useState(''); 
  const [hashcode, setHashcode] = useState('');
  const persona = 'Kevin Navarro';
  const postColor = new Color().Post;
  const subheaderColor = new Color().Subheader;
  const base = <FormControl
  style={{ width: '98%', textAlign: 'center', paddingBlockEnd: '20%', backgroundColor: 'white' }}
  > 
  <InputLabel htmlFor="my-input">Make your statement.</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"  />
  </FormControl>
  
  const handleClick = () => {
    const messageToPost = document.getElementById('my-input').value
    deployStatement(messageToPost);
  }

  const deployStatement = async(messageToPost) => {
    await createStatement(messageToPost, "Kevin Navarro"); //deploy the statement contract
    const latestAddress = await getLatestStatementAddress(); // get the address of the deployed contract

    setPage('confirm');
    setHashcode(latestAddress);//pass in address of contract
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      alignItems: 'center',
      padding: '3%',
    },
    header: {
      fontSize: '2rem',
      fontWeight: 300,
      color: postColor
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

    metamask: {
      fontStyle: 'italic'
    },

    inputRoot: {
      color: 'inherit',
      borderColor: 'black'
    },
    wrapper: {
      marginTop: '1em',
      borderRadius: '3.5px',
      borderWidth: '0.6px',
      borderColor: subheaderColor,
      borderStyle: 'solid',
      alignSelf: 'center',
      alignContent: 'center',
      width: '100%'
    }

  }));

  const classes = useStyles();
  if (page === 'post') {
    return (
      <div className={classes.root}>
        <Typography className={classes.header}>Posting as: {persona}</Typography>
        <Typography className={classes.metamask}>Logged in with Metamask</Typography>
        <div className={classes.wrapper}>
          {base}
        </div>
        <Button className={classes.button} style={{ backgroundColor: postColor }} onClick={handleClick}>Post</Button>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <Typography className={classes.header}>Your post has been made!</Typography>
        <Typography className={classes.metamask}>{message}</Typography>
        <Typography className={classes.metamask}>{hashcode}</Typography>
      </div>
    )
  }
}

export default PostPage;