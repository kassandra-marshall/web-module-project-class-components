import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>

          <form>
            <label>Add Tasks
              <input type="text" placeholder="tasks..." />
              <button>Add</button>
              <button>Clear Completed</button>
            </label>
          </form>
        </ul>
      </div>
    )
  }
}
