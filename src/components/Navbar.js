import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Color from './Color';
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
        paddingTop: '10px',
        width: '145px',
        height: '39px',
    }

}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const grey = new Color().Subheader;

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ boxShadow: 'none' }}>
                <Toolbar style={{ backgroundColor: 'white' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img src={Logo} className={classes.logo} />
                    </Link>
                    <Typography variant="h6" className={classes.title}>

                    </Typography>
                    <Link to="/how-does-it-work" style={{ textDecoration: 'none' }}>
                        <Button style={{ color: grey, textTransform: 'none', fontWeight: 350 }}>About VoiceChain</Button>
                    </Link>
                                        <Link to="/our-mission" style={{ textDecoration: 'none' }}>
                        <Button uppercase={false} style={{ color: grey, textTransform: 'none', fontWeight: 350 }}>Our Mission</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    );
}