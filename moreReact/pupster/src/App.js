import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'
import Discover from './components/Discover'
import Nav from './components/Nav'
import Search from './components/Search'

const App = () => (
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

export default App;
