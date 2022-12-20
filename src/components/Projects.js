import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import Aos from 'aos';
import "aos/dist/aos.css";

import proj3 from '../assets/proj3.png';
import proj2 from '../assets/proj2.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';

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
        backgroundColor: '#09F0FA',
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
                            <img alt='proj1-img' src={proj3} className={classes.proj}></img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Typography variant='h3' className={classes.projHeading}>Mini Kart</Typography>
                            <Typography variant='body1' className={classes.body}>Welcome to our sneaker website! We are excited to bring you a dynamic and user-friendly shopping experience powered by the MERN stack. MERN stands for MongoDB, Express.js, React.js, and Node.js - a powerful combination of technologies that allows us to create fast and efficient web applications. Our website features a wide selection of the latest sneakers from top brands, as well as a user-friendly interface and secure checkout process.</Typography>
                            <Button variant='contained' startIcon={<LanguageIcon />} className={classes.button}>Visit</Button>
                            <Button variant='contained' startIcon={<GitHubIcon />} className={classes.button}>Github</Button>
                        </Grid>
                    </Grid>
                </div>
                <div data-aos='fade-up'>
                    <Grid container justifyContent='flex-start' direction='row' spacing={2} className={classes.imgContainer}>
                        <Grid item xs={12} md={12} lg={6}>
                            <img alt='proj1-img' src={proj4} className={classes.proj}></img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Typography variant='h3' className={classes.projHeading}>Social Flix.</Typography>
                            <Typography variant='body1' className={classes.body}>Welcome to our social media REST API! We are excited to bring you a robust and scalable API for building social media applications. Our API is built using the powerful combination of Node.js, Express.js, and MongoDB, providing a flexible and reliable foundation for your project. With our API, you can easily build features such as user authentication, posting and commenting on content, and managing relationships between users. Whether you're building a small social media platform for a specific community or a full-featured social media application, our API has the tools you need to get started quickly and easily. Thank you for choosing us and we hope you enjoy using our API!</Typography>
                            <Button variant='contained' startIcon={<LanguageIcon />} className={classes.button}>Visit</Button>
                            <Button variant='contained' startIcon={<GitHubIcon />} className={classes.button}>Github</Button>
                        </Grid>
                    </Grid>
                </div>
                <div data-aos='fade-up'>
                    <Grid container justifyContent='flex-start' direction='row' spacing={2} className={classes.imgContainer}>
                        <Grid item xs={12} md={12} lg={6}>
                            <img alt='proj1-img' src={proj5} className={classes.proj}></img>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                        <Typography variant='h3' className={classes.projHeading}>Portfolio Template.</Typography>
                            <Typography variant='body1' className={classes.body}>My portfolio is built using React and Material UI, two powerful technologies that allow me to create fast and responsive user interfaces. Material UI is a popular design system that provides a wide range of pre-designed components, making it easy for me to quickly create a professional and cohesive look for a portfolio - template. On this website, you will find information about background, skills and expertise, and some examples of work. </Typography>
                            <Button variant='contained' startIcon={<LanguageIcon />} className={classes.button}>Visit</Button>
                            <Button variant='contained' startIcon={<GitHubIcon />} className={classes.button}>Github</Button>
                        </Grid>
                    </Grid>
                </div>
        </div>
    )
}

export default Projects;