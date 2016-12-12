import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addToDo, toggleToDo, setVisibilityFilter } from './actions/actions';
import ToDoForm from './components/addToDo';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    return this.props.todos.map((todo, index) => (
      <li key={index}>
        <ul>{todo.text}</ul>
      </li>
    ))
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List:</h1>
        {this.renderList()}
        <ToDoForm addToDo={this.props.addToDo} />
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