import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Athletes from './components/pages/Athletes';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Sponsors from './components/pages/Sponsors';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/athletes' component={Athletes} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
