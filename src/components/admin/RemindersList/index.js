import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ReminderList extends Component {

  getRemindersList(reminders){
    return reminders.map((reminder) => {
      return (
        <Grid item xs={12} key={reminder.id}>
          <Link to={`/reminders/edit/${reminder.id}`}>
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
    console.log(data);
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ?
              data.map((reminder, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link to={`/reminders/edit/${reminder.id}`}>
                        {reminder.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/reminders/edit/${reminder.id}`}>
                        {reminder.startDate.toString()}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/reminders/edit/${reminder.id}`}>
                        {reminder.color}
                    </Link>
                  </TableCell>
                </TableRow>
              )) :null
            }
          </TableBody>
        </Table>
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

export default connect(mapStateToProps)(ReminderList);

