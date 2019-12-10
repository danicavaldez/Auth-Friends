import React from 'react';
import './App.css';
import { Link, Route, Switch } from "react-router-dom"
import Login from './components/Login'
import MyFriends from './components/MyFriends'
import PrivateRoute from './components/MyFriends'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Log In</Link>
        <Link to="/myfriends">Friends</Link>
      </nav>
      <Switch>
        <Route exact path = "/login" component={Login} />
        <PrivateRoute exact path="/myfriends" component={MyFriends} />
      </Switch>
    </div>
  );
}

export default App;
