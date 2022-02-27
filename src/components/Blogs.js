import React, {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Aos from 'aos';
import "aos/dist/aos.css";
import blog1 from '../assets/blog1.png';

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
    root: {
        maxWidth: 345,
        [theme.breakpoints.down('xs')] : {
            maxWidth: 300
        },
        backgroundColor: '#90E0EF'
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
    blogHeading: {
        textAlign: 'center',
        fontFamily: 'Lato',
        fontWeight: 'bold'
    },
    body: {
        fontFamily: 'Lato',
    }
}))

function Blogs() {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({duration : 2000})
      }, [])

    return (
        <div data-aos='fade-up' className={classes.aboutContainer}>
            <Typography variant='h1' className={classes.heading}>Read my blogs</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                       <CardActionArea>
                           <CardMedia component="img" alt="blog1-image" height="240" image={blog1}/>
                           <CardContent>
                               <Typography className={classes.blogHeading} variant="h4">React Hooks</Typography>
                               <Typography className={classes.body} variant='body1'>Nunc volutpat vulputate velit ac mollis. Sed ultricies maximus purus, rhoncus vulputate purus commodo non. Nulla quis euismod ante. Suspendisse potenti. Cras eget blandit ipsum, a ornare elit Nunc porta lorem ac orci posuere elementum. Nunc eget tellus gravida, malesuada metus quis, sollicitudin ante.....</Typography>
                           </CardContent>
                       </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                       <CardActionArea>
                           <CardMedia component="img" alt="blog1-image" height="240" image={blog1}/>
                           <CardContent>
                               <Typography className={classes.blogHeading} variant="h4">React Hooks</Typography>
                               <Typography variant='body1'>Nunc volutpat vulputate velit ac mollis. Sed ultricies maximus purus, rhoncus vulputate purus commodo non. Nulla quis euismod ante. Suspendisse potenti. Cras eget blandit ipsum, a ornare elit Nunc porta lorem ac orci posuere elementum. Nunc eget tellus gravida, malesuada metus quis, sollicitudin ante.....</Typography>
                           </CardContent>
                       </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={classes.root}>
                       <CardActionArea>
                           <CardMedia component="img" alt="blog1-image" height="240" image={blog1}/>
                           <CardContent>
                               <Typography className={classes.blogHeading} variant="h4">React Hooks</Typography>
                               <Typography variant='body1'>Nunc volutpat vulputate velit ac mollis. Sed ultricies maximus purus, rhoncus vulputate purus commodo non. Nulla quis euismod ante. Suspendisse potenti. Cras eget blandit ipsum, a ornare elit Nunc porta lorem ac orci posuere elementum. Nunc eget tellus gravida, malesuada metus quis, sollicitudin ante.....</Typography>
                           </CardContent>
                       </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Blogs;