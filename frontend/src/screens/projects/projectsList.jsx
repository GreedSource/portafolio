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
    margin: '.35rem 0 .35rem 0'
  }

}));

const ProjectsList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <UserDetails />
        <Grid item xs={12} sm={9}>
          {
            [...new Array(25)].map((i, k) => {
              return <Paper className={classes.paper} key={k}>xs=12 sm=6</Paper>
            })
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsList