import React from 'react';
import { connect } from 'react-redux';
import { increment,decrement, reset } from '../redux/action ';

const Counter = ({ count, increment, decrement, reset }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);