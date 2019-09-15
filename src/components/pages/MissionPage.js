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
              <Typography className={classes.title} style={{fontWeight: 500, fontSize: '120%'}}>Our Story</Typography>
              <Typography>
                All over the world today, every news channel that we are exposed to have content that have a possibility of being altered or skewed to tell the story THEY want to tell. Every story has multiple sides with each person involved. We want those voices to be heard uncensored by the speaker themselves.
              </Typography>
          </Container>

          <Container className={classes.container}>
            <Typography style={{fontWeight: 500, fontSize: '120%'}}>Desired Impact</Typography>
            <Typography>
              VoiceChain will allow anyone who wants to have a voice to speak up. They are free to post whatever they want, and it won’t ever get taken down or altered because the content is not owned by anyone. With blockchain technology we allow content to be posted in a decentralized system. 
            </Typography>
          </Container>
      </div>
    );
  }

  export default MissionPage;