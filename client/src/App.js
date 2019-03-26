import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import NewEvent from "./pages/NewEvent/NewEvent";
import Err404 from "./pages/Error404/Error404";
// import Navbar from './components/Navbar/Navbar';
// import sideNav from './components/SideNav/sideNav'
import TopNav from './components/TopNav/TopNav';
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressArrowsAlt, faEdit } from "@fortawesome/pro-regular-svg-icons";

library.add(faCompressArrowsAlt,faEdit);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="text-center">
          <TopNav />
          <FontAwesomeIcon icon="edit" color="white"/>
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