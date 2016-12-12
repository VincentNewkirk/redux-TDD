import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { addToDo, toggleToDo, setVisibilityFilter } from './actions/actions';

class App extends Component {
  componentWillMount(state) {
    console.log(state);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.VisibilityFilter,
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (id) => {
      dispatch(toggleToDo(id))
    },
    addToDo: (text) => {
      dispatch(addToDo(text))
    },
    setFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)