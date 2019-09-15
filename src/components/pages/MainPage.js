import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Color from '../Color';

function MainPage() {
  const postColor = new Color().Post;
  const searchColor = new Color().Search;
  const subheaderColor = new Color().Subheader;

    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        textAlign: 'center',
        alignItems: 'center',
        padding: '10%'
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
      }
    }));
  
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography className={classes.header}>Welcome to VoiceChain</Typography>
        <Typography className={classes.subheader}>Uncensored content. Available permanently.</Typography>
        <Grid  container
        direction="row"
        justify="center"
        alignItems="center"
        >
          <tr style={{width: '100%'}}>
            <Link to="/search" style={{ textDecoration: 'none' }}>
              <Button className={classes.button} style={{backgroundColor: searchColor,}}>Search</Button>
            </Link>
            <Link to="/post" style={{ textDecoration: 'none' }}>
              <Button className={classes.button} style={{backgroundColor: postColor,}}>Post</Button>
            </Link>
          </tr>
        </Grid>
        
    </div>


  );
}

  export default MainPage;