import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import Aos from 'aos';
import "aos/dist/aos.css";

import TypewriterComponent from 'typewriter-effect';

const useStyles = makeStyles(theme => ({
    aboutContainer: {
        marginLeft: '6em',
        marginTop: '15em',
        marginRight: '4em',
        [theme.breakpoints.down('xs')] : {
            marginTop: '10em',
            marginLeft: '1em',
            marginRight: '1em'
        }
    },
    sub: {
        fontSize: '1em',
        color: '#90E0EF'
    }, 
    name : {
        fontSize: '4.5em',
        color: '#ccd6f6',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')] : {
            fontSize: '2em',
        }
    },
    shortDesc: {
        fontSize: '4.5em',
        color: '#ccd6f6',
        opacity: '0.5',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')] : {
            fontSize: '2em',
        }
    },
    body: {
        fontFamily: 'Lato',
        color: '#ccd6f6',
        opacity: '0.5',
        fontSize: '1.2em',
        textAlign: 'justify',
        [theme.breakpoints.down('xs')] : {
            fontSize: '0.9em'
        }
    },
    projButton: {
        outlineColor: '#90E0EF',
        color: '#90E0EF',
        textTransform : 'none',
        height: '4em',
        width: '15em',
        fontFamily: 'Lato',
        fontSize: '1em',
        marginTop: '1em',
        marginRight: '1em'
    },
    blogButton: {
        backgroundColor: '#90E0EF',
        textTransform : 'none',
        height: '4em',
        width: '15em',
        fontFamily: 'Lato',
        fontSize: '1em',
        marginTop: '1em',
        marginRight: '1em',
        '&:hover' : {
            backgroundColor: '#90E0EF',
        }
    }
}))

function About() {

    useEffect(() => {
        Aos.init({duration : 2000})
      }, [])
     

    const classes = useStyles();
    return (
        <div data-aos='fade-up' className={classes.aboutContainer}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography className={classes.sub} variant='subtitle1' gutterBottom>Hi my name is, </Typography>
                   
                    <Typography className={classes.name} variant='h1'>
                        <TypewriterComponent onInit={(typewriter) => {
                            typewriter.typeString("Harshit Mishra.").start();
                        }}></TypewriterComponent>
                        </Typography>
                    <Typography className={classes.shortDesc} variant='h1' gutterBottom>I build things for the Web.</Typography>
                    <Typography className={classes.body} variant='body1'>I’m a full-stack web developer specializing in building (and occasionally </Typography>
                    <Typography className={classes.body} variant='body1'>designing) exceptional digital experiences. Currently, I’m focused on</Typography>
                    <Typography className={classes.body} variant='body1'>learning new technologies and building beautiful web-apps.</Typography>
                    <Button variant='outlined' color='primary' className={classes.projButton}>Check out my Projects..</Button>
                    <Button variant='contained' className={classes.blogButton}>Read my Blogs..</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;