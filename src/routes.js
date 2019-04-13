import React from 'react';
import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home';
import ReminderList from './components/admin';
import ReminderEdit from './components/reminder';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route {...props} exact path="/" component={Home} />
        <Route {...props} exact path="/home" component={Home} />
        <Route {...props} exact path="/reminders" component={ReminderList} />
        <Route {...props} exact path="/reminders/edit/:id" component={ReminderEdit}/>
        <Route {...props} exact path="/reminders/edit/" component={ReminderEdit}/>
      </Switch>
    </Layout>
  );
};

export default Routes;