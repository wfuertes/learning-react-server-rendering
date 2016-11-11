import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Hello World');
  }
  
  render() {
    return (
      <div className="home-page">
        <p> Welcome to the server side rendering using react/redux and react-router</p>
        <button onClick={this.handleClick}>Hello World</button>
      </div>
    );
  }
}

export default connect()(HomePage);
