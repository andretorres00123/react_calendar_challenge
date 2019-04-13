import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { ViewState } from "@devexpress/dx-react-scheduler";
import moment from 'moment';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,} from '@devexpress/dx-react-scheduler-material-ui';

  const Appointment = ({children, style, data, ...restProps}) => {
    console.log(children, style, restProps);
    return (
      <Appointments.Appointment
        {...restProps}
        style={{
          ...style,
          'backgroundColor': data.color,
          'borderRadius': '8px',
        }}
      >
        {children}
      </Appointments.Appointment>
    );
  };

 class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'currentDate': moment().format('YYYY-MM-DD HH:mm'),
    };
  }

  render() {
    const {currentDate} = this.state;
    const {data, loading} = this.props;
    console.log(data);
    if (loading) {
      return null;
    }
    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate={currentDate}
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <Appointments
            appointmentComponent={Appointment}
          />
        </Scheduler>
      </Paper>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    'data': state.reminder.list || [],
    'loading': state.reminder.loading,
  };
};

export default connect(mapStateToProps)(Calendar);
