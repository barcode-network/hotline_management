import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Profile from './screens/Profile';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './utils/PrivateRoute';
import CallerApp from './screens/Calls/Calls';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* <PrivateRoute component={() => {
            return (

              <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
              </Switch>

            )
          }} /> */}
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/calls" component={CallerApp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
