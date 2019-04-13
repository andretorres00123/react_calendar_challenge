import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose, bindActionCreators } from 'redux';
import uuid from 'uuid';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import * as reminderActions  from '../../../redux/actions/reminderActions';
import { SketchPicker } from 'react-color';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

const styles = theme => ({
  'container': {
    'display': 'flex',
    'flexWrap': 'wrap',
  },
  'textField': {
    'marginLeft': theme.spacing.unit,
    'marginRight': theme.spacing.unit,
    'width': 250,
  },
  'button': {
    'margin': theme.spacing.unit,
  },
});

class ReminderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'dateTimeValue': '2019-04-13T00:00',
      'colorValue': '',
      'titleValue': '',
      'pageTitle': '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {
    const {data, reminderId} = this.props;
    console.log(this.props);

    if(!reminderId) {
      this.setState({
        'pageTitle': 'Add New Reminder',
      });
    } else {
      const reminder = data.find((reminder) => reminder.id === reminderId);
      this.setState({
        'pageTitle': 'Edit Reminder',
        'titleValue': reminder.title,
        'colorValue': reminder.color,
        'dateTimeValue': reminder.startDate,
      });
    }
  }

  submitForm(event) {
    event.preventDefault();
    const {dateTimeValue, colorValue, titleValue} = this.state;
    this.props.actions.createNewReminder({
      'startDate': moment(dateTimeValue).format('YYYY-MM-DD HH:mm'),
      'endDate': moment(dateTimeValue).endOf('day').format('YYYY-MM-DD HH:mm'),
      'color': colorValue,
      'title': titleValue,
      'id': uuid.v4(),
    });
  }

  handleTitleChange(event) {
    this.setState({
      'titleValue': event.target.value,
    });
  }

  handleDateChange(event) {
    console.log(event.target.value);
    this.setState({
      'dateTimeValue': event.target.value,
    });
  }

  handleColorChange(color) {
    this.setState({
      'colorValue': color.hex,
    });
  }
  
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} onSubmit={this.submitForm}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Reminder Title"
                className={classes.textField}
                value={this.state.name}
                onChange={(event) => this.handleTitleChange(event)}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="startDateTime"
                label="Start Date" 
                type="datetime-local"
                defaultValue='2019-04-13T00:00'
                onChange={(event) => this.handleDateChange(event)}
                className={classes.textField}
                InputLabelProps={{
                  'shrink': true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <p>Select a color for reminder</p>
              <SketchPicker
                color={ this.state.colorValue}
                onChangeComplete={this.handleColorChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" className={classes.button} onClick={this.submitForm}>Save</Button>
            </Grid>
          </Grid>
      </form>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    'data': state.reminder.list || [],
    // 'reminderId': ownProps.params.id || null,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(reminderActions, dispatch)
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps),
    withStyles(styles)
  )(ReminderForm);

