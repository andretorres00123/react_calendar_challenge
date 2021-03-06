import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Calendar from '../calendar';
import './_Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <h1>Dashboard</h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <Calendar />
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default Home;