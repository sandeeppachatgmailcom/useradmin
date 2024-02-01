// YourReactComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { increment } from './actions';

const YourReactComponent = ({ someData, counter, dispatchIncrement }) => {
  return (
    <div>
      <p>{someData}</p>
      <p>Counter: {counter}</p>
      <button onClick={dispatchIncrement}>Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  someData: state.someData,
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchIncrement: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(YourReactComponent);
