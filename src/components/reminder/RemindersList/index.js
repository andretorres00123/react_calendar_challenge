import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './_Reminder.scss';

class Reminder extends Component {

  getRemindersList(reminders){
    return reminders.map((reminder) => {
      return (
        <Grid item xs={12}>
          <Link to={`/reminder/${reminder.id}`}>
            {reminder.title}
          </Link>
          <p>{reminder.startDate}</p>
          <p>{reminder.color}</p>
        </Grid>
      );
    });
  }

  render() {
    const {data} = this.props;
    return (
      <Grid container justify="center" spacing={16}>
        {this.getRemindersList(data)}
      </Grid>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    'data': state.reminder.list || [],
    'loading': state.reminder.loading,
  };
};

export default connect(mapStateToProps)(Reminder);

