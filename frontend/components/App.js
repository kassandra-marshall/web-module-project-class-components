import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor() {
    super();
    this.state= {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>Todo App</h1>
        <ul>
          {
            todos.map(todo => {
              return(<li>{todo.name} {todo.completed ? <span>Completed</span>: <span></span>}</li>)
            })
          }
        </ul>
        <form>
          <label>Add Tasks
            <input type="text" placeholder="tasks..." />
            <button>Add</button>
            <button>Clear Completed</button>
          </label>
        </form>
      </div>
    )
  }
}
