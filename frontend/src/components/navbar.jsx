import React from 'react'
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import AppbarMenu from './menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    appbar: {
        backgroundColor: '#333',
        position: 'sticky',
    }
}));
const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <AppbarMenu />
                <Typography variant="h6" className={classes.title}>
                    Portafolio de proyectos
                </Typography>
                <Button component={Link} to={'/login'} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar