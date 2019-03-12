import React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { increment, decrement } from '../actions/actions';

const App = ({ counter, message, dispatch }) => {

  return (
    <div className="container">
      <div className="columns column is-12">
        <h1>Counter: {counter}</h1>
      </div>

      <br />

      <div className="buttons">
        <button onClick={() => dispatch(increment(1))} className="button is-primary">+1</button>
        <button onClick={() => dispatch(increment(2))} className="button is-danger">+2</button>
        <button onClick={() => dispatch(increment(3))} className="button is-info">+3</button>
      </div>
      <br />
      <div className="buttons">
        <button onClick={() => dispatch(decrement(1))} className="button is-success">-1</button>
        <button onClick={() => dispatch(decrement(2))} className="button is-warning">-2</button>
        <button onClick={() => dispatch(decrement(3))} className="button is-danger">-3</button>
      </div>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    message: "This is message from mapStateToProps",
    counter: state.counters || 'fuck you'
  }
}

const AppWithConnect = connect(mapStateToProps)(App);

export default AppWithConnect;