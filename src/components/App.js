import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

const App = ({ counter, message }) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter: {counter}</h1>
        <br/>
        <div>
          <button className="button is-primary">+1</button> 
          <button className="button is-danger">+2</button>
          <button className="button is-info">+3</button>
        </div>
        <br/>
        <div>
          <button className="button is-success">-1</button>
          <button className="button is-warning">-2</button>
          <button className="button is-danger">-3</button>
        </div>
      </header>
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