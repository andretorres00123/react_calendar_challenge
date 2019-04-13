import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ReminderForm from './form';
import './_Reminder.scss';

class Reminder extends Component {
  render() {
    return (
      <div className="reminder-wrapper">
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <h1>New Reminder</h1>
          </Grid>
          <Grid item xs={12} md={10}>
            <ReminderForm />
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default Reminder;