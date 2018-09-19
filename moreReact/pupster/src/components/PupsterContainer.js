import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Discover from './Discover'
import Nav from './Nav'
import Search from './Search'

class PupsterContainer extends Component {
    render() {
      return (
        <Router>
            <div>
                <Nav>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/discover" component={Discover} />
                    <Route exact path="/search" component={Search} />
                </Nav>
            </div>
        </Router>
      );
    }
  }
  
  export default PupsterContainer;