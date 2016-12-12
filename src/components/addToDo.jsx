import React from 'react';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.textChange = this.textChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = '';
  }

  textChange(event) {
    this.textInput = event.target.value;
    console.log(this.textInput);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToDo(this.textInput);
  }

  render() {
    return (
      <form>
        <input type="text" name="to-do" onChange={this.textChange} />
        <input type="submit" value="Add To-Do" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default ToDoForm
