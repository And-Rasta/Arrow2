import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import NewEvent from './pages/NewEvent/NewEvent';
import Err404 from "./pages/Error404/Error404";
import Navbar from './components/Navbar/Navbar';
import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <Navbar />
          <div className="padMe">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/event/:id" component={Event} />
              <Route exact path="/newevent" component={NewEvent} />
              <Route component={Err404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;