import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAdd(this.state.input);
  }
  handleChange = (e) => {
    this.setState({...this.state, input: e.target.value});
  }
  render() {
    return (
      <form>
        <label>Add Tasks
          <input onChange={this.handleChange} type="text" placeholder="tasks..."/>
          <button onClick={this.handleSubmit}>Add</button>
        </label>
      </form>
    )
  }
}
