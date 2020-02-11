import React, {Component} from 'react';
import './App.css';

// modules
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

// pages
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Events from './pages/Events';

// components
import Header from './components/navigation/Header';
import Footer from './components/Footer';
import AuthContext from './context/auth-context';

class App extends Component {
  state = {
    token:null,
    userId:null
  }

  login = (token,userId,tokenExpiration) => {
    this.setState({token:token,userId:userId});
  }
  logout = () => {
    this.setState({token:null,userId:null})
  }


  render() {
    return (
        <BrowserRouter>
          <AuthContext.Provider 
            value={{
                token:this.state.token, 
                userId:this.state.userId,
                login:this.login,
                logout:this.logout
                }}
              >
          <div className="wrap">
              <Header/>
              <Switch>
                {!this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && <Redirect from="/bookings" to="/auth" exact />}

                {!this.state.token && (
                <Route path="/auth" component={Auth}/>
                )}
                <Route path="/events" component={Events}/>
                {this.state.token && (
                <Route path="/bookings" component={Bookings}/>)}
                </Switch>
                <Footer/>
            </div>
            </AuthContext.Provider>
        </BrowserRouter>
    );
  }
}

export default App;
