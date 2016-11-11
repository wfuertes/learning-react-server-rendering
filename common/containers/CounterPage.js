import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions';

class CounterPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Counter {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
