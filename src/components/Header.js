import React from 'react';
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    }); 
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbarMargin,
    marginBottom: '7em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5em',
    },
  },
    appbar: {
        backgroundColor: '#0a192f'
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tabItem: {
        color: '#64ffda',
        fontWeight: 'bold'
    },
    logo: {
        height: '7em',
        [theme.breakpoints.down('md')]: {
          height: '5.5em',
        },
        [theme.breakpoints.down('xs')]: {
          height: '4.5em',
        },
      },
    logoContainer: {
        padding: 0,
    },
    btn: {
        outlineColor: '#90E0EF',
        color: '#90E0EF',
        marginRight: '25px',
        marginLeft: '50px'
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      marginRight: '25px',
    },
    menuIcon: {
      height: '50px',
      width: '50px',
      color: '#90E0EF',
      [theme.breakpoints.down('xs')]: {
        height: '40px',
      }
    },
    drawer: {
      backgroundColor: '#21325E',
      width: '150px',
      
    },
    drawerItem: {
      color: '#90E0EF',
      fontFamily: 'Arial',
      textAlign: 'center',
      
    },
    aboutSection: {
      marginTop: '7.5em'
    }
}))



function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = useState(false);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const tabs = (
        <React.Fragment>
            <Tabs className={classes.tabContainer}>
                <Tab disableRipple className={classes.tabItem} label="01. About"/>
                <Tab disableRipple className={classes.tabItem} label="02. Skills"/>
                <Tab disableRipple className={classes.tabItem} label="03. Work"/>
                <Tab disableRipple className={classes.tabItem} label="04. Contact"/>
            </Tabs>
            <Button href="https://drive.google.com/file/d/1QDP6JBX2oWHZir71QRoo4FM_OBie1KYZ/view?usp=sharing" variant='outlined' color='primary' className={classes.btn}>Resume</Button>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {setOpenDrawer(false)}}
            divider
            button
            component={Link}
            disableTypography
          >
            <ListItemText className={clsx(classes.drawerItem, classes.aboutSection)}>About</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {setOpenDrawer(false);}}
            divider
            button
            component={Link}
            disableTypography
          >
            <ListItemText className={classes.drawerItem}>Skills</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {setOpenDrawer(false);}}
            divider
            button
            component={Link}
            disableTypography
          >
            <ListItemText className={classes.drawerItem}>Work</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {setOpenDrawer(false);}}
            divider
            button
            component={Link}
            disableTypography
          >
          <ListItemText className={classes.drawerItem}>Contact</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {setOpenDrawer(false);}}
            divider
            button
            component={Link}
            disableTypography
          >
          <ListItemText className={classes.drawerItem}>Resume</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
        disableRipple
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar disableGutters>
                    <Button
                        component={Link}
                        to="/"
                        disableRipple
                        className={classes.logoContainer}
                        >
                    </Button>
                        {matches ? drawer: tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    )
}

export default Header;