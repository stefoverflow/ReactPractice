import React from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todoListData from "./todoListData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoListData,
    };
  }

  checkItem = (item) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === item.id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState(() => {
      return {
        todos: newTodos,
      };
    });
  };

  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map((item) => (
          <TodoItem key={item.id} item={item} checkItem={this.checkItem} />
        ))}
      </div>
    );
  }
}

export default App;
