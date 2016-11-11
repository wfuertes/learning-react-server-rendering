import React from 'react';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-page">
        <p> This is the about page that's all! </p> 
      </div>
    );
  }
}

export default connect()(AboutPage);
