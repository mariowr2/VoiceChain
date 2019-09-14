import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function MissionPage() {
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
      <div className={classes.button}>
          Mission
      </div>
    );
  }

  export default MissionPage;