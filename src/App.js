import React from 'react';
import {BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom"
import './App.css';
import Nav from './components/Navigation/Nav';
import Main from './components/MainContent';
import MainContent from './components/MainContent';
import * as auth from './api/logins';
import * as token from './helper/LocalStore';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUserId: null,
      loading: true,
    }

    this.loginUser = this.loginUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
  }

  async componentDidMount () {
    if (token.getToken()) {
      const { person } = await auth.profile();
      this.setState({ currentUserId: person._id, loading: false });
    } else {
      this.setState({ loading: false })
    }
  }

  async loginUser (person) {
    const response = await auth.login(person)
    await token.setToken(response)
    
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.person._id})
  }

  logoutUser () {
    token.clearToken()
    this.setState({ currentUserId: null})
  }

  async signupUser (person) {
    const response = await auth.signup(person)
    await token.setToken(response)
    
    const profile = await auth.profile()
    this.setState({ currentUserId: profile.person._id})
  }

  render () {
    const { currentUserId, loading } = this.state
    if (loading) return <span />

  return (
    <Router>
    {/* <Header /> */}
    <Nav
      currentUserId={currentUserId}
      logoutUser={this.logoutUser} />
    <Switch>
      <Route path='/login' exact component={() => {
        return currentUserId ? <Redirect to='/person' /> : <Login onSubmit={this.loginUser} />
      }} />
      <Route path='/signup' exact component={() => {
        return currentUserId ? <Redirect to='/person' /> : <Signup onSubmit={this.signupUser} />
      }} />

      {/* <Route path='/person' render={() => {
        return currentUserId
          ? <UsersContainer currentUserId={currentUserId} />
          : <Redirect to='/login' />
      }} /> */}

      <Redirect to='/logins' />
    </Switch>
  </Router>
  );
}
}

export default App;
