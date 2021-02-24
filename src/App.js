import React from 'react';

//Frameworks
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Wrappers
import PageWrapper from './components/wrappers/PageWrapper';
import AdminWrapper from './components/wrappers/AdminWrapper';
import AuthWrapper from './components/wrappers/AuthWrapper';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Admin from './components/pages/Admin';

//CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Route
          exact={true}
          path="/"
          render={props => {
            return(
              <div>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </div>
            )
          }}
        />
        <Route
          exact={true}
          path="/about"
          render={props => {
            return(
              <div>
                <PageWrapper>
                  <About />
                </PageWrapper>
              </div>
            )
          }}
        />
        <Route
          exact={true}
          path="/user"
          render={props => {
            return(
              <div>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </div>
            )
          }}
        />
        <Route
          exact={true}
          path="/admin"
          render={props => {
            return(
              <div>
                <AdminWrapper>
                  <Admin />
                </AdminWrapper>
              </div>
            )
          }}
        />
        <Route
          exact={true}
          path="/auth/login"
          render={props => {
            return(
              <div>
                <AuthWrapper>
                  <Login />
                </AuthWrapper>
              </div>
            )
          }}
        />
        <Route
          exact={true}
          path="/auth/signup"
          render={props => {
            return(
              <div>
                <AuthWrapper>
                  <Signup />
                </AuthWrapper>
              </div>
            )
          }}
        />
      </Router>
    </div>
  );
}

export default App;
