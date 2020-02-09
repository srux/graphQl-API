import React from 'react';
import './App.css';

// modules
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

// pages
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Events from './pages/Events';

// components
import MainNav from './components/navigation/Main-nav';

function App() {
  return (
      <BrowserRouter>
        <div className="wrap">
            <MainNav/>
            <Switch>
              <Redirect path="/" to="/auth" exact />
                <Route path="/auth" component={Auth}/>
                <Route path="/events" component={Events}/>
                <Route path="/bookings" component={Bookings}/>
            </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
