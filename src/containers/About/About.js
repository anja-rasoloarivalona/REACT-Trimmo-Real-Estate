import React, { Component } from 'react';
import classes from './About.css';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        hello from about
      </div>
    )
  }
}

export default About;
