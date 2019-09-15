import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function InfoPage() {
  const useStyles = makeStyles(theme => ({
    container: {
      paddingTop: '1%',
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
            VoiceChain allows activists to share their work in an uncensorable, tamper-proof platform.To achieve this, we leverage decentralized technology: the Ethereum Blockchain, and the Interplanetary file system. VoiceChain empowers activists and journalists to communicate their message to the world instantly; no matter what continent, country or regime you live in.
            </Typography>
        </Container>

        <Container className={classes.container}>
          <Typography style={{fontWeight: 500, fontSize: '120%'}}>How to use VoiceChain</Typography>
          <Typography>
          In order to use VoiceChain, users need to have Ether to post on the decentralized system. Once Ether is acquired, they can use an EtherWallet to spend the Ether they have on VoiceChain. Here are the steps to use VoiceChain:
          </Typography>
          <br />
          <Typography><b>1. Get currency:</b> &nbsp; Buy Ether on <a href="www.coinbase.com">Coinbase</a></Typography>
          <Typography><b>2. Get wallet:</b> &nbsp; Sign up for <a href="www.metamask.io">MetaMask</a></Typography>
          <Typography><b>3. Get heard:</b> &nbsp; Make post on VoiceChain</Typography>
        </Container>
        <Container className={classes.container} style={{backgroundColor: 'white'}}>
            <Typography className={classes.title} style={{fontWeight: 500, fontSize: '120%'}}>What is Ethereum?</Typography>
            <Typography>
            Ethereum is a programmable blockchain. The cryptocurrency is called Ether (ETH). 
            </Typography>
        </Container>
        <Container className={classes.container} style={{backgroundColor: 'white'}}>
            <Typography className={classes.title} style={{fontWeight: 500, fontSize: '120%'}}>What is MetaMask?</Typography>
            <Typography>
            MetaMask is a browser extension that is also an Ether wallet. It handles all the security and keys associated with Ethereum. Therefore, after signing into MetaMask users can easily use their Ether anywhere on the web. 
            </Typography>
        </Container>

    </div>
  );
}

export default InfoPage;