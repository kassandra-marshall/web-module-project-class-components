import React from 'react'

export default class Form extends React.Component {
  render() {
    const handleChange = e => {
      preventDefault()
    }
    const handleSubmit = e => {
      preventDefault()
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>Add Tasks
          <input type="text" placeholder="tasks..."/>
          <button>Add</button>
        </label>
      </form>
    )
  }
}
