import React, { Component } from 'react';


import './App.css';

import Layout from './components/Layout/Layout';







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
