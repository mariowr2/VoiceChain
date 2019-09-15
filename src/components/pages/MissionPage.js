import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function MissionPage() {
    const useStyles = makeStyles(theme => ({
      container: {
        paddingTop: '8%',
        paddingLeft: '20%',
        paddingRight: '20%',
      },
      title: {
        
      },
    }));
  
    const classes = useStyles();
    return (
          <div>
            <Container className={classes.container} style={{backgroundColor: 'white'}}>
              <Typography className={classes.title} style={{fontWeight: 500, fontSize: '120%'}}>About VoiceChain</Typography>
              <Typography>
              VoiceChain allows activists to share their work in an uncensorable, tamper-proof platform.To achieve this, we leverage decentralized technology: the Ethereum Blockchain, and the Interplanetary file system.
              </Typography>
          </Container>

          <Container className={classes.container}>
            <Typography style={{fontWeight: 500, fontSize: '120%'}}>Desired Impact</Typography>
            <Typography>
            VoiceChain will allow anyone who wants to have a voice to speak up. VoiceChain empowers activists and journalists to communicate their message to the world instantly; <b>no matter what continent, country or regime you live in</b>.
 
            </Typography>
          </Container>
      </div>
    );
  }

  export default MissionPage;