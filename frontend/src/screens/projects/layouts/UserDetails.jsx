import React from 'react'
import { Paper, Grid, Avatar, Typography, makeStyles } from '@material-ui/core'
import { LocationOn, MailOutline, Phone, Facebook, LinkedIn, Instagram, GitHub, Twitter } from '@material-ui/icons';
import './UserDetails.css'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    sidebar: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F0EFEF',
    },
    title: {
        color: '#000'
    },
    subtitle: {
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section__title: {
        color: '#000',
        letterSpacing: '.35rem',
        textTransform: 'uppercase',
        margin: '1rem 0 1rem 0'
    }
}));

const UserDetails = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={3}>
          <Paper className={classes.sidebar}>
              <Avatar src='https://res.cloudinary.com/greedsource/image/upload/v1626308853/profile-1_esjhzg.jpg' className={classes.avatar} />
              <Typography variant="h5" className={classes.title}>
                Joel <b>García</b>
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Desarrollador backend
              </Typography>
              <span className='home__information'>
                <LocationOn className='home__icon' /> México
              </span>
              <span className="home__information">
                <a href="mailto:joelgarciia95@outlook.com" className="home__link"><MailOutline className='home__icon' /> joelgarciia95@outlook.com</a>
              </span>
              <span className="home__information">
                <Phone className='home__icon' /> +52 (999) 138-87-48
              </span>
              <Typography variant="h6" className={classes.section__title}>
                Redes Sociales
              </Typography>
              <span className="home__information">
                <a href="https://www.linkedin.com/in/greedsource" rel="noreferrer" target="_blank" className="home__link"><LinkedIn className='home__icon' /> Joel Garcia</a>
              </span>
              <span className="home__information">
                <a href="https://www.facebook.com/GreedSource" rel="noreferrer" target="_blank" className="home__link"><Facebook className='home__icon' /> Joel Garcia</a>
              </span>
              <span className="home__information">
                <a href="https://twitter.com/GreedSource" rel="noreferrer" target="_blank" className="home__link"><Twitter className='home__icon' /> Joel Garcia</a>
              </span>
              <span className="home__information">
                <a href="https://www.instagram.com/greedsource" rel="noreferrer" target="_blank" className="home__link"><Instagram className='home__icon' /> Joel Garcia</a>
              </span>
              <span className="home__information">
                <a href="https://github.com/GreedSource" rel="noreferrer" target="_blank" className="home__link"><GitHub className='home__icon' /> Joel Garcia</a>
              </span>
          </Paper>
        </Grid>
    )
}

export default UserDetails