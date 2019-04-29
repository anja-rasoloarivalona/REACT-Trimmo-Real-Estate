import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

import Home from './containers/home/Home';
import About from './containers/About/About';
import Properties from './containers/Properties/Properties';






class App extends Component {
  render() {
    return (

      <Layout>
            <Navbar />
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/properties" component={Properties}></Route>

      </Layout>
    )
  }
}


export default App;
