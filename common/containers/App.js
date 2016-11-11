import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">

        <div className="app-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/counter">Counter</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="app-children">
          {this.props.children}
        </div>
      </div>
    );
  };
}

export default connect()(App)
