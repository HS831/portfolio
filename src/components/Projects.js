import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import Aos from 'aos';
import "aos/dist/aos.css";

import proj2 from '../assets/proj2.png';

const useStyles = makeStyles(theme => ({
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
    imgContainer: {
        marginTop: '1em',
        marginBottom : '2em',
        [theme.breakpoints.down('xs')] : {
            marginTop: '0',
            marginBottom: '0'
        }
    },
    proj: {
        height: '20em',
        width: '30em',
        borderRadius: '10px',
        objectFit: 'cover',
        [theme.breakpoints.down('md')] : {
            height : '20em',
            width: '30em',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        },
        [theme.breakpoints.down('xs')] : {
            height : '12em',
            width: '17em',
        }
    },
    heading: {
        fontFamily: 'Lato',
        fontSize: '3.5em',
        color: '#ccd6f6',
        fontWeight: 'bold',
        marginBottom: '40px',
        [theme.breakpoints.down('xs')] : {
            fontSize: '2em',
        }
    },
    projHeading: {
        fontFamily: 'Lato',
        fontSize: '2.5em',
        color: '#ccd6f6',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')] : {
            fontSize: '1.5em',
            textAlign: 'center',
            marginTop: '1.7px'
        }
    },
    projDescription: {
      [theme.breakpoints.down('xs')] : {
          marginBottom: '1.7em'
      }  
    },
    body: {
        fontFamily: 'Lato',
        color: '#ccd6f6',
        opacity: '0.5',
        fontSize: '1.2em',
        textAlign: 'justify',
        [theme.breakpoints.down('xs')] : {
            fontSize: '1em'
        }
    },
    button: {
        marginTop: '2em',
        marginBottom: '2em',
        marginLeft: '7em',
        height: '3em',
        width: '10em',
        backgroundColor: '#90E0EF',
        [theme.breakpoints.down('xs')] : {
            marginLeft: '2em', 
            height: '3em',
            width: '8em'
        },
        textTransform: 'none'
    }
}))

function Projects() {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({duration : 2000})
      }, [])


    return (
        <div data-aos='fade-up' className={classes.aboutContainer}>
            <Typography variant='h1' className={classes.heading}>My Projects</Typography>
                <div data-aos='fade-up'>
                    <Grid container justifyContent='flex-start' direction='row' spacing={2} className={classes.imgContainer}>
                        <Grid item xs={12} md={12} lg={6}>
                            <img alt='proj1-img' src={proj2} className={classes.proj}></img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Typography variant='h3' className={classes.projHeading}>Lorem Ipsum Ltd.</Typography>
                            <Typography variant='body1' className={classes.body}>These tough times have made us all aware of the importance of our loved ones and through this app, users can bring a their family and friend's faces by sending them their favoritedelicacy, medicines, or a simple heartfelt gift.</Typography>
                            <Button variant='contained' startIcon={<LanguageIcon />} className={classes.button}>Visit</Button>
                            <Button variant='outlined' startIcon={<GitHubIcon />} className={classes.button}>Github</Button>
                        </Grid>
                    </Grid>
                </div>
                <div data-aos='fade-up'>
                    <Grid container justifyContent='flex-start' direction='row' spacing={2} className={classes.imgContainer}>
                        <Grid item xs={12} md={12} lg={6}>
                            <img alt='proj1-img' src={proj2} className={classes.proj}></img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Typography variant='h3' className={classes.projHeading}>Lorem Ipsum Ltd.</Typography>
                            <Typography variant='body1' className={classes.body}>These tough times have made us all aware of the importance of our loved ones and through this app, users can bring a their family and friend's faces by sending them their favoritedelicacy, medicines, or a simple heartfelt gift.</Typography>
                            <Button variant='contained' startIcon={<LanguageIcon />} className={classes.button}>Visit</Button>
                            <Button variant='outlined' startIcon={<GitHubIcon />} className={classes.button}>Github</Button>
                        </Grid>
                    </Grid>
                </div>
                <div data-aos='fade-up'>
                    <Grid container justifyContent='flex-start' direction='row' spacing={2} className={classes.imgContainer}>
                        <Grid item xs={12} md={12} lg={6}>
                            <img alt='proj1-img' src={proj2} className={classes.proj}></img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Typography variant='h3' className={classes.projHeading}>Lorem Ipsum Ltd.</Typography>
                            <Typography variant='body1' className={classes.body}>These tough times have made us all aware of the importance of our loved ones and through this app, users can bring a their family and friend's faces by sending them their favoritedelicacy, medicines, or a simple heartfelt gift.</Typography>
                            <Button variant='contained' startIcon={<LanguageIcon />} className={classes.button}>Visit</Button>
                            <Button variant='outlined' startIcon={<GitHubIcon />} className={classes.button}>Github</Button>
                        </Grid>
                    </Grid>
                </div>
        </div>
    )
}

export default Projects;