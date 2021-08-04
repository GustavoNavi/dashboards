import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Dashboard from '../pages/dashboardPage';

function DashboardPage() {
 return (
  <BrowserRouter>
   <Switch>
    <Route path="/KaBuM/dashboard" component={Dashboard} />
    <Redirect from="*" to={`/KaBuM/dashboard`} />
   </Switch>
  </BrowserRouter>
 );
};

export default DashboardPage;
