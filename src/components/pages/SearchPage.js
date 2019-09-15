import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Color from '../Color';

const SearchPage = (props) => {
  const postColor = new Color().Post;
  const searchColor = new Color().Search;
  const subheaderColor = new Color().Subheader;

    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        textAlign: 'center',
        alignItems: 'center',
        padding: '10%',
      },
      header: {
        fontSize: '2.5rem',
        fontWeight: 300,
        color: searchColor
      },
      subheader:{
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
        borderColor: subheaderColor,
        borderStyle: 'solid',
        alignSelf: 'center',
        alignContent: 'center',
        width: '100%'
      }
      
    }));
  
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography className={classes.header}>Find the message</Typography>
        <div className={classes.wrapper}>
        <InputBase
              placeholder="Enter the message code..."
              inputProps={{ 'aria-label': 'search' }}
              style={{width: '98%', textAlign: 'center'}}
              />
        </div>
        <Button className={classes.button} style={{backgroundColor: searchColor,}}>Search</Button>
        
    </div>


  );
}

  export default SearchPage;