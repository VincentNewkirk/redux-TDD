import React from 'react';

class ToDoForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="to-do" />
        <input type="submit" value="Add To-Do" onClick={this.props.addToDo} />
      </form>
    )
  }
}

export default ToDoForm
