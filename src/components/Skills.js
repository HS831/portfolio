import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';

import Aos from 'aos';
import "aos/dist/aos.css";


import react from '../assets/react.png';
import nodejs from '../assets/nodejs.svg';
import mongodb from '../assets/mongodb.svg';
import firebase from '../assets/firebase.svg';
import mui from '../assets/mui.png';
import mysql from '../assets/mysql.png';
import express from '../assets/express.png';
import js from '../assets/js.png';

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
    skills: {
        height: '5em',
        width: '5em',
        [theme.breakpoints.down('xs')] : {
            height: '2em',
            width: '2em'
        }
    },
    listItem: {
        fontFamily: 'Lato',
        color: '#ccd6f6'
    },
    divider: {
        backgroundColor: '#ccd6f6',
        position: 'relative',
        top: '-20px',
        left: '90px'
    }
}))

function Skills() {

    useEffect(() => {
        Aos.init({duration : 2000})
      }, [])
     
    const classes = useStyles();
    return (
        <div data-aos='fade-up' className={classes.aboutContainer}>
            <Typography variant='h1' className={classes.heading}>My Skills
            </Typography>
            <Grid container spacing={2}>
                <Grid item md>
                    <Typography variant='body1' className={classes.body}>
                        I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing. Here, are some of my skills : -
                    </Typography>
                    <Hidden only='xs'>
                    <ListItem>
                        <ListItemIcon>
                            <SendIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}>React Js</ListItemText>
                        <ListItemIcon>
                            <SendIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}>Node Js</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SendIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}>Express Js</ListItemText>
                        <ListItemIcon>
                            <SendIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}>Mongo DB</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SendIcon color='primary' />
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}>JavaScript</ListItemText>
                        <ListItemIcon>
                            <SendIcon color='primary'/>
                        </ListItemIcon>
                        <ListItemText className={classes.listItem}>Material UI</ListItemText>
                    </ListItem>
                    </Hidden>
                </Grid>
                <Grid item md >
                    <Grid container spacing={3}>
                    <Grid item md={3} xs={3}>
                       <img alt='react-icon' src={react} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={nodejs} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={mongodb} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={express} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={firebase} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={mui} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={js} className={classes.skills}></img>
                    </Grid>
                    <Grid item md={3} xs={3}>
                        <img alt='react-icon' src={mysql} className={classes.skills}></img>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Skills;