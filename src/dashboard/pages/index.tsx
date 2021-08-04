import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboardPage';

interface IProps {
 match: any;
 location: any;
}
export const DashboardPage: React.FC<IProps> = () => {
 return (
  <Switch>
   <Route path="*" component={Dashboard} />
  </Switch>
 );
};

export default DashboardPage;
