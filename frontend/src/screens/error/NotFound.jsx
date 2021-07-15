import React from 'react'
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import logo from '../../logo.svg';
import '../../App.css';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '30%',
        marginLeft: '35%',
        marginTop: '2rem'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            Error 404
            </Typography>
            <Typography variant="h5" component="h2">
                Page Not Found
            </Typography>
            </CardContent>
        </Card>
    )
}

export default NotFound