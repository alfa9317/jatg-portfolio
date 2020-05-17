import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/images/logo.png';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 20 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '21px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '11px'
        }
    },
    logo: {
        height: '80px',
        margin: 'auto',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            height: '70px'
        }
    },
    logoContainer: {
        padding: '0',
        '&:hover': {
            backgroundColor: 'transparent'
        },
        margin: '3px 10px 3px 150px',
        [theme.breakpoints.down('md')]: {
            margin: '3px 0px 3px 0px',
            display: 'block',
            marginLeft: '38vw'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '3px 0px 3px 0px',
            display: 'block',
            marginLeft: '31vw'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '3px 0px 3px 0px',
            display: 'block',
            marginLeft: '28vw'
        }
    },
    tabContainer: {
        marginLeft: 'auto',
        marginRight: '60px'
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'  
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px'
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover':{
            opacity: 1
        }
    },
    drawerIcon: {
        height:'50px',
        width:'50px'
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover':{
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        }
        
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

export default function Header(props){
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value,setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    

    const routes = [{name: 'Home', link: '/',activeIndex: 0},
    {name: 'My Works', link: '/myworks',activeIndex: 1},
    {name: 'Contact Me', link: '/contact',activeIndex: 2}]

    useEffect(() => {

        routes.forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if(value !== route.activeIndex) {
                        setValue(route.activeIndex)
                    }
                    break;
                default:
                    break;
            }
        })

    }, [value, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} indicatorColor='primary' className={classes.tabContainer}>
                {routes.map((route,index) => (
                    <Tab key={`${route}${index}`} className={classes.tab} component={Link} disableRipple to={route.link} label={route.name} />
                ))}
            </Tabs>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{paper: classes.drawer}}>
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem divider key={`${route}${route.activeIndex}`} button component={Link} to={route.link} selected={value === route.activeIndex} classes={{selected: classes.drawerItemSelected}} onClick={() => {setOpenDrawer(false);setValue(route.activeIndex)}}>
                            <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to='/' disableRipple className={classes.logoContainer} onClick={()=>setValue(0)}> 
                            <img alt='Company logo' className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}