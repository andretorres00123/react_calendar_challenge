import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ReminderList from './RemindersList';
import { compose, bindActionCreators } from 'redux';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import * as reminderActions  from '../../redux/actions/reminderActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './_Reminder.scss';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Reminder extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleDelete = () => {
    this.props.actions.cleanReminders();
  }
  render() {
    const {classes} = this.props;
    return (
      <div className="reminder-wrapper">
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={10}>
            <h1>Your Reminders</h1>
            <Grid container justify="flex-start">
              <Grid item xs={12} md={10} className='list-buttons'>
                <Button variant="contained" color="primary" className={classes.button}>
                  <Link to={'/reminders/edit/'}>
                    <span>Add Reminder</span>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={this.handleDelete}
                >
                  <span>Delete All</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10}>
            <ReminderList />
          </Grid>
        </Grid>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(reminderActions, dispatch)
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps),
    withStyles(styles),
  )(Reminder);

