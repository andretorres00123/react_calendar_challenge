import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './_Header&Footer.scss';
class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          'backgroundColor': '#231F20',
          'boxShadow': 'none',
          'padding': '10px 0px',
          'borderBottom': '2px solid #799900'
        }}
      >
        <Toolbar style={{'display': 'flex'}} className="navbar-header">
          <Link to="/home">
            <Button style={{'color': '#8c888b'}}>Home</Button>
          </Link>
          <Link to="/reminders">
            <Button style={{'color': '#8c888b'}}>Reminder</Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;