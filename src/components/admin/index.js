import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ReminderList from './RemindersList';
import Button from '@material-ui/core/Button';
import './_Reminder.scss';

class Reminder extends Component {
  render() {
    return (
      <div className="reminder-wrapper">
        <Grid container justify="center">
          <Grid item xs={12} md={10}>
            <h1>Your Reminders</h1>
            <Button>
                <Link to={'/reminders/edit/'}>
                    Add Reminder +
                </Link>
            </Button>
          </Grid>
          <Grid item xs={12} md={10}>
            <ReminderList />
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default Reminder;