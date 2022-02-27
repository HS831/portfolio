import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Aos from 'aos';
import "aos/dist/aos.css";

const useStyles = makeStyles(theme =>({
    aboutContainer: {
        marginLeft: '6em',
        marginTop: '12em',
        marginRight: '4em',
        [theme.breakpoints.down('xs')] : {
            marginTop: '10em',
            marginLeft: '1em',
            marginRight: '1em'
        }
    },

    heading: {
        fontFamily: 'Lato',
        fontSize: '3.5em',
        color: '#ccd6f6',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px',
        [theme.breakpoints.down('xs')] : {
            fontSize: '2em',
        }
    },

    btn: {
        backgroundColor: '#90E0EF',
        height: '3em',
        width: '10em',
        marginLeft: '4em',
        [theme.breakpoints.down('md')] : {
            marginTop: '1em',
            marginLeft: '0.5em'
        },
        '&:hover' : {
            backgroundColor: '#90E0EF',
        }
    }
}))

function Contact () {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])


  return (
      <div data-aos='fade-up' className={classes.aboutContainer}>
          <Typography variant='h1' className={classes.heading}>Contact Me</Typography>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button variant='oultined' className={classes.btn} color='primary' startIcon={<GitHubIcon />}>Github</Button>
                <Button variant='oultined' className={classes.btn} color='primary' startIcon={<LinkedInIcon />}>Linkedin</Button>
                <Button variant='oultined' className={classes.btn} color='primary' startIcon={<InstagramIcon />}>Instagram</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant='oultined' className={classes.btn} color='primary' startIcon={<MailOutlineIcon />}>Mail</Button>
                <Button variant='oultined' className={classes.btn} color='primary' startIcon={<FacebookIcon />}>Facebook</Button>
                <Button variant='oultined' className={classes.btn} color='primary' startIcon={<TwitterIcon />}>Twitter</Button>
              </Grid>
          </Grid>
      </div>

  )
}

export default Contact;