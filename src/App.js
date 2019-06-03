import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

import Home from './containers/home/Home';
import Properties from './containers/Properties/Properties';
import Details from './containers/Details/Details';






class App extends Component {
  render() {
    return (

      <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/properties" component={Properties}></Route>
              <Route path="/details/:id" render={props => <Details {...props}/>}></Route>
              <Route component={Home}/>
            </Switch>
            <Footer />
      </Layout>
    )
  }
}


export default App;


/*
<Route path={`/details/:id`} render={props => <Details {...props}/>}></Route>*/