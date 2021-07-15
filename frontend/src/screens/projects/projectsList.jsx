import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import UserDetails from './layouts/UserDetails'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2rem'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));

const ProjectsList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <UserDetails />
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsList