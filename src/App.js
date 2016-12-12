import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addToDo, toggleToDo, setVisibilityFilter } from './actions/actions';

class App extends Component {
  componentWillMount(state) {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <h1>To-Do List:</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter,
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